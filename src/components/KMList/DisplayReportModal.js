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
    }

    function handleModalClose(){
      dispatch(action.closeReportDialog());
    }

    return(
      <div> 
        <Button onClick={() => handleModalShow(reportId)}>{JSON.stringify(reportId)}</Button>
        <Modal style={{width: '100%' }} show={modalState} onHide={handleModalClose}>
          <Modal.Header closeButton onClick={() => handleModalClose()}>
          <Modal.Title>Display Report</Modal.Title>
          </Modal.Header>
          <ReportDisplay report={report}/>
        </Modal>          
      </div>
    )
}
    
export default DisplayReportModal;