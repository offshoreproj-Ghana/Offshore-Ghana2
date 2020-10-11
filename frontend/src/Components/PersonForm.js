import React, { Fragment } from 'react'
import { Container, Grid, Form, Button, Card, Icon, Input, Table } from 'semantic-ui-react';
import '../styles/PersonForm.css';

function PersonForm() {
    return (
        <Fragment>
            <Container fluid >

                <div className="top-header">

                </div>

                <Grid divided='vertically' doubling stackable>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Card className="main__card" raised>
                                <Card.Content>
                                    <Form widths='equal' autoComplete='off' >
                                        <h2> Person's Information</h2>

                                        <Form.Field >
                                            <Input icon='user' iconPosition='left' placeholder='First Name' name="" />
                                        </Form.Field>
                                        <Form.Field >
                                            <Input icon='user' iconPosition='left' placeholder='Last Name' name="lName" />
                                        </Form.Field>

                                        <Form.Field >
                                            <Input icon='mail' iconPosition='left' placeholder='Email' name="email" />
                                        </Form.Field>

                                        <Form.Field >
                                            <Input icon='birthday cake' iconPosition='left' placeholder='Enter Age' name="age" />
                                        </Form.Field>

                                        <Form.Field>
                                            <Input icon='dollar' iconPosition='left' placeholder='Enter Income ' name="income" />
                                        </Form.Field>


                                        <Button type='submit' color='red' icon floated='right' size='small' labelPosition='left'> <Icon name='user' />Add User Info</Button>
                                    </Form>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        {/* TABLE LIST  */}

                        <Grid.Column>
                            <div className="persons-table">
                                <Table celled striped unstackable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell> First Name</Table.HeaderCell>
                                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                                            <Table.HeaderCell>Age</Table.HeaderCell>
                                            <Table.HeaderCell>Email</Table.HeaderCell>
                                            <Table.HeaderCell>Income</Table.HeaderCell>
                                            <Table.HeaderCell>Action</Table.HeaderCell>

                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>Melissa</Table.Cell>
                                            <Table.Cell>Groth</Table.Cell>
                                            <Table.Cell>48</Table.Cell>
                                            <Table.Cell>barbellajobeauty@gmail.com</Table.Cell>
                                            <Table.Cell>$374603</Table.Cell>
                                            <Table.Cell> <Button.Group basic size='small'>
                                                <Button icon='edit outline ' />
                                                <Button icon='delete' />
                                            </Button.Group></Table.Cell>


                                        </Table.Row>



                                    </Table.Body>
                                </Table>
                            </div>
                        </Grid.Column>


                    </Grid.Row>

                </Grid>

                <div className="footer">

                </div>


            </Container>
        </Fragment>

    )
}

export default PersonForm
