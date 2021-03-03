import React from 'react';
import ReactDOM from 'react-dom';




/* Class component
===================*/

class SuperCar extends React.Component {

  render() {
  return <h2> I am a {this.props.color} super car {this.props.brand}!</h2>;
  }
}

const myElement =  < SuperCar/>;
ReactDOM.render( myElement, document.getElementById('root'));

// ----------------------------------------------------------------

export default SuperCar;