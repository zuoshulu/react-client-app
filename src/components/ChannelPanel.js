import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default class ChannelPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <List component="nav">
                {this.props.channels.map(c => (
                    <ListItem key={c} selected={c==this.props.channel}>
                        <ListItemText primary={c} onClick={() => this.props.channelClick(c)} />
                    </ListItem>
                ))}
            </List>
        );
    }
}