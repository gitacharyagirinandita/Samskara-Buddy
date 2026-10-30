/**
 * SAMSKARA BUDDY — Application Logic
 * Krish AI Companion Engine
 * Target: Children aged 6–14
 */

// Comprehensive Samskara Knowledge Base for Krish (Version 1)
const SAMSKARA_DATA = {
  honesty: {
    title: "Honesty",
    sanskrit: "Satya (सत्य)",
    icon: "🌟",
    understand: "Honesty means telling the truth and doing what is right, even when nobody is watching. It also means not lying, not cheating, not copying someone else's work, and admitting mistakes.\n\nWhen we are honest, people believe us, we feel peaceful inside, we learn from our mistakes, and we build strong, lasting relationships.",
    story: {
      title: "Riya's Honest Effort",
      text: "Riya had a mathematics test. She had forgotten to study for one difficult question. During the exam, she noticed that her friend's answer was clearly visible on the desk right next to her.\n\nFor a moment, she thought about copying it. But Riya paused and decided to try the question herself with her own mind.\n\nShe did not get full marks. However, she felt truly proud because the work was hers. Her teacher smiled and told her:\n\n'An honest effort is more valuable than a copied success.'",
      moral: "An honest effort is more valuable than a copied success. Truth builds inner confidence."
    },
    thinkTime: [
      "Why do you think Riya felt proud even though she did not get full marks?",
      "How do you feel in your tummy when you tell the truth versus when you hide something?",
      "Why does honesty help parents, teachers, and friends trust us completely?"
    ],
    scenario: {
      question: "You accidentally break your friend's pencil box while playing. Nobody saw you. What would you do?",
      options: [
        { text: "Hide the broken pieces and pretend you know nothing about it.", correct: false, tip: "Hiding mistakes creates fear and worry. Admitting them takes courage!" },
        { text: "Go to your friend honestly, say you are sorry for playing carelessly, and offer to help fix or replace it.", correct: true, tip: "Spot on! That's true honesty. Admitting mistakes builds deep, lifelong trust." },
        { text: "Blame another classmate who was sitting nearby.", correct: false, tip: "Blaming others hurts friendships. Krish knows you are brave enough to speak the truth!" }
      ]
    },
    challenge: "Today, notice one moment when it may be easier to hide the truth. Choose honesty instead! Later, think about: How did being honest make you feel?"
  },

  respect: {
    title: "Respect",
    sanskrit: "Aadara (आदर)",
    icon: "🙏",
    understand: "Respect means treating people, yourself, animals, nature, and belongings with care and dignity.\n\nRespect does not mean that we must agree with everyone. We can disagree politely! Respect helps people feel safe, valued, heard, and appreciated, and helps us build healthy relationships.",
    story: {
      title: "Arjun and Kabir's Project",
      text: "Arjun and Kabir had different ideas for a school project. Arjun immediately said: 'Your idea is silly!' Kabir became quiet and sad.\n\nTheir teacher gently reminded Arjun: 'You can disagree without disrespecting someone.'\n\nArjun apologised. He listened carefully to Kabir's idea with an open heart. Finally, they combined both ideas and created a wonderful project that won appreciation from the whole class!",
      moral: "You can disagree without disrespecting someone. Respectful listening brings out the best in everyone."
    },
    thinkTime: [
      "How can we disagree with someone without hurting their feelings?",
      "Why is listening carefully when someone is speaking a sign of respect?",
      "What are small ways you show respect to nature, animals, and your school belongings?"
    ],
    scenario: {
      question: "Your friend likes a game that you don't like. They really want you to play it. What can you say respectfully?",
      options: [
        { text: "Say: 'That game is terrible and boring, only babies play that!'", correct: false, tip: "Putting down what others like hurts feelings. Let's think of a politer way!" },
        { text: "Say: 'I prefer playing tag, but thank you for inviting me! How about we play your game for 10 minutes and then play tag?'", correct: true, tip: "Spot on! Respecting someone's interest while sharing your preference is true maturity." },
        { text: "Walk away without saying anything and ignore them.", correct: false, tip: "Ignoring friends leaves them confused. A polite answer is always best." }
      ]
    },
    challenge: "Today, listen carefully to someone without interrupting them. Try your best to understand their point of view with your whole heart."
  },

  kindness: {
    title: "Kindness",
    sanskrit: "Karuna & Daya (दया)",
    icon: "💛",
    understand: "Kindness means being caring, helpful, gentle, and thoughtful towards others. Even a small act of kindness can make someone's day better!\n\nKindness makes others feel cared for, builds strong friendships, creates happiness, and inspires others around you to be kind too.",
    story: {
      title: "Meera and the New Student",
      text: "During lunch break, Meera noticed a new student sitting alone on a bench. Everyone else was talking and laughing with their usual friends.\n\nMeera walked over with a warm smile and said: 'Would you like to sit with us?'\n\nThe new student smiled with relief. That small act of kindness helped her feel welcome, and soon they were sharing snacks and laughter together.",
      moral: "Even a small act of kindness can make someone feel welcome and brighten their entire day."
    },
    thinkTime: [
      "Have you ever felt happy because someone was kind to you? How did it feel?",
      "Does kindness cost any money? How can a simple smile be an act of kindness?",
      "How can we show kindness to animals and plants around our home?"
    ],
    scenario: {
      question: "You see a classmate drop all their books in the hallway. Everyone is rushing past to recess. What would you do?",
      options: [
        { text: "Walk past quickly so you don't lose any time for your game.", correct: false, tip: "A kind heart stops to help when someone is struggling." },
        { text: "Stop, bend down, and cheerfully help them gather their books and papers.", correct: true, tip: "Brilliant! Helping someone in need makes the school a kinder, happier place for everyone." },
        { text: "Laugh at them for dropping the books.", correct: false, tip: "Making fun of accidents hurts. Kindness builds people up!" }
      ]
    },
    challenge: "Do one unexpected act of kindness today—without expecting anything in return! 🌟"
  },

  gratitude: {
    title: "Gratitude",
    sanskrit: "Kritajnata (कृतज्ञता)",
    icon: "🌸",
    understand: "Gratitude means noticing and appreciating the good things and people in our lives. It means being thankful.\n\nGratitude helps us appreciate what we have, notice small joys, feel more positive, and value the people who help and care for us every day.",
    story: {
      title: "Aarav and the Community Kitchen",
      text: "Every day, Aarav complained about the food in his lunchbox. One day, his school organised a visit to a community kitchen.\n\nAarav saw many volunteers working hard from early morning—chopping vegetables, kneading dough, and cooking hot meals for hundreds of people with dedication.\n\nAarav realised how much care, hard work, and effort goes into preparing just one meal. That evening, he hugged his mother and thanked her for cooking his meals with love.",
      moral: "Gratitude helps us appreciate the effort, love, and care behind everything we receive."
    },
    thinkTime: [
      "What are three things that you are grateful for today?",
      "How does saying a sincere 'Thank you' change the mood of the person hearing it?",
      "How do farmers, sunshine, and rain all work together so food reaches your plate?"
    ],
    scenario: {
      question: "Someone spends time helping you with a difficult task or homework. What can you do to show gratitude?",
      options: [
        { text: "Say nothing, close your books, and walk away immediately.", correct: false, tip: "Acknowledging help makes people feel valued and appreciated!" },
        { text: "Look at them with a smile, say a warm 'Thank you for explaining this so patiently!', and offer to help them in return.", correct: true, tip: "Wonderful! Sincere appreciation makes relationships strong and warm." },
        { text: "Complain that they took too long to explain.", correct: false, tip: "Gratitude values the intention and kindness of the helper." }
      ]
    },
    challenge: "Before sleeping tonight, think of three specific things you are thankful for today. 🙏"
  },

  responsibility: {
    title: "Responsibility",
    sanskrit: "Kartavya (कर्तव्य)",
    icon: "🛡️",
    understand: "Responsibility means taking care of your duties and accepting the results of your actions.\n\nBeing responsible helps us become dependable, organised, independent, and trustworthy in our family, school, and friendships.",
    story: {
      title: "Dev and the Balcony Plants",
      text: "Dev promised his mother that he would water the balcony plants every morning. For two days, he got busy playing and forgot.\n\nThe plants began to droop and look weak. Dev felt sad. He realised that responsibility means remembering and completing what we promise to do.\n\nHe created a small reminder chart near his desk and started taking care of the plants every day without being told. Soon, fresh green leaves sprouted!",
      moral: "Responsibility means keeping your promises and taking ownership of what is entrusted to you."
    },
    thinkTime: [
      "What is one responsibility that you have at home?",
      "Why does doing your duties on time without reminders make you feel proud and independent?",
      "What happens to a sports team or classroom when one person ignores their responsibility?"
    ],
    scenario: {
      question: "You promised your project team that you would complete your part of the project by tonight, but your friends invite you outside to play right now. What should you do?",
      options: [
        { text: "Go play for hours, and then make an excuse tomorrow that you had a headache.", correct: false, tip: "Making excuses breaks trust with your teammates." },
        { text: "Complete your part of the project first with full focus, and then join your friends to play stress-free!", correct: true, tip: "Excellent! Fulfilling duties first lets you enjoy your playtime completely stress-free!" },
        { text: "Ask your parents or sibling to do the project for you.", correct: false, tip: "It is your responsibility and your learning. Be proud of your own work!" }
      ]
    },
    challenge: "Choose one responsibility today—like packing your school bag, organizing your desk, or putting away your dishes—and complete it without anyone reminding you!"
  },

  discipline: {
    title: "Discipline",
    sanskrit: "Anushasana (अनुशासन)",
    icon: "⏰",
    understand: "Discipline means doing what needs to be done, even when you don't feel like doing it. It is not about being perfect—it is about practising good habits regularly!\n\nDiscipline helps us reach our goals, develop healthy habits, use time wisely, and become more confident.",
    story: {
      title: "Ananya and the Piano",
      text: "Ananya wanted to learn the piano. At first, she was excited. But after a few days, practising scales became difficult and repetitive. She wanted to skip practice.\n\nHer teacher told her: 'Small practice every day creates big improvement.'\n\nAnanya decided to practice for just a few focused minutes every single day. After several weeks, her fingers moved effortlessly across the keys, playing a beautiful song at the school concert!",
      moral: "Small practice repeated every day creates big, powerful improvement."
    },
    thinkTime: [
      "Why do small positive actions repeated every day become so powerful?",
      "What is one habit you wish you did every day without fail?",
      "How does discipline actually give you more free time rather than less?"
    ],
    scenario: {
      question: "You have an important exam next week. Your favourite show is starting on TV right now. How can you balance study and entertainment responsibly?",
      options: [
        { text: "Watch TV the whole evening and cram the night before the exam.", correct: false, tip: "Cramming causes stress and tiredness. Discipline plans ahead!" },
        { text: "Study your key topics with full focus for 45 minutes first, and enjoy a short TV break afterward.", correct: true, tip: "Superb! Balance and steady habits are the secret to mastering any goal." },
        { text: "Give up on studying completely.", correct: false, tip: "Discipline helps you stay on track toward your dreams." }
      ]
    },
    challenge: "Choose one good habit—like reading 5 pages of a book, exercising, or keeping your desk tidy—and practice it for 10 focused minutes today."
  },

  empathy: {
    title: "Empathy",
    sanskrit: "Sahanubhuti (सहानुभूति)",
    icon: "❤️",
    understand: "Empathy means trying to understand how another person might feel. It means putting yourself in someone else's situation!\n\nEmpathy helps us become better friends, better listeners, more caring, and more understanding.",
    story: {
      title: "Rohan's Kind Heart on the Court",
      text: "Rohan's friend lost a game and became very upset. Some children laughed and walked away.\n\nRohan remembered how he had felt when he had lost a competition earlier. Instead of laughing, he sat beside his friend and said:\n\n'I know losing can feel difficult. You played really well.' His friend looked up and smiled with comfort.",
      moral: "Empathy means feeling with someone else's heart and reminding them they are not alone."
    },
    thinkTime: [
      "How would you feel if everyone laughed when you made a mistake?",
      "When someone is quiet or upset, how can you show them you care without overwhelming them?",
      "Why is empathy the foundation of every great friendship?"
    ],
    scenario: {
      question: "A new child joins your class and does not speak much, sitting quietly during recess. What might they be feeling, and how could you help?",
      options: [
        { text: "Assume they are unfriendly and avoid talking to them.", correct: false, tip: "Shyness often looks like quietness. Empathy looks deeper!" },
        { text: "Realise they might be feeling nervous in a new place. Walk over, smile warmly, introduce yourself, and invite them to join your group.", correct: true, tip: "Spot on! That simple warmth can melt their nervous feelings instantly." },
        { text: "Point and whisper about them with other students.", correct: false, tip: "Whispering makes people feel insecure. A welcoming smile is much kinder!" }
      ]
    },
    challenge: "Try to understand how one person around you may be feeling today. Listen carefully before giving your opinion."
  },

  courage: {
    title: "Courage",
    sanskrit: "Dhairya & Sahas (साहस)",
    icon: "🦁",
    understand: "Courage means doing what is right even when you feel afraid or nervous. Being courageous does not mean that you never feel fear—it means moving forward even when you feel afraid!\n\nCourage helps us face challenges, speak the truth, try new things, and stand up for what is fair and right.",
    story: {
      title: "Sara and the Class Presentation",
      text: "Sara was afraid of speaking in front of her class. Her heart beat fast whenever she had to give a presentation. She wanted to avoid it.\n\nBut she decided to practise. On presentation day, she was still nervous. She took a deep breath and began. Her voice shook at first, but she continued with determination.\n\nSara learned something important: Courage means moving forward even when you feel afraid.",
      moral: "Courage means moving forward even when you feel afraid."
    },
    thinkTime: [
      "Can a person feel afraid and still be courageous?",
      "Why does it take courage to ask a question in class or admit a mistake?",
      "When was a time you felt nervous but did the right thing anyway?"
    ],
    scenario: {
      question: "You see someone being teased unfairly in the playground. What are safe ways to help?",
      options: [
        { text: "Join in the teasing so the bullies don't tease you.", correct: false, tip: "Never join in hurting someone. Courage protects others." },
        { text: "Stand beside the student, calmly tell the teasers 'Stop, that is not nice', and alert a teacher or monitor right away.", correct: true, tip: "Heroic! Standing up for someone safely and alerting an adult shows true courage." },
        { text: "Walk away quietly and pretend you never saw it.", correct: false, tip: "Courage means choosing to help when someone is being treated unfairly." }
      ]
    },
    challenge: "Do one small thing today that you have been nervous to try—like raising your hand to answer a question, trying a new activity, or speaking to someone new."
  },

  patience: {
    title: "Patience",
    sanskrit: "Dhairyam (धैर्य)",
    icon: "⏳",
    understand: "Patience means staying calm when things take time or do not happen immediately.\n\nPatience helps us make better decisions, stay calm, learn difficult skills, and handle challenges much better.",
    story: {
      title: "Ishaan Learns to Ride a Bicycle",
      text: "Ishaan was learning to ride a bicycle. He fell several times and felt like giving up: 'I can't do this!'\n\nHis father gently told him: 'Learning takes time.'\n\nIshaan tried again the next day. And again. Finally, he learned to balance smoothly, enjoying the cool breeze on his face. He realised that good things sometimes need patience and practice.",
      moral: "Good things take time. Patience turns small repeated efforts into great mastery."
    },
    thinkTime: [
      "What is something you learned slowly that you are now proud of?",
      "When do you feel most impatient, and what happens when you lose your calm?",
      "Why does taking three slow deep breaths help your mind stay relaxed?"
    ],
    scenario: {
      question: "You are waiting in a long queue at the school canteen and feel very impatient. What can you do to stay calm?",
      options: [
        { text: "Push in front of smaller children and cut the queue.", correct: false, tip: "Cutting queues is unfair to everyone who has been waiting patiently." },
        { text: "Take a deep breath, wait your turn gracefully, and hum a cheerful song or chat politely with the friend beside you.", correct: true, tip: "Superb! Patience turns waiting time into peaceful, happy time." },
        { text: "Shout at the canteen staff to hurry up.", correct: false, tip: "Being rude never makes things faster. Patience shows maturity." }
      ]
    },
    challenge: "The next time you have to wait today, take a deep breath and practise being calm, cheerful, and patient."
  },

  "self-control": {
    title: "Self-Control",
    sanskrit: "Atma-Samyama (आत्म-संयम)",
    icon: "🛑",
    understand: "Self-control means managing your actions, emotions, and impulses before reacting. It does not mean hiding your feelings—it means choosing a good way to express them!\n\nSelf-control helps us avoid unnecessary problems, make better decisions, manage anger, and stay focused on what truly matters.",
    story: {
      title: "Vihaan and the Four Steps",
      text: "Vihaan became very angry when his younger brother accidentally deleted his game progress. He wanted to shout.\n\nThen he remembered something his teacher taught: Stop. Breathe. Think. Respond.\n\nVihaan closed his eyes and took three deep breaths. Then he calmly explained how he felt. His brother apologised sincerely. Together, they tried to solve the problem peacefully.",
      moral: "Self-control gives you power over your anger instead of letting anger control you."
    },
    thinkTime: [
      "What can happen when we react immediately while angry?",
      "How does taking 3 slow deep breaths help your brain calm down before speaking?",
      "Can you think of a situation where staying calm helped you prevent an argument?"
    ],
    scenario: {
      question: "Someone says something unkind that makes you angry. What can you do before responding?",
      options: [
        { text: "Shout back immediately and say something even meaner.", correct: false, tip: "Reacting in anger escalates arguments into fights." },
        { text: "Practice: 🛑 STOP • 🌬️ BREATHE • 🧠 THINK • 💬 RESPOND. Take a breath and respond calmly or walk away.", correct: true, tip: "Spot on! That is the true superpower of Self-Control in everyday life." },
        { text: "Hold a secret grudge and plot revenge.", correct: false, tip: "Holding grudges only harms your own peace of mind." }
      ]
    },
    challenge: "Practise today: 🛑 STOP • 🌬️ BREATHE • 🧠 THINK • 💬 RESPOND. Use this superpower at least once today!"
  },

  sharing: {
    title: "Sharing",
    sanskrit: "Daan & Vibhajan (दान)",
    icon: "🎁",
    understand: "Sharing means willingly allowing others to use, enjoy, or benefit from something when appropriate. Sharing can include things, time, knowledge, and ideas!\n\nSharing teaches us generosity, cooperation, friendship, and caring for others.",
    story: {
      title: "Maya's Colouring Set",
      text: "Maya brought her favourite colouring set to school. Her friend forgot hers.\n\nMaya had only one favourite colour left. She wanted to keep it for herself. Then she remembered how disappointed her friend looked.\n\nMaya shared the colour willingly. Soon, both children were happily creating drawings together, sharing ideas and giggles.",
      moral: "Joy never decreases by being shared—it doubles!"
    },
    thinkTime: [
      "Does sharing always mean giving away everything you own?",
      "How can you share your knowledge with a classmate who is finding a lesson hard?",
      "Why is playing a game together much more fun than playing alone?"
    ],
    scenario: {
      question: "You have one board game that everyone in your group wants to play. How can everyone get a fair chance?",
      options: [
        { text: "Only let your best friend play and tell the rest to go away.", correct: false, tip: "Excluding others leaves them feeling left out and hurt." },
        { text: "Suggest playing in teams, taking turns, or rotating rounds so that everyone gets a fair chance to participate.", correct: true, tip: "Brilliant! Fair sharing makes games enjoyable for the whole group." },
        { text: "Pack the game away so nobody plays.", correct: false, tip: "Games are meant to share joy and bring friends together!" }
      ]
    },
    challenge: "Share one thing today—your time, knowledge, kindness, or something appropriate—with someone around you."
  },

  "helping others": {
    title: "Helping Others",
    sanskrit: "Seva & Sahayata (सेवा)",
    icon: "🌱",
    understand: "Helping others means using your abilities, time, or effort to make someone's situation better.\n\nHelping others builds community, creates kindness, makes people feel supported, and teaches us that small everyday actions matter deeply.",
    story: {
      title: "Nikhil and the Visitor",
      text: "During a busy school event, everyone was rushing about. An elderly visitor was looking for the auditorium and seemed confused.\n\nNikhil noticed her. He politely asked if she needed help and showed her the way with a warm smile.\n\nIt took only a few minutes. But the visitor smiled and thanked him warmly. Nikhil realised: Sometimes a small help can make a big difference.",
      moral: "Sometimes a small help can make a big, beautiful difference in someone's day."
    },
    thinkTime: [
      "Can you help someone even if you don't have money or special skills? How?",
      "What are three small ways you can help your family at home every day?",
      "How does helping someone make your own heart feel warm and happy?"
    ],
    scenario: {
      question: "Your friend is struggling to understand a lesson. You have already finished your work. What could you do?",
      options: [
        { text: "Just give them your worksheet so they can copy your answers.", correct: false, tip: "Copying doesn't help them learn or understand the concept." },
        { text: "Sit beside them and patiently explain the concept step-by-step until they understand it themselves.", correct: true, tip: "Wonderful! Real helping empowers others to succeed on their own." },
        { text: "Tell them they should have listened better in class.", correct: false, tip: "Criticizing someone when they are struggling hurts their confidence." }
      ]
    },
    challenge: "Look around today and ask yourself: 'Is there someone I can help?' Do one small helpful action before the day ends. 🌱"
  }
};

// Aliases for user convenience
SAMSKARA_DATA["satya"] = SAMSKARA_DATA["honesty"];
SAMSKARA_DATA["aadara"] = SAMSKARA_DATA["respect"];
SAMSKARA_DATA["karuna"] = SAMSKARA_DATA["kindness"];
SAMSKARA_DATA["daya"] = SAMSKARA_DATA["kindness"];
SAMSKARA_DATA["kritajnata"] = SAMSKARA_DATA["gratitude"];
SAMSKARA_DATA["kartavya"] = SAMSKARA_DATA["responsibility"];
SAMSKARA_DATA["anushasana"] = SAMSKARA_DATA["discipline"];
SAMSKARA_DATA["sahanubhuti"] = SAMSKARA_DATA["empathy"];
SAMSKARA_DATA["courageous"] = SAMSKARA_DATA["courage"];
SAMSKARA_DATA["dhairya"] = SAMSKARA_DATA["courage"];
SAMSKARA_DATA["sahas"] = SAMSKARA_DATA["courage"];
SAMSKARA_DATA["dhairyam"] = SAMSKARA_DATA["patience"];
SAMSKARA_DATA["self control"] = SAMSKARA_DATA["self-control"];
SAMSKARA_DATA["selfcontrol"] = SAMSKARA_DATA["self-control"];
SAMSKARA_DATA["atma-samyama"] = SAMSKARA_DATA["self-control"];
SAMSKARA_DATA["daan"] = SAMSKARA_DATA["sharing"];
SAMSKARA_DATA["seva"] = SAMSKARA_DATA["helping others"];
SAMSKARA_DATA["sahayata"] = SAMSKARA_DATA["helping others"];
SAMSKARA_DATA["helping"] = SAMSKARA_DATA["helping others"];

// Fallback dynamic generator for any other value typed by a child
function generateDynamicSamskara(valueName) {
  const cleanName = valueName.trim();
  const capitalized = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);

  return {
    title: capitalized,
    sanskrit: "Samskara (संस्कार)",
    icon: "🌿",
    understand: `${capitalized} is a wonderful virtue and samskara that helps your character shine. When you practise ${capitalized.toLowerCase()}, you make good choices that build trust, spread peace, and help you grow into a wise and loving person. It is like a seed of goodness planted in your heart!`,
    story: {
      title: `The Story of the Golden Garden and ${capitalized}`,
      text: `In a tranquil village nestled near the Himalayas, a wise teacher tended to an extraordinary garden called 'The Garden of Values'. Every plant in this garden drew its water not from rain alone, but from the good deeds of the children living in the village.\n\nWhen children practiced ${capitalized.toLowerCase()}, the flowers glowed with golden light and gave off a fragrance that brought happiness to everyone who breathed it in. The teacher told the children: '${capitalized} is not just an idea in a book—it is a superpower you bring alive through your daily actions.'`,
      moral: `Every small choice to practice ${capitalized.toLowerCase()} brightens the world around you.`
    },
    thinkTime: [
      `How does practicing ${capitalized.toLowerCase()} help your relationships with your family and friends?`,
      `Can you think of a hero, teacher, or family member who shows great ${capitalized.toLowerCase()}?`,
      `What would school be like if every student practiced ${capitalized.toLowerCase()} every day?`
    ],
    scenario: {
      question: `You are in a situation where taking a shortcut is easy, but showing true ${capitalized.toLowerCase()} takes a little extra effort and care.`,
      options: [
        { text: "Take the quick, selfish shortcut and don't worry about others.", correct: false, tip: `Shortcuts rarely build strong character. Krish knows you can show ${capitalized.toLowerCase()}!` },
        { text: `Choose the path of ${capitalized.toLowerCase()}, taking the time to do what is fair and right.`, correct: true, tip: `Bravo! Choosing ${capitalized.toLowerCase()} is what makes a true Samskara champion.` },
        { text: "Wait for someone else to make the decision for you.", correct: false, tip: "You have the power to make good choices yourself!" }
      ]
    },
    challenge: `Find at least two opportunities today to actively demonstrate ${capitalized.toLowerCase()} at school or at home. Reflect on how it felt before you go to sleep!`
  };
}

// DOM Elements
const childNameInput = document.getElementById('child-name-input');
const childAgeSelect = document.getElementById('child-age-select');
const valueInput = document.getElementById('value-input');
const storyTypeSelect = document.getElementById('story-type-select');
const valueForm = document.getElementById('value-form');
const askBtn = document.getElementById('ask-btn');
const apiNoticeBanner = document.getElementById('api-notice-banner');
const aiStatusBadge = document.getElementById('ai-status-badge');
const responseContainer = document.getElementById('response-container');
const krishGreeting = document.getElementById('krish-greeting');
const krishStatusText = document.getElementById('krish-status-text');
const krishAvatarImg = document.getElementById('krish-avatar-img');

// 5-Part Section Elements (VALUE -> STORY -> THINK -> REAL LIFE -> ACTION)
const currentValueTitle = document.getElementById('current-value-title');
const valueSanskrit = document.getElementById('value-sanskrit');
const contentUnderstand = document.getElementById('content-understand');
const contentStoryTitle = document.getElementById('content-story-title');
const contentStory = document.getElementById('content-story');
const contentMoral = document.getElementById('content-moral');
const contentThinkList = document.getElementById('content-think-list');
const contentScenario = document.getElementById('content-scenario');
const scenarioOptions = document.getElementById('scenario-options');
const scenarioFeedback = document.getElementById('scenario-feedback');
const contentChallenge = document.getElementById('content-challenge');
const completeChallengeBtn = document.getElementById('complete-challenge-btn');
const challengeStatus = document.getElementById('challenge-status');
const listenBtn = document.getElementById('listen-btn');
const resetBtn = document.getElementById('reset-btn');
const storyIllustrations = document.getElementById('story-illustrations');

// Chips
const chips = document.querySelectorAll('.chip');

// Active Samskara State
let activeSamskara = null;
let isSpeaking = false;

// ============================================================================
// GEMINI AI INTEGRATION ENGINE (Via Secure Server Backend)
// The API Key is held securely on the server and NEVER exposed to the client.
// ============================================================================

/**
 * Helper to resolve the correct backend URL whether served via http://localhost:8000,
 * another dev server (e.g. Live Server on 5500), or file://.
 */
function getBackendUrl(path) {
  // If explicitly configured with absolute URL
  if (window.CONFIG && window.CONFIG.API_BASE_URL) {
    return `${window.CONFIG.API_BASE_URL.replace(/\/$/, '')}${path}`;
  }
  // If running from file:// or a different development server port
  if (window.location.protocol === 'file:' || (window.location.port && window.location.port !== '8000')) {
    return `http://localhost:8000${path}`;
  }
  // Default relative path when served by server.py on port 8000
  return path;
}

/**
 * Calls the secure backend endpoint to request a personalized journey from Gemini AI.
 */
async function fetchGeminiKrishJourney(payload) {
  const endpoint = getBackendUrl('/api/journey');

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    let errDetail = `Server error (${response.status})`;
    try {
      const errJson = await response.json();
      if (errJson.error) errDetail = errJson.error;
    } catch (_) {}
    throw new Error(errDetail);
  }

  const result = await response.json();
  if (!result.success || !result.data) {
    throw new Error(result.error || 'No journey data returned from server.');
  }

  return result.data;
}

/**
 * Checks backend health and updates the header AI status badge.
 */
async function checkBackendHealth() {
  try {
    const healthUrl = getBackendUrl('/api/health');
    const resp = await fetch(healthUrl);
    if (resp.ok) {
      const data = await resp.json();
      if (aiStatusBadge) {
        if (data.minimaxConfigured) {
          aiStatusBadge.textContent = "⚡ Gemini Brain | 🎙️ MiniMax Voice Active";
          aiStatusBadge.className = "ai-badge";
        } else if (data.geminiKeyConfigured) {
          aiStatusBadge.textContent = "⚡ Gemini Brain | 🎙️ Indian English Voice Active";
          aiStatusBadge.className = "ai-badge";
        } else {
          aiStatusBadge.textContent = "🌱 Knowledge Base Ready";
        }
        return;
      }
    }
  } catch (_) {
    // Backend offline
  }
  if (aiStatusBadge) {
    aiStatusBadge.textContent = "🌱 Knowledge Base Ready";
  }
}

/**
 * Context-Aware Evaluator for "What Would You Do?" real-life dilemma options.
 * Identifies the appropriate vs inappropriate choice using structured metadata,
 * semantic clues in the option tip and text, and situational value context.
 */
function resolveOptionCorrectness(opt, idx, allOptions, question, value) {
  if (typeof opt.correct === 'boolean') {
    return opt.correct;
  }
  if (typeof opt.correct === 'string') {
    return opt.correct.toLowerCase() === 'true';
  }

  const tipText = (opt.tip || '').toLowerCase();
  const optText = (opt.text || '').toLowerCase();

  // Positive reinforcement signals
  const isPositiveTip = /(spot on|brilliant|wonderful|great choice|bravo|wise choice|superb|best choice|true\s+(?:honesty|respect|kindness|courage|responsibility|empathy|gratitude|discipline)|builds\s+trust|takes\s+ownership|empowers|helpful|proud)/i.test(tipText);
  // Negative coaching / consequence signals
  const isNegativeTip = /(mistake|hiding|blaming|consequence|hurts|harm|worry|fear|escalates|anger|shortcut|instead|not the best|reconsider|hurry|copying|criticizing|ignoring|putting down|rude)/i.test(tipText);

  if (isPositiveTip && !isNegativeTip) return true;
  if (isNegativeTip && !isPositiveTip) return false;

  // Obvious negative action signals in the option text
  const isNegativeAction = /(hide|hiding|blame|blaming|pretend|walk away|ignore|say nothing|run away|shout|complain|give up|cheat|copy|lie|lying|yell|push)/i.test(optText);
  if (isNegativeAction) return false;

  // Fallback: check if any sibling option has an explicit positive flag
  if (Array.isArray(allOptions)) {
    const explicitlyTrueIdx = allOptions.findIndex(o => o.correct === true || o.correct === 'true');
    if (explicitlyTrueIdx !== -1) {
      return idx === explicitlyTrueIdx;
    }
  }

  // Standard fallback
  return idx === 1;
}

// Render the 5-card layout from a Samskara data object
// 1. VALUE (Understand) -> 2. STORY (Story Time) -> 3. THINK (Think Time) -> 4. REAL LIFE (Scenario) -> 5. ACTION (Challenge)
function renderSamskaraCard(data, query) {
  if (krishAvatarImg) {
    krishAvatarImg.src = 'assets/krish-portrait.jpg';
  }

  // Update Krish Hero Greeting
  if (data.greeting) {
    krishGreeting.innerHTML = `<strong>${data.greeting}</strong>`;
  } else {
    krishGreeting.innerHTML = `
      <strong>Wonderful choice!</strong> Let's discover <strong>${data.title}</strong> (${data.sanskrit || 'Samskara'}). 
      Explore the 5 steps below to understand, think, and practice this Samskara! 🌱
    `;
  }

  // 1. VALUE: Understand the Value
  currentValueTitle.textContent = `${data.icon || '🌱'} ${data.title}`;
  valueSanskrit.textContent = data.sanskrit || 'Samskara (संस्कार)';
  contentUnderstand.textContent = data.understand || '';

  // 2. STORY: Story Time
  contentStoryTitle.textContent = data.story?.title || `${data.title} in Action`;
  contentStory.textContent = data.story?.text || '';
  contentMoral.textContent = data.story?.moral || '';

  // 3. THINK: Think Time
  contentThinkList.innerHTML = '';
  if (Array.isArray(data.thinkTime)) {
    data.thinkTime.forEach(question => {
      const li = document.createElement('li');
      li.textContent = question;
      contentThinkList.appendChild(li);
    });
  }

  // 4. REAL LIFE: What Would You Do?
  contentScenario.textContent = data.scenario?.question || '';
  scenarioOptions.innerHTML = '';
  scenarioFeedback.className = 'scenario-feedback hidden';
  scenarioFeedback.textContent = '';

  if (Array.isArray(data.scenario?.options)) {
    data.scenario.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'scenario-btn';
      btn.innerHTML = `<strong>Option ${String.fromCharCode(65 + idx)}:</strong> ${opt.text}`;
      
      btn.addEventListener('click', () => {
        const isAppropriate = resolveOptionCorrectness(opt, idx, data.scenario.options, data.scenario.question, data.title);
        
        // Remove previous selection classes on all buttons
        const allBtns = scenarioOptions.querySelectorAll('.scenario-btn');
        allBtns.forEach(b => b.classList.remove('correct-choice', 'incorrect-choice'));

        const childName = (childNameInput?.value || '').trim();
        const nameStr = childName ? ` ${childName}` : '';
        const valueName = data.title || 'this value';

        if (isAppropriate) {
          btn.classList.add('correct-choice');
          scenarioFeedback.className = 'scenario-feedback correct';
          scenarioFeedback.style.backgroundColor = '#ECFDF5';
          scenarioFeedback.style.borderColor = '#A7F3D0';
          scenarioFeedback.style.color = '#065F46';

          const praiseBody = opt.tip || `Choosing to do what is right takes true heart and courage. By making this choice, you are practicing ${valueName} in real life!`;
          scenarioFeedback.innerHTML = `
            <div class="feedback-header">🌟 <strong>Krish says:</strong> Spot on${nameStr}! That is a wonderful, helpful choice!</div>
            <div class="feedback-body">${praiseBody}</div>
          `;
          playKrishFeedbackVoice(`Spot on${nameStr}! That is a wonderful, helpful choice! ${praiseBody}`);
        } else {
          btn.classList.add('incorrect-choice');
          scenarioFeedback.className = 'scenario-feedback incorrect';
          scenarioFeedback.style.backgroundColor = '#FFFBEB';
          scenarioFeedback.style.borderColor = '#FCD34D';
          scenarioFeedback.style.color = '#92400E';

          const correctiveBody = opt.tip || `If we take this path, it might cause misunderstandings or make things harder for others and ourselves later.`;
          scenarioFeedback.innerHTML = `
            <div class="feedback-header">💡 <strong>Krish suggests:</strong> Let us pause and think about this together${nameStr}...</div>
            <div class="feedback-body">${correctiveBody}</div>
            <div class="feedback-retry">🌱 <em>Would this choice help or make things harder? Take another look at the options above and try again!</em></div>
          `;
          playKrishFeedbackVoice(`Let us pause and think about this together${nameStr}. ${correctiveBody} Would this choice help or make things harder? Take another look at the options above and try again!`);
        }
      });

      scenarioOptions.appendChild(btn);
    });
  }

  // 5. ACTION: Krish's Daily Challenge
  contentChallenge.textContent = data.challenge || '';
  challengeStatus.classList.add('hidden');
  completeChallengeBtn.classList.remove('hidden');

  // Highlight matching chip if any
  if (query) {
    chips.forEach(chip => {
      if (chip.getAttribute('data-value').toLowerCase() === query) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  // Trigger AI Story Illustrations asynchronously (Beginning, Middle, Ending)
  const childName = (childNameInput?.value || '').trim();
  const age = parseInt(childAgeSelect?.value || '8', 10) || 8;
  const storyType = storyTypeSelect?.value || 'Everyday School & Friends';
  loadStoryIllustrations(childName, age, data.title, storyType, data.story);

  // Reveal Response Container & Smooth Scroll
  responseContainer.classList.remove('hidden');
  responseContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Feature 1: Preload modular section audio and start Section 1 playback
  preloadSectionAudios(data, childName);
  if (!isAudioPlaying) {
    playSectionAudio('understand', true);
  }
}

// ============================================================================
// AI STORY TIME ILLUSTRATIONS (Beginning, Middle, Ending Visuals)
// ============================================================================

// ============================================================================
// AI STORY TIME ILLUSTRATIONS (Beginning, Challenge, Ending Visuals)
// Strict single-request queue (concurrency = 1) with exponential backoff on 429
// and resilient story-derived prompts strictly preserving CHILD NAME != STORY CHARACTER.
// ============================================================================

let currentIllustrationRequestId = 0;

/**
 * Derives initial story-grounded scenes and protagonist directly from the story text.
 * Strictly guarantees CHILD NAME != STORY CHARACTER (e.g. childName is the listener, not protagonist).
 * Character appearance, species, and setting are strictly derived from the actual story.
 * NO generic schoolboy colouring sets, and NO hardcoded static image URLs.
 */
function deriveStoryScenesFromText(story, value, storyType, childName) {
  const title = (story && story.title) || `The Journey of ${value}`;
  const text = (story && story.text) || '';
  const combined = (title + ' ' + text + ' ' + (storyType || '')).toLowerCase();

  // Extract candidate protagonist name from title or text
  const cleanTitle = title.replace(/['’]/g, ' ');
  const titleWords = cleanTitle.split(/\s+/).filter(w =>
    w && /^[A-Z]/.test(w) && !/^(The|A|An|And|In|On|Of|To|For|With|Story|Lesson|Journey|Mix-up|Wisdom|Steps)$/i.test(w)
  );

  let protagonist = titleWords.length > 0 ? titleWords[0] : '';
  if (!protagonist || (childName && protagonist.toLowerCase() === childName.toLowerCase())) {
    const match = text.match(/\b([A-Z][a-z]{2,})\b/);
    if (match && (!childName || match[1].toLowerCase() !== childName.toLowerCase())) {
      protagonist = match[1];
    } else {
      protagonist = "The Hero";
    }
  }

  // Detect Story Archetype, Species, and Cultural Setting
  const isElephant = /elephant|gajraj|haathi|trunk/i.test(combined);
  const isLion = /lion|sher|simha/i.test(combined);
  const isRabbit = /rabbit|hare|khargosh/i.test(combined);
  const isTurtle = /turtle|tortoise|kachhua/i.test(combined);
  const isMonkey = /monkey|bandar|vanara/i.test(combined);
  const isDeer = /deer|hiran|mrig/i.test(combined);
  const isBird = /dove|pigeon|crow|sparrow|eagle|hawk|peacock|swan/i.test(combined);
  const isAnimal = isElephant || isLion || isRabbit || isTurtle || isMonkey || isDeer || isBird || /animal|panchatantra|jataka/i.test(combined);

  const isEkalavya = /ekalavya|drona/i.test(combined);
  const isAncient = isEkalavya || /mythology|history|epic|gurukula|hermitage|ashram|vedic|ancient|sage|rishi|shibi|rama|krishna|arjun|king|prince|palace/i.test(combined);

  let charAnchor = '';
  let setting = '';
  let charType = 'human child';

  if (isElephant) {
    charType = 'animal';
    charAnchor = `${protagonist}, a gentle giant Indian elephant with soft gray wrinkled skin, warm expressive dark eyes, curved ivory tusks, and large floppy ears, completely natural animal form`;
    setting = 'a lush green tropical Indian forest with tall Sal trees and clear stream';
  } else if (isLion) {
    charType = 'animal';
    charAnchor = `${protagonist}, a majestic yet friendly golden lion with a soft fluffy mane and warm kind dark eyes, natural animal form`;
    setting = 'a sunlit golden jungle clearing under ancient banyan trees';
  } else if (isRabbit) {
    charType = 'animal';
    charAnchor = `${protagonist}, an adorable quick-witted rabbit with soft fluffy fur, long ears, and bright curious eyes, natural animal form`;
    setting = 'a vibrant flowering green meadow and forest path';
  } else if (isTurtle) {
    charType = 'animal';
    charAnchor = `${protagonist}, a wise gentle tortoise with a patterned olive shell and kind patient eyes, natural animal form`;
    setting = 'a serene riverbank with smooth river pebbles and green reeds';
  } else if (isAnimal) {
    charType = 'animal';
    charAnchor = `${protagonist}, a friendly expressive animal character with warm eyes and natural animal form`;
    setting = 'a vibrant lush green forest and pond under clear blue skies';
  } else if (isEkalavya) {
    charAnchor = `An 11-year-old ancient Indian boy named Ekalavya, youthful round face, warm dusky brown skin, expressive determined dark brown eyes, black wavy hair tied in a neat high topknot with a simple cord, wearing traditional ancient Indian rustic earthen-brown cotton dhoti wrap, rudraksha bead wristband, wooden recurve bow, feathered arrows in woven back quiver, barefoot`;
    setting = 'ancient Indian Gurukula hermitage and serene Vedic forest under tall Sal trees';
  } else if (isAncient) {
    const isKing = /king|shibi|raja|prince/i.test(combined);
    if (isKing) {
      charAnchor = `${protagonist}, a noble ancient Indian ruler with warm brown skin, neatly groomed dark hair, wearing ornate traditional Indian royal silk robes and gold ornaments`;
      setting = 'an ancient Indian palace courtyard with carved stone pillars and warm sunlight';
    } else {
      charAnchor = `${protagonist}, a young ancient Indian child with warm brown skin, expressive dark eyes, traditional earthen cotton dhoti, barefoot`;
      setting = 'an ancient Indian Gurukula hermitage under lush sacred banyan trees with thatched cottages';
    }
  } else {
    charAnchor = `${protagonist}, a cheerful young Indian child with warm brown skin, bright expressive dark eyes, and neat everyday clothing`;
    setting = 'a bright, cheerful community setting with warm welcoming sunlight';
  }

  // Parse actual sentences from story text to ground each scene
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim().replace(/\s+/g, ' '))
    .filter(s => s.length > 5);

  const cleanAction = (str) => {
    return (str || '')
      .replace(/[^\w\s]/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 120);
  };

  const begCaption = sentences.length > 0 ? sentences[0] : `${protagonist} begins the story in ${setting}.`;
  const midCaption = sentences.length > 2
    ? sentences[Math.floor(sentences.length / 2)]
    : (sentences.length > 1 ? sentences[1] : `${protagonist} faces a meaningful challenge.`);
  const endCaption = sentences.length > 1 ? sentences[sentences.length - 1] : `${protagonist} shares the joy of ${value}.`;

  const action1 = cleanAction(begCaption);
  const action2 = cleanAction(midCaption);
  const action3 = cleanAction(endCaption);

  const prompt1 = `3D Pixar Disney animated cinematic storybook illustration of ${charAnchor}, ${action1}, in ${setting}, soft morning sunlight, rich vibrant colors, culturally authentic, child-friendly.`;
  const prompt2 = `3D Pixar Disney animated cinematic storybook illustration of THE EXACT SAME ${charAnchor}, ${action2}, in ${setting}, dramatic warm lighting, rich vibrant colors, culturally authentic, child-friendly.`;
  const prompt3 = `3D Pixar Disney animated cinematic storybook illustration of THE EXACT SAME ${charAnchor}, ${action3}, in ${setting}, bright golden celebration sunlight, rich vibrant colors, culturally authentic, child-friendly.`;

  return {
    characterProfile: {
      protagonistName: protagonist,
      characterType: charType,
      appearanceAndClothing: charAnchor,
      settingDescription: setting
    },
    scenes: [
      {
        phase: 'beginning',
        title: 'Scene 1: The Beginning',
        caption: begCaption,
        imagePrompt: prompt1,
        imageUrl: '',
        seed: 1042
      },
      {
        phase: 'middle',
        title: 'Scene 2: The Challenge',
        caption: midCaption,
        imagePrompt: prompt2,
        imageUrl: '',
        seed: 3042
      },
      {
        phase: 'ending',
        title: 'Scene 3: The Resolution',
        caption: endCaption,
        imagePrompt: prompt3,
        imageUrl: '',
        seed: 5042
      }
    ]
  };
}

// Render fallback box for a specific scene card
function renderSceneFallbackBox(wrap, scene, headline) {
  if (!wrap) return;
  const phase = scene.phase || '';
  const phaseIcons = {
    beginning: '🌱',
    middle: '⚡',
    ending: '🌟'
  };
  const phaseBadges = {
    beginning: 'Scene 1: The Beginning',
    middle: 'Scene 2: The Challenge',
    ending: 'Scene 3: The Resolution'
  };
  const icon = phaseIcons[phase] || '🎨';
  const badgeText = scene.badgeText || phaseBadges[phase] || headline || 'Story Scene';

  wrap.innerHTML = `
    <div class="scene-img-fallback-box">
      <span class="scene-phase-badge">${badgeText}</span>
      <div class="fallback-icon">${icon}</div>
      <div class="fallback-tag">Krish Story Moment</div>
      <div class="fallback-text">${headline || scene.title || scene.caption || ''}</div>
    </div>
  `;
}

// Independent Image Request handler per scene via Cloudflare Workers AI backend (/api/generate-scene-image)
// Strict single-request queue: never sends concurrent requests.
function loadSingleSceneImage(scene, idx, wrap, requestId) {
  return new Promise((resolve) => {
    if (!wrap || requestId !== currentIllustrationRequestId) return resolve();

    const sceneNum = idx + 1;
    const badgeText = scene.badgeText || `Scene ${sceneNum}`;
    const headline = scene.title || badgeText;

    const activeSpinnerLabel = wrap.querySelector('.scene-loading-label');
    if (activeSpinnerLabel) {
      activeSpinnerLabel.textContent = `Krish is painting Scene ${sceneNum}: ${scene.title || `Scene ${sceneNum}`}... 🎨`;
    }

    let isSettled = false;
    const finish = () => {
      if (!isSettled) {
        isSettled = true;
        // Brief 1.0s settle delay after complete download/render before starting the next scene
        setTimeout(resolve, 1000);
      }
    };

    let attempt = 0;
    const maxRetries = 2;
    const maxAttempts = maxRetries + 1;
    let backoffMs = 4000;
    let lastErrorMsg = 'Network or timeout error';

    async function tryLoadImage() {
      attempt++;
      if (attempt > maxAttempts) {
        console.error(`[Krish Illustrations] Scene ${sceneNum} (${badgeText}) failed after ${maxRetries} retries: ${lastErrorMsg}`);
        renderSceneFallbackBox(wrap, scene, headline);
        finish();
        return;
      }

      if (attempt > 1) {
        const spinnerLabel = wrap.querySelector('.scene-loading-label');
        if (spinnerLabel) {
          spinnerLabel.textContent = `Krish is creating Scene ${sceneNum} (retry ${attempt - 1}/${maxRetries})... 🎨`;
        }
      }

      console.log(`[Krish Illustrations Queue] Dispatching Scene ${sceneNum} via Cloudflare Workers AI (attempt ${attempt}/${maxAttempts})...`);

      try {
        const endpoint = getBackendUrl('/api/generate-scene-image');
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: scene.imagePrompt || `3D Pixar Disney animated storybook illustration of ${headline}`,
            seed: ((scene.seed || (idx + 1) * 1042) + (attempt - 1) * 237) % 100000,
            sceneIndex: idx
          })
        });

        if (requestId !== currentIllustrationRequestId) return resolve();

        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data || !data.success || !data.imageUrl) {
          lastErrorMsg = (data && data.error) ? data.error : `HTTP ${response.status}`;
          console.warn(`[Krish Illustrations Queue] Scene ${sceneNum} (attempt ${attempt}) failed: ${lastErrorMsg}`);
          scheduleRetry();
          return;
        }

        const img = new Image();
        img.className = 'scene-img';
        img.alt = headline;

        img.onload = () => {
          if (requestId !== currentIllustrationRequestId) return resolve();
          console.log(`[Krish Illustrations Queue] SUCCESS! Scene ${sceneNum} generated via ${data.model || 'Cloudflare Workers AI'} and completely rendered.`);
          wrap.innerHTML = `<span class="scene-phase-badge">${badgeText}</span>`;
          wrap.appendChild(img);
          scene.generatedImageUrl = data.imageUrl;

          // First Image-to-Video Test: Animate ONLY Scene 1 (idx === 0) after Scene 1 image succeeds
          if (idx === 0) {
            animateSceneOneWithFal(scene, wrap, img, badgeText, requestId);
          }

          finish();
        };

        img.onerror = () => {
          if (requestId !== currentIllustrationRequestId) return resolve();
          lastErrorMsg = `Image decode error on attempt ${attempt}`;
          scheduleRetry();
        };

        img.src = data.imageUrl;
      } catch (err) {
        if (requestId !== currentIllustrationRequestId) return resolve();
        lastErrorMsg = err && err.message ? err.message : String(err);
        console.warn(`[Krish Illustrations Queue] Scene ${sceneNum} (attempt ${attempt}) request error: ${lastErrorMsg}`);
        scheduleRetry();
      }
    }

    function scheduleRetry() {
      if (attempt >= maxAttempts) {
        tryLoadImage();
        return;
      }
      const delay = backoffMs;
      backoffMs *= 2;

      const spinnerLabel = wrap.querySelector('.scene-loading-label');
      if (spinnerLabel) {
        spinnerLabel.textContent = `Retrying Scene ${sceneNum} in ${Math.round(delay / 1000)}s... 🎨`;
      }

      setTimeout(() => {
        if (requestId === currentIllustrationRequestId) {
          tryLoadImage();
        } else {
          resolve();
        }
      }, delay);
    }

    tryLoadImage();
  });
}

let isSceneVideoRequestActive = false;

/**
 * Animates Scene 1's generated Cloudflare image into a 5-second 480P video
 * using backend /api/animate-scene (fal.ai minimax/h3-max/image-to-video).
 * Keeps the original Scene 1 image visible while loading and as fallback if video fails.
 */
async function animateSceneOneWithFal(scene, wrap, fallbackImg, badgeText, requestId) {
  if (!wrap || !fallbackImg || isSceneVideoRequestActive) return;
  if (requestId !== currentIllustrationRequestId) return;

  isSceneVideoRequestActive = true;

  // Show loading message over the existing Scene 1 image
  const loadingBanner = document.createElement('div');
  loadingBanner.className = 'scene-animating-banner';
  loadingBanner.textContent = '🎬 Krish is bringing the story to life...';
  wrap.appendChild(loadingBanner);

  // Build motion prompt strictly grounded in the actual Scene 1 story
  const vb = scene.visualBreakdown || {};
  const motionParts = [
    '3D Pixar Disney animated storybook motion',
    vb.protagonist || '',
    vb.action || scene.caption || scene.title || '',
    vb.emotion ? `with ${vb.emotion} expression` : '',
    'gentle natural character movement, soft warm storybook lighting'
  ].filter(Boolean);
  const motionPrompt = motionParts.join(', ');

  try {
    console.log('[Krish Video Animation] Animating Scene 1 via /api/animate-scene (minimax/h3-max/image-to-video)...');
    const endpoint = getBackendUrl('/api/animate-scene');
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imageUrl: scene.generatedImageUrl || fallbackImg.src,
        prompt: motionPrompt,
        sceneIndex: 0
      })
    });

    if (requestId !== currentIllustrationRequestId) {
      isSceneVideoRequestActive = false;
      return;
    }

    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data || !data.success || !data.videoUrl) {
      const errMsg = (data && data.error) ? data.error : `HTTP ${response.status}`;
      console.warn(`[Krish Video Animation] Scene 1 video generation notice (keeping Scene 1 image fallback): ${errMsg}`);
      if (loadingBanner.parentNode) loadingBanner.remove();
      isSceneVideoRequestActive = false;
      return;
    }

    // Create <video> element with Play/Pause and Replay controls, keeping original image as fallback on error
    const videoEl = document.createElement('video');
    videoEl.className = 'scene-video';
    videoEl.src = data.videoUrl;
    videoEl.poster = fallbackImg.src;
    videoEl.playsInline = true;
    videoEl.preload = 'auto';
    videoEl.muted = false;

    videoEl.onerror = () => {
      console.warn('[Krish Video Animation] Video playback error — restoring Scene 1 image fallback.');
      wrap.innerHTML = `<span class="scene-phase-badge">${badgeText}</span>`;
      wrap.appendChild(fallbackImg);
    };

    const controlsWrap = document.createElement('div');
    controlsWrap.className = 'scene-video-controls';

    const playPauseBtn = document.createElement('button');
    playPauseBtn.type = 'button';
    playPauseBtn.className = 'scene-video-btn';
    playPauseBtn.textContent = '⏸ Pause';

    const replayBtn = document.createElement('button');
    replayBtn.type = 'button';
    replayBtn.className = 'scene-video-btn';
    replayBtn.textContent = '🔄 Replay';

    playPauseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (videoEl.paused) {
        videoEl.play().catch(() => {});
        playPauseBtn.textContent = '⏸ Pause';
      } else {
        videoEl.pause();
        playPauseBtn.textContent = '▶ Play';
      }
    });

    replayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
      playPauseBtn.textContent = '⏸ Pause';
    });

    videoEl.addEventListener('ended', () => {
      playPauseBtn.textContent = '▶ Play';
    });

    videoEl.addEventListener('pause', () => {
      playPauseBtn.textContent = '▶ Play';
    });

    videoEl.addEventListener('play', () => {
      playPauseBtn.textContent = '⏸ Pause';
    });

    controlsWrap.appendChild(playPauseBtn);
    controlsWrap.appendChild(replayBtn);

    wrap.innerHTML = `<span class="scene-phase-badge">${badgeText} 🎬</span>`;
    wrap.appendChild(videoEl);
    wrap.appendChild(controlsWrap);

    console.log(`[Krish Video Animation] SUCCESS! Scene 1 animated via ${data.model}: ${data.videoUrl}`);

    // Start playing automatically; if browser autoplay policy requires interaction, show "▶ Play"
    videoEl.play().catch(() => {
      playPauseBtn.textContent = '▶ Play';
    });
  } catch (err) {
    console.warn('[Krish Video Animation] Scene 1 animation error (keeping Scene 1 image fallback):', err);
    if (loadingBanner.parentNode) loadingBanner.remove();
  } finally {
    isSceneVideoRequestActive = false;
  }
}

/**
 * Renders the 3 scene cards immediately into #story-illustrations.
 * Requirement 14: Initial loading state shows "Krish is creating Scene 1... 🎨"
 * and "Scene 2 will be created next... ⏳"
 */
function renderStoryScenesSkeleton(scenes, protagonistName) {
  if (!storyIllustrations) return;

  const phaseLabels = {
    beginning: 'Scene 1: The Beginning',
    middle: 'Scene 2: The Challenge',
    ending: 'Scene 3: The Resolution'
  };

  const protagonistTag = protagonistName
    ? `<span class="story-character-tag">Protagonist: <strong>${protagonistName}</strong></span>`
    : '';

  const cardsHtml = scenes.map((scene, idx) => {
    const sceneNum = idx + 1;
    const phase = scene.phase || (idx === 0 ? 'beginning' : idx === 1 ? 'middle' : 'ending');
    scene.phase = phase;
    const badgeText = phaseLabels[phase] || scene.title || `Scene ${sceneNum}`;
    scene.badgeText = badgeText;
    const headline = scene.title || badgeText;
    const caption = scene.caption || '';
    
    // Requirement 14: Clear, distinct loading states
    const initialLabel = idx === 0
      ? `Krish is planning the 3 story scenes... 🎨`
      : `Scene ${sceneNum} will be created next... ⏳`;

    return `
      <div class="story-scene-card" data-phase="${scene.phase}">
        <div class="scene-img-wrap" id="scene-wrap-${idx}">
          <span class="scene-phase-badge">${badgeText}</span>
          <div class="scene-img-loading-spinner" id="scene-spinner-${idx}">
            <span class="illustrations-loading-icon">🎨</span>
            <span class="scene-loading-label">${initialLabel}</span>
          </div>
        </div>
        <div class="scene-content">
          <h5 class="scene-headline" id="scene-headline-${idx}">${headline}</h5>
          <p class="scene-caption" id="scene-caption-${idx}">${caption}</p>
        </div>
      </div>
    `;
  }).join('');

  storyIllustrations.innerHTML = `
    <div class="story-scenes-header">
      <span class="story-scenes-title">
        <span>🎨</span> Story Illustrations by Krish
      </span>
      <div id="story-protagonist-tag-wrap">${protagonistTag}</div>
    </div>
    <div class="story-scenes-grid">
      ${cardsHtml}
    </div>
  `;
}

/**
 * Main entry point for Story Illustrations in Story Time.
 * 1. Derives initial scenes from story text and IMMEDIATELY renders the 3 cards with loading skeletons.
 * 2. Fetches /api/illustrate to refine prompts, captions, and lock character consistency across all 3 scenes.
 * 3. Enforces strict sequential single-request queue:
 *    Scene 1 -> COMPLETELY FINISH -> Scene 2 -> COMPLETELY FINISH -> Scene 3.
 * 4. Never generates two images at the same time.
 */
async function loadStoryIllustrations(childName, age, value, storyType, story) {
  if (!storyIllustrations) return;

  const requestId = ++currentIllustrationRequestId;

  // 1. Instantly derive story-grounded scenes from story text & render 3 cards immediately
  const initialData = deriveStoryScenesFromText(story, value, storyType, childName);
  let activeScenes = initialData.scenes;
  let protagonist = initialData.characterProfile.protagonistName;

  renderStoryScenesSkeleton(activeScenes, protagonist);

  // 2. Fetch refined AI prompt metadata with locked character consistency BEFORE starting image generation
  try {
    const response = await fetch(getBackendUrl('/api/illustrate'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        childName,
        age,
        value,
        storyType,
        story
      })
    });

    if (requestId !== currentIllustrationRequestId) return;

    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      if (data && data.success && Array.isArray(data.scenes) && data.scenes.length === 3) {
        data.scenes.forEach((sc, idx) => {
          if (activeScenes[idx]) {
            if (sc.imagePrompt) activeScenes[idx].imagePrompt = sc.imagePrompt;
            if (sc.visualBreakdown) activeScenes[idx].visualBreakdown = sc.visualBreakdown;
            if (sc.title) activeScenes[idx].title = sc.title;
            if (sc.caption) activeScenes[idx].caption = sc.caption;
            if (sc.seed) activeScenes[idx].seed = sc.seed;
          }
          const hEl = document.getElementById(`scene-headline-${idx}`);
          const cEl = document.getElementById(`scene-caption-${idx}`);
          if (hEl && sc.title) hEl.textContent = sc.title;
          if (cEl && sc.caption) cEl.textContent = sc.caption;
        });
        if (data.characterProfile && data.characterProfile.protagonistName) {
          protagonist = data.characterProfile.protagonistName;
          const tagWrap = document.getElementById('story-protagonist-tag-wrap');
          if (tagWrap) {
            tagWrap.innerHTML = `<span class="story-character-tag">Protagonist: <strong>${protagonist}</strong></span>`;
          }
        }
      }
    }
  } catch (backendErr) {
    console.warn("[Krish Illustrations] Backend metadata notice (using story-derived scenes):", backendErr);
  }

  if (requestId !== currentIllustrationRequestId) return;

  // 3. Strict Sequential Single-Request Queue:
  // Scene 1 -> COMPLETELY FINISH -> Scene 2 -> COMPLETELY FINISH -> Scene 3
  // Never generate two images at the same time.
  for (let i = 0; i < activeScenes.length; i++) {
    if (requestId !== currentIllustrationRequestId) break;
    const wrap = document.getElementById(`scene-wrap-${i}`);
    if (wrap) {
      await loadSingleSceneImage(activeScenes[i], i, wrap, requestId);
    }
  }
}

// Main Flow: Child Name -> Age -> Samskara / Value -> Story Type -> Start Journey
async function startSamskaraJourney(explicitValue) {
  const childName = (childNameInput?.value || '').trim();
  const age = parseInt(childAgeSelect?.value || '8', 10) || 8;
  const val = (explicitValue || valueInput?.value || '').trim();
  const storyType = storyTypeSelect?.value || 'Everyday School & Friends';

  if (!val) {
    if (valueInput) valueInput.focus();
    return;
  }

  if (explicitValue && valueInput) {
    valueInput.value = explicitValue;
  }

  // Reset notice banner & previous illustrations
  stopKrishVoice();
  if (storyIllustrations) {
    storyIllustrations.innerHTML = '';
  }
  if (apiNoticeBanner) {
    apiNoticeBanner.className = 'api-notice-banner hidden';
    apiNoticeBanner.textContent = '';
  }

  const query = val.toLowerCase();
  const displayName = childName || 'Young Explorer';

  // Krish Thinking State
  if (krishAvatarImg) krishAvatarImg.src = 'assets/krish-think.jpg';
  krishStatusText.textContent = `Krish is thinking with Gemini AI for ${displayName}... 🌟`;
  krishGreeting.innerHTML = `<strong>Namaste ${displayName}! 🌟</strong> Let me reflect on <em>${val}</em> and craft a special story for you...`;
  askBtn.disabled = true;
  askBtn.innerHTML = `<span>Thinking with Gemini...</span><span class="btn-icon">🧠</span>`;

  // Feature 1: Immediate personalized welcome audio
  playKrishWelcomeVoice(childName, val);

  try {
    // Attempt Gemini AI call via secure backend
    const aiData = await fetchGeminiKrishJourney({
      childName: childName,
      age: age,
      value: val,
      storyType: storyType
    });

    activeSamskara = aiData;
    krishStatusText.textContent = `Krish is ready with Gemini AI wisdom for ${displayName}! ✨`;
    renderSamskaraCard(aiData, query);
    return;
  } catch (err) {
    console.warn("Gemini API call failed, falling back to local Knowledge Base:", err);

    let friendlyError = err.message || 'connection issue';
    if (friendlyError.includes('Failed to fetch') || friendlyError.includes('NetworkError') || friendlyError.includes('Network request failed')) {
      friendlyError = 'Could not connect to Krish AI Server (http://localhost:8000). Please ensure server.py is running via start.bat';
    }

    // Show friendly, encouraging message from Krish
    if (apiNoticeBanner) {
      apiNoticeBanner.className = 'api-notice-banner notice-warning';
      apiNoticeBanner.innerHTML = `
        <span>💡</span>
        <span><strong>Krish says:</strong> I couldn't reach my cloud brain right now (${friendlyError}), but don't worry! Here is timeless wisdom from my Samskara Knowledge Base for you! 🌱</span>
      `;
    }

    krishStatusText.textContent = `Krish is sharing wisdom on ${val} from Knowledge Base`;
    const fallbackData = SAMSKARA_DATA[query] || generateDynamicSamskara(val);
    
    if (childName) {
      fallbackData.greeting = `Namaste ${childName}! 🌟 Let's explore the wonderful value of ${fallbackData.title}!`;
    }
    
    activeSamskara = fallbackData;
    renderSamskaraCard(fallbackData, query);
  } finally {
    askBtn.disabled = false;
    askBtn.innerHTML = `<span>Start My Samskara Journey 🌱</span><span class="btn-icon">✨</span>`;
  }
}

// Form Submission Event
valueForm.addEventListener('submit', (e) => {
  e.preventDefault();
  startSamskaraJourney();
});

// Quick Chips Click Event
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    const val = chip.getAttribute('data-value');
    if (valueInput) valueInput.value = val;
    startSamskaraJourney(val);
  });
});

// Challenge Accept Button Event (Encouragement and celebration audio)
completeChallengeBtn.addEventListener('click', () => {
  challengeStatus.classList.remove('hidden');
  completeChallengeBtn.classList.add('hidden');
  const childName = (childNameInput?.value || '').trim();
  const nameStr = childName ? ` ${childName}` : '';
  if (krishAvatarImg) {
    krishAvatarImg.src = 'assets/krish-happy.jpg';
    krishGreeting.innerHTML = `<strong>Yay! 🎉</strong> I am so proud of you for accepting today's challenge! You are truly a Samskara Champion! 🌟`;
    krishStatusText.textContent = "Krish is cheering for your journey!";
  }
  playKrishFeedbackVoice(`Yay${nameStr}! Fantastic! I am so proud of you for accepting today's challenge! You are truly a Samskara Champion! 🌟`);
});

// Reset / Explore Another Event
resetBtn.addEventListener('click', () => {
  stopKrishVoice();
  if (storyIllustrations) {
    storyIllustrations.innerHTML = '';
  }
  responseContainer.classList.add('hidden');
  if (valueInput) {
    valueInput.value = '';
    valueInput.focus();
  }
  if (apiNoticeBanner) {
    apiNoticeBanner.className = 'api-notice-banner hidden';
    apiNoticeBanner.textContent = '';
  }
  if (krishAvatarImg) {
    krishAvatarImg.src = 'assets/krish-portrait.jpg';
  }
  krishGreeting.innerHTML = `
    <strong>Namaste!</strong> I am <strong>Krish</strong>, your AI companion. Tell me a value you want to learn today, and let's explore its magic together! 🌟
  `;
  krishStatusText.textContent = "Krish is ready for your next question";
  chips.forEach(c => c.classList.remove('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================================
// KRISH SPEAKS — SYNTHETIC AI VOICE ENGINE
// Generates warm, friendly, child-appropriate AI voice narration using
// Gemini Flash TTS (or ElevenLabs if configured) with smooth Web Speech fallback.
// ============================================================================

// ============================================================================
// KRISH SPEAKS — SYNTHETIC AI VOICE ENGINE
// Primary: MiniMax AI (Cute Girl Boyish / English_Cute_Girl) via /api/speak
// Fallback: Microsoft Indian English (Youthful Boy en-IN) & Google English (India)
// Modular Section-by-Section Audio, Real-Time Feedback & Seamless Journey Queue
// ============================================================================

let krishAudio = null;
let isAudioPlaying = false;
let isLoadingVoice = false;
let currentVoiceRequestId = 0;
let currentPlayingSection = null;
let isPlayingFullJourney = false;
let cachedSectionAudios = {}; // { [sectionKey]: { audio: HTMLAudioElement, text: string } }

const SECTIONS_ORDER = ['understand', 'story', 'think', 'scenario', 'challenge'];

/**
 * Cleans text before voice synthesis, strictly removing internal prompts,
 * stage directions in parentheses/brackets, technical metadata, and narration prefixes.
 * Ensures ONLY Krish's actual child-facing dialogue is spoken aloud.
 */
function cleanTextForSpeech(text) {
  if (!text) return "";
  let cleaned = String(text);

  // 1. Remove parenthetical or bracketed stage directions/instructions
  cleaned = cleaned.replace(/[\(\[\{][^\)\]\}]*(?:talk|calm|wise|tone|voice|soft|whisper|smile|laugh|pause|action|stage|direction|prompt|instruction)[^\)\]\}]*[\)\]\}]/gi, '');
  cleaned = cleaned.replace(/\([a-zA-Z\s]{3,40}\)/g, '');

  // 2. Remove internal prompt phrases and voice-generation instructions
  cleaned = cleaned.replace(/talk\s+calmly\s+and\s+wisely\s+so\s+the\s+child\s+can\s+understand[:\s,\.]*/gi, '');
  cleaned = cleaned.replace(/^(?:read\s+this|talk|speak|narrate|please\s+read)\s+[^\n:]{5,100}[:\n]\s*/gi, '');

  // 3. Remove speaker tags and quiz option labels
  cleaned = cleaned.replace(/\b(?:Krish|Speaker|Narrator)\s*:\s*/gi, '');
  cleaned = cleaned.replace(/\b(?:Option\s+[A-Z]|Choice\s+[A-Z])\s*:\s*/gi, '');

  // 4. Remove markdown headers and formatting
  cleaned = cleaned.replace(/[*_~`#>]/g, '');
  cleaned = cleaned.replace(/https?:\/\/\S+/g, '');

  // 5. Clean whitespace
  cleaned = cleaned.replace(/[ \t]+/g, ' ').replace(/\n{2,}/g, '\n').trim();
  return cleaned;
}

/**
 * Builds pure child-facing speech text for each specific card section.
 */
function buildSectionSpeechText(sectionKey, data, childName) {
  if (!data) return "";
  const name = childName ? ` ${childName}` : '';
  const title = cleanTextForSpeech(data.title || '');

  switch (sectionKey) {
    case 'understand': {
      const sanskritText = data.sanskrit ? cleanTextForSpeech(data.sanskrit).replace(/\([^\)]*\)/g, '').trim() : '';
      const sanskritClause = sanskritText ? ` (${sanskritText})` : '';
      const understand = cleanTextForSpeech(data.understand || '');
      return `Namaste${name}! Today let us explore the value of ${title}${sanskritClause}. ${understand}`;
    }
    case 'story': {
      const storyTitle = cleanTextForSpeech(data.story?.title || `${title} in Action`);
      const storyText = cleanTextForSpeech(data.story?.text || '');
      const moral = cleanTextForSpeech(data.story?.moral || '');
      return `Story Time! ${storyTitle}. ${storyText} Here is Krish's wisdom: ${moral}`;
    }
    case 'think': {
      let thinkQuestions = '';
      if (Array.isArray(data.thinkTime)) {
        thinkQuestions = data.thinkTime.map((q, i) => `Question ${i + 1}: ${cleanTextForSpeech(q)}`).join('. ');
      }
      return `Think Time! Pause and reflect with me${name}: ${thinkQuestions}`;
    }
    case 'scenario': {
      const scenarioQ = cleanTextForSpeech(data.scenario?.question || '');
      return `What Would You Do? Here is a real-life situation: ${scenarioQ} Check out the options below and choose what you would do!`;
    }
    case 'challenge': {
      const challengeText = cleanTextForSpeech(data.challenge || '');
      return `Here is Krish's daily challenge for you: ${challengeText} Are you ready to accept it today?`;
    }
    default:
      return cleanTextForSpeech(data.understand || '');
  }
}

/**
 * Pre-caches audio for the primary sections in the background
 * so that when the child clicks or advances, playback starts instantaneously.
 */
async function preloadSectionAudios(data, childName) {
  cachedSectionAudios = {};
  if (!data) return;

  const understandText = buildSectionSpeechText('understand', data, childName);
  const storyText = buildSectionSpeechText('story', data, childName);

  fetchKrishAudio(understandText).then(audio => {
    if (audio) cachedSectionAudios['understand'] = { audio, text: understandText };
  }).catch(() => {});

  fetchKrishAudio(storyText).then(audio => {
    if (audio) cachedSectionAudios['story'] = { audio, text: storyText };
  }).catch(() => {});
}

/**
 * Calls backend /api/speak and returns an Audio element.
 */
async function fetchKrishAudio(text) {
  const clean = cleanTextForSpeech(text);
  if (!clean) return null;

  const speakUrl = getBackendUrl('/api/speak');
  let resp;
  try {
    resp = await fetch(speakUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: clean })
    });
  } catch (netErr) {
    throw new Error(`Could not connect to Krish AI Server (${speakUrl}). Please ensure server.py is running.`);
  }

  let result;
  if (!resp.ok) {
    let errDetail = `Server returned status ${resp.status}`;
    try {
      const errJson = await resp.json();
      if (errJson && errJson.error) {
        errDetail = errJson.error;
      }
    } catch (_) {}
    throw new Error(errDetail);
  }

  try {
    result = await resp.json();
  } catch (e) {
    throw new Error("Invalid response format received from voice server.");
  }

  if (!result.success || !result.audio) {
    throw new Error(result.error || "No audio data received from voice engine");
  }

  const audio = new Audio(result.audio);
  audio._provider = result.provider || "Krish AI Voice";
  return audio;
}

/**
 * Completely stops any active speech or audio playback and resets UI state.
 */
function stopKrishVoice(preserveStatus = false) {
  if (krishAudio) {
    krishAudio.pause();
    krishAudio.currentTime = 0;
    krishAudio = null;
  }
  if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
  isAudioPlaying = false;
  isLoadingVoice = false;
  currentPlayingSection = null;
  isPlayingFullJourney = false;

  // Reset Master Listen Button
  if (listenBtn) {
    listenBtn.classList.remove('speaking', 'loading', 'pulse-prompt');
    listenBtn.disabled = false;
    listenBtn.querySelector('.action-icon').textContent = '🔊';
    listenBtn.querySelector('.action-label').textContent = 'Listen to All';
  }

  // Reset Section Cards
  document.querySelectorAll('.format-card').forEach(card => {
    card.classList.remove('speaking-card');
  });

  document.querySelectorAll('.card-listen-btn').forEach(btn => {
    btn.classList.remove('speaking', 'loading', 'pulse-prompt');
    btn.disabled = false;
    const label = btn.querySelector('.card-listen-label');
    const icon = btn.querySelector('.card-listen-icon');
    if (label) {
      const section = btn.getAttribute('data-section');
      label.textContent = section === 'story' ? 'Listen to Story' : 'Listen';
    }
    if (icon) icon.textContent = '🔊';
  });

  if (krishAvatarImg) {
    krishAvatarImg.src = 'assets/krish-portrait.jpg';
  }
  if (!preserveStatus && krishStatusText && activeSamskara) {
    krishStatusText.textContent = `Krish is ready with wisdom on ${activeSamskara.title}`;
  }
}

/**
 * Indian English Web Speech Fallback:
 * Strictly looks for Indian English (en-IN) voices (such as Microsoft Ravi,
 * Microsoft Prabhat, or Google English India).
 * Strictly avoids American adult voices (David, Zira, Puck, etc.).
 */
function speakWithWebSpeechFallback(text, onEndCallback = null) {
  if (!('speechSynthesis' in window)) {
    stopKrishVoice();
    if (onEndCallback) onEndCallback();
    return;
  }

  const clean = cleanTextForSpeech(text);
  if (!clean) return;

  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.rate = 1.05;
  utterance.pitch = 1.22;

  const voices = window.speechSynthesis.getVoices();
  const inVoices = voices.filter(v => {
    const l = (v.lang || '').toLowerCase();
    const n = v.name.toLowerCase();
    return l.includes('en-in') || l.includes('en_in') || n.includes('india');
  });

  const preferredVoice = inVoices.find(v => {
    const n = v.name.toLowerCase();
    return n.includes('ravi') || n.includes('prabhat') || n.includes('male');
  }) || inVoices[0];

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.onstart = () => {
    isAudioPlaying = true;
    isLoadingVoice = false;
    if (listenBtn) {
      listenBtn.classList.add('speaking');
      listenBtn.classList.remove('loading', 'pulse-prompt');
      listenBtn.disabled = false;
      listenBtn.querySelector('.action-icon').textContent = '⏹️';
      listenBtn.querySelector('.action-label').textContent = 'Stop';
    }
    if (krishAvatarImg) krishAvatarImg.src = 'assets/krish-reading.jpg';
    if (krishStatusText) krishStatusText.textContent = "Krish is speaking (Youthful Voice)... 🎙️";
  };

  utterance.onend = () => {
    stopKrishVoice();
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = () => {
    stopKrishVoice();
    if (onEndCallback) onEndCallback();
  };

  window.speechSynthesis.speak(utterance);
}

/**
 * Feature 1: Speaks an immediate, short, personalized welcome message
 * as soon as the child clicks "Start My Samskara Journey".
 * Uses MiniMax Cute Girl Boyish (or Indian English fallback).
 */
async function playKrishWelcomeVoice(childName, value) {
  const reqId = ++currentVoiceRequestId;
  const namePart = childName ? `Namaste ${childName}!` : 'Namaste young explorer!';
  const welcomeText = cleanTextForSpeech(`${namePart} I am so excited to explore ${value} with you today! Let us begin our journey!`);

  try {
    const speakUrl = getBackendUrl('/api/speak');
    const resp = await fetch(speakUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: welcomeText })
    });
    
    if (resp.ok) {
      const data = await resp.json().catch(() => ({}));
      if (data.success && data.audio && reqId === currentVoiceRequestId) {
        if (krishAudio) {
          krishAudio.pause();
          krishAudio = null;
        }
        const welcomeAudio = new Audio(data.audio);
        welcomeAudio._provider = data.provider || "MiniMax Cute Girl Boyish";
        krishAudio = welcomeAudio;

        welcomeAudio.onplay = () => {
          isAudioPlaying = true;
          if (krishAvatarImg) krishAvatarImg.src = 'assets/krish-reading.jpg';
          if (krishStatusText) krishStatusText.textContent = `Krish is welcoming you (${welcomeAudio._provider})... 🌟`;
        };

        welcomeAudio.onended = () => {
          isAudioPlaying = false;
          if (krishAvatarImg) krishAvatarImg.src = 'assets/krish-portrait.jpg';
          // When welcome finishes, if the lesson has loaded, smoothly advance into Section 1
          if (activeSamskara && !isLoadingVoice && !isAudioPlaying) {
            playSectionAudio('understand', true);
          }
        };

        welcomeAudio.onerror = () => {
          isAudioPlaying = false;
          speakWithWebSpeechFallback(welcomeText, () => {
            if (activeSamskara && !isLoadingVoice && !isAudioPlaying) {
              playSectionAudio('understand', true);
            }
          });
        };

        // Play immediately within user click gesture context
        await welcomeAudio.play().catch((e) => {
          console.log("Welcome audio autoplay note:", e);
        });
        return;
      } else {
        const errorMsg = data.error || "MiniMax audio generation failed.";
        console.warn("[MiniMax Voice] Welcome audio issue:", errorMsg);
        if (krishStatusText) {
          krishStatusText.innerHTML = `⚠️ <strong>MiniMax Voice:</strong> ${errorMsg}`;
        }
      }
    } else {
      let errDetail = `Server returned status ${resp.status}`;
      try {
        const errJson = await resp.json();
        if (errJson.error) errDetail = errJson.error;
      } catch (_) {}
      console.warn("[MiniMax Voice] Welcome endpoint error:", errDetail);
      if (krishStatusText) {
        krishStatusText.innerHTML = `⚠️ <strong>MiniMax Voice:</strong> ${errDetail}`;
      }
    }
  } catch (err) {
    console.warn("[MiniMax Voice] Welcome voice error:", err);
    if (krishStatusText) {
      krishStatusText.innerHTML = `⚠️ <strong>MiniMax Voice:</strong> ${err.message || 'Cannot access MiniMax voice.'}`;
    }
  }
}

/**
 * Speaks short context-aware feedback when the child answers a "What Would You Do?" scenario.
 * Uses the exact same MiniMax voice configuration and provides immediate feedback.
 */
async function playKrishFeedbackVoice(text) {
  const clean = cleanTextForSpeech(text);
  if (!clean) return;

  // Pause background reading to focus on the child's feedback
  if (krishAudio) {
    krishAudio.pause();
    krishAudio = null;
  }
  if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  isAudioPlaying = false;
  isLoadingVoice = true;

  try {
    const speakUrl = getBackendUrl('/api/speak');
    const resp = await fetch(speakUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: clean })
    });
    if (resp.ok) {
      const data = await resp.json().catch(() => ({}));
      if (data.success && data.audio) {
        const feedbackAudio = new Audio(data.audio);
        feedbackAudio._provider = data.provider || "MiniMax Cute Girl Boyish";
        krishAudio = feedbackAudio;

        feedbackAudio.onplay = () => {
          isAudioPlaying = true;
          isLoadingVoice = false;
          if (krishAvatarImg) krishAvatarImg.src = 'assets/krish-happy.jpg';
          if (krishStatusText) krishStatusText.textContent = `Krish says: "${clean.slice(0, 45)}..." 🌟`;
        };
        feedbackAudio.onended = () => {
          isAudioPlaying = false;
          krishAudio = null;
          if (krishAvatarImg) krishAvatarImg.src = 'assets/krish-portrait.jpg';
          if (krishStatusText && activeSamskara) {
            krishStatusText.textContent = `Krish is ready with wisdom on ${activeSamskara.title}`;
          }
        };
        feedbackAudio.onerror = () => {
          isAudioPlaying = false;
          krishAudio = null;
          console.warn("[MiniMax Voice] Feedback audio playback error");
        };
        await feedbackAudio.play().catch(() => {});
        return;
      } else {
        const errorMsg = data.error || "MiniMax feedback audio failed.";
        console.warn("[MiniMax Voice] Feedback error:", errorMsg);
        if (krishStatusText) {
          krishStatusText.innerHTML = `⚠️ <strong>MiniMax Voice:</strong> ${errorMsg}`;
        }
      }
    } else {
      let errDetail = `Server returned status ${resp.status}`;
      try {
        const errJson = await resp.json();
        if (errJson.error) errDetail = errJson.error;
      } catch (_) {}
      console.warn("[MiniMax Voice] Feedback endpoint error:", errDetail);
      if (krishStatusText) {
        krishStatusText.innerHTML = `⚠️ <strong>MiniMax Voice:</strong> ${errDetail}`;
      }
    }
  } catch (e) {
    console.warn("[MiniMax Voice] Feedback exception:", e);
    if (krishStatusText) {
      krishStatusText.innerHTML = `⚠️ <strong>MiniMax Voice:</strong> ${e.message || 'Cannot access MiniMax voice.'}`;
    }
  } finally {
    isLoadingVoice = false;
  }
}

/**
 * Plays speech for a specific section card.
 * Can be triggered directly by the card's listen button or sequentially as part of the full journey.
 */
async function playSectionAudio(sectionKey, fromJourney = false) {
  if (!activeSamskara) return;

  // If already playing this exact section and child clicks again, toggle stop
  if (!fromJourney && currentPlayingSection === sectionKey && isAudioPlaying) {
    stopKrishVoice();
    return;
  }

  // Stop previous audio without resetting journey flag if we're advancing
  if (krishAudio) {
    krishAudio.pause();
    krishAudio = null;
  }
  if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  isAudioPlaying = false;
  isLoadingVoice = true;
  currentPlayingSection = sectionKey;
  if (fromJourney) {
    isPlayingFullJourney = true;
  }

  const childName = (childNameInput?.value || '').trim();
  const text = buildSectionSpeechText(sectionKey, activeSamskara, childName);

  // Update UI: Highlight active card
  document.querySelectorAll('.format-card').forEach(card => card.classList.remove('speaking-card'));
  const targetCard = document.getElementById(`card-${sectionKey}`);
  if (targetCard) {
    targetCard.classList.add('speaking-card');
    if (!fromJourney || sectionKey !== 'understand') {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Update button state on the active card
  const targetBtn = targetCard ? targetCard.querySelector('.card-listen-btn') : null;
  if (targetBtn) {
    targetBtn.classList.add('loading');
    targetBtn.classList.remove('pulse-prompt');
    const label = targetBtn.querySelector('.card-listen-label');
    const icon = targetBtn.querySelector('.card-listen-icon');
    if (icon) icon.textContent = '⏳';
    if (label) label.textContent = 'Tuning in...';
  }

  // Update master listen button state
  if (listenBtn) {
    listenBtn.classList.add('speaking');
    listenBtn.classList.remove('pulse-prompt', 'loading');
    listenBtn.querySelector('.action-icon').textContent = '⏹️';
    listenBtn.querySelector('.action-label').textContent = 'Stop';
  }

  if (krishStatusText) {
    krishStatusText.textContent = `Krish is tuning in his voice... 🎙️`;
  }

  try {
    let audioObj = null;
    if (cachedSectionAudios[sectionKey]?.audio) {
      audioObj = cachedSectionAudios[sectionKey].audio;
      audioObj.currentTime = 0;
    } else {
      audioObj = await fetchKrishAudio(text);
      if (audioObj) {
        cachedSectionAudios[sectionKey] = { audio: audioObj, text };
      }
    }

    if (!audioObj) {
      throw new Error("Could not load section audio");
    }

    krishAudio = audioObj;

    audioObj.onplay = () => {
      isAudioPlaying = true;
      isLoadingVoice = false;

      if (targetBtn) {
        targetBtn.classList.remove('loading');
        targetBtn.classList.add('speaking');
        const icon = targetBtn.querySelector('.card-listen-icon');
        const label = targetBtn.querySelector('.card-listen-label');
        if (icon) icon.textContent = '⏹️';
        if (label) label.textContent = 'Stop';
      }

      if (krishAvatarImg) krishAvatarImg.src = 'assets/krish-reading.jpg';
      const provider = audioObj._provider || 'MiniMax Cute Girl Boyish';
      if (krishStatusText) {
        const readableSection = sectionKey === 'understand' ? 'Meaning' : (sectionKey === 'story' ? 'Story' : sectionKey);
        krishStatusText.textContent = `Krish is speaking ${readableSection} (${provider})... 🎙️`;
      }
    };

    audioObj.onended = () => {
      if (targetBtn) {
        targetBtn.classList.remove('speaking');
        const icon = targetBtn.querySelector('.card-listen-icon');
        const label = targetBtn.querySelector('.card-listen-label');
        if (icon) icon.textContent = '🔊';
        if (label) label.textContent = sectionKey === 'story' ? 'Listen to Story' : 'Listen';
      }
      if (targetCard) {
        targetCard.classList.remove('speaking-card');
      }

      if (isPlayingFullJourney) {
        // Advance to next section in order
        const currentIdx = SECTIONS_ORDER.indexOf(sectionKey);
        if (currentIdx !== -1 && currentIdx < SECTIONS_ORDER.length - 1) {
          const nextSection = SECTIONS_ORDER[currentIdx + 1];
          playSectionAudio(nextSection, true);
          return;
        }
      }

      stopKrishVoice();
      if (krishStatusText) {
        krishStatusText.textContent = `🌟 Krish has shared this step! Tap another section or try today's challenge!`;
      }
    };

    audioObj.onerror = (e) => {
      stopKrishVoice();
      console.warn(`[MiniMax Voice] Audio playback error on '${sectionKey}':`, e);
      if (krishStatusText) {
        krishStatusText.innerHTML = `⚠️ <strong>MiniMax Voice:</strong> Audio playback error for ${sectionKey}.`;
      }
    };

    await audioObj.play();
  } catch (err) {
    console.warn(`Section voice playback notice for '${sectionKey}':`, err);
    isLoadingVoice = false;
    stopKrishVoice(true);

    // Reset target button state immediately
    if (targetBtn) {
      targetBtn.classList.remove('loading', 'speaking');
      targetBtn.disabled = false;
      const label = targetBtn.querySelector('.card-listen-label');
      const icon = targetBtn.querySelector('.card-listen-icon');
      if (label) label.textContent = sectionKey === 'story' ? 'Listen to Story' : 'Listen';
      if (icon) icon.textContent = '🔊';
    }

    // Reset master listen button state
    if (listenBtn) {
      listenBtn.classList.remove('loading', 'speaking');
      listenBtn.disabled = false;
      listenBtn.querySelector('.action-icon').textContent = '🔊';
      listenBtn.querySelector('.action-label').textContent = 'Listen to All';
    }

    // Handle browser background autoplay restriction gracefully
    if (fromJourney && err.name === 'NotAllowedError') {
      if (targetBtn) targetBtn.classList.add('pulse-prompt');
      if (listenBtn) listenBtn.classList.add('pulse-prompt');
      if (krishStatusText) {
        krishStatusText.innerHTML = `🎧 Krish is ready to read! Tap <strong>Listen</strong> below anytime to hear his voice! ✨`;
      }
      return;
    }

    // Report the exact issue rather than silently switching voices
    if (krishStatusText) {
      krishStatusText.innerHTML = `⚠️ <strong>MiniMax Voice Notice:</strong> ${err.message || 'Could not access MiniMax voice.'}`;
    }
  }
}

/**
 * Plays the official Krish 11-year-old boy sample voice test:
 * "Namaste my friend! Hey, I'm Krish! So happy you're here! Ready for some fun?..."
 */
async function playKrishSampleTestVoice() {
  if (krishAudio) {
    krishAudio.pause();
    krishAudio.currentTime = 0;
    krishAudio = null;
    isAudioPlaying = false;
    return;
  }
  const sampleAudio = new Audio('assets/krish_adventure_sample.wav');
  krishAudio = sampleAudio;
  sampleAudio.onplay = () => {
    isAudioPlaying = true;
    if (krishAvatarImg) krishAvatarImg.src = 'assets/krish-reading.jpg';
    if (krishStatusText) krishStatusText.textContent = "Krish is speaking: 'Namaste, my friend! Hey, I’m Krish!' 🌟";
  };
  sampleAudio.onended = () => {
    isAudioPlaying = false;
    krishAudio = null;
    if (krishAvatarImg) krishAvatarImg.src = 'assets/krish-portrait.jpg';
    if (krishStatusText) krishStatusText.textContent = "Krish is ready to explore values with you!";
  };
  sampleAudio.onerror = () => {
    isAudioPlaying = false;
    krishAudio = null;
    speakWithWebSpeechFallback("Namaste, my friend! Hey, I’m Krish! So happy you’re here! Ready for some fun? Today, we’re going to discover an amazing value, listen to a cool story, and learn how to become little heroes in our everyday life! Come on, yaar! Let’s do this together!");
  };
  try {
    await sampleAudio.play();
  } catch (err) {
    console.log("Sample voice click note:", err);
  }
}

// ============================================================================
// EVENT LISTENERS & INITIALIZATION
// ============================================================================

// Master Listen Button (Listen to All / Stop)
listenBtn.addEventListener('click', () => {
  if (isAudioPlaying || isLoadingVoice) {
    stopKrishVoice();
  } else {
    isPlayingFullJourney = true;
    playSectionAudio('understand', true);
  }
});

// Card Header Listen Buttons (Direct Section Listening)
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.card-listen-btn');
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();

  const section = btn.getAttribute('data-section');
  if (!section) return;

  if (currentPlayingSection === section && isAudioPlaying) {
    stopKrishVoice();
  } else {
    isPlayingFullJourney = false;
    playSectionAudio(section, false);
  }
});

// Interactive Krish Avatar: click to hear Krish's official 11-year-old boy introduction sample
if (krishAvatarImg) {
  krishAvatarImg.style.cursor = 'pointer';
  krishAvatarImg.title = "Click to hear Krish say hello!";
  krishAvatarImg.addEventListener('click', () => {
    playKrishSampleTestVoice();
  });
}

const krishBadge = document.querySelector('.krish-badge');
if (krishBadge) {
  krishBadge.style.cursor = 'pointer';
  krishBadge.title = "Click to test Krish's voice!";
  krishBadge.addEventListener('click', () => {
    playKrishSampleTestVoice();
  });
}

// Initial Welcome State & Health Check
window.addEventListener('DOMContentLoaded', () => {
  if (valueInput) valueInput.focus();
  checkBackendHealth();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
  }
});
