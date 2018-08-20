import React, { Component } from 'react';
import Input from '../../../../components/Input';
import CheckboxList from '../../../../components/CheckboxList';
import RadioButtonList from '../../../../components/RadioButtonList';
import SearchZipCode from '../../../../components/SearchZipCode';

import { validateEmail, validateRequired } from '../../../../utils/helpers';

export default class Create extends Component {
  state = {
    store: {},
  }

  handleUpdateFormData = (data) => {
    const { store } = this.state;
    let newStore = Object.assign(store, data);

    this.setState({
      store: newStore
    });

    console.log(newStore);
  }

  render(){
    return (
      <div>
        <header className="header-store">
          <nav className="header-store__nav">
            <a href="/">
              <img src="http://res.cloudinary.com/dq7pph4yb/image/upload/c_scale,h_80/v1534607981/GD_transp_hvpi7p.png" alt=""/>
            </a>
            <ul className="store-nav_menu">
              <li className="nav-menu__item">
                <a href="">
                  Como funciona
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="">
                  Ajuda
                </a>
              </li>
            </ul>
          </nav>
          <h1 className="header-store__title">
            Cadastre-se e faça parte do Gordices :)
          </h1>
        </header>
        <section className="section-register">
          <form className="form">
            <h1 className="title-section">
              Dados da loja
            </h1>
            <div className="form-group">
              <Input
                label="Nome da sua loja"
                type="text"
                name="name"
                validate={validateRequired}
                errorMessage="Informe o nome da loja"
                tip="ex: Kicake"
                updateFormData={this.handleUpdateFormData}
              />
            </div>
            <div className="form-group">
              <Input
                label="Telefone da sua loja (apenas números)"
                type="text"
                name="phone"
                mask="(99) 9999-9999"
                validate={(value) => value.length > 9}
                errorMessage="Informe o número do telefone"
                tip="ex: 6633330000"
                updateFormData={this.handleUpdateFormData}
              />
              <hr style={{ borderColor: 'snow' }}/>
            </div>
            <div className="form-group">
              <CheckboxList
                title="Marque os itens que você pretende vender"
                name="cuisine"
                items={['Doces', 'Salgados']}
                updateFormData={this.handleUpdateFormData}
              />
              <hr style={{ borderColor: 'snow' }}/>
            </div>
            <div className="form-group">
              <RadioButtonList
                title="Faz entrega?"
                name="delivery"
                items={['Sim', 'Não']}
                updateFormData={this.handleUpdateFormData}
              />
            </div>
            <h1 className="title-section">
              Endereço da loja
            </h1>
            <div className="form-group">
              <SearchZipCode updateFormData={this.handleUpdateFormData} />
            </div>
            <h1 className="title-section">
              Contato do representante
            </h1>
            <div className="form-group">
              <Input
                label="Nome do representante"
                type="text"
                name="firstName"
                validate={validateRequired}
                errorMessage="Informe o nome do representante"
                tip="ex: Amanda"
                updateFormData={this.handleUpdateFormData}
              />
            </div>
            <div className="form-group">
              <Input
                label="Sobrenome do representante"
                type="text"
                name="lastName"
                validate={validateRequired}
                errorMessage="Informe o sobrenome do representante"
                tip="ex: Santos"
                updateFormData={this.handleUpdateFormData}
              />
            </div>
            <div className="form-group">
              <Input
                label="Email do representante"
                type="email"
                name="email"
                validate={validateEmail}
                errorMessage="Informe o email do representante"
                tip="ex: amanda@gmail.com"
                updateFormData={this.handleUpdateFormData}
              />
            </div>
            <div className="form-group">
              <Input
                label="Celular do responsável (apenas números)"
                type="text"
                name="cellphone"
                mask="(99) 99999-9999"
                validate={(value) => value.length > 9}
                errorMessage="Informe o celular do representante"
                tip="ex: 66999990000"
                updateFormData={this.handleUpdateFormData}
              />
            </div>
            <div className="form-group">
              <CheckboxList
                title="Como conheceu o Gordices?"
                name="source"
                items={['Facebook', 'Instagram', 'Google', 'Indicação']}
                updateFormData={this.handleUpdateFormData}
                validate={validateRequired}
                errorMessage="Diga como ficou sabendo do Gordices :)"
              />
              <hr style={{ borderColor: 'snow' }}/>
            </div>
            <div className="form-group ">
              <button
                className="btn btn-success"
                onClick={(e) => e.preventDefault()}
              >Salvar</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}