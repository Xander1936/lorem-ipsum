import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // parseInt transforms the entered string into a number
    let amount = parseInt(count);
    // Set the amount entered by the user
    // to be <= to "count" --> setup the number of strings to be displayed between 0 and 8 the maximum.
    if(count <= 0) {
      amount = 1;
    }
    if(count > 8) {
      amount = 8;
    }

    // Slice return the exact amount of the items selected from the array
    // starting with the first item (with the index of zero)
    setText(data.slice(0, amount));
    console.log('Hello World!');
  }
  
  return (
  <section className='section-center'>
      <h3>tired of boring lorem ipsum ?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label className='label' htmlFor='amount'>
          Paragraphs:
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
          {text.map((item, index) => {
            return(
              <p key={index}>
                {item}
              </p>
            )
          })}
        </article>
      </form>
  </section>
  )
}

export default App;

// <></>
