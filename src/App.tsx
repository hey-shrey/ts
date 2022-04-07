import React from 'react';
import './App.css';
import Background from 'components/Background';
import List from 'components/List';

function App() {
  return (
    <div className="App">
      <Background />
      <List title="hello" subtitle="world" listLink="https://heyshrey.com/" />
    </div>
  );
}

export default App;
