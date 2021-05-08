import DetailBar from "./DetailBar";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <div
      className="navbar"
      style={{ display: "flex", gridGap: "10px", marginBottom: "30px" }}
    >
      <DetailBar />
      <SearchBar />
    </div>
  );
}
