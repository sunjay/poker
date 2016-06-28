const React = require('react');

const Card = require('./Card');

const App = () => (
  <div>
    {Object.keys(Card.CARDS).map((card, i) => (
      Card.CARDS[card]({key: i, size: 'sm'})
    ))}
  </div>
);

module.exports = App;

