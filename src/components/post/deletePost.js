import { useState, forwardRef, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { deletePost } from "../../store/actions/actions";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DeletePost({ id }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const _isMounted = useRef(true); // Initial value _isMounted = true

  useEffect(() => {
    return () => {
      // ComponentWillUnmount
      _isMounted.current = false;
    };
  }, []);

  const handleDelete = async () => {
    if (_isMounted.current) {
      await dispatch(deletePost(id));
      handleClose();
    }
  };

  return (
    <div>
      <DeleteOutlinedIcon
        onClick={handleClickOpen}
        color="error"
        style={{ cursor: "pointer" }}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete the post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeletePost;
