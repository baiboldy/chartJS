import React from 'react';
import Charting from './components/Chart'
import Bar from './components/Bar/Bar'

function App() {
  return (
    <div>
      <Bar type={'horizontalBar'} leftBgColor={24} centerBgColor={144} rightBgColor={0} />
      <hr />
      <Bar type={'bar'} leftBgColor={244} centerBgColor={255} rightBgColor={11} />
      <hr />
      <Charting />
    </div>
  );
}

export default App;
