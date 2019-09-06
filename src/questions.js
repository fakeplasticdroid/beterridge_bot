const getQuestions = (string) => {
    return string.split(/[.|:|!]/)
    //gotta do this hacky replacement to retain the delimiter on the split
        .reduce((acc, curr) => [...acc, ...curr.replace(/\?/gi, "?||").split('||')], [])
        .map(s => s.trim())
        .filter(isQuestion);
};

const containsPolarQuestion = (string) => {
    return getQuestions(string).some(isPolarQuestion);
}

const isPolarQuestion = (question) => {
    const possibleStartingWords = ['Is', 'Does', 'Did', 'Can', "Wouldn't", "Are"];
    return possibleStartingWords.includes(question.split(' ')[0]);
}

const isQuestion = (string) => {
    return string.endsWith('?');
}

module.exports = {
    getQuestions,
    containsPolarQuestion: containsPolarQuestion
};