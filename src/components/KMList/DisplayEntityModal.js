import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux";
import * as action from "../../store/actions";
import EntityDisplay from './EntityDisplay';

function DisplayEntityModal(props){

    const botDetails = props;
    const taggedReports = props.taggedReports;
    const modalState = useSelector(state => state.modals.displayEntityModal);
    const dispatch = useDispatch();

    function handleModalShow(name){
      dispatch(action.getEntityByName(name));
      dispatch(action.openEntityDialog());     
    }

    function handleModalClose(){
      dispatch(action.closeEntityDialog());
    }

    return(
      <div>
        <ul>
          {botDetails !== null && taggedReports.map(el => (
            <li key={el.id}><Button onClick={() => handleModalShow(el)}>{JSON.stringify(el)}</Button></li>
          ))}
          <Modal show={modalState} onHide={handleModalClose}>
            <Modal.Header closeButton onClick={() => handleModalClose()}>
            <Modal.Title>Display Entity</Modal.Title>
            </Modal.Header>
            <EntityDisplay/>
          </Modal>         
        </ul>             
      </div>
    )
}
    
export default DisplayEntityModal;