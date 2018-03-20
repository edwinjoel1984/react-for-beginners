import React from 'react';

export default class AddFishForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        }
        console.log(fish);
    };

    render(){
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" ref={this.nameRef} name="name" placeholder="Name"/>
                <input type="text" ref={this.priceRef} name="price" placeholder="Price"/>
                <select ref={this.statusRef} name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea ref={this.descRef} name="desc" placeholder="Desc"></textarea>
                <input type="text" ref={this.imageRef} name="image" placeholder="Image"/>
                <button type="submit"> + Add Fish </button>
            </form>
        );
    }
}