import React, { Component } from 'react'
import UserConsumer from "../context"

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
    updateUser = async (dispatch,e) => {
      e.preventDefault();
     
    }
    render() {
        const {name,department,salary} = this.state;
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
                                        <button type="submit" className="btn btn-danger btn-block">Add User</button>
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