import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { ChevronRightIcon, LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice'
import { setRestaurant } from '../features/restaurantSlice'

const RestaurantScreen = () => {
    const {params:{
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        shortDescription,
        dishes,
        long,
        lat
    }} = useRoute()
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        shortDescription,
        dishes,
        lat,
        long
      }))
    },[dispatch])


    return (
      <>
      {items.length>0 && <BasketIcon/>}
      <ScrollView>

        {/* Banner image */}
        <View className="relative">
          <Image source={{ uri: urlFor(imgUrl).url() }} className="w-full h-56 bg-gray-300 p-4"/>
        </View>

        {/* Back button */}
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        {/* Restaurant info bar */}
        <View className="bg-white">
          <View className="px-4 pt-4">
              <Text className="text-3xl font-bold my-1">{title}</Text>
              <View className="flex-row items-center space-x-2">
                  <StarIcon color="green" opacity={0.5} size={22}/>
                  <Text className="text-xs text-gray-500">
                      <Text className="text-green-500">{rating}</Text> - {genre}
                  </Text>
                  <View className="flex-row items-center space-x-2">
                      <LocationMarkerIcon color="gray" opacity={0.4} size={22}/>
                      <Text className="text-xs text-gray-500">Nearby - {address}</Text>
                  </View>
              </View>

              <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
          </View>

          <TouchableOpacity onPress={navigation.goBack} className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6}/>
            <Text className="font-bold pl-2 flex-1 text-md">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB"/>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <View className={items.length&&'pb-36'}>
          <Text className="font-bold text-xl px-3 pt-6 mb-3">Menu</Text>
          {/* Dish rows */}
          {dishes.map(dish=>(
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              price={dish.price}
              imgUrl={dish.image}
              description={dish.short_description}
            />
          ))}
        </View>
      </ScrollView>
      </>
    )
}

export default RestaurantScreen