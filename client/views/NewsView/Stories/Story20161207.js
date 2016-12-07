import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import Collapsible from 'react-collapsible';

export default function Story20161207() {
  return (
    <Story
      title="BD2K-LINCS DCIC at the 2016 BD@K All-Hands Meeting and Open Data Science Symposium"
      date="December 7th, 2016"
    >
      <p>
        Members of the BD2K-LINCS Data Coordination and Integration Center
        participated in the BD2K All-Hands Meeting and Open Data Science
        Symposium in Bethesda, MD which took place on November 29 – December
        1, 2016. The BD2K All-Hands Meeting brought together researchers,
        educators, developers, and trainees funded by the BD2K Initiative.
        The goals of the All-Hands Meeting were to showcase the work being
        done by BD2K-sponsored programs and to build a cohesive BD2K consortium
        that maximizes synergies between participants.
      </p>
      <Collapsible trigger="Research Highlights">
        <ul>
          <li>
            <p>
              Predicting Adverse Cardiovascular Events for Tyrosine Kinase
              Inhibitors from Molecular Features (Podium Presentation by
              Anders Dohlman)
            </p>
          </li>

          <li>
            <p>
              Extraction and Analysis of Signatures from the Gene Expression
              Omnibus by the Crowd
            </p>
          </li>
        </ul>
      </Collapsible>

      <Collapsible trigger="Data Commons">
        <ul>
          <li>
            <p>
              FAIR Dataset Landing Pages, Digital Research Objects,
              and Software Tools for LINCS and BD2K
            </p>
          </li>

          <li>
            <p>
              Cloud-Based Drag-and-Drop Scalable RNA Sequencing Pipeline
            </p>
          </li>

          <li>
            <p>
              The Harmonizome:  A Collection of Processed Datasets
              Gathered to Serve and Mine Knowledge about Genes
            </p>
          </li>

          <li>
            <p>
              RNA-Seq Pipeline Tutorial with an Example of Reprocessing
              Data from a Recent Zika Virus Study
            </p>
          </li>

          <li>
            <p>
              Deriving Signatures of Pharmacological Action via LINCS Signatures
            </p>
          </li>
        </ul>
      </Collapsible>

      <Collapsible trigger="Standards Development">
        <ul>
          <li>
            <p>
              Integrative Representation and Analysis of the LINCS Cell
              lines using the Cell Line Ontology
            </p>
          </li>
        </ul>
      </Collapsible>

      <Collapsible trigger="Training and Workforce Development">
        <ul>
          <li>
            <p>
              Community Training and Outreach Activities of the BD2K-LINCS DCIC
            </p>
          </li>
        </ul>
      </Collapsible>

      <span className={styles['twitter-label']}>
        <a
          title="Follow @BD2KLINCSDCIC on Twitter"
          href="https://twitter.com/BD2KLINCSDCIC"
        >
          Follow <strong>@BD2KLINCSDCIC</strong>
        </a>
      </span>
    </Story>
  );
}
