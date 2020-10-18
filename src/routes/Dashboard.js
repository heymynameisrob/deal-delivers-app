import React, { useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { CalloutCard, CookieNotice, } from '../components/Cards';
import { Container } from '../components/Layout';
import { HeroHeader, Nav } from '../components/Headers';
import { LoadingSpinner } from '../components/Helpers';
import { MailchimpForm } from '../components/Forms';
import { Mail } from 'react-feather';

// Code Splitting
const LocationList = React.lazy(() => import('../components/Locations').then(module => ({ default: module.LocationList })));
const Modal = React.lazy(() => import('../components/Modal').then(module => ({ default: module.Modal })));


export const Dashboard = () => {
  return (
    <>
      <Nav />
      <HeroHeader />
      <React.Suspense fallback={<LoadingSpinner fixed={true} />}>
        <LocationList />
        <Modal />
      </React.Suspense>
      <Container style={{ paddingBottom: '6rem' }}>
        <MailchimpForm />
        <ToastContainer />        
      </Container>
    </>
  )
}
