//Manually generated quotes array
const quotes = [
  { quote: "These pretzels are making me thirsty.", character: "Kramer" },
  { quote: "No soup for you!", character: "Soup Nazi" },
  {
    quote:
      "What is this obsession people have with books, they put them in their houses — like they’re trophies, what do you need it for after you read it?",
    character: "Jerry",
  },
  {
    quote:
      "Can you die from an odor, I mean, like if you were locked in a vomitorium for two weeks, could you actually die from the odor?",
    character: "Elaine",
  },
  {
    quote:
      "Hey, how come people don’t have dip for dinner, why is it only a snack, why can’t it be a meal, you know, I don’t understand stuff like that",
    character: "David Puddy",
  },
  {
    quote:
      "Look, I got a few good years left, if I want a Chip Ahoy, I’m having it.",
    character: "Morty Seinfeld",
  },
  {
    quote:
      "Do you ever get down on your knees and thank God you know me and have access to my dementia?",
    character: "George",
  },
  {
    quote:
      "I’m going to save up every rupee, someday I will get back to America, and when I do, I will exact vengeance on this man, I cannot forget him, he haunts me, he is a very bad man. He is a very, very bad man.",
    character: "Babu Bhatt",
  },
  {
    quote:
      "Sex, that’s meaningless, I can understand that, but dinner, that’s heavy, that’s like an hour.",
    character: "Jerry",
  },
  {
    quote:
      "You dipped the chip, you took a bite and you dipped again, that’s like putting your whole mouth right in the dip, from now on, when you take a chip — just take one dip and end it.",
    character: "Timmy",
  },
  { quote: "It's not a lie if you believe it", character: "George" },
  {
    quote:
      "That’s the bra I gave her, she’s wearing it as a top, the woman is walking around in broad daylight with nothing but a bra on, she’s a menace to society.",
    character: "Elaine",
  },
];

const splitQuote = (quote) => {
  const words = quote.split(" ");
  const thirdLength = Math.ceil(words.length / 3); //Determine the size of one third of each quote

  return {
    beginning: words.slice(0, thirdLength).join(" "),
    middle: words.slice(thirdLength, 2 * thirdLength).join(" "),
    end: words.slice(2 * thirdLength).join(" "),
  };
};

const generateStructuredQuote = () => {
  let structuredQuote = { beginning: "", middle: "", end: "" };

  //Loop to select different quotes for each part
  for (let i = 0; i < 3; i++) {
    //Select 3 random quotes
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const parts = splitQuote(quotes[randomIndex].quote);

    if (i === 0) structuredQuote.beginning = parts.beginning;
    if (i === 1) structuredQuote.middle = parts.middle;
    if (i === 2) structuredQuote.end = parts.end;
  }

  //Combine selected parts into one string
  return `${structuredQuote.beginning} ${structuredQuote.middle} ${structuredQuote.end}`;
};

console.log(generateStructuredQuote());


//For future consideration:
//1. Using a json to create a much bigger quotes array
//2. Finding a free Seinfeld quotes API and using the npm axios package to connect it to my repo
//3. Build in logic to avoid punctuation showing up in the middle of the frankenstein quote
//4. Use Natrual Language Processing (NLP) to generate outputs that sound like an actual sentence - you'll need to identify nouns, verbs, adjectives, etc...
