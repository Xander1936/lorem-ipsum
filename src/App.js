import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello World!');
  }
  
  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum ?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>
        Paragraphs
      </label>
      <input 
        type='number' 
        name='amount'
        id='amount'
        onChange={(e) => setCount(e.target.value)}  
      />
      <button
        type='submit'
        className='btn'
      >
        generate
      </button>
      <article className='lorem-text'>
        <p>
          Justo sadipscing eos ipsum labore ea est kasd nonumy, gubergren.
        </p>
        <p>
          Justo sadipscing eos ipsum labore ea est kasd nonumy, gubergren.
        </p>

      </article>
    </form>
  </section>
  )
}

export default App;

// <></>
