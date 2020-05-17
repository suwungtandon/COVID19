import React, {useState, useEffect} from 'react';
import {Select, FormControl, Button, makeStyles, withStyles} from '@material-ui/core';
import {fetchCountries} from '../../api/apiCall';

import styles from './CountryPicker.module.css';

const useStyles = makeStyles((theme) => ({
    button: {
        position: 'relative',   
        alignSelf: 'center',
    },
    select: {
        color: '#FFF',
        '&:before': {
            borderColor: '#FFF',
        },
        '&:after': {
            borderColor: '#FFF',
        }
    }, 
    icon: {
        fill: '#FFF',
    },
    select1: {
        color: '#000',
    }
}));

const ColorButton = withStyles((theme) => ({
    root: {
       backgroundColor: 'primary',
      '&:hover': {
        background: 'linear-gradient(45deg, #23DDD0 30%, #30ED18 90%)',
      },
    },
}))(Button);

const CountryPicker = ({handleCountryChange, country}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchApi();
    }, [setFetchedCountries]);

    const classes = useStyles();

    return (
        <ColorButton         
            variant="contained"
            color="primary"
            className={classes.button}
        >
            <FormControl className={styles.formControl}>
                <Select native value={country} 
                    onChange={(e) => handleCountryChange(e.target.value)} 
                    className={classes.select}                 
                    inputProps={{
                        classes: {
                            icon: classes.icon,
                        },
                    }}
                >
                    <option value="" className={classes.select1}>Global</option>
                    {fetchedCountries.map((country, index) =>
                        <option key={index} value={country.iso2} className={classes.select1}>{country.name}</option>
                    )}
                </Select>
            </FormControl>
        </ColorButton>
    );
}

export default CountryPicker;
