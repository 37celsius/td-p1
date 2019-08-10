// Create array of object
const quotes = [
  { 
    quote: "If there are self-made purgatories, then we all have to live in them.",
    source: "Spock",
    citation: "Star Trek",
    year: "",
    category: ["Fantasy", "Space", "TV"],
  },
  { 
    quote: "There's no such thing as the unknown—only things temporarily hidden, temporarily not understood.",
    source: "James T. Kirk",
    citation: "Star Trek",
    year: "",
    category: ["Fantasy", "Space", "Exploration", "TV"],
  },
  { 
    quote: "The Needs of the Many Outweigh the Needs of the Few",
    source: "Spock",
    citation: "Star Trek",
    year: "",
    category: ["Fantasy", "Space", "Sacrifice", "TV"],
  },
  { 
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss",
    citation: "",
    year: "",
    category: ["Children", "Happy"],
  },
  { 
    quote: "Anywhere can be paradise as long as you have the will to live.",
    source: "Yui Ikari",
    citation: "Neon Genesis Evangelion",
    year: "",
    category: ["Anime", "Evangelion", "TV"],
  },
  { 
    quote: "Humanity is probably the only creature capable of hating its own kind.",
    source: "Gendou Ikari",
    citation: "The End of Evangelion",
    year: "1997",
    category: ["Anime", "Evangelion", "Movie", "PTSD"],
  },
]

// Create or Clone temporary array to remove an object
let tempQuotes = [...quotes];

const getRandomQuote = () => {
  // Check the Length of the tempQuotes, if it's 0 clone the quotes array
  if (tempQuotes.length === 0) {
    tempQuotes = [...quotes]
  } 

  let ranNum = Math.floor(Math.random() * tempQuotes.length);
  let quote = tempQuotes[ranNum];
  
  // Remove from the clone array
  tempQuotes.splice(ranNum, 1);
  return quote;
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.