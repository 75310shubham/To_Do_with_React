import React, { useState } from "react";
import Tasks from "./Tasks";
const Home = () => {
  const [inputValue, setInputValue] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");
  console.log(title, description);

  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
  };

  const  deleteTask= (index)=>{
      const filteredArray=tasks.filter((val,i)=>{
            return i!== index
      });
      // console.log(filteredArray);
      setTasks(filteredArray);
  }
  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Desciption"
          value={description}
          onChange={(e) => setDesciption(e.target.value)}
        ></textarea>
        <button type="submit" >ADD</button>
      </form>
      {tasks.map((item, index) => (
        <Tasks key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
      ))}
    </div>
  );
};

export default Home;

// //With Local Storage
// import React, { useState,useEffect } from "react";
// import Tasks from "./Tasks";
// const Home = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDesciption] = useState("");
//   console.log(title, description);
//   const initialArray=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

//   const [tasks, setTasks] = useState(initialArray);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setTasks([...tasks, { title, description }]);
//   };
//   localStorage.setItem("tasks",JSON.stringify(tasks))

//   const  deleteTask= (index)=>{
//       const filteredArray=tasks.filter((val,i)=>{
//             return i!== index
//       });
//       // console.log(filteredArray);
//       setTasks(filteredArray);
//   };

//   useEffect(()=>{
//           localStorage.setItem("tasks",JSON.stringify(tasks))
//   },[tasks]);
//   return (
//     <div className="container">
//       <h1>DAILY GOALS</h1>
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Desciption"
//           value={description}
//           onChange={(e) => setDesciption(e.target.value)}
//         ></textarea>
//         <button type="submit" >ADD</button>
//       </form>
//       {tasks.map((item, index) => (
//         <Tasks key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
//       ))}
//     </div>
//   );
// };

// export default Home;
