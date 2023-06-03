import React, { useState,useEffect } from 'react'
import axios from 'axios';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement ,useStripe,useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
function Payment() {
    const [{basket,user}, dispatch]=useStateValue();
    const history=useNavigate();

    const stripe=useStripe();
    const elements=useElements();
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const[error,setError]=useState(null);
    const[disabled,setDisabled]=useState(true);
    const [clientSeceret,setClientSeceret]=useState(true);
    
    useEffect(()=>{
         //generate the special stipe which allows us to charge a customer
         const getClientSecret=async ()=>{
            const response =await axios({
                method:'post',
                //stripe expects the total in a currencies  subunits
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSeceret(response.data.clientSeceret)
         }
         getClientSecret();
    },[basket])

    const handleSubmit=async(event)=>{
       
        
        event.preventDefault();
        setProcessing(true);
       
        const payload=await stripe.confirmCardPayment(clientSeceret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }  
        }).then(({paymentIntent})=>{

            setError(null)
            setSucceeded(true)
            setProcessing(false)
            history('/path')
           
        })

    }
    const handleChange=e=>{
        //listen for change in the cardElement
        //and display any error as the coustomer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message:"");
    }
  return (
    <div className='payment'>

     <div className="payment_container">

            <h1>
                Checkout(
                    <Link to="/checkout">{basket?.length}items</Link>
                )
            </h1>
        {/* -delvery address */}
            <div className="payment_section">
                <div className="payment_title">
                <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>D-50 sector-58</p>
                    <p>NOIDA , U.P </p>
                </div>
            </div>

        {/* -reeview Items */}
        <div className="payment_section">
           <div className="payment_title">
            <h3>Review items and delivery</h3></div>      
        </div>
        <div className="payment_items">
            {basket.map(item=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />

            ))}
        </div>
        {/* -payment method */}
        <div className="payment_section">
            <div className="payment_title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment_details">
                {/* Stripes will  <work></work> */}
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className="payment_priceContainer">
                        <CurrencyFormat
                         renderText={(value)=>(
                            <h3>Order Total: {value}</h3>
                         )}
                         decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        />
                        <button disabled ={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                        </button>
                    </div>
                    {/* Error */}
                    {error && <div>{error}</div>}
                </form>
            </div>
                </div>
     </div>
    </div>
  )
}

export default Payment
