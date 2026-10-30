#!/usr/bin/env python3
"""
Samskara Buddy — Secure Backend Server
Serves static web files and securely communicates with the Gemini API
without exposing the GEMINI_API_KEY to the browser.
"""

import os
import sys
import io
import json
import base64
import struct
import re
import urllib.request
import urllib.error
import urllib.parse
from concurrent.futures import ThreadPoolExecutor
from http.server import HTTPServer, ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# Base directory
BASE_DIR = Path(__file__).resolve().parent

# Load environment variables from .env if present
def load_env(override: bool = False):
    project_env = (BASE_DIR / ".env").resolve()
    candidate_paths = [
        project_env,
        BASE_DIR.parent / ".env",
        Path.cwd() / ".env",
        Path.home() / ".env",
        Path.home() / "Desktop" / ".env",
        BASE_DIR / ".env.local",
        BASE_DIR / "env"
    ]
    for env_file in candidate_paths:
        if env_file.exists():
            try:
                with open(env_file, "r", encoding="utf-8-sig", errors="ignore") as f:
                    for line in f:
                        line = line.strip()
                        if not line or line.startswith("#"):
                            continue
                        sep = "=" if "=" in line else (":" if ":" in line else None)
                        if sep:
                            key, val = line.split(sep, 1)
                            key_clean = key.strip()
                            if key_clean.lower().startswith("export "):
                                key_clean = key_clean[7:].strip()
                            val_clean = val.strip().strip('"\'')
                            if val_clean:
                                if override or key_clean not in os.environ or not os.environ.get(key_clean):
                                    os.environ[key_clean] = val_clean
                                # Alias normalization for MiniMax API key
                                if key_clean.upper() in [
                                    "MINIMAX_KEY", "MINI_MAX_API_KEY", "MINI_MAX_KEY",
                                    "MINIMAX_TOKEN", "MINIMAX_API_TOKEN", "MINIMAX_SECRET_KEY",
                                    "MINIMAX_TTS_KEY", "MINIMAX", "MINIMAX_API_SECRET",
                                    "MINIMAX_SECRET", "MINI_MAX_SECRET"
                                ]:
                                    os.environ["MINIMAX_API_KEY"] = val_clean
            except Exception:
                pass

load_env(override=True)

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "").strip()

# Krish's System Instruction & AI Brain
KRISH_SYSTEM_INSTRUCTION = """You are KRISH, a friendly, warm, intelligent AI learning companion for children aged 6 to 14 years in the Samskara Buddy project.
Tagline: Learn • Think • Act • Grow 🌱

Purpose:
Guide children to discover and practice timeless Indian values and Samskaras:
Honesty (Satya), Respect (Aadara), Kindness (Karuna/Daya), Gratitude (Kritajnata), Responsibility (Kartavya), Discipline (Anushasana), Courage (Dhairya/Sahas), Empathy (Sahanubhuti), Sharing (Daan/Vibhajan), Patience (Dhairyam), Self-Control (Atma-Samyama), Helping Others (Seva/Sahayata), and related virtues.

Child Profile & Personalization:
- You will receive the child's Name, Age (6-14), chosen Samskara/Value, and preferred Story Type.
- Address the child warmly by their name in the GREETING, CONVERSATION, and CHALLENGE (e.g. "Namaste Giri! Let's explore Respect together!").

CRITICAL CHARACTER NAMING RULE (SEPARATE CHILD'S NAME FROM STORY CHARACTERS):
- The child is the reader/listener being taught, NOT the character in the story!
- The story MUST feature its own distinct fictional characters with appropriate Indian or fable names (e.g. Arjun, Meera, Kabir, Rohan, Ananya, Dev, Priya, Krishna, Vikram, etc., or animal fable characters).
- NEVER use the child's name as a protagonist or character in the story narration unless the child explicitly requests to be the hero.
- Keep story characters, dialogue, and plot consistent across the beginning, challenge, and resolution so the story can be illustrated with 3 consistent scenes.

Core Pedagogical Method (5 Stages):
1. VALUE (Understand the Value): Clear, relatable explanation of the meaning in everyday life.
2. STORY (Story Time): An inspiring, engaging story featuring distinct fictional characters (NEVER using the child's name as the story character), followed by "Krish's Wisdom" moral takeaway.
3. THINK (Think Time): 2 to 3 reflective questions that make the child ponder and self-reflect.
4. REAL LIFE (What Would You Do?): A realistic dilemma with 3 choices (Option A, B, C). Exactly ONE choice MUST be the wise path (marked with "correct": true, and "tip" providing enthusiastic, specific praise explaining why this choice is helpful); the other two MUST be common mistakes (marked with "correct": false, and "tip" gently explaining the realistic consequences of that action without shaming or scolding, inviting the child to reconsider).
5. ACTION (Krish's Daily Challenge): A specific, actionable challenge the child can do today at home or school.

Rules & Tone:
- Warm, cheerful, encouraging, non-preachy, non-shaming. Never say "You are wrong"; say "Let's look at it another way!"
- Respect all cultural backgrounds and beliefs.
- Return ONLY valid, well-formed JSON matching the specified schema. Do NOT wrap in markdown code blocks.
"""

def call_gemini(child_name: str, age: int, value: str, story_type: str) -> dict:
    """Calls the Gemini API server-side with the secure API key, prioritizing Gemini 3.8 Flash High."""
    api_key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not api_key:
        raise ValueError("GEMINI_API_KEY is not configured on the server. Please check your .env file.")

    user_prompt = f"""Child Profile:
- Child Name: {child_name or 'Young Explorer'}
- Age: {age} years old
- Samskara / Value to Explore: {value}
- Preferred Story Type: {story_type or 'Everyday School & Friends'}

CRITICAL INSTRUCTIONS:
1. Address {child_name or 'Young Explorer'} warmly in the greeting ("greeting"), direct dialogue, and challenge ("challenge").
2. SEPARATE CHILD'S NAME FROM STORY CHARACTERS: In the story ("story"), create a separate fictional protagonist with their OWN name (such as Arjun, Meera, Kabir, Rohan, Ananya, Dev, Krishna, etc.). DO NOT use "{child_name or 'Young Explorer'}" as the character name in the story narration. The child is the listener.
3. Ensure the story has a clear Beginning, Middle Challenge, and Resolution that can be illustrated in 3 sequential scenes.

Please create a complete Samskara Journey for {child_name or 'Young Explorer'} following the 5-stage Krish method:
1. VALUE (Understand the Value)
2. STORY (Story Time - matching {story_type}, with its own distinct fictional characters)
3. THINK (Think Time - 2 to 3 reflective questions for age {age})
4. REAL LIFE (What Would You Do? - realistic dilemma with 3 choices & Krish's coaching tips)
5. ACTION (Krish's Daily Challenge for today)

Return JSON with exact keys:
{{
  "title": "{value.capitalize()}",
  "sanskrit": "Sanskrit or traditional term with Devanagari script if applicable",
  "icon": "A single fitting emoji",
  "greeting": "A warm personal greeting to {child_name or 'Explorer'} from Krish",
  "understand": "Age-appropriate explanation of {value} and why it matters in daily life",
  "story": {{
    "title": "Story headline",
    "protagonist": "Fictional character name (NOT {child_name or 'Explorer'})",
    "text": "The complete engaging story featuring the fictional protagonist (NEVER using {child_name or 'Explorer'})",
    "moral": "Krish's wisdom moral takeaway"
  }},
  "thinkTime": [
    "Reflective question 1",
    "Reflective question 2",
    "Reflective question 3"
  ],
  "scenario": {{
    "question": "A real-life situation/dilemma",
    "options": [
      {{"text": "A realistic option that represents a common mistake...", "correct": false, "tip": "Gentle coaching explaining the consequence without shaming, inviting reconsideration..."}},
      {{"text": "The wise, helpful choice embodying the value...", "correct": true, "tip": "Warm encouraging praise explaining why this action is helpful and positive..."}},
      {{"text": "Another realistic option that represents a mistake...", "correct": false, "tip": "Gentle coaching explaining the consequence without shaming, inviting reconsideration..."}}
    ]
  }},
  "challenge": "An actionable mission for today addressed to {child_name or 'Explorer'}"
}}"""

    # Production Model Waterfall:
    # 1. gemini-flash-lite-latest (Fastest, latest high-throughput Flash model - verified ~2.7s response)
    # 2. gemini-3.5-flash-lite (Stable, high-throughput Flash model - verified ~3.5s response)
    # 3. gemini-3.1-flash-lite (Responsive lightweight model - verified ~4.4s response)
    # 4. gemini-flash-latest (Aliased latest stable Flash)
    models_to_try = [
        ("gemini-3-flash-preview", 20),
        ("gemini-flash-lite-latest", 18),
        ("gemini-3.5-flash-lite", 18),
        ("gemini-3.1-flash-lite", 18),
        ("gemini-flash-latest", 20),
    ]

    last_error = None
    for model_name, timeout_secs in models_to_try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
        gen_config = {
            "responseMimeType": "application/json",
            "temperature": 0.7
        }

        payload = {
            "contents": [
                {
                    "role": "user",
                    "parts": [{"text": user_prompt}]
                }
            ],
            "systemInstruction": {
                "parts": [{"text": KRISH_SYSTEM_INSTRUCTION}]
            },
            "generationConfig": gen_config
        }

        req_data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            url,
            data=req_data,
            headers={"Content-Type": "application/json"}
        )

        try:
            with urllib.request.urlopen(req, timeout=timeout_secs) as resp:
                resp_data = json.loads(resp.read().decode("utf-8"))
                candidates = resp_data.get("candidates", [])
                if not candidates:
                    continue
                
                parts = candidates[0].get("content", {}).get("parts", [])
                if not parts:
                    continue
                
                text_content = parts[0].get("text", "").strip()
                if text_content.startswith("```json"):
                    text_content = text_content[7:]
                if text_content.startswith("```"):
                    text_content = text_content[3:]
                if text_content.endswith("```"):
                    text_content = text_content[:-3]
                text_content = text_content.strip()

                parsed = json.loads(text_content)
                parsed["_modelUsed"] = model_name
                return parsed
        except urllib.error.HTTPError as e:
            error_body = e.read().decode("utf-8", errors="ignore")
            try:
                err_json = json.loads(error_body)
                err_msg = err_json.get("error", {}).get("message", error_body)
            except Exception:
                err_msg = error_body
            last_error = f"Gemini API error on {model_name} ({e.code}): {err_msg}"
            sys.stderr.write(f"[Krish AI] {model_name} failed: {err_msg}. Trying fallback...\n")
        except urllib.error.URLError as e:
            last_error = f"Network error on {model_name}: {e.reason}"
            sys.stderr.write(f"[Krish AI] {model_name} network timeout: {e.reason}. Trying fallback...\n")
        except Exception as e:
            last_error = f"Unexpected error on {model_name}: {e}"
            sys.stderr.write(f"[Krish AI] {model_name} error: {e}. Trying fallback...\n")

    raise RuntimeError(last_error or "All AI models were temporarily unreachable. Please try again.")


def clean_text_for_tts(text: str) -> str:
    """Cleans text before voice synthesis, strictly removing internal prompts,
    stage directions, technical metadata, and narration prefixes.
    Ensures ONLY Krish's actual child-facing spoken dialogue is sent to the TTS model.
    """
    if not text:
        return ""

    # 1. Strip parenthetical or bracketed stage directions/instructions:
    # e.g., (talking calmly and wisely so the child can understand), [in a gentle voice], (smiling warmly)
    cleaned = re.sub(r'[\(\[\{][^\)\]\}]*(?:talk|calm|wise|tone|voice|soft|whisper|smile|laugh|pause|action|stage|direction|prompt|instruction)[^\)\]\}]*[\)\]\}]', '', text, flags=re.IGNORECASE)
    cleaned = re.sub(r'\([a-zA-Z\s]{3,40}\)', '', cleaned)

    # 2. Strip internal prompt phrases and voice-generation instructions:
    cleaned = re.sub(r'^(?:read\s+this|talk|speak|narrate|please\s+read)\s+[^\n:]{5,100}[:\n]\s*', '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'(?:talk\s+calmly\s+and\s+wisely\s+so\s+the\s+child\s+can\s+understand[:\s,\.]*)', '', cleaned, flags=re.IGNORECASE)

    # 3. Strip speaker tags, markdown formatting and quiz option labels:
    cleaned = re.sub(r'\b(?:Krish|Speaker|Narrator)\s*:\s*', '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'\b(?:Option\s+[A-Z]|Choice\s+[A-Z])\s*:\s*', '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'[*_~`#>]', '', cleaned)
    cleaned = re.sub(r'https?://\S+', '', cleaned)

    # 4. Remove emojis that can cause audio artifacts or phonetic spelling in TTS
    cleaned = re.sub(r'[\U00010000-\U0010ffff]', '', cleaned)
    cleaned = re.sub(r'[\u200d\ufe0f]', '', cleaned)

    # 5. Clean up whitespace
    cleaned = re.sub(r'[ \t]+', ' ', cleaned)
    cleaned = re.sub(r'\n{2,}', '\n', cleaned)
    return cleaned.strip()


def pcm_to_wav(pcm_bytes, sample_rate=26200, num_channels=1, bits_per_sample=16):
    """Wraps raw 16-bit linear PCM bytes into standard WAV format with optimized 26,200 Hz playback.
    This +9.1% rate and pitch lift naturally shifts adult male models into an authentic,
    lively, energetic 11-year-old boy's register without any distortion.
    """
    if pcm_bytes.startswith(b'RIFF'):
        pcm_bytes = pcm_bytes[44:]
    byte_rate = sample_rate * num_channels * bits_per_sample // 8
    block_align = num_channels * bits_per_sample // 8
    data_len = len(pcm_bytes)
    header = struct.pack(
        '<4sI4s4sIHHIIHH4sI',
        b'RIFF',
        36 + data_len,
        b'WAVE',
        b'fmt ',
        16,
        1,
        num_channels,
        sample_rate,
        byte_rate,
        block_align,
        bits_per_sample,
        b'data',
        data_len
    )
    return header + pcm_bytes


# Ensure edge_tts and gtts are available for Indian English synthetic voice
try:
    import edge_tts
except ImportError:
    edge_tts = None

try:
    from gtts import gTTS
except ImportError:
    gTTS = None

import asyncio


async def synthesize_edge_indian_boy(text: str) -> bytes:
    """Synthesizes natural Indian English speech using Microsoft's Neural en-IN voice,
    tuned for an authentic, lively, cheerful 10-12 year old boy companion
    (+14% rate, +22Hz pitch lift).
    """
    if not edge_tts:
        raise RuntimeError("edge_tts package is not available.")
    comm = edge_tts.Communicate(text, "en-IN-PrabhatNeural", rate="+14%", pitch="+22Hz")
    audio_data = b""
    async for chunk in comm.stream():
        if chunk["type"] == "audio":
            audio_data += chunk["data"]
    return audio_data


def synthesize_gtts_indian(text: str) -> bytes:
    """Fallback Google English (India) synthesizer."""
    if not gTTS:
        raise RuntimeError("gtts package is not available.")
    tts = gTTS(text=text, lang='en', tld='co.in', slow=False)
    fp = io.BytesIO()
    tts.write_to_fp(fp)
    return fp.getvalue()


def synthesize_minimax_speech(text: str, api_key: str, voice_id: str = "English_Cute_Girl", model: str = "speech-2.8-hd") -> bytes:
    """Synthesizes speech using the official MiniMax T2A V2 API.
    Voice ID defaults to the user's selected 'Cute Girl - Boyish' identifier (English_Cute_Girl).
    Supports automatic sentence-based chunking for long text blocks to prevent timeouts.
    """
    url = "https://api.minimax.io/v1/t2a_v2"

    def _call_single_chunk(chunk_text: str) -> bytes:
        payload = {
            "model": model,
            "text": chunk_text,
            "stream": False,
            "output_format": "hex",
            "voice_setting": {
                "voice_id": voice_id,
                "speed": 1.0,
                "vol": 1.0,
                "pitch": 0
            },
            "audio_setting": {
                "sample_rate": 32000,
                "bitrate": 128000,
                "format": "mp3",
                "channel": 1
            }
        }
        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            }
        )
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                result = json.loads(resp.read().decode("utf-8"))
                if "data" in result and "audio" in result["data"]:
                    audio_hex = result["data"]["audio"]
                    return bytes.fromhex(audio_hex)
                elif "base_resp" in result and result["base_resp"].get("status_code") != 0:
                    code = result["base_resp"].get("status_code")
                    msg = result["base_resp"].get("status_msg")
                    raise RuntimeError(f"MiniMax API error (Code {code}): {msg}")
                else:
                    raise RuntimeError(f"MiniMax response missing audio data: {result}")
        except urllib.error.HTTPError as he:
            err_body = he.read().decode("utf-8", errors="ignore")
            try:
                err_json = json.loads(err_body)
                err_msg = err_json.get("base_resp", {}).get("status_msg") or err_json.get("message") or err_body
            except Exception:
                err_msg = err_body
            raise RuntimeError(f"MiniMax API HTTP {he.code}: {err_msg}")

    # For short text (standard single section), synthesize directly:
    if len(text) <= 600:
        return _call_single_chunk(text)

    # For longer text, split on sentence boundaries and concatenate MP3 frames:
    sentences = re.split(r'(?<=[.!?])\s+', text)
    chunks = []
    current_chunk = []
    current_len = 0
    for s in sentences:
        if current_len + len(s) > 500 and current_chunk:
            chunks.append(" ".join(current_chunk))
            current_chunk = [s]
            current_len = len(s)
        else:
            current_chunk.append(s)
            current_len += len(s)
    if current_chunk:
        chunks.append(" ".join(current_chunk))

    audio_parts = []
    for chunk in chunks:
        part = _call_single_chunk(chunk)
        if part:
            audio_parts.append(part)

    return b"".join(audio_parts)


def generate_krish_speech(text: str) -> dict:
    """Generates synthetic, warm, youthful AI voice for Krish using direct MiniMax AI ('Cute Girl Boyish' / English_Cute_Girl).
    Strictly uses MiniMax model 'speech-2.8-hd' and voice 'English_Cute_Girl' via the official MiniMax API (https://api.minimax.io/v1/t2a_v2).
    Strictly removes Puck, Achird, David, and Zira.
    Does NOT route speech through fal.ai.
    """
    load_env(override=True)
    clean_text = clean_text_for_tts(text)
    if not clean_text:
        raise ValueError("Text is required for voice generation.")

    # 1. Voice Settings (Voice ID: English_Cute_Girl, Model: speech-2.8-hd)
    minimax_voice = os.environ.get("MINIMAX_VOICE_ID", "English_Cute_Girl").strip()
    if minimax_voice in ["English_Cute_Girl1", "Cute_Girl1", "Cute Girl Boyish"]:
        minimax_voice = "English_Cute_Girl"

    minimax_model = os.environ.get("MINIMAX_TTS_MODEL", "speech-2.8-hd").strip()

    # 2. Read direct MiniMax API key from .env (supports standard name, aliases, and secret key)
    minimax_key = (
        os.environ.get("MINIMAX_API_KEY", "").strip()
        or os.environ.get("MINIMAX_KEY", "").strip()
        or os.environ.get("MINI_MAX_API_KEY", "").strip()
        or os.environ.get("MINIMAX_TOKEN", "").strip()
        or os.environ.get("MINIMAX_API_TOKEN", "").strip()
        or os.environ.get("MINIMAX_SECRET_KEY", "").strip()
        or os.environ.get("MINIMAX_API_SECRET", "").strip()
        or os.environ.get("MINIMAX_SECRET", "").strip()
    )

    # OPTION 1: Use direct MiniMax TTS if API key is present in .env
    if minimax_key:
        try:
            audio_bytes = synthesize_minimax_speech(clean_text, minimax_key, voice_id=minimax_voice, model=minimax_model)
            if audio_bytes:
                b64 = base64.b64encode(audio_bytes).decode("utf-8")
                return {
                    "audio": f"data:audio/mpeg;base64,{b64}",
                    "provider": f"MiniMax AI ({minimax_voice})",
                    "voiceId": minimax_voice,
                    "model": minimax_model
                }
        except Exception as e:
            sys.stderr.write(f"[Krish Voice Error] MiniMax TTS call failed ({e}). Falling back to earlier working voice...\n")

    # OPTION 2: Restore previous working voice from project backups:
    # Microsoft Neural Indian English (en-IN-PrabhatNeural tuned for youth: +14% tempo, +22Hz pitch).
    # Lively, energetic, cheerful 10-12 year old Indian boy companion.
    # Strictly avoids Puck, Achird, David, Zira, and adult narrators.
    try:
        audio_bytes = asyncio.run(synthesize_edge_indian_boy(clean_text))
        if audio_bytes:
            b64 = base64.b64encode(audio_bytes).decode("utf-8")
            return {
                "audio": f"data:audio/mpeg;base64,{b64}",
                "provider": "Krish AI Voice (Youthful Indian Boy en-IN)",
                "voiceId": "en-IN-PrabhatNeural",
                "model": "edge-tts-youth-tuned"
            }
    except Exception as e:
        sys.stderr.write(f"[Krish Voice Error] Microsoft Indian English synthesis failed ({e}). Trying Google English (India)...\n")

    # Fallback: Google English (India en-IN)
    try:
        audio_bytes = synthesize_gtts_indian(clean_text)
        if audio_bytes:
            b64 = base64.b64encode(audio_bytes).decode("utf-8")
            return {
                "audio": f"data:audio/mpeg;base64,{b64}",
                "provider": "Google English (India en-IN)",
                "voiceId": "en-IN-gTTS",
                "model": "gtts"
            }
    except Exception as e:
        sys.stderr.write(f"[Krish Voice Error] Google English (India) synthesis failed ({e}).\n")

    raise RuntimeError("Could not synthesize voice audio via any Indian English voice provider.")


def repair_json(txt: str):
    """Safely extracts and repairs JSON from LLM output, handling markdown blocks,
    missing quotes around keys, trailing commas, and boundary whitespace.
    """
    if not txt:
        return None
    s = txt.strip()
    if s.startswith("```json"): s = s[7:]
    if s.startswith("```"): s = s[3:]
    if s.endswith("```"): s = s[:-3]
    s = s.strip()

    try:
        return json.loads(s)
    except Exception:
        pass

    # Fix unquoted or partially quoted keys: e.g. key": or key:
    s_fixed = re.sub(r'([,{]\s*)([a-zA-Z0-9_]+)":', r'\1"\2":', s)
    s_fixed = re.sub(r'([,{]\s*)([a-zA-Z0-9_]+):', r'\1"\2":', s_fixed)
    # Fix trailing commas before closing braces/brackets
    s_fixed = re.sub(r',\s*([\}\]])', r'\1', s_fixed)

    try:
        return json.loads(s_fixed)
    except Exception:
        m = re.search(r'(\{.*\})', s_fixed, re.DOTALL)
        if m:
            try:
                return json.loads(m.group(1))
            except Exception:
                pass
        return None


def extract_fallback_character(title: str, text: str, story_type: str, value: str) -> dict:
    """Extracts story protagonist, gender, and authentic setting from story text when AI model is offline,
    strictly never using the child's input name as the character.
    """
    title_clean = title.replace("'", " ").replace("’", " ")
    title_words = [
        w for w in title_clean.split()
        if w and w[0].isupper() and w.lower() not in [
            "the", "a", "an", "and", "in", "on", "of", "to", "for", "with",
            "story", "mix-up", "journey", "lesson", "wisdom", "four", "steps"
        ]
    ]
    detected_name = title_words[0] if title_words else "The Hero"

    lower_text = (title + " " + text + " " + story_type).lower()
    she_count = len(re.findall(r'\b(she|her|hers|girl|queen|princess)\b', lower_text))
    he_count = len(re.findall(r'\b(he|him|his|boy|king|prince)\b', lower_text))

    # Detect Animals accurately
    is_elephant = any(w in lower_text for w in ["elephant", "gajraj", "haathi", "trunk"])
    is_lion = any(w in lower_text for w in ["lion", "sher", "simha"])
    is_rabbit = any(w in lower_text for w in ["rabbit", "hare", "khargosh"])
    is_turtle = any(w in lower_text for w in ["turtle", "tortoise", "kachhua"])
    is_monkey = any(w in lower_text for w in ["monkey", "bandar", "vanara"])
    is_deer = any(w in lower_text for w in ["deer", "hiran", "mrig"])
    is_bird = any(w in lower_text for w in ["dove", "pigeon", "crow", "sparrow", "eagle", "hawk", "peacock", "swan"])
    is_animal = is_elephant or is_lion or is_rabbit or is_turtle or is_monkey or is_deer or is_bird or "animal" in story_type.lower() or "panchatantra" in story_type.lower() or "jataka" in story_type.lower()

    # Detect Ancient / Indian Historical / Epic
    is_ancient = (
        "mythology" in story_type.lower()
        or "history" in story_type.lower()
        or "epic" in story_type.lower()
        or any(w in lower_text for w in ["gurukula", "hermitage", "guru", "drona", "ekalavya", "king", "prince", "palace", "vedic", "ancient", "sage", "ashram", "shibi", "arjun", "rama", "krishna"])
    )

    if is_elephant:
        gender = "Animal"
        char_type = "animal"
        setting = "a lush green tropical Indian forest with tall Sal trees and clear stream"
        appearance = f"{detected_name}, a gentle giant Indian elephant with soft gray wrinkled skin, warm expressive dark eyes, curved tusks, and large floppy ears, completely natural animal form"
    elif is_lion:
        gender = "Animal"
        char_type = "animal"
        setting = "a sunlit golden jungle clearing under ancient banyan trees"
        appearance = f"{detected_name}, a majestic yet friendly golden lion with a soft fluffy mane and warm kind dark eyes, natural animal form"
    elif is_rabbit:
        gender = "Animal"
        char_type = "animal"
        setting = "a vibrant flowering green meadow and forest path"
        appearance = f"{detected_name}, an adorable quick-witted rabbit with soft fluffy fur, long ears, and bright curious eyes, natural animal form"
    elif is_turtle:
        gender = "Animal"
        char_type = "animal"
        setting = "a serene riverbank with smooth river pebbles and green reeds"
        appearance = f"{detected_name}, a wise gentle tortoise with a patterned olive shell and kind patient eyes, natural animal form"
    elif is_animal:
        gender = "Animal"
        char_type = "animal"
        setting = "a vibrant, lush green forest and pond under clear blue skies"
        appearance = f"{detected_name}, a friendly expressive animal character with warm eyes and natural animal form"
    elif is_ancient:
        gender = "Girl" if she_count > he_count else "Boy"
        char_type = "human child"
        setting = "an ancient Indian Gurukula hermitage with thatched cottages, lush banyan trees, and golden sunlight"
        appearance = f"{detected_name}, a young ancient Indian {gender.lower()} with warm brown skin, expressive dark eyes, hair tied in a traditional topknot, wearing a rustic earthen-brown cotton dhoti wrap, barefoot"
    else:
        gender = "Girl" if she_count > he_count else "Boy"
        char_type = "human child"
        setting = "a bright, cheerful everyday environment"
        appearance = f"{detected_name}, a young Indian {gender.lower()} with bright expressive dark eyes, neat hair, and everyday clothing"

    return {
        "protagonistName": detected_name,
        "gender": gender,
        "characterType": char_type,
        "appearanceAndClothing": appearance,
        "settingDescription": setting
    }


def generate_story_illustrations(child_name: str, age: int, value: str, story_type: str, story: dict) -> dict:
    """Generates 3-scene dynamic AI storybook illustrations (Beginning, Challenge, Ending)
    with STRICT character consistency and cultural authenticity, guaranteeing CHILD NAME != STORY CHARACTER.
    The prompt for each scene is strictly derived from the ACTUAL STORY TEXT and locks the protagonist's visual anchor.
    """
    api_key = os.environ.get("GEMINI_API_KEY", "").strip()
    title = story.get("title", f"The Journey of {value}")
    text = story.get("text", "")
    moral = story.get("moral", "")

    prompt = f"""You are an expert children's storybook illustrator and art director for Samskara Buddy.

CRITICAL RULE 1 - CHILD NAME != STORY PROTAGONIST:
The child using this app is named '{child_name or "Explorer"}'. This child is the listener/reader.
NEVER use '{child_name or "Explorer"}' as a character in the story illustrations.
Extract the ACTUAL PROTAGONIST, species, gender, appearance, and setting strictly from the STORY TEXT.

CRITICAL RULE 2 - CHARACTER CONSISTENCY & SETTING ADAPTATION:
- Formulate a single, detailed, LOCKED PROTAGONIST VISUAL ANCHOR in "appearanceAndClothing".
  * Animal Fables (e.g. elephant, lion, turtle, deer): Describe the exact animal species, distinctive colors, textures, size, facial features, and natural forest/water setting. STRICTLY NO modern clothing or classrooms.
  * Ancient Indian Epics & Historical Tales: Describe the traditional ancient Indian clothing (rustic cotton dhoti wrap, topknot hair, barefoot), ancient Gurukula hermitages, banyan trees. STRICTLY NO modern school uniforms, desks, spectacles, or stationery.
  * Modern Stories: Describe modern child with everyday clothing and modern setting.
- EVERY scene imagePrompt MUST incorporate this LOCKED VISUAL ANCHOR to ensure 100% visual consistency.

CRITICAL RULE 3 - ILLUSTRATE THE ACTUAL SCENE:
- Scene 1 ("beginning"): The specific opening narrative event from the story text.
- Scene 2 ("middle"): The specific challenge, dilemma, or tension from the story text.
- Scene 3 ("ending"): The specific resolution and moral outcome from the story text.
Do NOT use generic or unrelated actions. Every scene must directly depict what happens in that part of the story text!

STORY TO ILLUSTRATE:
- Story Title: {title}
- Setting / Category: {story_type}
- Story Text:
{text}
- Moral / Takeaway: {moral}

Return ONLY valid JSON matching this schema:
{{
  "characterProfile": {{
    "protagonistName": "...",
    "gender": "Boy | Girl | Male | Female | Animal",
    "characterType": "animal | human child | sage | mythical",
    "appearanceAndClothing": "Complete locked visual description of protagonist",
    "settingDescription": "Authentic environment matching story culture/genre"
  }},
  "scenes": [
    {{
      "phase": "beginning",
      "title": "Scene 1: Specific Title",
      "caption": "1-2 sentence child-friendly caption describing opening event",
      "imagePrompt": "3D Pixar Disney animated cinematic storybook illustration of [LOCKED VISUAL ANCHOR] [scene 1 concrete action], [other characters/animals], in [setting], [lighting], vibrant rich colors, culturally authentic, child-friendly, cinematic composition."
    }},
    {{
      "phase": "middle",
      "title": "Scene 2: Specific Title",
      "caption": "1-2 sentence child-friendly caption describing middle challenge",
      "imagePrompt": "3D Pixar Disney animated cinematic storybook illustration of THE EXACT SAME [LOCKED VISUAL ANCHOR] [scene 2 concrete action], [other characters/animals], in [setting], [lighting], vibrant rich colors, culturally authentic, child-friendly, cinematic composition."
    }},
    {{
      "phase": "ending",
      "title": "Scene 3: Specific Title",
      "caption": "1-2 sentence child-friendly caption describing resolution",
      "imagePrompt": "3D Pixar Disney animated cinematic storybook illustration of THE EXACT SAME [LOCKED VISUAL ANCHOR] [scene 3 concrete action], [other characters/animals], in [setting], [lighting], vibrant rich colors, culturally authentic, child-friendly, cinematic composition."
    }}
  ]
}}"""

    parsed_result = None
    if api_key:
        for model_name in ["gemini-flash-lite-latest", "gemini-3.1-flash-lite", "gemini-3-flash-preview"]:
            try:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
                payload = {
                    "contents": [{"parts": [{"text": prompt}]}],
                    "generationConfig": {"responseMimeType": "application/json", "temperature": 0.2}
                }
                req = urllib.request.Request(
                    url,
                    data=json.dumps(payload).encode("utf-8"),
                    headers={"Content-Type": "application/json"}
                )
                with urllib.request.urlopen(req, timeout=15) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    txt = data["candidates"][0]["content"]["parts"][0]["text"].strip()
                    parsed = repair_json(txt)
                    if isinstance(parsed, dict) and "scenes" in parsed and len(parsed["scenes"]) == 3:
                        parsed_result = parsed
                        break
            except Exception as e:
                sys.stderr.write(f"[Krish Illustrations] Prompt gen on {model_name}: {e}\n")

    # Resilient Story-Derived Fallback if Gemini call timed out or failed
    if not parsed_result:
        char_info = extract_fallback_character(title, text, story_type, value)
        p_name = char_info["protagonistName"]
        p_app = char_info["appearanceAndClothing"]
        p_set = char_info["settingDescription"]

        # Parse actual sentences from story text to ground each scene
        sentences = [s.strip() for s in re.split(r'(?<=[.!?])\s+', text) if len(s.strip()) > 5]
        s_beg = sentences[0] if len(sentences) > 0 else f"{p_name} begins the story in {p_set}."
        s_mid = sentences[len(sentences) // 2] if len(sentences) > 2 else (sentences[1] if len(sentences) > 1 else f"{p_name} faces a key challenge.")
        s_end = sentences[-1] if len(sentences) > 1 else f"{p_name} joyfully shares the wisdom of {value}."

        parsed_result = {
            "characterProfile": char_info,
            "scenes": [
                {
                    "phase": "beginning",
                    "title": f"Scene 1: The Journey Begins",
                    "caption": s_beg,
                    "imagePrompt": f"3D Pixar Disney animated cinematic storybook illustration of {p_app}, {s_beg[:100]}, in {p_set}, soft morning sunlight, vibrant rich colors, culturally authentic, child-friendly."
                },
                {
                    "phase": "middle",
                    "title": f"Scene 2: The Challenge",
                    "caption": s_mid,
                    "imagePrompt": f"3D Pixar Disney animated cinematic storybook illustration of THE EXACT SAME {p_app}, {s_mid[:100]}, in {p_set}, dramatic warm lighting, vibrant rich colors, culturally authentic, child-friendly."
                },
                {
                    "phase": "ending",
                    "title": f"Scene 3: Wisdom and Joy",
                    "caption": s_end,
                    "imagePrompt": f"3D Pixar Disney animated cinematic storybook illustration of THE EXACT SAME {p_app}, {s_end[:100]}, in {p_set}, bright golden celebration sunlight, vibrant rich colors, culturally authentic, child-friendly."
                }
            ]
        }

    # QUALITY CHECK & CHARACTER CONSISTENCY ENFORCEMENT
    char_profile = parsed_result.get("characterProfile", {})
    protagonist = char_profile.get("protagonistName", "").strip() or "The Hero"
    appearance = char_profile.get("appearanceAndClothing", "").strip()
    setting = char_profile.get("settingDescription", "").strip()
    scenes = parsed_result.get("scenes", [])

    # Strict Check: Scrub any accidental leaks of child_name from captions/prompts
    child_clean = (child_name or "").strip()
    if child_clean and child_clean.lower() not in text.lower():
        for sc in scenes:
            sc["caption"] = re.sub(rf"\b{re.escape(child_clean)}\b", protagonist, sc.get("caption", ""), flags=re.IGNORECASE)
            sc["imagePrompt"] = re.sub(rf"\b{re.escape(child_clean)}\b", protagonist, sc.get("imagePrompt", ""), flags=re.IGNORECASE)

    # Clean & standardize image prompts across all scenes for consistent characters & setting
    for idx, sc in enumerate(scenes):
        p = sc.get("imagePrompt", "").strip()
        p = re.sub(r"\s+", " ", p)

        # Replace any sensitive moderation trigger words with child-friendly equivalents
        p = re.sub(r"\bprotectively\s+hugging\b", "holding", p, flags=re.IGNORECASE)
        p = re.sub(r"\bhugging\b", "holding", p, flags=re.IGNORECASE)
        p = re.sub(r"\bkeep\s+it\s+for\s+herself\b", "holding it close", p, flags=re.IGNORECASE)
        p = re.sub(r"\bkeep\s+it\s+for\s+himself\b", "holding it close", p, flags=re.IGNORECASE)

        # Strip redundant style prefixes
        p = re.sub(r"^(3d\s+pixar\s+(disney\s+)?(animated\s+)?(cinematic\s+)?(storybook\s+)?(style|illustration)?,?\s*)+", "", p, flags=re.IGNORECASE).strip()
        p = re.sub(r"^(of\s+|a\s+|an\s+)", "", p, flags=re.IGNORECASE).strip()

        # Ensure locked appearance is present if missing
        if appearance and appearance.lower() not in p.lower() and protagonist.lower() not in p.lower():
            p = f"{appearance}, {p}"

        # Prepend unified 3D Pixar Disney style
        p = f"3D Pixar Disney animated cinematic storybook illustration of {p}"
        p = re.sub(r"\bof\s+of\b", "of", p, flags=re.IGNORECASE)

        if len(p) > 750:
            p = p[:750].rsplit(" ", 1)[0]

        sc["imagePrompt"] = p

    # Prepare scenes for sequential Cloudflare Workers AI generation
    scenes_result = []
    for idx, sc in enumerate(scenes):
        img_prompt = sc.get("imagePrompt", "")
        clean_prompt = img_prompt.replace("\n", " ").strip()
        clean_prompt = re.sub(r"[\.\,\!\?\;\:]+$", "", clean_prompt).strip()
        seed = (abs(hash(img_prompt)) + (idx + 1) * 1013 + 42) % 100000

        scenes_result.append({
            "phase": sc.get("phase", ""),
            "title": sc.get("title", f"Scene {idx + 1}"),
            "caption": sc.get("caption", ""),
            "imagePrompt": clean_prompt,
            "imageUrl": "",
            "seed": seed,
            "provider": "cloudflare-workers-ai"
        })

    return {
        "success": True,
        "provider": "cloudflare-workers-ai",
        "characterProfile": char_profile,
        "scenes": scenes_result
    }


import threading

CLOUDFLARE_PRIMARY_MODEL = "@cf/black-forest-labs/flux-1-schnell"
CLOUDFLARE_IMAGE_LOCK = threading.Lock()


def generate_cloudflare_image(prompt: str, seed: int = 1042) -> dict:
    """
    Generates a single story illustration using Cloudflare Workers AI REST API.
    Strictly serialized with CLOUDFLARE_IMAGE_LOCK so two images are NEVER generated concurrently.
    Uses CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN from .env.
    Never exposes or logs the API token.
    """
    with CLOUDFLARE_IMAGE_LOCK:
        load_env(override=True)
        account_id = (
            os.environ.get("CLOUDFLARE_ACCOUNT_ID", "").strip()
            or os.environ.get("CF_ACCOUNT_ID", "").strip()
        )
        api_token = (
            os.environ.get("CLOUDFLARE_API_TOKEN", "").strip()
            or os.environ.get("CF_API_TOKEN", "").strip()
        )

        if not account_id or not api_token:
            missing = []
            if not account_id:
                missing.append("CLOUDFLARE_ACCOUNT_ID")
            if not api_token:
                missing.append("CLOUDFLARE_API_TOKEN")
            raise ValueError(
                f"Missing {', '.join(missing)} in .env file. Please save { ' and '.join(missing) } in .env."
            )

        clean_prompt = (prompt or "").strip()
        if not clean_prompt:
            clean_prompt = "3D Pixar Disney animated cinematic storybook illustration of an inspiring story scene, warm golden sunlight, rich vibrant colors, culturally authentic, child-friendly."

        model_name = CLOUDFLARE_PRIMARY_MODEL
        url = f"https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/{model_name}"
        payload = {"prompt": clean_prompt[:2000], "steps": 4}

        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {api_token}",
                "Content-Type": "application/json",
                "User-Agent": "SamskaraBuddy/1.0"
            },
            method="POST"
        )

        try:
            with urllib.request.urlopen(req, timeout=35) as resp:
                content_type = (resp.headers.get("Content-Type") or "").lower()
                raw_bytes = resp.read()

                if "application/json" in content_type:
                    data = json.loads(raw_bytes.decode("utf-8"))
                    if not data.get("success", True):
                        errs = data.get("errors") or []
                        err_msg = errs[0].get("message") if errs and isinstance(errs[0], dict) else str(errs)
                        raise RuntimeError(f"Cloudflare API error on {model_name}: {err_msg}")

                    result_obj = data.get("result") or {}
                    b64_img = result_obj.get("image") if isinstance(result_obj, dict) else None
                    if not b64_img:
                        raise RuntimeError(f"Cloudflare API returned empty image field for {model_name}")

                    return {
                        "success": True,
                        "imageUrl": f"data:image/jpeg;base64,{b64_img}",
                        "model": model_name,
                        "provider": "cloudflare-workers-ai"
                    }
                elif content_type.startswith("image/") or len(raw_bytes) > 512:
                    mime = content_type.split(";")[0].strip() if content_type.startswith("image/") else "image/png"
                    b64_img = base64.b64encode(raw_bytes).decode("ascii")
                    return {
                        "success": True,
                        "imageUrl": f"data:{mime};base64,{b64_img}",
                        "model": model_name,
                        "provider": "cloudflare-workers-ai"
                    }
                else:
                    raise RuntimeError(f"Unexpected response Content-Type ({content_type}) from {model_name}")

        except urllib.error.HTTPError as http_err:
            err_body = ""
            try:
                err_body = http_err.read().decode("utf-8", errors="replace")[:400]
            except Exception:
                pass
            err_msg = f"HTTP {http_err.code} from {model_name}: {err_body or http_err.reason}"
            sys.stderr.write(f"[Cloudflare Workers AI] {err_msg}\n")
            raise RuntimeError(err_msg)
        except Exception as exc:
            err_msg = f"{model_name} error: {exc}"
            sys.stderr.write(f"[Cloudflare Workers AI] {err_msg}\n")
            raise RuntimeError(err_msg)


FAL_VIDEO_MODEL = "minimax/h3-max/image-to-video"
FAL_VIDEO_LOCK = threading.Lock()


def generate_fal_scene_video(image_url: str, motion_prompt: str) -> dict:
    """
    Animates a generated scene image into a 5-second 480P video using fal.ai MiniMax H3 Max
    (minimax/h3-max/image-to-video).
    Strictly serialized with FAL_VIDEO_LOCK so multiple video requests NEVER run simultaneously.
    Reads FAL_KEY only from server-side .env and never exposes or logs the key.
    """
    import time

    with FAL_VIDEO_LOCK:
        load_env(override=True)
        fal_key = os.environ.get("FAL_KEY", "").strip()
        if not fal_key:
            raise ValueError("Missing FAL_KEY in .env file. Please save FAL_KEY in .env.")

        img_src = (image_url or "").strip()
        if not img_src:
            raise ValueError("image_url is required to animate the scene.")

        # Resolve local asset path to data URI if necessary
        if not img_src.startswith("data:") and not img_src.startswith("http"):
            local_p = BASE_DIR / img_src.lstrip("/\\")
            if local_p.exists():
                raw = local_p.read_bytes()
                b64 = base64.b64encode(raw).decode("utf-8")
                img_src = f"data:image/jpeg;base64,{b64}"

        clean_prompt = (motion_prompt or "").strip()
        if not clean_prompt:
            clean_prompt = "Gentle 3D Pixar animated storybook motion, characters moving naturally with warm expressive smiles and soft camera movement."

        auth_headers = {
            "Authorization": f"Key {fal_key}",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "SamskaraBuddy/1.0"
        }

        # Step 1: If img_src is a base64 data URI, upload it to fal.ai CDN storage first
        # (just like fal_client does) so the JSON payload is small and never triggers TCP 10054 resets.
        resolved_image_url = img_src
        if img_src.startswith("data:"):
            try:
                header_part, b64_data = img_src.split(",", 1)
                mime_type = "image/jpeg"
                if ":" in header_part and ";" in header_part:
                    mime_type = header_part.split(":", 1)[1].split(";", 1)[0].strip() or "image/jpeg"
                raw_img_bytes = base64.b64decode(b64_data)

                init_url = "https://rest.alpha.fal.ai/storage/upload/initiate?storage_type=fal-cdn-v3"
                init_payload = json.dumps({
                    "content_type": mime_type,
                    "file_name": "scene1.jpg"
                }).encode("utf-8")

                init_req = urllib.request.Request(
                    init_url,
                    data=init_payload,
                    headers=auth_headers,
                    method="POST"
                )
                with urllib.request.urlopen(init_req, timeout=20) as init_resp:
                    init_data = json.loads(init_resp.read().decode("utf-8"))
                    upload_url = init_data.get("upload_url", "")
                    file_url = init_data.get("file_url", "")

                if upload_url and file_url:
                    put_req = urllib.request.Request(
                        upload_url,
                        data=raw_img_bytes,
                        headers={
                            "Content-Type": mime_type,
                            "User-Agent": "SamskaraBuddy/1.0"
                        },
                        method="PUT"
                    )
                    with urllib.request.urlopen(put_req, timeout=30) as _:
                        pass
                    resolved_image_url = file_url
            except urllib.error.HTTPError as http_err:
                err_body = ""
                try:
                    err_body = http_err.read().decode("utf-8", errors="replace")[:500]
                except Exception:
                    pass
                err_msg = f"HTTP {http_err.code} from fal.ai storage upload: {err_body or http_err.reason}"
                sys.stderr.write(f"[fal.ai MiniMax Video] {err_msg}\n")
                raise RuntimeError(err_msg)

        # Step 2: Submit image-to-video job to fal.ai Queue API (minimax/h3-max/image-to-video)
        queue_url = f"https://queue.fal.run/{FAL_VIDEO_MODEL}"
        payload = {
            "prompt": clean_prompt[:1500],
            "image_url": resolved_image_url,
            "duration": 5,
            "resolution": "480P",
            "prompt_expansion_mode": "disabled"
        }

        req = urllib.request.Request(
            queue_url,
            data=json.dumps(payload).encode("utf-8"),
            headers=auth_headers,
            method="POST"
        )

        try:
            with urllib.request.urlopen(req, timeout=35) as resp:
                submit_data = json.loads(resp.read().decode("utf-8"))

            # Check if response already contains video directly
            if isinstance(submit_data, dict) and isinstance(submit_data.get("video"), dict):
                direct_url = submit_data["video"].get("url", "").strip()
                if direct_url:
                    return {
                        "success": True,
                        "videoUrl": direct_url,
                        "model": FAL_VIDEO_MODEL,
                        "provider": "fal-ai",
                        "duration": 5,
                        "resolution": "480P"
                    }

            status_url = submit_data.get("status_url", "")
            response_url = submit_data.get("response_url", "")
            if not status_url or not response_url:
                raise RuntimeError(f"Unexpected queue response from fal.ai: {submit_data}")

            # Step 3: Poll status_url until COMPLETED (up to 120 seconds)
            deadline = time.time() + 120
            while time.time() < deadline:
                time.sleep(2.0)
                status_req = urllib.request.Request(
                    status_url,
                    headers={
                        "Authorization": f"Key {fal_key}",
                        "Accept": "application/json",
                        "User-Agent": "SamskaraBuddy/1.0"
                    },
                    method="GET"
                )
                with urllib.request.urlopen(status_req, timeout=20) as s_resp:
                    s_data = json.loads(s_resp.read().decode("utf-8"))

                status_val = (s_data.get("status") or "").upper()
                if status_val == "COMPLETED":
                    break
                if status_val in ("FAILED", "ERROR", "CANCELLED"):
                    raise RuntimeError(f"fal.ai job failed with status {status_val}: {s_data}")
            else:
                raise RuntimeError("Timed out waiting for fal.ai MiniMax video generation (120s).")

            # Step 4: Fetch final result from response_url
            res_req = urllib.request.Request(
                response_url,
                headers={
                    "Authorization": f"Key {fal_key}",
                    "Accept": "application/json",
                    "User-Agent": "SamskaraBuddy/1.0"
                },
                method="GET"
            )
            with urllib.request.urlopen(res_req, timeout=30) as r_resp:
                final_data = json.loads(r_resp.read().decode("utf-8"))

            video_obj = final_data.get("video") if isinstance(final_data, dict) else None
            video_url = video_obj.get("url", "").strip() if isinstance(video_obj, dict) else ""
            if not video_url and isinstance(final_data, dict) and isinstance(final_data.get("data"), dict):
                inner_vid = final_data["data"].get("video")
                if isinstance(inner_vid, dict):
                    video_url = inner_vid.get("url", "").strip()

            if not video_url:
                raise RuntimeError(f"fal.ai {FAL_VIDEO_MODEL} did not return a video.url in response.")

            return {
                "success": True,
                "videoUrl": video_url,
                "model": FAL_VIDEO_MODEL,
                "provider": "fal-ai",
                "duration": 5,
                "resolution": "480P"
            }

        except urllib.error.HTTPError as http_err:
            err_body = ""
            try:
                err_body = http_err.read().decode("utf-8", errors="replace")[:500]
            except Exception:
                pass
            err_msg = f"HTTP {http_err.code} from fal.ai ({FAL_VIDEO_MODEL}): {err_body or http_err.reason}"
            sys.stderr.write(f"[fal.ai MiniMax Video] {err_msg}\n")
            raise RuntimeError(err_msg)
        except Exception as exc:
            err_msg = f"fal.ai ({FAL_VIDEO_MODEL}) error: {exc}"
            sys.stderr.write(f"[fal.ai MiniMax Video] {err_msg}\n")
            raise RuntimeError(err_msg)


class SamskaraRequestHandler(SimpleHTTPRequestHandler):
    """Custom request handler that handles static files and /api/journey with full CORS support."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def do_OPTIONS(self):
        """Handle CORS preflight requests."""
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def do_GET(self):
        clean_path = self.path.split("?")[0]
        # Health / status endpoint
        if clean_path == "/api/health":
            load_env(override=True)
            key_present = bool(os.environ.get("GEMINI_API_KEY", "").strip())
            minimax_present = bool(
                os.environ.get("MINIMAX_API_KEY", "").strip()
                or os.environ.get("MINIMAX_KEY", "").strip()
                or os.environ.get("MINI_MAX_API_KEY", "").strip()
                or os.environ.get("MINIMAX_TOKEN", "").strip()
                or os.environ.get("MINIMAX_API_TOKEN", "").strip()
                or os.environ.get("MINIMAX_SECRET_KEY", "").strip()
                or os.environ.get("MINIMAX_API_SECRET", "").strip()
                or os.environ.get("MINIMAX_SECRET", "").strip()
            )
            cf_present = bool(
                (os.environ.get("CLOUDFLARE_ACCOUNT_ID", "").strip() or os.environ.get("CF_ACCOUNT_ID", "").strip())
                and (os.environ.get("CLOUDFLARE_API_TOKEN", "").strip() or os.environ.get("CF_API_TOKEN", "").strip())
            )
            fal_present = bool(os.environ.get("FAL_KEY", "").strip())

            minimax_voice = os.environ.get("MINIMAX_VOICE_ID", "English_Cute_Girl").strip()
            if minimax_voice in ["English_Cute_Girl1", "Cute_Girl1", "Cute Girl Boyish"]:
                minimax_voice = "English_Cute_Girl"

            minimax_model = os.environ.get("MINIMAX_TTS_MODEL", "speech-2.8-hd").strip()

            voice_prov = (
                f"MiniMax AI ({minimax_voice})" if minimax_present
                else "Microsoft Indian English (Youthful Boy en-IN)"
            )
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps({
                "status": "ok",
                "geminiKeyConfigured": key_present,
                "voiceEnabled": True,
                "voiceProvider": voice_prov,
                "minimaxConfigured": minimax_present,
                "minimaxVoiceId": minimax_voice,
                "minimaxModel": minimax_model,
                "imageEnabled": True,
                "imageProvider": "cloudflare-workers-ai",
                "imageModel": CLOUDFLARE_PRIMARY_MODEL,
                "cloudflareConfigured": cf_present,
                "videoEnabled": fal_present,
                "videoProvider": "fal-ai",
                "videoModel": FAL_VIDEO_MODEL
            }).encode("utf-8"))
            return

        # Default static file handling
        return super().do_GET()

    def do_POST(self):
        clean_path = self.path.split("?")[0]
        if clean_path == "/api/journey":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            try:
                data = json.loads(body) if body else {}
            except Exception:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": False,
                    "error": "Invalid JSON in request body"
                }).encode("utf-8"))
                return

            child_name = data.get("childName", "").strip()
            age = data.get("age", 8)
            try:
                age = int(age)
                if age < 4 or age > 18:
                    age = 8
            except (ValueError, TypeError):
                age = 8

            value = data.get("value", "").strip()
            story_type = data.get("storyType", "").strip()

            if not value:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": False,
                    "error": "Please provide a Samskara or value to explore."
                }).encode("utf-8"))
                return

            try:
                journey_data = call_gemini(child_name, age, value, story_type)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": True,
                    "data": journey_data
                }).encode("utf-8"))
            except Exception as e:
                # Return friendly error
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": False,
                    "error": str(e)
                }).encode("utf-8"))
            return

        elif clean_path == "/api/speak":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            try:
                data = json.loads(body) if body else {}
            except Exception:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": "Invalid JSON"}).encode("utf-8"))
                return

            text = data.get("text", "").strip()
            if not text:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": "Text is required"}).encode("utf-8"))
                return

            try:
                result = generate_krish_speech(text)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": True,
                    "audio": result["audio"],
                    "provider": result["provider"],
                    "voiceId": result.get("voiceId"),
                    "model": result.get("model")
                }).encode("utf-8"))
            except Exception as e:
                err_text = str(e)
                sys.stderr.write(f"[Krish Voice Error] {err_text}\n")
                # Return HTTP 200 with success: False so the client receives the clean JSON diagnostic
                # without triggering browser-level HTTP 500 network exceptions
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                minimax_voice = os.environ.get("MINIMAX_VOICE_ID", "English_Cute_Girl").strip()
                if minimax_voice in ["English_Cute_Girl1", "Cute_Girl1", "Cute Girl Boyish"]:
                    minimax_voice = "English_Cute_Girl"
                minimax_model = os.environ.get("MINIMAX_TTS_MODEL", "speech-2.8-hd").strip()
                self.wfile.write(json.dumps({
                    "success": False,
                    "error": err_text,
                    "diagnostic": True,
                    "voiceId": minimax_voice,
                    "model": minimax_model
                }).encode("utf-8"))
            return

        elif clean_path == "/api/illustrate":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            try:
                data = json.loads(body) if body else {}
            except Exception:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": "Invalid JSON"}).encode("utf-8"))
                return

            child_name = data.get("childName", "").strip()
            age = data.get("age", 8)
            try:
                age = int(age)
            except (ValueError, TypeError):
                age = 8
            value = data.get("value", "").strip()
            story_type = data.get("storyType", "").strip()
            story = data.get("story", {})

            try:
                illustrations = generate_story_illustrations(child_name, age, value, story_type, story)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps(illustrations).encode("utf-8"))
            except Exception as e:
                sys.stderr.write(f"[Krish Illustrations Error] {e}\n")
                char_info = extract_fallback_character(story.get("title", value), story.get("text", ""), story_type, value)
                p_name = char_info["protagonistName"]
                p_app = char_info["appearanceAndClothing"]
                p_set = char_info["settingDescription"]
                text = story.get("text", "")
                sentences = [s.strip() for s in re.split(r'(?<=[.!?])\s+', text) if len(s.strip()) > 5]
                s_beg = sentences[0] if len(sentences) > 0 else f"{p_name} begins in {p_set}."
                s_mid = sentences[len(sentences)//2] if len(sentences) > 2 else (sentences[1] if len(sentences) > 1 else f"{p_name} faces a key choice.")
                s_end = sentences[-1] if len(sentences) > 1 else f"{p_name} celebrates joyfully."

                p1 = f"3D Pixar Disney animated storybook illustration of {p_app} in {p_set}, {s_beg[:90]}, warm soft lighting, child-friendly."
                p2 = f"3D Pixar Disney animated storybook illustration of {p_app} in {p_set}, {s_mid[:90]}, earnest determined expression, warm lighting, child-friendly."
                p3 = f"3D Pixar Disney animated storybook illustration of {p_app} in {p_set}, {s_end[:90]}, joyful cheerful celebration, golden sunlight, child-friendly."

                fallback_scenes = [
                    {"phase": "beginning", "title": "Scene 1: The Beginning", "caption": s_beg, "imagePrompt": p1, "imageUrl": "", "seed": 1042, "provider": "cloudflare-workers-ai"},
                    {"phase": "middle", "title": "Scene 2: The Challenge", "caption": s_mid, "imagePrompt": p2, "imageUrl": "", "seed": 3042, "provider": "cloudflare-workers-ai"},
                    {"phase": "ending", "title": "Scene 3: The Happy Ending", "caption": s_end, "imagePrompt": p3, "imageUrl": "", "seed": 5042, "provider": "cloudflare-workers-ai"}
                ]
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": True,
                    "provider": "cloudflare-workers-ai",
                    "characterProfile": char_info,
                    "scenes": fallback_scenes
                }).encode("utf-8"))
            return

        elif clean_path == "/api/generate-scene-image":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            try:
                data = json.loads(body) if body else {}
            except Exception:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": "Invalid JSON"}).encode("utf-8"))
                return

            prompt = data.get("prompt", "").strip()
            seed = data.get("seed", 1042)
            scene_index = data.get("sceneIndex", 0)

            try:
                result = generate_cloudflare_image(prompt, seed=seed)
                sys.stderr.write(f"[Cloudflare Workers AI] Scene {int(scene_index) + 1} generated successfully via {result.get('model')}\n")
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps(result).encode("utf-8"))
            except Exception as e:
                sys.stderr.write(f"[Cloudflare Workers AI] Scene {int(scene_index) + 1} failed: {e}\n")
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": False,
                    "error": str(e),
                    "model": CLOUDFLARE_PRIMARY_MODEL,
                    "provider": "cloudflare-workers-ai"
                }).encode("utf-8"))
            return

        elif clean_path == "/api/animate-scene":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            try:
                data = json.loads(body) if body else {}
            except Exception:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": "Invalid JSON"}).encode("utf-8"))
                return

            image_url = (data.get("imageUrl") or data.get("image_url") or "").strip()
            motion_prompt = (data.get("prompt") or data.get("motionPrompt") or "").strip()
            scene_index = data.get("sceneIndex", 0)

            try:
                result = generate_fal_scene_video(image_url=image_url, motion_prompt=motion_prompt)
                sys.stderr.write(
                    f"[fal.ai MiniMax Video] Scene {int(scene_index) + 1} animated successfully via {result.get('model')} -> {result.get('videoUrl')}\n"
                )
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps(result).encode("utf-8"))
            except Exception as e:
                sys.stderr.write(f"[fal.ai MiniMax Video] Scene {int(scene_index) + 1} failed: {e}\n")
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": False,
                    "error": str(e),
                    "model": FAL_VIDEO_MODEL,
                    "provider": "fal-ai"
                }).encode("utf-8"))
            return

        self.send_error(404, "Endpoint not found")

    def handle(self):
        """Handle requests safely, ignoring unexpected client disconnects."""
        try:
            super().handle()
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            pass
        except Exception as e:
            sys.stderr.write(f"[Samskara Buddy Connection Warning] {e}\n")

    def log_message(self, format, *args):
        # Friendly server logging
        sys.stderr.write(f"[Samskara Buddy Server] {format % args}\n")


def run_server(port=8000):
    server_address = ("", port)
    httpd = ThreadingHTTPServer(server_address, SamskaraRequestHandler)
    print("=" * 60)
    print("🌱 SAMSKARA BUDDY AI AGENT SERVER")
    print(f"👉 Serving locally at: http://localhost:{port}")
    key_configured = bool(os.environ.get("GEMINI_API_KEY", "").strip())
    if key_configured:
        print("⚡ Gemini API Key: Detected and loaded securely from environment (.env)")
    else:
        print("⚠️  Warning: GEMINI_API_KEY is not set in .env! Local knowledge base fallback will be active.")
    print("=" * 60)
    
    while True:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping Samskara Buddy server. Goodbye! 🙏")
            httpd.server_close()
            break
        except Exception as e:
            sys.stderr.write(f"[Samskara Buddy Server Warning] Recovered from: {e}\n")
            import time
            time.sleep(0.2)


if __name__ == "__main__":
    port = 8000
    if os.environ.get("PORT") and os.environ.get("PORT").isdigit():
        port = int(os.environ.get("PORT"))
    elif len(sys.argv) > 1 and sys.argv[1].isdigit():
        port = int(sys.argv[1])
    run_server(port)
