
import React, { Component } from 'react'
import { Green2, Header, Center, Head, Text, Img, Column1, Column2, Form, FormContainer, ColWrapper, FormWrapper, ImgWrap } from './FormElements'
import Img1 from '../../images/svg-4.svg'
import { TopLine } from '../InfoSection/InfoElements';


export class Success extends Component {

    render() {

        const { values: { firstName, lastName }, primaryBg } = this.props;
        return (
            <Form id="contact">
                <TopLine>Contact Us</TopLine>
                <FormContainer primaryBg={primaryBg}>

                    <Column1>
                        <FormWrapper>

                            <ColWrapper>
                                <Header>
                                    Success
                                </Header>
                                <Center>

                                    <Head>Thank you <Green2>{firstName} {lastName}</Green2> for your submission</Head>
                                    <Text>We will get back to you within 24 hours</Text>
                                </Center>

                            </ColWrapper>



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

export default Success