import { Constants } from "expo-constants";

const settings = {
    dev: {
        apiUrl: 'http://10.0.2.2:9000'
    },
    staging: {
        apiUrl: 'http://10.0.2.2:9000'
    },
    prod: {
        apiUrl: 'http://10.0.2.2:9000'
    },
}

const getCurrentSettings = ()=> {
    if(__DEV__) return settings.dev;
    if(Constants.manifest.releaseChannel === 'staging') return settings.staging;
    return settings.prod;
}

export default getCurrentSettings();