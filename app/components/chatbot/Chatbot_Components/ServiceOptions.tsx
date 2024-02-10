import React, { useState } from "react";
import axios from "axios";
import MessageParser from "../Chatbot/MessageParser";
import baseUrl from "@/app/utils/BaseURL";

const ServiceOptions = (props: any) => {
  const handleServiceSelection = async (service: any) => {
    const message = props.actionProvider.createChatBotMessage(
      `You have selected: ${service}, Our Sales Team wil get in touch with you very soon. Thanks!`
    );

    MessageParser.parseMessage(message);

    const parsedValues = MessageParser.getParsedValues();
    const json = JSON.stringify(parsedValues);
    console.log("parsedValues::" + json);
    const mailContent = {
      name: parsedValues.name,
      email: parsedValues.email,
      number: parsedValues.phoneNumber,
      subject: "Footprynt Inquiry",
      text: service,
    };
    const jsonString1 = JSON.stringify(mailContent);
    console.log("mailContent::" + jsonString1);
    const jsonString = JSON.stringify(message);
    if (jsonString) {
      console.log("Message::" + jsonString);
      console.log("service::" + service);
    }
    try {
      const response = await axios.post(`${baseUrl}/inquiry`, mailContent);
      console.log("Mail sent:", response);
    } catch (error) {
      console.error("Error sending mail:", error);
    }
    props.actionProvider.addMessageToState(message);
  };

  const serviceOptions = [
    {
      text: "Influencer Analysis",
      handler: () => handleServiceSelection("Influencer Analysis"),
      id: 1,
    },
    {
      text: "Hashtag Analysis",
      handler: () => handleServiceSelection("Hashtag Analysis"),
      id: 2,
    },
    {
      text: "Create/Run Campaign",
      handler: () => handleServiceSelection("Run Campaign"),
      id: 3,
    },
  ];

  const buttonsMarkup = serviceOptions.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default ServiceOptions;
