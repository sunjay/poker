class Card {
  static SUITS = {
    SPADES: "spades",
    HEARTS: "hearts",
    DIAMONDS: "diamonds",
    CLUBS: "clubs",
  };

  constructor({rank, suit}) {
    this.rank = rank;
    this.suit = suit;
  }

  toString() {
  }
}

Card.CARDS = [];

for (let rank = 2; rank <= 14; rank++) {
  for (let suit_key of Card.SUITS) {
    const suit = Card.SUITS[suit_key];
  }
}

module.exports = Card;

