import TextField from '@material-ui/core/TextField';

const ReportDisplay = () => {


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
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Report Date'
                defaultValue='date' 
                variant='filled' 
                inputProps={{ readOnly: true }}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Entities'
                defaultValue='entities' 
                variant='filled'
                fullWidth
                inputProps={{ readOnly: true }}
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
            />
            <br />
            <TextField 
                type='text' 
                label = 'Report Content' 
                defaultValue='content' 
                variant='filled'
                multiline
                rows={10}
                fullWidth
                margin='normal'
                inputProps={{ readOnly: true }}
            />
        </div>
    );
}
 
export default ReportDisplay;