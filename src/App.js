import React,{Component} from 'react';
import Header from './component/Header'
import Form from './component/Form'
import TodoList from './component/TodoList'

class App extends Component {
  
  state = {
    nextId: 0,
    todo: [],
    name: ""
  }

  addTodo = (todoText) => {
    const {todo,nextId} = this.state
    todoText && this.setState({
      todo: [
        {id: nextId, text: todoText},
        ...todo
      ],
      nextId: nextId+1
    })
  }

  editTodo = (todoId) => {
    console.log(todoId)
    const {todo} = this.state
    const result = todo.map(list => todoId.id === list.id ? {id: todoId.id,text: todoId.text} : list)
    console.log(result)
    this.setState({
      todo: result
    })
  }

  delTodo = (todoId) => {
    const {todo} = this.state
    const result = todo.filter(list => todoId !== list.id)
    this.setState({
      todo: result
    })
  }

  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <Form addTodo={this.addTodo}/>
              </div> 
              <div className="col-md-4"></div>
          </div>
          <div className="row ">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <TodoList todo={this.state.todo} delTodo={this.delTodo} editTodo={this.editTodo} />
              </div> 
              <div className="col-md-4"></div>    
          </div>
        </div>
      </div>
    )
  }
}

export default App;
