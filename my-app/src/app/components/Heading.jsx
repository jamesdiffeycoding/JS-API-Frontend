export default function Heading({ headingName, onClick }) {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-blue-500">{headingName}</h2>
            <button className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded border border-gray-400 hover:bg-gray-300 hover:text-gray-700" onClick={onClick}>Toggle</button>
        </div>
    );
}
