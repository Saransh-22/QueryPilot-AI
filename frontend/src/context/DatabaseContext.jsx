import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const DatabaseContext = createContext();

export function DatabaseProvider({ children }) {
  const [activeDatabase, setActiveDatabase] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchActiveDatabase() {
    const token = localStorage.getItem("token");
    if (!token) {
      setActiveDatabase(null);
      setLoading(false);
      return;
    }

    try {
      const response = await api.get("/database/active");
      if (response.data.success) {
        setActiveDatabase(response.data.database);
      } else {
        setActiveDatabase(null);
      }
    } catch (error) {
      console.error(error);
      setActiveDatabase(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchActiveDatabase();
  }, []);

  return (
    <DatabaseContext.Provider
      value={{
        activeDatabase,
        loading,
        fetchActiveDatabase,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  return useContext(DatabaseContext);
}