import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'
import { generalServices, LC, PC, PW } from '../components/Services/Data'
import UserForm from '../components/Forms/UserForm'
import Footer from '../components/Footer'
import PageLoader from '../components/PageLoader/PageLoader'


import MessengerCustomerChat from 'react-messenger-customer-chat';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <PageLoader />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Services {...generalServices}
                {...LC}
                {...PC}
                {...PW} />
            <InfoSection {...homeObjTwo} />
            <UserForm />
            <Footer />
            <MessengerCustomerChat
                pageId="102430202572038"
                appId="925574071736483"
            />
        </>
    )
}

export default Home