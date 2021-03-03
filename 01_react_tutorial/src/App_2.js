//import logo from './logo.svg';

import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
// import Header from './my-react-components/header';
import ReactHome from './my-react-components/react_01_home'
import ReactIntroduction from './my-react-components/react_02_introduction'
import ReactGettingStarted from './my-react-components/react_03_getting_started'
import ReactES6 from './my-react-components/react_04_ES6'
import ReactRender from './my-react-components/react_05_render'


class App extends React.Component {
  render() {
    return (
      <div>
         <ReactHome/>
         <ReactIntroduction/>
         <ReactGettingStarted/>
         <ReactES6/>
         <ReactRender/>
         {/* <Header/> */}
         
      </div>
    );
  }
}
ReactDOM.render (<App/>, document.getElementById('root'));



// ReactDOM.render (<Tuto5/>, document.getElementById('root'));






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;