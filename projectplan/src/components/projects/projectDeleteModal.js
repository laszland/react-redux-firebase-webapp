import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

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
      endingTop: "10%"
    };
    M.Modal.init(this.Delete, options);  // this.Modal => React componens
    console.log(this.Delete)

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a className="pink waves-effect waves-light btn-floating btn-small modal-trigger" data-target="modal1">
          <i className="material-icons">delete</i>
        </a>

        <div
          ref={Modal => {
            this.Delete = Modal; // this.Modal => React componens
            console.log(this.Delete);
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
              bottom-sheet class to the "modal" div
              If you want Fixed Footer Modal then add
              modal-fixed-footer to the "modal" div */}
          <div className="modal-content black-text">
            <p className="grey-text text-darken-2">Delete Project</p>
            <p className="center-align flow-text">Do you really want to delete this project?</p>
          </div>
          <div className="center">
            <a className="modal-close btn pink white-text"><i className="material-icons white-text left small">check</i>
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

export default Delete;
