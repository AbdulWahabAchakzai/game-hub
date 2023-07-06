import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dcc2f07e6ad34a7599997421344a911d",
  },
});
