export default function reducer(prevState, action = {}) {
    switch (action.type) {
        case 'CHANGE_PLAN':
            if (action.payload === 'Entrance') {
                return {
                    plan: action.payload,
                    category: '',
                    planImage: entrance
                }
            }
            return {
                ...prevState,
                plan: action.payload,
            }
        case 'CHANGE_CATEGORY':
            return {
                ...prevState,
                category: action.payload
            }
        default:
            return {};
    }
}