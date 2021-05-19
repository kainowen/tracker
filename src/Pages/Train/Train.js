import React, { Component } from 'react';
import PageTemplate from '../PageTemplate';
import firebase from '../../Firebase/Firebase';
import { Route } from "react-router-dom";

import StartWorkoutIcons from '../../Components/StartWorkoutIcons/StartWorkoutIcons'

class Train extends Component {

  state = ({
      key: "value"
      });

componentDidMount() {
  const firebaseDB = firebase.database();

  const dbResults = firebaseDB.ref().child('Workouts');
  dbResults.on('value', (snapshot) => {
    const data = snapshot.val();
    const workout = data;
    const arrWorkouts = Object.keys(workout);
    console.log(arrWorkouts);
    this.setState({
      workouts: arrWorkouts
    })
  });
}



      render () {
        const arrWorkoutsList = {...this.state.workouts};
        console.log(arrWorkoutsList);

        return (
          <PageTemplate title='Add a workout' subHeader="lets get started...">
              <Route exact path="/train/select_phase">
                <StartWorkoutIcons workoutTitle="Starting Strength - Cycle 1" target='select_workout' />
                <StartWorkoutIcons workoutTitle="Starting Strength - Cycl 2" target='select_workout' />
                <StartWorkoutIcons workoutTitle="Starting Strength - Cycle 2" target='select_workout' />
              </Route>
              <Route exact path="/train/select_workout" >
                <StartWorkoutIcons workoutTitle="Workout A" target='workout_a' />
                <StartWorkoutIcons workoutTitle="Workout B" target='workout_b' />
              </Route>
          </PageTemplate>
        );
      };

    }

export default Train;
