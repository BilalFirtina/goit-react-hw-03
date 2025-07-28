import style from "./SearchBox.module.css";
const SearchBox = ({ onChange }) => {
  return (
    <>
      <p className={style.searchBoxText}>Find contacts by name</p>
      <input
        type="text"
        onChange={onChange}
        placeholder="Arama Yapabilirsiniz."
      />
    </>
  );
};

export default SearchBox;
