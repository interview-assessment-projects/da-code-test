// const apiBaseUrl = 'http://localhost:3001/img'; // dev
const apiBaseUrl = 'https://meme-server2.herokuapp.com/img'; // prod

const FormService = {

    sendFrom: async function(name, email, message) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sender: name,
                address: email,
                content: message
            })
        }
        const response = await fetch(apiBaseUrl + '/saveFormContent', requestOptions)
        const json = await response.json();
        return json;
    }

}

export default FormService