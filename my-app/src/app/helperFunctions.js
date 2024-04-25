export async function getAllQs (){
    const fetchObject = await fetch('https://js-api-hbsc.onrender.com/api/quiz')
    .then(response => response.json())
    .then(json => {
        console.log("getAllQs: " + JSON.stringify(json));
        return json; // Return the JSON data to be used in the next .then()
    });
    return fetchObject;
}

export async function getQByID (id){
  const fetchObject = await fetch(`https://js-api-hbsc.onrender.com/api/quiz/${id}`)
  .then(response => response.json())
  .then(json => {
      console.log("getQById: " + JSON.stringify(json));
      return json; // Return the JSON data to be used in the next .then()
  });
  return fetchObject;
}

export async function updateQByID (){
    const fetchObject = await fetch('https://js-api-hbsc.onrender.com/api/quiz')
    .then(response => response.json())
    .then(json => {
        console.log("updateQById: " + JSON.stringify(json));
        return json; // Return the JSON data to be used in the next .then()
    });
    return fetchObject;
  }
  

  export async function deleteQById (){
    const fetchObject = await fetch('https://js-api-hbsc.onrender.com/api/quiz')
    .then(response => response.json())
    .then(json => {
        console.log("deleteQById: " + JSON.stringify(json));
        return json; // Return the JSON data to be used in the next .then()
    });
    return fetchObject;
  }
  
  