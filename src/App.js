import React from 'react';
import styles from './App.module.css';
import {Cards, Graph, Header, SwitchTabs, CovidMap, ScrollToTop, Carousel, Faq, Footer} from './Components';
import {KeyboardArrowUp} from '@material-ui/icons';
import {Fab, Typography} from '@material-ui/core';
import {fetchData} from './api/apiCall';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    value: 0,
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({data});
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
        <div id="back-to-top-anchor" />
        <Header />
        <div className={styles.container}>
          <Cards data={data} />
          <SwitchTabs value={value} handleChange={this.onTabSwitch} />
          {
            value === 0 ? (
              <div className={styles.container} style={{width: '100%', marginBottom: '2%'}}>
                <Graph data={data} country={country} value={value} handleCountryChange={this.handleCountryChange} />
              </div>
            ) : (
              <div className={styles.container} style={{width: '100%', marginBottom: '2%'}}>
                <CovidMap />
              </div>
            )
          }
        </div>
        <div>
          <Typography component="h3" variant="h5" color="textSecondary"></Typography>
        </div>
        <Carousel />
        <Faq />
        <ScrollToTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollToTop>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
