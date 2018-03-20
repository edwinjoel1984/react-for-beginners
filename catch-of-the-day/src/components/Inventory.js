import React from 'react';
import AddFishForm from './AddFishForm';

export default class Inventory extends React.Component{
    render(){
        return (
            <div className="inventory">
                Inventory
                <AddFishForm/>
            </div>
        );
    }
}