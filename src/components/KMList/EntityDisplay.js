import TextField from '@material-ui/core/TextField';

const EntityDisplay = () => {
    
    const entityDetails = useSelector(state => state.entity.item);
    const reports = entityDetails.taggedReports;

    return (  
        <div className="Entity-Display" style={{width: '100%' }}>
            <h3>Display Entity</h3>
            <br />
            <TextField 
                type='text'
                label = 'Name'
                variant='outlined' 
                inputProps={{ readOnly: true }}
                value={entityDetails.entityName}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Gender'
                variant='outlined' 
                inputProps={{ readOnly: true }}
                value={entityDetails.entityGender}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Country'
                variant='outlined' 
                inputProps={{ readOnly: true }}
                value={entityDetails.entityCountry}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Appointment'
                variant='outlined' 
                inputProps={{ readOnly: true }}
                value={entityDetails.entityAppointment}
            />
            <br /><br />
            <div className="blog-list">
                {reports.map(report => (
                    <div className="blog-preview" key={report.id} >
                    <Link to={`/report/${report.id}`}>
                        <h2>{ report.title }</h2>
                        <p>Report Date { report.date }</p>
                    </Link>
                     </div>
                ))}
            </div>
        </div>
    );
}
 
export default EntityDisplay;