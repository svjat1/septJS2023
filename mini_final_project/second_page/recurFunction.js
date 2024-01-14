function recurs(response, elementHTML){
    let ulElement = document.createElement('ul');

    for (const argument in response) {
        let liElement = document.createElement('li');

        if (typeof response[argument] === 'object'){
            liElement.innerText = `${argument} :`
            recurs(response[argument], liElement);
        }else {
            liElement.innerHTML = argument + ': ' + response[argument];
        }
        ulElement.append(liElement)
    }
    elementHTML.append(ulElement)
}