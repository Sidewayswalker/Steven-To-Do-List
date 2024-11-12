import { all } from 'redux-saga/effects';
import eventSaga from './event.saga';

export default function* rootSaga() {
  yield all([
    eventSaga(), // Combine sagas here
  ]);
}