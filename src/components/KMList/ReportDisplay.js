import { useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
//import stripquotes from 'stripquotes';

const ReportDisplay = () => {

    const { id } = useParams();
    const report = useSelector(state => state.report.item);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(action.getreportByID(id));
    }, [dispatch])

    return (  
        <div className="Report-Display" style={{width: '100%' }}>
            <h2>Display Report</h2>
            <br />
            <TextField 
                type='text'
                label = 'Report ID'
                defaultValue='id' 
                variant='filled' 
                inputProps={{ readOnly: true }}
                //value={JSON.stringify(report.location.state)}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Report Date'
                defaultValue='date' 
                variant='filled' 
                inputProps={{ readOnly: true }}
                //value={stripquotes(JSON.stringify(report.report.reportDate))}
            />
            <br /><br />
            <TextField
                type='text'
                label = 'Entities'
                defaultValue='entities' 
                variant='filled'
                fullWidth
                inputProps={{ readOnly: true }}
                //value={JSON.stringify(report.report.taggedEntities)}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Report Title'
                defaultValue='title'
                variant='filled' 
                fullWidth
                margin='normal'
                inputProps={{ readOnly: true }}
                //value={stripquotes(JSON.stringify(report.report.reportTitle))}
            />
            <br />
            <TextField 
                type='text' 
                label = 'Report Content' 
                defaultValue='content' 
                variant='filled'
                multiline
                rows={60}
                fullWidth
                margin='normal'
                inputProps={{ readOnly: true }}
                //value={stripquotes(JSON.stringify(report.report.reportContent))}
            />
        </div>
    );
}
 
export default ReportDisplay;