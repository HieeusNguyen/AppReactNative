import { View, Text, StyleSheet, ScrollView, Pressable} from "react-native";
import React from "react";
import { Divider, Image } from "react-native-elements";
import { CATEGORIES } from "../../data/categories";
import { HOUSES } from "../../data/houses";

const Options = () => {
    return (
        <View>
            <Divider width={1} orientation="vertical" />
            <Categories />
            <Houses />
        </View>
    );
};

const Categories = () => (
    <View style={{ marginTop: 20, marginHorizontal: 15 }}>
        <Text
            style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#999",
                marginBottom: 20,
            }}
        >
            Categories
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {CATEGORIES.map((cate, index) => (
                <View key={index} style={styles.box}>
                    <View style={styles.box_image}>
                        <Image
                            source={{ uri: cate.imageUrl }}
                            style={styles.cate_img}
                        />
                    </View>
                    <Text style={styles.desc}>{cate.name}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
);

const Houses = () => (
    <View style={{ marginTop: 20, marginHorizontal: 15 }}>
        <Text
            style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#999",
                marginBottom: 20,
            }}
        >
            House
        </Text>
        <ScrollView> 
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: 15,
                }}
            >
                {HOUSES.map((houses, index) => (
                    <View key={index} style={{ width: "48%", gap: 5 }}>
                        <Image
                            source={{ uri: houses.imageUrl }}
                            style={styles.box_houses}
                        />
                        <Text style={styles.nameRoom}>{houses.name}</Text>
                        <Text style={styles.address}>{houses.address}</Text>
                    </View>
                ))}
            </View>
            <Pressable
                titleSize={20}
                style={styles.button}
                onPress={() => console.log("you click me!")}
            >
                <Text style={styles.buttonText}>Show All</Text>
            </Pressable>
        </ScrollView>
    </View>
);
const styles = StyleSheet.create({
    box: {
        width: 160,
        height: 100,
        marginRight: 15,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#ccc",
    },
    cate_img: {
        width: "100%",
        height: 50,
        objectFit: "cover",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    desc: {
        paddingVertical: 15,
        paddingLeft: 10,
    },
    box_houses: {
        width: "100%",
        height: 140,
    },
    nameRoom: {
        fontSize: 16,
        fontWeight: "600",
    },
    button: {
        backgroundColor: "#0096f6",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 20
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20,
    },
});

export default Options;
