import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({ id, title, description, featuredCategory}) {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15}} showsHorizontalScrollIndicator={false} className="pt-4">
            <RestaurantCard id="1" imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating={4.5} genre="Japanese" address="123 Main st" shortDescription="Sushi restaurant" long={45} lat={15} dishes={['Sushi', 'Maki', 'Chili Soup']}/>
        </ScrollView>
    </View>
  )
}