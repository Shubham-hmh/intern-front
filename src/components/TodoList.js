import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, getAllTodos } from "../features/todo/todoSlice";
import { Link ,NavLink } from 'react-router-dom'; // Import the Link component
import '../App.css';
import "./TodoList.css";
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state?.todo?.todo);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const [draggedTask, setDraggedTask] = useState(null);

  const categorizedTodos = {
    'To Do': [],
    'Doing': [],
    'Done': []
  };

  for (const todoId in todos) {
    const todo = todos[todoId];
    if (todo && todo?.status && categorizedTodos[todo?.status]) {
      categorizedTodos[todo?.status].push(todo);
    }
  }

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e, status) => {
    e.preventDefault();
  };

  const handleDrop = async (e, status) => {
    e.preventDefault();
    if (draggedTask) {
      if (status && categorizedTodos[status] && draggedTask.status !== status) {
        await dispatch(editTodo({
          prodId: draggedTask._id,
          todoData: { status }
        }));
        // Reload the page after deleting the task
        window.location.reload();
      }
      setDraggedTask(null);
    }
  };



  const handleDelete = async (taskId) => {
    // Dispatch an action to delete the task
    await dispatch(deleteTodo(taskId));

    // Reload the page after deleting the task
    window.location.reload();
  };
  const renderTodos = (status) => {
    return categorizedTodos[status]?.map((todo) => (
      <div
        className="todo-item"
        key={todo._id}
        draggable
        onDragStart={(e) => handleDragStart(e, todo)}
        onDragOver={(e) => handleDragOver(e, status)}
        onDrop={(e) => handleDrop(e, status)}
      >
        <h4 className="todo-title"><b style={{color:"#131921"}}>Title :</b> {todo.title}</h4>
        <p className="todo-description"><b style={{color:"#131921"}}>Description :</b>{todo.description}</p>
       

       <div className="d-flex justify-content-between">
       <NavLink to={`edit/${todo?._id}`}><button className="btn btn-primary"><CreateIcon className='icon' /></button></NavLink>
        <button className="btn btn-danger" onClick={() => handleDelete(todo?._id)}><DeleteOutlineIcon className='icon' /></button>
       </div>
      </div>
    ));

  };

  return (
    <>
      <div className="todo-list">
        <div className="section">
          <h2 className="section-title">To Do</h2>
          <div className="todos-container">{renderTodos('To Do')}</div>
        </div>

        <div className="section">
          <h2 className="section-title">Doing</h2>
          <div className="todos-container">{renderTodos('Doing')}</div>
        </div>

        <div className="section">
          <h2 className="section-title">Done</h2>
          <div className="todos-container">{renderTodos('Done')}</div>
        </div>
      </div>

    </>
  );
}

export default TodoList;

