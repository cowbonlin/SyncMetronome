import React from 'react';

import '../styles/JamRoom.css';

class JamRoom extends React.Component {
    render() {
        return (
            <div className="ui fluid centered card">
                <div className="content">
                    <h1 className="ui dividing header">Jam Room</h1>
                    <button className="ui yellow button" id="create-room">CREATE</button>
                </div>
            </div>
        );
    }
}

export default JamRoom;