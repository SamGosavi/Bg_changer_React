import React,{useState} from 'react';
import './App.css';

function App() {
  let [color,setColor] = useState('');
  return (
    <div className="App" style={{backgroundColor:color}}>
       <div className="container">
          <button style={{backgroundColor:"red"}} className="btn" onClick={()=>setColor("red")}>Red</button>  
          <button style={{backgroundColor:"green"}} className="btn" onClick={()=>setColor("green")}>Green</button>   
          <button style={{backgroundColor:"blue"}} className="btn" onClick={()=>setColor("blue")}>Blue</button>   
          <button style={{backgroundColor:"olive"}} className="btn" onClick={()=>setColor("olive")}>Olive</button>   
          <button style={{backgroundColor:"gray"}} className="btn" onClick={()=>setColor("gray")}>Gray</button>   
          <button style={{backgroundColor:"yellow",color:'black'}} className="btn" onClick={()=>setColor("yellow")}>Yellow</button>   
          <button style={{backgroundColor:"pink",color:'black'}} className="btn" onClick={()=>setColor("pink")}>Pink</button>   
          <button style={{backgroundColor:"purple"}} className="btn" onClick={()=>setColor("purple")}>Purple</button>   
          <button style={{backgroundColor:"lavender",color:'black'}} className="btn" onClick={()=>setColor("lavender")}>Lavender</button>   
          <button style={{backgroundColor:"white",color:"black"}} className="btn" onClick={()=>setColor("white")}>white</button>   
          <button style={{backgroundColor:"black"}} className="btn" onClick={()=>setColor("black")}>Black</button>   
       </div>
    </div>
  );
}

export default App;
