import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: ["beer", "TP", "milk"],
            // inputVal: ""
        }
        this.update = this.update.bind(this)
        // this.updateInput = this.updateInput.bind(this)
    }
    update(s) {
        console.log("update");
        
        let td = this.state.todos
        let todo = document.getElementById("input").value
        if (todo !== "") {
            this.setState({
                // todos: [todo, ...td]
                todos: [...td, todo]
            })
            document.getElementById("input").value = ""
        }
    }
    // updateInput(s) {
    //     this.setState({
    //         inputVal: s.target.value
    //     })
    // }
    render() {
        console.log("render");
        
        let todos = this.state.todos
        return (
            <div>
                <input type="text" id="input" /> <button onClick={this.update}>Add</button>
                <br/>
                {todos.map((todo, index) => <Todo key={index} text={todo}/>)}
            </div>
        )
    }
}

const Todo = (props) => <h4>{props.text}</h4>

export default App