import { useState } from "react";

function Database() {
  const [form, setForm] = useState({
    dbType: "PostgreSQL",
    host: "",
    port: "",
    database: "",
    username: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Database Connections
      </h1>

      {/* Current Connection */}
      <div className="bg-white border rounded-lg shadow p-6 mb-8">

        <h2 className="text-xl font-semibold mb-3">
          Current Connection
        </h2>

        <p className="text-red-500">
          ● No Database Connected
        </p>

      </div>

      {/* Connection Form */}
      <div className="bg-white border rounded-lg shadow p-6">

        <h2 className="text-xl font-semibold mb-6">
          Add New Connection
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 font-medium">
              Database Type
            </label>

            <select
              name="dbType"
              value={form.dbType}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option>PostgreSQL</option>
              <option>MySQL</option>
              <option>SQLite</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Host
            </label>

            <input
              type="text"
              name="host"
              value={form.host}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="localhost"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Port
            </label>

            <input
              type="text"
              name="port"
              value={form.port}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="5432"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Database Name
            </label>

            <input
              type="text"
              name="database"
              value={form.database}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>
        </div>

        <button
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Connect Database
        </button>
      </div>

      {/* Saved Connections */}
      <div className="bg-white border rounded-lg shadow p-6 mt-8">

        <h2 className="text-xl font-semibold mb-4">
          Saved Connections
        </h2>

        <p className="text-gray-500">
          No saved database connections.
        </p>

      </div>
    </div>
  );
}

export default Database;