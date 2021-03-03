/*-------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
10 07 2020
React Tutorial : https://www.w3schools.com/react/

Object: React Class Component
=============================
---------------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import SuperCar from '../../react-tests-w3schools-com/src/superCar';



/* Class component
===================*/

// class Car extends React.Component {

//   render() {
//     return <h2> I am a car!</h2>;
//   }
// }

// const myElement =  < Car/>;
// ReactDOM.render( myElement, document.getElementById('root'));

// ----------------------------------------------------------------


/* Function component
=====================*/
// function Car() {

//     return <h2> I am a car!</h2>;
  
// }

// ReactDOM.render( <Car/>, document.getElementById('root'));

//----------------------------------------------------------------


/* Constructor component
=========================*/

// class Car extends React.Component {
//   constructor () {
//     super();
//     this.state = {
//       color: "green",
//       register: 234+'T'+53,
//       oldColor: ["red", "black"]
//     }
  
//   }

//   render() {
//     return (
//       <div>
//         <h2>I am a truck</h2>
//         <h2>I am a {this.state.color} truck</h2>
//         <h2>I have {this.state.register} as plate number</h2>
//         <h2>I was painted in {this.state.oldColor[1]} </h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render( < Car/>, document.getElementById('root'));

//---------------------------------------------------------------------


/* Props
=========*/

// class Car extends React.Component {

//   render() {
//     return (
//       <div>
//          <h2>I am a truck</h2>
//          <h2> I am a {this.props.brand} !</h2>
//          <h2>I am a {this.props.color} truck</h2>
//          <h2>I have {this.props.register} as plate number</h2>
//          <h2>I was painted in {this.props.oldColor} </h2>
//        </div>
//       );
//   }
// }

// // const myElement =  <Car brand = "BMW" />;
// ReactDOM.render( 
//   <Car brand = "BMW" 
//        color= "green"
//        register='243546'
//        oldColor= "Red" /> , document.getElementById('root'));


/* Component in component (with props)
====================================== */

// class Car extends React.Component {

//   render ()  {
//   return <h2>It's my {this.props.brand} {this.props.color} car  </h2>;
//   }
// }

// class Garage extends React.Component {

//   render () {
//     return(
//       <div>
//         <h2> What is in the Garage ? </h2>
//         < Car brand='BMW' color='Blue' />
//       </div>
//     );
//   }
  
// }

// ReactDOM.render(< Garage /> , <SuperCar/>, document.getElementById('root'));

//------------------------------------------------------------------------------


/* Components from separate file
=================================
*/
class Car extends React.Component {

  render ()  {
    return <h2>It's my {this.props.brand} {this.props.color} car  </h2>;
  }
}

class Garage extends React.Component {

  render () {
    return(
      <div>
        <h2> What is in the Garage ? </h2>
        < Car brand='BMW' color='' />
        < SuperCar brand="Porsche" color='Red' />
      </div>
    );
  }
}

ReactDOM.render(<Garage/>, document.getElementById('root'));