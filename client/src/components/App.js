import React from 'react';

import '../styles/Main.css';

class App extends React.Component {
    render() {
        return (
            <div className="ui textcontainer">
                <div className="ui center aligned grid" style={{marginTop: '50px'}}>
                    <div className="eight wide column">
                        <div className="ui fluid centered card" id="main-card">
                            <div className="content">
                                <h1 className="ui dividing header">Metronome</h1>
                                
                                <div className="row">
                                    <div className="ui center aligned grid">
                                        <div className="eight wide column">
                                            <div className="ui massive input">
                                                <input type="text" value="170" style={{width: '100px'}} />
                                            </div>
                                            <div className="description">BPM</div>
                                        </div>
                                    </div>
                                </div>
                                    
                                <button className="massive circular ui icon teal button" style={{marginTop: '40px'}}>
                                    <i className="icon play"></i>
                                </button>
                                    
                                <div className="ui three basic blue icon buttons" style={{marginTop: '40px'}}>
                                    <button className="ui button">
                                        <i className="music icon"></i>
                                    </button>
                                    <button className="ui button">
                                        <i className="wifi icon"></i>
                                    </button>
                                    <button className="ui button">
                                        <i className="cog icon"></i>
                                    </button>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;