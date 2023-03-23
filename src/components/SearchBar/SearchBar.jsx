import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function SearchBar({ onSubmit }) {
  function Submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      console.log("***", e.target.value);
      onSubmit(e.target.value);
    }
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={Submit}
        type="text"
        placeholder="Search a tv show you may like"
        className={s.input}
      ></input>
    </>
  );
}
/*e.target.value: permet de recuperer la valeur saisie dans l'input*/
/*e.target.value.trim(): permet de retirer tous les espaces a la fin de ce qui est saisie dans linput*/
