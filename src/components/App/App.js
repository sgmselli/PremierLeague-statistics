import React from 'react';
import './App.css';
import Football from '../../util/football';
import TeamsList from '../TeamsList/TeamsList';
import Search from '../Search/Search';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      footballInfo : []
    }
    this.searchFootball = this.searchFootball.bind(this);
  }

  searchFootball(id1, id2) {
    if (id1 === id2) {
      console.log('equal')
    }else {

      Football.search(`${id1}-${id2}`).then(data => {
        this.setState({ footballInfo : data })
      })
    }

  }

  render() {
    return (
      <div className="App">
        <div className="titles">
          <h1>Premfacts</h1>
          <h2>Get your data on recent Premier League games</h2>
        </div>
        
        <Search onClick={this.searchFootball} />
        <TeamsList info={this.state['footballInfo']}/>
      </div>
    )
  }
}

export default App;
