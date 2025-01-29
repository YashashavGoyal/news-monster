import React, { Component } from 'react';

import SpinnerGif from '../../assets/Spinner/Spinner-200px-200px.gif';

export default class Spinner extends Component {
    render() {
        return (
            <>
            <div className='text-center'>
                <img src={SpinnerGif} alt="Loading..." style={{width:'100px'}} />
            </div>
            </>
        )
    }
}