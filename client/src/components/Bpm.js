import React from 'react';

class Bpm extends React.Component {
    onBpmChange = bpmStr => {
        if (bpmStr === '') {
            bpmStr = '0';
        }
        const bpm = parseInt(bpmStr, 10);
        if (!isNaN(bpmStr) && bpm >= 0) {
            const bpm = parseInt(bpmStr, 10);
            this.props.onBpmChange(bpm);
        }
    }
    
    render() {
        return (
            <div className="ui center aligned grid">
                <div className="eight wide column">
                    <div className="ui massive input">
                        <input 
                            type="text" 
                            value={this.props.bpm}
                            onChange={ e => { this.onBpmChange(e.target.value) }}
                            style={{width: '100px'}} 
                        />
                    </div>
                    <div className="description">BPM</div>
                </div>
            </div>
        );
    }
}

export default Bpm;