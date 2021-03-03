

/* constructor() method
========================*/

// class Header extends React.Component {
//   constructor (props) {
//       super(props);
//       this.state = {
//           color : "red",
//           fontSize : "15px",
//           backgroundColor : "rgb(20, 80, 220)"
//       }  
//   }

//   render () {
//       return(
//           <h2>My favorite color is {this.state.color} </h2>
//       );
//   }
// }

// ReactDOM.render(<Header />, document.getElementById('root'));

//------------------------------------------------------------------------


/* getDerivedStateFromProps() method
====================================*/

// class Car extends React.Component {

//   constructor(props) {
//       super(props);
//       this.state = {color: "Red"};
//   }

//   static getDerivedStateFromProps( props, state) {
//       return {color: props.newColor};
//   }

//   render () {
//       return <h1> My favorite car color is { this.state.color }</h1>;
//   }
// }

// ReactDOM.render(< Car newColor="Yellow" />, document.getElementById('root'));

//---------------------------------------------------------------------------


/* render() method
==================*/

// class Header extends React.Component {

//   render() {
//       return <h1> My favorite color is Green </h1>;
//   }
// }

// ReactDOM.render(<Header />, document.getElementById('root'));

//--------------------------------------------------------------------------


/* componentDidMount () method
===============================*/

// class Header extends React.Component {
//   constructor (props) {
//       super(props);
//       this.state = {
//           color: "Red",
//           padding : "20px"
//       }
//   }

//   render() {
//       return <h1> My favorite color is { this.state.color} </h1>;
//   }

//   componentDidMount() {
//     setTimeout( () => { this.setState({color: "Yellow"}) }, 1000 )

//    }
// }

// ReactDOM.render(<Header />, document.getElementById('root'));


/* getDerivedStateFromProps() method
=====================================*/

// class Header extends React.Component {
//   constructor (props) {
//       super(props);
//       this.state = {
//           color: "Red",
//           padding : "20px"
//       }
//   }

//   changeColor = () => {
//     this.setState({color: "Blue"});
//   }

//   static getDerivedStateFromProps(props, state) {
//     return {color: props.otherColor};

//   }

//   render() {
//       return (
//          <div>
//            <h1> My favorite color is { this.state.color} </h1>
//            <button type="button" onClick={ this.changeColor }>
//              Click to change color</button>
//          </div>
//       );
//   }

// }

// ReactDOM.render(<Header otherColor="White" />, document.getElementById('root'));



/* shouldComponentUpdate() method (false)
================================== */

// class Header extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       color: "Red",
//       textAlign: "justify"
//     };
//   }

//   shouldComponentUpdate () {
//     return false;
//   }

//   changeColor = () => {
//     this.setState ( {color: "Blue"});
//   }

//   render () {
//     return (
//       <div>
//         <h2> My favorite color is { this.state.color }</h2>
//         <button type="button" onClick={ this.changeColor } >Click to change</button>
//       </div>
//     );
//   }
// }

//  ReactDOM.render(<Header otherColor="White" />, document.getElementById('root'));


/* shouldComponentUpdate() method (true) (default)
================================================= */

// class Header extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       color: "Red",
//       textAlign: "justify"
//     };
//   }

//   shouldComponentUpdate () {
//     return true;
//   }

//   changeColor = () => {
//     this.setState ( {color: "Blue"});
//   }

//   render () {
//     return (
//       <div>
//         <h2> My favorite color is { this.state.color }</h2>
//         <button type="button" onClick={ this.changeColor } >Click to change</button>
//       </div>
//     );
//   }
// }

//  ReactDOM.render(<Header otherColor="White" />, document.getElementById('root'));


