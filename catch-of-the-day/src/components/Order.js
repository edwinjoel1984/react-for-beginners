import React from 'react';
import {formatPrice} from '../helpers'
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class Order extends React.Component{
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status==="available";
        const transitionOptions ={
            classNames : "order",
            key,
            timeout : { enter: 250, exit: 250 }
        }
        if(!fish) return null;
        if(!isAvailable){
            return (
                <CSSTransition  {...transitionOptions}>
                    <li key={key}>
                        Sorry {fish ? fish.name:'fish'} is no longer available
                    </li>
                </CSSTransition>
                )

        }
        return  (
            <CSSTransition classNames="order" key={key} timeout={{enter: 250, exit: 250}} >
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition {...transitionOptions}>
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        lbs {fish.name} 
                        {formatPrice(count*fish.price)}
                        <button onClick={()=> this.props.removeFromOrder(key)} >&times;</button>
                    </span>
                </li>
            </CSSTransition>
                )
    }
    render(){
        const orderIds = Object.keys( this.props.order);
        const total = orderIds.reduce((prevTotal,key)=> {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status ==='available';
            if(isAvailable){
                return prevTotal + count*fish.price;
            }
            return 0;
        },0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                {/* <ul className="order"> */}
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                {/* </ul> */}
                
                <div className="total">
                Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}