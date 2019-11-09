import React from 'react';

import Search from './Search';
import TwitchList from './TwitchList';

export class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Search />
        <TwitchList />
      </div>
    );
  }
}

export default App;
