import {useState} from "react";
import "./Pages.css"
import portfolio from '../content/WebPortfolio.json'

function Weblinks(){

  const [ports]=useState(portfolio)



  return (
    <div className="container" >
      <br></br>
      <div id="pageHeader" >
        <h1>Websites</h1>
        <p>I began creating websites around 2015, mostly around tax and art as a way to learn this craft.</p>
      </div> 
      
        
          <ul className="list-group">
             { ports.map(port=>{
              
               return (
                
                 <div className="box">
               <li className="title" >{port.name}</li>
               <div className="list">
               <li className="hideBullet frame" ><img src={port.image} /></li>
               <li ><a href={port.link}>Try it here: {port.name}</a></li>
               <li >{port.sidebar}</li>
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




export default Weblinks;