const API_ROOT = "http://localhost:3000";
const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: token,
};
const fileHeaders = {
  Authorization: token,
};

const getItems = () => {
  return fetch(`${API_ROOT}/items`, { headers: headers }).then((res) =>
    res.json()
  );
};

const login = (data) => {
  return fetch(`${API_ROOT}/sessions`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers,
  }).then((res) => res.json());
};

const uploadFile = (data) => {
  return fetch(`${API_ROOT}/items`, {
    method: "POST",
    headers: fileHeaders,
    body: JSON.stringify(data),
  }).then((res) => res.json);
};

export default {
  auth: {
    login: login,
    getCurrentUser: getCurrentUser,
  },
  items: {
    getItems,
  },
  itemsPost: {
    uploadFile: uploadFile,
  },
};
