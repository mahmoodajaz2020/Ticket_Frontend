import React from 'react'
import { useState } from 'react';

export default function Nav(props) {

    const [valueFromParent, setValueFromParent] = useState(props.value) ;
  return (
    <div >
        {valueFromParent}
    </div>
  )
}

