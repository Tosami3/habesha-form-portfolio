
import React from 'react'

import Footer from "./component/Footer"


import "./App.css"
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import Contact from './component/Contact'
import Home1 from './component/Home1'
import About from './component/About'
import Header from "./component/Header"
import Service from './component/Service';
import HomeRoute from "./route/HomeRoute"

function App() {
  return (
    <div className='App'>
      <div>
      
           
      
          
       
                
                    
   </div>
          <BrowserRouter>
         
          
        <Switch>
            <Route path="/" exact >
              
             <Header/>
             <Home1/>
             <About/>
             <Service/>
             <Contact/>
             <Footer/>
          </Route>
         
          <Route path="/home"  >
              <Header/>
              <Home1/>
              <Footer/>
             
          </Route>
          <Route path="/about"  >
            <Header/>
              <About/>
             <Footer/>
          </Route>
         
          <Route path="/service"  >
              
              <Header/>
             <Service/>
             <Footer/>
           </Route>
          
           <Route path="/contact"  >
           <Header/>
              <Contact/>
             <Footer/>
              
           </Route>
           <Route path="/footer"  >
             <Header/>
              
             <Footer/>
             
          </Route>
         

          </Switch>
         
        
        
        </BrowserRouter>
      
    </div>
  )
}

export default App
