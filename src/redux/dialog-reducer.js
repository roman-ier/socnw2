const ADD_DIA = 'ADD-DIA';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Valera'}
    ]
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIA: {
            let newDia = {
                id: 7,
                message: action.newMessageBody
            }
            return {...state, messages: [...state.messages, newDia]};
        }
        default:
            return state;
    }

}

export const addDiaActionCreator = (newMessageBody) => ({type: ADD_DIA, newMessageBody})

export default dialogReducer;