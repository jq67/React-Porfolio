import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import '../styles/font.css'
import Footer from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const styles = {
    background: {
      background: "#292d2e",
    },
    fontSizing: {
      fontSize: '100px',
    },
    height: {
      height: '500px',
    },
    marginTop: {
      marginTop: '63px',
    },
    fontColor: {
      color: 'white',
    },
    test: {
      fontFamily: 'Arimo, sans-serif',
    },
}

  return (
    <div className="arimo">
      <div className="container-fluid" style={{...styles.height, ...styles.background}}>
        <div className="row h-100">
          <div className="col-sm h-100 border">
            <div className="border w-75 h-75 mx-auto bg-light"  style={styles.marginTop}>picture of me</div>
          </div>
          <div className="my-auto col-sm">
            <h1 className="anybody text-end" style={{...styles.fontSizing, ...styles.fontColor}}>Julian<br></br>Quan Fun</h1>
          </div>
        </div>
      </div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}

// choose font
// margins
// colors
// photo area in heading
// card formatting
// hover effect over projects
// footer
// contact form
