import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

//redux
import {connect} from 'react-redux';
import * as actions from '../store/actions';

class Persons extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.onAddPerson(newPerson);
    }

    personDeletedHandler = (personId) => {
       this.props.onDeletePerson(personId);
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.personReducer.personList.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToPros = (state) => {
    return {
        personReducer: state.personReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        onAddPerson: (payload) => dispatch({
           type: actions.ADD_PERSON,
           payload: {
               person: payload,
           }
        }),
        onDeletePerson: (payload) => dispatch({
            type: actions.DELETE_PERSON,
            payload: {
                id: payload
            }
         })
    })
}

export default connect(mapStateToPros,mapDispatchToProps)(Persons);