import {useState}from "react";
import "./Pages.css"
import portfolio from '../content/CodePortfolio.json'

function Coding(){
  console.log(portfolio[0].name)
  const [ports,setPortfolio]=useState(portfolio)
console.log(ports)


  return (
    <div class="container" >
      <br></br>
      <div id="pageHeader" >
        <h1>Here are some of my coding Efforts</h1>
      </div> 
      
        
          <ul className="list-group">
             { ports.map(port=>{
               
               return (
                 <div>
                <li>{port.name}</li>
               <li><img src={port.image}/></li>
               <li><a href={port.link}>Try it here: {port.name}</a></li>
               <li><a href={port.github}>GITHUB files: {port.gitname}</a></li>
               <li>{port.sidebar}</li>
               <br></br>
                 </div>
               )
              })}
              
          </ul>
      
      </div>
  )
}




export default Coding;