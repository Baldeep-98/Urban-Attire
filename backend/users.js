const { UserInputError, AuthenticationError } = require("apollo-server");
const { getDB } = require("./database");
const bcrypt = require("bcrypt");
const getJwtToken = require("./getJwtToken");

const userValidate = (users) => {
  var errors = [];
  var userName =
    /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])(?=.*[a-zA-Z0-9]).{11}$/;
  if (!userName.test(users.username)) {
    errors.push(
      "Username should be exactly 11 characters and contain at least one special character and one alphanumeric character"
    );
  }
  if (users.password !== users.confirmPassword) {
    errors.push("Passwords must match");
  }
  if (errors.length > 0) {
    throw new UserInputError("Invalid input(s): " + errors.join(", "));
  }
};
const getUser = async (_, args) => {
  const db = getDB();
  const { UserCredential } = args;
  const user = await db.collection("users").findOne({
    $or: [
      { username: UserCredential.userName },
      { email: UserCredential.email },
    ],
  });

  const comparePasswords = async (inputPass, storedPassword) => {
    try {
      const matchPassword = await bcrypt.compare(inputPass, storedPassword);
      return matchPassword;
    } catch (error) {
      console.log("password not matched");
      throw error;
    }
  };
  if (
    user &&
    (await comparePasswords(UserCredential.password, user.password))
  ) {
    console.log(user);
    webToken = getJwtToken(user.user_id);
    return { user, webToken };
  } else {
    throw new AuthenticationError("Invalid Username");
  }
};
const userAdd = async (_, args) => {
  const db = getDB();
  const { user } = args;
  userValidate(user);
  const userDetails = await db
    .collection("users")
    .findOne({ email: user.email });
  if (userDetails) {
    console.log(userDetails);
    throw new AuthenticationError("User Already exist");
  }
  user.username = user.email.split("@")[0];
};
module.exports = { getUser, userAdd };
