import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
  //console.log(props);
  const { project, auth } = props;
  if (!auth.uid) return < Redirect to='/signin'/>
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card depth-2">
          <div className="card-content">
            <ul className="right">
              <a class="btn-floating btn-small waves-effect waves-light pink lighten-1">
                <i class="material-icons">edit</i>
              </a>
              <span> </span>
              <a class="btn-floating btn-small waves-effect waves-light pink lighten-1">
                <i class="material-icons">delete</i>
              </a>
            </ul>
            <span className="card-title">{ project.title }</span>
            <p>{ project.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p> Loading...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : undefined;
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);
