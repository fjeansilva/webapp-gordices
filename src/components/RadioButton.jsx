import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioButton extends Component {

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
    return (
      <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div className="form-check form-check-inline">
          <label className="form-check-label custom-control custom-radio">
            <input
              className="form-check-input custom-control-input"
              type="radio"
              name={this.props.name}
              value={this.props.description}
              onClick={this.handleClick}
            />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">{this.props.description}</span>
          </label>
        </div>
      </div>
    )
  }
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  updateFormData: PropTypes.func.isRequired,
  description: PropTypes.string
};

RadioButton.defaultProps = {
  description: ''
};

export default RadioButton;
