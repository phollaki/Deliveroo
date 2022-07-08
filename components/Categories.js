import {  ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView
    contentContainerStyle={{
        alignItems: 'center',
        paddingHorizontal:15,
        paddingTop:10}}
    horizontal
    showsHorizontalScrollIndicator={false}>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
    </ScrollView>
  )
}