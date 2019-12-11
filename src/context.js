import React, { Component } from 'react'

const UserContext = React.createContext();
//provider -> sağlayıcı , consumer -> tüketici
const reducer = (state,action) => {
  switch(action.type){
    case "DELETE_USER":
      return {
        ...state,
        users:state.users.filter(user => action.payload !== user.id)
      }
      default:
        return state
  }
}

export class UserProvider extends Component {
    state = {
        users:[
          {
            id:1,
            name: "Fatih DURNA",
            salary : "5000",
            department : "bilişim"
          },
          {
            id:2,
            name: "Yunus BAYSAL",
            salary : "15000",
            department : "bilişim"
          },
          {
            id:3,
            name: "Emre ALNIKIZIL",
            salary : "25000",
            department : "bilişim"
          }
        ],
        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
      }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;