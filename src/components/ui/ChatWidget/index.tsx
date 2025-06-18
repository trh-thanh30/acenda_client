"use client";
import React, { useState } from "react";
import api from "@/lib/axios";
import Image from "next/image";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";
import ButtonBorder from "../Button/ButtonBorder";
import logo from "@/../public/logo.svg";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: "user" | "bot"; message: string }>
  >([
    {
      sender: "bot",
      message:
        "Hey there! I'm your friendly chatbot from Acenda Travel. I'm here to help you plan your perfect trip. What can I help you with today?",
    },
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { sender: "user" as const, message };
    setChatMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const res = await api.post("/dify-chat", { message });
      const botReply = res.data.answer;
      setChatMessages((prev) => [
        ...prev,
        { sender: "bot", message: botReply },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          message: "Oops, something went wrong. Please try again!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <button
        onClick={toggleChat}
        className="flex items-center justify-center p-2 hover:scale-95 bg-primary-500 cursor-pointer text-white rounded-full shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out">
        {isOpen ? (
          <IoClose className="h-7 w-7" />
        ) : (
          <IoChatbubbleEllipsesOutline className="h-7 w-7" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-[450px] bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-primary-500 text-white rounded-t-lg">
            <h3 className="text-lg font-semibold">Acenda Travel Chatbot</h3>
            <button
              onClick={toggleChat}
              className="cursor-pointer"
              aria-label="Close chat">
              <IoClose className="h-6 w-6" />
            </button>
          </div>

          {/* Chat content */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 text-gray-800 space-y-3">
            {chatMessages.map((item, index) =>
              item.sender === "user" ? (
                <div key={index} className="flex justify-end">
                  <div className="p-2 bg-primary-100 rounded-lg max-w-[75%]">
                    <p>{item.message}</p>
                  </div>
                  <Image
                    src={logo}
                    alt="logo"
                    className="rounded-full w-7 h-7 p-2 bg-doveGray-0 ml-2"
                  />
                </div>
              ) : (
                <div key={index} className="flex items-start">
                  <Image
                    src={logo}
                    alt="logo"
                    className="rounded-full w-7 h-7 p-2 bg-doveGray-0 mr-2"
                  />
                  <div className="p-2 bg-midnightBlue-100 rounded-lg max-w-[75%]">
                    <p>{item.message}</p>
                  </div>
                </div>
              )
            )}

            {loading && (
              <div className="flex items-start">
                <Image
                  src={logo}
                  alt="logo"
                  className="rounded-full w-7 h-7 p-2 bg-doveGray-0 mr-2"
                />
                <div className="p-2 bg-midnightBlue-100 rounded-lg max-w-[75%]">
                  <p>Typing...</p>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 p-4 border-t border-gray-200">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Type your message..."
              className="focus:shadow-xs placeholder:text-doveGray-400 outline-none bg-white p-3 border border-gray-200 rounded-lg w-full"
            />
            <ButtonBorder text="Send" isValid={true} />
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
