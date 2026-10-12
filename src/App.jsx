  import {useState , useEffect} from "react";

  function App() {
  const [studentInfo , setStudentInfo] = useState ({
    name : "ramees",
    age : 22,
    course : "bsc cs",
    city : "malappuram"
  });

  
  const [user , setUser] = useState (null);
  const [loading , setLoading] = useState (true);
  const [error , setError] = useState ("");
  const [studentName , setStudentName] = useState ("ramees");
  const num1 = 10;
  const num2 = 20;
  const sum = num1 + num2;
  const [message , setMessage] = useState("");
  const [message1 , setMessage1] = useState("");
  const [newName , setNewName] = useState("")
  
  const [count , setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const cars = ["bmw" , "audi" , "mercededdds" , "lamborgini"];

  useEffect(() => {
   document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    async function fetchUser(){
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
          throw new Error("failed to fetch user");
        }
         
        const data = await response.json();
        setUser(data);
      }
      catch (err){
        setError(err.message);
      }
      finally {
        setLoading(false);
      }
    }


    fetchUser();
  }, []);

  
  if (loading) {
      return <p> loading user...</p>;
  }
  else if (error) {
    return <p>{error}</p>;
  }

  function onChange(event){
    setInputValue(event.target.value);
  }

  function handleClick() {
    setMessage("button clicked");

  }

  function handleCount() {
    setCount(count +1);
  }

  function getCountMessage(){
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

       <h2>API USER DETAILS</h2>

       

       {user && (
         <div>
         <p>Name : {user.name}</p>
         <p>Email : {user.email}</p>
         <p>City : {user.address.city}</p>
         </div>
       )}

        <h1 className="text-3xl font-bold underline">
          my first react app</h1>
          <p>i am learning react without ai</p>
      

      <h2> my  information  </h2>
        <p>my name is {studentInfo.name}</p>
         <p> change  name :<input value={newName} onChange={(event) => setNewName(event.target.value)} className="border" ></input> </p>
        <button className="border" onClick={() => setStudentInfo({...studentInfo, name : newName})}> change name </button>
       
         
        <p> my age is {studentInfo.age}</p>
        <button className="border" onClick={() => setStudentInfo({...studentInfo, age :23})}> change age </button>
        <p> my course is {studentInfo.course}</p>
        <p> my city is {studentInfo .city}</p>

        <h2>student name ; {studentName}</h2>
        <button className="border" onClick={() => setStudentName("Rahul")}> change to rahul</button>
        <button className="border" onClick={() => setStudentName("Ramees")}> change to ramees</button>
        

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
           <p>{getCountMessage()}</p>
          
           my cars are : {cars.map((car)=>{
            
            return<p key={car}>{car}</p>
          })}
      </div>
  )
  }
  export default App