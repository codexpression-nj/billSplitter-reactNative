//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Members, { membersData } from './Member';
import Tip from './Tip';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';

// create a component
const NewBill = ({ navigation, route }) => {
    // const { billType } = route.params;
    // console.log(billType);
    const { billType } = route.params;
    console.log(billType);

    const [friends, setFriends] = useState(membersData)
    const [selectedMembers, setSelectedMember] = useState([])
    const [name, setName] = useState()
    const [showSuggestion, setSuggestion] = useState(false)
    const [memberCount, setMemberCount] = useState(0)
    const [amount, setAmount] = useState(0)
    const [tip, setTip] = useState(0)
    const [tipPerPerson, setTipPerperson] = useState(0)
    // if (billType == 'custom') {
    //     setTotalPerperson = 
    // }
    const [totalPerPerson, setTotalPerperson] = useState(0)
    const tipPercentage = [10, 20, 30, 40, 50]
    const [selectedTip, setSelectedTip] = useState(0)

    const calculatebill = async (amnt) => {
        let total = 0
        console.log(memberCount);
        console.log("calculating bill");
        console.log(selectedTip);
        let totalTip = 0
        if (amnt != 0) {
            total = amnt / memberCount
            totalTip = amnt * selectedTip / 100
            setTipPerperson(totalTip / memberCount)
            setTotalPerperson(total)

        } else {
            setTipPerperson(0)
            setTotalPerperson(0)
        }
    }

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
        })
    }

    const onMemberClick = async () => {
        setMemberCount(selectedMembers.length + 1)
        console.log("clicked");
        setSuggestion(false)
        setName('')
        calculatebill(amount)
    }
    const TipComponent = (percentage) => {
        return (
            <View style={{ flexDirection: "row", display: 'flex', }}>
                <View style={{ flexDirection: "row", display: 'flex', }}>
                    <TouchableOpacity style={styles.tip} onPress={() => { setSelectedTip(Number(percentage.item)), calculatebill(amount) }}>
                        <Text style={styles.text}>{percentage.item}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const Members = (item) => {
        return (
            <View>
                <TouchableOpacity
                    style={styles.friendSuggestion}
                    onPress={() => { onMemberClick(), setSelectedMember([...selectedMembers, item.item]) }}>
                    <Text style={{ marginRight: 10 }} >{item.item.username}</Text>
                    <AntDesign name="pluscircleo" size={18} color="black" />
                </TouchableOpacity>
            </View>
        );
    };

    const calShareBill = (id, v) => {
        const newMem = selectedMembers.map((mem) => {
            if (id === mem.uid) {
                mem.shareAmnt = v
                return mem
            } else {
                return mem
            }

        })
        setSelectedMember(newMem)
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                style={styles.totalResults}
                // Button Linear Gradient
                colors={['#085EB9', '#0093E9', '#80D0C7']}
            >
                <View >

                    <Text style={{ fontWeight: '300', color: 'white', alignSelf: 'center', marginTop: -20, marginBottom: 20, fontSize: 24 }}>Balance</Text>
                    <View style={styles.resultTextView}>
                        <View>
                            <Text style={styles.resultText}>
                                Tip amount
                            </Text>
                            <Text style={{ color: 'white', fontWeight: '100' }}>
                                /person
                            </Text>
                        </View>
                        <Text style={{ fontSize: 24, color: 'white', fontWeight: '300' }}>R {tipPerPerson}</Text>
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
                        <Text style={{ fontSize: 24, color: 'white', fontWeight: '300' }}>R {totalPerPerson}</Text>
                    </View>
                    <View style={styles.resultTextView}>
                        <View>
                            <Text style={styles.resultText}>
                                Total Pay
                            </Text>
                            <Text style={{ color: 'white', fontWeight: '100' }}>
                                /person
                            </Text>
                        </View>
                        <Text style={{ fontSize: 24, color: 'white', fontWeight: '300' }}>R {totalPerPerson + tipPerPerson}</Text>
                    </View>

                </View>
            </LinearGradient>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>ADD MEMBERS</Text>
                <View style={styles.members}>
                    <TextInput name="search" value={name} id="search" onChangeText={text => { handleOnChange(text), setName(text) }} style={[styles.input, { flex: 1, marginBottom: 4 }]} placeholder='enter member' />
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
                {billType === 'equally'

                    ? <>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 }}>
                        {selectedMembers.map((members, index) => (

                            <Image key={members.uid} source={members.avatar}
                                style={styles.image}
                                resizeMode="cover" />
                        ))}
                    </View>
                      <Text style={styles.text}>AMOUNT</Text>
                      <TextInput style={styles.input} keyboardType='numeric' placeholder='enter total amount' onChangeText={(text) => { setAmount(Number(text)), calculatebill(text) }} />
                     
                    </>
                    
                    : <View >

                        {selectedMembers.map((members, index) => (
                            <View key={members.uid} style={{ display: 'flex', marginBottom: 5, borderRadius: 10, borderWidth: 1, borderColor: '#F2F3F5' }}>

                                <View style={styles.friends}>
                                    <Image source={members.avatar}
                                        style={styles.image}
                                        resizeMode="cover" />
                                    <View style={{ justifyContent: "space-between" }}>
                                        <Text style={{ marginLeft: 20 }}>{members.username}</Text>
                                        <Text style={{ marginLeft: 20 }}>R {members.shareAmnt}</Text>
                                    </View>

                                </View>

                                <Slider
                                    style={{ width: '100%', height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="#085EB9"
                                    maximumTrackTintColor="#085EB9"
                                    onValueChange={(value) => calShareBill(members.uid, value)}
                                />
                            </View>

                        ))}
                    </View>

                }


              
                <Text style={styles.text}>TIP</Text>
                <View style={{ flexDirection: "row" }}>
                    {
                        tipPercentage.map((percentage, index) => (
                            <TipComponent key={index} item={percentage}></TipComponent>
                        ))
                    }
                </View>
            </View>



        </SafeAreaView>
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
        marginTop: 40,
        backgroundColor: '#085EB9',
        //         background-color: #0093E9;
        // background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

        borderRadius: 6,
        flex: 1.5,
        padding: 10,
        // marginBottom:60,
        // alignContent:'center',
        justifyContent: 'center'
        // alignItems:'center',
        // alignSelf:'center'
    },
    resultTextView: {
        // marginBottom: 10,
        // marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',

    },
    resultText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    totalAmount: {
        fontSize: 24
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
        margin: 3,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 5
    },
    friendSuggestion: {
        flexDirection: 'row',
        borderColor: '#dedede',
        borderRadius: 4,
        borderWidth: 1,
        alignItems: "center",
        alignContent: 'center',
        padding: 10
    },
    tip: {
        width: 60,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'white',
        borderColor: '#085EB9',
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row"
        // ,backgroundColor
    },
    header: {

    },
    friends: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    }

});

//make this component available to the app
export default NewBill;
