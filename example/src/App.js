import React from 'react'

import { Button } from 'bordeux'
import 'bordeux/dist/index.css'


const App = () => {
  return (
    <div class="main">
      <Button type="default" text="default" />
      <Button type="primary" text="primary" />
      <Button type="text" text="text" />
      <Button type="link" text="link" />
      <Button type="dashed" text="dashed" />
    </div>
  )
}

export default App
