import {Config} from 'react-translator-component';
import logo from '../logo.svg';

Config.default = 'es';
Config.list = {
    es: {
        text: 'Español',
        icon: logo,
        file: require('../local/es'),
    },
    en: {
        text: 'English',
        icon: logo,
        file: require('../local/en'),
    },
    de:{
        text: 'Deutsch',
        icon: logo,
        file: require('../local/de'),
    }
};

export const config = {Config};