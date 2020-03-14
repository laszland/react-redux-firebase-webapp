export const createProject = (project) => {
  return (dispatch, getState) => {
    // make some async DB call
    dispatch({ type: 'CREATE_PROJECT', project})
  }
};