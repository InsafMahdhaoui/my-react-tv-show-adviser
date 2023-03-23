import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { BACKDROP_BASE_URL } from "./config";
import "./global.css";
import { Logo } from "./components/Logo/Logo";
import s from "./style.module.css";
import logo from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    //pour gerer les erreurs produits par le serveurs par exp on genere des try catch
    try {
      const populars = await TVShowAPI.fetchPopulars();
      if (populars.length > 0) {
        setCurrentTVShow(populars[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche des series populaires ");
    }
  }

  async function fetchRecommendations(tvShowId) {
    //pour gerer les erreurs produits par le serveurs par exp on genere des try catch
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recommendations.length > 0) {
        setRecommendationList(recommendations.slice(0, 10)); //slice est une fonction js permet de decouper un tableau selon le nombre citer en parametres
      }
    } catch {
      alert("Erreur durant la recherche des series recommendees ");
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);
  // function setCurrentTVShowFromRecommendation(tvShow) {
  //   alert(JSON.stringify(tvShow));
  // }

  console.log("***", currentTVShow);
  console.log("***", recommendationList);

  async function searchTVShow(tvShowName) {
    //pour gerer les erreurs produits par le serveurs par exp on genere des try catch
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch {
      alert("Erreur durant la recherche de la serie ");
    }
  }
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      {/*pour la partie header (search bar et logo)*/}
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      {/*pour la partie meduim (description et rating)*/}
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      {/*pour la partie footer (recomandation list)*/}
      <div className={s.recommended_show}>
        {recommendationList && recommendationList.length > 0 && (
          <TVShowList
            onClickItem={setCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}
