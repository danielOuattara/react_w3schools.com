/*-------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
10 07 2020
React Tutorial : https://www.w3schools.com/react/

Object: React Props
====================
---------------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';


/* Creating the state Object
=============================*/

// class Car extends React.Component {
//   constructor (props) {
//       super(props)
//       this.state = {
//           brand: "Ford",
//           model: "Mustang",
//           year: 1974
//       }
//   }

//   render() {
//       return(
//           <div>
//             <h2> My car !</h2>
//           </div>
//       );
//   }
// }

// ReactDOM.render( < Car />, document.getElementById('root'));


/*Using the state Object
=========================*/

// class Car2 extends React.Component {

//   constructor(props) {
//       super(props);
//       this.state = {
//           brand: "Ford",
//           model: "Mustang",
//           color: "red" ,
//           year: 1974
//       }
//    }

//   render () {
//       return (
//           <div>
//             <h2> My car is a { this.state.brand} </h2>
//             <p>It is a { this.state.color} {this.state.model }
//               from {this.state.year} </p>
//           </div>
//       );
//   }
// }

// ReactDOM.render( < Car2 />, document.getElementById('root'));


/* changing the state Object
=============================*/


class Car3 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          brand: "Ford",
          model: "Mustang",
          color: "red",
          year: 1974
      }
  }

  changeColor = () => {
      this.setState({color: "green"});
  }

  render () {
      return (
          <div>
            <h2> My car is a { this.state.brand} </h2>

            <p>It is a { this.state.color} {this.state.model } from { this.state.year} </p>

            <button 
                   type="button" 
                   onClick= {this.changeColor}> Click to change color
            </button>
          </div>
      );
  }
}

ReactDOM.render(<Car3 />, document.getElementById('root'));


// ----------------------------------------------------------------------


