# 🌱 Samskara Buddy

**Samskara Buddy** is an AI-powered learning companion web application designed for children aged 6–14 years. The application helps children learn and practice timeless Indian values and character principles (*Samskaras*) through an engaging, cute, and friendly AI companion named **Krish**.

> **Learn • Think • Act • Grow 🌱**

---

## 🌟 Official Character Design: Krish 🙏

Krish is the official AI companion of Samskara Buddy. The application incorporates Krish's 3D animated character throughout the user experience:
- **Hero Avatar**: Circular framed portrait of Krish with his teal hoodie, mor-pankh (peacock feather) shirt, and warm smile.
- **Card Badges**: Custom expressions for each learning stage:
  - **💡 Understand the Value**: Krish with his idea lightbulb (`krish-idea.jpg`)
  - **📖 Story Time**: Krish sitting cross-legged reading a book (`krish-reading.jpg`)
  - **💭 Think Time**: Krish reflecting with hand on chin (`krish-think.jpg`)
  - **🤔 What Would You Do?**: Krish gently waving and guiding (`krish-wave.jpg`)
  - **🎯 Krish's Daily Challenge**: Krish cheering with joy (`krish-happy.jpg`)

---

## 📚 Samskara Buddy Knowledge Base — Version 1

Krish's curriculum is built around 12 core values with relatable, child-friendly stories, thinking questions, real-life dilemmas, and daily challenges:

1. **🌟 Honesty (Satya)** — *Riya's Honest Effort*: Riya's mathematics test where she chose honest effort over copying.
2. **🙏 Respect (Aadara)** — *Arjun and Kabir's Project*: Learning to disagree politely without disrespecting others.
3. **💛 Kindness (Karuna / Daya)** — *Meera and the New Student*: Welcoming someone sitting alone at recess.
4. **🌸 Gratitude (Kritajnata)** — *Aarav and the Community Kitchen*: Realising the love and effort that goes into every meal.
5. **🛡️ Responsibility (Kartavya)** — *Dev and the Balcony Plants*: Keeping promises and caring for what is entrusted to you.
6. **⏰ Discipline (Anushasana)** — *Ananya and the Piano*: Understanding that small daily practice creates big, powerful improvement.
7. **❤️ Empathy (Sahanubhuti)** — *Rohan's Kind Heart*: Comforting a friend who lost a match instead of laughing.
8. **🦁 Courage (Dhairya / Sahas)** — *Sara and the Class Presentation*: Learning that courage means moving forward even when afraid.
9. **⏳ Patience (Dhairyam)** — *Ishaan Learns to Ride a Bicycle*: Staying calm and persistent when learning takes time.
10. **🛑 Self-Control (Atma-Samyama)** — *Vihaan and the Four Steps*: Managing anger with **STOP • BREATHE • THINK • RESPOND**.
11. **🎁 Sharing (Daan / Vibhajan)** — *Maya's Colouring Set*: Experiencing that joy doubles when shared.
12. **🌱 Helping Others (Seva / Sahayata)** — *Nikhil and the Visitor*: Guiding an elderly grandmother at a busy school exhibition.

---

## 🎯 Krish's 5-Part Pedagogical Format

Whenever any value is chosen or asked, Krish structures the journey into 5 distinct steps:

1. **💡 Understand the Value**: Clear, relatable explanation of the meaning in everyday life.
2. **📖 Story Time**: Engaging short story with *Krish's Wisdom* moral takeaway.
3. **💭 Think Time**: Reflective questions prompting independent thought.
4. **🤔 What Would You Do?**: Interactive scenario buttons with Krish's encouraging, non-shaming coaching.
5. **🎯 Krish's Daily Challenge**: Actionable mission for today, complete with interactive *"I Accept This Challenge! 🌟"* celebration.

---

## 🚀 How to Run with Gemini AI Brain

1. Ensure your `.env` file has your `GEMINI_API_KEY`:
   ```bash
   GEMINI_API_KEY="your_api_key_here"
   ```
2. Start the app:
   - **Option A (One-click on Windows)**: Double-click **`start.bat`**. It automatically starts the secure backend and opens `http://localhost:8000` in your browser.
   - **Option B (Command line)**:
     ```bash
     python server.py
     ```
     Then open `http://localhost:8000` in your browser.
3. Fill in:
   - **Child Name**
   - **Age (6–14)**
   - **Samskara / Value** (or click any of the 12 quick chips)
   - **Story Type**
   - Click **Start My Samskara Journey 🌱**!
4. Krish will think with Gemini AI and present a personalized 5-step journey:
   **VALUE → STORY → THINK → REAL LIFE → ACTION**

---

## 📂 Project Structure

```
SAMSKARA BUDDY AI AGENT/
├── index.html        # Main interface with Krish avatar and 5 learning cards
├── style.css         # Nature & Indian cultural styling, responsive layout, animations
├── app.js            # Frontend logic, audio narration, and fallback Samskara Knowledge Base
├── server.py         # Secure zero-dependency Python server (calls Gemini API with hidden key)
├── start.bat         # One-click Windows runner to launch server and open browser
├── assets/           # Official Krish character images (portrait, full body, 5 expression poses)
├── .env              # Environment file with GEMINI_API_KEY (never exposed to client)
├── config.js         # Client endpoint configuration
└── README.md         # Complete documentation
```
