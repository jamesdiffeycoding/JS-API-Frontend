"use client"
import Question from "./Question";

export default function QByIdComp({ qById }) {
    console.log("hi");
    
    console.log(qById.data);
    if (!qById || !qById.data || !qById.data['Question']) {
        console.log("hi2");
        return <div className="p-4 bg-gray-100">Fetching data...</div>;
    }

    return (
        <>
            <div className="p-4 bg-gray-300">
                <div className="text-lg font-bold mb-4">Fetch status: {qById.message}</div>
                <div className="grid gap-4">
                    <Question questiontype="getbyID" questionData={qById.data} />
                </div>
            </div>
        </>
    );
}
