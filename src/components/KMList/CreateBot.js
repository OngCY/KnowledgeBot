import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import * as CONSTANTS from '../../global';

const CreateBot = () => {
    const { register, handleSubmit } = useForm();
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    
    const onSubmit = (data) => {
        data['startDate'] = fromDate;
        data['endDate'] = toDate;
        data.keywords = ["water", "agreement"];
        data.entities = [""];
        let output = JSON.stringify(data);
        
        alert(output);
        console.log(output);

        const res = axios.put(CONSTANTS.GLOBAL_URL + '/bot/create1', output, {
          headers: {
            'Content-Type': CONSTANTS.APP_TYPE_JSON
          }
        }).then((response) => {
          console.log("response: " + JSON.stringify(response));
        }, (error) => {
          console.log("error: " + JSON.stringify(error));
        });
    }

    const handleFromDateChange = (date) => {
        console.log(date);
        setFromDate(date);
    };

    const handleToDateChange = (date) => {
        console.log(date);
        setToDate(date);
    };
     
    return (
      <div className="Form-Create">
        <h3>Create New Bot</h3>
        <br />
        <Form onSubmit={handleSubmit(onSubmit)}> 
            <TextField inputRef={register} name="jobName" placeholder="Job Name" variant="outlined"/>
            <br /><br />
            <TextField inputRef={register} name="keywords" placeholder="Keywords" variant="outlined"/>
            <br /><br />
            <TextField inputRef={register} name="entities" placeholder="Entities" variant="outlined"/>
            <br /><br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker label="From:" value={fromDate} onChange={handleFromDateChange}/>
            </MuiPickersUtilsProvider>
            &nbsp;&nbsp;&nbsp;
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker label="To:" value={toDate} onChange={handleToDateChange}/>
            </MuiPickersUtilsProvider>
            <br /><br /><br />
            <Button type="submit" variant="contained" color="default">Submit</Button>
        </Form>
      </div>
    );
  }

  export default CreateBot;