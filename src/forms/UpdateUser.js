import React, { Component } from 'react'
import UserConsumer from "../context"
import axios from 'axios';

class UpdateUser extends Component {
    state = {
        name : "",
        department : "",
        salary : ""
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            [e.target.department] : e.target.value,
            [e.target.salary] : e.target.value
        })
    }
    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const response = await axios.get(`http://localhost:3004/users/${id}`)
        const {name,salary,department} = response.data;
        this.setState({
            name,
            salary,
            department
        });
    }
    validateForm = () => {
        const {name,salary,department} = this.state;
        if(name === "" || salary === "" || department === ""){
            return false;
        }
        return true;
    }
    updateUser = async (dispatch,e) => {
        e.preventDefault();
        const {name,salary,department} = this.state;
        const {id} = this.props.match.params;
        const updatedUser = {
            name,
            salary,
            department
        };
        if(!this.validateForm()){
            this.setState({
                error:true
            })
            return;
          }
        const response = await axios.put(`http://localhost:3004/users/${id}`, updatedUser)
        dispatch({type:"UPDATE_USER",payload:response.data});
        //redirect
        this.props.history.push("/");
    }
    
    render() {
        const {name,department,salary,error} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Update User Form</h4>
                                </div>
                                <div className="card-body">
                                    {
                                        error ? 
                                        <div className="alert alert-danger">
                                            Lütfen Bilgilerinizi Kontrol Edin.
                                        </div>
                                        : null
                                    }
                                    <form className="text-left" onSubmit={this.updateUser.bind(this,dispatch)}>
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
                                        <button type="submit" className="btn btn-danger btn-block">Update User</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>
    }
}
export default UpdateUser;