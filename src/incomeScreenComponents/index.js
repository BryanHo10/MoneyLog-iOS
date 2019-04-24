import React from 'react';
import {View} from 'react-native';
import {Text,Divider,Input, ButtonGroup} from 'react-native-elements';

class IncomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currDate:this.getCurrentDate(),
            selectedIndex:0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    getCurrentDate(){
        let currDate = new Date();
        let currDateString = currDate.toDateString().split(' ');
        currDateString.splice(0,1);
        return currDateString.join(' ');
    }
    render(){
        const buttons=['Checking','Savings'];
        const { selectedIndex } = this.state;
        return(
            <View style={{flex:1}}>
                <Text h1 style={{backgroundColor:'#D58F04',color:'#FFFFFF',paddingVertical:'5%',paddingLeft:'5%'}}>Income</Text>
                <View style={{paddingLeft:'5%'}}>
                    <Text h2>{this.state.currDate}</Text>
                    <Input label='Venue' placeholder='BASIC INPUT'/>
                    <Input label='Amount' placeholder='BASIC INPUT'/>
                    <Input label='Form' placeholder='BASIC INPUT'/>
                    <Text h3>Category</Text>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{height:'10%'}}
                    />
                </View>
            </View>
        );
    }
}
export default IncomeScreen;