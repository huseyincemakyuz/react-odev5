import React from 'react'

import { ExampleComponent, Button } from 'bordeux'
import 'bordeux/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Merhaba Dünya😄" />
      <Button text='Click' onclick={() => alert('adsada')}/>

    </>
  )
}

export default App
