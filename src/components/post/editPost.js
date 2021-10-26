import { useEffect, useState, forwardRef } from "react";
import { useDispatch } from "react-redux";

import { editPostAction } from "../../store/actions/actions";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditPost({ id, title, body }) {
  const dispatch = useDispatch();

  const [details, setDetails] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    setDetails({
      title: title,
      body: body,
    });
  }, [title, body]);

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(editPostAction(id, details));

    await handleClose();
  };

  return (
    <div>
      <EditOutlinedIcon
        onClick={() => handleClickOpen()}
        color="action"
        style={{ marginRight: "10px", cursor: "pointer" }}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="dialog-slide"
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit the post, you must enter the new title and description
          </DialogContentText>
          <form id="editForm" onSubmit={handleUpdate}>
            <TextField
              margin="dense"
              id="title"
              name="title"
              value={details.title}
              onChange={handleChange}
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              margin="dense"
              id="body"
              name="body"
              value={details.body}
              onChange={handleChange}
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="editForm">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditPost;
