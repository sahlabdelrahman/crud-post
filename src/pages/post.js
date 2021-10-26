import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPost } from "../store/actions/actions";

import MainLayout from "../layouts/mainLayout";

import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";

function Post() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { post, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return (
    <MainLayout>
      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          paddingLeft: "15px",
          paddingRight: "15px",
          backgroundColor: "#F9FAFD",
          height: "100vh",
        }}
      >
        <Container
          style={{
            backgroundColor: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          component={Paper}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2>{post?.title}</h2>
              <p>{post?.body}</p>
            </div>
          )}
        </Container>
      </div>
    </MainLayout>
  );
}

export default Post;
