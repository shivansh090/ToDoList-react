import React, {useState} from "react";
import styled from "styled-components";


function App() {
  const [item ,newitem]= useState("");
  const [items,setitem]=useState([]);
  function sbmt(event){
    var thing=event.target.inpt.value;
    newitem(thing);
    var insert=true;
    items.map(itm =>{
   if(itm===thing){
     insert=false;
   }
    })
   if(insert){ items.push(thing);}
    event.preventDefault();
    event.target.inpt.value="";
  }
  return (
    <Container>
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={sbmt}>
        <input name="inpt" type="text" />
        <button>
          <span>Add</span>
        </button>
        </form>
      </div>
      <div>
        {items.map((item) => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
    </Container>
  );
}

export default App;

const Container = styled.div`

  .container {
    width: 100%;
    height: auto;
    min-height: 520px;
    max-width: 500px;
    min-width: 400px;
    background: #f1f5f8;
    background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
    background-size: 25px 25px;
    border-radius: 20px;
    box-shadow: 4px 3px 7px 2px #00000040;
    padding: 1rem;
    box-sizing: border-box;
  }
  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .heading h1 {
    transform: rotate(-4deg);
    padding: 0.2rem 1.2rem;
    border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
    background-color: #fdcb6e;
    font-size: 1.5rem;
  }
  
  .form input {
    box-sizing: border-box;
    background-color: transparent;
    padding: 0.7rem;
    border-bottom-right-radius: 15px 3px;
    border-bottom-left-radius: 3px 15px;
    border: solid 3px transparent;
    border-bottom: dashed 3px #fdcb6e;
    font-family: "Architects Daughter", cursive;
    font-size: 1rem;
    color: hsla(260, 2%, 25%, 0.7);
    width: 70%;
    margin-bottom: 20px;
  }
  
  button {
    padding: 0;
    border: none;
    font-family: "Architects Daughter", cursive;
    text-decoration: none;
    padding-bottom: 3px;
    border-radius: 5px;
    background-color: #ffeaa7;
  }
  button span {
    background: #f1f5f8;
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid hsl(198, 1%, 29%);
  }
  
  li {
    text-align: left;
    position: relative;
    padding: 0.5rem;
  }
  
`;
