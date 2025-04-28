import {useEffect, useState} from 'react';
import React from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity, Image, ImageBackground, Modal} from 'react-native'

import CategoryItem from "@/components/HomeScreen/CategoryItem";
import categoryData from '@/constants/category';
import RecommendedSection from '@/components/HomeScreen/RecommendedSection';
import PopularSection from '@/components/HomeScreen/PopularSection';
import DailySection from '@/components/HomeScreen/DailySection';
import NewEventSection from '@/components/HomeScreen/NewEvent';

import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';
import styles from '../StyleSheet/HomeScreenStyles'; 

interface props {
    setFilterLocations: (filterLocations: any) => void;
}

export default function HomeScreen ({navigation} : {navigation : NativeStackNavigatorProps})
{
    
    
    const [selectedCategory, setSelectedCategory] = useState(categoryData.at(0));
    const [locations, setLocations] = useState([]);
    const [query, setQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false);




    const handleTextChange =(text:string) => {
        setQuery(text.replace(/\s+/g, '-'));
        if (!query){
            setModalVisible(true);
        }
    }
    
    return (
    <ImageBackground
      source={require('../assets/icons/logo.png')}
      style={styles.backgroundImage} 
    >
        <View style = {styles.container}>
            <View style = {{alignItems:'center', width:'100%'}}>
                <View style={styles.search}>
                    <TouchableOpacity >
                        <Image source={require('../assets/icons/Search.png')} style={styles.icon} />
                    </TouchableOpacity>                   
                    <TextInput
                        style={styles.input}
                        placeholder="Tìm kiếm"
                        value={query}
                        onChangeText={(text) => handleTextChange(text)}
                        placeholderTextColor="#000000"
                    />
                    <Image source={require('../assets/icons/logoblue.png')} style={styles.logo}/>
                </View>
            </View>
            <View style  = {styles.categoryContainer}>
                    <FlatList
                    data= {categoryData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (<CategoryItem 
                        item = {item}
                        selectedCategory = {selectedCategory}
                        setSelectedCategory = {setSelectedCategory}
                        setLocations={setLocations}/>)}

                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    style = {styles.flatList}>
                    </FlatList>
                </View>
           

            <ScrollView style = {{}}>
                    <PopularSection categoryId={selectedCategory?.id} navigation = {navigation}/>
                    <RecommendedSection categoryId={selectedCategory?.id} navigation = {navigation}/>
                    <NewEventSection categoryId={selectedCategory?.id} navigation = {navigation}/>
                    <DailySection categoryId={selectedCategory?.id} navigation={navigation}/>
                    <Image style={{width:'100%', height:200}} source={require('../assets/images/banner.png')}/>
            </ScrollView>
            
        </View>
    </ImageBackground>
    )
}


