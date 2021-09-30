const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {...state, newMessageBody: action.body}
        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            return {...state, newMessageBody: '', messages: [...state.messages, {id: 6, message: body}]}
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = body => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer