import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

import {Cards, Graph, CountryPicker} from './Components';
import {fetchData} from './api/apiCall';

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({data: data});
  }

  render() {
    const {data} = this.state;
  
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>C</h1>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1>VID-19</h1>
        </div>    
        <Cards data={data} />
        <CountryPicker />
        <Graph />
      </div>
    );
  }
}

export default App;
