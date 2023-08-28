import React from 'react'
import Header from '../components/Header';
import AddTask from '../components/AddTask';
import TodoList from '../components/TodoList';

const Home = () => {


  return (
    <>
   <Header/>
   <AddTask/>
   <TodoList/>
    </>
  )
}

export default Home