import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import Colors from './constants/colors.ios';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const[pickedNumber,setPickedNumber] = useState('');
  const[gameIsOver,setGameIsOver] = useState(true);
  const [rounds,setRounds] = useState(0);

 const [fontsLoaded] = useFonts ({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  function handleGameOver(guessRounds){
    setGameIsOver(true);
    setRounds(guessRounds);
  }
  function pickedNumberHandler(numberPicked){
    setPickedNumber(numberPicked);
    setGameIsOver(false);
  }

  function startNewGameHandler(){
    setPickedNumber(null);
    setRounds(0);
  }

  let screen = <StartGameScreen pickedNumber={pickedNumberHandler}/>

  if(pickedNumber){
    screen=<GameScreen userNumber={pickedNumber} onGameOver={handleGameOver}/>
  }

  if(gameIsOver && pickedNumber){
      screen = <GameOverScreen roundsNumber={rounds} userNumber={pickedNumber} onStartNewGame={startNewGameHandler}/>
  }

  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/dice.jpg') } resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
       <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen : {
    flex : 1,
  },
  backgroundImage : {
    opacity : 0.35,
  }
});
