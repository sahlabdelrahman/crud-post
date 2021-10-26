import { useState, useEffect } from "react";

function SearchPost() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    // const results = !searchValue
  }, [searchValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchValue}
      />
    </div>
  );
}

export default SearchPost;
