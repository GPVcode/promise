function getFortune(question){
    return tell(question)
    .then((response) => {
        return [
            `Your question was: ${question}`,
            `Your fortune is: ${response}`
        ]
    })
    .catch((error) => {
        return `There was an error: ${error}`
    })
}

//return array of messages
async function fullSession(question){
    let result = [];

    const messageOne = await welcome();
    result.push(messageOne);
    const messageTwo = await getFortune(question);
    typeof messageTwo === "string" ? result.push(messageTwo) : result.push(...messageTwo);
    const bye = await goodbye();
    result.push(bye);

    return result;
}

//create array of messages using welcome(), tell(), and goodbye()
async function fullSession(question){
    let results = [];

    const messageOne = await welcome();
    results.push(messageOne);
    const messageTwo = await getFortune(question);
    typeof messageTwo === "string" ? results.push(question) : results.push(...question);
    const bye = await goodbye();
    results.push(bye);
    return results
}