import React, { Component } from 'react';
import PageTemplate from '../PageTemplate';



class Settings extends Component {

  state = ({
      key: "value"
      });

      render () {
        return (
          <PageTemplate title='settings'>
            <p>Hello World</p>
          </PageTemplate>
        );
      };

    }

export default Settings;
