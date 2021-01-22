import React, {useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import * as action from "../../store/actions";

function BotList(){ 
    const report = useSelector(state => state.report.item)
    const reportLoading = useSelector(state => state.report.loading)
   
    

        return (
     
            <div>
               {reportLoading}
               {report.reportTitle}
          {report.reportContent}
        </div>
        
    );
};


export default BotList;