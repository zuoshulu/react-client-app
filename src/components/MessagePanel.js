import React from 'react';
import Message from "./Message";

export default class MessagePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    displayMessages = () => {
        return this.props.messages.map(function (msgItem, i) {
            return <Message key={i} msgItem={msgItem} />;
        });
    };

    render() {
        return (
            <div
                className="msgsC"
                style={{
                    background: "#328fa8",
                    width: "55%",
                    float: "right",
                    padding: "20px"
                }}
            >
                {this.displayMessages()}
            </div>
        );
    }
}