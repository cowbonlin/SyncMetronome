import React from 'react';
import Tone from 'tone';

import Bpm from './Bpm';
import JamRoom from './JamRoom';
import '../styles/Main.css';

class App extends React.Component {
    state = { playing: false, bpm: 60 };
    
    componentDidMount() {
        const option = { 
            oscillator: { type  : 'sine' },
            envelope: {
                attack: 0.005,
                decay: 0.1,
                sustain: 0.03,
                release: 0.1
            }
        };
        const synth = new Tone.Synth(option).toMaster();
        Tone.Transport.bpm.value = this.state.bpm;
        Tone.Transport.scheduleRepeat( time => {
            synth.triggerAttackRelease('C4', '0.1')
        }, '4n');
    }
    
    onPlayClicked = () => {
        if (this.state.playing) {
            Tone.Transport.stop();
        }
        else {
            Tone.Transport.start();
        }
        this.setState({ playing: !this.state.playing });
    }
    
    onBpmChange = bpm => {
        this.setState({bpm: bpm});
        Tone.Transport.bpm.value = bpm;
    }
    
    render() {
        return (
            <div className="ui fluid textcontainer" id="app-container">
                <div className="ui center aligned grid">
                    <div className="four wide column">
                        <JamRoom />
                    </div>
                    
                    <div className="eight wide column">
                        <div className="ui fluid centered card" id="main-card">
                            <div className="content">
                                <h1 className="ui dividing header">Metronome</h1>
                                
                                <Bpm onBpmChange={this.onBpmChange} bpm={this.state.bpm} />
                                    
                                <button className="massive circular ui icon teal button" onClick={this.onPlayClicked} style={{marginTop: '40px'}}>
                                    <i className={`icon ${this.state.playing? 'pause':'play' }`}></i>
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
                                <button onClick={()=> {console.log(this.state)}}>hitme</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;