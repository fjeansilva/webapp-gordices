import React, { Component } from 'react';
import Input from './Input';

class SearchZipCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      erro: false
    }

    this.updateAddress = this.updateAddress.bind(this);
  }

  updateAddress(values) {
    console.log(values);
    // const { updateFormData } = this.props;
    // const newValues = Object.assign(this.state.address, values);
    // this.setState({ address: newValues });

    // if (updateFormData) { updateFormData(Object.assign({}, this.state)) }
  }

  componentDidMount() {
    // findAddress(this);
  }

  componentDidUpdate(prevProps, prevState){
    // if(prevProps.zipCode !== this.props.zipCode) { findAddress(this) }
  }

  render(){
    const { address, erro } = this.state;
    return (
      <div>
        <Input
          label="Cep"
          type="text"
          name="zipCode"
          validate={(e) => /^\d{8}$/.test(e)}
          errorMessage="Cep inválido"
          tip="somente números"
        />
        {erro && (
          <div className="alert alert-danger" role="alert">
            Nenhum endereço corresponde ao cep informado
          </div>
        )}

        {address && (
          // <Address data={address} updateAddress={this.updateAddress} />
          <code>{address}</code>
        )}
      </div>
    )
  }
}

export default SearchZipCode;

function findAddress(self){
  const { zipCode } = self.props;
  const uri = uriQueryAddress(zipCode);
  fetch(uri)
  .then(data => data.json())
  .then(data => {
    const { erro } = data;

    if (erro) {
      self.setState({ address: null, erro });
    } else {
      findLatLng(data, self);
      self.setState({ address: data, erro: false });
    }
  })
  .catch(err => console.error(err));
}

function findLatLng(address, self){
const query = queryAddress(address)
let uri = uriQueryLatLng(query);

fetch(uri)
.then(data => data.json())
.then(data => {
  const { results } = data;
  if (results) {
    const { geometry } = results[0];
    const { location } = geometry;

    const values = Object.assign(self.state.address, location);
    self.setState({ address: values });
  }
})
.catch(err => console.error(err))

}

function queryAddress(address){
  return `${address.logradouro},+${address.bairro},+${address.localidade},+${address.uf}`;
}

function uriQueryAddress(zipCode){
  return `http://viacep.com.br/ws/${zipCode}/json/`;
}

function uriQueryLatLng(query){
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyDhpWx6Y9_jpyv9-UbVPw2F4xzRbvxWUWA`;
}
