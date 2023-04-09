import React from 'react';
//Import de nos composants
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import LocationLogique from '../location/LocationLogique';

export default function Home() {
      return (
            <div>
                  <Header />
                  <LocationLogique />
                  <Footer />
            </div>
      );
}
