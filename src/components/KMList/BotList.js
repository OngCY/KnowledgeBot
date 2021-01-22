import React, {useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import * as action from "../../store/actions";

function BotList(){ 
    const botList = useSelector(state => state.botList.items)
    const botListLoading = useSelector(state => state.botList.loading)
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.getBot);
    }, [])

        return (
     
            <div>
               {botListLoading}
            <ul>
            {botList.map(el => (
            <li key={el.id}>{el.id}</li>
            ))}
        </ul>
        </div>
        
    );
};


export default BotList;