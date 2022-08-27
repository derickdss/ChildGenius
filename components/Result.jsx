import react from "react";
import { Text, Button, View } from "react-native";

const ResultStatement = ({ correctAnswerCount, wrongAnswerCount }) => {
    console.log("derd, entering result function");
    return (
        <Text>
            You Scored{" "}
            <Text style={{ color: "green" }}>{correctAnswerCount}</Text> correct
            and <Text style={{ color: "red" }}>{wrongAnswerCount}</Text>{" "}
            incorrect answers
        </Text>
    );
};

const ResultOptions = ({ reloadPage }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                margin: "10px",
            }}
        >
            <View
                style={{ flexGrow: 1, marginLeft: "10px", marginRight: "5px" }}
            >
                <Button title="Retake" onPress={reloadPage} />
            </View>
            <View
                style={{ flexGrow: 1, marginLeft: "10px", marginRight: "5px" }}
            >
                <Button
                    title="Home"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </div>
    );
};

const Result = ({ correctAnswerCount, wrongAnswerCount, reloadPage }) => {
    return (
        <>
            <ResultStatement
                correctAnswerCount={correctAnswerCount}
                wrongAnswerCount={wrongAnswerCount}
            />
            <ResultOptions reloadPage={reloadPage} />
        </>
    );
};

export default Result;
