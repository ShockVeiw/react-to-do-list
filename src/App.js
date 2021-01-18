import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import Tasks from './components/Todos.jsx';
import AddTasks from './components/AddTodos.jsx';

function App() {
  const [state, setState] = React.useState(JSON.parse(localStorage.getItem('todos')));
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Route exact path="/">
        <Tasks todos={state} setTodos={setState} />
      </Route>
      <Route exact path="/add-todos">
        <AddTasks todos={state} setTodos={setState} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
