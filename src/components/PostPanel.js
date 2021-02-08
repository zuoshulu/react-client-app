import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class PostPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            disabled: true
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
        this.state.disabled = event.target.value != ''? false : true;
    };

    clearUserInput() {
        this.setState({
            value: '',
        });
        this.state.disabled = true;
    }

    handleClick = () => {
        this.props.apiClient.createChannelMsg(this.props.channel, this.state.value).then(function (response){});
        this.clearUserInput();
        this.state.disabled = true;
        this.props.channelClick(this.props.channel);
    };

    render() {
        return ( 
            <div>
                <br></br>
                <TextField
                    value={this.state.value}
                    onChange={this.handleChange}
                    label="Enter a message"
                    variant="outlined"
                />
                <Button variant="contained" color="primary" onClick={this.handleClick} disabled={this.state.disabled}>
                    Submit
                </Button>
            </div>
        );
    }
}