import { deleteDatabase } from "../../services/databaseService";

function DeleteDatabaseDialog({
  database,
  onClose,
  onSuccess,
}) {

  async function handleDelete() {
    const response = await deleteDatabase(database.id);
    alert(response.message);
    if (response.success) {
      onSuccess();
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-[400px]">
        <h2 className="text-xl font-bold">
          Delete Database
        </h2>
        <p className="my-5">
          Delete "{database.display_name}"?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteDatabaseDialog;