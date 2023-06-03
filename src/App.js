import Header from './Header';
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LogIn from './LogIn';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise=loadStripe('pk_test_51N94TxSIB00YYXT6iSW2T7stPvxLT4d7VI2VjvBUEXKVkqLIIHaHlJN88eDnYnlZVEwDV48i1jnUTAL3F8CchSMc007jF4cavr');
function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
    //will only run once when the app component loads..
    auth.onAuthStateChanged(authUser=>{
      console.log('The User is >>>', authUser);
      console.log('THE USER IS >>>',authUser);
      if(authUser){
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
  
    <Router>   
     <div className="App">
     
     <Routes>
      <Route path='/login' element={[<LogIn/>]}/>
     <Route path="/checkout" element={[<Header/> ,<Checkout/> ]}/>
     <Route path="/payment" element={[<Header/>,<Elements stripe={promise}><Payment/> </Elements>]}/>
     
        
     
      <Route path="/" element={[<Header/> ,<Home/>]}/>
        
      
     </Routes>
         
    </div>
    </Router>

  );
}

export default App;
