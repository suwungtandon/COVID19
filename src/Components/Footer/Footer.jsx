import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import {GitHub, Instagram, LinkedIn, Twitter, Code} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%',
        overflow: 'hidden',
        marginTop: '2%',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div style={{backgroundColor: '#3c4245', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={classes.root}>
                <Button href="https://www.github.com/sniperline047">
                    <GitHub color="primary" />
                </Button>
                <Button href="https://www.github.com/sniperline047/covid19">
                    <Code color="primary" />
                </Button>
                <Button href="https://www.linkedin.com/in/ayushsingh-sl047/">
                    <LinkedIn color="primary" />
                </Button>
                <Button href="https://www.instagram.com/asingh047/">
                    <Instagram color="primary" />
                </Button>
                <Button href="https://twitter.com/ayushstar09">
                    <Twitter color="primary" />
                </Button>
            </div>
            <p style={{margin: '2%', color: '#FFF'}}>© 2020 sniperline047</p>
        </div>
    );
}

export default Footer;
