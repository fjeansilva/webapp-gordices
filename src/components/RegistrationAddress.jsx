import React, { Component } from 'react';
import SearchZipCode from './SearchZipCode.jsx';
import Input from './Input.jsx';

class RegistrationAddress extends Component {
  constructor(props){
    super(props);

    this.state = {
      zipCode: ''
    }

    this.updateData = this.updateData.bind(this);
  }

  updateData(values) {
    const newValues = Object.assign(this.state, values);
    this.setState(newValues);

    this.props.updateFormData(newValues);
  }

  render(){
    const { zipCode } = this.state;

    return (
      <div>
        <Input
          label="Cep"
          type="text"
          name="zipCode"
          validate={(e) => /^\d{8}$/.test(e)}
          errorMessage="Cep inválido"
          tip="somente números"
          updateFormData={this.updateData}
        />
        {zipCode && (
          <SearchZipCode zipCode={zipCode} updateFormData={this.updateData} />
        )}
      </div>
    )
  }
}

export default RegistrationAddress;
