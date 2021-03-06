import React from 'react';
import {Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

//imports
import {Display} from './Display/Display';


//css
import './ScrapMenu.css';

export const ScrapMenu  = ({ scraps }) => {
    return(
        <div className="outerWrapper">
             <div className="sideWrapper">
                 <Sidebar.Pushable 
                    className="contentWrapper"
                    as={Segment}>
                 <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible
                    width='thin'
                >
                     <Menu.Item 
                        name='Filter'
                    >
                    </Menu.Item>
                    <Menu.Item
                        as="a"
                        name='Time'
                    >
                    </Menu.Item>
                    <Menu.Item
                        as="a"
                        name='Host'
                    >
                    </Menu.Item>
                 </Sidebar>    
                 <Sidebar.Pusher >
                <Segment basic>
                    {/* <Header as="h3">Application Content</Header> */}
                    <Image src="https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Segment>
                </Sidebar.Pusher>
                 </Sidebar.Pushable>
                 </div>    
                 <div className="contentWrapper">
                     <Display scraps={scraps}/>
                </div> 
              

        </div>
    )
}