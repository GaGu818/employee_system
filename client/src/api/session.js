import requests from "../utils/requests";

export function getUser() {
  return requests.get("/api/get");
}

export function getUserID(id) {
  return requests.get(`/api/get/${id}`);
}

export function addUser(data) {
  return requests.post("/api/post", data);
}

export function updateUser(id, data) {
  return requests.put(`/api/update/${id}`, data);
}

export function deleteUser(id) {
  return requests.delete(`/api/remove/${id}`);
}
