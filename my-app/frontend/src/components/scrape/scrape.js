import React from 'react';
import { Button} from '@material-ui/core';
import './scrape.css';

export default function Scrap(){

    //send rest call to server to scrape
    function handleClick (){
        
    }

    return(
        //button to scrape website
        <div className="scrapeOuterContainer" id="sOuterBox">
            {/* <button className="" onClick={handleClick}>Scrape</button> */}
            <Button variant="contained" color="primary">Scrape</Button>
        </div>
    );
}