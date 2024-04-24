import Image from "next/image";

export default function Home() {
  // import axios from "./axios"
  console.log("Main.js file- running")

 let message = "message to be fetched"
  async function fetchData (){
      await fetch('https://js-api-hbsc.onrender.com/')
      .then(response => response.json())
      .then(json => console.log("JSON code: " + JSON.stringify(json.message)))
  }
  fetchData()


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> {message}</div>
    </main>
  );
}
