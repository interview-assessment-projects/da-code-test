const apiBaseUrl = 'http://localhost:8888'; // dev
// const apiBaseUrl = "https://git.heroku.com/da-test-api.git"; // prod

const FormService = {
  sendFrom: async function (name, email, message) {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: name,
        address: email,
        content: message,
      }),
    };
    const response = await fetch(
      apiBaseUrl + "/saveFormContent",
      requestOptions
    );
    const json = await response.json();
    return json;
  },
};

export default FormService;
