import React from 'react';
import {View} from 'react-native';
import {Text,Divider} from 'react-native-elements';

class PaymentScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currDate:this.getCurrentDate()
        }
    }
    getCurrentDate(){
        let currDate = new Date();
        let currDateString = currDate.toDateString().split(' ');
        currDateString.splice(0,1);
        return currDateString.join(' ');
    }
    render(){
        return(
            <View>
                <Text h1 style={{backgroundColor:'#04D573',color:'#FFFFFF',paddingVertical:'5%',paddingLeft:'5%'}}>Payments</Text>
                <Text h2>{this.state.currDate}</Text>
            </View>
        );
    }
}
export default PaymentScreen;