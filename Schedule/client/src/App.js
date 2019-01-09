import React, { Component } from 'react';
import axios from 'axios';

import Schedule from './components/Schedule';
// import Feed from './components/Feed.js';
// import SidebarSchedule from './components/SidebarSchedule.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      // ramsFeed: [],
      // home view should render schedule sidebar and gamefeed on the same page
      // eslint-disable-next-line max-len
      // for now, test components by changing the "view" property until changeView method is implemented
      view: 'schedule',
    };
  }

  // componentDidMount() {
  //   // fetch schedule data
  //   fetch('espn/schedules')
  //     .then(res => res.json())
  //     .then((data) => {
  //       this.setState({
  //         schedule: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log('error: ', err);
  //     });

  // fetch feed data
  // fetch('espn/feeds')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({
  //       ramsFeed: data,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log('error: ', err);
  //   });
  // }

  componentDidMount() {
    axios.get('espn/schedules', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        const data = res.data;
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          schedule: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // TODO
  // implement changeView method to switch from main page to schedule page

  // eslint-disable-next-line consistent-return
  renderView() {
    // receives props object, destructure properties
    // const { schedule, ramsFeed, view } = this.state;
    const { schedule, view } = this.state;
    // if (view === 'home') {
    //   return (
    //     <div id="home">
    //       <div id="sidebarSchedule">
    //         <SidebarSchedule
    //           ramsSchedule={schedule}
    //         />
    //       </div>
    //       <div id="feed">
    //         <Feed
    //           ramsFeed={ramsFeed}
    //         />
    //       </div>
    //     </div>
    //   );
    // }
    if (view === 'schedule') {
      return (
        <div id="fullschedule">
          <Schedule
            ramsSchedule={schedule}
          />
        </div>
      );
    }
    // if (view === 'feed') {
    //   return (
    //     <div id="feed">
    //       <Feed
    //         ramsFeed={ramsFeed}
    //       />
    //     </div>
    //   );
    // }
    // if (view === 'sidebarSchedule') {
    //   return (
    //     <div id="sidebarSchedule">
    //       <SidebarSchedule
    //         ramsSchedule={schedule}
    //       />
    //     </div>
    //   );
    // }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
