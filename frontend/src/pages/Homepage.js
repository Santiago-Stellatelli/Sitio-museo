import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Main from '../components/Main';

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Main />
      <script>
        window.onload = function() {
          window.scrollTo(0, 0)};
      </script>
    </div>
  );
}

export default Homepage;

