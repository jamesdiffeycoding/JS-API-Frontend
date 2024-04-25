"use client" 

import { useEffect, useState } from "react";
import Questions from "./components/Questions";
import Banner from "./components/Banner";


console.log("Main.js file- running")

async function fetchData (){
    const fetchObject = await fetch('https://js-api-hbsc.onrender.com/api/quiz')
    .then(response => response.json())
    .then(json => {
        console.log("JSON code: " + JSON.stringify(json));
        return json; // Return the JSON data to be used in the next .then()
    });
    return fetchObject;
}

export default function Home() {
  const [props, setProps] = useState("Fetching data ... ");
  
  useEffect(() => {
    fetchData()
      .then(data => {
        setProps(data); // Set the fetched message to the state
        // console.log(data)
      });
  }, []);

  return (
    <main className="">
      <Banner></Banner>
      <Questions props={props}></Questions>
    </main>
  );
}
