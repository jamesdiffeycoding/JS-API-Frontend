"use client" 

import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Heading from "./components/Heading";

console.log("Main.js file- running")


// API Interaction
import AllQsComp from "./components/AllQsComp";
import QByIdComp from "./components/QByIdComp";
import UpdateQByIdComp from "./components/UpdateQByIdComp";
import DeleteQByIdComp from "./components/DeleteQByIdComp";
import { getAllQs, getQByID, updateQByID, deleteQById } from "./helperFunctions";


export default function Home() {
  const [toggles, setToggles] = useState({
    "getAllQs": true,
    "getQById": true,
    "updateQById": true,
    "deleteQById": true, 
  })
  const [allQs, setAllQs] = useState("Fetching all qs ... ");
  const [qById, setQById] = useState("Fetching question by ID ... ");
  const [updatedQById, setUpdatedQById] = useState("Fetching question to update by ID ... ");
  const [deletedQById, setDeletedQById] = useState("Fetching question to delete by ID ... ");


  function getAndSetAllQs() {
    getAllQs()
    .then(data => {
      setAllQs(data); // Set the fetched message to the state
      // console.log(data)
    });
  }
  function getAndSetQById(id) {
    getQByID(id)
    .then(data => {
      setQById(data)
      // console.log(data)
    });
  }

  
  useEffect(() => {
    getAndSetAllQs();
    getAndSetQById(0);
    getAllQs()
    // updateQByID("1")
      .then(data => {
        setUpdatedQById(data)
        // console.log(data)
        // console.log("hi")
      });
    deleteQById("1")
      .then(data => {
        setDeletedQById(data)
        // console.log(data)
        console.log("hi")
      })
  }, []);

  function changeToggles(toggleToChange) {
    setToggles(prev => ({
        ...prev,
        [toggleToChange]: !prev[toggleToChange]
    }));
  }

  function chooseId(id) {
    getAndSetQById(id)
  }

  return (
    <main className="">
      <Banner></Banner> 
      
      <Heading headingName={"Get All Questions"} onClick ={()=> {changeToggles("getAllQs")}}></Heading>
      {toggles.getAllQs && <AllQsComp allQs={allQs}></AllQsComp>}
      
      <Heading headingName={"Get Question By ID"}onClick ={()=> {changeToggles("getQById")}}></Heading>
      {toggles.getQById && <div className="flex">
        {allQs.data?.map((question) => (
                      <div key={question.Id} className="p-2 border rounded-md shadow-md">
                        <button onClick={() => chooseId(question.Id)}>{question.Id}</button>
                      </div>
                  ))}
      </div>}
      
      {toggles.getQById && <QByIdComp qById={qById}></QByIdComp>}
      
      <Heading headingName={"Update Question By ID"} onClick ={()=> {changeToggles("updateQById")}}></Heading>
      {toggles.updateQById && <UpdateQByIdComp updatedQById={updatedQById}></UpdateQByIdComp>}

      <Heading headingName={"Delete Question"} onClick ={()=> {changeToggles("deleteQById")}}></Heading>
      {toggles.deleteQById && <DeleteQByIdComp deletedQById={deletedQById}></DeleteQByIdComp>}
    </main>
  );
}
