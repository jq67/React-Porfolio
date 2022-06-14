import React from 'react';

function Footer() {
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
        <footer className="bg-light text-center text-lg-start anybody">
      <div className="text-center p-3 fixed-bottom" style={styles.background}>
        <a className="text-light" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      </footer>
    )
}

export default Footer