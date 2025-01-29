import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons';
import GameLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) { 
    // max is always excluded here but not min
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

let minBoundary=1 ;
let  maxBoundary = 100;
export default function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    const [guessRounds,setGuessRounds] =  useState([initialGuess]);
    const {width, height} = useWindowDimensions();

    const guessRoundsLength = guessRounds.length;

    useEffect(() => {
        if(currentGuess === userNumber){
               onGameOver(guessRoundsLength);
        }
    },[currentGuess,userNumber,onGameOver]);

    useEffect (() => {
          minBoundary=1;
          maxBoundary=100;
    },[])


    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!","You Know that is wrong...",[{text : 'Sorry!' , style : 'cancel'},]);
            return;
        }

        if(direction==='lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess+1;
        }
        const newRndmNumber  = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndmNumber);
        setGuessRounds((prevGuessRounds) => [newRndmNumber,...prevGuessRounds]);
    }

    let content = (
           <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower ?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                        <Ionicons name="remove" size={24} color="white" />
                    </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                    <Ionicons name="add" size={24} color="white" />
                    </PrimaryButton>
                    </View>
                </View>
            </Card>
           </>
    );


    if(width > 500){
        content = (
            <>
            <View style={styles.landscapeContainer}>
             <View style={styles.buttonContainer}>
                     <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                         <Ionicons name="remove" size={24} color="white" />
                     </PrimaryButton>
                     </View>
             <NumberContainer>{currentGuess}</NumberContainer>
                     <View style={styles.buttonContainer}>
                     <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                     <Ionicons name="add" size={24} color="white" />
                     </PrimaryButton>
                     </View>
                     </View>
            </>
     );
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList data={guessRounds} renderItem={(itemData) => <GameLogItem roundNumber={guessRoundsLength - itemData.index} guessNumber={itemData.item}/> } keyExtractor={(item)=> item}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
 screen:{
     flex : 1,
     padding : 24,
     alignItems : 'center',
 },
 instructionText:{
    marginBottom : 30,
 },
 buttonsContainer : {
    flexDirection : 'row',
},
buttonContainer : {
   flex :1,
// marginHorizontal : 0,
},
listContainer : {
    flex : 1,
    padding : 14,
},
landscapeContainer : {
    flexDirection : 'row',
    alignItems : 'center',
},

});