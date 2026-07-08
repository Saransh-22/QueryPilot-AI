import { useEffect, useState } from "react";
import { listDatabases, activateDatabase } from "../services/databaseService";
import DatabaseCard from "../components/database/DatabaseCard";
import ConnectDatabaseModal from "../components/database/ConnectDatabaseModal";
import RenameDatabaseModal from "../components/database/RenameDatabaseModal";
import DeleteDatabaseDialog from "../components/database/DeleteDatabaseDialog";
import { useDatabase } from "../context/DatabaseContext";

function Database() {
  const [databases, setDatabases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [renameDatabaseData, setRenameDatabaseData] = useState(null);
  const [deleteDatabaseData, setDeleteDatabaseData] = useState(null);
  const { fetchActiveDatabase } = useDatabase();

  async function fetchDatabases() {
    try {
      setLoading(true);
      const response = await listDatabases();
      setDatabases(response.databases);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch databases");
    } finally {
      setLoading(false);
    }
  }

  async function refreshDatabaseState() {
    await fetchDatabases();
    await fetchActiveDatabase();
  }

  useEffect(() => {
    refreshDatabaseState();
  }, []);

  async function handleActivate(id) {
    const response = await activateDatabase(id);
    alert(response.message);
    if (response.success) {
      await refreshDatabaseState();
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Database Connections
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your connected databases
          </p>
        </div>

        <button
          onClick={() => setShowConnectModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Connect Database
        </button>
      </div>

      {loading ? (
        <div className="text-center py-20">
          Loading databases...
        </div>
      ) : databases.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center">
          <div className="text-6xl">
            🗄️
          </div>
          <h2 className="text-2xl font-bold mt-5">
            No Databases Connected
          </h2>
          <p className="text-gray-500 mt-3">
            Connect your first PostgreSQL database to begin.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {databases.map((database) => (
            <DatabaseCard
              key={database.id}
              database={database}
              onActivate={handleActivate}
              onRename={setRenameDatabaseData}
              onDelete={setDeleteDatabaseData}
            />
          ))}
        </div>
      )}

      {showConnectModal && (
        <ConnectDatabaseModal
          onClose={() => setShowConnectModal(false)}
          onSuccess={refreshDatabaseState}
        />
      )}

      {renameDatabaseData && (
        <RenameDatabaseModal
          database={renameDatabaseData}
          onClose={() => setRenameDatabaseData(null)}
          onSuccess={refreshDatabaseState}
        />
      )}

      {deleteDatabaseData && (
        <DeleteDatabaseDialog
          database={deleteDatabaseData}
          onClose={() => setDeleteDatabaseData(null)}
          onSuccess={refreshDatabaseState}
        />
      )}
    </div>
  );
}
export default Database;