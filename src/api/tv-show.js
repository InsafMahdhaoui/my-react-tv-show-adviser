import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return response.data.results;
    /* dans axios la reponse est toujours stockee dans l'objet data donc on met .data
    et on veut recuperer simplement le tableau des resultat afficher dans jsonViewer donc on met .results*/
  }
  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`,
    );
    return response.data.results;
  }
  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`,
    );
    return response.data.results;
  }
}
