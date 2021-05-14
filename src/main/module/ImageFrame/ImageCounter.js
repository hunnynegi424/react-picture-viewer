import React from 'react';

export default function ImageCounter(props) {
  const { images, displayedImg } = props;
  return (<>
    {displayedImg + 1}/{images.length}
  </>);
}
