import { createStore } from "redux";
import easyData from "./data/easy-words.json";
import mediumData from "./data/medium-words.json";
import hardData from "./data/hard-words.json";

const randomNumber = (prevIndex, maxLength) => {
    // 0 Index of data should be the name of the language packe
    let min = Math.ceil(1);
    let max = Math.floor(data.length);

    if (prevIndex === null) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        let newIndex = prevIndex;
        while (newIndex === prevIndex) {
            newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return newIndex;
    }
};

let difficulty = 0;
let data = null;
if (difficulty === 0) {
    data = easyData;
} else if (difficulty === 1) {
    data = mediumData;
} else if (difficulty === 2) {
    data = hardData;
} else {
    data = easyData;
}
let index = randomNumber(null);

const initialState = {
    userInput: "",
    word: data[index].word,
    definition: data[index].definition,
    partOfSpeech: data[index].partOfSpeech,
    sentenceUsage: data[index].sentence,
    displayDefinition: false,
    displaySentence: false,
    displayPartOfSpeech: false,
    wordPack: data[0],
};

const NEW_WORD = "NEW_WORD";
const UPDATE_DEFINITION_DISPLAY = "UPDATE_DEFINITION_DISPLAY";
const UPDATE_SENTENCE_DISPLAY = "UPDATE_SENTENCE_DISPLAY";
const UPDATE_PARTOFSPEECH_DISPLAY = "UPDATE_PARTOFSPEECH_DISPLAY";
const UPDATE_INPUT = "UPDATE_INPUT";
const EASY_MODE = "EASY_MODE";
const MEDIUM_MODE = "MEDIUM_MODE";
const HARD_MODE = "HARD_MODE";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_WORD:
            index = randomNumber(index);
            return {
                ...state,
                word: data[index].word,
                definition: data[index].definition,
                partOfSpeech: data[index].partOfSpeech,
                sentenceUsage: data[index].sentence,
                displayDefinition: false,
                displaySentence: false,
                displayPartOfSpeech: false,
            };
        case UPDATE_DEFINITION_DISPLAY:
            return { ...state, displayDefinition: !state.displayDefinition };
        case UPDATE_SENTENCE_DISPLAY:
            return { ...state, displaySentence: !state.displaySentence };
        case UPDATE_PARTOFSPEECH_DISPLAY:
            return {
                ...state,
                displayPartOfSpeech: !state.displayPartOfSpeech,
            };
        case UPDATE_INPUT:
            return { ...state, userInput: action.userInput };
        case EASY_MODE:
            data = easyData;
            index = randomNumber(null);
            return {
                ...state,
                word: data[index].word,
                definition: data[index].definition,
                partOfSpeech: data[index].partOfSpeech,
                sentenceUsage: data[index].sentence,
                wordPack: data[0],
            };
        case MEDIUM_MODE:
            data = mediumData;
            index = randomNumber(null);
            return {
                ...state,
                word: data[index].word,
                definition: data[index].definition,
                partOfSpeech: data[index].partOfSpeech,
                sentenceUsage: data[index].sentence,
                wordPack: data[0],
            };
        case HARD_MODE:
            data = hardData;
            index = randomNumber(null);
            return {
                ...state,
                word: data[index].word,
                definition: data[index].definition,
                partOfSpeech: data[index].partOfSpeech,
                sentenceUsage: data[index].sentence,
                wordPack: data[0],
            };
        default:
            return state;
    }
};

export default createStore(reducer);
