"use client"
import Question from "./Question";

export default function DeleteQByIdComp({ deletedQById }) {
    console.log(deletedQById);
    
    if (!deletedQById.data) {
        return <div className="p-4 bg-gray-100">Fetching data...</div>;
    }

    return (
        <>
            <div className="p-4 bg-red-300">
                <div className="text-lg font-bold mb-4">Fetch status: {deletedQById.message}</div>
                <div className="grid gap-4">
                    {deletedQById.data.map((question) => (
                        <Question questiontype="deletebyID" questionData={question} key={question.Id} />
                    ))}
                </div>
            </div>
        </>
    );
}