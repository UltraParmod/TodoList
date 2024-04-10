import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TaskItem from './components/TaskItem'
import AddTask from './components/AddTask'

const Task = () => {


    const [tasklist, setTaskList] = useState([])
    const [showmodal, setShowModal] = useState(false)




    //handle modal
    const handleModal = () => {
        setShowModal(true)
    }

    //handle input value with function
    const handleAddTaskButton = (task) => {
        setTaskList((prevTask) => (
            [...prevTask, { task: task, id: Math.random().toString() }]
        ))
        handleHideModal()
    }

    // heandle delete fun
    const handleDelete = (id) => {
        setTaskList((currentList) => currentList.filter(t => t.id !== id))
    }

    // hide modal
    const handleHideModal = () => {
        setShowModal(false)

    }
    return (
        <View style={styles.container}>

            <AddTask handleHideModal={handleHideModal} handleAddTaskButton={handleAddTaskButton} visible={showmodal} />


            <Button title='Add Task' onPress={handleModal} />
            {tasklist.length > 0 ? <Text style={styles.textTitle}>Your Task</Text> :
                <Text style={styles.textTitle}>No Task</Text>
            }

            <View style={{ marginLeft: 10 }}>
                {/* {
                    tasklist?.map((taskItem, index) => (
                        <Text key={index} style={styles.taskItem}>{taskItem}</Text>
                    ))
                } */}

                <FlatList
                    data={tasklist}
                    keyExtractor={(item, index) => {
                        return index
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <TaskItem handleDelete={handleDelete} item={item} index={index} />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    container: {
        paddingTop: 40
    },


    textTitle: {
        fontSize: 24,
        color: '#000',
        marginTop: 10,
        marginLeft: 10
    },

})