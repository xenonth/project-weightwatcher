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

  /* multiply(props) {
       
       
       return loadNumber * weightValue
   } */

    componentDidMount() {}
    // logic to add to count state
    

    render() {
        
        return (
            <div>
                <button onClick={() => {
                    // look into modals this is just a temporary solution!
                    let loadNumber = Number(prompt("How many Sheets of this type are being loaded?"))
                    while (isNaN(loadNumber)) {
                        loadNumber = Number(prompt("Please enter a numerical value for the number of sheets being loaded!"));
                      }
                    this.setState((state) => ({
                        count: state.count + (44 * loadNumber),
                        sheetsLoaded: state.sheetsLoaded + (1 * loadNumber)
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