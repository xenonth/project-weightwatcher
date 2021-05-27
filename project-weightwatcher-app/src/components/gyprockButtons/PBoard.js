import React from "react";
//import gypRockTypes from "./data/GypRock";

class PBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            sheetsLoaded: 0,
        }
    }

    //function to increase state weight
    /*weightIncrease() {
        this.setState((state, props) => ({
            count: state.count + props.increment
          }));
    } */

    // function for how many multiplier

    componentDidMount() {}
    // logic to add to count state
    

    render() {
        
        return (
            <div>
                <button onClick={() => {
                    this.setState((state) => ({
                        count: state.count + 44,
                        sheetsLoaded: state.sheetsLoaded + 1
                      }));
                }}>
                    6000x1350
                </button>
                <p>
                    Total Weight: {this.state.count} kg
                    <br></br>
                    Sheets Loaded: {this.state.sheetsLoaded}
                </p>

            </div>
        )
    }
}

export default PBoard;