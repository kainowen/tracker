import React, { Component } from 'react';
import PageTemplate from '../PageTemplate';

import classes from './Home.module.css';

import HomeFeedItem from '../../Components/HomeFeedItem/HomeFeedItem';

class Home extends Component {

  state = ({
      key: "value"
      });

      render () {
        return (
          <PageTemplate title='home' subHeader="welcome to app name...">
            <div className={classes.HomeFeed}>
              <HomeFeedItem dateTime="13:00 01/01/2021" title="workout complete" />
              <HomeFeedItem dateTime="13:00 01/01/2021" title="workout complete" />
              <HomeFeedItem dateTime="13:00 01/01/2021" title="workout complete" />
              <HomeFeedItem dateTime="13:00 01/01/2021" title="workout complete" />
              <HomeFeedItem dateTime="13:00 01/01/2021" title="workout complete" />
              <HomeFeedItem dateTime="13:00 01/01/2021" title="workout complete" />
              <HomeFeedItem dateTime="13:00 01/01/2021" title="workout complete" />
            </div>
          </PageTemplate>
        );
      };

    }

export default Home;
