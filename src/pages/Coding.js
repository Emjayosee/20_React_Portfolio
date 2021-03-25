import {useState} from "react";
import "./Pages.css"
import portfolio from '../content/CodePortfolio.json'

function Coding(){
  console.log(portfolio[0].name)
  const [ports]=useState(portfolio)
console.log(ports)


  return (
    <div class="container" >
      <br></br>
      <div id="pageHeader" >
        <h1>Here are some of my coding efforts in Q1 2021</h1>
      </div> 
      
        
          <ul className="list-group">
             { ports.map(port=>{
              
               return (
                
                 <div class="box">
               <li class="title" >{port.name}</li>
               <div class="list">
               <li class="hideBullet frame" ><img src={port.image} /></li>
               <li ><a href={port.link}>Try it here: {port.name}</a></li>
               <li ><a href={port.github}>GITHUB files: {port.gitname}</a></li>
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




export default Coding;