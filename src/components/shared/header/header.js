import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { Container } from "@mui/material";

function Header() {
  return (
    <header
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Typography variant="h5" component="div">
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to={`/`}
          >
            Crud
          </Link>
        </Typography>
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "15px",
              fontWeight: "bold",
            }}
            to={`/`}
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
            to={`/`}
          >
            Posts
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Header;
