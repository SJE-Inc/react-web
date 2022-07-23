import React, { Component } from 'react'
import { RBtnWrapper, RLabel, RadioBtn, RArrow, LArrow, Img, Column1, Column2, Form, FormContainer, RowWrapper, ColWrapper, FormWrapper, Header, Label, ImgWrap } from './FormElements'
import Img1 from '../../images/svg-4.svg'
import { Button } from '../BtnElement';
import { TopLine } from '../InfoSection/InfoElements';

export class PressureWashForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const { values, handleChange, primaryBg, primary, secondary, dark, text } = this.props;

        return (
            <Form id="contact">
                <TopLine>Contact Us</TopLine>
                <FormContainer primaryBg={primaryBg}>

                    <Column1>
                        <FormWrapper>
                            <Header
                                text={text}
                            >Pressure Washing</Header>
                            <RowWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Area(s) to be Washed</Label>

                                    <ColWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="checkbox"
                                                name="type"
                                                value="Walkways/Sidewalks/Parking Lots"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Walkways/Sidewalks/Parking Lots</RLabel>
                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="checkbox"
                                                name="type"
                                                value="Concrete"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Concrete</RLabel>

                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="checkbox"
                                                name="type"
                                                value="Decks/Patios"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Decks/Patios</RLabel>

                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="checkbox"
                                                name="type"
                                                value="Trash Barrels/ Dumpster Enclosures"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Trash Barrels/Dumpster Enclosures</RLabel>

                                        </RBtnWrapper>

                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="checkbox"
                                                name="type"
                                                value="Drivethru"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Drivethru</RLabel>

                                        </RBtnWrapper>
                                    </ColWrapper>


                                </ColWrapper>
                            </RowWrapper>
                            <RowWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Frequency?</Label>

                                    <RowWrapper>

                                        <ColWrapper>
                                            <RBtnWrapper>
                                                <RadioBtn
                                                    type="radio"
                                                    name="freq"
                                                    value="Once"
                                                    onChange={handleChange('freq')}
                                                    defaultValue={values.freq}


                                                />
                                                <RLabel
                                                    text={text}
                                                >One-Time</RLabel>
                                            </RBtnWrapper>
                                            <RBtnWrapper>
                                                <RadioBtn
                                                    type="radio"
                                                    name="freq"
                                                    value="Monthly"
                                                    onChange={handleChange('freq')}
                                                    defaultValue={values.freq}


                                                />
                                                <RLabel
                                                    text={text}
                                                >Monthly</RLabel>

                                            </RBtnWrapper>
                                            <RBtnWrapper>
                                                <RadioBtn
                                                    type="radio"
                                                    name="freq"
                                                    value="Quarterly"
                                                    onChange={handleChange('freq')}
                                                    defaultValue={values.freq}


                                                />
                                                <RLabel
                                                    text={text}
                                                >Quarterly</RLabel>

                                            </RBtnWrapper>
                                        </ColWrapper>
                                        <ColWrapper>
                                            <RBtnWrapper>
                                                <RadioBtn
                                                    type="radio"
                                                    name="freq"
                                                    value="Semi-annually"
                                                    onChange={handleChange('freq')}
                                                    defaultValue={values.freq}


                                                />
                                                <RLabel
                                                    text={text}
                                                >Semi-Annually</RLabel>

                                            </RBtnWrapper>
                                            <RBtnWrapper>
                                                <RadioBtn
                                                    type="radio"
                                                    name="freq"
                                                    value="Annually"
                                                    onChange={handleChange('freq')}
                                                    defaultValue={values.freq}


                                                />
                                                <RLabel
                                                    text={text}

                                                >Annually</RLabel>

                                            </RBtnWrapper>

                                        </ColWrapper>

                                    </RowWrapper>



                                </ColWrapper>
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

                </FormContainer >
            </Form >
        )

    }
}

export default PressureWashForm