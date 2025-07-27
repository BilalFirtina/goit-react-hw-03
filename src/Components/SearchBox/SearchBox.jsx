import style from "./SearchBox.module.css";
const SearchBox = ({ searchFunction }) => {
  return (
    <>
      <p className={style.searchBoxText}>Find contacts by name</p>
      <input type="text" onChange={searchFunction} />
    </>
  );
};

export default SearchBox;
