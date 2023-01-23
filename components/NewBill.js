//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Members, { membersData } from './Member';
import Tip from './Tip';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

// create a component
const NewBill = () => {
    const [friends, setFriends] = useState(membersData)
    const [selectedMembers, setSelectedMember] = useState([])
    const [name, setNative] = useState()
    const [showSuggestion, setSuggestion] = useState(false)


    const handleOnChange = async (e) => {
        let value = e;

        if (value.length > 2) {
            setSuggestion(true)
            let search = await arraySearch(friends, value);
            setFriends(search)

        } else {
            setSuggestion(false)
            setFriends(membersData)

        }
    }

    const arraySearch = (array, keyword) => {
        const searchTerm = keyword.toLowerCase()
        return array.filter(value => {
            return value['username'].toLowerCase().match(new RegExp(searchTerm, 'g'))
            //  value['avatar'].toLowerCase().match(new RegExp(searchTerm, 'g'))
        })
    }
    const Members = (item) => {
        // console.log(item.item.username);
        return (
            <View>
                <TouchableOpacity
                    style={styles.friendSuggestion}
                    onPress={() => setSelectedMember([...selectedMembers,item.item.avatar])}>
                    {/* <Text>Members</Text> */}
                    {/* <Image source={item.item.avatar}
                        style={styles.image}
                        resizeMode="cover" /> */}
                    <Text style={{ marginRight: 10 }} >{item.item.username}</Text>
                    <AntDesign name="pluscircleo" size={18} color="black" />
                </TouchableOpacity>
                {/* <Image source={item.item.avatar}
                    style={styles.image}
                    resizeMode="cover" /> */}
            </View>


        );
    };

    const Selected = () => {

        //     return(
        //         <View>
        //      {selectedMembers.map(member => (
        //          <Image source={member.avatar}
        //              style={styles.image}
        //              resizeMode="cover"/> 
        // ))}
        //         </View>

        // <Text>{selectedMembers.username}</Text>
        // )

        // console.log(selectedMembers);

    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>ADD MEMBERS</Text>
                <View style={styles.members}>
                    <TextInput name="search" id="search" onChangeText={text => handleOnChange(text)} style={[styles.input, { flex: 4 }]} placeholder='Name' />

                    <TouchableOpacity >
                        <AntDesign name="adduser" size={24} color="#085EB9" style={{ flex: 1, alignSelf: 'center', alignItems: 'center', margin: 16 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    {friends.map(person => (
                        <View key={person.uid}>
                            {showSuggestion
                                ? <Members item={person}></Members>
                                : <></>
                            }
                        </View>
                    ))}
                </View>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {selectedMembers.map((members) => (
                       
                        <Image source={members}
                            style={styles.image}
                            resizeMode="cover" />
                    ) ) }
                </View>

                <Text style={styles.text}>AMOUNT</Text>
                <TextInput style={styles.input} placeholder='enter total amount' />
                <Text style={styles.text}>TIP</Text>
                <Tip></Tip>


            </View>
            <View style={styles.totalResults}>
                <View style={styles.resultTextView}>
                    <View>
                        <Text style={styles.resultText}>
                            Tip amount
                        </Text>
                        <Text style={{ color: 'white', fontWeight: '100' }}>
                            /person
                        </Text>


                    </View>
                    <Text style={{ fontSize: 26, color: 'white' }}>R 0.0</Text>
                </View>
                <View style={styles.resultTextView}>
                    <View>
                        <Text style={styles.resultText}>
                            Total amount
                        </Text>
                        <Text style={{ color: 'white', fontWeight: '100' }}>
                            /person
                        </Text>
                    </View>
                    <Text style={{ fontSize: 26, color: 'white' }}>R 0.0</Text>
                </View>

                <View></View>

            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // margin:16,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        // width:190,
        borderRadius: 5,
        borderWidth: 1,
        padding: 12,
        marginBottom: 24,
        borderColor: '#E5E9ED'
    },
    text: {
        color: '#085EB9',
        fontWeight: '300',
        marginBottom: 6
    },
    inputContainer: {
        flex: 2,
        margin: 16,
        backgroundColor: 'white',
    },
    button: {
        justifyContent: "space-between",
        alignSelf: 'center',
        backgroundColor: '#085EB9',
        width: 200,
        height: 50,
        alignItems: "center",
        borderRadius: 5,
        flexDirection: "row",
        padding: 10, margin: 10

    },
    members: {
        flexDirection: "row",
    },
    totalResults: {
        margin: 16,
        backgroundColor: '#085EB9',
        borderRadius: 6,
        flex: 1
    },
    resultTextView: {
        marginBottom: 10,
        marginTop: 10,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',

    },
    resultText: {
        color: 'white',
        fontSize: 18,
    },
    totalAmount: {
        fontSize: 24
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
        // marginBottom:10,
        // marginLeft: -10,
        // flexDirection: 'row',
        // marginBottom:16,
        margin:3,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding:5
    },
    friendSuggestion: {
        flexDirection: 'row',
        borderColor: '#dedede',
        borderRadius: 4,
        borderWidth: 1,
        alignItems: "center",
        alignContent: 'center',
        padding: 10
    }


});

//make this component available to the app
export default NewBill;
