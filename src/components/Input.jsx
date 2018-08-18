import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

class Input extends Component {

  constructor(props){
    super(props);

    this.state = {
      status: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur({target}){
    const { validate, name, updateFormData, onBlur } = this.props;
    let value = this.state[name];

    if (validate) {
      if(this.props.validate(target.value)) {
        this.setState({
          status: 'has-success',
        });
      } else {
        this.setState({
          status: 'has-danger'
        });

        value = '';
      }
    }

    const data = {
      [name]: value
    }


    if(onBlur) { onBlur(target); }
    if(updateFormData) { updateFormData(data); }
  }

  handleChange({target}){
    this.setState({ status: '' });
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render(){
    const { label, errorMessage, mask, tip } = this.props;
    const inputProps = Object.assign({}, this.props);
    delete inputProps.label;
    delete inputProps.errorMessage;
    delete inputProps.delete;
    delete inputProps.updateFormData;
    delete inputProps.validate;
    delete inputProps.tip;

    const { status } = this.state;

    return (
      <div className={`form-group ${status}`}>
        {label && (
          <label className="form-control-label">
            {label}
          </label>
        )}

        {mask && (
          <InputMask
            {...inputProps}
            mask={mask}
            maskChar=" "
            className="form-control form-control-lg form-control-success form-control-danger"
            onChange={this.handleChange}
            onBlur={this.handleBlur} />
        )}

        {!mask && (
          <input
            {...inputProps}
            className="form-control form-control-lg form-control-success form-control-danger"
            onChange={this.handleChange}
            onBlur={this.handleBlur}/>
        )}

        {tip && status !== 'has-success' && (
          <small
            className="form-text text-muted">({tip})</small>
        )}

        {status === 'has-danger' && errorMessage && (
          <div className="form-control-feedback">
            {errorMessage}
          </div>
        )}
      </div>
    )
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateFormData: PropTypes.func,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  validate: PropTypes.func,
  tip: PropTypes.string,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  errorMessage: '',
  placeholder: '',
  mask: '',
  validate: null,
  tip: '',
  onBlur: null,
  updateFormData: null
};

export default Input;
