import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors.ios";


export default function StartGameScreen({pickedNumber}){
    const[enteredNumber,setEnteredNumber] = useState('');

const {width,height} = useWindowDimensions();

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
         const chosenNumber = parseInt(enteredNumber);

         if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid Number' , 'Number has to be between 1 and 99', [{text : 'Okay', style : 'destructive' , onPress : resetInputHandler}]);
            return;
         }
        
        pickedNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;

   return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer,{marginTop : marginTopDistance}]}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText>Enter a Number</InstructionText>
    <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}/>
    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
    </View>
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
   )
}


const styles = StyleSheet.create({
    screen : {
         flex : 1,
    },
    rootContainer : {
        flex : 1,
        alignItems : 'center',
        // marginTop : 80,
    },
    numberInput : {
        height : 50,
        width : 50,
        fontSize : 32,
        borderBottomColor : Colors.accent500,
        borderBottomWidth : 2,
        marginVertical : 10,
        color : Colors.accent500,
        fontWeight : 'bold',
        textAlign : 'center',
    },
    buttonsContainer : {
        flexDirection : 'row',
    },
    buttonContainer : {
       flex :1,
    //    marginHorizontal : 24,
    },
})