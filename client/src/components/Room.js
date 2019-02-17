import React from 'react';

import server from '../api/server';
import '../styles/Room.css';

class Room extends React.Component {
    state = {gotRoomCode: false, roomCode: null, connectionID: null, inputRoomCode: ''};
    
    onCreateRoomClicked = async () => {
        const response = await server.post('/room/create');
        if (response.data.status === 'suc') {
            const {roomcode, cid} = response.data;
            this.setState({gotRoomCode: true, roomCode: roomcode, connectionID: cid});
        } else if (response.data.status === 'err') {
            console.log('what the hell', response.data)
        }
        
    }
    
    onLeaveRoomClicked = async () => {
        const response = await server.post('/room/leave', {cid: this.state.connectionID});
        if (response.data.status === 'suc') {
            this.setState({gotRoomCode: false, roomCode: null, connectionID: null});
        }
    }
    
    onInputRoomCodeChange = value => {
        this.setState({inputRoomCode: value});
    }
    
    renderWaitingRoom() {
        return (
            <div>
                <button className="ui yellow button" id="create-room" onClick={this.onCreateRoomClicked}>CREATE</button>
                <h3>OR</h3>
                <div className="ui input">
                    <input 
                        type="text" 
                        placeholder="Enter Room Code" 
                        value={this.state.inputRoomCode}
                        onChange={ e => { this.onInputRoomCodeChange(e.target.value) }}
                    />
                </div>
            </div>
        );
    }
    
    renderIntoTheRoom() {
        return (
            <div>
                <b>Room Code:</b>
                <div id="room-code">{`#${this.state.roomCode}`}</div>
                <button className="ui button red" onClick={this.onLeaveRoomClicked}>LEAVE</button>
            </div>
        );
    }
    
    render() {
        const content = this.state.gotRoomCode? this.renderIntoTheRoom() : this.renderWaitingRoom();
        
        return (
            <div className="ui fluid centered card">
                <div className="content">
                    <h1 className="ui dividing header" id="room-title">Room</h1>
                    {content}
                </div>
            </div>
        );
    }
}

export default Room;