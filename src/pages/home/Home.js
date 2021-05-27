import React, { Component } from 'react'
import Hero from '../../components/Hero'
import { SliderData } from '../../data/SliderData'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero slides = {SliderData}/>
            </div>
        )
    }
}
