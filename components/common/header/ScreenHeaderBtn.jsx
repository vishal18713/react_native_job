import React from 'react'
import {GestureHandlerRootView } from 'react-native-gesture-handler'
import {TouchableOpacity, Image } from 'react-native'
import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {
  return (
    <GestureHandlerRootView>
      <TouchableOpacity>
    <Image source={iconUrl}/>
   </TouchableOpacity>

    </GestureHandlerRootView>
   
  )
}

export default ScreenHeaderBtn;