import { useState } from "react";

function History() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Query History
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search previous queries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3 mb-8"
      />

      {/* History Table */}
      <div className="bg-white border rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 border">Question</th>
              <th className="p-4 border">Generated SQL</th>
              <th className="p-4 border">Status</th>
              <th className="p-4 border">Time</th>
              <th className="p-4 border">Action</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td
                colSpan="5"
                className="text-center p-10 text-gray-500"
              >
                No query history available.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;