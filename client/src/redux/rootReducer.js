import { combineReducers } from 'redux';
import authReducers from './reducers/authReducers';
import talkReducers from './reducers/talkReducers';
import boomReducer from './reducers/boomsReducer';
import usersReducers from './reducers/usersReducers';
import lecturesReducers from './reducers/lecturesReducers';
import modulesReducer from "./reducers/modulesReducer";
import companiesReducers from './reducers/companiesReducers';
import jobsReducers from './reducers/jobsReducers';


const rootReducer = combineReducers({
  auth: authReducers,
  user: usersReducers,
  talk: talkReducers,
  boom: boomReducer,
  lecture: lecturesReducers,
  module: modulesReducer,
  lectures: lecturesReducers,
  companies: companiesReducers,
  jobs: jobsReducers
});

export default rootReducer;
