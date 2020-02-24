import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Swati Maheshwari</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hey there! I have been in IT industry from past 9 years and this are my experiments with react.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Bangalore</p>
            <h5>Phone</h5>
            <p>9561578449</p>
            <h5>Email</h5>
            <p>er.swatimaheshwari@gmail.com</p>
            <h5>Web</h5>
            <p>swatimaheshwarireactportfolio.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2006}
              endYear={2010}
              schoolName="Shree Vaishnav Institute of Technology and Science"
              schoolDescription="Graduated with 75%"
               />

               
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Citi"
              jobDescription="Assistant Manager"
              />

              <Experience
                startYear={2016}
                endYear={2018}
                jobName="Cognizant"
                jobDescription="Associate projects"
                />

                <Experience
                startYear={2014}
                endYear={2016}
                jobName="Wolters Kluwer"
                jobDescription="Software Developer II"
                />

                <Experience
                startYear={2010}
                endYear={2014}
                jobName="Infosys"
                jobDescription="System engineer"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={50}
                  />
                  <Skills
                    skill="React"
                    progress={80}
                    />
                    <Skills
                      skill="Redux"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
