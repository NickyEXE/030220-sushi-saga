import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware} from 'redux'
import { reducer } from './redux/reducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
