// Define input-output pairs with multiple responses
const responses = [
  {
    input: ["hi", "hello", "welcome", "what's up", "hey"],
    output: ["Hello, nice to meet you!", "Hi there!", "Welcome!", "What's up?", "Good to see you!", "Hi there, how can I assist you today?"]
  },
  {
    input: ["good morning"],
    output: ["Good morning, nice to meet you!", "Good morning, do you need any help?"]
  },
  {
    input: ["good afternoon"],
    output: ["Good afternoon, nice to meet you!", "Good afternoon, how is your day?", "Good afternoon, do you need any help?"]
  },
  {
    input: ["good evening"],
    output: ["Good evening, nice to meet you!", "Good evening, how was your day?", "Good evening, do you need any help?"]
  },
  {
    input: ["how are you?", "how do you feel?", "How is your day?", "Are you good?"],
    output: ["I'm doing fine, thank you for asking.", "I'm great, how about you?", "Doing well, thanks!", "I feel great!"]
  },
  {
    input: ["bye", "goodbye", "good bye", "Take care!", "I'm leaving", "Catch you later", "Gotta run", "Have a Good day", "see ya", "See you later", "I have to go", "Talk to you soon"],
    output: ["Goodbye! Have a great day!", "It was a pleasure talking to you. See you soon!", "Take care, and talk to you later!", "Sad to see you go :("]
  },
  {
    input: ["what is your name?", "who are you?", "tell me about yourself", "What should I call you?", "Do you have a name?", "Who am I talking to?"],
    output: ["My name is Chatty, I'm a smart chatbot.", "I'm Chatty, your friendly bot!", "You can call me Chatty.", "I'm Chatty, at your service."]
  },
  {
    input: ["How old are you?", "What is your age?", "Can you tell me your age?", "What's your age?", "Your age?"],
    output: ["Age is just a number, but I've been around for quite a while!", "I'm as old as the wisdom I possess!"]
  },
  {
    input: ["what can you do?", "how can you assist me?", "can you help me?", "Can you assist me?", "I need help"],
    output: ["I can chat with you and answer some simple questions.", "I can help you with simple queries!", "I'm here to talk to you.", "I'm here to help! What do you need?", "Sure, I'm happy to assist you. What can I do for you?"]
  },
  {
    input: ["Thank you", "Thanks a lot", "I appreciate it", "Thanks", "Thanks for the help", "Thank you so much"],
    output: ["You're welcome!", "Happy to help!", "Anytime! Let me know if you need anything else."]
  },
  {
    input: ["Where are you located?", "Where is your country?", "Where is your place?", "Can you tell me your location?", "Where do you operate from?", "Where do you live?", "Where are you from?"],
    output: ["I'm a virtual assistant, available anywhere you need me.", "I exist in the digital world, here to assist you from anywhere!", "I am an virtual AI chatbot, and I do not have an actual place in the Earth."]
  },
  {
    input: ["Are your always available?", "When are you available?", "Are you available 24/7?", "Can I reach you anytime?"],
    output: ["I'm available 24/7 to assist you with your needs!", "You can reach me anytime, I'm always here to help."]
  },
  {
    input: ["tell me a joke", "Can you make me laugh?", "Do you know any jokes?", "I need a laugh", "Make me laugh"],
    output: ["Why did the chicken go to the seance? To get to the other side.", "What do you call fake spaghetti? An impasta!", "Why don't skeletons fight each other? They don't have the guts.", "Why don't scientists trust atoms? Because they make up everything!", "Why was the math book sad? It had too many problems.", "What do you get when you cross a snowman and a vampire? Frostbite!"]
  },
  {
    input: ["ok", "awesome!", "got it", "good"],
    output: ["Happy to hear that", "OK!", "Fantastic!"]
  },
  {
    input: ["What is programming?", "What is coding?", "Tell me about programming", "Tell me about coding", "What is software development?"],
    output: ["Programming, coding or software development, means writing computer code to automate tasks."]
  },
  {
    input: ["What is flask?", "What is coding?", "Do you know about Flask?", "Can you tell me something about Flask?", "Explain Flask to me!"],
    output: ["Flask is a Python web development framework, which is very simple and minimalistic."]
  },
  {
    input: ["Who is Mohamed Barakat?", "Who is he?", "What do you know about Mohamed Barakat?", "Tell me about your creator", "Tell me about Mohamed Barakat"],
    output: ["Mohamed Barakat is my inventor; he is an Egyptian high schooler", "Mohamed Barakat is a high school student, talented in Programming, Cybersecurity, Robotic, AI, and Machine Learning"]
  },
  {
    input: ["Who invented you?", "Who created you?", "Who made you?", "Who is your creator?", "Who built you?"],
    output: ["I was created by Mohamed Barakat, a talented student and AI enthusiast!", "Mohamed Barakat is the genius student behind my creation.", "I owe my existence to the innovator Mohamed Barakat!"]
  },
  {
    input: ["How can I contact you?", "Can I get your contact information?", "How do I reach Mohamed Barakat?", "Is there a phone number I can call?"],
    output: ["You can reach my creator via email at mohammed.barakatts@gmail.com.", "Please contact my inventor at 773-456-7890."]
  },
  {
    input: ["What's the weather like?", "Can you tell me the weather?", "Is it raining?", "What's the weather forecast?"],
    output: ["I'm not equipped to give real-time weather updates, but you can check your local weather app for the latest information."]
  },
];

// Function to calculate string similarity
function stringSimilarity(str1, str2) {
  const words1 = str1.toLowerCase().split(" ");
  const words2 = str2.toLowerCase().split(" ");
  
  const commonWords = words1.filter(word => words2.includes(word));
  
  return commonWords.length / Math.max(words1.length, words2.length);
}

// Function to find the best matching response
function getResponse(input) {
  let bestMatch = { output: ["Sorry, I don't understand that. Please try something else."], similarity: 0 };
  
  for (let response of responses) {
    for (let question of response.input) {
      const similarity = stringSimilarity(input, question);
      if (similarity > bestMatch.similarity) {
        bestMatch = { output: response.output, similarity };
      }
    }
  }
  
  return bestMatch.output[Math.floor(Math.random() * bestMatch.output.length)];
}

// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    let output = getResponse(input);
    setTimeout(function() {
      displayBotMessage(output);
    }, 1000);
    document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    sendMessage();
  }
});