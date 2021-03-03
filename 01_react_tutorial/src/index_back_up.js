import React from 'react';
import ReactDOM from 'react-dom';
//import Car8 from './../public/App'; 

// Basic 
const myElement1 = <h1>Hello React!</h1>;
ReactDOM.render(myElement1, document.getElementById('root'));


// React Render HTML

ReactDOM.render(<h2>React Render HTML</h2>, document.getElementById('placeRenderHTML0'));


let text1 = <h2>Let's start react rendering HTML</h2>
let placeRenderHTML1 = document.getElementById('placeRenderHTML1')
ReactDOM.render(text1, placeRenderHTML1 );

const myElement2 = (
  <table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table> 
);
ReactDOM.render(myElement2, document.getElementById('placeRenderHTML2'));

ReactDOM.render(<p>Hallo Sandy</p>, document.getElementById('sandy')); 

/*=======================================================================*/

/* React JSX
============                                                             */
const myElement3 = <h2>I use JSX !</h2>;
ReactDOM.render(myElement3, document.getElementById('place_JSX1'));

const myElement4= React.createElement( 'h2', {}, 'I do not use JSX');
ReactDOM.render(myElement4, document.getElementById('place_JSX2'));

const firstCalcul  =  <h3>The sum of  5 + 5 = {5 + 5}</h3>;
ReactDOM.render(firstCalcul, document.getElementById("place_calcul1"));

/*------------------------------------------------------------------------*/
const fruits = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
ReactDOM.render(fruits, document.getElementById('place_fruits'));


/*-----------------------------------------------------------------------*/

const parentElement = (
  <div>
    <h2>I am a header !</h2>
    <h2>I am a header too !</h2>
  </div>
)
ReactDOM.render(parentElement, document.getElementById("place_parent"))


/*-----------------------------------------------------------------------*/

let inputField = <input type="text"/>;
ReactDOM.render(inputField, document.getElementById('place_input'));

/*========================================================================*/

/* React Components
====================                                                      */

 // Class component


  class Car extends React.Component {
    render() {
      return <h2> My name is Car, <br/> I'm a red car</h2>;
    }
  }

  ReactDOM.render(<Car />, document.getElementById('place_Car'));

  // Function component

  function Car2() {
    return <h2> My name is Violet, <br/> I 'm a violet car </h2>
  }

  ReactDOM.render( <Car2 />, document.getElementById('place_Car2'));


  // Component Constructor


   class  Car3 extends React.Component {
     constructor() {
       super();
       this.state = {color: "Green"};
     }

     render() {
       return <h2>I am a  super Car !</h2>;
     }

   }

   ReactDOM.render(< Car3 />, document.getElementById('place_Car3'));

/*-----------------------------------------------------------------------*/

   class  Car4 extends React.Component {
     constructor() {
       super();
       this.state = {color: "Orange"};
     }

     render() {
       return <h2>I am a {this.state.color} super Car !</h2>;
     }
   }

   ReactDOM.render(<Car4 />, document.getElementById('place_Car4'));

 /*------------------------------------------------------------------------*/

  //  Props


  class Car5 extends React.Component {
    constructor() {
      super();
      this.state = {color: "Yellow"};
    }

    render() {
      return <h2>I am a {this.props.color} Car !</h2>;
    }
  }

  ReactDOM.render(<Car5 color="Magenta"/>, document.getElementById('place_Car5'));

/*----------------------------------------------------------------------------*/

  class Car6 extends React.Component {
    render() {
      return <h2>I am a {this.props.color} Car !</h2>;
    }
  }

  ReactDOM.render(<Car6 color="Magenta"/>, document.getElementById('place_Car6'));

  /*-----------------------------------------------------------------------*/
  
  // Component inside component



  class Car7 extends React.Component {

    render() {
      return <h2> a Porsche car </h2>
    }
  }

  class Garage extends React.Component {
    render() {
      return(
        <div>
          <h2>Who lives in this Garage ?</h2>
          <Car7 />
        </div>
      );
    }
  }

  ReactDOM.render(<Garage />, document.getElementById('place_garage'));

  /*------------------------------------------------------------------------*/

  // Component in file 


  //  ReactDOM.render(<Car8 />, document.getElementById('place_Car8'));
