"use client"

// import { FaHome, FaInfoCircle } from 'react-icons/fa'; // Import icons from a library

export default function Banner() {

    return (
        <>
            <main className="">
                <div className="bg-blue-500 text-white p-4 mb-4 text-center flex items-center justify-between">
                    <div>
                        <a href="https://docs.google.com/document/d/11mtN6_dJhujgelAYqBzQqaRrU1JlJaKJrGqeFpsleW8/edit?pli=1" className="text-white mr-4">API Documentation</a>
                    </div>
                    <h1 className="text-2xl font-bold">Quiz API Frontend</h1>
                </div>
            </main>
        </>
    );
}