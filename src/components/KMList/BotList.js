import React, { useEffect } from "react";
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";

function BotList() {
    const botList = useSelector(state => state.botList.items)
    const botDetails = useSelector(state => state.botList.botDetails)
  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.getBotList());
    }, [dispatch])

    function retrieveBot(id) {
        dispatch(action.getBotByID(id));
    }

    return (

        <div>
            <ul>
                {botList.map(el => (
                    <li key={el.id}><Button onClick={() => retrieveBot(el.id)}>{el.jobName}</Button></li>
                ))}
            </ul>
            <div>
            {JSON.stringify(botDetails)} 
        </div>

        </div>
       
    );
};


export default BotList;