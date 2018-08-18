import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({target}){
    const { value, name } = target;
    const data = {
      [name]: value
    }

    this.props.updateFormData(data);
  }

  render(){
    const { name, description } = this.props;
    return (
      <label className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          name={name}
          value={description}
          onClick={this.handleClick}
        />
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">{description}</span>
      </label>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

Checkbox.defaultProps = {
  description: ''
};

export default Checkbox;
