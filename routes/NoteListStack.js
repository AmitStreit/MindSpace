import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import NoteList from '../screens/NoteList'
import EditNote from '../screens/EditNote'
const screens = {
    NoteList: {
        screen: NoteList,
        navigationOptions: {
            title: 'amit notes',
        }
    },
    EditNote: {
        screen: EditNote,
        navigationOptions: {
            title: 'edit note'
        }
    }
}

const NoteListStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#eee',
        headerStyle: {
            backgroundColor: '#047013',
            height: 70,
        }
    }
})

export default createAppContainer(NoteListStack)