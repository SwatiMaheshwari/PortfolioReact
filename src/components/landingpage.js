  import React, { Component } from 'react';
  import { Grid, Cell } from 'react-mdl';


  class Landing extends Component {
    render() {
       console.log("This is the process.env", process.env.PUBLIC_URL)
      return(
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                className="avatar-img"
                />

              <div className="banner-text">
                <h1> Web Developer</h1>

              <hr/>

            <p>HTML/CSS | JavaScript | React | Redux | Angular | Bootstrap</p>

          <div className="social-links">

            {/* LinkedIn */}
            <a href="https://in.linkedin.com/in/swatikmaheshwari" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="https://github.com/SwatiMaheshwari" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Freecodecamp */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a>

            {/* Youtube */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>

          </div>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
  }

  export default Landing;
