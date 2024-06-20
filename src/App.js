import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import Edit from './components/Edit';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { PrivateRoutes } from './utils/PrivateRoutes';



function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<PrivateRoutes><Home/></PrivateRoutes>} />
        <Route path="/edit/:id" element={<PrivateRoutes><Edit/></PrivateRoutes>} /> */}
        <Route exact path="/" element={<Home/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
