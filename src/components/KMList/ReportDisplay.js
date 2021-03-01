import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import * as action from "../../store/actions";
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import stripquotes from 'stripquotes';

const ReportDisplay = () => {

    const { id } = useParams();
    const report = useSelector(state => state.report.item);
    const dispatch = useDispatch();

    useEffect(() => {
      console.log("report id: " + id);
      dispatch(action.getreportByID(id));
    }, [dispatch])

    return (  
        <div className="Report-Display" style={{width: '100%' }}>
            <h3>Display Report</h3>
            <br />
            <TextField 
                type='text'
                label = 'ID'
                variant='outlined' 
                inputProps={{ readOnly: true }}
                //value={stripquotes(JSON.stringify(report.reportDocid))}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Date'
                variant='outlined' 
                inputProps={{ readOnly: true }}
                //value={stripquotes(JSON.stringify(report.reportDate))}
            />
            <br /><br />
             {/*
            <div className="blog-list">
                {reports.taggedEntities.map(entity => (
                    <div className="blog-preview" key={entity.entityName} >
                    <Link to={`/entity/${entity.entityName}`}>
                        <h2>{ entity.entityName }</h2>
                    </Link>
                    &nbsp;
                     </div>
                ))}
            </div>*/}
            <TextField
                type='text'
                label = 'Entities'
                variant='outlined'
                inputProps={{ readOnly: true }}
                //value={stripquotes(JSON.stringify(report.taggedEntities))}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Title'
                variant='outlined' 
                style ={{width: '50%'}}
                inputProps={{ readOnly: true }}
                //value={stripquotes(JSON.stringify(report.reportTitle))}
            />
            <br /><br />
            <TextField 
                type='text' 
                label = 'Content'  
                variant='outlined'
                multiline
                style ={{width: '50%'}}
                inputProps={{ readOnly: true }}
                //value={stripquotes(JSON.stringify(report.reportContent))}
            />
        </div>
    );
}
 
export default ReportDisplay;