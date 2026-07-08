import api from "../api/axios";

export async function listDatabases() {
  const response = await api.get("/database/list");
  return response.data;
}

export async function connectDatabase(data) {
  const response = await api.post("/database/connect", data);
  return response.data;
}

export async function renameDatabase(connectionId, data) {
  const response = await api.put(
    `/database/${connectionId}`,
    data
  );
  return response.data;
}

export async function deleteDatabase(connectionId) {
  const response = await api.delete(
    `/database/${connectionId}`
  );
  return response.data;
}

export async function activateDatabase(connectionId) {
  const response = await api.put(
    `/database/${connectionId}/activate`
  );
  return response.data;
}