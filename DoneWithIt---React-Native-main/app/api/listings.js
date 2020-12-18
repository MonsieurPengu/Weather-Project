import client from "./client";

const endpoint = "/products";

const getListings = () => client.get(endpoint);


export default {
  getListings,
};
