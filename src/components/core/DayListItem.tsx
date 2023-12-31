import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

type DayListItem = {
  day: number;
};

const DayListItem = ({ day }: DayListItem) => {
  return (
    <Link href={`(days)/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#9b4521",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
    fontFamily: "AmaticBold",
  },
});
export default DayListItem;
