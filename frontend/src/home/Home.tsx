import { Toolbar } from "primereact/toolbar";
import { Menu } from "primereact/menu";
import { Button} from "primereact/button";
import { useRef } from "react";
import React from 'react';

export default function Home() {
    const menu = useRef(null);
    const menu_items = [{
        label: 'options',
        items: [
            {label: 'Settings', icon: 'pi pi-cog'},
            {label: 'Export data', icon: 'pi pi-export'}
        ]
    }]

    const endContent = (
        <React.Fragment>
            <Menu model={menu_items} popup ref={menu} popupAlignment="right"/>
            <Button label="Menu" icon="pi pi-list" onClick={(event)=> menu.current.toggle(event)}/>
        </React.Fragment>

    )

    return (
        <div className="w-screen h-screen bg-background">
            <Toolbar end={endContent} />



        </div>

    );
}