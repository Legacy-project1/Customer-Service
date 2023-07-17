import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { SetLoader } from "../../redux/loadersSlice";
import {  message } from "antd";


function Home() {
  

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);
  const getData = async () => {
    try {
      dispatch(SetLoader(true));

      dispatch(SetLoader(false));
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="home">
      <header>
        
        <h1>Welcome to Our Customer Service App</h1>
        <p>Providing exceptional support for all your needs</p>
        <h1 className="click">Click on your name </h1>
      </header>

      <section id="features" >
        <h2 className="h2-1">Key Features</h2>
        <ul>
          <li>24/7 customer support</li>
          <li>Fast response times</li>
          <li>Knowledgeable support agents</li>
          <li>Seamless ticketing system</li>
        </ul>
      </section>

      <section id="testimonials">
        <h2 className="h2-1">What Our Customers Say</h2>
        <div className="testimonial">
          <p>
            "The customer service provided by this app is outstanding. They
            resolved my issues quickly and professionally."
          </p>
          <p className="customer">- John Doe</p>
        </div>
        <div className="testimonial">
          <p>
            "I've tried other customer service platforms, but this one stands
            out. The support team is knowledgeable and responsive."
          </p>
          <p className="customer">- Jane Smith</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Customer Service App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
