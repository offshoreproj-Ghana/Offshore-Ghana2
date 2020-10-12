import React, { Fragment } from 'react'
import { Container, Grid } from 'semantic-ui-react';
import '../styles/PersonForm.css';
import Footer from './layouts/Footer';
import FormCard from './layouts/FormCard';
import PersonList from './layouts/PersonList';

function Person() {
    return (
        <Fragment>
            <Container fluid >

                <div className="top-header">

                </div>

                <Grid divided='vertically' doubling stackable>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <FormCard />

                        </Grid.Column>

                        {/* TABLE LIST  */}


                        <Grid.Column>

                            <PersonList />

                        </Grid.Column>


                    </Grid.Row>

                </Grid>

                <Footer />



            </Container>
        </Fragment>

    )
}

export default Person
