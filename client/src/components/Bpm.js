import React from 'react';
import Tone from 'tone';

class Bpm extends React.Component {
    state = { playing: false, bpm: 60 };
    
    componentDidMount() {
        const option = { 
            oscillator: { type  : 'sine' },
            envelope: {
                attack: 0.005,
                decay: 0.1,
                sustain: 0.03,
                release: 0.05
            }
        };
        const synth = new Tone.Synth(option).toMaster();
        Tone.Transport.bpm.value = this.state.bpm;
        Tone.Transport.scheduleRepeat( time => {
            synth.triggerAttackRelease('C5', '0.1')
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
    
    onBpmChange = bpmStr => {
        if (bpmStr === '') {
            bpmStr = '0';
        }
        const bpm = parseInt(bpmStr, 10);
        if (!isNaN(bpmStr) && bpm >= 0) {
            const bpm = parseInt(bpmStr, 10);
            this.setState({bpm: bpm});
            Tone.Transport.bpm.value = bpm;
        }
    }

    render() {
        return (
            <div className="ui fluid centered card" id="main-card">
                <div className="content">
                    <h1 className="ui dividing header">Metronome</h1>
                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="eight wide column">
                                <div className="ui massive input">
                                    <input 
                                        type="text" 
                                        value={this.state.bpm}
                                        onChange={ e => { this.onBpmChange(e.target.value) }}
                                        style={{width: '100px'}} 
                                    />
                                </div>
                                <div className="description">BPM</div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="massive circular ui icon teal button" onClick={this.onPlayClicked} style={{marginTop: '40px'}}>
                                <i className={`icon ${this.state.playing? 'pause':'play' }`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                
        );
    }
}

export default Bpm;