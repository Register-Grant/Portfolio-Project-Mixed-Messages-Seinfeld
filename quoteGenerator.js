//Manually generated quotes array
const quotes = [
  { quote: "These pretzels are making me thirsty.", character: "Kramer" },
  { quote: "No soup for you!", character: "Soup Nazi" },
  {
    quote:
      "What is this obsession people have with books? They put them in their houses — like they’re trophies. What do you need it for after you read it?",
    character: "Jerry",
  },
  {
    quote:
      "Can you die from an odor? I mean, like if you were locked in a vomitorium for two weeks, could you actually die from the odor?",
    character: "Elaine",
  },
  {
    quote:
      "Hey, how come people don’t have dip for dinner? Why is it only a snack, why can’t it be a meal, you know? I don’t understand stuff like that",
    character: "David Puddy",
  },
  {
    quote:
      "Look, I got a few good years left. If I want a Chip Ahoy, I’m having it.",
    character: "Morty Seinfeld",
  },
  {
    quote:
      "Do you ever get down on your knees and thank God you know me and have access to my dementia?",
    character: "George",
  },
  {
    quote:
      "I’m going to save up every rupee. Someday I will get back to America, and when I do, I will exact vengeance on this man. I cannot forget him. He haunts me. He is a very bad man. He is a very, very bad man.",
    character: "Babu Bhatt",
  },
  {
    quote:
      "Sex, that’s meaningless, I can understand that, but dinner; that’s heavy. That’s like an hour.",
    character: "Jerry",
  },
  {
    quote:
      "You dipped the chip. You took a bite. And you dipped again. That’s like putting your whole mouth right in the dip! From now on, when you take a chip — just take one dip and end it.",
    character: "Timmy",
  },
  { quote: "It's not a lie if you believe it", character: "George" },
  {
    quote:
      "That’s the bra I gave her, she’s wearing it as a top! The woman is walking around in broad daylight with nothing but a bra on. She’s a menace to society.",
    character: "Elaine",
  },
];

const splitQuote = (quoteObject) => {
  //This is a simplistic split logic; might want to consider punctuation etc... for more complex scenarios.
  return quoteObject.quote.split(" ");
};

const generateMixedQuote = () => {
  const selectedQuotes = [];
  for (let i = 0; i < 3; i++) {
    //Select 3 random quotes
    const randomIndex = Math.floor(Math.random() * quotes.length);
    selectedQuotes.push(quotes[randomIndex]);
  }

  const quoteParts = selectedQuotes.map(splitQuote); //Split each selected quote into parts
  let newQuote = "";
  for (let parts of quoteParts) {
    const randomPartIndex = Math.floor(Math.random() * parts.length);
    newQuote += parts[randomPartIndex] + " "; //Combine one random part from each quote
  }

  return newQuote.trim() + "."; //Add a period at the end of each frankenstein quote
};

console.log(generateMixedQuote());

// //Function for generating the random message
// const generateRandomQuote = () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     return `${randomQuote.quote} - ${randomQuote.character}`;
//   }

// //Log the random message to the console
// console.log(generateRandomQuote());

//For future consideration:
//1. Using a json to create a much bigger quotes array
//2. Finding a free Seinfeld quotes API and using the npm axios package to connect it to my repo
//3. Mixing and matching parts of quotes