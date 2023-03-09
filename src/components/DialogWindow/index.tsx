import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@mui/material';
import Link from 'next/link';

type DialogWindowProps = {
  onclose: () => void;
  isDialogOpen: boolean;
  message: string;
};
const DialogWindow: React.FC<DialogWindowProps> = ({ onclose, isDialogOpen, message }) => {

  return (
    <div>
      <Dialog
        open={isDialogOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {message}
        </DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onclose()} sx={{ color: "#000" }}>
            Close
          </Button>
          <Button autoFocus onClick={() => onclose}>
            <Link href={"/login"}>
              Login
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DialogWindow;