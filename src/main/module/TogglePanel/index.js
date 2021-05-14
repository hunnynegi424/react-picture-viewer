import React from 'react';
import ToggleModal from './toggleModal';
import './index.scss';

export default function TogglePanel(props) {
  return (<div className='panel_container'>
    <ToggleModal {...props}>
      <div className='image_container'>
        {props.children}
      </div>
    </ToggleModal>
  </div>);
}
