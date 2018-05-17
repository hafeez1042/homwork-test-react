import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default ({ id, title, description, isSubmitted, createdAt }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="status"><strong>Status:</strong> { isSubmitted ? 'Completed' : 'Not Completed' }</div>
        <div className="text-right"><small>{moment(createdAt).fromNow()}</small></div>
        <div className="card-link">
          <Link to={`/edit/${id}`}>Edit</Link>
        </div>
      </div>
    </div>
  );
}