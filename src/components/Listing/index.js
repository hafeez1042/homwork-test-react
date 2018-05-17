import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
import HomeworkItem from '../HomeworkItem';
// import HomeworkListItem from '../HomeworkListItem';
import './style.css';

import { LISTING_API } from '../../const/API'

export default class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending',
      homeworks: [],
      error: '',
      listType: 'grid',
    };
  }


  componentWillMount() {
    axios.get(LISTING_API)
      .then(({ data, status }) => {
        if (status === 200) {
          this.setState({
            homeworks: data,
            status: 'success',
          });
        }
      }).catch(err => {
        this.setState({ error: err.message });
      })
  }

  render() {
    return (
      <div className="container listing-page">
        <div className="clearfix">
          <div className="float-left"><h4>Homeworks</h4></div>
          <div className="float-right">
            <span className="list-type">
              <button className="btn btn-light"
                onClick={() => this.setState({ listType: 'grid' })}
                disabled={this.state.listType === 'grid'}>
                <i className="fa fa-th"></i>
              </button>&nbsp;
              <button className="btn btn-light"
                onClick={() => this.setState({listType: 'list'})}
                disabled={this.state.listType === 'list'}> 
                <i className="fa fa-bars"></i>
              </button>
            </span>
          </div>
        </div>
        <div className="content">
          <div className="row">
            {this.homeworks()}
          </div>
        </div>
      </div>
    )
  }

  homeworks() {

    if (this.status === 'pending') {
      return <div className="text-center"><Spinner /></div>;
    }
    if (this.state.homeworks.length === 0) {
      return (
        <div className="alert alert-warning" role="alert">
          No Homeworks found!...
        </div>
      );
    }
    return this.state.homeworks.map(item => {
      return (
        <div className={`${this.state.listType === 'grid' ? 'col-md-3 col-sm-6 grid' : 'col-md-12 list'}`}>
          <HomeworkItem key={item.id} {...item} />
        </div>
      )
    })
    
  }
}