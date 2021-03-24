import React, {Component} from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={'resume-container'}>
                <div id={'resume-pdf'}>You can view, download and print my résumé in pdf format in <a
                    href={'Assets/MjocResume.pdf'}></a></div>
            </div>
        );
    }
}

export default Resume;