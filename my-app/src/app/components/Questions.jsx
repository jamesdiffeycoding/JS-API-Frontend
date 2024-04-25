"use client"

export default function Questions({ props }) {
    console.log(props.data);
    
    if (!props.data) {
        return <div className="p-4 bg-gray-100">Fetching data...</div>;
    }

    return (
        <>
            <div className="p-4 bg-gray-100">
                <div className="text-lg font-bold mb-4">Fetch status: {props.message}</div>
                <div className="grid gap-4">
                    {props.data.map((question) => (
                        <div key={question.Id} className="p-4 border rounded-md shadow-md">
                            <h3 className="text-xl font-bold mb-2">{question.Question}</h3>
                            <p className="mb-1">Answer A: {question['Answer A']}</p>
                            <p className="mb-1">Answer B: {question['Answer B']}</p>
                            <p className="mb-1">True Answer: {question['True Answer']}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}