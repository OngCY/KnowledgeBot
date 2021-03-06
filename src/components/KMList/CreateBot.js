import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import * as CONSTANTS from '../../global';

const SubmitSwal = withReactContent(Swal);

const CreateBot = () => {
    //const { register, handleSubmit } = useForm();
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [jobName, setJobName] = useState('');
    const [keywords, setKeywords] = useState('');
    const [chkState, setChkState] = useState({
      chkBoxSummary: true,
      chkBoxEntities: true,
      chkBoxTopics: true
    });
   
    const handleSubmit = (e) => {
        e.preventDefault();

        let keywordsArray = keywords.split(",");
        let postObject = {};
        
        postObject['jobName'] = jobName;
        postObject['keywords'] = keywordsArray;
        postObject['startDate'] = fromDate;
        postObject['endDate'] = toDate;
        postObject['chkBoxSummary'] = chkState.chkBoxSummary;
        postObject['chkBoxEntities'] = chkState.chkBoxEntities;
        postObject['chkBoxTopics'] = chkState.chkBoxTopics;
        
        let output = JSON.stringify(postObject);
        console.log(output);
        
        if(jobName === '' || keywords === '' )
        {
          SubmitSwal.fire({
            title: CONSTANTS.BOTEMPTYTITLE,
            text: CONSTANTS.BOTEMPTYMSG,
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
        else
        {
          const res = axios.put(CONSTANTS.GLOBAL_URL + '/bot/create1', output, {
            headers: {
              'Content-Type': CONSTANTS.APP_TYPE_JSON
            }}
          ).then((response) => {
            console.log("response: " + JSON.stringify(response));
          }, (error) => {
            console.log("error: " + JSON.stringify(error));
          });

          SubmitSwal.fire({
            title: CONSTANTS.BOTSUBMITTITLE,
            text: CONSTANTS.BOTSUBMITMSG,
            icon: 'info',
            confirmButtonText: 'OK'
          })
        }
    }

    const handleNameChange = (event) => {
        setJobName(event.target.value);
    }

    const handleKeywordsChange = (event) => {
        setKeywords(event.target.value);
    }

    const handleFromDateChange = (date) => {
        setFromDate(date);
    };

    const handleToDateChange = (date) => {
        setToDate(date);
    };

    const handleChkChange = (event) => {
      setChkState({ ...chkState, [event.target.name]: event.target.checked });
    };
     
    return (
      <div className="Form-Create">
        <br />
        <h3>Create New Bot</h3>
        <br />
        <form onSubmit={handleSubmit}> 
            <TextField name="jobName" placeholder="Job Name" variant="outlined"
            onChange={handleNameChange} />
            <br /><br />
            <TextField name="keywords" placeholder="Keywords seperated by ," variant="outlined"
            onChange={handleKeywordsChange}/>
            <br /><br /><br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker label="From:" value={fromDate} onChange={handleFromDateChange}/>
            </MuiPickersUtilsProvider>
            &nbsp;&nbsp;&nbsp;
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker label="To:" value={toDate} onChange={handleToDateChange}/>
            </MuiPickersUtilsProvider>
            <br /><br /><br />
            <label>Select Services: </label>&nbsp;&nbsp;&nbsp;&nbsp;
            <FormControlLabel
              control={
                <Checkbox
                  name="chkBoxSummary"
                  color="primary"
                  checked={chkState.chkBoxSummary}
                  onChange={handleChkChange}
                />
              }
              label="Summary"
            />&nbsp;
            <FormControlLabel
              control={
                <Checkbox
                  name="chkBoxEntities"
                  color="primary"
                  checked={chkState.chkBoxEntities}
                  onChange={handleChkChange}
                />
              }
              label="Entities"
            />&nbsp;
            <FormControlLabel
              control={
                <Checkbox
                  name="chkBoxTopics"
                  color="primary"
                  checked={chkState.chkBoxTopics}
                  onChange={handleChkChange}
                />
              }
              label="Topics"
            />
            <br /><br /><br />
            <Button type="submit" variant="contained" color="default">Submit</Button>
        </form>
      </div>
    );
  }

  export default CreateBot;