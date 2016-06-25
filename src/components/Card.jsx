const React = require('react');

const Card = ({number, suit}) => (
  <div style={{
    display: 'inline-block',
    width: 100,
    height: 150,
    margin: 5,
    backgroundImage: `url("static/cards/${number}_of_${suit}.svg")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }} />
);

Card.CARDS = {
  CLUBS_A: (props = {}) => <Card number='ace' suit='clubs' {...props} />,
  DIAMONDS_A: (props = {}) => <Card number='ace' suit='diamonds' {...props} />,
  HEARTS_A: (props = {}) => <Card number='ace' suit='hearts' {...props} />,
  SPADES_A: (props = {}) => <Card number='ace' suit='spades' {...props} />,

  CLUBS_2: (props = {}) => <Card number='2' suit='clubs' {...props} />,
  DIAMONDS_2: (props = {}) => <Card number='2' suit='diamonds' {...props} />,
  HEARTS_2: (props = {}) => <Card number='2' suit='hearts' {...props} />,
  SPADES_2: (props = {}) => <Card number='2' suit='spades' {...props} />,

  CLUBS_3: (props = {}) => <Card number='3' suit='clubs' {...props} />,
  DIAMONDS_3: (props = {}) => <Card number='3' suit='diamonds' {...props} />,
  HEARTS_3: (props = {}) => <Card number='3' suit='hearts' {...props} />,
  SPADES_3: (props = {}) => <Card number='3' suit='spades' {...props} />,

  CLUBS_4: (props = {}) => <Card number='4' suit='clubs' {...props} />,
  DIAMONDS_4: (props = {}) => <Card number='4' suit='diamonds' {...props} />,
  HEARTS_4: (props = {}) => <Card number='4' suit='hearts' {...props} />,
  SPADES_4: (props = {}) => <Card number='4' suit='spades' {...props} />,

  CLUBS_5: (props = {}) => <Card number='5' suit='clubs' {...props} />,
  DIAMONDS_5: (props = {}) => <Card number='5' suit='diamonds' {...props} />,
  HEARTS_5: (props = {}) => <Card number='5' suit='hearts' {...props} />,
  SPADES_5: (props = {}) => <Card number='5' suit='spades' {...props} />,

  CLUBS_6: (props = {}) => <Card number='6' suit='clubs' {...props} />,
  DIAMONDS_6: (props = {}) => <Card number='6' suit='diamonds' {...props} />,
  HEARTS_6: (props = {}) => <Card number='6' suit='hearts' {...props} />,
  SPADES_6: (props = {}) => <Card number='6' suit='spades' {...props} />,

  CLUBS_7: (props = {}) => <Card number='7' suit='clubs' {...props} />,
  DIAMONDS_7: (props = {}) => <Card number='7' suit='diamonds' {...props} />,
  HEARTS_7: (props = {}) => <Card number='7' suit='hearts' {...props} />,
  SPADES_7: (props = {}) => <Card number='7' suit='spades' {...props} />,

  CLUBS_8: (props = {}) => <Card number='8' suit='clubs' {...props} />,
  DIAMONDS_8: (props = {}) => <Card number='8' suit='diamonds' {...props} />,
  HEARTS_8: (props = {}) => <Card number='8' suit='hearts' {...props} />,
  SPADES_8: (props = {}) => <Card number='8' suit='spades' {...props} />,

  CLUBS_9: (props = {}) => <Card number='9' suit='clubs' {...props} />,
  DIAMONDS_9: (props = {}) => <Card number='9' suit='diamonds' {...props} />,
  HEARTS_9: (props = {}) => <Card number='9' suit='hearts' {...props} />,
  SPADES_9: (props = {}) => <Card number='9' suit='spades' {...props} />,

  CLUBS_10: (props = {}) => <Card number='10' suit='clubs' {...props} />,
  DIAMONDs_10: (props = {}) => <Card number='10' suit='diamonds' {...props} />,
  HEARTS_10: (props = {}) => <Card number='10' suit='hearts' {...props} />,
  SPADES_10: (props = {}) => <Card number='10' suit='spades' {...props} />,

  CLUBS_J: (props = {}) => <Card number='jack' suit='clubs' {...props} />,
  DIAMONDS_J: (props = {}) => <Card number='jack' suit='diamonds' {...props} />,
  HEARTS_J: (props = {}) => <Card number='jack' suit='hearts' {...props} />,
  SPADES_J: (props = {}) => <Card number='jack' suit='spades' {...props} />,

  CLUBS_Q: (props = {}) => <Card number='queen' suit='clubs' {...props} />,
  DIAMONDS_Q: (props = {}) => <Card number='queen' suit='diamonds' {...props} />,
  HEARTS_Q: (props = {}) => <Card number='queen' suit='hearts' {...props} />,
  SPADES_Q: (props = {}) => <Card number='queen' suit='spades' {...props} />,

  CLUBS_K: (props = {}) => <Card number='king' suit='clubs' {...props} />,
  DIAMONDS_K: (props = {}) => <Card number='king' suit='diamonds' {...props} />,
  HEARTS_K: (props = {}) => <Card number='king' suit='hearts' {...props} />,
  SPADES_K: (props = {}) => <Card number='king' suit='spades' {...props} />,
};

module.exports = Card;

