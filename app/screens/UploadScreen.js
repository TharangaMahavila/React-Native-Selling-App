import React from 'react';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Modal } from 'react-native';
import Colors from '../config/Colors';

function UploadScreen({onDone, progress = 0, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ?
                <Progress.Bar progress={progress} color={Colors.primary} width={200} /> :
                <LottieView
                autoPlay
                source={require('../assets/animations/done.json')}
                loop={false}
                onAnimationFinish={onDone}
                style={styles.animation} />}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    animation: {
        width: 150
    }
})

export default UploadScreen;