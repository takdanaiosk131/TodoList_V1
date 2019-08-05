import React,{Component} from 'react';


class Form extends Component {

  state = {
      text: ""
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({text: ""})
  }
 

  render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>  
                <div className="input-group">
                    <input 
                        type="text" 
                        name="text" 
                        className="form-control" 
                        value={this.state.text} 
                        onChange={this.handleChange} ></input>
                
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">ADD</button>
                    </div>
                </div>
            </form>
        </div>
     
    )
  }
}

export default Form;
