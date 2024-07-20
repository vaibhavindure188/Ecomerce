import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function AuthModel({handleClose, open, setOpen, toggle=true}) {
    const[togglePage, setTogglePage] = React.useState(toggle)
    const navigate = useNavigate()
    const closeSigninModal = () =>{
        setOpen(false)
        navigate('/')
    }
  return (
    <div>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
        <Button onClick={closeSigninModal}>close</Button>
          {/* render login and signup component conditionaly */}
          {
            togglePage ? 
                <SignIn setTogglePage={setTogglePage}/> : <SignUp  setTogglePage={setTogglePage}/>
          }
          
        </Box>
      </Modal>
    </div>
  )
}

export default AuthModel
