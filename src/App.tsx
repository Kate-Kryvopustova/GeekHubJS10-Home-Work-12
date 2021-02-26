import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDog } from "./actions/actions";
import { Button } from 'react-bootstrap';
import { IStore, IHandleClick } from './interfaces/interfaces'

export default function App() {
  const dogImage = useSelector((state: IStore) => state.dogImage);
  const dispatch = useDispatch();

  const handleClick: IHandleClick = () => {
    dispatch(fetchDog());
  };

  return (
    <div id='main'>
      <h1 className='title'>Get random image with dog</h1>

      <Button className='button' variant="outline-secondary" onClick={handleClick}>Get random dog</Button>

      { dogImage.loading && <p className='loading'>Loading...</p> }
      { dogImage.error && <p className='error'>Error, try again</p> }
      { dogImage.url && <img className='image' alt="random dog" src={dogImage.url} /> }

    </div>
  );
}
