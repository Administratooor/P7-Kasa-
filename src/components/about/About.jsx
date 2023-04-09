import React from 'react';
import Collapse from '../collapse/Collapse';
import aboutData from '../../data/about.js';
import '../styles/collapse.css';
export default function About() {
      const dataSelection = aboutData.map((data) => data);

      // RECUPERATION DE NOS COLLAPSE DEPUIS DOSSIER DATA ABOUT

      const fiability = dataSelection[0].Fiabilité;
      const respect = dataSelection[0].Respect;
      const service = dataSelection[0].Service;
      const securite = dataSelection[0].Fiabilité;

      //   const fiabilité = dataSelection[0].Fiabilité;
      return (
            <div className="accomodation_collapse">
                  <div className="accomodation_collapse_item">
                        <Collapse title={'Fiabilité'} content={fiability} />
                  </div>
                  <div className="accomodation_collapse_item">
                        <Collapse title={'Respect'} content={respect} />
                  </div>
                  <div className="accomodation_collapse_item">
                        <Collapse title={'Service'} content={service} />
                  </div>
                  <div className="accomodation_collapse_item">
                        <Collapse title={'Securite'} content={securite} />
                  </div>
            </div>
      );
}

// EN COURS A TERMINER
