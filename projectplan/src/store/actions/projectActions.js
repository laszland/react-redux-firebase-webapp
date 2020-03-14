export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make some async DB call
    dispatch({ type: 'CREATE_PROJECT', project})
  }
};