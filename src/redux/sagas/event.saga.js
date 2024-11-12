import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

//! Worker saga: Handles the API call for fetching "events"
function* fetchEventsSaga() {
  try {
    let response = yield axios({
      method: "GET",
      url: "/api/allData",
    });
    yield put({
      type: "SET_EVENTS",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with GET EVENTS request:", error);
  }
}


//! Worker saga: Handles adding a new item TO "events"
function* addItem(action) {
  try {
    yield call(axios.post, '/api/allData', {
      event: action.payload.event,
      description: action.payload.description,
      priority: action.payload.priority,
      status: action.payload.status,
      due_date: action.payload.due_date,
    });
    yield put({ type: 'FETCH_EVENTS' }); // Re-fetch events after adding an item
  } catch (err) {
    console.log("Error in adding event:", err);
  }
}


//! Worker saga: Handles deleting an item FROM "events"
function* deleteEvent(action) {
  try {
    // Perform the delete request
    yield call(axios.delete, `/api/allData/${action.payload}`);
    yield put({ type: 'FETCH_EVENTS' }); 
  } catch (err) {
    console.error('Error in Delete:', err.message);
  }
}

//TODO SAGA: Handles GET for "completed_events"
function* fetchCompletedEventsSaga(action) {
  try {
    let response = yield axios({
      method: "GET",
      url: "/api/completed_events",
    });
    yield put({
      type: "SET_COMPLETED_EVENTS",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with GET COMPLETED EVENTS request:", error);
  }
}

//TODO SAGA: Handles POST an item to "completed_events"
function* addItemToCompletedEvents(action) {
  console.log("Saga: action.payload:", action.payload); 
  try {
    yield call(axios.post, '/api/completed_events', {
      event: action.payload.event,
      description: action.payload.description,
      priority: action.payload.priority,
      status: 'Completed',
      due_date: action.payload.due_date,
    });
    yield put({ type: 'FETCH_COMPLETED_EVENTS' }); // Re-fetch events after adding an item
  } catch (err) {
    console.log("Error in adding event to completed_events:", err);
  }
}


//! Watcher saga: Watches for FETCH_EVENTS, ADD_ITEM, and DELETE_EVENT actions
function* eventSaga() {
  yield takeEvery("FETCH_EVENTS", fetchEventsSaga); // Matches the new action type
  yield takeLatest("ADD_ITEM", addItem);
  yield takeLatest("DELETE_EVENT", deleteEvent); 

  yield takeLatest("ADD_ITEM_TO_COMPLETED_EVENTS", addItemToCompletedEvents)
  yield takeEvery("FETCH_COMPLETED_EVENTS", fetchCompletedEventsSaga)
}

export default eventSaga;
