import React from 'react';

function Todos(props) {
  const { todos, setTodos } = props;

  function getTodos() {
    if (!todos || !todos.length) return <h1>No Todos</h1>
    else {
      return todos.map((todo) => {
        return (
          <li key={todo.id} id={todo.id} className="to-do-list__todo">
            <button className="to-do-list__todo-delete-btn" onClick={deleteTodo}>
              <i className="far fa-trash-alt"/>
            </button>
            {
              todo.completed ?
                <>
                  <input type="checkbox" className="to-do-list__todo-checkbox" defaultChecked onClick={todoChecker}/>
                  <span className="to-do-list__todo-description_strikethrough-text">{todo.description}</span>
                </> :
                <>
                  <input type="checkbox" className="to-do-list__todo-checkbox" onClick={todoChecker}/>
                  <span className="to-do-list__todo-description">{todo.description}</span>
                </>
            }
          </li>
        );
      });
    }
  }

  function deleteTodo(e) {
    const deleteConfirmed = window.confirm('Are you sure you want to delete it?');
    if (!deleteConfirmed) return;

    const todo = e.target.parentElement.parentElement;
    const updatedTodos = [...todos];
    updatedTodos.splice(findTodoIndexById(todo.id), 1);

    setTodos(updatedTodos);
  }

  function todoChecker(e) {
    const todoCheckbox = e.target;
    const todo = todoCheckbox.parentElement;
    const updatedTodos = [...todos];

    todoCheckbox.checked ?
      updatedTodos[findTodoIndexById(todo.id)].completed = true :
      updatedTodos[findTodoIndexById(todo.id)].completed = false;

    setTodos(updatedTodos);
  }

  function findTodoIndexById(id) {
    for (let todoIndex = 0; todoIndex < todos.length; todoIndex++) {
      if (todos[todoIndex].id === id) return todoIndex;
    }
  }

  return (
    <main className="to-do-list">
      <div className="to-do-list__wrapper">
        <div className="to-do-list__inner">
          <ul className="to-do-list__todos">
            {getTodos()}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Todos;