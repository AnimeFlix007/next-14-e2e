import React from "react";
// import '../../../public/css/Options.css'

import 'react-chatbot-kit/build/main.css';
const Options = (props) => {
  const handleRoleSelection = (role) => {
    const message = props.actionProvider.createChatBotMessage(
      `Hello ${role}. Please Enter your Name`
    );
    props.actionProvider.addMessageToState(message);
    // Further processing based on the selected role can be added here
  };

  const options = [
    {
      text: "Influencer",
      handler: () => handleRoleSelection("Influencer"),
      id: 1,
    },
    {
      text: "Business",
      handler: () => handleRoleSelection("Business"),
      id: 2,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="option-button"
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;

// import React, { useState } from "react";

// const Options = (props) => {
//   const [roleSelected, setRoleSelected] = useState("");

//   const handleRoleSelection = (role) => {
//     const roleMessage = props.actionProvider.createChatBotMessage(
//       `You selected ${role}.`
//     );

//     props.actionProvider.addMessageToState(roleMessage);
//     setRoleSelected(role);
//   };

//   const handleUserInput = (event) => {
//     if (event.key === "Enter") {
//       const userInput = event.target.value.trim();
//       if (roleSelected && userInput !== "") {
//         const message = props.actionProvider.createChatBotMessage(
//           `Nice to meet you, ${userInput}!`
//         );
//         props.actionProvider.addMessageToState(message);
//         // Further processing with the name can be added here
//         event.target.value = "";
//       }
//     }
//   };

//   return (
//     <input
//       className="react-chatbot-kit-chat-input"
//       placeholder="Write your message here"
//       onKeyPress={handleUserInput}
//     />
//   );
// };

// export default Options;

