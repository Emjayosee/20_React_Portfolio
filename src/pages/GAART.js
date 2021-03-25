import {useState} from "react";
import "./Pages.css"
import portfolio from '../content/GAARTPortfolio.json'

function GAART(){
  
  const [ports]=useState(portfolio)


  return (
    <div className="container" >
      <br></br>
      <div id="pageHeader" >
        <h1>GAART</h1>
        <p>Beginning sometime in 2013 I created a number of works of art dealing with the General Anti-Avoidance Rule (GAAR). The new genre became known as GAART.</p>
      </div> 
      
        
          <ul className="list-group">
             { ports.map(port=>{
              
               return (
                
                 <div className="box">
               <li className="title" >{port.name}</li>
               <div className="list Text">
               <li className="hideBullet artframe" ><img src={port.image} /></li>
                 <li><a href={port.link}>Read more here: {port.name}</a></li>
               <li>Size: {port.size}</li>
               <li>Details: {port.data}</li>
               <br></br>
                 </div>
                 </div>
               )
              })}
            
          </ul>
          <div><br></br></div>
      </div>
  )
}




export default GAART;