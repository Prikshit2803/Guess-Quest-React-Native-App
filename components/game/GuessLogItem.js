import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function GameLogItem({roundNumber,guessNumber}){
    return (
      <View style={styles.container}>
        <Text style={styles.listItem}>#{roundNumber}</Text>
        <Text style={styles.listItem}>Opponent's Guess : {guessNumber}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderColor : Colors.primary800,
        backgroundColor : Colors.accent500,
        borderRadius : 40,
        borderWidth : 1,
        padding : 12,
        marginVertical : 9,
        width : '100%',
        elevation : 4,
        shadowColor : 'black',
        shadowOffset : {height : 0, width : 0},
        shadowOpacity : 0.2,
        shadowRadius : 3,
    },
    listItem : {
        fontFamily : 'open-sans',
    }
});