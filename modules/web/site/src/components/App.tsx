import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { HomePage, NotFoundPage, AboutUsPage, BlogsPage, ContactUsPage, ServicesPage } from './pages/';
import { Header, Footer } from './molecules';

const App: React.FC = () => {
  return (
    <div>
      <div className="preloader">
        <div className="loading"></div>
      </div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about-us" component={AboutUsPage} exact />
        <Route path="/blogs" component={BlogsPage} exact />
        <Route path="/contact-us" component={ContactUsPage} exact />
        <Route path="/services" component={ServicesPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

App.displayName = 'App';

export default App;
