import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import * as action from "../../store/actions";
import { Link, useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import stripquotes from "stripquotes";
import axios from 'axios';
import * as CONSTANTS from '../../global';
import moment from 'moment'
import ReactHtmlParser from 'react-html-parser'

const ReportDisplay = () => {

    const { id } = useParams();
    //const reportredux = useSelector(state => state.report.item);
    const dispatch = useDispatch();
    const [report, setReport] = useState(null);
    let reportContent="";
    
    useEffect(() => {
      console.log("report id: " + id);     
      //dispatch(action.getreportByID(id));
      axios.get(CONSTANTS.GLOBAL_URL + "/report/retrieveById/" + id)
      .then((response) => {
        //reportContent = stripquotes(JSON.stringify(response.data.reportContent));
        //console.log("report content " + reportContent);

        setReport(response);      
        console.log("response: " + JSON.stringify(response));
      }, (error) => {
        console.log("error: " + JSON.stringify(error));
      });
    }, [dispatch])

    return (
        report !== null ? (
        <div className="Report-Display" style={{width: '100%' }}>
            <br />
            <h3>Display Report</h3>
            <br /><br />
            <h6>Tagged Entities:</h6>
            {report.data.taggedEntities.map(entity => (
               <Link className="tagged-links" to={`/entity/${entity}`}>
                    { entity }
                </Link>
            ))}
            <br /><br /><br />
            <TextField 
                type='text'
                label = 'ID'
                variant='outlined' 
                inputProps={{ readOnly: true }}
                value={stripquotes(JSON.stringify(report.data.reportDocid))}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Date'
                variant='outlined' 
                style ={{width: '50%'}}
                inputProps={{ readOnly: true }}
                value={stripquotes(JSON.stringify(moment(report.data.reportDate).format("DD/MM/YYYY")))}
            />
            <br /><br />                       
            <TextField 
                type='text'
                label = 'Title'
                variant='outlined' 
                style ={{width: '50%'}}
                inputProps={{ readOnly: true }}
                value={stripquotes(JSON.stringify(report.data.reportTitle))}
            />
            <br /><br />
            <TextField 
                type='text' 
                label = 'Content'  
                variant='outlined'
                multiline
                style ={{width: '50%'}}
                inputProps={{ readOnly: true }}
              //  value={stripquotes(JSON.stringify(report.data.reportContent))}
              value = {ReactHtmlParser(report.data.reportContent)}
            />
        </div>
        ) : (
           <div>Loading...</div> 
        )
    );
}
 
export default ReportDisplay;