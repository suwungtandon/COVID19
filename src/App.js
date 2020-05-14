import React from 'react';
import styles from './App.module.css';
import {Cards, Graph, CountryPicker, Header, SwitchTabs} from './Components';
import {fetchData} from './api/apiCall';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    value: 0,
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({data: data});
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({data: data, country: country});
  }

  onTabSwitch = (event, value) => {
    this.setState({value});
  }

  render() {
    const {data, country, value} = this.state;
  
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <Cards data={data} />
          <SwitchTabs value={value} handleChange={this.onTabSwitch} />
          {
            value === 0 ? (
              <div className={styles.container} style={{width: '100%', marginBottom: '2%'}}>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Graph data={data} country={country} />
              </div>
            ) : (
              <div className={styles.container} style={{width: '100%', marginBottom: '2%'}}>
                <p>Hi</p>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
