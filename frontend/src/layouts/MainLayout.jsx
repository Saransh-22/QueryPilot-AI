import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        {children}
      </main>
    </>
  );
}

export default MainLayout;