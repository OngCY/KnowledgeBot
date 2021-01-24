import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux";
import * as action from "../../store/actions";
import ReportDisplay from './ReportDisplay';

function DisplayReportModal(id){

    const reportId = id.prop;
    const modalState = useSelector(state => state.modals.displayReportModal);
    const report = useSelector(state => state.report.item);
    const dispatch = useDispatch();

    function handleModalShow(id){
      dispatch(action.getreportByID(id));
      dispatch(action.openReportDialog()); 
      console.log("id: " + reportId);
    }

    function handleModalClose(){
      dispatch(action.closeReportDialog());
    }

    return(
      <div> 
        <Button onClick={() => handleModalShow(reportId)}>{JSON.stringify(reportId)}</Button>
        <Modal show={modalState} onHide={handleModalClose}>
          <Modal.Header closeButton onClick={() => handleModalClose()}>
          <Modal.Title>Display Report</Modal.Title>
          </Modal.Header>
          <ReportDisplay prop={JSON.stringify(report)}/>
        </Modal>          
      </div>
    )
}
    
export default DisplayReportModal;