//process form 
//send to api 

import React, { Component } from 'react'
import { Text, Default, Invisible, Green, List, ListItem, RArrow, LArrow, Img, Column1, Column2, Form, FormContainer, RowWrapper, ColWrapper, FormWrapper, Header, Label, ImgWrap } from './FormElements'
import Img1 from '../../images/svg-4.svg'
import { Button } from '../BtnElement';
import { TopLine } from '../InfoSection/InfoElements';


export class Confirm extends Component {

    continue = () => {
        // e.preventDefault();
        this.props.nextStep();
    }

    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    sending = () => {
        // e.preventDefault();
        this.props.sendEmail();
    }

    run = e => {
        e.preventDefault();
        this.continue();
        this.sending();
    }


    render() {

        const { values: { firstName, lastName, city, address, serviceNeeded, email, number, type, size, freq }, primaryBg, primary, secondary, dark, text } = this.props;

        return (
            <Form id="contact">
                <TopLine>Contact Us</TopLine>
                <FormContainer primaryBg={primaryBg}>

                    <Column1>
                        <FormWrapper>
                            <Invisible id="form">
                                <Default
                                    type="text"
                                    value={firstName}
                                    name="firstName"
                                />
                                <Default
                                    type="text"
                                    value={lastName}
                                    name="lastName"
                                />
                                <Default
                                    type="text"
                                    value={type}
                                    name="type"
                                />
                                <Default
                                    type="text"
                                    value={serviceNeeded}
                                    name="service"
                                />
                                <Default
                                    type="text"
                                    value={freq}
                                    name="freq"
                                />
                                <Default
                                    type="text"
                                    value={size}
                                    name="size"
                                />
                                <Default
                                    type="text"
                                    value={email}
                                    name="email"
                                />
                                <Default
                                    type="text"
                                    value={number}
                                    name="number"
                                />
                                <Default
                                    type="text"
                                    value={city}
                                    name="city"
                                />
                                <Default
                                    type="text"
                                    value={address}
                                    name="address"
                                />


                            </Invisible>
                            <Header text={text}>Confirm Details</Header>
                            <RowWrapper>

                                <List>
                                    <ListItem
                                        text={text}
                                    >
                                        <Green>Full Name:</Green>
                                        <Text>{firstName} {lastName}</Text>
                                    </ListItem>

                                    <ListItem
                                        text={text}
                                    >
                                        <Green>Address:</Green>
                                        <Text>{city}, {address}</Text>
                                    </ListItem>

                                    <ListItem
                                        text={text}
                                    >
                                        <Green>Email:</Green>
                                        <Text>{email}</Text>
                                    </ListItem>
                                    <ListItem
                                        text={text}
                                    >
                                        <Green>Phone:</Green>
                                        <Text>{number}</Text>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem
                                        text={text}
                                    >
                                        <Green>Service:</Green>
                                        <Text>{serviceNeeded}</Text>
                                    </ListItem>

                                    <ListItem
                                        text={text}
                                    >
                                        <Green>Service Option:</Green>
                                        <Text>{type}</Text>
                                    </ListItem>

                                    <ListItem
                                        text={text}
                                    >
                                        <Green>Property Size:</Green>
                                        <Text>{size}</Text>
                                    </ListItem>
                                    <ListItem
                                        text={text}
                                    >
                                        <Green>Frequency:</Green>
                                        <Text>{freq}</Text>
                                    </ListItem>

                                </List>

                            </RowWrapper>





                            <RowWrapper>
                                <Button
                                    primary={primary}
                                    dark={dark}
                                    secondary={secondary}
                                    onClick={this.prev}
                                ><LArrow />Previous</Button>
                                <Button
                                    primary={primary}
                                    dark={dark}
                                    secondary={secondary}
                                    onClick={this.run}
                                >Continue<RArrow /></Button>
                            </RowWrapper>

                        </FormWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap primaryBg={primaryBg}>
                            <Img src={Img1} />
                        </ImgWrap>
                    </Column2>

                </FormContainer >
            </Form >
        )

    }
}

export default Confirm