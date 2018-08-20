import React, { Component } from 'react';
import Input from './Input';
import Address from './Address';

class SearchZipCode extends Component {
  state = {
    address: null,
    erro: false,
  }
  
  queryAddress    = address => `${address.logradouro},+${address.bairro},+${address.localidade},+${address.uf}`;
  uriQueryAddress = zipCode => `http://viacep.com.br/ws/${zipCode}/json/`;
  uriQueryLatLng  = query => `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyDhpWx6Y9_jpyv9-UbVPw2F4xzRbvxWUWA`;

  findAddress = zipCode => {
    const uri = this.uriQueryAddress(zipCode);
    fetch(uri)
    .then(data => data.json())
    .then(data => {
      const { erro } = data;

      if (erro) {
        this.setState({ address: null, erro });
      } else {
        this.findLatLng(data);
        this.setState({ address: data, erro: false });
      }
    })
    .catch(err => {
      console.error(err)
    });
  }

  findLatLng = address => {
    const query = this.queryAddress(address)
    let uri = this.uriQueryLatLng(query);
    
    fetch(uri)
    .then(data => data.json())
    .then(data => {
      const { results } = data;
      if (results) {
        const { geometry } = results[0];
        const { location } = geometry;
    
        const values = Object.assign(this.state.address, location);
        this.setState({ address: values });
      }
    })
    .catch(err => {
      console.error(err)
    });
  }

  handleZipCode = (data) => {
    const { zipCode } = data;
    if(zipCode.length === 9) {
      this.findAddress(zipCode);
    }
  }

  updateAddress = (values) => {
    const { updateFormData } = this.props;
    const newValues = Object.assign(this.state.address, values);
    this.setState({ address: newValues });

    if (updateFormData) { updateFormData(Object.assign({}, this.state)) }
  }

  render(){
    const { address, erro } = this.state;
    return (
      <div>
        <Input
          label="Cep"
          type="text"
          name="zipCode"
          mask="99999-999"
          validate={(e) => /^\d{5}-\d{3}$/.test(e)}
          errorMessage="Cep inválido"
          tip="somente números"
          updateFormData={this.handleZipCode}
        />
        {erro && (
          <div className="alert alert-danger" role="alert">
            Nenhum endereço foi localizado com o cep informado.
          </div>
        )}

        {address && (
          <Address data={address} updateAddress={this.updateAddress} />
        )}
      </div>
    )
  }
}

export default SearchZipCode;