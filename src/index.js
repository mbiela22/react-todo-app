import React from 'react';
import {render} from 'react-dom';
import './index.css';
import TodoApp from './containers/TodoApp';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store/store";

render(
    <React.StrictMode>
        <Provider store={store}>
            <TodoApp/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
