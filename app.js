const fallbackLessons = {
  hello: {
    word: "hello",
    phonetic: "/həˈləʊ/",
    audio: "",
    translation: "xin chào",
    definitions: ["Used as a greeting or to start a conversation."],
    examples: ["Hello, my name is Linh.", "She says hello every morning."],
    related: ["hi", "welcome", "greeting", "morning", "friend"],
  },
  family: {
    word: "family",
    phonetic: "/ˈfæməli/",
    audio: "",
    translation: "gia đình",
    definitions: ["A group of people who are related to each other."],
    examples: ["My family has four people.", "I love my family."],
    related: ["mother", "father", "home", "child", "parent"],
  },
  water: {
    word: "water",
    phonetic: "/ˈwɔːtər/",
    audio: "",
    translation: "nước",
    definitions: ["A clear liquid that people, animals, and plants need to live."],
    examples: ["I drink water every day.", "The water is cold."],
    related: ["drink", "river", "clean", "glass", "rain"],
  },
  learn: {
    word: "learn",
    phonetic: "/lɜːrn/",
    audio: "",
    translation: "học",
    definitions: ["To get knowledge or a new skill."],
    examples: ["I learn English after dinner.", "We learn new words today."],
    related: ["study", "practice", "read", "remember", "lesson"],
  },
};

const quizDistractors = [
  "một loại thức ăn",
  "một địa điểm",
  "một màu sắc",
  "một con số",
  "một đồ vật trong bếp",
  "một ngày trong tuần",
];

const randomStarterWords = [
  "hello",
  "family",
  "water",
  "learn",
  "school",
  "teacher",
  "student",
  "book",
  "pen",
  "friend",
  "house",
  "room",
  "kitchen",
  "market",
  "food",
  "rice",
  "milk",
  "coffee",
  "morning",
  "night",
  "today",
  "happy",
  "small",
  "beautiful",
  "easy",
  "work",
  "play",
  "read",
  "write",
  "listen",
  "speak",
  "go",
  "come",
  "buy",
  "help",
  "travel",
  "hotel",
  "station",
  "street",
  "doctor",
  "phone",
  "name",
  "age",
  "city",
  "country",
  "home",
  "mother",
  "father",
  "sister",
  "brother",
  "child",
  "people",
  "woman",
  "man",
  "day",
  "week",
  "month",
  "year",
  "time",
  "breakfast",
  "lunch",
  "dinner",
  "apple",
  "banana",
  "bread",
  "egg",
  "fish",
  "chicken",
  "tea",
  "juice",
  "table",
  "chair",
  "door",
  "window",
  "bed",
  "bag",
  "shirt",
  "shoes",
  "money",
  "shop",
  "bus",
  "train",
  "airport",
  "map",
  "ticket",
  "weather",
  "rain",
  "sun",
  "hot",
  "cold",
  "new",
  "old",
  "big",
  "good",
  "bad",
  "fast",
  "slow",
  "clean",
  "open",
  "close",
];

const localExampleBank = {
  hello: ["Hello, my name is Linh.", "She says hello every morning.", "Hello, welcome to our class."],
  family: ["My family has four people.", "I eat dinner with my family.", "Her family lives in Da Nang."],
  water: ["I drink water every day.", "The water is cold.", "Please give me a glass of water."],
  learn: ["I learn English after dinner.", "We learn new words today.", "Children learn quickly when they practice."],
  school: ["My school is near my house.", "We go to school by bus.", "The school has a big library."],
  teacher: ["My teacher speaks slowly.", "The teacher writes on the board.", "She is an English teacher."],
  student: ["The student reads a book.", "I am a new student.", "Students practice speaking in class."],
  book: ["This book is easy to read.", "I have a blue book.", "She opens the book on page ten."],
  pen: ["Can I borrow your pen?", "This pen is black.", "He writes his name with a pen."],
  friend: ["My friend helps me study.", "I meet my friend after school.", "She is a good friend."],
  house: ["Their house is small but clean.", "I stay at home in my house.", "There is a garden behind the house."],
  room: ["My room has one window.", "The room is quiet.", "Please clean your room."],
  kitchen: ["My mother cooks in the kitchen.", "The kitchen is next to the living room.", "There is a table in the kitchen."],
  market: ["We buy vegetables at the market.", "The market opens early.", "This market is very busy."],
  food: ["Vietnamese food is delicious.", "We need food and water.", "The food smells good."],
  rice: ["I eat rice for lunch.", "The rice is hot.", "She cooks rice every day."],
  milk: ["The child drinks milk.", "I put milk in my coffee.", "There is milk in the fridge."],
  coffee: ["I drink coffee in the morning.", "This coffee is too hot.", "Would you like coffee or tea?"],
  morning: ["Good morning, teacher.", "I exercise in the morning.", "The morning is cool."],
  night: ["I read at night.", "It is quiet at night.", "Good night, see you tomorrow."],
  today: ["Today is Monday.", "I am busy today.", "What do you want to learn today?"],
  happy: ["She is happy today.", "I feel happy when I learn English.", "They are happy with the result."],
  small: ["This is a small room.", "I have a small bag.", "The small child is sleeping."],
  beautiful: ["The flower is beautiful.", "She has a beautiful voice.", "This is a beautiful city."],
  easy: ["This lesson is easy.", "English can be easy with practice.", "The question is easy to answer."],
  work: ["I go to work at eight.", "This work is important.", "She works in a hospital."],
  play: ["Children play in the park.", "I play football after school.", "Can you play the guitar?"],
  read: ["I read a book every night.", "Please read this sentence.", "She reads English stories."],
  write: ["Write your name here.", "I write three sentences.", "He writes an email."],
  listen: ["Listen to the teacher.", "I listen to English songs.", "She listens carefully."],
  speak: ["Can you speak English?", "Please speak slowly.", "We speak with our classmates."],
  go: ["I go to school by bike.", "They go home at five.", "Go straight and turn left."],
  come: ["Please come here.", "My friend comes to my house.", "Come in and sit down."],
  buy: ["I buy bread at the shop.", "She buys a new shirt.", "We need to buy tickets."],
  help: ["Can you help me?", "He helps his mother.", "This app helps me learn English."],
  travel: ["I want to travel to Hue.", "They travel by train.", "Travel teaches us new things."],
  hotel: ["Our hotel is near the beach.", "I book a hotel room.", "The hotel is clean and quiet."],
  station: ["The station is on the left.", "We meet at the train station.", "The bus station is crowded."],
  street: ["This street is very busy.", "She lives on a quiet street.", "Cross the street carefully."],
  doctor: ["The doctor is kind.", "I need to see a doctor.", "My brother is a doctor."],
  phone: ["My phone is on the table.", "Please call me on the phone.", "Her phone is new."],
  name: ["What is your name?", "My name is Nam.", "Write your name on the paper."],
  age: ["What is your age?", "His age is ten.", "Age is just a number."],
  city: ["Ho Chi Minh City is big.", "I live in a small city.", "This city has many parks."],
  country: ["Vietnam is my country.", "Which country are you from?", "This country is beautiful."],
  home: ["I go home after class.", "Home is a safe place.", "She studies English at home."],
  mother: ["My mother cooks dinner.", "Her mother is a nurse.", "I call my mother every day."],
  father: ["My father reads the newspaper.", "His father drives a car.", "I help my father on Sunday."],
  sister: ["My sister is a student.", "Her sister likes music.", "I play with my sister."],
  brother: ["My brother is tall.", "His brother plays football.", "I share a room with my brother."],
  child: ["The child is happy.", "A child needs love and care.", "The child reads a picture book."],
  people: ["Many people are waiting.", "People learn in different ways.", "The people here are friendly."],
  woman: ["The woman is a teacher.", "A woman is buying fruit.", "That woman speaks English well."],
  man: ["The man is my uncle.", "A man is standing near the door.", "That man works at a hotel."],
  day: ["Have a nice day.", "I study English every day.", "Today is a good day."],
  week: ["There are seven days in a week.", "I have a test next week.", "We practice twice a week."],
  month: ["May is a warm month.", "I save money every month.", "This month is very busy."],
  year: ["A year has twelve months.", "I started learning English last year.", "This year I want to speak better."],
  time: ["What time is it?", "I need more time.", "It is time to study."],
  breakfast: ["I eat breakfast at seven.", "Breakfast is important.", "She has eggs for breakfast."],
  lunch: ["We have lunch at school.", "Lunch is ready.", "I eat rice for lunch."],
  dinner: ["My family eats dinner together.", "What do you want for dinner?", "Dinner starts at six."],
  apple: ["I eat an apple every day.", "This apple is sweet.", "She puts an apple in her bag."],
  banana: ["The banana is yellow.", "I like banana smoothies.", "He eats a banana after lunch."],
  bread: ["I buy bread in the morning.", "This bread is fresh.", "She eats bread with eggs."],
  egg: ["I have an egg for breakfast.", "The egg is hot.", "He cooks two eggs."],
  fish: ["We eat fish for dinner.", "The fish is fresh.", "She likes fish soup."],
  chicken: ["I would like chicken and rice.", "The chicken is delicious.", "My mother cooks chicken today."],
  tea: ["Would you like some tea?", "This tea is warm.", "I drink tea at night."],
  juice: ["Orange juice is sweet.", "The child drinks juice.", "I want apple juice."],
  table: ["The book is on the table.", "We sit around the table.", "This table is made of wood."],
  chair: ["Please sit on the chair.", "There are four chairs.", "The chair is next to the table."],
  door: ["Open the door, please.", "The door is closed.", "He knocks on the door."],
  window: ["The window is open.", "I can see trees through the window.", "Close the window at night."],
  bed: ["I go to bed early.", "The bed is comfortable.", "She makes her bed every morning."],
  bag: ["My bag is heavy.", "Put the book in your bag.", "She has a red bag."],
  shirt: ["This shirt is blue.", "How much is the shirt?", "He wears a white shirt."],
  shoes: ["My shoes are new.", "Take off your shoes.", "These shoes are comfortable."],
  money: ["I need money for a ticket.", "She saves money every week.", "How much money do you have?"],
  shop: ["The shop is open.", "I buy milk at the shop.", "This shop sells books."],
  bus: ["I go to school by bus.", "The bus is late.", "We wait for the bus."],
  train: ["The train leaves at nine.", "I travel by train.", "The train station is near here."],
  airport: ["The airport is far from the city.", "We arrive at the airport early.", "I take a taxi to the airport."],
  map: ["Look at the map.", "The map shows the station.", "I need a map of the city."],
  ticket: ["I buy a train ticket.", "Where is my ticket?", "The ticket is in my bag."],
  weather: ["The weather is nice today.", "What is the weather like?", "Bad weather can delay the train."],
  rain: ["The rain is heavy.", "I like listening to rain.", "Take an umbrella in the rain."],
  sun: ["The sun is bright.", "The sun rises in the morning.", "I wear a hat in the sun."],
  hot: ["The coffee is hot.", "It is hot today.", "This soup is too hot."],
  cold: ["The water is cold.", "I feel cold at night.", "It is cold in the morning."],
  new: ["I have a new phone.", "This is a new lesson.", "She buys new shoes."],
  old: ["This book is old.", "My old school is small.", "He has an old bike."],
  big: ["The city is big.", "They live in a big house.", "This bag is too big."],
  good: ["You did a good job.", "This is a good question.", "She is a good student."],
  bad: ["The weather is bad.", "That is a bad idea.", "I had a bad dream."],
  fast: ["The train is fast.", "He runs fast.", "Please do not speak too fast."],
  slow: ["The bus is slow.", "Please speak slowly.", "Learning can be slow at first."],
  clean: ["The room is clean.", "Wash your hands and keep them clean.", "This hotel is clean."],
  open: ["Open your book.", "The shop is open.", "Please open the window."],
  close: ["Close the door, please.", "The bank closes at five.", "Do not close your book yet."],
};

const grammarLessons = {
  "present-simple": {
    name: "1. Hiện tại đơn",
    formula: "S + V(s/es). Phủ định: S + do/does not + V.",
    note: "Dễ nhất. Dùng cho thói quen, lịch trình, sự thật hiển nhiên.",
    examples: ["I study English every day.", "She drinks coffee in the morning.", "The sun rises in the east."],
    question: "Chọn câu đúng:",
    options: ["He likes coffee.", "He like coffee.", "He liking coffee."],
    answer: "He likes coffee.",
  },
  "present-continuous": {
    name: "2. Hiện tại tiếp diễn",
    formula: "S + am/is/are + V-ing.",
    note: "Dùng cho việc đang xảy ra ngay bây giờ hoặc kế hoạch gần.",
    examples: ["I am learning English now.", "She is reading a book.", "They are playing football."],
    question: "Chọn câu đúng:",
    options: ["She is reading now.", "She reads now.", "She are reading now."],
    answer: "She is reading now.",
  },
  "past-simple": {
    name: "3. Quá khứ đơn",
    formula: "S + V2/ed. Phủ định: S + did not + V.",
    note: "Dùng cho việc đã kết thúc trong quá khứ.",
    examples: ["I visited my grandmother yesterday.", "He watched a movie last night.", "They went to school by bus."],
    question: "Chọn câu đúng:",
    options: ["I played tennis yesterday.", "I play tennis yesterday.", "I playing tennis yesterday."],
    answer: "I played tennis yesterday.",
  },
  "future-simple": {
    name: "4. Tương lai đơn",
    formula: "S + will + V.",
    note: "Dùng cho dự đoán, quyết định nhanh hoặc lời hứa.",
    examples: ["I will call you tonight.", "She will help me tomorrow.", "It will rain later."],
    question: "Chọn câu đúng:",
    options: ["They will arrive soon.", "They will arrives soon.", "They arrived soon tomorrow."],
    answer: "They will arrive soon.",
  },
  "present-perfect": {
    name: "5. Hiện tại hoàn thành",
    formula: "S + have/has + V3/ed.",
    note: "Dùng cho trải nghiệm, kết quả còn liên quan hiện tại, hoặc việc bắt đầu trong quá khứ kéo đến nay.",
    examples: ["I have finished my homework.", "She has lived here for five years.", "We have visited Da Lat twice."],
    question: "Chọn câu đúng:",
    options: ["She has finished dinner.", "She have finished dinner.", "She finished dinner since five."],
    answer: "She has finished dinner.",
  },
  "past-continuous": {
    name: "6. Quá khứ tiếp diễn",
    formula: "S + was/were + V-ing.",
    note: "Dùng cho việc đang diễn ra tại một thời điểm trong quá khứ.",
    examples: ["I was studying at eight last night.", "They were watching TV when I called.", "She was cooking dinner."],
    question: "Chọn câu đúng:",
    options: ["I was reading at 9 p.m.", "I am reading at 9 p.m. yesterday.", "I were reading at 9 p.m."],
    answer: "I was reading at 9 p.m.",
  },
  "future-continuous": {
    name: "7. Tương lai tiếp diễn",
    formula: "S + will be + V-ing.",
    note: "Dùng cho việc sẽ đang diễn ra tại một thời điểm trong tương lai.",
    examples: ["I will be studying at this time tomorrow.", "She will be working at 9 a.m.", "They will be traveling next week."],
    question: "Chọn câu đúng:",
    options: ["We will be waiting at 7.", "We will waiting at 7.", "We will be wait at 7."],
    answer: "We will be waiting at 7.",
  },
  "past-perfect": {
    name: "8. Quá khứ hoàn thành",
    formula: "S + had + V3/ed.",
    note: "Dùng cho hành động xảy ra trước một hành động khác trong quá khứ.",
    examples: ["I had eaten before he arrived.", "She had finished work before dinner.", "They had left when I came."],
    question: "Chọn câu đúng:",
    options: ["He had left before I arrived.", "He has left before I arrived.", "He had leave before I arrived."],
    answer: "He had left before I arrived.",
  },
  "present-perfect-continuous": {
    name: "9. Hiện tại hoàn thành tiếp diễn",
    formula: "S + have/has been + V-ing.",
    note: "Dùng để nhấn mạnh một việc bắt đầu trong quá khứ và vẫn đang tiếp tục.",
    examples: ["I have been learning English for two years.", "She has been working all morning.", "They have been waiting since six."],
    question: "Chọn câu đúng:",
    options: ["I have been studying for two hours.", "I has been studying for two hours.", "I have studying for two hours."],
    answer: "I have been studying for two hours.",
  },
  "past-perfect-continuous": {
    name: "10. Quá khứ hoàn thành tiếp diễn",
    formula: "S + had been + V-ing.",
    note: "Dùng để nhấn mạnh một việc đã kéo dài trước một mốc/hành động trong quá khứ.",
    examples: ["I had been studying for two hours before dinner.", "She had been working all day before she rested.", "They had been waiting for an hour when the bus came."],
    question: "Chọn câu đúng:",
    options: ["She had been working all day.", "She has been working all day yesterday.", "She had working all day."],
    answer: "She had been working all day.",
  },
  "future-perfect": {
    name: "11. Tương lai hoàn thành",
    formula: "S + will have + V3/ed.",
    note: "Dùng cho việc sẽ hoàn tất trước một thời điểm trong tương lai.",
    examples: ["I will have finished the report by Friday.", "She will have arrived by noon.", "They will have learned 100 words by next month."],
    question: "Chọn câu đúng:",
    options: ["I will have finished by 8.", "I will finished by 8.", "I will have finish by 8."],
    answer: "I will have finished by 8.",
  },
  "future-perfect-continuous": {
    name: "12. Tương lai hoàn thành tiếp diễn",
    formula: "S + will have been + V-ing.",
    note: "Khó nhất. Dùng để nhấn mạnh một việc sẽ kéo dài đến một mốc trong tương lai.",
    examples: ["By June, I will have been learning English for one year.", "She will have been working here for ten years.", "They will have been traveling for three days by Monday."],
    question: "Chọn câu đúng:",
    options: ["I will have been studying for three hours.", "I will have studying for three hours.", "I will been studying for three hours."],
    answer: "I will have been studying for three hours.",
  },
};

const dialogueLessons = {
  greeting: {
    name: "Chào hỏi",
    lines: [
      { speaker: "Anna", text: "Good morning. How are you today?", meaning: "Chào buổi sáng. Hôm nay bạn thế nào?" },
      { speaker: "Ben", text: "I am fine, thank you. And you?", meaning: "Tôi khỏe, cảm ơn bạn. Còn bạn?" },
      { speaker: "Anna", text: "I am great. Nice to meet you.", meaning: "Tôi rất ổn. Rất vui được gặp bạn." },
    ],
    question: "Anna nói câu nào để hỏi thăm Ben?",
    options: ["How are you today?", "Where is the menu?", "How much is it?"],
    answer: "How are you today?",
  },
  restaurant: {
    name: "Nhà hàng",
    lines: [
      { speaker: "Waiter", text: "Hello. Are you ready to order?", meaning: "Xin chào. Bạn sẵn sàng gọi món chưa?" },
      { speaker: "Customer", text: "Yes. I would like chicken and rice.", meaning: "Rồi. Tôi muốn gọi gà và cơm." },
      { speaker: "Waiter", text: "Would you like water?", meaning: "Bạn có muốn nước không?" },
    ],
    question: "Khách hàng muốn gọi món gì?",
    options: ["Chicken and rice.", "Coffee and cake.", "Fish and soup."],
    answer: "Chicken and rice.",
  },
  shopping: {
    name: "Mua sắm",
    lines: [
      { speaker: "Customer", text: "Excuse me. How much is this shirt?", meaning: "Xin lỗi. Chiếc áo này bao nhiêu tiền?" },
      { speaker: "Seller", text: "It is fifteen dollars.", meaning: "Nó giá 15 đô la." },
      { speaker: "Customer", text: "Can I try it on?", meaning: "Tôi có thể thử nó không?" },
    ],
    question: "Người mua hỏi giá món đồ nào?",
    options: ["This shirt.", "This bag.", "These shoes."],
    answer: "This shirt.",
  },
  travel: {
    name: "Du lịch",
    lines: [
      { speaker: "Tourist", text: "Excuse me. Where is the train station?", meaning: "Xin lỗi. Ga tàu ở đâu?" },
      { speaker: "Local", text: "Go straight and turn left.", meaning: "Đi thẳng rồi rẽ trái." },
      { speaker: "Tourist", text: "Thank you for your help.", meaning: "Cảm ơn bạn đã giúp." },
    ],
    question: "Người địa phương chỉ đường như thế nào?",
    options: ["Go straight and turn left.", "Turn right at the bank.", "Take a taxi home."],
    answer: "Go straight and turn left.",
  },
};

const otherGrammarLessons = {
  articles: {
    name: "Mạo từ: a, an, the",
    formula: "a/an + danh từ số ít chưa xác định. the + danh từ đã xác định.",
    note: "Dùng a trước âm phụ âm, an trước âm nguyên âm, the khi người nghe đã biết vật/người nào.",
    tip: "Nói lần đầu thường dùng a/an. Nhắc lại vật đó thường dùng the.",
    examples: ["I have a book.", "She eats an apple.", "The book is on the table."],
    exercises: [
      { question: "Chọn câu đúng:", options: ["I have a pen.", "I have an pen.", "I have the pen yesterday."], answer: "I have a pen." },
      { question: "Điền mạo từ đúng:", options: ["an apple", "a apple", "the apple first time"], answer: "an apple" },
      { question: "Khi đã biết quyển sách nào, chọn câu đúng:", options: ["The book is on the table.", "A book is on the table the.", "An book is on the table."], answer: "The book is on the table." },
    ],
  },
  pronouns: {
    name: "Đại từ",
    formula: "I, you, he, she, it, we, they thay cho danh từ.",
    note: "Dùng đại từ để câu ngắn gọn hơn và tránh lặp lại tên người/vật.",
    tip: "Nam dùng he, nữ dùng she, vật/con vật không xác định giới dùng it, nhiều người/vật dùng they.",
    examples: ["Lan is my friend. She is kind.", "This is my phone. It is new.", "My parents are teachers. They work hard."],
    exercises: [
      { question: "Lan là con gái. Chọn đại từ đúng:", options: ["She is a student.", "He is a student.", "It is a student."], answer: "She is a student." },
      { question: "My books là số nhiều. Chọn đại từ đúng:", options: ["They are new.", "It are new.", "He is new."], answer: "They are new." },
      { question: "This phone là một đồ vật. Chọn câu đúng:", options: ["It is expensive.", "She is expensive.", "They is expensive."], answer: "It is expensive." },
    ],
  },
  prepositions: {
    name: "Giới từ nơi chốn",
    formula: "in, on, under, next to, behind, between + nơi chốn.",
    note: "Dùng để nói một người/vật ở đâu.",
    tip: "in = bên trong, on = trên bề mặt, under = bên dưới, next to = bên cạnh.",
    examples: ["The book is on the table.", "The cat is under the chair.", "The bank is next to the hotel."],
    exercises: [
      { question: "Quyển sách ở trên bàn:", options: ["The book is on the table.", "The book is in the table.", "The book is under the table."], answer: "The book is on the table." },
      { question: "Con mèo ở dưới ghế:", options: ["The cat is under the chair.", "The cat is on the chair.", "The cat is next to under."], answer: "The cat is under the chair." },
      { question: "Ngân hàng ở cạnh khách sạn:", options: ["The bank is next to the hotel.", "The bank is in the hotel next.", "The bank is under the hotel."], answer: "The bank is next to the hotel." },
    ],
  },
  "question-words": {
    name: "Từ để hỏi",
    formula: "What, Where, When, Who, Why, How + trợ động từ + S + V?",
    note: "Dùng để hỏi thông tin cụ thể.",
    tip: "What hỏi cái gì, where hỏi ở đâu, when hỏi khi nào, who hỏi ai, why hỏi tại sao, how hỏi như thế nào.",
    examples: ["What is your name?", "Where do you live?", "How do you go to school?"],
    exercises: [
      { question: "Hỏi tên dùng từ nào?", options: ["What is your name?", "Where is your name?", "When is your name?"], answer: "What is your name?" },
      { question: "Hỏi nơi sống dùng câu nào?", options: ["Where do you live?", "Who do you live?", "Why do you live?"], answer: "Where do you live?" },
      { question: "Hỏi cách đi học dùng câu nào?", options: ["How do you go to school?", "What do you go to school?", "When do you go to school by?"], answer: "How do you go to school?" },
    ],
  },
  comparatives: {
    name: "So sánh hơn / nhất",
    formula: "short adjective + er / the + short adjective + est. more/most + long adjective.",
    note: "Dùng để so sánh 2 hoặc nhiều người/vật.",
    tip: "Tính từ ngắn thường thêm -er/-est. Tính từ dài thường dùng more/most.",
    examples: ["This room is bigger than that room.", "English is more interesting than math.", "She is the tallest student in class."],
    exercises: [
      { question: "So sánh hơn của big:", options: ["bigger", "more big", "biggest than"], answer: "bigger" },
      { question: "Tính từ dài interesting dùng:", options: ["more interesting", "interestinger", "the interestinger"], answer: "more interesting" },
      { question: "So sánh nhất của tall:", options: ["the tallest", "more tall", "taller than"], answer: "the tallest" },
    ],
  },
  modals: {
    name: "Động từ khuyết thiếu",
    formula: "S + can/should/must/may + V nguyên mẫu.",
    note: "Dùng để nói khả năng, lời khuyên, bắt buộc hoặc khả năng xảy ra.",
    tip: "Sau can, should, must, may luôn dùng động từ nguyên mẫu.",
    examples: ["I can swim.", "You should drink water.", "Students must wear uniforms."],
    exercises: [
      { question: "Sau can chọn dạng đúng:", options: ["I can speak English.", "I can speaks English.", "I can speaking English."], answer: "I can speak English." },
      { question: "Lời khuyên nên dùng:", options: ["You should rest.", "You must resting.", "You can to rest."], answer: "You should rest." },
      { question: "Sự bắt buộc dùng:", options: ["You must stop.", "You may stopping.", "You should to stop."], answer: "You must stop." },
    ],
  },
  passive: {
    name: "Câu bị động",
    formula: "S + be + V3/ed + by + người làm.",
    note: "Dùng khi muốn nhấn mạnh người/vật nhận hành động.",
    tip: "Tân ngữ của câu chủ động đưa lên làm chủ ngữ trong câu bị động.",
    examples: ["The cake is made by my mother.", "English is spoken in many countries.", "The room was cleaned yesterday."],
    exercises: [
      { question: "Chọn câu bị động đúng:", options: ["The cake is made by my mother.", "The cake makes by my mother.", "The cake made my mother."], answer: "The cake is made by my mother." },
      { question: "English / speak / many countries:", options: ["English is spoken in many countries.", "English speaks in many countries.", "English is speak in many countries."], answer: "English is spoken in many countries." },
      { question: "Quá khứ bị động dùng:", options: ["The room was cleaned.", "The room is clean yesterday.", "The room was clean by."], answer: "The room was cleaned." },
    ],
  },
  conditionals: {
    name: "Câu điều kiện cơ bản",
    formula: "If + present simple, S + will/can + V. If + past simple, S + would + V.",
    note: "Loại 1 nói điều có thể xảy ra. Loại 2 nói điều giả định, khó xảy ra ở hiện tại.",
    tip: "If hiện tại đi với will. If quá khứ giả định đi với would.",
    examples: ["If it rains, I will stay home.", "If you study, you will improve.", "If I had more time, I would travel."],
    exercises: [
      { question: "Điều có thể xảy ra chọn câu đúng:", options: ["If it rains, I will stay home.", "If it rain, I will stay home.", "If it rains, I would stayed home."], answer: "If it rains, I will stay home." },
      { question: "If you study, ...", options: ["you will improve.", "you improves.", "you would improved."], answer: "you will improve." },
      { question: "Giả định hiện tại chọn câu đúng:", options: ["If I had more time, I would travel.", "If I have more time, I would traveled.", "If I had more time, I will travels."], answer: "If I had more time, I would travel." },
    ],
  },
};

const randomMiniExerciseData = [
  ["Hiện tại đơn", "Chọn câu đúng:", "She likes tea.", "She like tea.", "She liking tea."],
  ["Hiện tại đơn", "Chọn câu đúng:", "They play football on Sundays.", "They plays football on Sundays.", "They playing football on Sundays."],
  ["Hiện tại đơn", "Chọn câu đúng:", "He goes to school by bus.", "He go to school by bus.", "He going to school by bus."],
  ["Hiện tại đơn", "Chọn câu đúng:", "I do not eat fish.", "I does not eat fish.", "I am not eat fish."],
  ["Hiện tại đơn", "Chọn câu đúng:", "Does she work here?", "Do she work here?", "Is she work here?"],
  ["Hiện tại tiếp diễn", "Chọn câu đúng:", "I am studying now.", "I study now.", "I studying now."],
  ["Hiện tại tiếp diễn", "Chọn câu đúng:", "They are watching TV.", "They watching TV.", "They is watching TV."],
  ["Hiện tại tiếp diễn", "Chọn câu đúng:", "He is cooking dinner.", "He are cooking dinner.", "He cooks dinner now."],
  ["Hiện tại tiếp diễn", "Chọn câu đúng:", "We are learning English.", "We is learning English.", "We learn English now."],
  ["Hiện tại tiếp diễn", "Chọn câu đúng:", "Are you listening?", "Do you listening?", "Is you listening?"],
  ["Quá khứ đơn", "Chọn câu đúng:", "I visited Hue last year.", "I visit Hue last year.", "I visiting Hue last year."],
  ["Quá khứ đơn", "Chọn câu đúng:", "She watched a movie yesterday.", "She watches a movie yesterday.", "She watch a movie yesterday."],
  ["Quá khứ đơn", "Chọn câu đúng:", "They went home early.", "They go home early yesterday.", "They goed home early."],
  ["Quá khứ đơn", "Chọn câu đúng:", "Did he call you?", "Does he called you?", "Was he call you?"],
  ["Quá khứ đơn", "Chọn câu đúng:", "We did not buy tickets.", "We do not bought tickets.", "We did not bought tickets."],
  ["Tương lai đơn", "Chọn câu đúng:", "I will help you.", "I will helps you.", "I will helping you."],
  ["Tương lai đơn", "Chọn câu đúng:", "She will arrive tomorrow.", "She arrives tomorrow will.", "She will arrives tomorrow."],
  ["Tương lai đơn", "Chọn câu đúng:", "Will they come tonight?", "Do they will come tonight?", "Will they comes tonight?"],
  ["Tương lai đơn", "Chọn câu đúng:", "It will rain later.", "It will rains later.", "It raining later will."],
  ["Tương lai đơn", "Chọn câu đúng:", "We will not be late.", "We will not late.", "We will are not late."],
  ["Hiện tại hoàn thành", "Chọn câu đúng:", "I have finished my homework.", "I has finished my homework.", "I have finish my homework."],
  ["Hiện tại hoàn thành", "Chọn câu đúng:", "She has lived here for five years.", "She have lived here for five years.", "She lived here since five years."],
  ["Hiện tại hoàn thành", "Chọn câu đúng:", "Have you eaten breakfast?", "Has you eaten breakfast?", "Did you eaten breakfast?"],
  ["Hiện tại hoàn thành", "Chọn câu đúng:", "They have visited Da Lat twice.", "They has visited Da Lat twice.", "They have visit Da Lat twice."],
  ["Hiện tại hoàn thành", "Chọn câu đúng:", "He has not called me yet.", "He have not called me yet.", "He has not call me yet."],
  ["Quá khứ tiếp diễn", "Chọn câu đúng:", "I was reading at 8 p.m.", "I am reading at 8 p.m. yesterday.", "I were reading at 8 p.m."],
  ["Quá khứ tiếp diễn", "Chọn câu đúng:", "They were playing when it rained.", "They was playing when it rained.", "They played when it raining."],
  ["Quá khứ tiếp diễn", "Chọn câu đúng:", "She was cooking dinner.", "She were cooking dinner.", "She is cooking dinner yesterday."],
  ["Quá khứ tiếp diễn", "Chọn câu đúng:", "Were you sleeping?", "Was you sleeping?", "Did you sleeping?"],
  ["Quá khứ tiếp diễn", "Chọn câu đúng:", "We were studying together.", "We was studying together.", "We studying together yesterday."],
  ["Tương lai tiếp diễn", "Chọn câu đúng:", "I will be working at 9.", "I will working at 9.", "I will be work at 9."],
  ["Tương lai tiếp diễn", "Chọn câu đúng:", "They will be traveling next week.", "They will traveling next week.", "They will be travel next week."],
  ["Tương lai tiếp diễn", "Chọn câu đúng:", "She will be waiting for you.", "She will waiting for you.", "She will be wait for you."],
  ["Tương lai tiếp diễn", "Chọn câu đúng:", "Will you be studying tonight?", "Will you studying tonight?", "Do you will be studying tonight?"],
  ["Tương lai tiếp diễn", "Chọn câu đúng:", "We will be having lunch then.", "We will having lunch then.", "We will be have lunch then."],
  ["Quá khứ hoàn thành", "Chọn câu đúng:", "I had eaten before he arrived.", "I have eaten before he arrived.", "I had eat before he arrived."],
  ["Quá khứ hoàn thành", "Chọn câu đúng:", "She had left when I came.", "She has left when I came.", "She had leave when I came."],
  ["Quá khứ hoàn thành", "Chọn câu đúng:", "They had finished the test.", "They have finished the test yesterday.", "They had finish the test."],
  ["Quá khứ hoàn thành", "Chọn câu đúng:", "Had you seen him before?", "Have you saw him before?", "Had you see him before?"],
  ["Quá khứ hoàn thành", "Chọn câu đúng:", "We had not met before that day.", "We have not met before that day.", "We had not meet before that day."],
  ["Hiện tại hoàn thành tiếp diễn", "Chọn câu đúng:", "I have been studying for two hours.", "I have studying for two hours.", "I has been studying for two hours."],
  ["Hiện tại hoàn thành tiếp diễn", "Chọn câu đúng:", "She has been working all morning.", "She have been working all morning.", "She has working all morning."],
  ["Hiện tại hoàn thành tiếp diễn", "Chọn câu đúng:", "They have been waiting since six.", "They has been waiting since six.", "They have waiting since six."],
  ["Hiện tại hoàn thành tiếp diễn", "Chọn câu đúng:", "Have you been learning English?", "Have you learning English?", "Has you been learning English?"],
  ["Hiện tại hoàn thành tiếp diễn", "Chọn câu đúng:", "He has been running for ten minutes.", "He have been running for ten minutes.", "He has running for ten minutes."],
  ["Quá khứ hoàn thành tiếp diễn", "Chọn câu đúng:", "I had been studying before dinner.", "I have been studying before dinner.", "I had studying before dinner."],
  ["Quá khứ hoàn thành tiếp diễn", "Chọn câu đúng:", "She had been working all day.", "She has been working all day yesterday.", "She had working all day."],
  ["Quá khứ hoàn thành tiếp diễn", "Chọn câu đúng:", "They had been waiting for an hour.", "They have been waiting for an hour yesterday.", "They had waiting for an hour."],
  ["Quá khứ hoàn thành tiếp diễn", "Chọn câu đúng:", "Had you been sleeping?", "Have you been sleeping yesterday?", "Had you sleeping?"],
  ["Quá khứ hoàn thành tiếp diễn", "Chọn câu đúng:", "We had been practicing before the test.", "We have been practicing before the test.", "We had practicing before the test."],
  ["Tương lai hoàn thành", "Chọn câu đúng:", "I will have finished by Friday.", "I will finished by Friday.", "I will have finish by Friday."],
  ["Tương lai hoàn thành", "Chọn câu đúng:", "She will have arrived by noon.", "She will has arrived by noon.", "She will have arrive by noon."],
  ["Tương lai hoàn thành", "Chọn câu đúng:", "They will have learned 100 words.", "They will learned 100 words.", "They will have learn 100 words."],
  ["Tương lai hoàn thành", "Chọn câu đúng:", "Will you have completed it?", "Will you completed it?", "Will you have complete it?"],
  ["Tương lai hoàn thành", "Chọn câu đúng:", "We will not have started by then.", "We will not started by then.", "We will not have start by then."],
  ["Tương lai hoàn thành tiếp diễn", "Chọn câu đúng:", "I will have been studying for three hours.", "I will have studying for three hours.", "I will been studying for three hours."],
  ["Tương lai hoàn thành tiếp diễn", "Chọn câu đúng:", "She will have been working here for ten years.", "She will have working here for ten years.", "She will been working here for ten years."],
  ["Tương lai hoàn thành tiếp diễn", "Chọn câu đúng:", "They will have been traveling for three days.", "They will have traveling for three days.", "They will been traveling for three days."],
  ["Tương lai hoàn thành tiếp diễn", "Chọn câu đúng:", "Will you have been waiting long?", "Will you have waiting long?", "Will you been waiting long?"],
  ["Tương lai hoàn thành tiếp diễn", "Chọn câu đúng:", "We will have been learning for one year.", "We will have learning for one year.", "We will been learning for one year."],
  ["Mạo từ", "Chọn cụm đúng:", "a book", "an book", "the book first time"],
  ["Mạo từ", "Chọn cụm đúng:", "an orange", "a orange", "the orange first time"],
  ["Mạo từ", "Chọn câu đúng:", "The sun is bright.", "A sun is bright.", "An sun is bright."],
  ["Mạo từ", "Chọn câu đúng:", "I need an umbrella.", "I need a umbrella.", "I need the umbrella first time."],
  ["Mạo từ", "Chọn câu đúng:", "She is a teacher.", "She is an teacher.", "She is the teacher first time."],
  ["Đại từ", "Chọn câu đúng:", "Lan is kind. She helps me.", "Lan is kind. He helps me.", "Lan is kind. It helps me."],
  ["Đại từ", "Chọn câu đúng:", "My books are new. They are on the table.", "My books are new. It is on the table.", "My books are new. He is on the table."],
  ["Đại từ", "Chọn câu đúng:", "This phone is old. It works well.", "This phone is old. She works well.", "This phone is old. They works well."],
  ["Đại từ", "Chọn câu đúng:", "My brother is tall. He plays basketball.", "My brother is tall. She plays basketball.", "My brother is tall. It plays basketball."],
  ["Đại từ", "Chọn câu đúng:", "My sister is a doctor. She works at a hospital.", "My sister is a doctor. He works at a hospital.", "My sister is a doctor. They works at a hospital."],
  ["Giới từ", "Chọn câu đúng:", "The book is on the table.", "The book is in the table.", "The book is at the table on."],
  ["Giới từ", "Chọn câu đúng:", "The cat is under the chair.", "The cat is on under the chair.", "The cat is in the chair under."],
  ["Giới từ", "Chọn câu đúng:", "The bank is next to the hotel.", "The bank is next the hotel.", "The bank is under next to hotel."],
  ["Giới từ", "Chọn câu đúng:", "She lives in Hanoi.", "She lives on Hanoi.", "She lives at Hanoi city in."],
  ["Giới từ", "Chọn câu đúng:", "I go to school in the morning.", "I go to school on the morning.", "I go to school at the morning."],
  ["Từ để hỏi", "Chọn câu hỏi đúng:", "What is your name?", "Where is your name?", "When is your name?"],
  ["Từ để hỏi", "Chọn câu hỏi đúng:", "Where do you live?", "Who do you live?", "Why do you live?"],
  ["Từ để hỏi", "Chọn câu hỏi đúng:", "When is your birthday?", "What is your birthday place?", "Who is your birthday?"],
  ["Từ để hỏi", "Chọn câu hỏi đúng:", "Who is your teacher?", "Where is your teacher person?", "When is your teacher person?"],
  ["Từ để hỏi", "Chọn câu hỏi đúng:", "How do you go to school?", "What do you go to school?", "Who do you go to school?"],
  ["So sánh", "Chọn dạng đúng:", "bigger", "more big", "biggest than"],
  ["So sánh", "Chọn dạng đúng:", "more beautiful", "beautifuller", "the beautifuler"],
  ["So sánh", "Chọn câu đúng:", "This room is smaller than that room.", "This room is more small than that room.", "This room is smallest than that room."],
  ["So sánh", "Chọn câu đúng:", "She is the tallest student.", "She is tallest than student.", "She is more tall student."],
  ["So sánh", "Chọn câu đúng:", "English is more interesting than math.", "English is interestinger than math.", "English is most interesting than math."],
  ["Động từ khuyết thiếu", "Chọn câu đúng:", "I can swim.", "I can swims.", "I can swimming."],
  ["Động từ khuyết thiếu", "Chọn câu đúng:", "You should rest.", "You should to rest.", "You should resting."],
  ["Động từ khuyết thiếu", "Chọn câu đúng:", "Students must wear uniforms.", "Students must wears uniforms.", "Students must wearing uniforms."],
  ["Động từ khuyết thiếu", "Chọn câu đúng:", "May I come in?", "May I comes in?", "May I coming in?"],
  ["Động từ khuyết thiếu", "Chọn câu đúng:", "He cannot drive.", "He cannot drives.", "He cannot driving."],
  ["Bị động", "Chọn câu đúng:", "The cake is made by my mother.", "The cake makes by my mother.", "The cake is make by my mother."],
  ["Bị động", "Chọn câu đúng:", "English is spoken in many countries.", "English speaks in many countries.", "English is speak in many countries."],
  ["Bị động", "Chọn câu đúng:", "The room was cleaned yesterday.", "The room cleaned was yesterday.", "The room was clean yesterday by."],
  ["Bị động", "Chọn câu đúng:", "The letter was written by Nam.", "The letter wrote by Nam.", "The letter was write by Nam."],
  ["Bị động", "Chọn câu đúng:", "The homework is checked by the teacher.", "The homework checks by the teacher.", "The homework is check by the teacher."],
  ["Câu điều kiện", "Chọn câu đúng:", "If it rains, I will stay home.", "If it rain, I will stay home.", "If it rains, I would stayed home."],
  ["Câu điều kiện", "Chọn câu đúng:", "If you study, you will improve.", "If you studies, you will improve.", "If you study, you improves."],
  ["Câu điều kiện", "Chọn câu đúng:", "If I had more time, I would travel.", "If I have more time, I would traveled.", "If I had more time, I will travels."],
  ["Câu điều kiện", "Chọn câu đúng:", "If she calls, I will answer.", "If she call, I will answer.", "If she calls, I answer will."],
  ["Câu điều kiện", "Chọn câu đúng:", "If he were here, he would help us.", "If he is here, he would helped us.", "If he were here, he will helps us."],
];

const randomMiniExercises = randomMiniExerciseData.map(([topic, question, answer, wrongOne, wrongTwo]) => ({
  topic,
  question,
  answer,
  options: [answer, wrongOne, wrongTwo],
  explanation: buildRandomExerciseExplanation(topic, answer),
}));

const elements = {
  form: document.querySelector("#lookup-form"),
  input: document.querySelector("#word-input"),
  status: document.querySelector("#status"),
  wordTitle: document.querySelector("#word-title"),
  phonetic: document.querySelector("#phonetic"),
  translation: document.querySelector("#translation"),
  definitions: document.querySelector("#definitions"),
  examples: document.querySelector("#examples"),
  related: document.querySelector("#related-words"),
  audioButton: document.querySelector("#audio-button"),
  quizQuestion: document.querySelector("#quiz-question"),
  quizOptions: document.querySelector("#quiz-options"),
  quizFeedback: document.querySelector("#quiz-feedback"),
  grammarTopic: document.querySelector("#grammar-topic"),
  grammarName: document.querySelector("#grammar-name"),
  grammarFormula: document.querySelector("#grammar-formula"),
  grammarNote: document.querySelector("#grammar-note"),
  grammarExamples: document.querySelector("#grammar-examples"),
  grammarQuestion: document.querySelector("#grammar-question"),
  grammarOptions: document.querySelector("#grammar-options"),
  grammarFeedback: document.querySelector("#grammar-feedback"),
  grammarProgress: document.querySelector("#grammar-progress"),
  nextGrammarButton: document.querySelector("#next-grammar-button"),
  grammarInput: document.querySelector("#grammar-input"),
  grammarCheckButton: document.querySelector("#grammar-check-button"),
  grammarResult: document.querySelector("#grammar-result"),
  otherGrammarTopic: document.querySelector("#other-grammar-topic"),
  otherGrammarName: document.querySelector("#other-grammar-name"),
  otherGrammarFormula: document.querySelector("#other-grammar-formula"),
  otherGrammarNote: document.querySelector("#other-grammar-note"),
  otherGrammarExamples: document.querySelector("#other-grammar-examples"),
  otherGrammarTip: document.querySelector("#other-grammar-tip"),
  otherGrammarQuestion: document.querySelector("#other-grammar-question"),
  otherGrammarOptions: document.querySelector("#other-grammar-options"),
  otherGrammarProgress: document.querySelector("#other-grammar-progress"),
  nextOtherGrammarButton: document.querySelector("#next-other-grammar-button"),
  otherGrammarFeedback: document.querySelector("#other-grammar-feedback"),
  randomExerciseButton: document.querySelector("#random-exercise-button"),
  randomExerciseProgress: document.querySelector("#random-exercise-progress"),
  randomExerciseTopic: document.querySelector("#random-exercise-topic"),
  randomExerciseQuestion: document.querySelector("#random-exercise-question"),
  randomExerciseOptions: document.querySelector("#random-exercise-options"),
  randomExerciseFeedback: document.querySelector("#random-exercise-feedback"),
  randomExerciseExplanation: document.querySelector("#random-exercise-explanation"),
  dialogueTopic: document.querySelector("#dialogue-topic"),
  dialogueName: document.querySelector("#dialogue-name"),
  dialogueLines: document.querySelector("#dialogue-lines"),
  playDialogueButton: document.querySelector("#play-dialogue-button"),
  speechVoice: document.querySelector("#speech-voice"),
  speechSpeed: document.querySelector("#speech-speed"),
  listeningQuestion: document.querySelector("#listening-question"),
  listeningOptions: document.querySelector("#listening-options"),
  listeningFeedback: document.querySelector("#listening-feedback"),
};

let currentAudio = "";
let activeGrammarTopic = "present-simple";
let activeGrammarExerciseIndex = 0;
let activeOtherGrammarTopic = "articles";
let activeOtherGrammarExerciseIndex = 0;
let remainingRandomExerciseIndexes = [];
let randomExerciseSeenCount = 0;
let englishVoices = [];

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  lookupWord(elements.input.value);
});

document.querySelectorAll(".word-chip").forEach((button) => {
  button.addEventListener("click", () => {
    elements.input.value = button.dataset.word;
    lookupWord(button.dataset.word);
  });
});

elements.audioButton.addEventListener("click", () => {
  if (currentAudio) {
    new Audio(currentAudio).play();
    return;
  }

  speakText(elements.wordTitle.textContent);
});

elements.dialogueTopic.addEventListener("change", () => {
  renderDialogueLesson(elements.dialogueTopic.value);
});

elements.playDialogueButton.addEventListener("click", () => {
  playDialogue(elements.dialogueTopic.value);
});

if ("speechSynthesis" in window) {
  speechSynthesis.addEventListener("voiceschanged", loadEnglishVoices);
  loadEnglishVoices();
}

elements.grammarTopic.addEventListener("change", () => {
  renderGrammarLesson(elements.grammarTopic.value);
});

elements.nextGrammarButton.addEventListener("click", () => {
  const lesson = grammarLessons[activeGrammarTopic] || grammarLessons["present-simple"];
  const exercises = getGrammarExercises(lesson);
  activeGrammarExerciseIndex = (activeGrammarExerciseIndex + 1) % exercises.length;
  renderGrammarExercise(lesson);
});

elements.otherGrammarTopic.addEventListener("change", () => {
  renderOtherGrammarLesson(elements.otherGrammarTopic.value);
});

elements.nextOtherGrammarButton.addEventListener("click", () => {
  const lesson = otherGrammarLessons[activeOtherGrammarTopic] || otherGrammarLessons.articles;
  activeOtherGrammarExerciseIndex = (activeOtherGrammarExerciseIndex + 1) % lesson.exercises.length;
  renderOtherGrammarExercise(lesson);
});

elements.randomExerciseButton.addEventListener("click", () => {
  renderRandomMiniExercise();
});

elements.grammarCheckButton.addEventListener("click", () => {
  checkGrammar(elements.grammarInput.value);
});

async function lookupWord(rawWord) {
  const word = rawWord.trim().toLowerCase();
  if (!word) {
    setStatus("Hãy nhập một từ tiếng Anh trước nhé.");
    return;
  }

  setStatus(`Đang lấy bài học cho "${word}"...`);

  try {
    const [dictionaryData, translationData, relatedData] = await Promise.allSettled([
      fetchDictionary(word),
      fetchTranslation(word),
      fetchRelatedWords(word),
    ]);

    const fallback = fallbackLessons[word] || buildGenericFallback(word);
    const lesson = {
      ...fallback,
      ...(dictionaryData.status === "fulfilled" ? dictionaryData.value : {}),
      translation:
        translationData.status === "fulfilled"
          ? translationData.value
          : fallback.translation,
      related:
        relatedData.status === "fulfilled" && relatedData.value.length
          ? relatedData.value
          : fallback.related,
    };
    lesson.examples = mergeExamples(getLocalExamples(word), lesson.examples);

    renderLesson(lesson);
    setStatus("Đã sẵn sàng: đọc nghĩa, nghe phát âm, rồi làm câu hỏi nhỏ bên dưới.");
  } catch (error) {
    renderLesson(fallbackLessons[word] || buildGenericFallback(word));
    setStatus("API đang bận, mình đang hiện bài học dự phòng để bạn vẫn học được.");
  }
}

async function fetchDictionary(word) {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
  if (!response.ok) throw new Error("Dictionary request failed");

  const data = await response.json();
  const entry = data[0];
  const phoneticItem = entry.phonetics?.find((item) => item.text || item.audio) || {};
  const definitions = entry.meanings
    ?.flatMap((meaning) => meaning.definitions || [])
    .slice(0, 3);

  return {
    word: entry.word,
    phonetic: phoneticItem.text || entry.phonetic || "",
    audio: normalizeAudioUrl(phoneticItem.audio || ""),
    definitions: definitions.map((item) => item.definition).filter(Boolean),
    examples: definitions.map((item) => item.example).filter(Boolean).slice(0, 2),
  };
}

async function fetchTranslation(word) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|vi`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Translation request failed");

  const data = await response.json();
  return data.responseData?.translatedText || "chưa có bản dịch";
}

async function fetchRelatedWords(word) {
  const url = `https://api.datamuse.com/words?ml=${encodeURIComponent(word)}&max=8`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Related words request failed");

  const data = await response.json();
  return data.map((item) => item.word).filter(Boolean).slice(0, 8);
}

function renderLesson(lesson) {
  currentAudio = lesson.audio || "";
  elements.wordTitle.textContent = lesson.word;
  elements.phonetic.textContent = lesson.phonetic || "Chưa có phiên âm";
  elements.translation.textContent = lesson.translation;
  elements.audioButton.disabled = false;

  renderList(elements.definitions, lesson.definitions, "Chưa có nghĩa từ API. Hãy thử từ khác.");
  renderExamples(lesson.examples, lesson.word);
  renderRelatedWords(lesson.related);
  renderQuiz(lesson);
}

function renderList(container, items, emptyText) {
  container.innerHTML = "";
  const visibleItems = items?.length ? items : [emptyText];
  visibleItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderExamples(examples, word) {
  elements.examples.innerHTML = "";
  const visibleExamples = examples?.length ? examples : getLocalExamples(word);
  visibleExamples.forEach((example) => {
    const p = document.createElement("p");
    p.textContent = example;
    elements.examples.appendChild(p);
  });
}

function getLocalExamples(word) {
  return localExampleBank[word] || [
    `I want to learn the word "${word}".`,
    `Can you use "${word}" in a simple sentence?`,
    `The word "${word}" is useful in daily English.`,
  ];
}

function mergeExamples(localExamples, apiExamples = []) {
  const examples = [...localExamples, ...apiExamples].filter(Boolean);
  return [...new Set(examples)].slice(0, 4);
}

function renderRelatedWords(words) {
  elements.related.innerHTML = "";
  words.slice(0, 8).forEach((word) => {
    const span = document.createElement("span");
    span.textContent = word;
    elements.related.appendChild(span);
  });
}

function renderQuiz(lesson) {
  elements.quizQuestion.textContent = `"${lesson.word}" gần với nghĩa nào?`;
  elements.quizFeedback.textContent = "";
  elements.quizOptions.innerHTML = "";

  const correctAnswer = lesson.translation || lesson.definitions[0];
  const options = shuffle([correctAnswer, ...shuffle(quizDistractors).slice(0, 2)]);

  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      elements.quizOptions.querySelectorAll("button").forEach((item) => {
        item.disabled = true;
        if (item.textContent === correctAnswer) item.classList.add("correct");
      });

      if (option === correctAnswer) {
        elements.quizFeedback.textContent = "Đúng rồi. Hãy đặt một câu ngắn với từ này.";
      } else {
        button.classList.add("wrong");
        elements.quizFeedback.textContent = `Gần đúng. Đáp án là: ${correctAnswer}.`;
      }
    });
    elements.quizOptions.appendChild(button);
  });
}

function renderDialogueLesson(topic) {
  const lesson = dialogueLessons[topic] || dialogueLessons.greeting;

  elements.dialogueName.textContent = lesson.name;
  elements.dialogueLines.innerHTML = "";
  elements.listeningQuestion.textContent = lesson.question;
  elements.listeningOptions.innerHTML = "";
  elements.listeningFeedback.textContent = "";

  lesson.lines.forEach((line) => {
    const row = document.createElement("div");
    row.className = "dialogue-line";

    const textWrap = document.createElement("div");

    const english = document.createElement("p");
    english.className = "dialogue-english";
    english.textContent = `${line.speaker}: ${line.text}`;

    const meaning = document.createElement("p");
    meaning.className = "dialogue-meaning";
    meaning.textContent = line.meaning;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Nghe";
    button.addEventListener("click", () => speakText(line.text));

    textWrap.append(english, meaning);
    row.append(textWrap, button);
    elements.dialogueLines.appendChild(row);
  });

  shuffle(lesson.options).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      elements.listeningOptions.querySelectorAll("button").forEach((item) => {
        item.disabled = true;
        if (item.textContent === lesson.answer) item.classList.add("correct");
      });

      if (option === lesson.answer) {
        elements.listeningFeedback.textContent = "Đúng rồi. Hãy bấm nghe lại câu đó và nhại theo.";
      } else {
        button.classList.add("wrong");
        elements.listeningFeedback.textContent = `Chưa đúng. Câu cần nghe là: ${lesson.answer}`;
      }
    });
    elements.listeningOptions.appendChild(button);
  });
}

function playDialogue(topic) {
  if (!("speechSynthesis" in window)) {
    setStatus("Trình duyệt này chưa hỗ trợ đọc hội thoại bằng Web Speech.");
    return;
  }

  const lesson = dialogueLessons[topic] || dialogueLessons.greeting;
  speechSynthesis.cancel();

  lesson.lines.forEach((line, index) => {
    setTimeout(() => speakText(line.text, false), index * 2300);
  });
}

function renderGrammarLesson(topic) {
  const lesson = grammarLessons[topic] || grammarLessons["present-simple"];
  activeGrammarTopic = topic;
  activeGrammarExerciseIndex = 0;

  elements.grammarName.textContent = lesson.name;
  elements.grammarFormula.textContent = lesson.formula;
  elements.grammarNote.textContent = lesson.note;
  elements.grammarExamples.innerHTML = "";

  lesson.examples.forEach((example) => {
    const p = document.createElement("p");
    p.textContent = example;
    elements.grammarExamples.appendChild(p);
  });

  renderGrammarExercise(lesson);
}

function renderGrammarExercise(lesson) {
  const exercises = getGrammarExercises(lesson);
  const exercise = exercises[activeGrammarExerciseIndex] || exercises[0];

  elements.grammarQuestion.textContent = exercise.question;
  elements.grammarFeedback.textContent = "";
  elements.grammarOptions.innerHTML = "";
  elements.grammarProgress.textContent = `Câu ${activeGrammarExerciseIndex + 1}/${exercises.length}`;

  shuffle(exercise.options).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      document.querySelectorAll("#grammar-options button").forEach((item) => {
        item.disabled = true;
        if (item.textContent === exercise.answer) item.classList.add("correct");
      });

      if (option === exercise.answer) {
        elements.grammarFeedback.textContent = "Đúng rồi. Bạn đã chọn đúng mẫu câu.";
      } else {
        button.classList.add("wrong");
        elements.grammarFeedback.textContent = `Chưa đúng. Câu đúng là: ${exercise.answer}`;
      }
    });
    elements.grammarOptions.appendChild(button);
  });
}

function getGrammarExercises(lesson) {
  const baseExercise = {
    question: lesson.question,
    options: lesson.options,
    answer: lesson.answer,
  };

  const exampleExercises = lesson.examples.map((example, index) => ({
    question: `Chọn câu cùng thì với ví dụ ${index + 1}:`,
    options: makeGrammarOptions(example, lesson.answer),
    answer: example,
  }));

  return [baseExercise, ...exampleExercises];
}

function makeGrammarOptions(correctSentence, fallbackWrong) {
  const wrongOptions = [
    fallbackWrong,
    correctSentence.replace(/\b(is|are|am|was|were|will|have|has|had)\b/i, "do"),
    correctSentence.replace(/\b(V-ing|studying|learning|working|waiting|traveling|reading|playing)\b/i, "study"),
    correctSentence.replace(/\b(ed|finished|visited|watched|played|arrived|left)\b/i, "finish"),
  ].filter((option) => option && option !== correctSentence);

  return [correctSentence, ...new Set(wrongOptions)].slice(0, 3);
}

function renderOtherGrammarLesson(topic) {
  const lesson = otherGrammarLessons[topic] || otherGrammarLessons.articles;
  activeOtherGrammarTopic = topic;
  activeOtherGrammarExerciseIndex = 0;

  elements.otherGrammarName.textContent = lesson.name;
  elements.otherGrammarFormula.textContent = lesson.formula;
  elements.otherGrammarNote.textContent = lesson.note;
  elements.otherGrammarTip.textContent = lesson.tip;
  elements.otherGrammarExamples.innerHTML = "";

  lesson.examples.forEach((example) => {
    const p = document.createElement("p");
    p.textContent = example;
    elements.otherGrammarExamples.appendChild(p);
  });

  renderOtherGrammarExercise(lesson);
}

function renderOtherGrammarExercise(lesson) {
  const exercise = lesson.exercises[activeOtherGrammarExerciseIndex] || lesson.exercises[0];

  elements.otherGrammarQuestion.textContent = exercise.question;
  elements.otherGrammarFeedback.textContent = "";
  elements.otherGrammarOptions.innerHTML = "";
  elements.otherGrammarProgress.textContent = `Câu ${activeOtherGrammarExerciseIndex + 1}/${lesson.exercises.length}`;

  shuffle(exercise.options).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      elements.otherGrammarOptions.querySelectorAll("button").forEach((item) => {
        item.disabled = true;
        if (item.textContent === exercise.answer) item.classList.add("correct");
      });

      if (option === exercise.answer) {
        elements.otherGrammarFeedback.textContent = "Đúng rồi. Bạn đã nắm được cấu trúc này.";
      } else {
        button.classList.add("wrong");
        elements.otherGrammarFeedback.textContent = `Chưa đúng. Đáp án là: ${exercise.answer}`;
      }
    });
    elements.otherGrammarOptions.appendChild(button);
  });
}

function renderRandomMiniExercise() {
  const exercise = getNextRandomMiniExercise();

  elements.randomExerciseTopic.textContent = exercise.topic;
  elements.randomExerciseQuestion.textContent = exercise.question;
  elements.randomExerciseFeedback.textContent = "";
  elements.randomExerciseExplanation.textContent = "";
  elements.randomExerciseOptions.innerHTML = "";
  elements.randomExerciseProgress.textContent = `Đã gặp ${randomExerciseSeenCount}/${randomMiniExercises.length}`;

  shuffle(exercise.options).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      elements.randomExerciseOptions.querySelectorAll("button").forEach((item) => {
        item.disabled = true;
        if (item.textContent === exercise.answer) item.classList.add("correct");
      });

      if (option === exercise.answer) {
        elements.randomExerciseFeedback.textContent = "Đúng rồi. Bấm câu ngẫu nhiên để luyện tiếp.";
      } else {
        button.classList.add("wrong");
        elements.randomExerciseFeedback.textContent = `Chưa đúng. Đáp án là: ${exercise.answer}`;
      }
      elements.randomExerciseExplanation.textContent = exercise.explanation;
    });
    elements.randomExerciseOptions.appendChild(button);
  });
}

function getNextRandomMiniExercise() {
  if (!remainingRandomExerciseIndexes.length) {
    remainingRandomExerciseIndexes = randomMiniExercises.map((_, index) => index);
    randomExerciseSeenCount = 0;
  }

  const randomPosition = Math.floor(Math.random() * remainingRandomExerciseIndexes.length);
  const [exerciseIndex] = remainingRandomExerciseIndexes.splice(randomPosition, 1);
  randomExerciseSeenCount += 1;
  return randomMiniExercises[exerciseIndex];
}

function buildRandomExerciseExplanation(topic, answer) {
  const topicTips = {
    "Hiện tại đơn": "Hiện tại đơn dùng cho thói quen/sự thật. Với he/she/it, động từ thường thêm s/es.",
    "Hiện tại tiếp diễn": "Hiện tại tiếp diễn dùng am/is/are + V-ing để nói việc đang xảy ra.",
    "Quá khứ đơn": "Quá khứ đơn dùng V2/ed hoặc did + V cho việc đã kết thúc trong quá khứ.",
    "Tương lai đơn": "Tương lai đơn dùng will + động từ nguyên mẫu.",
    "Hiện tại hoàn thành": "Hiện tại hoàn thành dùng have/has + V3/ed, thường liên quan đến kết quả hoặc trải nghiệm.",
    "Quá khứ tiếp diễn": "Quá khứ tiếp diễn dùng was/were + V-ing cho việc đang diễn ra tại một thời điểm quá khứ.",
    "Tương lai tiếp diễn": "Tương lai tiếp diễn dùng will be + V-ing cho việc sẽ đang diễn ra.",
    "Quá khứ hoàn thành": "Quá khứ hoàn thành dùng had + V3/ed cho việc xảy ra trước một mốc quá khứ.",
    "Hiện tại hoàn thành tiếp diễn": "Thì này dùng have/has been + V-ing để nhấn mạnh quá trình kéo dài đến hiện tại.",
    "Quá khứ hoàn thành tiếp diễn": "Thì này dùng had been + V-ing để nhấn mạnh quá trình kéo dài trước một mốc quá khứ.",
    "Tương lai hoàn thành": "Tương lai hoàn thành dùng will have + V3/ed cho việc sẽ hoàn tất trước một mốc tương lai.",
    "Tương lai hoàn thành tiếp diễn": "Thì này dùng will have been + V-ing để nhấn mạnh quá trình kéo dài đến một mốc tương lai.",
    "Mạo từ": "A/an dùng cho danh từ số ít chưa xác định; the dùng khi người nghe đã biết đối tượng.",
    "Đại từ": "Đại từ thay thế danh từ: he cho nam, she cho nữ, it cho vật/số ít, they cho số nhiều.",
    "Giới từ": "Giới từ chỉ vị trí/thời gian như in, on, under, next to cần đi đúng với danh từ phía sau.",
    "Từ để hỏi": "What hỏi cái gì, where hỏi ở đâu, when hỏi khi nào, who hỏi ai, how hỏi cách thức.",
    "So sánh": "Tính từ ngắn thường thêm -er/-est; tính từ dài thường dùng more/most.",
    "Động từ khuyết thiếu": "Sau can/should/must/may/cannot luôn dùng động từ nguyên mẫu.",
    "Bị động": "Câu bị động có dạng be + V3/ed, nhấn mạnh người/vật nhận hành động.",
    "Câu điều kiện": "If hiện tại thường đi với will; if quá khứ giả định thường đi với would.",
  };

  return `${topicTips[topic] || "Hãy chú ý cấu trúc chính của câu."} Đáp án đúng là "${answer}".`;
}

async function checkGrammar(text) {
  const sentence = text.trim();
  if (!sentence) {
    elements.grammarResult.textContent = "Hãy nhập một câu tiếng Anh để kiểm tra.";
    return;
  }

  elements.grammarResult.textContent = "Đang kiểm tra câu bằng LanguageTool...";

  try {
    const params = new URLSearchParams({
      text: sentence,
      language: "en-US",
    });

    const response = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (!response.ok) throw new Error("Grammar request failed");

    const data = await response.json();
    renderGrammarMatches(data.matches || []);
  } catch (error) {
    elements.grammarResult.textContent =
      "Chưa gọi được API kiểm tra ngữ pháp. Bạn vẫn có thể học công thức và làm bài tập bên cạnh.";
  }
}

function renderGrammarMatches(matches) {
  elements.grammarResult.innerHTML = "";

  if (!matches.length) {
    elements.grammarResult.textContent = "Câu này chưa thấy lỗi rõ ràng. Tốt lắm.";
    return;
  }

  matches.slice(0, 3).forEach((match) => {
    const item = document.createElement("div");
    item.className = "grammar-issue";

    const suggestion = match.replacements?.[0]?.value
      ? `Gợi ý: ${match.replacements[0].value}`
      : "Chưa có gợi ý thay thế.";

    const title = document.createElement("strong");
    title.textContent = match.message;

    const detail = document.createElement("span");
    detail.textContent = suggestion;

    item.append(title, detail);
    elements.grammarResult.appendChild(item);
  });
}

function buildGenericFallback(word) {
  return {
    word,
    phonetic: "",
    audio: "",
    translation: "đang cập nhật bản dịch",
    definitions: [`A word you can save and review: ${word}.`],
    examples: getLocalExamples(word),
    related: ["practice", "study", "speak", "write", "listen"],
  };
}

function normalizeAudioUrl(url) {
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
}

function speakText(text, cancelBeforeSpeak = true) {
  if (!("speechSynthesis" in window)) {
    setStatus("Trình duyệt này chưa hỗ trợ đọc câu bằng Web Speech.");
    return;
  }

  if (cancelBeforeSpeak) {
    speechSynthesis.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.voice = getPreferredEnglishVoice();
  utterance.rate = Number(elements.speechSpeed?.value || 0.86);
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

function loadEnglishVoices() {
  englishVoices = speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang?.toLowerCase().startsWith("en"));
  renderVoiceOptions();
}

function getPreferredEnglishVoice() {
  if (!englishVoices.length) {
    loadEnglishVoices();
  }

  const selectedVoiceName = elements.speechVoice?.value;
  if (selectedVoiceName && selectedVoiceName !== "auto") {
    return englishVoices.find((voice) => voice.name === selectedVoiceName) || null;
  }

  return (
    englishVoices.find((voice) => /natural|online|neural|aria|jenny|guy/i.test(voice.name)) ||
    englishVoices.find((voice) => voice.lang === "en-US") ||
    englishVoices.find((voice) => voice.lang === "en-GB") ||
    englishVoices[0] ||
    null
  );
}

function renderVoiceOptions() {
  if (!elements.speechVoice) return;

  const currentValue = elements.speechVoice.value;
  elements.speechVoice.innerHTML = "";

  const autoOption = document.createElement("option");
  autoOption.value = "auto";
  autoOption.textContent = "Tự chọn giọng tốt nhất";
  elements.speechVoice.appendChild(autoOption);

  englishVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    elements.speechVoice.appendChild(option);
  });

  if ([...elements.speechVoice.options].some((option) => option.value === currentValue)) {
    elements.speechVoice.value = currentValue;
  }
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function setStatus(message) {
  elements.status.textContent = message;
}

const starterWords = randomStarterWords;
const starterWord = starterWords[Math.floor(Math.random() * starterWords.length)];
elements.input.value = starterWord;
lookupWord(starterWord);
renderDialogueLesson("greeting");
renderGrammarLesson("present-simple");
renderOtherGrammarLesson("articles");
renderRandomMiniExercise();
