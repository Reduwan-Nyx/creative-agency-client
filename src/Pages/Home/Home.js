import React from 'react';
import Banner from './Banner/Banner';
import Company from './Company/Company';
import Footer from './Footer';
import MakeAppointment from './MakeAppointment';
import Navbar from './Navbar';
import Service from './Service/Service';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Company></Company>
            <Service></Service>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;