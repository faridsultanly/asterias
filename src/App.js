import React, { Component } from 'react'
import Header from './components/header/Header'
import AboutSection from './components/sections/AboutSection'
import StartOnlineSection from './components/sections/StartOnlineSection'
import ServiceSection from './components/sections/ServiceSection'
import TrainingSection from './components/sections/TrainingSection'
import ServicePackage from './components/sections/ServicePackage'
import BlogSection from './components/sections/BlogSection'
import LastUpdateSection from './components/sections/LastUpdateSection'
import ImageSection from './components/sections/ImageSection'
import Footer from './components/sections/Footer'

export class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <AboutSection />
            <StartOnlineSection />
            <ServiceSection />
            <TrainingSection />
            <ServicePackage />
            <BlogSection />
            <LastUpdateSection />
            <ImageSection />
            <Footer />
        </div>
    )
  }
}

export default App