import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import Timer from './Timer'
const Quiz = () => {
    const { second, waiting, loading, questions, index, correct, nextQuestion, checkAnswer, closeModal, handleSubmit, startTimer } = useGlobalContext()


    if (questions.length > 0) {
        var { question, options, answer } = questions[index]
        var parsedOptions = JSON.parse(options)
    }

    let answers = questions.length > 0 && [...parsedOptions]

    //зөв хариултыг санамсаргүйгээр аль нэг индекс дээр нэмж өгч бна
    const tempIndex = Math.floor(Math.random() * 4)
    console.log(`random tempIndex`, tempIndex)
    if (answers) {
        if (tempIndex === 3) {
            answers.push(answer)
        } else {
            answers.push(answers[tempIndex])
            answers[tempIndex] = answer
        }
    }


    return (
        <section className='quiz'>
            <p className='time' id="time"><Timer /></p><span id="timeStatus"> </span>
            <p className='correct-answers'>
                Зөв хариултууд : {correct}/{index + 1}
            </p>
            <article className='container'>
                <h2 dangerouslySetInnerHTML={{ __html: question }} />
                <div className='btn-container'>
                    {answers && answers.map((el, index) => {
                        return (
                            <button key={index} className='answer-btn' onClick={() => checkAnswer(answer === el)}
                                dangerouslySetInnerHTML={{ __html: el }}
                            />
                        )
                    })}
                </div>
            </article>
            <button className='next-question' onClick={nextQuestion}>
                дараагийн асуулт
            </button>
        </section>
    )
}

export default Quiz
