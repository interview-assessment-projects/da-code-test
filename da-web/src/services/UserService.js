const randomUserUrl = "https://randomuser.me/api";

const UserService = {
  // Get random user
  getRandoUser: async function () {
    const response = await fetch(randomUserUrl, { mode: "cors" });
    const json = await response.json();
    return json;
  },
};

export default UserService;
