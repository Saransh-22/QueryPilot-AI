import { Link } from "react-router-dom";
import Card from "../components/Card";

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Welcome to QueryPilot AI
        </h1>

        <p className="text-gray-600 mt-2">
          AI-powered Database Copilot for SQL generation, query execution,
          schema understanding and optimization.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Database Status */}
        <Card title="Database Status">
          <p className="text-red-500 font-medium">
            ● No Database Connected
          </p>

          <p className="text-gray-500 mt-2 text-sm">
            Connect a database to start generating SQL queries.
          </p>
        </Card>

        {/* Quick Actions */}
        <Card title="Quick Actions">
          <div className="flex gap-4">
            <Link
              to="/app/database"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Connect Database
            </Link>

            <Link
              to="/app/chat"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
            >
              Start Chat
            </Link>
          </div>
        </Card>

        {/* Recent Queries */}
        <Card title="Recent Queries">
          <p className="text-gray-600">
            No recent queries available.
          </p>
        </Card>

        {/* Tech Stack */}
        <Card title="Project Information">
          <div className="space-y-2">

            <p>
              <strong>Frontend:</strong> React + Tailwind CSS
            </p>

            <p>
              <strong>Backend:</strong> FastAPI
            </p>

            <p>
              <strong>AI Model:</strong> Gemini
            </p>

            <p>
              <strong>Database:</strong> PostgreSQL
            </p>

            <p>
              <strong>Architecture:</strong> REST API
            </p>

          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;