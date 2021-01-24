import TextField from '@material-ui/core/TextField';
import { useSelector } from "react-redux";

const ReportDisplay = (prop) => {
    
    const report = prop;
    //const reportDetails = useSelector(state => state.report.item);

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
                value={report.reportDocId}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Report Date'
                defaultValue='date' 
                variant='filled' 
                inputProps={{ readOnly: true }}
                //value={reportDetails.reportDate}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Entities'
                defaultValue='entities' 
                variant='filled'
                fullWidth
                inputProps={{ readOnly: true }}
                //value={reportDetails.taggedEntities}
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
                //value={reportDetails.reportTitle}
            />
            <br />
            <TextField 
                type='text' 
                label = 'Report Content' 
                defaultValue='content' 
                variant='filled'
                multiline
                rows={12}
                fullWidth
                margin='normal'
                inputProps={{ readOnly: true }}
               // value={reportDetails.reportContent}
            />
        </div>
    );
}
 
export default ReportDisplay;