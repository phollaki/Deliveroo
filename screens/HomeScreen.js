import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon} from "react-native-heroicons/outline"
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const { Text, SafeAreaView, Image, View, TextInput, ScrollView } = require("react-native");

function HomeScreen() {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])

    return (
      <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image source={{ uri: 'https://links.papareact.com/wru' }} className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                <SearchIcon size={20} color="gray"/>
                <TextInput placeholder="Restaurants and cuisines" keyboardType="default"/>
            </View>
            <AdjustmentsIcon color="#00CCBB"/>
        </View>

        {/* Body */}
        <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom:100}}>
            {/* Categories */}
            <Categories/>

            {/* Featured Rows */}
            <FeaturedRow
                id="1"
                title="Featured"
                description="Paid placements from our partners"
                featuredCategory="featured"
            />
            {/* Tasty discounts */}
            <FeaturedRow
                id="2"
                title="Featured"
                description="Paid placements from our partners"
                featuredCategory="featured"
            />
            {/* Offers near you */}
            <FeaturedRow
                id="3"
                title="Featured"
                description="Paid placements from our partners"
                featuredCategory="featured"
            />
        </ScrollView>


      </SafeAreaView>
    );
  }
export default HomeScreen