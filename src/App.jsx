import { useState } from 'react';
import SignupCard from './components/other/SignupCard';
import ThankYou from './components/other/ThankYou';

function App() {
  const [component, setComponent] = useState('form');

  const submitHandler = () => {
    console.log('first');
    setComponent('thankyou');
  };

  return (
    <>
      {component === 'form' ? (
        <SignupCard onSubmit={submitHandler} />
      ) : (
        <ThankYou />
      )}
    </>
  );
}

export default App;
