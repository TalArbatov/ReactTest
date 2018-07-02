import * as actions from '../actions';

const personReducer = (state = {personList: []}, action) => {

    switch (action.type) {
        case actions.ADD_PERSON:
            
            state = {...state, personList: state.personList.concat(action.payload.person)};
            console.log(state)
            break;
        case actions.DELETE_PERSON:
            state = {...state, personList: state.personList.filter(person => {
                if(person.id === action.payload.id)
                    return null;
                else
                    return person;
            })};
            break;
        default:
            break;
    }

    return state;
}

export default personReducer;