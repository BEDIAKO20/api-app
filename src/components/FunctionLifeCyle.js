import React,{useState,useEffect} from 'react'
import axios from 'axios';

function FunctionLifeCyle() {
    const [apiData,SetapiData]=useState([{title:"null",id:"hfudwsfsudhfedh"}]);
 useEffect(() =>{

  
            const fetchDataFromApi = async() =>{
            //    await fetch("https://jsonplaceholder.typicode.com/todos/")
            //       .then((res) => {
            //         res.json()
            //     })
            //     .then((response)=>{
            //         console.log(response);
            //     })
            //     .then((error) =>{
            //         console.log(error);
            //     })
            // 

            await axios("https://jsonplaceholder.typicode.com/todos/")
            .then((response) => {
                SetapiData([...response.data])
                console.log(response.data );
            })
            .catch((error) => {
                console.log(error);
            });
        };
 
            fetchDataFromApi();
 },[]);

  return (
    <div>
        FunctionLifeCyle
        {apiData.map((itme) => {
            return <div key={itme.id}>
                <h1>{itme.title}</h1>
                <h2>{itme.completed}</h2>
            </div>
        })}

    </div>
  )
}

export default FunctionLifeCyle