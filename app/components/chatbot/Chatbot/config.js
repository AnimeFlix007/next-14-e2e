import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../Chatbot_Components/Options";
import ServiceOptions from "../Chatbot_Components/ServiceOptions";

import "react-chatbot-kit/build/main.css";
const config = {
  botName: "Charlie",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00008B",
      borderRadius: "10px",
    },
  },
  initialMessages: [
    createChatBotMessage(`Hello, Who are you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "serviceOptions",
      widgetFunc: (props) => <ServiceOptions {...props} />,
    },
  ],
  theme: {
    background: "#f5f8fb",
    headerBgColor: "red",
    headerFontColor: "#fafafc",
    headerFontSize: "15px",
    botBubbleColor: "#333e7a",
    botFontColor: "#fafafc",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
    innerHeight: "10%",
    innerWidth: "10%",
  },
};

export default config;
