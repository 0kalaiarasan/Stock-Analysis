import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StockChart from '../components/StockChart';

const StockDetailsPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Stock Details</h2>
        <StockChart />
        {/* Additional stock details can go here */}
      </main>
      <Footer />
    </div>
  );
};

export default StockDetailsPage;
