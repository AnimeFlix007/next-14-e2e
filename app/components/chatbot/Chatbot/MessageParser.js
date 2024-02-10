let parsedValues = {
  name: "",
  email: "",
  phoneNumber: "",
};
let email;
let name;
let phoneNumber;
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const parsedInt = parseInt(message);

    if (!isNaN(parsedInt)) {
      phoneNumber = parsedInt.toString();
      //const lowercase = message.toLowerCase();
      console.log("phoneNumber::" + phoneNumber);
    } else if (typeof message === "string" && message.includes("@")) {
      email = message;
      //const lowercase = email.toLowerCase();
      console.log("email::" + email);
    } else {
      name = message;
      //const lowercase = name.toLowerCase();
      console.log("name::" + name);
    }

    let lowercase = "";

    if (typeof message === "string") {
      lowercase = message.toLowerCase();
    } else {
      lowercase = String(message).toLowerCase();
    }
    const lowercase1 = lowercase.toLowerCase().trim();

    if (lowercase1 !== "") {
      if (this.actionProvider && this.actionProvider.respondToInput) {
        this.actionProvider.respondToInput(lowercase);
      }
    }
  }

  static parseMessage(message) {
    console.log("phoneNumber1::" + phoneNumber);
    console.log("email1::" + email);
    console.log("name1::" + name);

    parsedValues.name = name;
    parsedValues.email = email;
    parsedValues.phoneNumber = phoneNumber;
  }

  static getParsedValues() {
    return parsedValues;
  }
}

export default MessageParser;
