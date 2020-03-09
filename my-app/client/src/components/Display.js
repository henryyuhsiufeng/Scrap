import React from 'react';
import { List, Header } from "semantic-ui-react";
 
export const Display = ({ scraps }) => {
    return(
      <List>
           { 
            scraps.map((scrapItem, index) => {
                return(
                    <List.Item key={index}>
                        <Header>{scrapItem}</Header>
                    </List.Item>
                )
            })}
      </List>
    )
}