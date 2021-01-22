import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux";
import * as action from "../../store/actions";
import ReportDisplay from './ReportDisplay';

function DisplayReportModal(props){

    const botDetails = props;
    const taggedReports = props.taggedReports;
    const modalState = useSelector(state => state.modals.displayReportModal);
    const dispatch = useDispatch();

    function handleModalShow(id){
      dispatch(action.getreportByID(id));
      dispatch(action.openReportDialog());     
    }

    function handleModalClose(){
      dispatch(action.closeReportDialog());
    }

    return(
      <div>
        <ul>
          {botDetails !== null && taggedReports.map(el => (
            <li key={el.id}><Button onClick={() => handleModalShow(el)}>{JSON.stringify(el)}</Button></li>
          ))}
          <Modal show={modalState} onHide={handleModalClose}>
          <Modal.Header closeButton onClick={() => handleModalClose()}>
          <Modal.Title>Display Report</Modal.Title>
          </Modal.Header>
          <ReportDisplay/>
          </Modal>         
        </ul>             
      </div>
    )
}
    
export default DisplayReportModal;