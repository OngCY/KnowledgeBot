import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import * as action from "../../store/actions";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import * as CONSTANTS from '../../global';

const EntityDisplay = () => {
    
    const { name } = useParams();
    //const entityDetails = useSelector(state => state.entity.item);
    const dispatch = useDispatch();
    //const reports = entityDetails.taggedReports;
    const [entity, setEntity] = useState(null);

    useEffect(() => {
        console.log("entity name: " + name);
        dispatch(action.getEntityByName(name));
        axios.get(CONSTANTS.GLOBAL_URL + "/entity/retrieveByEntityName/" + name)
        .then((response) => {
            console.log("response: " + JSON.stringify(response));
            setEntity(response);
          }, (error) => {
            console.log("error: " + JSON.stringify(error));
        });
      }, [dispatch])

    return (  
        entity !== null ? (
        <div className="Entity-Display" style={{width: '100%' }}>
            <h3>{name}</h3>
            <br /><br />
            <h6>Tagged Report IDs:</h6>
            {entity.data.taggedReports.map(reportid => (
                <Link className="tagged-entities" to={`/report/${reportid}`}>
                    { reportid }
                </Link>
            ))}
            <br /><br /><br />
            <TextField 
                type='text'
                label = 'Gender'
                variant='outlined' 
                inputProps={{ readOnly: true }}
                value={entity.data.entityGender}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Country'
                variant='outlined' 
                inputProps={{ readOnly: true }}
                value={entity.data.entityCountry}
            />
            <br /><br />
            <TextField 
                type='text'
                label = 'Appointment'
                variant='outlined' 
                style ={{width: '30%'}}
                inputProps={{ readOnly: true }}
                value={entity.data.entityAppointment}
            />
            <br /><br />        
        </div>
         ) : (
            <div>Loading...</div> 
         )
    );
}
 
export default EntityDisplay;