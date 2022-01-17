import axios from "axios";

export function getMenuData_One(ctx = null) {
  return axios
    .get(`https://login.guestie.se/api/profiles/328/menus/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}

export function getMenuData_Two(ctx = null) {
  return axios
    .get(`https://login.guestie.se/api/profiles/329/menus/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}

export function getEvents_One(ctx = null) {
  return axios
    .get(`https://login.guestie.se/api/profiles/328/events/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}

export function getEvents_Two(ctx = null) {
  return axios
    .get(`https://login.guestie.se/api/profiles/329/events/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}
