import { useState } from "react";
import { connectDatabase } from "../../services/databaseService";

function ConnectDatabaseModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    db_type: "postgresql",
    host: "localhost",
    port: 5432,
    database_name: "",
    username: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await connectDatabase(form);
    if (response.success) {
      alert(response.message);
      onSuccess();
      onClose();
    } else {
      alert(response.message);
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[500px]">
        <h2 className="text-2xl font-bold mb-5">
          Connect Database
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            name="host"
            value={form.host}
            onChange={handleChange}
            placeholder="Host"
            className="border p-3 w-full rounded mb-3"
          />
          <input
            name="port"
            value={form.port}
            onChange={handleChange}
            placeholder="Port"
            className="border p-3 w-full rounded mb-3"
          />
          <input
            name="database_name"
            value={form.database_name}
            onChange={handleChange}
            placeholder="Database Name"
            className="border p-3 w-full rounded mb-3"
          />
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="border p-3 w-full rounded mb-3"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="border p-3 w-full rounded mb-5"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              className="px-5 py-2 bg-blue-600 text-white rounded-lg"
            >
              Connect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ConnectDatabaseModal;