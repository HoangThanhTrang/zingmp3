import request from "../../plugins/request";

export default {
  async getListHome(params) {
    try {
      const result = await request.get("home", { params });
      return result.data.items;
    } catch (error) {
      return Promise.reject();
    }
  }
};
