import React, { Component } from 'react';
import PageTemplate from '../PageTemplate';
import firebase from '../../Firebase/Firebase';


class Train extends Component {

  state = ({
      key: "value"
      });

componentDidMount() {
  const firebaseDB = firebase.database();

  const dbResults = firebaseDB.ref();
  dbResults.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}



      render () {
        return (
          <PageTemplate title='train'>
            <p>Hello World</p>
          </PageTemplate>
        );
      };

    }

export default Train;
