import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {

    const [state, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout_left">
                {state.basket?.length === 0 ? (
                    <div className="checkout_empty">
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                        <div className="checkout_filled">
                            <h2 className="checkout_title">Your Shopping Basket</h2>
                            {state.basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {state.basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>

    )
}

export default Checkout
