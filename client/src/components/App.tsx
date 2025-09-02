import React, {useState} from 'react';
import ReturnedSummary from '../components/Summary'; // Updated path to components folder
import SearchInput from '../components/SearchInput'; // Updated path to components folder
import '../css/App.css'; 
import axios from 'axios';
import { on } from 'events';
import SwitchCase from './Switch';

function App() {
  const [onButtonClick, setOnButtonClick] = useState(false);
  const [isImage, setIsImage] = useState<string>('');

  // i need to add some logic here that will handle making req to api
  const [onSearch, setOnSearch] = useState<string>('');
 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOnSearch(e.target.value);
    };

const handleButtonClick = async () => {
  try {
    const response = await axios.get(`https://foodish-api.com/images/dessert/dessert10.jpg`);
    const imageUrl = response.data;
    console.log('Image URL:', imageUrl);
    setOnButtonClick(true);
    setIsImage(imageUrl);
  } catch (error) {
    console.error('Error fetching data:', (error as Error).message);
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <h2 id='header-text'>
          Find something to munch on.
        </h2>
      </header>
      <SwitchCase/>
      <SearchInput handleSearch={handleSearch}/> 
      <div><button className='enter-button' onClick={ handleButtonClick}>I'm hungry</button></div>
       <ReturnedSummary/>
    </div>
  );
}
export default App;
