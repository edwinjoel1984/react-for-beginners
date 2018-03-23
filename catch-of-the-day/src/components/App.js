import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base';

export default class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    }
    addFish = fish => {
        // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes };
        // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({ fishes });
      };
    updateFish = (key, updatedFish )=> {
        // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes };
        // 2. Updated fishes variable
        fishes[key] = updatedFish;
        // 3. Set the new fishes object to state
        this.setState({ fishes });
      };

      addToOrder = (key) => {
          // 1. take a copy of state
          const order = { ...this.state.order};
          // 2. Either add to order, or update the number in our order
          order[key]= order[key] +1 || 1;
          // 3. 
          this.setState({ order });
      }
      removeFromOrder = (key) => {
          // 1. take a copy of state
          const order = { ...this.state.order};
          // 2. Either add to order, or update the number in our order
          delete order[key];
          // 3. 
          this.setState({ order });
      }

      deleteFish = (key) => {
          // 1. take a copy of state
          const fishes = {...this.state.fishes};
          // update the state
          fishes[key]=null;
          this.setState({
            fishes
          })
      }

      loadSampleFishes = () => {
          this.setState({
              fishes: sampleFishes
          });
      }
      componentDidMount(){
        const { params }  = this.props.match;
        //first read our localstorage
        const localStorageRef =localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/fishes`,{
            context: this,
            state: 'fishes'
        });
      }
      componentWillUnmount(){
          base.removeBinding(this.ref);
      }
      componentDidUpdate(){
          localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
      }
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh SeaFood Market"/>
                    <ul className="fishes">
                    {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
                    </ul>
                </div>
                <Order {...this.state} removeFromOrder={this.removeFromOrder}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes} updateFish={this.updateFish} deleteFish={this.deleteFish}/>
            </div>
        );
    }
}