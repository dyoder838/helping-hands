import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    
  },
  pos: {
    marginBottom: 12,
  },
});

export default function InfoPane() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography variant="h5" component="h2" className={classes.title}>
         Welcome!
        </Typography>
       
        <Typography variant="body2" component="p">
          welcome to our App, it is still under construction; please enjoy watching it grow.
          <br />
          Here we will tell you our mission statement. 
          <br />
          Here we will tell you our rules. 
        </Typography>

      </CardContent>
   
    </Card>
  );
}