import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  PapperBlock  from '../../components/PapperBlock/PapperBlock';
import styles from './helpSupport-jss';

class Qna extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <PapperBlock title="ABOUT CHRISTIAN YOUTH VOLUNTEERS TRUST" icon="ios-help-circle-outline" whiteBg desc="CYVAT">
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>CYVAT HISTORY & STATUS QUO</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Christian Youth Volunteers Association is registered as a Trust with the Ministry of Justice in Zimbabwe and the 
              registration number is MA23/2009. CYVAT was founded in 1995 as a youth voluntary association to cater for juveniles
              or children in distress and other vulnerabilities. Currently the organization has three memorandum of understanding
              with Binga, Lupane and Matobo District Councils. CYVAT has been in partnership with the Czech Embassy since 2009 in 
              trying to assist children with infrastructure, play material such as toys, dolls and furniture in schools. 
              In Binga and Lupane CYVAT implemented an Early Childhood Development programme targeting 60 schools from 2015 to April
              2019 this program was funded by Roger Federer Foundation through Child Protection Society as the lead organization
              in the consortium. The organization recently completed a school construction project funded by the Japan Embassy. 
              In 2017 July the organization joined a consortium named Sizimele which is implementing a resilience program. 
              In this consortium CYVAT is implementing the pillar on livelihood diversification for youth.
              
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>AREAS OF WORK & PARTNERS</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              In Lupane and Binga the organization also implemented an early childhood development education since 2014 to date.
              In this program about six schools have benefited with infrastructure and a number of other child friendly activities 
              that include health assessments for children. CYVAT is also in partnership with Care4 People Denmark where we get funding 
              for shipping furniture and hospital equipment from the North. The fund is from Recycle for development. Since July 2017, 
              CYVAT joined the Sizimele consortium funded by UNDP, UK-AID, EU and Swedish Embassy in implementing youth entrepreneurship 
              development in the Lupane district. CYVAT is also implementing a schools renovation and feeding programme partnering with the 
              Engineers without Boarders Denmark.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>CYVAT CORE VALUES</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                  (1) TOLERANCE <br/>
                  (2) INTEGRITY <br/>
                  (3) INNOVATION <br/>
                  (4) OPEN COMMUNICATION <br/>
                  (5) LOVE <br/>
                  (6) TEAMWORK <br/>
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>CYVAT VISION</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              To have a workforce that reflects inclusiveness and is diverse by race, gender and geography
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>CYVAT MISSION</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              We Are a Faith Based Organization that Works to Build Self-Sustained 
              Communities through Capacity  Building, Advocacy, Community Participation and Leadership Develpment
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>CYVAT PLOICIES</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                  The organization is governed by a Board of Trustees comprising of 7 members. On daily basis the organization is run by the 
                  Executive Director assisted by the Finance and Administration personnel. Programme implementation is conducted by programs 
                  officers, interns and community volunteers as well as other stakeholders at large.For effective management, the organization
                  has the following policies:
                  <br/>
                  Human Resource Manual Policy<br/>
                  Finance and Procurement  Procedures manual <br/>
                  Child Protection Policy <br/>
                  Gender Policy <br/>
                  Sexual Harassment Policy <br/>
                  Vehicle Policy <br/>
                  Per diem Policy
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>CYVAT ADMINISTRATION</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                The organization is governed by a board of Trustees with seven members and has a management structure headed by a Director. 
                Currently the organization has 13 members of staff. Since CYVAT was founded, it has been funded by a number of partners. 
                So far CYVAT has implemented programs funded by the Czech Embassy, Japan Embassy and the American Embassy.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </PapperBlock>
    );
  }
}

Qna.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Qna);
