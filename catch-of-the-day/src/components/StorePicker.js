import React from 'react'
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component{
    myInput = React.createRef();
    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);

    }
    componentDidMount(){
        console.log("MOUNTED!!");
    }
    render(){
        return (

            <form className="store-selector" onSubmit={this.goToStore}>
            { /* comment */}
                <h2>Please Enter a Store</h2>
                <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
            
        )
    }
}