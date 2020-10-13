import React from 'react';
import NavBar from  './NavBar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoContext from '../contexts/TodoContext';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

//serve para rotas*/

const App = () => 
{

    return (
        <TodoContext>
            <Router>
                 <NavBar></NavBar>
                 <br/>
                 <div className='uk-container'>
                    <Switch>
                        <Route path='/create'>
                            <AddTodo></AddTodo>
                        </Route>
                        <Route path='/'>
                            <h4>Minha Lista de tarefas</h4>
                            <TodoList></TodoList>
                        </Route>
                    </Switch>
                </div>

            </Router>
           
        </TodoContext>
    );
}
export default App;