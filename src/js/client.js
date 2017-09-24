import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from "redux";
import {connect, Provider} from "react-redux";
import reducer from "./components/CalculatorReducer";
import {mapDispatchToProps, mapStateToProps} from "./components/CalculatorActions";

import Calculator from "./components/Calculator";

const store = createStore(reducer);

const Calc = connect(mapStateToProps, mapDispatchToProps)(Calculator);

const app = document.getElementById('root');
ReactDOM.render
(<Provider store={store}>
    <Calc />
 </Provider>, app);
