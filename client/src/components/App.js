import React from 'react';

import Bpm from './Bpm';
import JamRoom from './JamRoom';
import '../styles/Main.css';

class App extends React.Component {    
    render() {
        return (
            <div className="ui fluid textcontainer" id="app-container">
                <div className="ui center aligned grid">
                    <div className="four wide column">
                        <JamRoom />
                    </div>
                    
                    <div className="eight wide column">
                        <Bpm />
                    </div>
                    
                    <div className="four wide column">
                        <div className="ui fluid card">
                            <div className="content">
                                left card
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;