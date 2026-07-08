import { useState } from "react";
import { useDatabase } from "../context/DatabaseContext";

function Chat() {
  const [question, setQuestion] = useState("");
  const { activeDatabase, loading } = useDatabase();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        AI Database Assistant
      </h1>

      <div className="bg-white shadow rounded-lg p-5 border mb-8">
        <h2 className="font-semibold text-lg mb-4">
          Connected Database
        </h2>
        {loading ? (
          <p className="text-gray-500">
            Loading...
          </p>
        ) : activeDatabase ? (
          <div>
            <p className="text-green-600 font-semibold text-lg">
              🟢 Connected
            </p>
            <div className="mt-3 space-y-2">
              <p>
                <strong>Name:</strong>{" "}
                {activeDatabase.display_name}
              </p>
              <p>
                <strong>Database:</strong>{" "}
                {activeDatabase.database_name}
              </p>
              <p>
                <strong>Host:</strong>{" "}
                {activeDatabase.host}
              </p>
              <p>
                <strong>Port:</strong>{" "}
                {activeDatabase.port}
              </p>
              <p>
                <strong>Type:</strong>{" "}
                {activeDatabase.db_type.toUpperCase()}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-red-500 font-semibold">
              🔴 No Active Database
            </p>
            <p className="text-gray-500 mt-2">
              Connect a database before asking questions.
            </p>
          </div>
        )}
      </div>

      <div className="bg-white shadow rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">
          Ask your database
        </h2>
        <textarea
          rows="5"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border rounded-lg p-4"
          placeholder="Example: Show me the top 10 customers by sales."
        />
        <button
          disabled={!activeDatabase}
          className={`mt-5 px-6 py-3 rounded-lg text-white ${
            activeDatabase
              ? "bg-cyan-600 hover:bg-cyan-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Generate SQL
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6 border mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Generated SQL
        </h2>
        <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
No SQL generated yet.
        </pre>
      </div>

      <div className="bg-white shadow rounded-lg p-6 border mt-8">
        <h2 className="text-xl font-semibold mb-4">
          AI Explanation
        </h2>
        <p className="text-gray-600">
          The explanation will appear here.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6 border mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Query Results
        </h2>
        <p className="text-gray-500">
          Execute a query to view results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow rounded-lg border p-5">
          <h2 className="font-semibold">
            Execution Time
          </h2>
          <p className="mt-3">
            --
          </p>
        </div>
        <div className="bg-white shadow rounded-lg border p-5">
          <h2 className="font-semibold">
            Rows Returned
          </h2>
          <p className="mt-3">
            --
          </p>
        </div>
      </div>
    </div>
  );
}
export default Chat;