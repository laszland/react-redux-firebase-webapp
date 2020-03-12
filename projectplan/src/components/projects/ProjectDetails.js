import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card depth-0">
        <div className="card-content">
  <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis optio repudiandae explicabo possimus assumenda sunt minima aspernatur adipisci eum modi consequuntur, ipsam similique quo tempora earum id, veritatis corrupti officia?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Laszlo Roland Kiss</div>
          <div>12th of March, 9:21 pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
