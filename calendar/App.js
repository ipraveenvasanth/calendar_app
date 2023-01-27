import React from 'react';
import { View,Button,StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars'
const App = () => {
  return (

    <View style={{ flex:1,height: "100%", width: "100%" ,backgroundColor:'#ff7f00'}}>

      <Calendar
        // disableArrowLeft   
        // disableArrowRight
        //hideArrows 
        //hideDayNames
        //hide ExtraDays  
        // minDate={"2021-02-05"}
        //maxDate={"2021-05-23"}
        //monthFormat='dd MM yyyy'
        theme={
          {
            calendarBackground:'grey'
          }
        }
        firstDay={1}
        showWeekNumbers
      />
{/* <Button style = {styles.button}
title='start'></Button> */}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 200,
    paddingLeft: 30,
    paddingRight:30,
    color: 'green',
    height: 60,
    alignContent: 'center',
    justifyContent: 'center'
  },
})

export default App;

