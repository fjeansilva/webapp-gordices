import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStores } from '../../data/stores/actions';

class ListStores extends Component {
  componentDidMount() {
    this.props.getStores();
  }
  
  render(){
    console.log(this.props)
    return (
      <section>
        <h1>List of Stores</h1>
        <code>
          {JSON.stringify(this.props.stores)}
        </code>
      </section>    
    );
  }
}

const mapPropsToState = state => ({
  stores: state
});

const mapDispatchToProps = dispatch => ({
  getStores: () => dispatch(fetchStores()),
});

export default connect(mapPropsToState, mapDispatchToProps)(ListStores);