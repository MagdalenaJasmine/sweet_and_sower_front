const API_ROOT = "http://localhost:3000/";
const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: token,
};
const authHeaders = {
  "X-User-Email": "maggiec@gmail.com",
  "X-User-Token": "FViJQmfn_pBEW5231HW6",
  "Content-Type": "application/json; charset=utf-8",
};

const getItems = () => {
  return fetch(`${API_ROOT}/users`, { headers: headers }).then((res) =>
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

export default {
  auth: {
    login: login,
    getCurrentUser: getCurrentUser,
  },
  items: {
    getItems,
  },
};
