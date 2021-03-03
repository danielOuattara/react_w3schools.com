/*-------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
10 07 2020
React Tutorial : https://www.w3schools.com/react/

Object: React Props
====================
---------------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';


/* Basic components
===================*/

// class Airplane extends React.Component {

//   render () {
//     return <h2> This Airplane is a {this.props.brand}</h2>;
//   }
// }

// ReactDOM.render(< Airplane brand="Boeing"/> , document.getElementById('root'));


/* Pass Data (component renders component with props)
====================================================== */

// class Car extends React.Component {

//   render() {
//     return(
//       <div>
//         <h2> It is a {this.props.brand} !</h2>
//         <h2> There is {this.props.numberOfCar} !</h2>
//       </div>
//     );
//   }
// }

// class Garage extends React.Component {
  
//   render() {
//     return (
//       <div>
//         <h2>What is in this {this.props.position} Garage ?</h2>
//         < Car  brand="BMW" numberOfCar={1+2}/>
//       </div>
//     );
//   } 
// }

// ReactDOM.render(<Garage position="underground"/>, document.getElementById('root'));


//----------------------------------------------------------------------


// class Car3 extends React.Component {

//   render() {
//       return (
//           <div>
//              <h2> I possess {this.props.carNumber} car ! </h2>
//           </div>
//       );  
//   }
// }

// class Garage3 extends React.Component {

//   render() {
//       return(
//           <div>
//             < Car3 carNumber = {1 + 1 }/>
//           </div>
//       );
//   }
// }
// ReactDOM.render( <Garage3 />, document.getElementById('root'));


//------------------------------------------------------------------------


// class Car4 extends React.Component {

//   render() {
//       return (
//           <div>
//              <h2> I lived in {this.props.where} during my young age </h2>
//           </div>
//       );  
//   }
// }

// class Garage4 extends React.Component {

//   render() {
//       let livingPlace = ["Tokyo"," Berlin"," Houston"];
//       return(
//           <div>
//             < Car4 where = {livingPlace} />
//             < Car4 where = {livingPlace[1]} />
//           </div>
//       );
//   }
// }
// ReactDOM.render( <Garage4 />, document.getElementById('root'));

//----------------------------------------------------------------------------

// class Car5 extends React.Component {

//   render() {
//       return (
//           <div>
//              <h2> I have a {this.props.brand}! </h2>
//              <h2> I possess {this.props.carNumber} car ! </h2>
//              <h2> I live in {this.props.where} city </h2>
//           </div>
//       );  
//   }
// }

// class Garage5 extends React.Component {

//   render() {
//       let livingPlace = "Los Angeles";

//       return(
//           <div>
//             <h2> Who lives in my Garage ? </h2>
//             < Car5 brand="Ford" carNumber = {1 + 1 } where = {livingPlace} />
//           </div>
//       );
//   }
// }
// ReactDOM.render( <Garage5 />, document.getElementById('root'));

// Example: Create an object named "carinfo" and send it to the Car component:


// class Car6 extends React.Component {

//   render() {
//       return (
//         <h2> It is a { this.props.brand.name } { this.props.brand.model }!</h2>
//       );
//   }
// }

// class Garage6 extends React.Component {

//  render() {
//      let carInfo = {
//          name: "Ford",
//          model: "Mustang",
//          year:  1968
//      }

//      return (
//        <div>
//          <h2> What is in this garage ?</h2>
//          < Car6 brand={carInfo} />
//        </div>
//      );  
//   }
// }

// ReactDOM.render(< Garage6 /> , document.getElementById('root'));



/* Props in the Constructor
============================*/

class Airplane extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          color: "red",
          brand: "Boeing",
          year: 2018
      }
  }

  render() {
      return (
        <div>
          <h2> I am a airplane {this.props.color}!</h2>
          <h2> I am a airplane {this.state.color}!</h2>
          <h2> I am a airplane !</h2>
        </div>
      
      );
  }
}

ReactDOM.render(<Airplane model="Mustang" />, document.getElementById('root'));
