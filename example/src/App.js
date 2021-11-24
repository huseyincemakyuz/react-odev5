import React from 'react'

import { Button } from 'bordeux'
import 'bordeux/dist/index.css'


const App = () => {
  return (
    <>
      <Button type="default" text="default" />
      <Button type="primary" text="primary" />
      <Button type="text" text="text" />
      <Button type="link" text="link" />
      <Button type="dashed" text="dashed" />
    </>
  )
}

export default App
