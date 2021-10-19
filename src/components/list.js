import React from 'react';
import { LanguageList, T } from 'react-translator-component';
import { config } from '../utils/config';


export default function TextTrackListEventMap(){

    const {Config} = config;

    const [lang, setLang] = React.useState(Config.default);
    console.log(lang);


    return(
        <>
            <h1>
                {
                    T("Sample Text")
                }
            </h1>
            <LanguageList Language={lang} theme="DropDown"/>
            <select
                onChange={e => setLang(e.target.value)}
                value={lang}
            >
                {
                    Object.keys(Config.list).map(index => (
                        <option
                            key={index}
                            value={index}
                        >
                            {Config.list[index].text}
                        </option>
                    ))
                }
            </select>
        </>
    )
};