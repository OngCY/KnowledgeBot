import React, { useEffect } from 'react';
//import { Button, Modal } from 'react-bootstrap';
//import { useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import * as action from "../../store/actions";
//import ReportDisplay from './ReportDisplay';

function ReportIdList(props) {

    //const reportId = id.prop;
    //const modalState = useSelector(state => state.modals.displayReportModal);
    //const report = useSelector(state => state.report.item);
    //const dispatch = useDispatch();

    /*useEffect(() => {
      dispatch(action.getreportByID(reportId));
    }, [dispatch])*/

    /*function handleModalShow(id){
      dispatch(action.getreportByID(id));
      dispatch(action.openReportDialog()); 
    }

    function handleModalClose(){
      dispatch(action.closeReportDialog());
    }*/

    return(
      <div>
        <Link to={`/report/${(props.props)}`}>Report ID:
          {JSON.stringify(props)}
        </Link>
        
        {/*JSON.stringify(report)}*/};   
        {/*<Button onClick={() => handleModalShow(reportId)}>{JSON.stringify(reportId)}</Button>*/}
        {/*<Modal style={{width: '100%' }} show={modalState} onHide={handleModalClose}>
          <Modal.Header closeButton onClick={() => handleModalClose()}>
          <Modal.Title>Display Report</Modal.Title>
          </Modal.Header>
          </Modal>*/}
        {/*<ReportDisplay report={report}/> */} 
      </div>
    )
}
    
export default ReportIdList;