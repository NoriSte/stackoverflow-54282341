const { removeProfile } = require("./remove-profile");
const { runSaga } = require("redux-saga");

test("Mocking the database call", () => {
  const removeMock = jest.fn(() => ({
    // place here the remove's return value
  }));

  const databaseMock = {
    ref: url => ({
      remove: removeMock
    })
  };

  runSaga(
    {}, // options
    removeProfile, // your saga
    // below all the arguments for the saga
    null,
    databaseMock,
    { user: { uid: "999" } }
  );
  expect(removeMock).toHaveBeenCalled();
});
