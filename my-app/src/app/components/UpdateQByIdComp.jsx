"use client"
import Question from "./Question";

export default function UpdateQByIdComp({ updatedQById }) {
    console.log(updatedQById);
    
    if (!updatedQById.data) {
        return <div className="p-4 bg-gray-100">Fetching data...</div>;
    }

    return (
        <>
            <div className="p-4 bg-yellow-300">
                <div className="text-lg font-bold mb-4">Fetch status: {updatedQById.message}</div>
                <div className="grid gap-4">
                    {updatedQById.data.map((question) => (<Question questiontype="updatebyID" questionData={question} key={question.Id} />))}
                </div>
            </div>
        </>
    );
}