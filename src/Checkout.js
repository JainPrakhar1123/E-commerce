import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/MayArt23/MayART_PC_Rec_EH_EN_ET.jpg" alt="" />

        <div>
          <h2>Hello {user?.email}</h2>
            <h2 className='checkout_title'>Your shopping basket</h2>
            {basket.map(item=>
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
              )}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
