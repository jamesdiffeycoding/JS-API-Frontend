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
                        {questiontype === "updatebyID" && <button className="bg-zinc-400 p-3 rounded-lg cursor-pointer" onClick={updateQ}>Update</button>}
                        {questiontype === "deletebyID" && <button className="bg-zinc-400 p-3 rounded-lg cursor-pointer" onClick={()=>deleteQById(questionData["Id"])}>Delete</button>}
                    </div>
    )
}    