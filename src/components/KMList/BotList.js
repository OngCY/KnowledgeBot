import React, {useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import * as action from "../../store/actions";

function BotList(){ 
    const botList = useSelector(state => state.botList.items)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.getBot);
    }, [dispatch])

        return (
     
            <div>
                {botList}
            <ul>
            {botList.map(el => (
            <li key={el.id}>{el}</li>
            ))}
        </ul>
        </div>
        
    );
};


export default BotList;