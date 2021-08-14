import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()

  return (
    <div className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'}`}>
      <div className='modal-content'>
        <h2>баяр хүргье!</h2>
        <p> Нийт асуултын {((correct / questions.length) * 100).toFixed(0)}% -ийг зөв хариуллаа</p>
        <button className='close-btn' onClick={closeModal}> дахин шалгалт өгөх</button>
        <hr />
        {questions.map((question, index) => {
          const { category, correct_answer, } = question
          return
        })}
      </div>
    </div>
  )
}

export default Modal
