let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'ist my first post', likesCount: 23},
                {id: 3, message: 'Yo', likesCount: 2}
            ],
            newPostText: '12661'
        },
        dialogPage: {
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
            ],
            newDialog: ''
        },
        sidebar: {
            members: [
                {
                    id: 0,
                    name: 'Dima',
                    photo: 'https://images-ssl.gotinder.com/5f4bcf8a8cf5de010024b193/320x400_426602db-b2c6-40c1-a8fb-fa6ab3d10b65.jpg'
                },
                {
                    id: 1,
                    name: 'Andrew',
                    photo: 'https://images-ssl.gotinder.com/5f55337a067a0401005ae4d4/320x400_6e7ba4b5-06e7-4426-9f27-9fffbcf93b02.jpg'
                },
                {
                    id: 2,
                    name: 'Victor',
                    photo: 'https://images-ssl.gotinder.com/5f53ac504a820e01008c178c/320x400_1d95f8b4-7705-42d6-88d5-a90706b2be2f.jpg'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    photo: 'https://images-ssl.gotinder.com/5e9f37ec5a09bf01009ac102/320x400_704286be-18d9-4688-a0aa-5abfaa466d7c.jpg'
                },
                {
                    id: 4,
                    name: 'Sasha',
                    photo: 'https://images-ssl.gotinder.com/5f21564fad259801008d7c34/320x400_6f68e9ec-6969-4a00-99fe-c26d019f0f93.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage =
            profileReducer(this._state.profilePage, action);
        this._state.dialogPage =
            dialogReducer(this._state.dialogPage, action);
        this._state.sidebar =
            sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}


export default store;
window.store = store;