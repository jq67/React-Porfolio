import React, { useState, useEffect } from 'react';
import NavTabs from './NavTabs';
import Projects from './pages/Project';
import About from './pages/About';
import Resume from './pages/Resume';
// import Contact from './pages/Contact';
import '../styles/font.css'
import Footer from './Footer'
import Picture from '../assets/jqPic.jpg';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  useEffect(() => {
    document.title = "Julian Quan Fun's Porfolio"
  }, [])

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
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
    footHeight: {
      height: "130px",
    },
    imgSize: {
      height: "100%",
      width: "70%",
    },
    imgDiv: {
      background: "#292d2e",
      marginTop: '63px',
    }
}

  return (
    <div className="arimo">
      <div className="container-fluid" style={{...styles.height, ...styles.background}}>
        <div className="row h-100">
          <div className="col-sm h-100">
            <div className="border-dark w-50 h-75 mx-auto text-center"  style={styles.imgDiv}><div className="h-100 w-100"><img src={Picture} alt="pic of me" style={styles.imgSize}></img></div></div>
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
      <div style={styles.footHeight}></div>
      <Footer />
    </div>
  );
};
