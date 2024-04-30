import { deleteQById } from "../helperFunctions";

export default function Question({ questiontype, questionData }) {
   

    function updateQ(){
        console.log("updateQ");
    }

    return(
        <div className="p-4 border rounded-md shadow-md">
                        <h3 className="text-xl font-bold mb-2">{questionData['Question']}</h3>
                        <p className="mb-1">Answer A: {questionData['AnswerA']}</p>
                        <p className="mb-1">Answer B: {questionData['AnswerB']}</p>
                        <p className="mb-1">True Answer: {questionData['TrueAnswer']}</p> 
                        {questiontype === "updatebyID" && <button className="bg-zinc-400 text-zinc-50 px-4 py-2 mt-2 rounded-lg border border-zinc-700 hover:bg-zinc-600 transition duration-300 ease-in-out cursor-pointer" onClick={updateQ}>Update</button>}
                        {questiontype === "deletebyID" && <button className="bg-zinc-400 text-zinc-50 px-4 py-2 mt-2 rounded-lg border border-zinc-700 hover:bg-zinc-600 transition duration-300 ease-in-out cursor-pointer" onClick={()=>deleteQById(questionData["Id"])}>Delete</button>}
                    </div>
    )
}    