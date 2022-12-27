import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/keymap/sublime'



const Editor = (props) => {
  const [open, setOpen] = useState(true)
  const {
    onChange,
    language,
    value,
    name,
    color,
    item

  } = props
  const handleEvents = (editor, data, value) => {
    onChange(value)
  }
  return (
    <>
      <div className={` ${open ? 'contain' : 'collapse'}`}>
        <div className="cont_title">
          <p style={{ color: `${color}`, fontWeight: 'bold' }}>{name}</p>
          <button style={{ backgroundColor: `${color}`, color: 'BLACK', fontWeight: 'bold' }} className='close_but' onClick={() => setOpen(!open)}>  {`${item}`}</button>
        </div>
        <CodeMirror
          value={value}
          onBeforeChange={handleEvents}
          options={{
            mode: language,
            theme: 'material',
            lineNumbers: true,
            keyMap: 'sublime',
            lint: true,
            lineWrapping: true,
            scrollbarStyle: 'null'

          }}


        />


      </div>



    </>
  )
}

export default Editor