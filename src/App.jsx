
  import {useState} from "react";

  function App() {
  const name = "ramees";
  const age = 22;
  const course = "bsc cs";
  const num1 = 10;
  const num2 = 20;
  const sum = num1 + num2;
  const [message , setMessage] = useState("");
  const [message1 , setMessage1] = useState("");
  
  const [count , setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const cars = ["bmw" , "audi" , "benz" , "toyota"];

  function onChange(event){
    setInputValue(event.target.value);
  }

  function handleClick() {
    setMessage("button clicked");

  }

  function handleCount() {
    setCount(count +1);
  }

  function getCounMessage(){
     if (count === 0)
      return "count starting...";
    else if (count >= 5 && count <10)
      return "count reached 5";
    else if (count >= 10)
      return "count reached maximum";
    else
      return "count started";
  }

 function handleSubmit(event){
    event.preventDefault();
    
    if (inputValue === ""){
    setMessage1("please enter your name");
    return; 
}
 console.log(inputValue);
 setInputValue("");
 setMessage1("");
 }

  return(

      <div>
        <h1 className="text-3xl font-bold underline">
          my first react app</h1>
          <p>i am learning react without ai</p>
      

      <h2> my  information  </h2>
        <p>my name is {name}</p>
        <p> my age is {age}</p>
        <p> my course is {course}</p>

        <h3> callculations</h3>
        <p> number1 : {num1}</p>
        <p> number2 : {num2}</p>
        <p> total : {sum}</p>
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="name"> name </label>
        <input onChange={onChange} value={inputValue} id="name" type="text" placeholder="enter your name " className="border-2 border-red-500"/>
        <button type="submit" className="border"> submit</button>
        <span>{message1}</span>
        <p className = "border w-1/2" > ur name is  : {inputValue}</p>
        </form>

        <button onClick={handleClick} className="border"> click me</button>
         {message !== "" && <p>{message}</p>}
          <button onClick={handleCount} className="border-2 text-amber-300"> count me </button>
           <p> count : {count}</p>
           <p>{getCounMessage()}</p>
          
           my cars are : {cars.map((car)=>{
            
            return<p key={car}>{car}</p>
          })}
      </div>
  )
  }
  export default App