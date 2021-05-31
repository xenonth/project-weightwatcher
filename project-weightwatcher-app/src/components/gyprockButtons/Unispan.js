import React from "react";

import { Container, Grid } from "@material-ui/core"


 
class Unispan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            sheetsLoaded: 0,
            howMany: 0,
            truckWeight: 0,
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
                <Grid m={1} ></Grid>
                <Grid xs={12} m={10} lg={10} className="centralGrid">
                    <label className="howManySheets" for="howMany">How many UNISPAN sheets?</label>
                    <br></br>
                    <input className="howManySheets" name="howMany" type="Number" min="0" placeholder="How many sheets?" value={this.state.howMany} onChange={this.handleHowMany} />
                    <br></br>
                    <button className="dimension" onClick={() => {
                        
                        this.setState((state) => ({
                            count: state.count + (48 * this.state.howMany),
                            sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                        }));
                    }}>
                        6000x1350
                    </button>

                    <button className="dimension" onClick={() => {
                        
                        this.setState((state) => ({
                            count: state.count + (38 * this.state.howMany),
                            sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                        }));
                    }}>
                        4800x1350
                    </button>
                    <button className="dimension" onClick={() => {
                        
                        this.setState((state) => ({
                            count: state.count + (29 * this.state.howMany),
                            sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                        }));
                    }}>
                        3600x1350
                    </button>
                    
                    <button className="dimension" onClick={() => {
                        
                        this.setState((state) => ({
                            count: state.count + (24 * this.state.howMany),
                            sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                        }));
                    }}>
                        3000x1350
                    </button>
                    <br></br>
                    <button className="dimension" onClick={() => {
                        
                        this.setState((state) => ({
                            count: state.count + (43 * this.state.howMany),
                            sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                        }));
                    }}>
                        6000x1200
                    </button>
                    <button className="dimension" onClick={() => {
                        
                        this.setState((state) => ({
                            count: state.count + (34 * this.state.howMany),
                            sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                        }));
                    }}>
                        4800x1200
                    </button>
                    
                    <button className="dimension" onClick={() => {
                        
                        this.setState((state) => ({
                            count: state.count + (30 * this.state.howMany),
                            sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                        }));
                    }}>
                        4200x1200
                    </button>
                    <button className="dimension" onClick={() => {
                        
                        this.setState((state) => ({
                            count: state.count + (26 * this.state.howMany),
                            sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                        }));
                    }}>
                        3600x1200
                    </button>
                    <br></br>
                    <button className="dimension" onClick={() => {
                        
                        this.setState((state) => ({
                            count: state.count + (21 * this.state.howMany),
                            sheetsLoaded: state.sheetsLoaded + (1 * this.state.howMany)
                        }));
                    }}>
                        3000x1200
                    </button>
                    <button className="reset" onClick={() => {this.setState({count: 0, sheetsLoaded: 0})}}>
                        RESET
                    </button>
                    <p className="answer">
                        {/* function for if truck weight is below 2000 kg change text to red or green */} 
                        Total Weight: {this.state.count} kg
                    </p>
                    <p className="answer">
                        {this.state.sheetsLoaded} 10MM UNISPAN sheets counted.
                    </p>
                </Grid>
                <Grid></Grid>
                </Container>
            </div>
        )
    }
}

export default Unispan;