import React, { Component } from 'react'

export default class ClassLifeCyle extends Component {
  

    componentDidMount(){
        console.log("hello")
    }
    componentWillUnmount(){
        console.log("yh men")
    }
  
    render() {
    return (
      <div>
        ClassLifeCyle
      </div>
    )
  }
}
