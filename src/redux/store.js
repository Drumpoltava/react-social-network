import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 25},
                {id: 1, message: 'This is my first post', likesCount: 38},
                {id: 1, message: 'What is your name?', likesCount: 12}
            ],
            newPostText: ''
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Have a nice day'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Hello'}
            ],
            dialogs: [
                {id: 1, name: 'Alexandr'},
                {id: 2, name: 'Evgen'},
                {id: 3, name: 'Dmitri'},
                {id: 4, name: 'Vladimir'},
                {id: 5, name: 'Victoria'},
                {id: 6, name: 'Olga'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber(){},
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

export default store


