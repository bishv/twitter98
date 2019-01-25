const initialState = {
    showedMessage: false
}

function store(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_MESSAGES':
            return Object.assign({}, state, {showedMessage: !state.showedMessage});
        default: return state

    }
}

export default store