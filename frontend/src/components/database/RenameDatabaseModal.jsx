import { useState } from "react";
import { renameDatabase } from "../../services/databaseService";

function RenameDatabaseModal({
  database,
  onClose,
  onSuccess,
}) {
  const [name, setName] = useState(
    database.display_name
  );
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await renameDatabase(
      database.id,
      {
        display_name: name,
      }
    );
    alert(response.message);
    if (response.success) {
      onSuccess();
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[450px]">
        <h2 className="text-xl font-bold mb-5">
          Rename Database
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border p-3 rounded w-full mb-5"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="border px-5 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RenameDatabaseModal;