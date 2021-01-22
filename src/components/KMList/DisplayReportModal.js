import React from 'react'
import { Button,Modal } from 'react-bootstrap'
import FormCreate from './FormCreate'
import { useDispatch ,useSelector} from "react-redux";
import * as action from "../../store/actions";

function DisplayReportModal(){
    //const botList = useSelector(state => state.botList.items)
    const modalState = useSelector(state => state.modals.DisplayReportModal);

    const dispatch = useDispatch();

    function showReport(){
      dispatch(action.getreportByID());
    }

    function handleModalShow(){
      //dispatch(action.getBot());
      dispatch(action.openReportDialog());     
    }

    function handleModalClose(){
      //dispatch(action.closeDialog());
      dispatch(action.closeReportDialog());
    }

    return(
      <div>
                <Button variant="primary" onClick={() => handleModalShow()}>
                  Create Bot 
                </Button>
                <Modal show={modalState}  onHide={handleModalClose}>
                    <Modal.Header closeButton onClick={() => handleModalClose()}>
                    <Modal.Title>Create Bot</Modal.Title>
                    </Modal.Header>
                    <FormCreate/>
                    
                </Modal>
                <div className="Report-Display" style={{width: '100%' }}>
            <Button variant="primary" onClick={() => showReport()}>
                  show Report
                </Button>
              
        </div>

            </div>
        )
    }
    


export default DisplayReportModal;