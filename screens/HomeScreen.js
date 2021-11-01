import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import IonIcons from "react-native-vector-icons/Ionicons";
import { BoltLightText } from "../components/CustomText";
import DiscountList from "../components/Discount/DiscountList";
import RestaurantList from "../components/Restaurant/RestaurantList";
import { ScrollView } from "react-native-gesture-handler";


function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={tw`flex flex-row items-center mx-5`}>
        <IonIcons name="ios-location-outline" size={25} color="black" />
        <BoltLightText style={tw`text-lg ml-2`}>
          kz
        </BoltLightText>
      </View>

      <View>
        <DiscountList />
      </View>

      <View style={tw`pb-5`}>
        <RestaurantList navigation={navigation} />
      </View>
    </ScrollView>
  );

}

export default HomeScreen;
