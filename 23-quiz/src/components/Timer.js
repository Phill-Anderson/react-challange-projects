import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'

const Timer = () => {
    const { second, waiting, loading, questions, index, correct, nextQuestion, checkAnswer, closeModal, handleSubmit, timer } = useGlobalContext()
    useEffect(() => {
        if (index !== 0) {
            var timer = setInterval(timer(15), 1000)
        }
        return () => clearInterval(timer)
    }, [index])
    return (
        <>15</>
    )
}

export default Timer
