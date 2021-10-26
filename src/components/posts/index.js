import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../store/actions/actions";

import { Container } from "@mui/material";

import Post from "../post/index";
import HeaderOfPosts from "./headerOfPosts";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function PostsComponent() {
  const { posts, loading } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundColor: "#F9FAFD",
      }}
    >
      <Container>
        <TableContainer style={{ padding: "20px" }} component={Paper}>
          <HeaderOfPosts
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            postsLength={posts.length}
          />
          <Table
            style={{ minWidth: "900px" }}
            sx={{ minWidth: 700 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <tr>
                  <td>
                    <p style={{ paddingLeft: "15px" }}>Loading...</p>
                  </td>
                </tr>
              ) : posts.length > 0 ? (
                posts
                  // eslint-disable-next-line array-callback-return
                  ?.filter((post) => {
                    if (post.title === searchTerm) {
                      return post;
                    } else if (
                      post.title
                        .toLowerCase()
                        .includes(searchTerm.toLocaleLowerCase())
                    ) {
                      return post;
                    }
                  })
                  .map((post) => (
                    <Post
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      body={post.body}
                    />
                  ))
              ) : (
                <tr>
                  <td>
                    <p style={{ paddingLeft: "15px" }}>No posts to show</p>
                  </td>
                </tr>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default PostsComponent;
