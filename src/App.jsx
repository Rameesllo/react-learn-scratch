  import {useState , useEffect} from "react";

 function Student({name , age , course , city}){
  return(
<div>
  <h2 className="text-red-500">name 1  : {name}</h2>
  <h2>age : {age}</h2>
  <h2> course : {course}</h2>
  <h2>city : {city}</h2>
</div>
  );
 }
  

 
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
  const [newName , setNewName] = useState("");
  const [userId , setUserId] = useState(1);
  
  const [count , setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const cars = ["bmw" , "audi" , "mercededdds" , "lamborgini" , "toyota"];
  const students = ["ramees" , "rahul" , "akhil" , "nihal"];
  const [showMessage ,  setShowMessage] = useState(false);
  const [marks , setMarks] = useState("");
  const [submittedNames , setSubmittedNames] = useState([]);
  const oldNames = ["ramees", "rahul"];
  const newNames = "akhil";
  const updatedNames = [...oldNames , newNames];
  
  

    async function fetchUser(number){
      setLoading(true);
      setError("");

      

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${number}`
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
  useEffect(() => {
   document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {



    fetchUser(1);
  }, []);
   
  function handleDelete(indexToDelete){
    const confirmDelete = window.confirm("are u sure want to delete this name...");
    if (confirmDelete){
      setSubmittedNames(
      submittedNames.filter((name , index) => index !== indexToDelete)
    );
    }
  }
  
   function handleIncrease(){
    setStudentInfo({
      ...studentInfo , age:studentInfo.age +1
    });
   }

   function handleDecreaseAge(){
    setStudentInfo({
      ...studentInfo, age:studentInfo.age - 1
    });
   }

   function handleResetAge(){
    setStudentInfo({...studentInfo, age:22});
   }

   function handleResetCourse(){
    const confirmReset = window.confirm("are u sure");
    if (confirmReset){
          setStudentInfo({...studentInfo, course:"bsc cs"})
    }
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
  
  function handleDecrease(){
    if(count < 1)
    return ;
    setCount(count - 1);
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
    
    if (!inputValue.trim()){
    setMessage1("please enter your name");
    return; 
} 

const nameExists = submittedNames.some(
  (name) => name.toLowerCase() === inputValue.trim().toLowerCase()
);

if (nameExists) {
  setMessage1("Name already exists");
  return;
}
 setSubmittedNames([...submittedNames , inputValue.trim()]);
 console.log(inputValue);
 setInputValue("");
 setMessage1("");
 }

  return(
       

      

      <div>
       <Student 
        name={studentInfo.name}
        age={studentInfo.age}
        course={studentInfo.course}
        city={studentInfo.city}
       />
       <button className="border" onClick={() => setStudentInfo({...studentInfo, city:"kochi"})}>change city  </button>
       <button className="border" onClick= {() => setStudentInfo ({...studentInfo,course:"bca"})}>change course</button>
       <button className="border" onClick={handleIncrease} > increase age</button>
      <button className="border" onClick={handleDecreaseAge} > decrease age</button>
      <button className="border" onClick={handleResetAge}> reset age</button>
      <button className="border" onClick={handleResetCourse}> reset course</button>



       <h2>API USER DETAILS</h2>

       
    
       {loading ? (
        <p>loading user..</p>
       )
        : error ? (
        <p>{error}</p>
        )
        : (

       
       user && (
         <div>
         <p>Welcome {user.name}</p>
         <p>Email : {user.email}</p>
         <p>City : {user.address.city}</p>
         </div>
       )
       )}
      <p> current user id : {userId}</p>
       <button disabled={loading} className="border" onClick={()=> {
        const nextUserId = userId >= 10 ?1 : userId + 1;

        setUserId(nextUserId);
        fetchUser(nextUserId);
       }}>
         {loading ? "loading" : "refresh user"}
       </button>

        <h1 className="text-3xl font-bold underline">
          my first react app</h1>
          <p>i am learning react without ai</p>
      

      <h2> my  information  </h2>
        <p>my name is  {studentInfo.name}</p>
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

        submitted names :
        {submittedNames.map ((name, index) => (<p key={index}> {name}  <button onClick={() =>handleDelete(index)} type="button" className="border bg-red-600 ">delete</button>  </p>)) }
      
       <br></br>

        <button onClick={handleClick} className="border"> click me</button>
         {message !== "" && <p>{message}</p>}
          <button onClick={handleCount} className="border-2 text-amber-300"> count me </button>
           <p> count : {count}</p>
           <p>{getCountMessage()}</p>
           <button onClick={handleDecrease} className="border-2 text-black">decrease</button>
           <br></br>
           <button className="border" onClick={()=> setShowMessage(!showMessage)}> {showMessage ? "hide message" : "show message"} </button>
           {showMessage && <p>this is my message</p>}

          <br></br>
           my cars are : {cars.map((car)=>{
            
          return<p key={car}>{car}</p>
          })}
<br></br>
          stdents : {students.map((student, index )=>{
            return<p key={student}>{index +1 }-{student}</p>
          })}

          {students.length > 3 && <p>Many students</p>}

      <input type="number"
             value={marks}
             onChange={(event) =>setMarks(event.target.value)} 
             placeholder="enter your marks"
             className="border bg-blue-500"
      >
     </input>     {marks !=="" && (<p> { Number(marks) < 0 ||  Number(marks) > 100 || !Number.isInteger(Number(marks)) ? "invalid marks" : Number(marks) >=50 ? "passed" : "fail"} </p>) }




      </div>
  )
  }
  export default App