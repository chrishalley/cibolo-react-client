import React from 'react';
  const FormControl = (props) => {
    const { controls } = props;

    return (
      <div>
        {controls.map((control, i) => {
          const { type, onClick, label } = control;
          return  <button key={i} type={type} onClick={onClick}>{label}</button>
        })}
      </div>
    );
  }

  export { FormControl };