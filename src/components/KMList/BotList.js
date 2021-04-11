import React, { useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import * as CONSTANTS from '../../global';

function BotList() {
    const botList = useSelector(state => state.botList.items)
    const bot = useSelector(state => state.botList.botDetails)
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(action.getBotList());
    }, [dispatch])

    function retrieveBot(id) {
        dispatch(action.getBotByID(id));
        console.log(JSON.stringify(bot))
    }

    const [state, setState] = React.useState({
        checkedA: true,      
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <div className="d-flex flex-row">
            <div className="d-flex flex-column" style={{width: "18em", backgroundColor: "ghostwhite"}}>
                <br />
                <h4 style={{textAlign: 'center'}}>Bot List</h4>
                <ul className='bot-list'>
                    {botList.map(el => (
                        <li className='bullets-left'><Button className="list-bots" onClick={() => retrieveBot(el.id)}>{el.jobName}</Button></li>
                    ))} 
                </ul>
            </div>
            <div className="flex-column" style={{width: "8em"}}></div>
            <div className="flex-column" style={{width: "45em"}}>             
                <br /><br />
                <label>Bot Name</label>&nbsp;&nbsp;&nbsp;
                <TextField 
                type='text'
                variant='outlined' 
                style ={{width: '50%'}}
                inputProps={{ readOnly: true }}
                value={bot && JSON.stringify(bot.jobName)}
                />
                <br /><br />
                <label>Start Date</label>&nbsp;&nbsp;&nbsp;
                <TextField 
                type='text'
                variant='outlined'
                style ={{width: '50%'}} 
                inputProps={{ readOnly: true }}
                value={bot && moment(bot.startDate).format("DD/MM/YYYY")}
                />
                <br /><br />
                <label>End Date</label>&nbsp;&nbsp;&nbsp;
                <TextField 
                type='text'
                variant='outlined' 
                style ={{width: '50%'}}
                inputProps={{ readOnly: true }}
                value={bot && moment(bot.endDate).format("DD/MM/YYYY")}
                />
                <br /><br />
                <label>Keywords</label>&nbsp;&nbsp;&nbsp;
                <TextField 
                type='text'
                variant='outlined'
                style ={{width: '50%'}}
                inputProps={{ readOnly: true }}
                value={bot && bot.keywords}
                />
                <br /><br />
                <h5>Tagged Report IDs</h5>
                    {bot && bot.taggedReports && bot.taggedReports.map(reportid=> (
                         <Link className="tagged-links" to={`/report/${reportid}`}>
                            { reportid }
                        </Link>
                    ))}
                <br /><br />
                {bot && (
                <FormGroup row>
                    <label>Extractive</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControlLabel
                        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    />
                    <label>Abstractive</label>
                </FormGroup>
                )}
                <div className="p-2 flex-fill">    
                    {bot && bot.chkBoxSummary && state.checkedA == true && (
                        <h5>Abstractive Summary</h5>
                    )}
                    {bot && bot.chkBoxSummary && state.checkedA != true && (
                        <h5>Extractive Summary</h5>
                    )}
                    {bot && bot.chkBoxSummary && state.checkedA == true && (
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            fullWidth
                            rowsMax={30}
                            value={bot && bot.summarisation_A}
                        />)
                    }
                    {bot && bot.chkBoxSummary && state.checkedA != true &&  (    
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            fullWidth 
                            rowsMax={30}
                            value={bot && bot.summarisation_E}
                        />)
                    }
                    <br /><br />
                    {bot && bot.chkBoxTopics && (
                        <h5>Topics & Sentences</h5>
                    )}   
                    {bot && bot.chkBoxTopics && state.checkedA == true && bot.abstractiveTopicSentences && Object.keys(bot.abstractiveTopicSentences).map((key, i) => (
                        <p key={i}>
                            <br />
                            <h6>Topics: {key}</h6>
                            {bot.abstractiveTopicSentences[key].map(sentence =>(
                                <span>{sentence}</span>
                            ))}
                        </p>
                    ))}
                    {bot && bot.chkBoxTopics && state.checkedA != true && bot.extractiveTopicSentences && Object.keys(bot.extractiveTopicSentences).map((key, i) => (
                        <p key={i}>
                            <br />
                            <h6>Topics: {key}</h6>
                            {bot.extractiveTopicSentences[key].map(sentence => (
                                <span>{sentence}</span>
                            ))}
                        </p>
                    ))}
                    <br /><br />
                    {bot && bot.chkBoxEntities && (
                        <h5>Tagged Entities</h5> 
                    )}
                    {bot && bot.chkBoxEntities && bot.entities && bot.entities.map(entity => (
                        <Link className="tagged-links" to={`/entity/${entity}`}>
                            { entity }
                        </Link>
                    ))}
                    <br />
                </div>
            </div>          
      </div> 
             
    ); 
}

export default BotList;