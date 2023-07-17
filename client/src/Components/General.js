import React from 'react';


const GeneralPage = () => {
  return (
    <div className="general-page">
      <h1 className="general-page__heading">Welcome to the General Page</h1>
      <p className="general-page__text">This is the general page of your application.</p>
      <p className="general-page__text">Here, you can find a variety of information and features:</p>

      <div className="general-page__section">
        <h2 className="general-page__section-heading">Announcements</h2>
        <p className="general-page__text">Stay up-to-date with the latest news and announcements from our company.</p>
        <ul className="general-page__list">
          <li>New product releases</li>
          <li>Important updates</li>
          <li>Scheduled maintenance</li>
        </ul>
      </div>

      <div className="general-page__section">
        <h2 className="general-page__section-heading">Resources</h2>
        <p className="general-page__text">Access helpful resources and documentation:</p>
        <ul className="general-page__list">
          <li>Product documentation</li>
          <li>Tutorials and guides</li>
          <li>API reference</li>
          <li>Frequently Asked Questions (FAQs)</li>
        </ul>
      </div>

      <div className="general-page__section">
        <h2 className="general-page__section-heading">Dashboard</h2>
        <p className="general-page__text">Get an overview of your account and key metrics:</p>
        <ul className="general-page__list">
          <li>Total users</li>
          <li>Revenue</li>
          <li>Conversion rate</li>
          <li>Active users</li>
        </ul>
      </div>

      <div className="general-page__section">
        <h2 className="general-page__section-heading">Search</h2>
        <p className="general-page__text">Find specific information quickly:</p>
        <ul className="general-page__list">
          <li>Search through documentation</li>
          <li>Lookup articles in the knowledge base</li>
          <li>Find specific user accounts</li>
        </ul>
      </div>

      <div className="general-page__section">
        <h2 className="general-page__section-heading">Contact Us</h2>
        <p className="general-page__text">If you have any questions or need assistance, feel free to reach out to our support team:</p>
        <ul className="general-page__list">
          <li>Live chat support</li>
          <li>Email support</li>
          <li>Phone support</li>
        </ul>
      </div>

      <p className="general-page__text">Feel free to explore and make the most of the features available on this general page!</p>
    </div>
  );
};

export default GeneralPage;
