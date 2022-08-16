import React from 'react';

export default function About() {
  const styles = {
    background: {
      background: "#292d2e",
    },
  }

  return (
    <div className="text-light m-3" style={styles.background}>
      <h1 className="anybody p-3 text-light border m-0">About Me</h1>
      <p className="arimo p-3 border m-0">
       My name is Julian Quan Fun. I started learning coding through various online resources towards the end of 2021. In 2022 I learned front and back-end web development through a bootcamp course offered by the University of Toronto. I aspire to become a full time programmer. </p>
        <div className="arimo p-3 border m-0 container-fluid">
          <div className="row">
            <h3 className="anybody">Languages</h3>
              <div className="col-sm">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Node.js</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="col-sm">
                <ul>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                  <li>Webpack</li>
                  <li>React</li>
                </ul>
              </div>            
          </div>
          <div className="arimo m-0">
                <h3 className="anybody">My Hobbies</h3>
              <ul>
                <li>Watching NBA and NFL</li>
                <li>Playing Piano</li>
                <li>Playing Poker</li>
                <li>Gaming</li>
              </ul>
          </div>
        </div>
      <p className="p-3 border m-0">I am currently in the process of learning some python, AWS and C#.</p>
    </div>
  );
}
