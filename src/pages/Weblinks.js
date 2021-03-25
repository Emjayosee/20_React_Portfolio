import {useState} from "react";
import "./Pages.css"
import portfolio from '../content/WebPortfolio.json'

function Weblinks(){
  console.log(portfolio[0].name)
  const [ports]=useState(portfolio)
console.log(ports)


  return (
    <div class="container" >
      <br></br>
      <div id="pageHeader" >
        <h1>Websites</h1>
        <p>I began creating websites around 2015, mostly around tax and art as a way to learn this craft.</p>
      </div> 
      
        
          <ul className="list-group">
             { ports.map(port=>{
              
               return (
                
                 <div class="box">
               <li class="title" >{port.name}</li>
               <div class="list">
               <li class="hideBullet frame" ><img src={port.image} /></li>
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