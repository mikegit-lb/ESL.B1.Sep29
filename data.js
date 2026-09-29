// 30 CEFR B1 ESL Speaking Questions tailored for High School Day-to-Day Life
const speakingQuestions = [
  {
    id: 1,
    category: "Morning Routine",
    categoryKey: "routines",
    title: "Morning Routine Before School",
    question: "What is your morning routine before heading to school?",
    followUps: [
      "What time do you usually have to get out of bed?",
      "How long does it take you to get dressed and pack your backpack?",
      "Do you ever run late in the morning? What happens when you do?"
    ],
    vocab: [
      { word: "hit the snooze button", meaning: "to delay your alarm for a few extra minutes of sleep" },
      { word: "in a rush / in a hurry", meaning: "moving quickly because you have little time" },
      { word: "grab a bite", meaning: "to eat something quick or light" },
      { word: "double-check", meaning: "to check something a second time to make sure it is correct" }
    ],
    starters: [
      "On a typical school morning, my alarm goes off at...",
      "The first thing I usually do after waking up is...",
      "If I am running late, I have to..."
    ],
    modelAnswer: "On a typical school morning, my alarm goes off around 6:30 AM. I usually try to get out of bed right away so I am not in a rush. First, I wash my face and brush my teeth, then I get dressed into my school clothes. After that, I grab a quick breakfast like cereal or toast while double-checking my backpack to make sure I haven't forgotten any notebooks. By 7:30 AM, I am ready to leave the house."
  },
  {
    id: 2,
    category: "Morning Routine",
    categoryKey: "routines",
    title: "School Commute",
    question: "How do you travel to school every day, and what do you do during the journey?",
    followUps: [
      "Do you travel with friends, family, or by yourself?",
      "How long does your journey take in heavy traffic?",
      "What is your favorite way to pass the time on the way to school?"
    ],
    vocab: [
      { word: "commute", meaning: "the journey to and from school or work" },
      { word: "public transport", meaning: "buses, trains, and subways available to everyone" },
      { word: "carpool", meaning: "traveling together in one car with friends or neighbors" },
      { word: "listen to podcasts / music", meaning: "audio entertainment to pass time" }
    ],
    starters: [
      "I normally commute to school by...",
      "The journey usually takes about... minutes.",
      "During the trip, I like to pass the time by..."
    ],
    modelAnswer: "I normally commute to school by public bus, although sometimes my parents give me a ride if the weather is bad. The trip takes about twenty to twenty-five minutes depending on traffic. During the journey, I usually put on my headphones and listen to my favorite music playlist or review flashcards for upcoming quizzes. If I run into my classmates on the bus, we sit together and chat."
  },
  {
    id: 3,
    category: "Morning Routine",
    categoryKey: "routines",
    title: "Weekday Breakfast",
    question: "What do you usually eat for breakfast on a school day, and why is it important to you?",
    followUps: [
      "Do you ever skip breakfast when you are busy?",
      "Who prepares breakfast in your home?",
      "How is your weekday breakfast different from your weekend breakfast?"
    ],
    vocab: [
      { word: "fuel / energy boost", meaning: "food that gives you stamina for the morning" },
      { word: "skip a meal", meaning: "to choose not to eat at a usual mealtime" },
      { word: "nutritious", meaning: "healthy and full of vitamins or minerals" },
      { word: "scrambled eggs / oatmeal", meaning: "common breakfast foods" }
    ],
    starters: [
      "For breakfast on weekdays, I usually have...",
      "I believe breakfast is essential because...",
      "Unlike weekends when I have time for a big meal, on school days I..."
    ],
    modelAnswer: "For breakfast on school days, I usually have a bowl of oatmeal with fruit or a slice of toast with peanut butter, along with a glass of orange juice. I believe breakfast is really important because it provides the energy I need to stay focused during the first few periods of class. If I skip breakfast, I always get hungry around 10 AM and find it hard to concentrate."
  },
  {
    id: 4,
    category: "Morning Routine",
    categoryKey: "routines",
    title: "Morning Person vs. Night Owl",
    question: "Are you a morning person or a night owl? Explain why.",
    followUps: [
      "At what time of day do you feel most productive and creative?",
      "How does your sleep schedule affect your mood at school?",
      "What do you do when you need to stay awake late to study?"
    ],
    vocab: [
      { word: "early bird / morning person", meaning: "someone who naturally wakes up early and has energy in the morning" },
      { word: "night owl", meaning: "someone who prefers staying awake late into the night" },
      { word: "productive", meaning: "able to achieve or produce a lot of work" },
      { word: "groggy / drowsy", meaning: "feeling sleepy and slow to react" }
    ],
    starters: [
      "I definitely consider myself a...",
      "I feel most energetic when...",
      "Even though school starts early, I find that..."
    ],
    modelAnswer: "I definitely consider myself a night owl rather than a morning person. Even though school starts at 8 AM, my brain doesn't feel fully awake until around midday. I do my best studying and homework late in the evening when everything is quiet and peaceful. However, because of early school mornings, I sometimes feel quite groggy during first period."
  },
  {
    id: 5,
    category: "Morning Routine",
    categoryKey: "routines",
    title: "Waking Up Early",
    question: "What is the hardest part about waking up early on school weekdays?",
    followUps: [
      "How many alarms do you have to set each morning?",
      "What advice would you give to someone struggling to get out of bed?",
      "Does the season or weather change how hard it is to wake up?"
    ],
    vocab: [
      { word: "struggle", meaning: "to find something very difficult to do" },
      { word: "cozy", meaning: "warm, comfortable, and pleasant" },
      { word: "sleep deprivation", meaning: "not getting enough hours of rest" },
      { word: "get into a rhythm", meaning: "to establish a steady habit or routine" }
    ],
    starters: [
      "Without a doubt, the hardest part for me is...",
      "Especially during the winter months, it is tough to...",
      "To make waking up easier, I try to..."
    ],
    modelAnswer: "Without a doubt, the hardest part is leaving my cozy bed, especially in the winter when it is still pitch dark and cold outside. I often set at least three different alarms on my phone just in case I turn one off in my sleep. To make it slightly easier, I place my phone across the room so I am forced to stand up and turn the alarm off."
  },
  {
    id: 6,
    category: "School & Classes",
    categoryKey: "school",
    title: "Favorite School Subject",
    question: "What is your favorite school subject, and why do you find it interesting?",
    followUps: [
      "Is this subject easy for you, or do you enjoy the challenge?",
      "How do you plan to use this knowledge in your future career?",
      "What is the most interesting project you have done in this class?"
    ],
    vocab: [
      { word: "fascinating", meaning: "extremely interesting and engaging" },
      { word: "hands-on experiments", meaning: "practical activities where you learn by doing" },
      { word: "solve problems", meaning: "to find answers to questions or difficulties" },
      { word: "passionate about", meaning: "having a strong enthusiasm for something" }
    ],
    starters: [
      "My favorite subject in high school has always been...",
      "I find it interesting because...",
      "What I love most about our teacher is that..."
    ],
    modelAnswer: "My favorite subject in high school has always been Biology. I find it fascinating to learn about how living organisms function, from tiny cells to complex human organs. Our teacher also does a lot of hands-on lab experiments, which makes the lessons engaging and memorable. I hope to study life sciences or healthcare at university later on."
  },
  {
    id: 7,
    category: "School & Classes",
    categoryKey: "school",
    title: "Homework Habits & Deadlines",
    question: "How much homework do you usually get each day, and when do you prefer to do it?",
    followUps: [
      "Which subject gives you the heaviest workload?",
      "Do you ever procrastinate before starting your assignments?",
      "Where in your home do you study best?"
    ],
    vocab: [
      { word: "workload", meaning: "the amount of work assigned to you" },
      { word: "procrastinate", meaning: "to delay or postpone doing something you need to do" },
      { word: "distraction-free", meaning: "a quiet place without phone notifications or noise" },
      { word: "meet deadlines", meaning: "to finish assignments on or before the due date" }
    ],
    starters: [
      "On average, I receive about... hours of homework per night.",
      "I prefer tackling my homework right after...",
      "To avoid getting distracted by my phone, I..."
    ],
    modelAnswer: "On average, I get about two hours of homework every evening, mostly in math and history. I prefer tackling it right after having an afternoon snack so I can get it out of the way before dinner. When I study, I keep my phone in another room to avoid procrastination. Finishing early allows me to relax and watch a movie in the evening without stressing about deadlines."
  },
  {
    id: 8,
    category: "School & Classes",
    categoryKey: "school",
    title: "Group Work vs. Independent Study",
    question: "Do you prefer working on group school projects or working alone? Explain why.",
    followUps: [
      "What are the benefits of sharing ideas with other students?",
      "What can go wrong when team members don't do their share of the work?",
      "How do you resolve disagreements in a student team?"
    ],
    vocab: [
      { word: "teamwork / collaboration", meaning: "working together with other people towards a common goal" },
      { word: "divide the tasks", meaning: "to assign different parts of a project to different members" },
      { word: "work at my own pace", meaning: "to go as fast or slow as suits you without waiting for others" },
      { word: "carry the load", meaning: "doing most of the work for the whole group" }
    ],
    starters: [
      "Personally, I generally prefer...",
      "The main advantage of working in a group is...",
      "On the other hand, working independently allows me to..."
    ],
    modelAnswer: "Personally, I generally prefer working on my own rather than in a group. When I work independently, I can work at my own pace and organize my ideas without any misunderstandings. However, I do enjoy group work when all team members divide the tasks fairly and contribute equally. Collaboration can be fun when everyone is motivated to do well."
  },
  {
    id: 9,
    category: "School & Classes",
    categoryKey: "school",
    title: "Qualities of a Great Teacher",
    question: "In your opinion, what qualities make someone a truly good teacher?",
    followUps: [
      "Can you describe your favorite teacher without naming them?",
      "How should teachers make boring topics more enjoyable?",
      "Is patience more important than being strict?"
    ],
    vocab: [
      { word: "approachable", meaning: "friendly and easy to talk to" },
      { word: "patient", meaning: "calm and willing to explain things repeatedly without getting angry" },
      { word: "enthusiastic", meaning: "showing intense excitement and interest in the subject" },
      { word: "encourage / inspire", meaning: "to give confidence and motivation to students" }
    ],
    starters: [
      "In my view, a great teacher should always be...",
      "What makes a huge difference in the classroom is...",
      "Students appreciate teachers who take the time to..."
    ],
    modelAnswer: "In my view, a great teacher needs to be patient, enthusiastic, and approachable. If a teacher is genuinely passionate about their subject, that excitement spreads to the students. Furthermore, they should explain difficult concepts clearly and be willing to answer questions without making students feel embarrassed. A good sense of humor also makes learning much more enjoyable."
  },
  {
    id: 10,
    category: "School & Classes",
    categoryKey: "school",
    title: "Changing a School Rule",
    question: "If you had the power to change one school rule, which one would it be and why?",
    followUps: [
      "Do you think school uniforms should be mandatory or optional?",
      "Should high schools have later start times in the morning?",
      "How would your suggested change benefit the students?"
    ],
    vocab: [
      { word: "dress code / uniform policy", meaning: "rules about what clothes students are allowed to wear" },
      { word: "start time", meaning: "the hour classes begin each morning" },
      { word: "flexible", meaning: "adaptable and not overly strict" },
      { word: "academic performance", meaning: "how well students score on tests and assignments" }
    ],
    starters: [
      "If I were allowed to change one rule, I would definitely...",
      "The main reason for this change is that...",
      "I believe this would help students because..."
    ],
    modelAnswer: "If I could change one school rule, I would push our school start time from 8:00 AM to 9:00 AM. Scientific research shows that teenagers' sleep cycles naturally make them stay up later and need more sleep in the morning. An extra hour of rest would help students feel more energized, reduce tardiness, and improve our overall concentration and academic performance."
  },
  {
    id: 11,
    category: "Friends & Breaks",
    categoryKey: "social",
    title: "Lunch Break & Recess",
    question: "What do you usually do during lunch break or recess at your school?",
    followUps: [
      "Where do you and your friends like to sit and hang out?",
      "How long is your lunch period, and is it enough time?",
      "Do you ever use break time to finish last-minute homework?"
    ],
    vocab: [
      { word: "hang out", meaning: "to spend time relaxing together casually" },
      { word: "catch up with friends", meaning: "to hear the latest news from friends" },
      { word: "unwind", meaning: "to release tension and take a mental break" },
      { word: "cafeteria / courtyard", meaning: "places where students gather during breaks" }
    ],
    starters: [
      "During our 45-minute lunch break, I usually...",
      "My friends and I like to gather near...",
      "It is a great opportunity to unwind because..."
    ],
    modelAnswer: "During our 45-minute lunch break, I usually head to the courtyard with my closest friends. We find a quiet bench, eat our lunches, and catch up on everything that happened during the morning. Sometimes we listen to music or talk about our weekend plans. It's a great opportunity to unwind and clear our heads before our afternoon classes begin."
  },
  {
    id: 12,
    category: "Friends & Breaks",
    categoryKey: "social",
    title: "School Food & Cafeteria",
    question: "What kind of food is served in your school cafeteria, or do you prefer packing lunch from home?",
    followUps: [
      "What is the most popular meal among students at your school?",
      "Are there enough healthy and vegetarian options available?",
      "If you pack a lunch box, what do you usually bring?"
    ],
    vocab: [
      { word: "packed lunch / lunchbox", meaning: "food prepared at home and brought in a container" },
      { word: "canteen / cafeteria", meaning: "the school dining hall" },
      { word: "homemade food", meaning: "food cooked freshly at home" },
      { word: "balanced diet", meaning: "a diet containing various healthy food groups" }
    ],
    starters: [
      "Most of the time, I prefer to bring...",
      "Our school cafeteria offers options such as...",
      "If I could improve the school menu, I would add..."
    ],
    modelAnswer: "Most of the time, I prefer bringing a packed lunch from home because it is usually healthier and tastier than cafeteria food. I typically bring a turkey sandwich, some fresh fruit like an apple, and a granola bar. Our school cafeteria does offer hot meals like pasta, pizza, and soups, but the lines are often very long, so bringing my own food saves me a lot of time."
  },
  {
    id: 13,
    category: "Friends & Breaks",
    categoryKey: "social",
    title: "Best Friend at School",
    question: "Who is your best friend at school, and how did the two of you first meet?",
    followUps: [
      "What personality traits do you value most in a close friend?",
      "Do you share similar hobbies and interests?",
      "How do you support each other during stressful exam weeks?"
    ],
    vocab: [
      { word: "get along well", meaning: "to have a harmonious, friendly relationship" },
      { word: "hit it off", meaning: "to instantly become good friends upon meeting" },
      { word: "sense of humor", meaning: "the ability to laugh and make jokes" },
      { word: "trustworthy / supportive", meaning: "reliable and always ready to help" }
    ],
    starters: [
      "My best friend at school is...",
      "We first met when we were seated together in...",
      "What I value most about our friendship is that..."
    ],
    modelAnswer: "My best friend at school is Alex. We first met two years ago in ninth grade when our English teacher assigned us as lab partners. We hit it off immediately because we discovered we both loved basketball and had the same sarcastic sense of humor. What I value most about Alex is that he is trustworthy and always knows how to cheer me up when school gets stressful."
  },
  {
    id: 14,
    category: "Friends & Breaks",
    categoryKey: "social",
    title: "Hallway Chats Between Classes",
    question: "What do you and your classmates usually talk about between classes in the hallways?",
    followUps: [
      "Do you discuss upcoming exams and homework, or pop culture?",
      "How much time do you have to switch classrooms?",
      "Is the hallway in your school crowded and noisy?"
    ],
    vocab: [
      { word: "hallway / corridor", meaning: "the passageway connecting classrooms" },
      { word: "gossip / chit-chat", meaning: "casual conversation about daily events or news" },
      { word: "upcoming test", meaning: "an exam scheduled in the near future" },
      { word: "rush between classes", meaning: "hurrying to get to the next room on time" }
    ],
    starters: [
      "In the five minutes we have between classes, we usually talk about...",
      "Often, we complain about how difficult...",
      "We also like to share funny videos or discuss..."
    ],
    modelAnswer: "In the five minutes we have between classes, we usually chit-chat by our lockers. We often talk about how difficult the last pop quiz was or compare answers for upcoming homework. We also chat about viral social media videos, sports matches from the night before, and what we're planning to do after the final bell rings."
  },
  {
    id: 15,
    category: "Friends & Breaks",
    categoryKey: "social",
    title: "Memorable School Event",
    question: "Describe a fun or memorable event or celebration that took place at your school recently.",
    followUps: [
      "What was your role or how did you participate in the event?",
      "Why did this particular event stand out to you?",
      "Do you think schools should host more special events and festivals?"
    ],
    vocab: [
      { word: "sports day / festival", meaning: "a special day organized for athletic competitions or arts" },
      { word: "atmosphere", meaning: "the general mood or feeling of a place" },
      { word: "participate in / take part in", meaning: "to join in an activity with others" },
      { word: "unforgettable", meaning: "so special that it will always be remembered" }
    ],
    starters: [
      "One memorable event that happened recently was our school's...",
      "The atmosphere was exciting because...",
      "My favorite memory from that day was when..."
    ],
    modelAnswer: "One memorable event was our annual school sports day last month. Every grade competed in different events like relay races, volleyball, and tug-of-war. The atmosphere was incredible because everyone was cheering loudly for their classmates with banners and music. My team managed to win second place in the 4x100 meter relay, which made it an unforgettable day for all of us."
  },
  {
    id: 16,
    category: "After School & Hobbies",
    categoryKey: "hobbies",
    title: "Immediately After School",
    question: "What do you like to do immediately after getting home from school?",
    followUps: [
      "Do you prefer to relax first or finish your tasks right away?",
      "What is your favorite after-school snack?",
      "How do you shift your mindset from school mode to home mode?"
    ],
    vocab: [
      { word: "kick off my shoes", meaning: "to relax right as you enter the house" },
      { word: "recharge my batteries", meaning: "to regain energy after being tired" },
      { word: "snack on something", meaning: "to eat a light treat between meals" },
      { word: "change into comfortable clothes", meaning: "switching out of school attire" }
    ],
    starters: [
      "As soon as I walk through the front door, the first thing I do is...",
      "I like to take at least 30 minutes to...",
      "Having a quick snack helps me to..."
    ],
    modelAnswer: "As soon as I walk through the front door, I kick off my shoes and change into comfortable sweatpants. I usually head straight to the kitchen to make a snack, such as a smoothie or fruit with yogurt. Then, I like to take about half an hour to unwind by scrolling on my phone or listening to music before opening my school books to start my homework."
  },
  {
    id: 17,
    category: "After School & Hobbies",
    categoryKey: "hobbies",
    title: "Clubs & Extracurricular Activities",
    question: "Do you participate in any sports clubs, music bands, or after-school activities? Tell me about it.",
    followUps: [
      "How often do you practice or attend meetings each week?",
      "What skills have you developed through this activity?",
      "If you could join a new club next semester, which one would you pick?"
    ],
    vocab: [
      { word: "extracurricular activity", meaning: "activities done outside regular class time" },
      { word: "commit time to", meaning: "to dedicate hours regularly to a pursuit" },
      { word: "improve skills", meaning: "to get better at doing something" },
      { word: "compete against other schools", meaning: "playing matches or tournaments" }
    ],
    starters: [
      "After school, I am involved in...",
      "We meet two or three times a week to...",
      "Being part of this club has taught me how to..."
    ],
    modelAnswer: "After school, I am involved in our school's basketball club. We have practice sessions twice a week on Tuesdays and Thursdays, and we play friendly matches against other local high schools on weekends. Being part of this team has taught me self-discipline and leadership, and it also keeps me physically fit and helps me make friends across different grades."
  },
  {
    id: 18,
    category: "After School & Hobbies",
    categoryKey: "hobbies",
    title: "Relieving Stress After School",
    question: "How do you relax and relieve stress after a demanding and busy school week?",
    followUps: [
      "Does physical exercise help you clear your mind?",
      "Do you prefer calming activities like reading or active ones like gaming?",
      "Who do you talk to when you feel overwhelmed by school exams?"
    ],
    vocab: [
      { word: "blow off steam", meaning: "to release pent-up energy, anger, or stress" },
      { word: "peaceful / therapeutic", meaning: "calming and beneficial for mental health" },
      { word: "overwhelmed", meaning: "feeling like you have too many things to deal with" },
      { word: "take my mind off things", meaning: "to stop worrying about your problems" }
    ],
    starters: [
      "When I feel stressed after a long week, I usually...",
      "One activity that helps me blow off steam is...",
      "Taking a long walk or listening to music helps to..."
    ],
    modelAnswer: "When I feel stressed after a heavy week of tests, I usually go for a bicycle ride in the park near my house. Getting some fresh air and exercise helps me blow off steam and clear my mind. Later in the evening, I enjoy taking a warm shower, curling up on the sofa, and watching comedy videos or reading a graphic novel to take my mind off schoolwork."
  },
  {
    id: 19,
    category: "After School & Hobbies",
    categoryKey: "hobbies",
    title: "Learning a New Skill or Hobby",
    question: "What is a new hobby or skill you are currently trying to learn or improve?",
    followUps: [
      "Why did you choose this particular skill?",
      "Do you learn from online tutorials, a tutor, or practice by yourself?",
      "What has been the most challenging part of learning it so far?"
    ],
    vocab: [
      { word: "pick up a hobby", meaning: "to start a new interest or activity" },
      { word: "practice consistently", meaning: "to do something regularly to get better" },
      { word: "online tutorials / video guides", meaning: "instructional videos on platforms like YouTube" },
      { word: "make steady progress", meaning: "to improve gradually step by step" }
    ],
    starters: [
      "Recently, I have started learning how to...",
      "I decided to try this because...",
      "Although it was difficult at first, I am slowly making progress by..."
    ],
    modelAnswer: "Recently, I have been trying to learn acoustic guitar. I decided to pick up this hobby because I love indie music and wanted to be able to play my favorite songs. I watch step-by-step video tutorials on YouTube every evening for about twenty minutes. The most challenging part at first was building calluses on my fingertips, but I am making steady progress with basic chords."
  },
  {
    id: 20,
    category: "After School & Hobbies",
    categoryKey: "hobbies",
    title: "Indoors vs. Outdoors",
    question: "Do you prefer spending your free time outdoors in nature or staying indoors at home? Why?",
    followUps: [
      "How does the weather influence your decision?",
      "What are your favorite things to do when you are stuck indoors on a rainy day?",
      "Do young people spend enough time outside these days?"
    ],
    vocab: [
      { word: "nature / fresh air", meaning: "the outdoor environment" },
      { word: "homebody", meaning: "a person who prefers staying at home" },
      { word: "cozy atmosphere", meaning: "a warm and comfortable indoor vibe" },
      { word: "explore surroundings", meaning: "discovering new places in your town or area" }
    ],
    starters: [
      "To be completely honest, I lean more towards being...",
      "When the weather is sunny and pleasant, I love to...",
      "However, on cold or rainy days, there is nothing better than..."
    ],
    modelAnswer: "To be completely honest, it depends on the weather and my mood, but I generally lean towards staying indoors. I am somewhat of a homebody and love having quiet time in my room to read, draw, or play video games. However, when the weather is warm and sunny on weekends, I do enjoy going for walks in the park or skateboarding with my friends."
  },
  {
    id: 21,
    category: "Tech & Screen Time",
    categoryKey: "technology",
    title: "Smartphone Screen Time",
    question: "How many hours a day do you spend on your smartphone, and what apps do you use the most?",
    followUps: [
      "Do you think your screen time is too high, and do you try to reduce it?",
      "Which app is your biggest distraction during homework time?",
      "Do you use screen-time limits or app locks?"
    ],
    vocab: [
      { word: "screen time", meaning: "the total amount of time spent looking at digital displays" },
      { word: "social media apps", meaning: "platforms like Instagram, TikTok, and Snapchat" },
      { word: "endless scrolling", meaning: "continuously looking at new posts for hours without stopping" },
      { word: "cut down on", meaning: "to reduce the amount or frequency of something" }
    ],
    starters: [
      "According to my phone's screen time tracker, I spend around...",
      "The apps I find myself opening most frequently are...",
      "I realize that I probably need to cut down on..."
    ],
    modelAnswer: "According to my phone's tracker, I spend around four hours a day on my smartphone. The apps I use most often are Instagram, YouTube, and WhatsApp for messaging my classmates. While it helps me stay connected with friends, I sometimes catch myself endless scrolling on short videos when I should be studying. I'm currently trying to cut down on screen time before going to sleep."
  },
  {
    id: 22,
    category: "Tech & Screen Time",
    categoryKey: "technology",
    title: "Using Technology for Studying",
    question: "How do you use your computer or smartphone to help you study and do schoolwork?",
    followUps: [
      "What are your favorite study apps or educational websites?",
      "Do you prefer digital textbooks or physical paper books?",
      "How do you keep yourself from getting distracted while studying online?"
    ],
    vocab: [
      { word: "digital flashcards", meaning: "apps like Quizlet or Anki used for memorization" },
      { word: "research topics", meaning: "searching for academic information on the internet" },
      { word: "educational resources", meaning: "learning videos, articles, and quizzes online" },
      { word: "take digital notes", meaning: "typing or drawing notes on a tablet or laptop" }
    ],
    starters: [
      "Technology plays a major role in my study routine because...",
      "I frequently use websites and apps like...",
      "Compared to traditional textbooks, digital tools allow me to..."
    ],
    modelAnswer: "Technology plays a huge role in my daily studies. I use my laptop to write essays, conduct research for history presentations, and watch educational videos on YouTube when I don't understand a math formula. I also use Quizlet to practice vocabulary for my foreign language classes. It makes studying much more interactive and fast, as long as I keep gaming notifications turned off."
  },
  {
    id: 23,
    category: "Tech & Screen Time",
    categoryKey: "technology",
    title: "Pros & Cons of Social Media",
    question: "What do you think are the biggest advantages and disadvantages of social media for teenagers?",
    followUps: [
      "Have you ever experienced FOMO (Fear of Missing Out)?",
      "Do people present their real lives on social media?",
      "What is the best way for teenagers to protect their privacy online?"
    ],
    vocab: [
      { word: "stay connected", meaning: "to maintain relationships with friends easily" },
      { word: "unrealistic standards", meaning: "fake or idealized images of life that cause pressure" },
      { word: "cyberbullying", meaning: "bullying or harassment that takes place online" },
      { word: "double-edged sword", meaning: "something that has both positive and negative effects" }
    ],
    starters: [
      "In my opinion, social media is definitely a double-edged sword...",
      "On the positive side, it allows teenagers to...",
      "However, the main downside is that it can cause..."
    ],
    modelAnswer: "In my opinion, social media is a double-edged sword for teenagers. On the plus side, it helps us stay in touch with friends, share creative photos, and discover interesting communities. However, on the negative side, it can lead to unhealthy comparisons, cyberbullying, and wasted time. Many teens feel pressured to present a perfect life, which can hurt self-esteem."
  },
  {
    id: 24,
    category: "Tech & Screen Time",
    categoryKey: "technology",
    title: "Video Games & Streaming Shows",
    question: "Do you play video games or watch streaming series on weekdays? What is your favorite?",
    followUps: [
      "Do you play multiplayer games online with your school friends?",
      "How do you balance gaming time with completing your homework?",
      "What makes a good TV show or video game storyline?"
    ],
    vocab: [
      { word: "multiplayer game", meaning: "a game played online with other real people" },
      { word: "binge-watch", meaning: "to watch multiple episodes of a series in one sitting" },
      { word: "immersive storyline", meaning: "a gripping plot that draws you in completely" },
      { word: "set a time limit", meaning: "to restrict the duration you play or watch" }
    ],
    starters: [
      "During the week, I usually spend about an hour...",
      "My current favorite show/game is...",
      "What I love most about it is the..."
    ],
    modelAnswer: "During the week, I allow myself about an hour of gaming after finishing all my homework. My favorite game right now is Minecraft, because I can join an online server with my classmates and build creative worlds together. On Friday nights, I also love streaming mystery or sci-fi series on Netflix with my family because the suspenseful storylines keep us entertained."
  },
  {
    id: 25,
    category: "Tech & Screen Time",
    categoryKey: "technology",
    title: "Digital Detox & Screen Breaks",
    question: "Have you ever tried doing a 'digital detox' (taking a break from all screens)? How did it go?",
    followUps: [
      "Could you survive an entire weekend without your smartphone?",
      "What did you notice about your mood when you put your phone away?",
      "Why is it so hard for people our age to disconnect from the internet?"
    ],
    vocab: [
      { word: "digital detox", meaning: "a period of time when you deliberately avoid screens" },
      { word: "unplug / disconnect", meaning: "to stop using electronic devices" },
      { word: "present in the moment", meaning: "focusing on what is happening right now in real life" },
      { word: "urge to check", meaning: "a strong impulse to look at notifications" }
    ],
    starters: [
      "Last summer, I decided to try a digital detox during...",
      "At first, I felt strange and had the constant urge to...",
      "After a few hours, I realized that I felt much more..."
    ],
    modelAnswer: "Last summer during a camping trip with my family in the mountains, there was no cellular reception, so I was forced to do a 48-hour digital detox. At first, I felt anxious and kept reaching into my pocket out of habit. But after a few hours, I felt much calmer, paid more attention to nature, and had meaningful conversations around the campfire without any screen distractions."
  },
  {
    id: 26,
    category: "Family & Weekends",
    categoryKey: "family",
    title: "Family Evening & Dinner Time",
    question: "What does your family usually do together in the evening or during dinner time?",
    followUps: [
      "Do all family members eat dinner at the same table together?",
      "What topics do you usually discuss around the dinner table?",
      "Do you have a family movie night or game night during the week?"
    ],
    vocab: [
      { word: "sit down together", meaning: "gathering at the table at the same time" },
      { word: "share how our day went", meaning: "talking about daily events and experiences" },
      { word: "family tradition", meaning: "a routine or activity your family always does" },
      { word: "quality time", meaning: "meaningful time spent with loved ones" }
    ],
    starters: [
      "In my household, dinner is the main time when we...",
      "We always make an effort to sit down at...",
      "During the meal, we usually talk about..."
    ],
    modelAnswer: "In my household, dinner is the one time of day when all of us gather together around 7:30 PM. My parents, my younger sister, and I sit at the dining table without any TV or phones. We talk about how our days went, share funny things that happened, and discuss upcoming weekend plans. It's a nice way to stay close as a family despite our busy schedules."
  },
  {
    id: 27,
    category: "Family & Weekends",
    categoryKey: "family",
    title: "Household Chores & Responsibilities",
    question: "What household chores or responsibilities do you have to do at home?",
    followUps: [
      "Do you get an allowance or pocket money for doing chores?",
      "Which chore is your least favorite, and which one do you not mind?",
      "How do you and your siblings divide the housework?"
    ],
    vocab: [
      { word: "household chores", meaning: "routine tasks like cleaning, washing, and tidying" },
      { word: "take out the trash", meaning: "carrying garbage bags to the outdoor bins" },
      { word: "load / unload the dishwasher", meaning: "putting dishes into or out of the washing machine" },
      { word: "keep my room tidy", meaning: "making sure your bedroom is neat and organized" }
    ],
    starters: [
      "My main responsibilities around the house include...",
      "My least favorite chore has to be...",
      "I believe doing chores is good practice because..."
    ],
    modelAnswer: "My main chores at home are keeping my bedroom tidy, loading the dishwasher after dinner, and taking out the recycling bins every Tuesday evening. My least favorite chore is definitely vacuuming the stairs because it takes a lot of effort! However, I think doing chores is important because it helps my parents and prepares me for living on my own in the future."
  },
  {
    id: 28,
    category: "Family & Weekends",
    categoryKey: "family",
    title: "Spending Saturdays and Sundays",
    question: "How do you usually spend your Saturday and Sunday? Describe your ideal weekend.",
    followUps: [
      "Do you sleep in much later on weekends than on school days?",
      "How do you split your weekend between fun activities and homework?",
      "What is the best Saturday you have had recently?"
    ],
    vocab: [
      { word: "sleep in", meaning: "to stay in bed and wake up later than usual in the morning" },
      { word: "hang out with friends", meaning: "spending casual time with your social circle" },
      { word: "balance fun and study", meaning: "dividing time fairly between relaxation and work" },
      { word: "ideal weekend", meaning: "a perfect, dream Saturday and Sunday" }
    ],
    starters: [
      "On Saturdays, I usually like to sleep in until...",
      "In the afternoon, I often meet up with friends to...",
      "I save Sunday evening for finishing any remaining..."
    ],
    modelAnswer: "On Saturdays, I love sleeping in until 9:30 AM to catch up on rest. In the afternoon, I usually meet my friends at the shopping mall, watch a movie, or go skateboarding in the town center. Sundays are a bit calmer—I spend time with my family, go for a walk, and finish any remaining homework in the evening so I'm prepared for Monday morning."
  },
  {
    id: 29,
    category: "Family & Weekends",
    categoryKey: "family",
    title: "Upcoming Holiday Plans",
    question: "What are you planning or hoping to do during your next school holidays or vacation?",
    followUps: [
      "Will you travel to another city or country, or have a 'staycation' at home?",
      "What is something you can only do when school is not in session?",
      "Who are you looking forward to spending time with?"
    ],
    vocab: [
      { word: "look forward to", meaning: "to feel excited about a future event" },
      { word: "go on a trip / travel abroad", meaning: "visiting another city or country" },
      { word: "staycation", meaning: "taking a vacation while staying at home" },
      { word: "take a break from studies", meaning: "pausing academic work for relaxation" }
    ],
    starters: [
      "For my next school break, I am really looking forward to...",
      "My family and I are planning to...",
      "I also hope to spend a lot of time simply..."
    ],
    modelAnswer: "For our upcoming summer holiday, I am really looking forward to visiting my grandparents who live near the seaside. We plan to spend a week swimming, having barbecues on the beach, and exploring coastal bike trails. During the rest of the vacation, I hope to hang out with my school friends, read books for fun, and not set an alarm for a whole month!"
  },
  {
    id: 30,
    category: "Family & Weekends",
    categoryKey: "family",
    title: "Future Plans After High School",
    question: "What career or field of study are you thinking about pursuing after you finish high school?",
    followUps: [
      "Are you considering going to university, learning a trade, or taking a gap year?",
      "Who or what inspired you to become interested in this field?",
      "What skills do you need to develop to achieve your dream career?"
    ],
    vocab: [
      { word: "pursue a career in", meaning: "to work towards a specific profession" },
      { word: "apply to university / college", meaning: "submitting applications for higher education" },
      { word: "take a gap year", meaning: "taking a year off before college to travel or work" },
      { word: "follow my passion", meaning: "choosing a path based on what you love doing" }
    ],
    starters: [
      "After graduating from high school, I am hoping to...",
      "I have always been drawn to the field of...",
      "To reach this goal, I will need to focus on..."
    ],
    modelAnswer: "After graduating from high school, I am planning to attend university and study computer science or graphic design. I have always been fascinated by how software and digital art work together, and I would love to design mobile apps or video game interfaces in the future. To achieve this, I am trying to focus on my mathematics and English grades while practicing basic programming online."
  }
];

// Discourse markers & B1 Speaking tips
const speakingTips = [
  {
    title: "Filler & Thinking Phrases",
    description: "Use these instead of silence when thinking about your answer:",
    phrases: ["Well, to be honest...", "That's an interesting question...", "Let me think for a second...", "As far as I'm concerned..."]
  },
  {
    title: "Giving Reasons & Examples",
    description: "Support your opinions with clear examples from daily life:",
    phrases: ["For example / For instance...", "The main reason for this is...", "Another point is that...", "In my personal experience..."]
  },
  {
    title: "Showing Contrast",
    description: "Show both sides of an idea like a B1+ speaker:",
    phrases: ["However, on the other hand...", "Although I enjoy...", "Even though it can be tough...", "While some people prefer X, I prefer Y..."]
  },
  {
    title: "Concluding Your Answer",
    description: "Wrap up your speaking answer smoothly:",
    phrases: ["All in all...", "So basically, that's why...", "To sum it up, I'd say that...", "Overall, it makes a big difference."]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { speakingQuestions, speakingTips };
}

