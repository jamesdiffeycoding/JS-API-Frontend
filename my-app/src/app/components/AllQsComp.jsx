"use client"
import Question from "./Question";

export default function AllQsComp({ allQs }) {
    if (!allQs.data) {
        return <div className="p-4 bg-gray-100">Fetching data... The server is spinning up... If this takes more than 30 seconds, please contact the administrator.</div>;
    }

    return (
        <>
            <div className="p-4 bg-blue-200">
                <div className="text-lg font-bold mb-4">Fetch status: {allQs.message}</div>
                <div className="grid gap-4">
                    {allQs.data.map((question) => 
                        (<Question questiontype="getAllQuestions" questionData={question} key={question.Id} />)
                    )}
                </div>
            </div>
        </>
    );
}