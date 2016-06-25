const React = require('react');
const {createStore} = require('redux');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');

const App = require('./components/App');
const reducer = require('./reducers/index');

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

