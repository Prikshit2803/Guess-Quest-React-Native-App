import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

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
      screen = <GameOverScreen roundsNumber={rounds} userNumber={pickedNumber} onStartNewGamw={startNewGameHandler}/>
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/dice.jpg') } resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
       <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
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
