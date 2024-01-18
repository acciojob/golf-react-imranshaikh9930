import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
        

        this.setState({
            renderBall:true
        })

   
   }

                handleKeyDown(e){
                    if(e.key === "ArrowRight" || e.keyCode === 39){
                        this.setState((prev)=>({
                            
                            ballPosition:{
                                left:`${parseInt(prev.ballPosition.left) + 5}px`,
                            }
                        }))
                    }
                }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className='start' onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener('keydown', e => this.handleKeyDown(e))
      
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
