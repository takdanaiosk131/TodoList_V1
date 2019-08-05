import React,{Component} from 'react';
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
    this.setState({
      todo: [
        {id: nextId, text: todoText},
        ...todo
      ],
      nextId: nextId+1
    })

    console.log(this.state.todo)
  }

  render(){
    return (
      <div className="container">
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
              <TodoList todo={this.state.todo} />
            </div> 
            <div className="col-md-4"></div>    
        </div>
        
      </div>
    )
  }
}

export default App;
