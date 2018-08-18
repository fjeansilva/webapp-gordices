import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox.jsx';

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }

    this.updateList = this.updateList.bind(this);
  }

  updateList(value){
    const { name } = this.props;
    const { list } = this.state;
    const index = list.indexOf(value[name]);

    if (index === -1) {
      list.push(value[name]);
    } else {
      list.splice(index, 1);
    }

    this.setState({
      list
    });


    const data = {
      [name]: list
    };

    this.props.updateFormData(data);
  }

  renderOptions(props){
    const { items, name, description, updateFormData} = props;
    return items.map((item, index) => (
      <Checkbox
        key={item + index}
        name={name}
        description={item}
        updateFormData={this.updateList}
      />
    ));
  }

  render(){
    return (
      <div>
        <label
          className="form-control-label"
          style={{ display: 'block' }}>
          {this.props.title}
        </label>
        <div className="row" style={{ justifyContent: 'flex-start', padding: '0 15px' }}>
          {this.renderOptions(this.props)}
        </div>
      </div>
    )
  }

}

CheckboxList.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  updateFormData: PropTypes.func.isRequired
};

export default CheckboxList;
