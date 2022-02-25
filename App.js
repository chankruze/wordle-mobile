import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, ScrollView, Alert } from "react-native";
import * as Clipboard from 'expo-clipboard';
import Keyboard from "./components/Keyboard/Keyboard";
import { styles } from "./App.styles";
import { words } from "./data/words";
import { copyArray, getDayOfTheYear } from "./utils";
import {
  NUMBER_OF_TRIES,
  colors,
  CLEAR,
  ENTER,
  colorsToEmoji,
} from "./constants";

const dayOfTheYear = getDayOfTheYear();

export default function App() {
  const word = words[dayOfTheYear];
  const letters = word.split("");

  const [rows, setRows] = useState(
    new Array(NUMBER_OF_TRIES).fill(new Array(letters.length).fill(""))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [gameState, setGameState] = useState("playing"); // won, lost, playing

  const checkGameState = () => {
    if (checkIfWon() && gameState !== "won") {
      Alert.alert("Huraaay", "You won!", [
        { text: "Share", onPress: shareScore },
      ]);
      setGameState("won");
    } else if (checkIfLost() && gameState !== "lost") {
      Alert.alert("Meh", "Try again tomorrow!");
      setGameState("lost");
    }
  };

  useEffect(() => {
    if (currentRow > 0) {
      checkGameState();
    }
  }, [currentRow]);

  const shareScore = () => {
    const textMap = rows
      .map((row, i) =>
        row.map((cell, j) => colorsToEmoji[getCellBGColor(i, j)]).join("")
      )
      .filter((row) => row)
      .join("\n");
    const textToShare = `Wordle \n${textMap}`;
    Clipboard.setString(textToShare);
    Alert.alert("Copied successfully", "Share your score on you social media");
  };

  const checkIfWon = () => {
    const row = rows[currentRow - 1];

    return row.every((letter, i) => letter === letters[i]);
  };

  const checkIfLost = () => {
    return !checkIfWon() && currentRow === rows.length;
  };

  const onKeyPress = (key) => {
    if (gameState !== "playing") {
      return;
    }

    const updatedRows = copyArray(rows);

    if (key === CLEAR) {
      const prevCol = currentCol - 1;
      if (prevCol >= 0) {
        updatedRows[currentRow][prevCol] = "";
        setRows(updatedRows);
        setCurrentCol(prevCol);
      }
      return;
    }

    if (key === ENTER) {
      if (currentCol === rows[0].length) {
        setCurrentRow(currentRow + 1);
        setCurrentCol(0);
      }

      return;
    }

    if (currentCol < rows[0].length) {
      updatedRows[currentRow][currentCol] = key;
      setRows(updatedRows);
      setCurrentCol(currentCol + 1);
    }
  };

  const getCellBGColor = (row, col) => {
    const letter = rows[row][col];

    if (row >= currentRow) {
      return colors.black;
    }
    if (letter === letters[col]) {
      return colors.primary;
    }
    if (letters.includes(letter)) {
      return colors.secondary;
    }
    return colors.darkgrey;
  };

  const isCellActive = (row, col) => {
    return row === currentRow && col === currentCol;
  };

  const getAllLettersWithColor = (color) => {
    return rows.flatMap((row, i) =>
      row.filter((cell, j) => getCellBGColor(i, j) === color)
    );
  };

  const greenCaps = getAllLettersWithColor(colors.primary);
  const yellowCaps = getAllLettersWithColor(colors.secondary);
  const greyCaps = getAllLettersWithColor(colors.darkgrey);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* title */}
      <Text style={styles.title}>wordle</Text>
      {/* map */}
      <ScrollView style={styles.map}>
        {rows.map((_row, _rowIdx) => (
          <View key={`row-${_rowIdx}`} style={styles.row}>
            {_row.map((cell, _cellIdx) => (
              <View
                key={`cell-${_rowIdx}-${_cellIdx}`}
                style={[
                  styles.cell,
                  {
                    borderColor: isCellActive(_rowIdx, _cellIdx)
                      ? colors.grey
                      : colors.darkgrey,
                    backgroundColor: getCellBGColor(_rowIdx, _cellIdx),
                  },
                ]}
              >
                <Text style={styles.cellText}>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      {/* keyboard */}
      <Keyboard
        onKeyPress={onKeyPress}
        greenCaps={greenCaps}
        yellowCaps={yellowCaps}
        greyCaps={greyCaps}
      />
    </SafeAreaView>
  );
}
