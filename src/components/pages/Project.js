import React from 'react';
import Card from '../Card'
import Carousel from 'react-bootstrap/Carousel'
import '../../styles/font.css'

import WFD from '../../project_images/WFD.png';
import SQL from '../../project_images/SQL-employee-tracker.png';
import TechBlog from '../../project_images/TechBlog.png';
import codeQuiz from '../../project_images/codeQuiz.png';
import noteTaker from '../../project_images/noteTaker.png';
import pGen from '../../project_images/passwordGenerator.png';
import bookSearch from '../../project_images/bookSearch.png';
import stateRedux from '../../project_images/stateRedux.png';


export default function Portfolio() {
  const styles = {
    footHeight: {
      height: '50px',
    },
    height: {
      height: '300px',
    },
    imgStyle: {
      opacity: 0.4,
      maxHeight: '70%',
      maxWidth: '70%',
    },
    captionStyle: {
      top: "40%",
      bottom: "auto",
    }
  }

  return (
    <div>
    <Carousel className="m-3 bg-dark">
      <Carousel.Item>
        <a href="https://jq67.github.io/Javascript---Password-Generator/"><img
          className="mx-auto d-block w-100"
          src={pGen}
          alt="Seventh slide"
          style={styles.imgStyle}
        /></a>
        <Carousel.Caption className="text-dark bg-light" style={styles.captionStyle}>
          <h1 className="text-dark anybody m-4">Password Generator</h1>
          <p className="text-dark">An app that prompts the user for password criteria and generates a password based on the criteria.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://jq67.github.io/Web-Api---Coding-quiz/"><img
          className="mx-auto d-block w-100"
          src={codeQuiz}
          alt="Fifth slide"
          style={styles.imgStyle}
        /></a>
        <Carousel.Caption className="text-dark bg-light" style={styles.captionStyle}>
          <h1 className="text-dark anybody m-4">Code Quiz!</h1>
          <p className="text-dark">A short quiz made with Html and Javascript</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <a href="https://github.com/jq67/SQL---Employee-Tracker"><img
          className="mx-auto d-block w-100"
          src={SQL}
          alt="Third slide"
          style={styles.imgStyle}
        /></a>
        <Carousel.Caption className="text-dark bg-light" style={styles.captionStyle}>
          <h1 className="text-dark m-4 anybody">MySQL Employee Tracker</h1>
          <p className="text-dark">An app made using MySQL, and the console-table and inquirer npm packages to save, track and view employee info.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a href="https://express---note-taker.herokuapp.com/"><img
          className="mx-auto d-block w-100"
          src={noteTaker}
          alt="Sixth slide"
          style={styles.imgStyle}
        /></a>
        <Carousel.Caption className="text-dark bg-light" style={styles.captionStyle}>
          <h1 className="text-dark anybody m-4">Express Note Taker</h1>
          <p className="text-dark">A Note taker app to store notes that uses express for the routing.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a href="https://mvc---tech-blog.herokuapp.com/"><img
          className="mx-auto d-block w-100"
          src={TechBlog}
          alt="Fourth slide"
          style={styles.imgStyle}
        /></a>
        <Carousel.Caption className="text-dark bg-light" style={styles.captionStyle}>
          <h1 className="text-dark m-4 anybody">Tech Blog</h1>
          <p className="text-dark">A MVC style app that allows users to share posts and comment on other users posts</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a href="https://mern-book-searchengine.herokuapp.com/"><img
          className="mx-auto d-block w-100"
          src={bookSearch}
          alt="Seventh slide"
          style={styles.imgStyle}
        /></a>
        <Carousel.Caption className="text-dark bg-light" style={styles.captionStyle}>
          <h1 className="text-dark anybody m-4">Google Book Search Engine</h1>
          <p className="text-dark">A react-app that was refactored to use graphql typedefs and mutations, and the useQuery and useMutation react hooks.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a href="https://state--redux.herokuapp.com/"><img
          className="mx-auto d-block w-100"
          src={stateRedux}
          alt="Seventh slide"
          style={styles.imgStyle}
        /></a>
        <Carousel.Caption className="text-dark bg-light" style={styles.captionStyle}>
          <h1 className="text-dark anybody m-4">State Redux-Store</h1>
          <p className="text-dark">A react app that was refactored to use Redux to manage global state.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a href="https://whatsfordinner-v2.herokuapp.com/"><img
          className="mx-auto d-block w-100"
          src={WFD}
          alt="First slide WFD recipe"
          style={styles.imgStyle}
        /></a>
        <Carousel.Caption className="text-dark bg-light p-3" style={styles.captionStyle}>
          <h1 className="text-dark m-4 anybody">Whats for Dinner?</h1>
          <p className="text-dark">A fullstack app made following MVC architecture. The backend was created using node.js, mysql, express and sequelize, while the front end was made with express-handlebars, javascript, some css and other npm packages.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a href="https://wfd-react.herokuapp.com/"><img
          className="mx-auto d-block w-100"
          src={WFD}
          alt="Second slide WFD recipe"
          style={styles.imgStyle}
        /></a>
        <Carousel.Caption className="text-dark bg-light" style={styles.captionStyle}>
          <h1 className="text-dark m-4 anybody">Whats for Dinner React</h1>
          <p className="text-dark">Whats for Dinner remade using MongoDB and GraphQL for the backend, and React and other packages for the frontend.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    {/* <div style={styles.footHeight}></div> */}
    </div>
  );
}