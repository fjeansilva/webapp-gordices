import React from 'react';
import './index.css';
import Input from '../../components/Input';
import CheckboxList from '../../components/CheckboxList';
import RadioButtonList from '../../components/RadioButtonList';
import Address from '../../components/Address';

const fakeData = {};
const Store = () => (
  <div>
    <header className="header-store">
      <nav className="header-store__nav">
        <a href="">
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
            validate={(value) => value.length > 0 }
            errorMessage="Informe o nome da loja"
            tip="ex: Kicake"
          />
        </div>
        <div className="form-group">
          <Input
            label="Telefone da sua loja (apenas números)"
            type="text"
            name="name"
            mask="(99) 9999-9999"
            validate={(value) => value.length > 9}
            errorMessage="Telefone inválido"
            tip="ex: 6633330000"
          />
          <hr style={{ borderColor: 'snow' }}/>
        </div>
        <div className="form-group">
          <CheckboxList
            title="Marque os itens que você pretende vender"
            name="citiesServed"
            items={['Doces', 'Salgados']}
          />
          <hr style={{ borderColor: 'snow' }}/>
        </div>
        <div className="form-group">
          <RadioButtonList
            title="Faz entrega?"
            name="hasNetworkDrugStores"
            items={['Sim', 'Não']}
          />
        </div>
        <h1 className="title-section">
          Endereço da loja
        </h1>
        <div className="form-group">
          <Address data={fakeData} />
        </div>
        <h1 className="title-section">
          Contato do representante
        </h1>
        <div className="form-group">
          <Input
            label="Nome do representante"
            type="text"
            name="name"
            validate={(value) => value.length > 0 }
            errorMessage="Informe o nome da loja"
            tip="ex: Amanda"
          />
        </div>
        <div className="form-group">
          <Input
            label="Sobrenome do representante"
            type="text"
            name="name"
            validate={(value) => value.length > 0 }
            errorMessage="Informe o nome da loja"
            tip="ex: Santos"
          />
        </div>
        <div className="form-group">
          <Input
            label="Email do representante"
            type="email"
            name="name"
            validate={(value) => value.length > 0 }
            errorMessage="Informe o nome da loja"
            tip="ex: amanda@gmail.com"
          />
        </div>
        <div className="form-group">
          <Input
            label="Celular do responsável (apenas números)"
            type="text"
            name="name"
            mask="(99) 99999-9999"
            validate={(value) => value.length > 9}
            errorMessage="Telefone inválido"
            tip="ex: 66999990000"
          />
        </div>
        <div className="form-group">
          <Input
            label="Como conheceu o Gordices"
            type="text"
            name="name"
            validate={(value) => value.length > 0 }
            errorMessage="Informe o nome da loja"
            tip="ex: facebook"
          />
          <hr style={{ borderColor: 'snow' }}/>
        </div>
        <div className="form-group ">
          <button type="submit" className="btn btn-success">Salvar</button>
        </div>
      </form>
    </section>
  </div>
);

export default Store;


{/* <div className="form-group">
          <div className="form-check form-check-inline">
            <label className="form-control-label" style={{ display: 'block', fontWeight: 'bold' }}>
              <strong>Possui alguma especialidade?</strong>
            </label>
            <label className="form-check-label custom-control custom-radio">
            <input type="radio" className="form-check-input custom-control-input" name="hasSpecialty" value="Loiros" />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">Loiros</span>
            </label>
          </div>
        </div>
        <div>
          <label className="form-control-label" style={{ display: 'block', fontWeight: 'bold' }}>
            <strong>Cidades Atendidas</strong>
          </label>
          <div>
            <label className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" name="citiesServed" value="Capital" />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Capital</span>
            </label>
            <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" name="citiesServed" value="Interior" />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">Interior</span>
            </label>
          </div>
        </div>
        <div className="form-group ">
          <label className="form-control-label">Caso possua, informe abaixo</label>
          <input type="text" name="facebook" placeholder="Facebook" mask="" className="form-control form-control-lg form-control-success form-control-danger" />
        </div>
        <div className="form-group ">
          <button type="submit" className="btn btn-warning">Continuar</button>
        </div>
         */}
