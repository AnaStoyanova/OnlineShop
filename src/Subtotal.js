import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer'

function Subtotal() {

    const [state, dispatch] = useStateValue()

    
    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText= { value => (
                    <> 
                    <p>
                        Subtotal ({state.basket.length} items): <strong>{`${value}`}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />
                            This order contains a gift.
                    </small>
                    </> 
                )}
                decimalScale={2}
                value={getBasketTotal(state.basket)}
                displayType = {"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
