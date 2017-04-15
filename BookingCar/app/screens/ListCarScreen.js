import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

var Const = require('../utils/Const')
var Utils = require('../utils/Utils')
import DatePicker from 'react-native-datepicker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import BaseScreen from './BaseScreen'
import BackButton from '../component/BackButton'

export default class ListCarScreen extends BaseScreen {
  
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
        
        {/* date */}
        {/*<TouchableHighlight style={styles.chose_date} onPress={this.pressChoseDate} underlayColor='#808080AA'>
          <View style={styles.chose_date_view}>
            <Text style={styles.chose_title}>Chọn ngày</Text>
            <Image source={require('../images/drop_down.png')} style={styles.image_drop_down}></Image>
          </View>  
        </TouchableHighlight>*/}
        
        {<DatePicker
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
          />}
     
        <View style={{height:70, marginTop:20}}>
          <RadioForm
            radio_props={optionsRoad}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            onPress={(value) => {this.setState({indexRoad:value})}}
            />
        </View>
        
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
        <TouchableHighlight style={styles.button_search} onPress={this.pressSearch.bind(this)} underlayColor={Const.COLOR.COLOR_2E7D32_PRESS}>
          <Text style={styles.button_title}>Tìm kiếm</Text>
        </TouchableHighlight>

      </View>
    )
  }
  
  pressSearch(){
    //console.log('date:'+this.state.date +' road:'+this.state.indexRoad+' time:'+this.state.indexTime)
    this.props.navigator.push({ title: 'list_customer', index: Const.SCREEN.LIST_CUSTOMER_SCREEN });
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
  button_search:{
    backgroundColor:Const.COLOR.COLOR_0277BD,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:5,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    width:Dimensions.get('window').width - 100,
  },
  button_title:{
    fontSize:20,
    fontWeight: 'bold',
    color:'white',
  },
  
})