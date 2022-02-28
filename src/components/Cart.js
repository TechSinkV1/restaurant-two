import React from 'react';

const Cart = (props) => {
    console.log(props)
    const {cart}= props
    let foodPrice = 0;
    let quantity = cart.length;
    for(const food of cart){
        console.log(food.nutrition.nutrients[0].amount.toFixed())
        foodPrice = foodPrice + parseInt(food.nutrition.nutrients[0].amount.toFixed());
    }
    let serviceCharge = 10;
    let grandTotal = foodPrice + serviceCharge;
    return (
        <div>
            <div className="cart py-24">
                <h4 className='text-3xl font-bold'>Ordered Foods</h4>
                <div className="quantity flex justify-between pt-6">
                    <p>Quantity</p>
                    <p>{quantity}</p>
                </div>
                <div className="vat flex justify-between py-2">
                    <p>Price</p>
                    <p>{foodPrice}</p>
                </div>
                {/* <div className="service-charge flex justify-between py-2">
                    <p>Service Charge</p>
                    <p>{quantity>=1?serviceCharge:'0'}</p>
                </div>
                <div className="grand-total flex justify-between py-2">
                    <p>Grand Total</p>
                    <p>{quantity>=1?grandTotal:'0'}</p>
                </div> */}
                <div className="grand-total flex justify-between px-4 py-2">
                    <ul className='list-decimal'>
                        {
                            cart.map(food => 
                                <li>{food.title}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cart;