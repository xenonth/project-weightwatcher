import React from "react"

//Material UI styling
import {Container, Grid, Paper} from "@material-ui/core";

function Home() {
    
    
    return (
        <Container className="home">
            <Grid></Grid>
            <Grid className="home" lg={10}>
                
                <h3>Instructions: Please Read before Use</h3>
                <p className="home">
                    This Web Application is built and designed for Gyprock Delivery Drivers in South Australia.  It is a calculator for preset Gyprock types according to their dimension and weight.  To use this application tap the desired sheet type enter how many sheets you are loading and then tap or click the appropriate button.  If it is incorrect simply tap or click reset which will set all values to 0.  

                </p>
                <p className="home">
                    Additionally, each weight and sheet load value is localised to its own webpage and will reset if the webpage is refreshed or changed.  It is recommended to write down the total wieght value before moving on to the next webpage if you are loading more than one sheet type onto the same truck.
                </p>
                
            </Grid>
        </Container>
    )
}

export default Home;