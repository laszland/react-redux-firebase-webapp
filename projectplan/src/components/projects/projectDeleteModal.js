import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux';
import { deleteProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom'

class Delete extends Component {

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Delete, options);  // this.Modal => React componens

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteProject(this.props.id);
    this.props.history.push('/'); //TODO: solve push back bug!!!
  }

  render() {
    const { project, auth, id } = this.props
    if (!auth.uid) return < Redirect to='/signin'/>
    return (
      <div>
        <a className="pink waves-effect waves-light btn-floating btn-small modal-trigger" data-target="modal1">
          <i className="material-icons">delete</i>
        </a>

        <div
          ref={Modal => {
            this.Delete = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content black-text">
            <p className="grey-text text-darken-2">Delete Project</p>
            <p className="center-align flow-text">Do you really want to delete this project?</p>
            <p className="center-align">{ project.title } { id }</p> {/* TODO: delete id */}
          </div>
          <div className="center">
            <a className="modal-close btn pink white-text" onClick={ this.handleDelete } ><i className="material-icons white-text left small">check</i>
              Yes
            </a>
            <a className="modal-close btn pink white-text"><i className="material-icons small white-text left">close</i>
              No
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const dispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}

export default connect(mapStateToProps, dispatchToProps)(Delete);
