import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(){
        super(),
        this.state={   
            timer:0,
            intervall:null


           }
    }
    add=()=>{
        this.setState({
            counter:this.state.counter +1
        })
    }

    componentDidMount(){
     this.setState({
        intervall:setInterval(
            ()=>this.setState({timer:this.state.timer + 1}),500
        )
     })
    }
   
  render() {
    return (
      <div>
         <div>
     <h2>FirstName:KAIS </h2>
     <h2>LastName: LAZREG</h2>
     <img src="https://lirp.cdn-website.com/51ef9733/dms3rep/multi/opt/Ricky_ibarra_FB_avatar-bc6f7d29-1920w.png" alt="just a tof"/>
     <h2>bio:nothing to say</h2>
     <h2>profession:dev</h2>
    </div>
    {this.state.timer}
      </div>
    )
  }
}