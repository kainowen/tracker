import React, { Component } from 'react';
import PageTemplate from '../PageTemplate';



class Progress extends Component {

  state = ({
      key: "value"
      });

      render () {
        return (
          <PageTemplate title='progress'>
            <p>Hello World</p>
          </PageTemplate>
        );
      };

    }

export default Progress;
