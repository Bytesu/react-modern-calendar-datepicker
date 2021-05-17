import React from 'react';
import ReactDOM from 'react-dom';


export function Other({children,inputElement}) {
  if(!children){
    return null;
  }
  const el = document.createElement('div');
  const { left, top } = inputElement.current.getBoundingClientRect();
  console.log({top})
  document?.body.appendChild(el);

  return ReactDOM.createPortal(
    React.cloneElement(children),
    el);
}

