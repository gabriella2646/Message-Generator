/**
 * Message Generator - Historical Curiosities
 * Generates a random historical curiosity message in Italian or English.
 * The message is composed of at least three different data types.
 */

const messages = [
  {
    id: 1,
    text: {
      en: "The Great Fire of London in 1666 destroyed over 13,000 houses but only 6 people were recorded to have died.",
      it: "Il Grande Incendio di Londra nel 1666 distrusse oltre 13.000 case ma furono registrate solo 6 vittime."
    },
    year: 1666,
    famous: true
  },
  {
    id: 2,
    text: {
      en: "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
      it: "Cleopatra visse più vicina nel tempo allo sbarco sulla Luna che alla costruzione della Grande Piramide di Giza."
    },
    year: -30,
    famous: true
  },
  {
    id: 3,
    text: {
      en: "The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted between 38 and 45 minutes.",
      it: "La guerra più breve della storia fu tra Gran Bretagna e Zanzibar il 27 agosto 1896. Durò tra i 38 e i 45 minuti."
    },
    year: 1896,
    famous: false
  },
  {
    id: 4,
    text: {
      en: "Napoleon was once attacked by a horde of bunnies during a hunting trip.",
      it: "Napoleone fu una volta attaccato da una folla di conigli durante una battuta di caccia."
    },
    year: 1807,
    famous: false
  }
];

// Function to get a random message
function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  // Randomly choose language: 'en' or 'it'
  const lang = Math.random() < 0.5 ? 'en' : 'it';

  // Compose the message with at least three data types: string, number, boolean
  return `#${message.id} (${message.year}) - Famous: ${message.famous}\n${message.text[lang]}`;
}

// Output the random message
console.log(getRandomMessage());
