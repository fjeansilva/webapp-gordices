import React, { Component } from 'react';
import Input from './Input.jsx';

class Address extends Component {
  render(){
    const { data, updateAddress } = this.props;

    return (
      <div>
        {data && (
          <div>
            <div className="form-group row" style={{ padding: '0'}}>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <Input
                  label="Cidade"
                  type="text"
                  name="city"
                  disabled
                  value={data.localidade}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <Input
                  label="Estado"
                  type="text"
                  name="state"
                  disabled
                  value={data.uf}
                />
              </div>
            </div>
            <div className="" style={{ padding: '0'}}>
              <Input
                label="Bairro"
                type="text"
                name="neighborhood"
                disabled
                value={data.bairro}
              />
            </div>
            <div className="form-group row" style={{ padding: '0'}}>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <Input
                  label="Complemento"
                  type="text"
                  name="complemento"
                  validate={(value) => /\w/.test(value)}
                  updateFormData={updateAddress}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <Input
                  label="Número"
                  type="text"
                  name="numero"
                  errorMessage="informe um número"
                  validate={(value) => /\d/.test(value)}
                  updateFormData={updateAddress}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Address;
