// // import React from 'react';
// // import Counter from './components/Counter';
// // import { createStore } from 'redux';
// // import { Provider } from 'react-redux';
// import Timer from './components/Timer';
//  //import './App.css';

// // // Create the Redux store
// // const store = createStore(counterReducer);

// function App() {
//     return (
//         // // Wrap your app with the Provider and pass the store
//         // <Provider store={store}>
//         //     <Counter />
//         // </Provider>
//         <Timer/>
        
//     );
// }
//1st app
// export default App;
// import React from 'react';
// //import './assets/css/App.css';
// import Greeting from './components/Greeting';

// function App() {
//   return (
//     <div className="App">
//       <Greeting/>
//     </div>
//   );
// }

// export default App;
//2nd only app
// import React from 'react';

// const App = () => {
//   const dynamicData = new Date().toString();

//   return (
//     <div>
//       <p>Static Data:</p>
//       <span>Hello, I am static data!</span>
//       <p>Dynamic Data:</p>
//       <span>{dynamicData}</span>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import TodoList from './components/TodoList';


function App() {

  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;

