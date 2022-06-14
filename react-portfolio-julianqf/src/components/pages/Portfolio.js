import React from 'react';
import Card from '../Card'

export default function Portfolio() {
  const styles = {
    footHeight: {
      height: '100px',
    },

  }

  return (
    <div className="w-75 mx-auto container">
      <div className="row">
        <Card name='Project 1' description='description of project 1' />
        <Card name='Project 2' description="description of project 1" />
      </div>
      <div className="row">
        <Card name='Project 3' description="descriptive description of project 2" />
        <Card name='Project 4' description="long long long description of project 3" />
      </div>
      <div className="row">
        <Card name='Project 5' description="description of project 1" />
        <Card name='Project 6' description="description of project 1" />
      </div>
      <div style={styles.footHeight}></div>
     </div>
  );
}
