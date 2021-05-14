import React, { useState } from 'react'
import './index.scss';
import TogglePanel from '../TogglePanel';
import ImageCounter from './ImageCounter';
import ImageDisplay from './ImageDisplay';

export default function ImageFrame({images= [{ name: '', url: '' }]}) {
  const [state, setState] = useState({
    displayedImg: 0,
    helperClass: {prev: '', current: '', next: ''},
  });

  const { displayedImg, helperClass } = state;

  function toggleImage(x) {
    const helperClassState = x === -1 ? { prev: 'toggled', current: 'prevtoggled', next: '' } : { prev: '', current: 'nexttoggled', next: 'toggled' }
    setState(prevState => ({ ...prevState , helperClass: helperClassState }));
    setTimeout(() => {
      setState(prevState => ({ ...prevState , helperClass: { prev: '', current: '', next: '' }, displayedImg: prevState.displayedImg + x }));
    }, 295)
  }
  
  const prevImg = images[displayedImg-1] || { name: '', url: '' };
  const currentImg = images[displayedImg] || { name: '', url: '' };
  const nextImg = images[displayedImg+1] || { name: '', url: '' };

  return (<TogglePanel
      toggleImage={toggleImage}
      disableToggle={{left: displayedImg === 0, right: displayedImg === images.length-1}}
      counter={<ImageCounter images={images} displayedImg={displayedImg} />}
    >
      <ImageDisplay className={`prev_img_${helperClass.prev}`} imgName={prevImg.name} imgUrl={prevImg.url}/>
      <ImageDisplay className={`current_img_${helperClass.current}`} imgName={currentImg.name} imgUrl={currentImg.url}/>
      <ImageDisplay className={`next_img_${helperClass.next}`} imgName={nextImg.name} imgUrl={nextImg.url}/>
  </TogglePanel>);
}
