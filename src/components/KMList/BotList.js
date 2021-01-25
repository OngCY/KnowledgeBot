import React, { useEffect } from "react";
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";
import DisplayReportModal from "./DisplayReportModal";

function BotList() {
    const botList = useSelector(state => state.botList.items)
    const bot = useSelector(state => state.botList.botDetails)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.getBotList());
        //console.log(JSON.stringify(botList));
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
                    <li><Button onClick={() => retrieveBot(el.id)}>{el.jobName}</Button></li>
                ))}    
            </ul>
            <ul>
                {bot && bot.taggedReports && bot.taggedReports.map(id => (
                    <li><DisplayReportModal prop={id}/></li>
                ))}
                </ul>
           {/*{JSON.stringify(botDetails)}*/}
        </div>    
    );
};

export default BotList;