import React from "react";
import { View, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import OrderCard from "./OrderCard";
import { myOrders } from "../../constants";

export default function OrderList() {
	return (
		<View style={tw`flex mt-4`}>
			<FlatList
				style={tw`mx-5 pb-96`}
				data={myOrders}
				renderItem={({ item }) => <OrderCard data={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
