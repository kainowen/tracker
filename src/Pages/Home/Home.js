import React, { Component } from 'react';
import PageTemplate from '../PageTemplate';

import HomeFeedItem from '../../Components/HomeFeedItem/HomeFeedItem';

class Home extends Component {

  state = ({
      key: "value"
      });

      render () {
        return (
          <PageTemplate title='home'>
            <HomeFeedItem dateTime="13:00 01/01/2021" />
            <HomeFeedItem />
            <HomeFeedItem />
            <HomeFeedItem />
          </PageTemplate>
        );
      };

    }

export default Home;
