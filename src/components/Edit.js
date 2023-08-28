import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../features/todo/todoSlice';
import { useNavigate, useParams } from 'react-router-dom'; // Import the useParams hook
import './Edit.css';
import Header from './Header';


function Edit() {
  const { id } = useParams(); // Retrieve the todo ID from the URL
  const todos = useSelector((state) => state?.todo?.todo);
  const navigate=useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    // Convert todos object to an array
    const todosArray = Object.values(todos);
  
    // Find the todo with the matching prodId
    const todo = todosArray.find((todo) => todo._id === id);
  
    // Set the state values with todo data
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todos, id]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editTodo({ prodId: id, todoData: { title, description } }));
    navigate("/");
    // You can close the edit form here or handle it in the parent component
  };

  return (
    <>
    <Header/>
    <div className="edit-form">
      <h3>Edit Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
    </>

  );
}

export default Edit;
