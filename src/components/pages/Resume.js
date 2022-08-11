import React from 'react';
import jqResume from '../../assets/jquanfunResume.pdf'
import screenShot from '../../assets/resumeScreen.png'


export default function Resume() {
  return (
    <div className="text-center">
      <h1 className="anybody m-3">Resume</h1>
      <a className="p-3" href={jqResume} download="jqResume"><h3>Download</h3></a>
      <div>
        <img src={screenShot} alt="resume screenshot"></img>
      </div>
    </div>
  );
}
