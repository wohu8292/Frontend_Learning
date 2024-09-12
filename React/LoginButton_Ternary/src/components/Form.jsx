import React,{useState} from "react";

function Form(props) {
  const [isMousedOver, setMouseOver] = useState(false)
  const[headingText, setHeadingText] = useState("hello")
  const[userNameText, setUserNameText] = useState("")

  function handleSubmit(e) {              // prevent Refresh
    e.preventDefault();
    console.log('You clicked submit.');
  }

  function isClicked(){
    setHeadingText("Registered")
  }

  function handleMouseOver(){
    setMouseOver(true)
  }

  function handleMouseOut(){
    setMouseOver(false)
  }

  function isChanged(event){
    setUserNameText(event.target.value)
  }

  return (

    <form className="form" onSubmit={handleSubmit}>
      <h1>{headingText} {userNameText}</h1>
      
      <input type="text" placeholder="Username" onChange={isChanged}/>
      <input type="password" placeholder="Password" />
      {props.isRegistered === false && <input type="password" placeholder="Confirm Password" />}

      
      <button type="submit" style={{backgroundColor: isMousedOver? "black": "white"}}
      onClick={isClicked} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
        {props.isRegistered? "Login": "Register"}
      </button>
    </form>
  );
}

export default Form;
