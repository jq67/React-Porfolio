import React from 'react';
import jqResume from '../../assets/jquanfunResume.pdf'
import coverLetter from '../../assets/coverLetter.pdf'
import screenShot from '../../assets/resumeScreen.png'


export default function Resume() {
  return (
    <div className="text-center">
      <h1 className="anybody m-3">Resume</h1>
      <a className="p-3" href={coverLetter} download="coverLetter"><h3>Cover Letter</h3></a>
      <a className="p-3" href={jqResume} download="jqResume"><h3>Download</h3></a>
      <div>
        <img src={screenShot} alt="resume screenshot"></img>
      </div>
    </div>
  );
}
