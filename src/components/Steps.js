import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Start studying courses on Web Developement in English', 'Create a page on LinekedIn', 'Prepare a CV', 'Fail on few first interview', 'Get you first development job!'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Start studying courses on Web Developement in English. Bellow you can find recomended list of courses to take. Post all the meaningfull code, that you are going to write during your studies, to github. Apply gained skills to write your own pet projects and post it to github also.';
    case 1:
      return 'Create a page on LinekedIn and write there, that you are JS developer freelancer, when you starting your studies.';
    case 2:
      return 'Prepare a CV, where you can write eveything that you have learned on courses as an experience and write in technologies, all the technologies that you have used during your studies. And when you feeling ready to get a job post it online and send to the positions, that you are interested in. You might even want to find someone, who works at that company on LinkedIn and ask them to refer you there.';
    case 3: 
      return <p>Fail on few first interview and make a list of things that you could not answer during the interview. You can use some simple site as <a href="https://sheltered-gorge-83437.herokuapp.com/">this one</a> to track your interwiew questions and read questions, that other had on their interviews.</p>;
    case 4: 
      return 'Get you first development job! And keep studying advanced materials to know Algorithms and Design Patterns to be able to land you Dream Job at the company of your Dreams.'
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you are finished 😊</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
