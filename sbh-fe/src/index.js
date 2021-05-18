import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux'; 
import reducer from './reducer'; 
// import * as serviceWorker from "./serviceWorker";
import { CanvasProvider } from "./modules/Paint/CanvasContext";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <CanvasProvider>
      <App />
    </CanvasProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// serviceWorker.unregister();