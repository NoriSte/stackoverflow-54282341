const { call, put } = require("redux-saga/effects");

export function* removeProfile(auth, database, action) {
  try {
    const url = `/users/${action.user.uid}`;
    const { ref } = database;
    const result = yield call([database, ref], url);
    const { remove } = database.ref();
    yield call([result, remove]); //how can i do a test for this case?
  } catch ({ message }) {
    // yield put(ActionCreator.removeProfileFailure(message));
  }
}
