import React, { lazy, Suspense, FunctionComponent } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import CalendarLoader from './components/loaders/CalendarLoader';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

// import styles from './App.module.scss';

const Calendar = lazy(() => import('./components/calendar/Calendar'));

const App: FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <Navbar color="dark" light expand="lg">
        <NavbarBrand href="/">romcal</NavbarBrand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Suspense fallback={<CalendarLoader />}>
              <Calendar />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </ErrorBoundary>
  );
};

export default App;
