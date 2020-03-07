import React from 'react';
import { List, Header } from "semantic-ui-react";
 
export const Menu = ({ menu }) => {
    return(
      <List>
          {
              menu.map((menuItem, index) => {
                  return(
                      <List.Item key={index}>
                            <Header>{menuItem}</Header>
                      </List.Item>
                  )
              })}
      </List>
    )
}