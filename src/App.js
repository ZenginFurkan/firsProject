import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Content from './components/content/Content';

function App() {

  const[theme,setTheme] = useState('light');

  return (
    <div>
      <Layout theme={theme} setTheme={setTheme} >
       <Content/>
      </Layout>
    </div>
  );
}

export default App;

