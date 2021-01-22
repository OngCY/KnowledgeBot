import React, {useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import * as action from "../../store/actions";

function BotList(){ 
    const report = useSelector(state => state.report.item)
    const reportLoading = useSelector(state => state.report.loading)
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.getreportByID);
    }, [])

        return (
     
            <div>
               {reportLoading}
          {report.reportContent}
        </div>
        
    );
};


export default BotList;