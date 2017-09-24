import React from "react";


export default class Calculator extends React.Component {
    constructor(props) {
     super(props);
    }

    render() {
     const { value, btns, addElem, clear, equal } = this.props;
       return (
        <div className="App">
           <div className="value-container">
           <input type ="text" value ={value}/>
           </div>
           <div className="buttons-container">
            {btns.map((item,key) =>{
            if(item == "C"){
              return(
                <button onClick={ clear.bind(this) } key={key}>{item}</button>
              )
            } else if(item == "="){
              return(
                <button onClick={ equal.bind(this, value) } key={key}>{item}</button>
              )
            } else {
              return(
                <button onClick={ addElem.bind(this, item) } key={key}>{item}</button>
              )
            }
            })}
            </div>
         </div>
      )}

    }

