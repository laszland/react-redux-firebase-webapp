export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make some async DB call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(profile);
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
  }
};

export const deleteProject = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    // do some async code
    const firestore = getFirestore();
    firestore.collection('projects').doc(id).delete()
      .then(() => {
        dispatch({ type: 'DELETE_PROJECT', id });
      }).catch((err) => {
        dispatch({ type: 'DELETE_PROJECT_ERROR', err })
      })
  }
};