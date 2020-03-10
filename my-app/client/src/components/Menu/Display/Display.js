import React from 'react';
import { List, Header } from "semantic-ui-react";
 
export const Display = ({ scraps }) => {
    return(
      <List>
           { 
            scraps.map((scrapItem, index) => {
                return(
                    <List.Item key={index}>
                        <h3>{scrapItem}</h3>
                    </List.Item>
                )
            })}
      </List>
    )
}