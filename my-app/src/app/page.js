import Image from "next/image";

export default function Home() {
  // import axios from "./axios"
  console.log("Main.js file- running")

 let message = "message to be fetched"
  async function fetchData (){
      // await fetch('https://js-api-hbsc.onrender.com/madeupurl/1')
      // .then(response => console.log("made up url - response code: " + response.status))
      // await fetch('https://js-api-hbsc.onrender.com/users/1')
      // .then(response => console.log("real url user 1 - response code: " + response.status))
      // await fetch('https://js-api-hbsc.onrender.com/users/1')
      // .then(response => console.log("real url user 100 - response code: " + response.status))
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
