"use client"

export default function QByIdComp({ qById }) {
    console.log("hi")
    
    console.log(qById.data)
    if (!qById) {
        console.log("hi2")
        console.log(qById.data['Question'])

        return <div className="p-4 bg-gray-100">Fetching data...</div>;
    }

    return (
        <>
            <div className="p-4 bg-gray-300">
                <div className="text-lg font-bold mb-4">Fetch status: {qById.message}</div>
                <div className="grid gap-4">
                    <div className="p-4 border rounded-md shadow-md">
                            <h3 className="text-xl font-bold mb-2">{qById.data?.['Question']}</h3>
                            <p className="mb-1">Answer A: {qById.data?.['Answer A']}</p>
                            <p className="mb-1">Answer B: {qById.data?.['Answer B']}</p>
                            <p className="mb-1">True Answer: {qById.data?.['True Answer']}</p> 
                    </div>
                </div>
            </div>
        </>
    );
}