import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import Form from './components/Form';
import Task from './components/Task';

const App = () => {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState('');

  const fetchAllTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/get-todo');
      setTodo(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Task
  const saveTask = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/save-todo', {
        text,
      });
      console.log(data);
      setText('');
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async () => {
    try {
      const { data } = await axios.patch('http://localhost:5000/update-todo', {
        id: isUpdating,
        text,
      });
      console.log(data);
      setText('');
      setUpdating('');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (_id) => {
    try {
      const { data } = await axios.delete('http://localhost:5000/delete-todo', {
        data: { _id },
      });
      console.log(data);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const addUpdate = () => {
    if (!isUpdating) {
      saveTask();
    }
    if (isUpdating) {
      updateTask();
    }
  };

  const updateTodo = (_id, text) => {
    setUpdating(_id);
    setText(text);
  };

  return (
    <div className='bg-slate-300 min-h-screen '>
      <nav className='w-full bg-yellow-400 py-4 '>
        <h1 className='text-center text-2xl font-bold'>TASK MANAGER</h1>
      </nav>
      <div className='flex flex-col w-full m pt-4 pb-24 pl-4 pr-4 items-center justify-center'>
        <div className='max-w-2xl'>
          <form className='flex flex-col bg-white rounded-md py-4 px-2 justify-center shadow-lg'>
            <h3 className='text-xl mt-2 text-center font-semibold text-gray-600 break-normal'>
              Hi! Welcome to task manager web app.
            </h3>
            <div className='mt-6 flex space-x-4 m-10 justify-center'>
              <input
                placeholder='write a task'
                className='bg-gray-100 rounded-md py-2 px-4 border-2 outline-none'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className='bg-yellow-400 px-4 rounded-md font-semibold'
                onClick={addUpdate}
              >
                {/* {isUpdating ? 'add' : 'Update'} */}
                Add
              </button>
            </div>
          </form>

          <div>
            {todo.map((item) => (
              <Task
                key={item._id}
                text={item.text}
                remove={() => {
                  deleteTask(item._id);
                }}
                update={() => {
                  updateTodo(item._id, item.text);
                }}
              />
            ))}
          </div>
        </div>
        <p className='fixed bottom-8 right-10 bg-yellow-400 py-2 px-4 rounded-full text-lg font-bold'>
          RJA
        </p>
      </div>
    </div>
  );
};

export default App;
