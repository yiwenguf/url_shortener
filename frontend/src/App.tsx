import './App.css';
import { Button, FormControl, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import config from './config.json';

function App() {
  const [destination, setDestination] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [showUrlMessage, setShowMessage] = useState(false);
  const [isDestinationValid, setIsDestinationValid] = useState(true);
  const [isCustomUrlValid, setIsCustomUrlValid] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [customUrlExists, setCustomUrlExists] = useState(false);

  const isUrlValid = (url: string) => url.match(/http(s)?:\/\/.?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null;
  const isNewUrlValid = (url: string) => url.match(/^[\w\-]+$/) !== null;

  const resetErrorsAndMessages = () => {
    setShowMessage(false);
    setShowErrorMessage(false);
    setCustomUrlExists(false);
  }
  
  const handleOnDestinationTextChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setDestination(event.target.value);
    resetErrorsAndMessages();
  }

  const handleOnCustomUrlTextChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCustomUrl(event.target.value);
    resetErrorsAndMessages();
  }

  const handleOnReset = () => {
    setDestination('');
    setCustomUrl('');
    resetErrorsAndMessages();
  }

  const handleOnCreate = () => {
    const destinationIsValid = isUrlValid(destination);
    const customUrlIsValid = (customUrl === '' || isNewUrlValid(customUrl));
    setIsDestinationValid(destinationIsValid);
    setIsCustomUrlValid(customUrlIsValid);
    resetErrorsAndMessages();

    if (destinationIsValid && customUrlIsValid){
      axios.post(`${config.serverUrl}/api/create`, {
        originalLink: destination,
        newLink: customUrl
      }).then((response) => {
        setCustomUrl(response.data.newUrl);
        setShowMessage(true);
      }).catch((error) => {
        console.log(error);
        if (error.response){
          switch(error.response.status){
            case 409:
              setCustomUrlExists(true);
              break;
            default:
              setShowErrorMessage(true);
              break;
          }
        }
      });
    }
  }

  return (
    <div className='App'>
      <FormControl>
        <div className='Container'>
          <h1 className='Title'>{config.appName}</h1>
          <div className='Destination'>
            <TextField
              required
              label = "Destination"
              size='medium'
              placeholder='Example: https://www.google.com'
              fullWidth
              inputProps={{textAlign: 'center'}}
              error={!isDestinationValid}
              helperText={!isDestinationValid ? "URL is not valid, example: https://www.google.com" : ""}
              onChange={handleOnDestinationTextChange}
              value={destination}
            />
          </div>
          <div className='CustomUrl'>
            <TextField
              size='medium'
              fullWidth
              disabled
              value={config.serverUrl}
            />
            <h4 id='horizontal-space'>/</h4>
            <TextField
              label = "Custom URL (Optional)"
              size='medium'
              fullWidth
              error={!isCustomUrlValid || customUrlExists}
              helperText={(!isCustomUrlValid ? "Only alphabets, numbers, - and _ allowed" :
                             customUrlExists ? "URL already in use" : "")}
              onChange={handleOnCustomUrlTextChange}
              value={customUrl}
            />
          </div>
          <div className='Buttons'>
            <Button id='reset-button' onClick={handleOnReset}>Reset</Button>
            <Button id='create-button' onClick={handleOnCreate} variant='contained' >Create</Button>
          </div>
          {showUrlMessage && 
            <>The URL <a href={`${config.serverUrl}/${customUrl}`} target='_blank' rel="noreferrer">
              {`${config.serverUrl}/${customUrl}`}
              </a> successfully created
            </>
          }
          {showErrorMessage && 
            <div style={{color: 'red'}}>
              Something went wrong...
            </div>
          }
        </div>
      </FormControl>
    </div>
  );
}

export default App;
