import React from 'react'
import style from './Style.module.css'

function TextError (props) {
  console.log('textError', props)
  return <div className={style.error}>{props.children}</div>
}

export default TextError