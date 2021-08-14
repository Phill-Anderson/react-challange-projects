import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import data from './data'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);

  if (loading) return <section className='section loading'><h1>loading ...</h1></section>


  const { company, date, duties, title } = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>туршлага</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {
            jobs.map((item, index) => {
              return <button onClick={() => setValue(index)} key={item.id} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
            })
          }
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{date}</p>
          {duties.map((duty, index) => {
            return <div className='job-desc' key={index}>
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          })}
        </article>
      </div>
    </section>
  );
}

export default App
