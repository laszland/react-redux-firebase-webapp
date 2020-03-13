 import React, { Component } from 'react';
 import Notifications from './Notifications';
 import ProjectList from '../projects/ProjectList';
 import { connect } from 'react-redux';

 class Dashboard extends Component {
   render () {
     console.log(this.props)
     const { project } = this.props;
     return (
       <div className="dashboard container">
         <div className="row">
           <div className="col s12 m6">
             <ProjectList projects={project}/>
           </div>
          <div className="col s12 m5 offset-m1">
            <Notifications/>
          </div>
         </div>
       </div>
     )
   }
 };

 const mapStateTpProps = (state) => {
   return {
     project: state.project.projects
   }
 }

export default connect(mapStateTpProps)(Dashboard);