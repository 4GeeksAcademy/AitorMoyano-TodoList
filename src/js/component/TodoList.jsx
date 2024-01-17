import React, {useState} from "react";

export const TodoList = () => {
    
    const [task, setTask] = useState('')
    const [list, setList] = useState(['primera tarea','segunda tarea','tercera tarea'])

    const addTask = (event) => {
        event.preventDefault();
        if (task.trim() === '') {
          setTask('')
          return
        }
        setList([...list, task]);
        setTask('');
      }

    const deleteTask = (item) => {
        setList(list.filter((element) => element != item))
      }

 

    return (
        <div className="container col-xs-10 col-md-8 col-lg-6 my-3">
        <h1 className="text-success">Todos</h1>
        <div className="mb-3">
          <form onSubmit={addTask}>
            <input type="text" className="form-control" placeholder="Agregar nueva tarea"
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
          </form>
          <h2 className="text-center text-primary mt-4">Lista de Tareas</h2>
          <div>
            <ul className="list-group">
              {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
                {item}
                <span onClick={() => deleteTask(item)}>
                  <i className="fas fa-trash text-danger"></i>
                </span>
              </li>)
              }
              <span className="list-group-item bg-light text-end fw-lighter">
                  {list.length === 0 ? "No tasks, add a task" : list.length + " Item Left"}
              </span>          
            </ul>
          </div>
        </div>
      </div>
    )
}