import Typography from "@mui/material/Typography";

import { Container } from "@mui/material";

function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <Typography variant="body1" color="white">
          © 2021 Crud
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
