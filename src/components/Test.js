import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        this.setState({
            a : 10
        });
        console.log("constructor");
    }
    componentDidMount(){
        console.log("componentdidmount");
        //Api İstekleri
        this.setState({
            a : 20
        });
    }
    componentDidUpdate = (prevProps,prevState) => {
        console.log("Component Did Updatee");
    }
    shouldComponentUpdate(){
        console.log("Should Component Update")
        return true;
    }
    render() {
        console.log("Render")
        return (
           <div>
               selam
           </div>
        )

    }
}
export default Test;
