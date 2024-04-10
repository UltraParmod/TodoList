import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskItem = ({ index, item, handleDelete }) => {
    return (
        <Pressable onPress={handleDelete.bind(this, item.id)}>
            <View style={styles.taskItem}>

                <Text key={index} style={{ fontSize: 20 }}>{index + 1} : {item.task}</Text>
                <Image source={require('../components/assets/images/delete.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
            </View>
        </Pressable>
    )
}

export default TaskItem

const styles = StyleSheet.create({
    taskItem: {
        backgroundColor: 'green',
        margin: 10,
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})