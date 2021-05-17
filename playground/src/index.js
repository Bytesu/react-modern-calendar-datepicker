import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../../src/DatePicker.css';
import DatePicker from '../../src';
import * as serviceWorker from './serviceWorker';
import {Other} from './other';

const App = () => {
  const [selectedDay, setValue] = useState(null);
  return <div style={{textAlign:'right',marginTop:'50px',}}>
    <DatePicker
      customRenderFn={Other}
      value={selectedDay} onChange={setValue} shouldHighlightWeekends />
  </div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
