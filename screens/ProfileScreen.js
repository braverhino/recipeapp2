import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity, Image, Text,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import IonIcons from "react-native-vector-icons/Ionicons";
import { BoltLightText, BoltSemiBoldText } from "../components/CustomText";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { profileTabs } from "../constants";
import profileImage from "../assets/profile.jpg"

function ProfileScreen() {

  return (
    <ScrollView>
      <View style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
      }}>
        <View style={{
          width:120,
          height: 120,
          marginLeft: 20
        }} >
          <Image source={profileImage} style={{
            width: 100,
            height: 100,
            borderRadius: 60
          }} />

        </View>

        <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft: 10,
          marginBottom: 70,
        }}
        >
          <BoltSemiBoldText style={{
            fontWeight: "bold",
            fontSize: 25

          }}>
            Madiyar Kuandyk
          </BoltSemiBoldText>
          <BoltLightText style={tw`text-gray-500`}>
            Gachi Dungeon Master
          </BoltLightText>

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          width: 200,
          justifyContent: 'space-between',
          marginTop: 10
        }}>
          <TouchableOpacity>
            <View style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text>
                642
              </Text>
              <Text style={{
              }}>
                Posts
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text>
                1M
              </Text>
              <Text style={{
              }}>
                Followers
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text>
                12
              </Text>
              <Text style={{
              }}>
                Following
              </Text>
            </View>

          </TouchableOpacity>

        </View>



        </View>
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
