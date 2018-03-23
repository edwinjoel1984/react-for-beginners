import React from 'react';

class EditFishForm extends React.Component{
    handleChange = event =>{
        const updatedFish = {...this.props.fish, 
        [event.currentTarget.name] : event.currentTarget.value }
        this.props.updateFish(this.props.index, updatedFish);
    }
    render(){
        return (<div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange}  value={this.props.fish.name} placeholder="Name"/>
                <input type="text"  name="price" onChange={this.handleChange}  value={this.props.fish.price} placeholder="Price"/>
                <select  name="status" onChange={this.handleChange}  value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea  name="desc" onChange={this.handleChange}  value={this.props.fish.desc} placeholder="Desc"></textarea>
                <input type="text"  name="image" onChange={this.handleChange}  value={this.props.fish.image} placeholder="Image"/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>Delete Fish</button>
        </div>)
    }
}

export default EditFishForm;