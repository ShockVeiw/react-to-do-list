import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddTodos(props) {
  const { todos, setTodos } = props;
  const [charCount, setCharCount] = React.useState(0);
  const todoInputRef = React.useRef();
  const inputMaxLength = 250;

  function addTodo() {
    if (!todoInputRef.current.value) {
      alert("The todo can't has an empty description!");
      return;
    }

    const todo = {
      id: uuidv4(),
      description: todoInputRef.current.value,
      completed: false
    }

    let updatedTodos;
    !todos ? updatedTodos = [todo] : updatedTodos = [...todos, todo];

    setTodos(updatedTodos);
    clearInput(todoInputRef.current);
  }

  function charCounter(e) {
    const inputLength = e.target.value.length;
    setCharCount(inputLength);
  }

  function clearInput(input) {
    setCharCount(0);
    input.value = '';
  }

  return (
    <main className="todos-addition">
      <div className="todos-addition__wrapper">
        <input ref={todoInputRef} className="todos-addition__input" type="text" placeholder="Type a todo" maxLength={inputMaxLength} onInput={charCounter}/>
        <span className="todos-addition__char-counter">{charCount}/{inputMaxLength}</span>
        <br/>
        <button className="todos-addition__add-btn" onClick={addTodo}>Add</button>
      </div>
    </main>
  );
}

export default AddTodos;

    // if (!todos) {
    //   updatedTodos = [todo];
      
    // } else {
    //   updatedTodos = [...todos, todo];
    // }