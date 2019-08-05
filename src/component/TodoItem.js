import React,{Component} from 'react';


class TodoItem extends Component {
  

  render(){
    return (
        <li className="list-group-item">
            {this.props.name}
            <div className="float-right">
                <button type="button" className= "btn btn-secondary btn-sm mr-2">
                    Edit
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                    X
                </button>
            </div>
        </li>
      )
  }
}

export default TodoItem;
