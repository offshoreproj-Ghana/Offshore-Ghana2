import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Card, Icon, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { createPersons } from '../../actions/apiAction';

class FormCard extends Component {
    state = {
        First_name: '',
        Last_name: '',
        Email: '',
        Age: '',
        Income: ''

    };

    static propTypes = {
        createPersons: PropTypes.func.isRequired
    }


    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const { First_name, Last_name, Email, Age, Income } = this.state;
        const person = { First_name, Last_name, Email, Age, Income };
        this.props.createPersons(person);
    };
    render() {

        const { First_name, Last_name, Email, Age, Income } = this.state;
        return (
            <Card className="main__card" raised>
                <Card.Content>
                    <Form widths='equal' autoComplete='off' onSubmit={this.onSubmit}>
                        <h2> Person's Information</h2>

                        <Form.Field >
                            <Input icon='user' iconPosition='left' placeholder='First Name' name="First_name" value={First_name} onChange={this.onChange} />
                        </Form.Field>
                        <Form.Field >
                            <Input icon='user' iconPosition='left' placeholder='Last Name' name="Last_name" value={Last_name} onChange={this.onChange} />
                        </Form.Field>

                        <Form.Field >
                            <Input icon='mail' iconPosition='left' placeholder='Email' name="Email" value={Email} onChange={this.onChange} />
                        </Form.Field>

                        <Form.Field >
                            <Input icon='birthday cake' iconPosition='left' placeholder='Enter Age' name="Age" value={Age} onChange={this.onChange} />
                        </Form.Field>

                        <Form.Field>
                            <Input icon='dollar' iconPosition='left' placeholder='Enter Income ' name="Income" value={Income} onChange={this.onChange} />
                        </Form.Field>


                        <Button
                            type='submit'
                            color='red'
                            icon floated='right'
                            size='small'
                            labelPosition='left'
                        > <Icon name='user' />Add User</Button>
                    </Form>
                </Card.Content>
            </Card >
        )
    }


}

export default connect(null, { createPersons })(FormCard);