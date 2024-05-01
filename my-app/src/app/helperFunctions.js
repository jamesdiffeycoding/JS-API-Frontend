import HTTPClient from "./HTTPClient";

export async function getAllQs() {
  let fetchObject = [];
  try {
    const response = await fetch("https://js-api-hbsc.onrender.com/api/quiz");

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }

    fetchObject = await response.json();
    console.log("getAllQs: " + JSON.stringify(fetchObject));
  } catch (error) {
    console.error("An error occurred while fetching all questions:", error);
  }

  if (
    fetchObject === undefined ||
    fetchObject.length === 0 ||
    fetchObject === null
  ) {
    return [];
  }
  return fetchObject;
}


export async function getQByID(id) {
    try {
      const response = await fetch(`https://js-api-hbsc.onrender.com/api/quiz/${id}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("getQById: " + JSON.stringify(json));
  
      if (json === undefined || json.length === 0 || json === null) {
        return [];
      }
  
      return json;
    } catch (error) {
      console.error("An error occurred while fetching the question:", error);
      return [];
    }
  }


export async function updateQByID(newQuestion, id) {
  try {
    const response = await fetch(
      `https://js-api-hbsc.onrender.com/api/quiz/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(newQuestion),
      }
    );

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
  } catch (error) {
    console.error("An error occurred while updating the question:", error);
    return [];
  }
  if (response.status === 404) {
    return { message: "404 error", status: response.status };
  }
  if (response.status === 500) {
    return { message: "500 error", status: response.status };
  }
  const json = await response.json();
  console.log("updateQById: " + JSON.stringify(json));
  return json;
}


export async function deleteQById(id) {
    try {
      const response = await fetch(
        `https://js-api-hbsc.onrender.com/api/quiz/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "DELETE",
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const json = await response.json();
  
      if (response.status === 404) {
        return { message: "404 error", status: response.status };
      }
      if (response.status === 500) {
        return { message: "500 error", status: response.status };
      }
  
      console.log("delete question " + id);
      return json;
    } catch (error) {
      console.error("An error occurred while deleting the question:", error);
    }
  }
