import { useState } from "react";

function Chat() {
    const [question, setQuestion] = useState("");
    return (
        <div className="max-w-6xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-8">
                AI Database Assistant
            </h1>

            {/* Database Status */}
            <div className="bg-white shadow rounded-lg p-5 border mb-8">
                <h2 className="font-semibold text-lg">
                    Connected Database
                </h2>

                <p className="text-green-600 mt-2">
                    ● PostgreSQL (Not Connected Yet)
                </p>
            </div>

            {/* User Question */}
            <div className="bg-white shadow rounded-lg p-6 border">

                <h2 className="text-xl font-semibold mb-4">
                    Ask your database
                </h2>

                <textarea
                    rows="5"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full border rounded-lg p-4"
                    placeholder="Example: Show me top 10 customers by sales"
                />

                <button
                    className="mt-5 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg"
                >
                    Generate SQL
                </button>
            </div>

            {/* SQL */}
            <div className="bg-white shadow rounded-lg p-6 border mt-8">
                <h2 className="text-xl font-semibold mb-4">
                    Generated SQL
                </h2>
                <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto">No SQL generated yet.</pre>
            </div>

            {/* Explanation */}
            <div className="bg-white shadow rounded-lg p-6 border mt-8">
                <h2 className="text-xl font-semibold mb-4">
                    AI Explanation
                </h2>

                <p className="text-gray-600">The explanation will appear here.</p>
            </div>

            {/* Results */}
            <div className="bg-white shadow rounded-lg p-6 border mt-8">
                <h2 className="text-xl font-semibold mb-4">
                    Query Results
                </h2>

                <p className="text-gray-500">Execute a query to view results.</p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white shadow rounded-lg border p-5">
                    <h2 className="font-semibold">Execution Time</h2>
                    <p className="mt-3">
                        --
                    </p>
                </div>

                <div className="bg-white shadow rounded-lg border p-5">
                    <h2 className="font-semibold">Rows Returned</h2>
                    <p className="mt-3">
                        --
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Chat;