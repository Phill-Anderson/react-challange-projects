import React, { useState, useEffect } from 'react';
import data from './data';
import loremtext from './loremData';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const [lorem, setLorem] = useState(loremtext)
  const [loremCount, setLoremCount] = useState(10);
  const convertLorem = (e) => {
    e.preventDefault()
    setLorem(null)
    const loremArr = loremtext.split(" ")
    // тухайн arr - ийн элэмэнтийн урт доторх тоогоор ( 0-60- ийн хооронд ) random-оор үүсгэнэ
    var randomedLoremArr = [];
    var counter = loremCount
    if (loremCount < 0) counter = 1

    for (let i = 0; i < counter; i++) {
      const arrIndex = randomIndex(loremArr);
      const randomWord = loremArr[arrIndex]
      randomedLoremArr.push(randomWord)
    }
    const loremIpsum = randomedLoremArr.concat(['.'])
    const convertedLoremText = loremIpsum.join(" ")
    setLorem(convertedLoremText)
  }
  const randomIndex = (loremArr) => {
    const randomLoremWordIndex = Math.floor(Math.random() * loremArr.length)
    return randomLoremWordIndex
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))

  }
  return (
    <section className='section-center'>
      <h3>lorem ipsum параграп үүсгэгч:</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)} />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        <h4>Манай lorem:</h4>
        {text.length > 0 ? text.map((item, index) => {
          return <p key={index}>{item}</p>
        }) : 'параграпын тоог оруулаад generate товч дээр дарна уу'}
      </article>

      <hr />
      <h3>Random lorem үгнүүдээр параграп үүсгэнэ:</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          үгний тоо:
        </label>
        <input type='number' name='loremCount' id='loremCount' value={loremCount} onChange={(e) => setLoremCount(e.target.value)} />
        <button className='btn' type='submit' onClick={convertLorem}>lorem - ийг хувирга</button>
      </form>
      <article className='lorem-text'>
        {lorem}
      </article>
    </section>
  )
}

export default App;
