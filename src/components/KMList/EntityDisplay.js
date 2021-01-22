import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const EntityDisplay = () => {
    
    const entityDetails = useSelector(state => state.entity.item);
    
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
    }))(TableRow);
    
    const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
    });
      
    const classes = useStyles;
   
    function createData(title) {
        return { title };
      }
      
    const rows = [
        createData('Report 1'),
        createData('Report 2'),
        createData('Report 3')
    ];

    return (  
        <div className="Entity-Display" style={{width: '100%' }}>
            <h2>Display Entity</h2>
            <br />
            <TextField 
                type='text'
                label = 'Entity Name'
                defaultValue='entity' 
                variant='filled' 
                inputProps={{ readOnly: true }}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Gender'
                defaultValue='gender' 
                variant='filled' 
                inputProps={{ readOnly: true }}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Country'
                defaultValue='country' 
                variant='filled' 
                inputProps={{ readOnly: true }}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Appointment'
                defaultValue='appt' 
                variant='filled' 
                inputProps={{ readOnly: true }}
            />
            <br /><br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Tagged Reports</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.title}>
                            <StyledTableCell component="th" scope="row">
                                {row.title}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
 
export default EntityDisplay;