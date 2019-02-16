import React from 'react';

import Bpm from './Bpm';
import Room from './Room';
import '../styles/Main.css';

class App extends React.Component {    
    render() {
        return (
            <div className="ui fluid textcontainer" id="app-container">
                <div className="ui center aligned grid">
                    <div className="four wide column">
                        <Room />
                    </div>
                    
                    <div className="eight wide column">
                        <Bpm />
                    </div>
                    
                    <div className="four wide column">
                        <div className="ui fluid card">
                            <div className="content">
                                Coming Soon...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;