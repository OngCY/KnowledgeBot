import React from 'react'
//import { Button,Modal } from 'react-bootstrap'
import CreateBot from './CreateBot'
//import { useDispatch ,useSelector} from "react-redux";
//import * as action from "../../store/actions";

function CreateBotModal(){
  
  //const botList = useSelector(state => state.botList.items)
  //const modalState = useSelector(state => state.modals.createBotModalDisplay)
  //const dispatch = useDispatch()

  /*function handleModalShow(){
      dispatch(action.openDialog());      
  }

  function handleModalClose(){
      dispatch(action.closeDialog());  
  }*/

  return(
            <div>
                {/*<Button variant="primary" onClick={() => handleModalShow()}>Create Bot </Button>
                <Modal show={modalState}  onHide={handleModalClose}>
                    <Modal.Header closeButton onClick={() => handleModalClose()}>
                    <Modal.Title>Create Bot</Modal.Title>
                    </Modal.Header>
                    <CreateBot/>                  
                </Modal>*/}
                <CreateBot/>
            </div>
  );
}

export default CreateBotModal;