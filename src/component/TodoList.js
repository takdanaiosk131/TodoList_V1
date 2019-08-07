import React,{Component} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
 
  showTodoList = () => {
    return (
        <ul className="list-group">
            {this.props.todo.map( list =>
                <TodoItem 
                  key={list.id} 
                  id={list.id} 
                  name={list.text}
                  delTodo={this.props.delTodo}
                  editTodo={this.props.editTodo}
                />
            )}
        </ul>
    )
  }
  

  render(){
    return (
        <div>
            <br />
           <h4>TodoList</h4>
            {this.showTodoList()}
        </div>
    )
  }
}

export default TodoList;
