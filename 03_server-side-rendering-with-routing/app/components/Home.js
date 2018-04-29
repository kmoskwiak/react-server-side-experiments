import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet';

class Home extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            text: this.props.text
        };
    }

    onButtonClick(event) {
        event.preventDefault();
        this.props.changeText('Changed text');
    }

    render() {
        return (
            <div>
                <Helmet
                    title={this.state.title}
                />
                <h1>{this.state.title}</h1>
                <p>{this.props.text}</p>
                <div>
                    <a href="/about">About</a>
                </div>
                <div>
                    <Link to="/about">link to about</Link>
                </div>
                
                <button onClick={this.onButtonClick.bind(this)}>click</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
	return { ...state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (text) => dispatch({ type: 'CHANGE_TEXT', text: text })
    };
};

export default connect(
	mapStateToProps, mapDispatchToProps
)(Home);