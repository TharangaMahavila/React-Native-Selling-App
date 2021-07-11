import React from 'react';
import {Alert, Keyboard} from 'react-native';
import {Notifications} from 'expo';
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from './forms'
import messagesApi from '../api/messages'; 

function ContactSellerForm({listing}) {

    const handleSubmit = async ({message}, {resetForm}) => {
        Keyboard.dismiss();

        const result = await messagesApi.send(message, listing.id);

        if(!result.ok){
            console.log('Error', result);
            return Alert.alert('Error', 'Could not send the messages to the seller');
        }

        resetForm();

        Notifications.presentLocalNotificationAsync({
            title: 'Awesome!',
            body: 'Your message was sent to the seller.',
        });
    }

    const validationSchema = Yup.object().shape({
        message: Yup.string().required().min(1).label('Message'),
    });

    return (
        <AppForm
            initialValues={{message: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <AppFormField 
                maxLength={255}
                multiline
                name="message"
                numberOfLines={1}
                placeholder="Message..."
            />
            <SubmitButton title="Contact Seller" />
        </AppForm>
    )
}

export default ContactSellerForm;