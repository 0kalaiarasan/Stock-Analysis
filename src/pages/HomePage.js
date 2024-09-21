import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to Stock Analysis</h2>
        {/* Additional content can go here */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
