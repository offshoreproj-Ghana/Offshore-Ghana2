import React, { Component } from 'react'
import { Button, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPersons, deletePerson } from '../../actions/apiAction'


class PersonList extends Component {

    static propTypes = {
        persons: PropTypes.array.isRequired,
        getPersons: PropTypes.func.isRequired,
        deletePerson: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getPersons();
    }
    render() {

        return (
            <>
                <div className="persons-table">
                    <Table celled striped unstackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell> ID</Table.HeaderCell>

                                <Table.HeaderCell> First Name</Table.HeaderCell>
                                <Table.HeaderCell>Last Name</Table.HeaderCell>
                                <Table.HeaderCell>Age</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Income</Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.props.persons.map(person => (


                                <Table.Row key={person.id}>
                                    <Table.Cell>{person.id}</Table.Cell>
                                    <Table.Cell>{person.First_name}</Table.Cell>
                                    <Table.Cell>{person.Last_name}</Table.Cell>
                                    <Table.Cell>{person.Age}</Table.Cell>
                                    <Table.Cell>{person.Email}</Table.Cell>
                                    <Table.Cell>{person.Income}</Table.Cell>
                                    <Table.Cell>
                                        <Button.Group basic size='small'>
                                            <Button icon='delete' onClick={this.props.deletePerson.bind(this, person.id)} />
                                        </Button.Group>
                                    </Table.Cell>


                                </Table.Row>

                            ))}



                        </Table.Body>
                    </Table>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    persons: state.personReducer.persons
})

export default connect(mapStateToProps, { getPersons, deletePerson })(PersonList); 
