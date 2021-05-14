import React from 'react'

export default function ImageDisplay(props) {
  return (<div className={props.className}>
    <img alt={props.imgName} src={props.imgUrl}/>
  </div>)
}
