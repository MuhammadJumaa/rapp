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
        visible : false
    }
    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }
    render() {
        const {visible} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                <Animation pose = {visible ? "visible" : "hidden"}>
                <div className="card">
                    <div className="card-header">
                        <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                        <form className="text-left">
                            <div className="selam"></div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="department">Department</label>
                                <input type="text" name="department" id="department" placeholder="Department" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary">Salary</label>
                                <input type="text" name="salary" id="salary" placeholder="Salary" className="form-control" />
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