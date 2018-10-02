import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Steps from './Steps.js'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Web Developers Path" />
            <Tab label="Must Watch Courses" />
            <Tab label="In Depth Learning" />
          </Tabs>
        </AppBar>
        {value === 0 && 
        		<TabContainer>
        			<h1>Web Developer Path Explained</h1>
					<h2> 5 Easy Steps to become a web developer:</h2>
					<Steps />
        		</TabContainer>}
        {value === 1 && 
	        	<TabContainer>
	        		<h1>Web Developer Path Explained</h1>
	        		<h3>Here is a list of courses that people studied and were able to find a job afterwards. Any of those materials can be bought on a sale on Udemy for 10$ or downloaded from internet, while I would incourage you to invest money in your education. That way you would be more motivated to pay it back.</h3>
					<h2>Mast Watch Courses</h2>
					<ul>
						<li>The first cours which I recommend to all the beginners is <a href="https://www.udemy.com/the-web-developer-bootcamp/">Web Developer Bootcamp on Udemy</a>.</li>
						<li>To understand JS better watch <a href="https://www.udemy.com/understand-javascript/">Java Sript Understanding Wierd Parts</a>.</li>
						<li>In order to get a job as a FrontEnd Developer you would be required to know some FrontEnd Framework. So one of the most popular frameworks at the moment is React. So here is a great tutorial, that would allow you to master React: <a href="https://www.udemy.com/react-2nd-edition/">The Complete React Web Developer Course (with Redux)</a>.</li>
					</ul>		
					<p>Usually, if you would pass those 3 courses, you would be able to get a job as a web developer.</p>
	        	</TabContainer>}
        {value === 2 && 
        		<TabContainer>
					<h1>Web Developer Path Explained</h1>
					<h2>Some more in depth courses or usefull materials</h2>
						<ul>
							<li>Facebook basic tutorial for React is a good starting point: <a href="https://facebook.github.io/react/tutorial/tutorial.html">React introduction by Facebook</a>.</li>
							<li>Nice short tutorial in Russian on how to create a React-Native Andriod and iOS apps: <a href="https://habr.com/company/plarium/blog/303328/">on HabraHabr</a>.</li>
						</ul>			

					<h2>In depth reading</h2>
						<ul>
							<li>Clean Code. Book on patterns and how to write well structured code <a href="https://drive.google.com/open?id=0BySqxsuw1D1Eb0hIOEtyVjlEOWM">Clean Code</a></li>
							<li>Algorithms in Java. Written by Lafore. Really great book on Algorithms it has explanations even for thos of us, who already forgot Math <a href="https://drive.google.com/open?id=0BySqxsuw1D1EWkZUaXRqQk54TjA">Algorithms in Java</a></li>
							<li>Book on Design Patterns by Gang of Four. Sorry no link at the moment.</li>
							<li>Nice and short explanation of main Design Patterns in Russian <a href="https://www.youtube.com/watch?v=G58ribEe0Bw&list=PLwwk4BHih4fh_aJET4PF-5Ok5iK_xgiRE&index=1">YouTube videos on Design Patterns</a></li>
						</ul>
						
					<h2>Game dev</h2>		
						<ul>
							<li>Unity 3D recommended course <a href="https://www.udemy.com/unitycourse/">Unity 3D introduction</a></li>
						</ul>
						
					<h2>Userfull Links</h2>
					<ul>
						<li>Developers org ua --- site about everthing related to IT in Ukraine. <a href="https://dou.ua/">DOU.UA</a></li>
						<li><a href="https://github.com/mbeaudru/modern-js-cheatsheet">Modern JS cheatSheet</a></li>
						<li>To prepare for JS interview here is a  <a href="https://medium.freecodecamp.org/the-definitive-javascript-handbook-for-a-developer-interview-44ffc6aeb54e">Java Script handbook</a></li>
						<li>If you want to learn how to solve questions on Logic make sure, that you read. <a href="https://www.dropbox.com/s/uumwdb1fl6okkmf/sdvinut_goru_fudzi.pdf?dl=0">How to move mount Fudzi</a> book.</li>
						<li>Here in folder there are excercises, that are usually given as a tasks during interview. It's in Python, but you can code it in any language <a href="https://drive.google.com/open?id=1-L28-XmN7TTgJoXtaK8k2oSqiirnGAqa">Course on Python in Russian</a>></li>
						<li>Good article about Oauth2 <a href="https://habrahabr.ru/post/193458/">Habr</a></li>
					</ul>			
        		</TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);