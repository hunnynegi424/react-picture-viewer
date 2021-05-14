import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function ToggleModal(props) {
  const { counter, toggleImage, disableToggle, children } = props;
  return (<>
    <div className='left_toggle' style={{ cursor: 'pointer' }} onClick={() => !disableToggle.left && toggleImage(-1)} >
      <span >
        <ChevronLeftIcon
          style={{ fontSize: 100, color: 'antiquewhite' }}
        />
      </span>
    </div>
      {children}
    <div className='right_toggle' style={{ cursor: 'pointer' }} onClick={() => !disableToggle.right && toggleImage(+1)} >
      <span >
        <ChevronRightIcon
          style={{ fontSize: 100, color: 'antiquewhite' }}
        />
      </span>
    </div>
    <div className='image_counter'>
      {counter}
    </div>
  </>)
}
