import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';

export default function Story20150208() {
  return (
    <Story
      title="Publication Highlight | HMS LINCS Center"
      date="December 20th, 2017"
      author="Alexandra B. Keenan"
    >
      <img
        src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5662764/bin/41467_2017_1383_Fig2_HTML.jpg"
        alt="dcic"
        className={styles['inline-img-left']}
        style={{ maxWidth: '25rem', maxHeight: '25rem' }}
      />

      <p>
        <strong>
          Common and cell-type specific responses to anti-cancer drugs
        </strong>
      </p>

      <p>
        In a related study published recently in Nature Communications Niepel
        et al. (2017) combined L1000 expression signatures together with cell
        growth phenotypes for over 600 drug-cell line combinations. The study
        demonstrates that phenotypic responses and transcriptional changes
        generally correlate across cell lines treated with anti-cancer drugs.
        However, while chaperone and cell cycle kinase inhibitors induce similar
        transcriptional changes across cell lines, intra-cellular signaling kinase
        inhibitor responses are cell-type specific. In addition, the study demonstrates
        how drug combinations to combat resistance can be inferred from single
        drug expression signatures combined with cell viability measures.
      </p>
      <p>
        Niepel, M. et al. Common and cell-type specific responses to anti-cancer
        drugs revealed by high throughput transcript profiling. <i>Nat Commun</i> 8, 1186,
        doi:10.1038/s41467-017-01383-w (2017).
      </p>

      <span className={styles['twitter-label']} style={{ marginBottom: '2rem' }}>
        <a
          title="Follow @LINCSProgram on Twitter"
          href="https://twitter.com/LINCSProgram"
        >
          Follow <strong>@LINCSProgram</strong>
        </a>
      </span>
    </Story>
  );
}
