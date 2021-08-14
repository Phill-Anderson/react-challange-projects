import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  console.log(`manai data:`, people)
  return (
    <main>
      <section className='container'>
        <h3>өнөөдөр төрсөн өдөр нь тохиож буй хүмүүс {people.length}</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>цэвэрлэх</button>
      </section>
    </main>
  );
}

export default App;