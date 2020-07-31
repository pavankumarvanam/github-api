// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

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

// export default App;
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CoursesList from './components/CoursesList'
import Posts from './components/Posts'
import PostsTable from './components/PostsTable'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <CoursesList /> */}
        <PostsTable />
        <Posts />
      </div>
    )
  }
}
export default App