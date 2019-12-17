import React, { Component } from 'react'
import posed from 'react-pose'
import UserConsumer from "../context"
import axios from 'axios'

const Animation = posed.div({
    visible : {
        opacity:1,
        applyAtStart:{
            display: "block"
        }
    },
    hidden : {
        opacity:0,
        applyAtStart: {
            display:"none"
        }
    }
})
class AddUser extends Component {
    state = {
        visible : false,
        name : "",
        department : "",
        salary : "",
        error : false
    }
    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }
    validateForm = () => {
        const {name,salary,department} = this.state;
        if(name === "" || salary === "" || department === ""){
            return false;
        }
        return true;
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            [e.target.department] : e.target.value,
            [e.target.salary] : e.target.value
        })
    }
    addUser = async (dispatch,e) => {
      e.preventDefault();
      const {name,department,salary} = this.state;
      const newUser = {
          name:name,
          department:department,
          salary:salary
      }
      if(!this.validateForm()){
        this.setState({
            error:true
        })
        return;
      }
      const response = await axios.post("http://localhost:3004/users",newUser);
      dispatch({type:"ADD_USER",payload:response.data});

      //redirect
      this.props.history.push("/");
    }
    render() {
        const {visible,name,department,salary,error} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                            <Animation pose = {visible ? "visible" : "hidden"}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add User Form</h4>
                                </div>
                                <div className="card-body">
                                    {
                                        error ? 
                                        <div className="alert alert-danger">
                                            Lütfen Bilgilerinizi Kontrol Edin.
                                        </div>
                                        : null
                                    }
                                    <form className="text-left" onSubmit={this.addUser.bind(this,dispatch)}>
                                        <div className="selam"></div>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" onChange={this.changeInput} value={name} name="name" id="name" placeholder="Name" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="department">Department</label>
                                            <input type="text" onChange={this.changeInput} value={department} name="department" id="department" placeholder="Department" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="salary">Salary</label>
                                            <input type="text" onChange={this.changeInput} value={salary} name="salary" id="salary" placeholder="Salary" className="form-control" />
                                        </div>
                                        <button type="submit" className="btn btn-danger btn-block">Add User</button>
                                    </form>
                                </div>
                            </div>
                            </Animation>
                        </div>
                    )
                }
            }
        </UserConsumer>
    }
}
export default AddUser;