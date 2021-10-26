import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import IonIcons from "react-native-vector-icons/Ionicons";
import { BoltLightText, BoltSemiBoldText } from "../components/CustomText";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import AntDesign from "react-native-vector-icons/AntDesign";
import { profileTabs } from "../constants";


function ProfileScreen() {

  return (
    <ScrollView
      style={{
        ...tw`flex pt-2`,
        marginTop: Constants.statusBarHeight,
      }}
    >
      <StatusBar style="auto" />
      <View style={tw`flex flex-col mx-5 mt-5`}>
        <BoltSemiBoldText style={tw`text-2xl`}>
          Joshua Akangah
        </BoltSemiBoldText>
        <BoltLightText style={tw`text-gray-500`}>
          +234 809 809 809
        </BoltLightText>
      </View>

      <View style={tw`mt-10`}>
        <FlatList
          style={tw`mx-5 pb-96`}
          data={profileTabs}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tw`w-full flex flex-row mb-7 items-center`}
            >
              {item.icon === "creditcard" ? (
                <AntDesign
                  name={item.icon}
                  size={24}
                  color="black"
                />
              ) : (
                <IonIcons
                  name={item.icon}
                  size={24}
                  color="black"
                />
              )}

              <BoltLightText style={tw`text-xl ml-5`}>
                {item.name}
              </BoltLightText>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );

}

export default ProfileScreen;
