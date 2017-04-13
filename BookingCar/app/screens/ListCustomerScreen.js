import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  Image,
  ListView,
} from 'react-native';

var Const = require('../utils/Const')
var Utils = require('../utils/Utils')
import DatePicker from 'react-native-datepicker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import BaseScreen from './BaseScreen'

var DATA=[
  {stt:'1', name:'hoang', sdt:'012345678',thanhtoan:'170'},
  {stt:'2', name:'nguyen', sdt:'012345678',thanhtoan:'160'},
  {stt:'3', name:'Hung', sdt:'012343432',thanhtoan:'170'},
]

export default class ListCustomerScreen extends BaseScreen {
  
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>{r1 != r2}})
    this.state={
      dataSource:ds.cloneWithRows(DATA),
    }

  }

  render(){
    return(
      <View style={styles.container}>
        {/* button back */} 
        <TouchableHighlight style={styles.button_back} onPress={this.pressBack.bind(this)} underlayColor={Const.COLOR.COLOR_607D8B_PRESS}>
          <Text style={styles.button_back_title}>Trở lại</Text>
        </TouchableHighlight>
        
        <View style={styles.header_list}>
          <View style={styles.header_cell1}>
            <Text style={styles.header_text}>
              STT
            </Text>
          </View>
          <View style={styles.header_cell2}>
            <Text style={styles.header_text}>
              Ten khach
            </Text>
          </View>
          <View style={styles.header_cell3}>
            <Text style={styles.header_text}>
              Sdt
            </Text>
          </View>
          <View style={styles.header_cell4}>
            <Text style={styles.header_text}>
              thanh toan
            </Text>
          </View>
        </View>
       
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData)=>{
            return(
              <View style={styles.cell}>
                <View style={styles.cell_cell1}>
                  <Text style={styles.cell_text}>
                    {rowData.stt}
                  </Text>
                </View>
                <View style={styles.cell_cell2}>
                  <Text style={styles.cell_text}>
                    {rowData.name}
                  </Text>
                </View>
                <View style={styles.cell_cell3}>
                  <Text style={styles.cell_text}>
                    {rowData.sdt}
                  </Text>
                </View>
                <View style={styles.cell_cell4}>
                  <Text style={styles.cell_text}>
                    {rowData.thanhtoan}
                  </Text>
                </View>
              </View>
            )
          }}
          >
        </ListView>

      </View>
    )
  }
  
  pressBack(){
    this.props.navigator.pop();
  }

  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
  },
  button_back:{
    backgroundColor:Const.COLOR.COLOR_607D8B,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    borderRadius:5,
    left:20,
    top:40,
    position:'absolute',
  },
  button_back_title:{
    fontSize:17,
    fontWeight: 'bold',
    color:'white',
  },
  header_list:{
    backgroundColor:'gray', 
    height:30, 
    width:Dimensions.get('window').width-20, 
    marginTop: 90,
    flexDirection:'row',
    
  },
  header_cell1:{
    flex:0.5,
    marginRight:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1565C0',
  },
  header_cell2:{
    marginLeft:0.5,
    marginRight:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1565C0',
    flex:1,
  },
  header_cell3:{
    marginLeft:0.5,
    marginRight:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1565C0',
    flex:1,
  },
  header_cell4:{
    marginLeft:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1565C0',
    flex:1,
  },
  header_text:{
    color:'white',
    fontSize:15,
    fontWeight: 'bold',
  },
  cell:{
    backgroundColor:'gray', 
    height:30, 
    width:Dimensions.get('window').width-20, 
    flexDirection:'row',
    
  },
  cell_cell1:{
    flex:0.5,
    marginRight:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1565C0',
  },
  cell_cell2:{
    marginLeft:0.5,
    marginRight:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1565C0',
    flex:1,
  },
  cell_cell3:{
    marginLeft:0.5,
    marginRight:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1565C0',
    flex:1,
  },
  cell_cell4:{
    marginLeft:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1565C0',
    flex:1,
  },
  cell_text:{
    color:'white',
    fontSize:15,
    fontWeight: 'bold',
  }
})