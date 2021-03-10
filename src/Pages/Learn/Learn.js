import React, { Component } from 'react';
import PageTemplate from '../PageTemplate';



class Learn extends Component {

  state = ({
      key: "value"
      });

      render () {
        return (
          <PageTemplate title='learn'>
            <p>Hello World</p>
          </PageTemplate>
        );
      };

    }

export default Learn;
