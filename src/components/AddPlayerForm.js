import React, { Component } from "react";

class AddPlayerForm extends Component {

    //Commented out because I added playerInput ref and added line 20! 
    // state = {
    //     value: ''
    // }

    //Create a reference to the input
    playerInput = React.createRef();

    // handleValueChange = (e) => {
    //     this.setState({ value: e.target.value });
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value); //gets value of input field
        // this.setState({ value: ''})
        e.currentTarget.reset(); //reset to intial value 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    ref={this.playerInput}
                    // value={this.state.value}
                    // onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />
                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;