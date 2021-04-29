import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './Animals.css';
import { IStore, IHandleClick } from '../interfaces/interfaces';
import { requestBirb } from '../store/birb/actions';
import { requestPanda } from '../store/panda/actions';
import { requestFox } from '../store/fox/actions';
import { Button } from 'react-bootstrap';

const Animal = () => {
  const birbImage = useSelector((state: IStore) => state.birbImage);
  const pandaImage = useSelector((state: IStore) => state.pandaImage);
  const foxImage = useSelector((state: IStore) => state.foxImage);
  const dispatch = useDispatch();

  const handleClickBirb: IHandleClick = () => {
    dispatch(requestBirb());
  };

  const handleClickPanda: IHandleClick = () => {
    dispatch(requestPanda());
  };

  const handleClickBird: IHandleClick = () => {
    dispatch(requestFox());
  };

  return (
    <div id='main'>
      <h1 className='title'>Get random image</h1>

      <div className='buttons'>
        <Button className='button' variant="outline-secondary" onClick={handleClickBird}>Get random fox</Button>
        <Button className='button' variant="outline-secondary" onClick={handleClickBirb}>Get random birb</Button>
        <Button className='button' variant="outline-secondary" onClick={handleClickPanda}>Get random panda</Button>
      </div>

      <div className='container'>
        <div className='container__image'>
          { foxImage.loading && <p className='loading'>Loading...</p> }
          { foxImage.error && <p className='error'>Error, try again</p> }
          { foxImage.url && <img className='image' alt="random image" src={foxImage.url} /> }
        </div>

        <div className='container__image'>
          { birbImage.loading && <p className='loading'>Loading...</p> }
          { birbImage.error && <p className='error'>Error, try again</p> }
          { birbImage.url && <img className='image' alt="random image" src={birbImage.url} /> }
        </div>

        <div className='container__image'>
          { pandaImage.loading && <p className='loading'>Loading...</p> }
          { pandaImage.error && <p className='error'>Error, try again</p> }
          { pandaImage.url && <img className='image' alt="random image" src={pandaImage.url} /> }
        </div>
      </div>
    </div>
  )
}

export default Animal;
