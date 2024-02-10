"use client"

import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import AOS from "aos";
// import "aos/dist/aos.css";
import config from "./Chatbot/config"
import MessageParser from "./Chatbot/MessageParser"
import ActionProvider from "./Chatbot/ActionProvider"
import Image from "next/image";

const ChatbotWrapper = styled.div`
  &.fade-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  &.fade-up-aos-start {
    opacity: 1;
    transform: translateY(0);
  }

  &.fade {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &.fade-aos-start {
    opacity: 1;
  }
`;

function ChatbotMain() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prevIsChatbotOpen) => !prevIsChatbotOpen);
  };

  const minimizeChatbot = () => {
    setIsChatbotOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      isChatbotOpen &&
      event.target.closest(".fixed.bottom-4.right-4") === null
    ) {
      minimizeChatbot();
    }
  };

  const handleChatbotLogoClick = (event) => {
    event.stopPropagation();
    toggleChatbot();
    AOS.refresh();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isChatbotOpen]);

  return (
    <ChatbotWrapper
      className={`fixed bottom-4 right-4 z-50 ${
        isChatbotOpen ? "fade-up fade-up-aos-start" : "fade fade-aos-start"
      }`}
      data-aos={isChatbotOpen ? "fade-up" : "fade"}
      onClick={handleClickOutside}
    >
      {isChatbotOpen ? (
        <ThemeProvider theme={config.theme}>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </ThemeProvider>
      ) : (
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={handleChatbotLogoClick}
        >
          <div className="flex flex-row items-center ml-2">
            <div
              className="flex items-center bg-white text-gray-700 shadow-2xl border text-sm font-bold px-4 py-3"
              role="alert"
            >
              <p className="flex flex-row items-center">
                Let&apos;s connect with us{" "}
                <Image
                width={40}
                height={40}
                alt="chatbot"
                  className="w-10 h-10"
                  src="https://assets-v2.lottiefiles.com/a/5d8bd102-1174-11ee-91ba-6fa0e8a2d782/kaIfJgZedI.gif"
                />
              </p>
            </div>

            <Image
              src="https://cdn.dribbble.com/users/673428/screenshots/6256511/chatbot-kiu.gif"
              alt="Chatbot Logo"
              className="w-30 h-20 rounded-full overflow-hidden"
              width={120}
              height={60}
            />
          </div>
        </div>
      )}
    </ChatbotWrapper>
  );
}

export default ChatbotMain;
