import { Link } from "react-router-dom";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

import ViewPost from "./viewPost";
import EditPost from "./editPost";
import DeletePost from "../../components/post/deletePost";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Post({ id, title, body }) {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <Link style={{ textDecoration: "none" }} to={`/posts/${id}`}>
          {title}
        </Link>
      </StyledTableCell>
      <StyledTableCell style={{ display: "flex" }}>
        <ViewPost id={id} title={title} body={body} />
        <EditPost id={id} title={title} body={body} />
        <DeletePost id={id} />
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default Post;
