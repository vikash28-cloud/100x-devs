import React from 'react'
import useFetch from './usefetch'
const App = () => {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App