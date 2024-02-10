class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  respondToInput = (message) => {
    const parsedInt = parseInt(message);

    if (!isNaN(parsedInt)) {
      if (parsedInt.toString().length === 10) {
        const emailMessage = this.createChatBotMessage(
          "Got it, Please enter your email."
        );
        this.addMessageToState(emailMessage);
      } else {
        alert("Please provide a valid phone number");
      }
    } else if (message.includes("@")) {
      const serviceOptionsMessage = this.createChatBotMessage("Our Services:", {
        widget: "serviceOptions",
      });
      this.addMessageToState(serviceOptionsMessage);
    } else {
      const contactMessage = this.createChatBotMessage(
        "Heyya, Please enter your contact."
      );
      this.addMessageToState(contactMessage);
    }
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
