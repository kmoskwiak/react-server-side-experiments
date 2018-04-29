import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Helmet from 'react-helmet';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Helmet
                    title="About"
                />
                <p>About</p>
            </div>
        );
    }
}


export default About;