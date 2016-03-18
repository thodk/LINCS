import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';
import HomeView from 'views/HomeView';

// Centers
import CentersOverView from 'views/CentersView/Overview';

// DSGCs
import DSGCs from 'views/CentersView/DSGCs';
import DToxS from 'views/CentersView/DSGCs/DToxS';
import HMSLINCS from 'views/CentersView/DSGCs/HMSLINCS';
import LINCSTranscriptomics from 'views/CentersView/DSGCs/LINCSTranscriptomics';
import LINCSPCCSE from 'views/CentersView/DSGCs/LINCSPCCSE';
import MEPLINCS from 'views/CentersView/DSGCs/MEPLINCS';
import NeuroLINCS from 'views/CentersView/DSGCs/NeuroLINCS';

// DCIC
import DCIC from 'views/CentersView/DCIC';

// LINCS Phase One
import PhaseOne from 'views/CentersView/PhaseOne';

import AnalyzeView from 'views/AnalyzeView';
import DiscoverView from 'views/DiscoverView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import NotFoundView from 'views/NotFoundView';

export default (/* store */) => (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Redirect from="/centers" to="/centers/overview" />
    <Route path="/centers/overview" component={CentersOverView} />
    <Route path="/centers/data-and-signature-generating-centers" component={DSGCs} />
    <Route path="/centers/data-and-signature-generating-centers/dtoxs" component={DToxS} />
    <Route path="/centers/data-and-signature-generating-centers/hms-lincs" component={HMSLINCS} />
    <Route
      path="/centers/data-and-signature-generating-centers/lincs-transcriptomics"
      component={LINCSTranscriptomics}
    />
    <Route
      path="/centers/data-and-signature-generating-centers/lincs-pccse"
      component={LINCSPCCSE}
    />
    <Route path="/centers/data-and-signature-generating-centers/mep-lincs" component={MEPLINCS} />
    <Route
      path="/centers/data-and-signature-generating-centers/neurolincs"
      component={NeuroLINCS}
    />
    <Route path="/centers/dcic" component={DCIC} />
    <Route path="/centers/phase-one" component={PhaseOne} />
    <Route path="/analyze" component={AnalyzeView} />
    <Route path="/discover" component={DiscoverView} />
    <Route path="/register" component={RegisterView} />
    <Route path="/login" component={LoginView} />
    <Route path="*" component={NotFoundView} />
  </Route>
);
