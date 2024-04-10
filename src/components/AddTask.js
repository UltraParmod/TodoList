import { StyleSheet, Text, TextInput, Button, View, Modal } from 'react-native'
import React, { useState } from 'react'

const AddTask = ({ handleAddTaskButton, handleHideModal, visible }) => {


    const [task, setTask] = useState('')

    //handle input value with function
    const handleInputValue = (inputTask) => {
        setTask(inputTask)

    }
    const AddTask = () => {
        handleAddTaskButton(task)
    }
    return (
        <Modal animationType='slide' visible={visible}>
            <View style={styles.inputContainer}>

                <TextInput onChangeText={handleInputValue} placeholder='Add Your Task' style={styles.inputStyle} placeholderTextColor='#000' />
                <View style={styles.btnGroup}>
                    <View style={styles.btn}>
                        <Button title='Add Task' onPress={() => { AddTask() }} />
                    </View>
                    <View style={styles.btn}>
                        <Button title='Cancle Task' onPress={() => { handleHideModal() }} />
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default AddTask

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#cccccc',
        height: 35,
        width: '85%',
        marginRight: 5,
        paddingLeft: 10,
        borderRadius: 5,
        color: '#000'
    },
    btnGroup: {
        flexDirection: 'row',
        margin: 20
    },
    btn: {
        width: '40%',
        marginHorizontal: 20
    }
})