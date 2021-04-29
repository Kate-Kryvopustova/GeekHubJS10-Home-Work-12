import {combineReducers} from "redux";
import birbImage from './birb/reducers';
import foxImage from './fox/reducers';
import pandaImage from './panda/reducers';

export default combineReducers({ birbImage, foxImage, pandaImage });
