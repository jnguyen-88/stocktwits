import React from 'react';

import Search from './Search';
import TwitchList from './TwitchList';
import NavBar from './NavBar';
import UserCard from './UserCard';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className='container flex-box'>
          <div className='top-row'>
            <UserCard />
          </div>
          <Search />
          <TwitchList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
