import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton.jsx';

function RadioButtonList(props){
  return (
    <div>
      <label className="form-control-label" style={{ display: 'block' }}>
        {props.title}
      </label>
      <div className="row" style={{ justifyContent: 'flex-start' }}>
        {renderOptions(props)}
      </div>
    </div>
  )
}

RadioButtonList.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  updateFormData: PropTypes.func.isRequired
};

export default RadioButtonList;

function renderOptions(props){
  const { items, name, description, updateFormData} = props;
  return items.map((item, index) => (
    <RadioButton
      key={item + index}
      name={name}
      value={item}
      description={item}
      updateFormData={updateFormData}
    />
  ));
}
