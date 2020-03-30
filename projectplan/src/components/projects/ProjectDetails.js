import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Delete from './projectDeleteModal';

const ProjectDetails = (props) => {
  //console.log(props);
  const { project, auth, id } = props;
  console.log(project)
  if (!auth.uid) return < Redirect to='/signin'/>
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card depth-2">
          <div className="card-content">
            <nav className="z-depth-0">
              <div className="nav-wrapper white black-text">
                <div className="brand-logo left">
                  <span className="card-title black-text">{ project.title }</span>
                </div>

                { (auth.uid === project.authorId) ?  <ul className="right">
                  <li><Delete project={ project } id={ id }/></li>
                </ul> : null }

              </div>
            </nav>
            <div className="row">
              <p class="col left-align">{ project.content }</p>
            </div>
          </div>
          <div className="card-action grey lighten-4 grey-text row">
            <div className="col l12">Posted by { project.authorFirstName } { project.authorLastName }</div>
            <div className="col l12">{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>

      <div id="edit" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quis architecto quasi autem rerum dicta velit dolorem possimus, atque ipsum accusantium quo odit distinctio impedit illo porro doloribus natus fugiat?</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-pink btn-flat">Agree</a>
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
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : undefined;
  console.log(project);
  return {
    project: project,
    auth: state.firebase.auth,
    id: ownProps.match.params.id
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);
