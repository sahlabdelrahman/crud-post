import { Typography } from "@mui/material";

function HeaderOfPosts({ searchTerm, setSearchTerm, postsLength }) {
  const handleSearch = async (e) => {
    await setSearchTerm(e.target.value);
    // await dispatch(searchPosts(searchTerm));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <div>
        <Typography>{`${postsLength} `} posts</Typography>
      </div>
      <div>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "2px solid #F9FAFD",
          }}
        />
      </div>
    </div>
  );
}

export default HeaderOfPosts;
