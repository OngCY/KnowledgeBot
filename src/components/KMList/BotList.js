import React, { useEffect } from "react";
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";
import DisplayReportModel from "./DisplayReportModal";

function BotList() {
    const botList = useSelector(state => state.botList.items)
    const botDetails = useSelector(state => state.botList.botDetails)
    //const reportDetails = useSelector(state => state.report.item);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.getBotList());
    }, [dispatch])

    function retrieveBot(id) {
        dispatch(action.getBotByID(id));
    }

    /*function retrieveReport(id) {
        dispatch(action.getreportByID(id));
    }*/

    return (
        <div>
            <ul>
                {botList.map(el => (
                    <li key={el.id}><Button onClick={() => retrieveBot(el.id)}>{el.jobName}</Button></li>
                ))}
            </ul>
            <div>
                <DisplayReportModel bot={botDetails} />            
            </div> 
        </div>    
    );
};

export default BotList;