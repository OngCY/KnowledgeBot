import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Button, Modal } from 'react-bootstrap';
//import { useDispatch, useSelector} from "react-redux";
//import * as action from "../../store/actions";

const ReportIdList = (props) => {

    //const reportId = id.prop;
    //const modalState = useSelector(state => state.modals.displayReportModal);
    //const report = useSelector(state => state.report.item);
    //const dispatch = useDispatch();

    /*useEffect(() => {
      dispatch(action.getreportByID(reportId));
    }, [dispatch])

    function handleModalShow(id){
      dispatch(action.getreportByID(id));
      dispatch(action.openReportDialog()); 
    }

    function handleModalClose(){
      dispatch(action.closeReportDialog());
    }*/

    return(
      <div>
        <Link to={`/report/${(props.reportId)}`}>Report ID:
          {JSON.stringify(props.reportId)}
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