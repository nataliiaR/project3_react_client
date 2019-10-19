import axios from "axios";

export default {
  // Gets schedule
  getSchedule: function() {
    return axios.get("/api/schedule");
  },
  // Gets the recipe with the given id
  getRecipe: function(id) {
    return axios.get("/api/recipe/" + id);
  },
  // Deletes the recipe with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipe/" + id);
  }
};
