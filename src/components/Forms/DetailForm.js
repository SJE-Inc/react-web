import React, { Component } from 'react'
import { RBtnWrapper, RLabel, RadioBtn, RArrow, LArrow, Img, Column1, Column2, Form, FormContainer, RowWrapper, ColWrapper, FormWrapper, Header, Label, FirstName, LastName, Email, Number, City, ImgWrap, Address } from './FormElements'
import Img1 from '../../images/svg-4.svg'
import { Button } from '../BtnElement';
import { TopLine } from '../InfoSection/InfoElements';

export class DetailForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { text, values, handleChange, selectChange, primaryBg, primary, secondary, dark, big } = this.props;

        return (
            <Form id="contact">
                <TopLine>Contact Us</TopLine>
                <FormContainer primaryBg={primaryBg}>

                    <Column1>
                        <FormWrapper>
                            <Header>Complete Form</Header>
                            <RowWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >First Name</Label>
                                    <FirstName
                                        name="firstName"
                                        onChange={handleChange('firstName')}
                                        defaultValue={values.firstName}
                                    />
                                </ColWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Last Name</Label>
                                    <LastName
                                        name="lastName"
                                        onChange={handleChange('lastName')}
                                        defaultValue={values.lastName}
                                    />
                                </ColWrapper>
                            </RowWrapper>
                            <RowWrapper>

                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Email</Label>
                                    <Email
                                        name="email"
                                        onChange={handleChange('email')}
                                        defaultValue={values.email}

                                    />
                                </ColWrapper>
                            </RowWrapper>

                            <RowWrapper>

                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Phone Number</Label>
                                    <Number
                                        name="number"
                                        onChange={handleChange('number')}
                                        defaultValue={values.number}

                                    />
                                </ColWrapper>
                            </RowWrapper>

                            <RowWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Address</Label>
                                    <Address
                                        name="address"
                                        onChange={handleChange('address')}
                                        defaultValue={values.address}
                                    />
                                </ColWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >City</Label>
                                    <City
                                        name="city"
                                        onChange={handleChange('city')}
                                        defaultValue={values.city}
                                    />
                                </ColWrapper>
                            </RowWrapper>
                            <RowWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Select One</Label>
                                    <br></br>
                                    <RowWrapper>
                                        <RowWrapper>
                                            <RBtnWrapper>
                                                <RadioBtn
                                                    type="radio"
                                                    name="service"
                                                    value="Lawn Care"
                                                    // checked={checked}
                                                    onChange={selectChange}
                                                    defaultValue={values.serviceNeeded}
                                                />
                                                <RLabel
                                                    text={text}
                                                >Lawn Care/Maint.</RLabel>
                                            </RBtnWrapper>


                                        </RowWrapper>
                                        <RowWrapper>
                                            <RBtnWrapper>
                                                <RadioBtn
                                                    type="radio"
                                                    name="service"
                                                    value="Pressure Washing"
                                                    // checked={checked}
                                                    onChange={selectChange}
                                                    defaultValue={values.serviceNeeded}

                                                />
                                                <RLabel
                                                    text={text}
                                                >Pressure Washing</RLabel>
                                            </RBtnWrapper>


                                        </RowWrapper>
                                        <RowWrapper>
                                            <RBtnWrapper>
                                                <RadioBtn
                                                    type="radio"
                                                    name="service"
                                                    value="Property Cleanup"
                                                    // checked={checked}
                                                    onChange={selectChange}
                                                    defaultValue={values.serviceNeeded}
                                                />
                                                <RLabel
                                                    text={text}
                                                >Property Cleaning</RLabel>
                                            </RBtnWrapper>
                                        </RowWrapper>

                                    </RowWrapper>
                                </ColWrapper>
                            </RowWrapper>


                            <RowWrapper>
                                <Button
                                    primary={primary}
                                    dark={dark}
                                    secondary={secondary}
                                ><LArrow />Previous</Button>
                                <Button
                                    big={big}
                                    primary={primary}
                                    dark={dark}
                                    secondary={secondary}
                                    onClick={this.continue}

                                >Continue<RArrow /></Button>
                            </RowWrapper>

                        </FormWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap primaryBg={primaryBg}>
                            <Img src={Img1} />
                        </ImgWrap>
                    </Column2>

                </FormContainer>
            </Form >
        )
    }
}

export default DetailForm