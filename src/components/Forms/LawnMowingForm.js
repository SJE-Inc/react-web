import React, { Component } from 'react'
import { RBtnWrapper, RLabel, RadioBtn, RArrow, LArrow, Img, Column1, Column2, Form, FormContainer, RowWrapper, ColWrapper, FormWrapper, Header, Label, ImgWrap } from './FormElements'
import Img1 from '../../images/svg-4.svg'
import { Button } from '../BtnElement';
import { TopLine } from '../InfoSection/InfoElements';


export class LawnMowingForm extends Component {

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
                            <Header text={text}>Lawn Care</Header>
                            <RowWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Service Options</Label>
                                    <ColWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="type"
                                                value="Lawn Mowing"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Lawn Mowing</RLabel>
                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="type"
                                                value="Edging"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Edging</RLabel>

                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="type"
                                                value="Trimming"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Trimming</RLabel>

                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="type"
                                                value="Weed Control"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Weed Control</RLabel>

                                        </RBtnWrapper>
                                    </ColWrapper>

                                </ColWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Frequency?</Label>
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
                                            >One-Time Service</RLabel>
                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="freq"
                                                value="Weekly"
                                                onChange={handleChange('freq')}
                                                defaultValue={values.freq}


                                            />
                                            <RLabel
                                                text={text}
                                            >Weekly</RLabel>

                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="freq"
                                                value="Bi-weekly"
                                                onChange={handleChange('freq')}
                                                defaultValue={values.freq}


                                            />
                                            <RLabel
                                                text={text}
                                            >Bi-Weekly</RLabel>

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
                                    </ColWrapper>

                                </ColWrapper>
                            </RowWrapper>
                            <RowWrapper>
                                <ColWrapper>
                                    <Label
                                        text={text}
                                    >Property Size?</Label>
                                    <ColWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="size"
                                                value="less than 10k sq/ft"
                                                onChange={handleChange('size')}
                                                defaultValue={values.size}


                                            />
                                            <RLabel
                                                text={text}
                                            > less than 10,000 sq/ft</RLabel>
                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="size"
                                                value="10k-20k sq/ft"
                                                onChange={handleChange('size')}
                                                defaultValue={values.size}


                                            />
                                            <RLabel
                                                text={text}
                                            >between 10,000 - 20,000 sq/ft</RLabel>

                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="size"
                                                value="Greater than 20k sq/ft"
                                                onChange={handleChange('size')}
                                                defaultValue={values.size}


                                            />
                                            <RLabel
                                                text={text}
                                            >greater than 20,000 sq/ft</RLabel>

                                        </RBtnWrapper>

                                    </ColWrapper>

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

                </FormContainer>
            </Form>
        )

    }
}

export default LawnMowingForm