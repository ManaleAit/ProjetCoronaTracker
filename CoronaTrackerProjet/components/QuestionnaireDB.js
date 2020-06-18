import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,CheckBox ,Picker,TextInput,ScrollView} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import RadioGroup,{Radio} from "react-native-radio-input";
class Questionnaire  extends Component {


  constructor(props) {
    super(props)

    this.state = {
      nbquest:0,
      q1: '',
      q2:'',
      q3:'',
      q4:'',
      q5:'',
      q6:'',
      q7:'',
      q8:'',
      q9:0,
    
    }
  }

 
  getChecked5 = (value) => {
  
    this.state.q5=value;

  }
  getChecked6 = (value) => {
 
    this.state.q6=value
  }
  getChecked7 = (value) => {
   
    this.state.q7=value;
  }
  getChecked8 = (value) => {

    this.state.q8=value;
  }
  static navigationOptions = {
    header: null
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    
    }
  };

  onNextStep = () => {
   if(this.state.q5==='changeTaste' ) {
       
     this.state.nbquest=this.state.nbquest + 1;

   }
   if(this.state.q6==='Havecough' ) {
       
    this.state.nbquest=this.state.nbquest + 1;

  }
  if(this.state.q7==='HaveSore') {
       
    this.state.nbquest=this.state.nbquest + 1;

  }
  if(this.state.q8==='Havediarrhea') {
       
    this.state.nbquest=this.state.nbquest + 1;

  }
  if(this.state.q9>37) {
       
    this.state.nbquest=this.state.nbquest + 1;

  }

 
  };

  onPrevStep = () => {
   
  };

  onSubmitSteps = () => {



     if(this.state.nbquest>2){

        alert('your health is not normal you need to do tests');
        this.state.q1= '';
        this.state.q2='';
        this.state.q3='';
        this.state.q4='';
        this.state.q5='';
        this.state.q6='';
        this.state.q7='';
        this.state.q8='';
        this.state.q9=0;
        this.state.nbquest=0;


     }

     else{
      
        alert('you dont need the tests' );
        //+ this.state.nbquest+'  '+this.state.q5+'||'+  this.state.q6+'||'+  this.state.q7 +'||'+ this.state.q8 +'||'+ this.state.q9
        this.state.q1= '';
        this.state.q2='';
        this.state.q3='';
        this.state.q4='';
        this.state.q5='';
        this.state.q6='';
        this.state.q7='';
        this.state.q8='';
        this.state.q9=0;
        this.state.nbquest=0;


     }

   
    
  };
  


  getChecked = (value) => {
   
    console.log(value)
  }

  handleChange = (e) => {
    this.setState({q3:e.target.value});
  }
  render() {
    const progressStepsStyle = {
      activeLabelColor: '#686868',
      activeStepNumColor: 'white',
      activeStepIconColor: '#272343',
      completedStepIconColor: '#272343',
      completedProgressBarColor: '#272343',
      completedCheckColor: '#4bb543',
      
    
    
     
    };

    const buttonTextStyle = {
      height:50,
      width:100,
      backgroundColor:'#272343',
      color:'white',
      alignItems:'center',
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:30,
      borderRadius:10,
      borderBottomWidth:2,
      borderLeftWidth:2,
      borderRightWidth:2,
      borderTopWidth:2,
      fontWeight:'bold',
      borderColor:'#272343',
      shadowColor: "#000",
      elevation: 16,
      
    };
    const buttonTextStylePre={
      height:50,
      width:100,
      color:'#272343',
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#D3D3D3',
      paddingLeft:15,
      borderRadius:10,
      borderBottomWidth:2,
      borderLeftWidth:2,
      borderRightWidth:2,
      borderTopWidth:2,
      fontWeight:'bold',
      borderColor:'#272343',
      shadowColor: "#000",
      elevation: 16,
      
    }

    const buttonTextStyleSub={
      height:50,
      width:100,
      backgroundColor:'#272343',
      color:'white',
      alignItems:'center',
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:20,
      borderRadius:10,
      borderBottomWidth:2,
      borderLeftWidth:2,
      borderRightWidth:2,
      borderTopWidth:2,
      fontWeight:'bold',
      borderColor:'#272343',
      shadowColor: "#000",
      elevation: 16,
      
    };
    const buttonTextStylePreStrt={
      height:0,
      width:0,
     backgroundColor:'#272343'
      
    }

    return (
      <ScrollView>
      <View  style={{ flex: 1, marginTop: 50 }}  >
        <Image  style={styles.img}     source={require('../images/logo.png')} />
        <Text style={styles.logo} >Corona's Questionnaire</Text>
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label="step 1"
          
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
      
            previousBtnTextStyle={buttonTextStylePreStrt}
         
          >
            <View  style={{height:350,marginTop:40}} >
            <Text style={styles.textTitre} >Question 01</Text>
            <Text style={styles.textQuest}>How old are you?</Text>
            <TextInput
               style={styles.textInp}
               value={this.state.q1}
               onChangeText={(text) => this.setState({q1: text})}   placeholder="Age"/>
                <Text style={styles.textTitre} >Question 02</Text>
            <Text style={styles.textQuest}>What is your gender? Male or Female</Text>
            <TextInput
               style={styles.textInp}
               value={this.state.q2}
               onChangeText={(text) => this.setState({q2: text})}   placeholder="gender"/>

            </View>
          </ProgressStep>
          <ProgressStep
            label="step  2"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStylePre} >
            <View    style={{height:350,marginTop:40}} >
            <Text style={styles.textTitre} >Question 03</Text>
            <Text style={styles.textQuest}>Select your neighborhood</Text>
            <Picker style={styles.textTitre}   selectedValue={this.state.q3} 
              onValueChange={(itemValue,itemIndex) =>this.setState({q3:itemValue})} 
               >
               <Picker.Item label = "choose your  neighborhood" value = "null" />
               <Picker.Item label = "Hay anass" value = "Hay anass" />
               <Picker.Item label = "Jnan mstari" value = "Jnan mstari" />
               <Picker.Item label = "Bahya" value = "Bahya" />
            </Picker>
         <View   style={{height:350,marginTop:40}}>
            <Text style={styles.textTitre} >Question 04</Text>
            <Text style={styles.textQuest}>What is your size ?</Text>
            <TextInput
               style={styles.textInp}
               value={this.state.q4}
               onChangeText={(text) => this.setState({q4: text})}  placeholder="Size"/>

              



            </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="step 3"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
          
            previousBtnTextStyle={buttonTextStylePre}
          >
            <View  style={{height:350,marginTop:40}}>
              
            <Text style={styles.textTitre} >Question 05</Text>
            <Text style={styles.textQuest}>In the past few days, do you have a cough or an increase in your usual cough?</Text>
            <View  style={styles.Rad} >
            <RadioGroup    getChecked={this.getChecked5} RadioGroupStyle={{flexDirection: "row" }}>
            <Radio iconName={"lens"} label={"Oui"} value={"changeTaste"} />
            <Radio iconName={"lens"} label={"Non"} value={"noteChaneTaste"}/>
         
           </RadioGroup>
            </View>
            <Text style={styles.textTitre} >Question 06</Text>
            <Text style={styles.textQuest}>These recent days ، have you noticed a sharp decrease or change in your taste or smell?</Text>
            <View  style={styles.Rad} >
            <RadioGroup    getChecked={this.getChecked6} RadioGroupStyle={{flexDirection: "row" }}>
            <Radio iconName={"lens"} label={"Oui"} value={"Havecough"} />
            <Radio iconName={"lens"} label={"Non"} value={"dontHavecough"}/>
         
           </RadioGroup>
            </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="step 4"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
           
            previousBtnTextStyle={buttonTextStylePre}
          >
          <View    style={{height:350,marginTop:40}}>
            <Text style={styles.textTitre} >Question 07</Text>
            <Text style={styles.textQuest}>In the past few days, have you had a sore throat and / or muscle pain and / or unusual body aches?</Text>
            <View  style={styles.Rad}     >
            <RadioGroup    getChecked={this.getChecked7} RadioGroupStyle={{flexDirection: "row" }}>
            <Radio iconName={"lens"} label={"Oui"} value={"HaveSore"} />
            <Radio iconName={"lens"} label={"Non"} value={"dontHavesore"}/>
         
           </RadioGroup>
            </View>
               <Text style={styles.textTitre} >Question 08</Text>
            <Text style={styles.textQuest}>For the past 24 hours, have you had diarrhea? With at least 3 loose stools. </Text>
            <View  style={styles.Rad} >
            <RadioGroup    getChecked={this.getChecked8} RadioGroupStyle={{flexDirection: "row" }}>
            <Radio iconName={"lens"} label={"Oui"} value={"Havediarrhea"} />
            <Radio iconName={"lens"} label={"Non"} value={"dontHavediarrhea"}/>
         
            </RadioGroup>
            </View>

         
            </View>
          </ProgressStep>
          <ProgressStep
            label="step 5"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyleSub}
            previousBtnTextStyle={buttonTextStylePre}
          >
              <View  style={{height:350,marginTop:40}} >
            <Text style={styles.textTitre} >Question 09</Text>
            <Text  style={styles.textQuest}>In the past 48 hours, what has been your highest temperature</Text>
            <TextInput
               style={styles.textInp}
               value={this.state.q9}
               onChangeText={(text) => this.setState({q9: text})}   placeholder="your temperature"/>
             <Text style={styles.textTitreFinish} >you have finished your test</Text>
           </View>
          </ProgressStep>

           
      
     
   
          
        </ProgressSteps>
        
      </View>
      </ScrollView>
    );
  }
}



const   styles  = StyleSheet.create({

img:{
    marginLeft:5,
    width:50,
    height:40,
    marginBottom:50,
   
},
logo:{
marginTop:-90,
marginLeft:80,
color:'#272343',
fontSize:20,
fontWeight:'bold'
},
textInp:{

  
  alignSelf:'stretch',
  height:50,
  width:300,
  marginLeft:30,
  marginBottom:30,
  borderRadius:10,
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
  borderColor:'#272343',
}
,
textTitre:{
  marginLeft:30,  
  color:'#272343',
  fontSize:20,
  fontWeight:'bold'
},
textTitreFinish:{
  marginLeft:50,  
  color:'#4bb543',
  fontSize:20,
  fontWeight:'bold',
  marginTop:50

},
textQuest:{
  marginLeft:30, 
  color:'#272343',
  marginBottom:20

 
}
,
Rad:{
  marginLeft:30,
 
}
  
  });
export default Questionnaire;
