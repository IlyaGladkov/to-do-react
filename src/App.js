import { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/UI/forms/ToDoForm';
import ModalTask from './components/UI/ModalTask/ModalTask';
import MyButtonAdd from './components/UI/MyButton/MyButtonAdd/MyButtonAdd'
import MyModal from './components/UI/MyModal/MyModal';
import './style/App.css';

function App() {

  const [toDoItems, setToDoItems] = useState([
    ...JSON.parse(localStorage.getItem('tasks'))
  ])
  const [modalForm, setModalForm] = useState(false)
  const [modalTask, setModalTask] = useState(false)
  const [task, setTask] = useState({})

  function createToDoItem(newToDoItem) {
    setToDoItems([...toDoItems, newToDoItem])
    setModalForm(false)
  }

  function removeToDOItem(toDoItem) {
    setToDoItems(toDoItems.filter(toDo => toDo.id !== toDoItem.id))
  }

  function getSourceTask(task) {
    const getTask = {
      number: task.number,
      title: task.title,
      body: task.body
    }
    setTask(getTask)
  }

  function setVisibleModal() {
    setModalTask(true)
  }

  localStorage.setItem('tasks', JSON.stringify(toDoItems))

  return (
    <div className="App">
      <h1 style={{marginTop: '10px'}} className='header'>TO-DO LIST</h1>
      <hr style={{marginTop: '15px', width: '100%'}}/>
      {toDoItems.length === 0
        ?
        <h2 style={{margin: '15px', color: 'red'}}>To-Do items not found...</h2>
        :
        <ToDoList setVisibleModal={setVisibleModal} getTask={getSourceTask} remove={removeToDOItem} toDoItems={toDoItems}></ToDoList>
      }
      <MyButtonAdd onClick={() => setModalForm(true)}/>
      <MyModal
        visible={modalTask}
        setVisible={setModalTask}
      >
        <ModalTask task={task}/>
      </MyModal>
      <MyModal
        visible={modalForm}
        setVisible={setModalForm}
      >
        <ToDoForm create={createToDoItem}/>
      </MyModal>
    </div>
  );
}

export default App;
