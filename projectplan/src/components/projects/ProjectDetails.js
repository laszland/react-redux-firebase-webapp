import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  console.log(props);
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card depth-0">
          <div className="card-content">
            <span className="card-title">{ project.title }</span>
            <p>{ project.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
          <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
            <div>12th of March, 9:21 pm</div>
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
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);
