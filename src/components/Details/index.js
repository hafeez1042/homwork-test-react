import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Spinner from '../Spinner';
import { DETAILS_API, UPDATE_API } from '../../const/API'

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending',
      homework: {},
      error: '',
    };
  }

  componentWillMount() {
    const homeworkId = this.props.match.params.id;
    axios.get(DETAILS_API(homeworkId))
      .then(({ data }) => {
        this.setState({
          status: 'success',
          homework: data,
        });
      }).catch(({ message }) => {
        this.setState({ error: message });
      })
  }
  render() {
    if(this.state.status === 'pending') {
      return <div className="text-center"><Spinner /></div>
    }

    const { title, description, createdAt, updatedAt, isSubmitted, id } = this.state.homework
    return (
      <div className="container">
        <h4>{title}</h4>
        <p>{description}</p>
        
        <div><strong>Created at:</strong> {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
        <div><strong>Updated at:</strong> {moment(updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</div>

        <button className={`btn ${isSubmitted ? 'btn-disabled' : 'btn-primary'}`} disabled={isSubmitted} onClick={this.submitHomework.bind(this)}>
          {isSubmitted ? 'Already Submitted' : 'Submit'}
        </button>
        <Link className="btn btn-info" to="/">Back</Link>
      </div>
    )
  }

  submitHomework() {
    axios.put(UPDATE_API(this.state.homework.id), {isSubmitted: true})
    .then(() => {
      this.state.homework.isSubmitted = true;
      this.setState({homework: this.state.homework});
    })
  }
}

export default withRouter(Details);