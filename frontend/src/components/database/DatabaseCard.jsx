import Card from "../Card";

function DatabaseCard({
  database,
  onRename,
  onDelete,
  onActivate,
}) {
  return (
    <Card>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">
            {database.display_name}
          </h2>
          <p className="text-gray-500 mt-2">
            {database.db_type.toUpperCase()}
          </p>
          <p className="text-gray-500">
            {database.host}:{database.port}
          </p>
          <p className="text-gray-500">
            {database.database_name}
          </p>
        </div>
        {database.is_active && (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            Active
          </span>
        )}
      </div>

      <div className="flex gap-3 mt-6">
        {!database.is_active && (
          <button
            onClick={() => onActivate(database.id)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Activate
          </button>
        )}
        <button
          onClick={() => onRename(database)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          Rename
        </button>
        <button
          onClick={() => onDelete(database)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </Card>
  );
}
export default DatabaseCard;