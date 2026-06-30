function Settings() {
  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-white border rounded-lg shadow p-6 space-y-6">

        {/* Theme */}
        <div>
          <h2 className="font-semibold text-lg">
            Theme
          </h2>

          <p className="text-gray-500">
            Light Mode
          </p>
        </div>

        <hr />

        {/* AI Model */}
        <div>
          <h2 className="font-semibold text-lg">
            AI Model
          </h2>

          <p className="text-gray-500">
            Gemini
          </p>

        </div>
        <hr />

        {/* Current Database */}
        <div>

          <h2 className="font-semibold text-lg">
            Connected Database
          </h2>

          <p className="text-gray-500">
            No database connected
          </p>
        </div>
        <hr />

        {/* Logout */}

        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;