import './App.css';
import {useState} from 'react';
import run from './gemini_api';

function App() {
  const [input,setInput]=useState("");
  const [result,setResult]=useState("");

  const handelchange=(e)=>{
    setInput(e.target.value)
  }
  const reset=()=>{
    setResult("");

  }
  const clearInput = () => {
    setInput(""); // 
  };
 
const chat=async()=>{
  const response=await run(input)
  setResult(response)
  clearInput(() => console.log("Input cleared after response"))
  


}
  return (
    < >
    <div>
      <input onChange={handelchange} onClick={reset}placeholder="what are you thinking" />
      <button onClick={chat} >Ask me</button>
      </div>
      <div >
      {result}
      </div>
    </>
  );
}

export default App;
