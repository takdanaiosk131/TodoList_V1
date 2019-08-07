import React,{Component} from 'react';
import Button from './Button'

class TodoItem extends Component {
  
  state = {
      todo: {id: this.props.id,text: this.props.name},
      statusEdit: false
  }

  handleChange = (e) => {
    this.setState({
        todo: {id: this.props.id,text: e.target.value}
    })
  }

  handleEdit = () => {
      this.setState({statusEdit: true})
  }

  handleEditDone = (e) => {
    this.setState({statusEdit: false})
    this.props.editTodo(this.state.todo)
  }

  handleCancel = () => {
    this.setState({
        todo: {...this.state.todo},
        statusEdit: false
    })
  }

  showText = () => {
    const {delTodo,id,name} = this.props
    return (
        <li className="list-group-item">
            {name}
            <div className="float-right">
                <Button bClassName="btn btn-secondary btn-sm mr-2" handleClick={this.handleEdit} >Edit</Button>
                <Button bClassName="btn btn-danger btn-sm" handleClick={() => delTodo(id)} >X</Button>
            </div>
        </li>
    )
  }

  showEdit = () => {
      return (
        <li className="list-group-item">
            <input type="text" name="text"
                value={this.state.todo.text}
                onChange={this.handleChange} >
            </input>
            <div className="float-right">
                <Button bClassName="btn btn-success btn-sm mr-2" handleClick={this.handleEditDone} >OK</Button>
                <Button bClassName="btn btn-danger btn-sm" handleClick={this.handleCancel} >CANCEL</Button>
            </div>
        </li>
      )
  }

  render(){
    
    return (
        this.state.statusEdit ? this.showEdit() : this.showText() 
      )
  }
}

export default TodoItem;
