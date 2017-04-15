import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

var Const = require('../utils/Const')
var Utils = require('../utils/Utils')
import DatePicker from 'react-native-datepicker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import BaseScreen from './BaseScreen'
import BackButton from '../component/BackButton'
import BlueButton from '../component/BlueButton'
var Strings = require('../utils/Strings')

export default class BookingSelectCarScreen extends BaseScreen {

  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
      indexRoad:0,
      indexTime:0,
    }
  }
  
  render(){
    
    var optionsRoad = [
      {label: 'Hà Nội - Nghệ An', value: 0 },
      {label: 'Nghệ An - Hà Nội', value: 1 }
    ];
    
    var optionsTime = [
      {label: 'Buổi sáng    ', value: 0 },
      {label: 'Buổi chiều', value: 1 }
    ];
    
    return(
      <View style={styles.container}>
        {/* button back */} 
        <BackButton onPress={this.pressBack.bind(this)} ></BackButton>
        
        {/* date picker */}
        <DatePicker
          style={styles.picker_date}
          date={this.state.date}
          mode="date"
          placeholder="Chọn ngày"
          format="DD/MM/YYYY"
          minDate="01/01/2000"
          maxDate="01/01/2120"
          confirmBtnText='Chọn'
          cancelBtnText='Huỷ'
          date={this.state.date}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            },
            dateText:{
              fontSize:20,
            },
            placeholderText:{
              fontSize:20,
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
          />
     
        {/* chose road */}
        <View style={{height:70, marginTop:20}}>
          <RadioForm
            radio_props={optionsRoad}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            onPress={(value) => {this.setState({indexRoad:value})}}
            />
        </View>
        
        {/* chose time */}
        <View style={{height:35, marginTop:20, justifyContent:'space-between'} }>
          <RadioForm
            radio_props={optionsTime}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            onPress={(value) => {this.setState({indexTime:value})}}
            />
        </View>
        
        {/*button search*/}
        <BlueButton onPress={this.pressContinue.bind(this)} title={Strings.CONTINUME} style={styles.button_continue}></BlueButton>

      </View>
    )
  }
  
  pressContinue(){
//     console.log('date:'+this.state.date +' road:'+this.state.indexRoad+' time:'+this.state.indexTime)
//    this.props.navigator.push({ title: 'list_customer', index: Const.SCREEN.LIST_CAR_SCREEN });
  }
  
  onSelectedRoad(selected, index){
    this.setState({
      indexRoad : index,
    });
    console.log(index)
  }
  
  setSelectedOptionTime(selected, index){
    this.setState({
      selectedIndexTime : index,
    });
  }
  
  pressBack(){
    this.props.navigator.pop();
  }

  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
  chose_date:{
    borderColor:'gray',
    borderWidth:1,
    paddingLeft:5,
    justifyContent:'center',
    borderRadius:5,
    backgroundColor:'#80808080',
    width:Dimensions.get('window').width-100,
    height:50,
  },
  chose_title:{
    fontSize:20,
    fontWeight: 'bold',
    color:'black',
  },
  chose_date_view:{
    flex:1, 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between'
  },
  image_drop_down:{
    width:30, 
    height:30,
    marginRight:5,
  },
  picker_date:{
    width:Dimensions.get('window').width-100,
  },
  button_continue:{
    marginTop:20,
  },
  
})