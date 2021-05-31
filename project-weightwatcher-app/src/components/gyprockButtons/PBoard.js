import React from "react";

import { Container, Grid } from "@material-ui/core"


 
class PBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            sheetsLoaded: 0,
            howMany: 0,
            truckWeight: 0,
            message: "Truck is currently at legal weight value"
        }
    }

    handleHowMany = event => {
        this.setState({
            howMany: event.target.value, 
        })
    } 

    handleTruck = event => {
        this.setState({
            truckWeight: event.target.value, 
        })
    }

    render() {
        
        return (
            <div>
            <Container >
                <Grid m={2} ></Grid>
                <Grid xs={12} s={10} m={10} lg={10} className="centralGrid">
                <label className="howManySheets" for="howMany">How many sheets?</label>
                <br></br>
                <input className="howManySheets" name="howMany" type="Number" placeholder="How many sheets?" value={this.state.howMany} onChange={this.handleHowMany} />
                <br></br>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (44 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    6000x1350
                </button>

                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (35 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    4800x1350
                </button>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (31 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    4200x1350
                </button>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (26 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    3600x1350
                </button>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (22 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    3000x1350
                </button>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (39 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    6000x1200
                </button>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (31 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    4800x1200
                </button>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (27 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    4200x1200
                </button>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (24 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    3600x1200
                </button>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (20 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    3000x1200
                </button>
                <button className="dimension" onClick={() => {
                    
                    this.setState((state) => ({
                        count: state.count + (16 * this.state.howMany),
                        sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                      }));
                }}>
                    2400x1200
                </button>
                <button className="reset" onClick={() => {this.setState({count: 0, sheetsLoaded: 0})}}>
                    RESET
                </button>
                <p>
                    {/* function for if truck weight is below 2000 kg change text to red or green */} 
                    Total Weight: {this.state.count} kg
                    <br></br>
                    Sheets Loaded: {this.state.sheetsLoaded}
                    <br></br>
                    {this.state.message}
                </p>
                </Grid>
                <Grid></Grid>
                </Container>
            </div>
        )
    }
}

export default PBoard;