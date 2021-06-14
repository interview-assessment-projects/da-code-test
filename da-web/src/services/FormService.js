// const apiBaseUrl = 'http://localhost:8888'; // dev
const apiBaseUrl = "https://da-test-api.herokuapp.com"; // prod

const FormService = {
  sendFrom: async function (name, email, message) {
    const requestOptions = {
      method: "POST",
      header: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
      },
      body: JSON.stringify({
        sender: name,
        address: email,
        content: message,
      })
    };
    const response = await fetch(
      {mode: "cors"},
      apiBaseUrl + "/saveFormContent",
      requestOptions
    );
    const json = await response.json();
    return json;
  },
};

export default FormService;
