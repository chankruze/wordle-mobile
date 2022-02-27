/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Feb 26 2022 19:41:45 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
// custom components
import Keyboard from "../../components/Keyboard/Keyboard";
// styles
import { styles } from "./Daily.styles";
// data
import { words } from "../../data/words";
// utils
import { copyArray, getDayOfTheYear } from "../../utils";
// constants
import {
  NUMBER_OF_TRIES,
  colors,
  CLEAR,
  ENTER,
  colorsToEmoji,
  GAME_STATE,
} from "../../constants";
import Layout from "../../components/Layout";

const dayOfTheYear = getDayOfTheYear();

export default function Daily() {
  const word = words[dayOfTheYear];
  const letters = word.split("");

  const [rows, setRows] = useState(
    new Array(NUMBER_OF_TRIES).fill(new Array(letters.length).fill(""))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [gameState, setGameState] = useState(GAME_STATE.PLAYING);

  // check if the game state and show the appropriate message
  const checkGameState = () => {
    // check if the game is won
    if (checkIfWon() && gameState !== GAME_STATE.WON) {
      Alert.alert("Huraaay", "You won!", [
        { text: "Share", onPress: shareScore },
      ]);
      setGameState("won");
    }
    // check if the game is lost
    if (checkIfLost() && gameState !== GAME_STATE.LOST) {
      Alert.alert("Meh", "Try again tomorrow!");
      setGameState("lost");
    }
  };

  // check if the game state whenever the current row changes
  useEffect(() => {
    if (currentRow > 0) {
      checkGameState();
    }
  }, [currentRow]);

  //  share the score
  const shareScore = () => {
    // create a string of emojis
    const textMap = rows
      .map((row, i) =>
        row.map((cell, j) => colorsToEmoji[getCellBGColor(i, j)]).join("")
      )
      .filter((row) => row)
      .join("\n");
    // construc the text to share
    const textToShare = `Wordle ${dayOfTheYear}\n${textMap}`;
    // set the text to share to clipboard
    Clipboard.setString(textToShare);
    // alert the user
    Alert.alert("Copied successfully", "Share your score on you social media");
  };

  //  check if the game is won
  const checkIfWon = () => {
    return rows[currentRow - 1].every((letter, i) => letter === letters[i]);
  };

  // check if game is lost
  const checkIfLost = () => {
    return !checkIfWon() && currentRow === rows.length;
  };

  // set the background color of the cell
  const onKeyPress = (key) => {
    // if game is won or lost, do nothing
    if (gameState !== GAME_STATE.PLAYING) {
      return;
    }

    const updatedRows = copyArray(rows);

    // if the key is clear
    if (key === CLEAR) {
      const prevCol = currentCol - 1;
      if (prevCol >= 0) {
        updatedRows[currentRow][prevCol] = "";
        setRows(updatedRows);
        setCurrentCol(prevCol);
      }
      return;
    }

    // if the key is enter
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

  // get the background color of the cell
  const getCellBGColor = (row, col) => {
    const letter = rows[row][col];

    // if the row is empty, return the default color
    if (row >= currentRow) {
      return colors.black;
    }

    // if the letter is present in the correct position
    if (letter === letters[col]) {
      return colors.primary;
    }

    // if the letter is present in the wrong position
    if (letters.includes(letter)) {
      return colors.secondary;
    }

    // letter is not present in the word
    return colors.darkgrey;
  };

  // check if the cell is active
  const isCellActive = (row, col) => {
    return row === currentRow && col === currentCol;
  };

  // get all letters that have provided color as background
  const getAllLettersWithColor = (color) => {
    return rows.flatMap((row, i) =>
      row.filter((cell, j) => getCellBGColor(i, j) === color)
    );
  };

  const greenCaps = getAllLettersWithColor(colors.primary);
  const yellowCaps = getAllLettersWithColor(colors.secondary);
  const greyCaps = getAllLettersWithColor(colors.darkgrey);

  return (
    <Layout>
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
    </Layout>
  );
}
