import React, { Component } from 'react'
import { RBtnWrapper, RLabel, RadioBtn, RArrow, LArrow, Img, Column1, Column2, Form, FormContainer, RowWrapper, ColWrapper, FormWrapper, Header, Label, ImgWrap } from './FormElements'
import Img1 from '../../images/svg-4.svg'
import { Button } from '../BtnElement';
import { TopLine } from '../InfoSection/InfoElements';

export class YardCleanupForm extends Component {

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
                            <Header text={text}>Property Cleanup</Header>
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
                                                value="Spring Cleaning"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Spring Cleaning</RLabel>
                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="type"
                                                value="Fall Cleaning"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Fall Cleaning</RLabel>

                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="type"
                                                value="Window Cleaning"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Window Cleaning</RLabel>

                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="type"
                                                value="Gutter Cleaning"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Gutter Cleaning</RLabel>

                                        </RBtnWrapper>
                                        <RBtnWrapper>
                                            <RadioBtn
                                                type="radio"
                                                name="type"
                                                value="Snow Removal"
                                                onChange={handleChange('type')}
                                                defaultValue={values.type}


                                            />
                                            <RLabel
                                                text={text}
                                            >Snow Removal</RLabel>

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
                                                value="greater than 20k sq/ft"
                                                onChange={handleChange('size')}
                                                defaultValue={values.size}


                                            />
                                            <RLabel
                                                text={text}
                                                name='size'
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

export default YardCleanupForm