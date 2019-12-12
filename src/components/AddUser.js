import React, { Component } from 'react'
import posed from 'react-pose'

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
        salary : ""
    }
    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            [e.target.department] : e.target.value,
            [e.target.salary] : e.target.value
        })
    }
    addUser = (e) => {
      e.preventDefault();
      const {name,department,salary} = this.state;
      const newUser = {
          name:name,
          department:department,
          salary:salary
      }
      console.log(newUser);
    }
    render() {
        const {visible,name,department,salary} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                <Animation pose = {visible ? "visible" : "hidden"}>
                <div className="card">
                    <div className="card-header">
                        <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                        <form className="text-left" onSubmit={this.addUser}>
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
export default AddUser;