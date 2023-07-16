import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    let handleExitClick = () => {
        window.location = '/'
    }


    return (
        <div>
            <Button color="info" style={{ float: 'right', padding: '5px 20px' }} onClick={handleOpen}>Exit <KeyboardArrowRightSharpIcon /> </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography className='card-center' id="transition-modal-title" variant="h6" component="h2">
                            Attention
                        </Typography>
                        <Typography className='card-center' id="transition-modal-description" variant="p" component="p">
                            Are you sure you want to exit this quiz? Your progress will not be saved.
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>

                            <div className='button-center'>
                                <Button style={{ margin: '5px' }} onClick={handleExitClick} startIcon={<CheckIcon />}>
                                    Exit
                                </Button>
                                <Button style={{ margin: '5px' }} onClick={handleClose} endIcon={<HighlightOffIcon />}>
                                    Cancel
                                </Button>
                            </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}