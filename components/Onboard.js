//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";

// create a component
const OnBoarding = () => {
    const navigation = useNavigation();
    const DotComponent = ({ selected }) => {
        return (
          <View
            className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
              selected ? "border border-red-400" : ""
            }  p-2`}
          >
            <View
              className={`w-2 h-2 ${
                selected ? "bg-red-400" : "bg-red-200"
              } rounded-full`}
            ></View>
          </View>
        );
      };
    return (
        <Onboarding
        onSkip={() => navigation.replace("signIn")}
        onDone={() => navigation.replace("signIn")}
        DotComponent={DotComponent}
        pages={[
          {
            backgroundColor: "#ffffff",
            image: (
              <Image
              style={{width: 272,height: 372,resizeMode: 'cover'}}
                source={require('../assets/onBoard1.png')}
                className="w-72 h-72 object-contain"
              />
            ),
            title: "Order",
            subtitle:
            "add menu price on the app"
          },
          {
            backgroundColor: "#085EB9",
            image: (
              <Image
              style={{width: 272,height: 372,resizeMode: 'cover'}}
                source= {require('../assets/onBoard3.png')}
             
                // className="w-72 h-72 object-contain"
              />
            ),
            title: "Split",
            subtitle:
              "split equally and add tip on the total bill amount",
          },
          {
            backgroundColor: "#ffffff",
            image: (
              <Image
              style={{width: 272,height: 372,resizeMode: 'cover'}}
                source= {require('../assets/onBoard2.png')}
                
                className="w-72 h-72 object-contain"
              />
            ),
            title: "Pay",
            subtitle:
              "Each person pay equal amont of the order",
          },
        ]}
      />
    
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    tinyLogo: {
        width: 250,
        height: 550,
      }
});

//make this component available to the app
export default OnBoarding;
