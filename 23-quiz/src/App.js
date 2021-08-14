import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
import Quiz from './components/Quiz'

function App() {
  const { handleSubmit } = useGlobalContext()
  return (
    <main>
      <Modal />
      <button onClick={handleSubmit}>эхлэх</button>
      <Quiz />
    </main>
  )
}

export default App
