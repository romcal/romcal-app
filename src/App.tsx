import React, { lazy, Suspense, FunctionComponent, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CalendarLoader from './components/loaders/CalendarLoader';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import {
  NavLink as ReactRouterNavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// import styles from './App.module.scss';

const Calendar = lazy(() => import('./components/calendar/Calendar'));

const App: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ErrorBoundary>
      <Router>
        <Navbar color="dark" light expand="lg">
          <NavbarBrand href="/">romcal</NavbarBrand>
          <NavbarToggler
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
              setIsOpen(!isOpen)
            }
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={ReactRouterNavLink} exact to="/calendar">
                  Calendar
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route path="/calendar">
                  <Suspense fallback={<CalendarLoader />}>
                    <Calendar />
                  </Suspense>
                </Route>
                <Route path="/"></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
