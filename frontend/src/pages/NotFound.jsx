import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-8xl font-bold text-red-500">
        404
      </h1>

      <h2 className="text-3xl mt-4">
        Page Not Found
      </h2>

      <Link
        to="/"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;