import React, { Component } from 'react'
import DetailForm from './DetailForm'
import YardCleanupForm from './YardCleanupForm'
import PressureWashForm from './PressureWashForm'
import LawnMowingForm from './LawnMowingForm'
import Confirm from './Confirm'
import Success from './Success'
import { generalForm, pressureForm, yardForm, lawnForm } from './Data'
import emailjs from 'emailjs-com';
// import { Vals } from '../Data'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        address: '',
        number: '',
        serviceNeeded: '',
        freq: '',
        type: '',
        size: 'N/A',

    }
    //Proceed to next step(correct form)
    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    //Go back to previous step
    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {

        if (input === "type") {
            const { type } = this.state;
            this.setState({ [input]: type + e.target.value + ", " });
        }
        else {
            this.setState({ [input]: e.target.value });
        }

    }

    //selects which service form to display
    selectChange = e => {
        // e.preventDefault();
        this.setState({
            serviceNeeded: e.target.value
        });
    }

    //add and send info to email using emailjs 
    sendEmail = () => {
        console.log("sendEmail was run");

        emailjs.sendForm(
            'service_qtjwz8t',
            'template_98r5f92',
            '#form',
            'WGY8RElwDVSm6LF6G'
        )
            .then((result) => {
                console.log(
                    result.text
                );
            }, (error) => {
                console.log(error.text);
            });
        // e.target.reset();
    }


    render() {

        const { step, serviceNeeded } = this.state;
        const { firstName, number, address, lastName, email, city, freq, size, type } = this.state;
        const values = { firstName, number, lastName, email, city, address, serviceNeeded, freq, size, type }

        switch (step) {
            case 1:
                return (
                    <DetailForm
                        {...generalForm}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        selectChange={this.selectChange}


                    />
                )
            //for the service needed
            case 2:
                switch (serviceNeeded) {
                    case "Lawn Care":
                        return (
                            <LawnMowingForm
                                {...lawnForm}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                                prevStep={this.prevStep}
                                sendEmail={this.sendEmail}
                            />
                        )
                    case "Pressure Washing":
                        return (

                            <PressureWashForm
                                {...pressureForm}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                                prevStep={this.prevStep}
                                sendEmail={this.sendEmail}
                            />
                        )
                    case "Property Cleanup":
                        return (
                            <YardCleanupForm
                                {...yardForm}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                                prevStep={this.prevStep}
                                sendEmail={this.sendEmail}
                            />

                        )
                }

            case 3:
                return (
                    <Confirm
                        {...generalForm}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        sendEmail={this.sendEmail}


                    />
                )

            case 4:
                return (
                    <Success
                        {...generalForm}
                        values={values}
                    />
                )

        }
    }
}

export default UserForm