import React, { Component } from 'react';
import moment from '../node_modules/moment';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

// include mock data as part of js bundle for now.
const events = require('./mock-data/events.json');


const styles = theme => ({
  input: {
    display: 'none',
  },
});


class Suggested extends Component {

  constructor(props) {
      super(props)

      this.state = {
        events: events
      };
  }

  componentDidMount() {
  }

  getDate(datetime) {
    return moment(datetime).format('dddd, MMM Do');
  }

  getTime(datetime) {
    return moment(datetime).format('h:mm a');
  }

  render() {

    let events = this.state.events.map(event =>
      <div key={ event.url } className="event">
        <img src={process.env.PUBLIC_URL + event.image} alt="test" />

        <div className="event-tag">
          <Chip label={event.tag} color="secondary" />
        </div>

        <div className="event-text">
          <div className="name">{event.name}</div>
          <div className="location">@ {event.location}</div>

          <div className="day">{this.getDate(event.start)}</div>
          <div className="time">{this.getTime(event.start)}</div>
        </div>

        <div className="event-save">
          <Button variant="contained" color="primary" className={styles.button}>
            Save
          </Button>
        </div>
      </div>
    )

    return (
      <div>
        { events }
      </div>
    );
  }
}


export default withStyles(styles)(Suggested);