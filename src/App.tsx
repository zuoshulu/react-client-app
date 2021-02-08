import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import MessageService from "./service/MessageService"
import ChannelPanel from "./components/ChannelPanel"
import MessagePanel from "./components/MessagePanel";
import PostPanel from "./components/PostPanel";

const apiClient = new MessageService();

function App() {
  //Initialize States
  let msg: Array<string> = [];
  let chns: Array<string> = [];
  var [channel, setChannel] = React.useState('');
  var [messages, setMessages] = React.useState(msg);
  var [channels, setChannels] = React.useState(chns);

  useEffect(() => {
    apiClient.getChannels().then(function (response) {
      setChannels(response);
    });
  },[]);

  const childRef = useRef();
  function channelClick(channelStr: string) {
    setChannel(channelStr);
    apiClient.getChannelMsg(channelStr).then(function (response) {
      setMessages(response);
    });
    //childRef.current.clearUserInput();
  }

  return (
    <div className="App">
      <header className="App-header">
        <ChannelPanel channel={channel} apiClient={apiClient} channels = {channels} channelClick={channelClick}/>
        <MessagePanel messages={messages} />
        <PostPanel channel={channel} apiClient={apiClient} channelClick={channelClick}></PostPanel>
      </header>
    </div>
  );
}

export default App;
