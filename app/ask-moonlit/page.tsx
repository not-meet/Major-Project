"use client"
import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import Navbar from '@/components/NavBar';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function AskMoonlitPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Moonlit, your data analysis assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "I'm analyzing your request. This is a demo response. In production, I'll provide insights about your data!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16 flex flex-col">
        {/* Header */}
        <div className="bg-linear-to-r from-teal-500 to-teal-400 px-8 py-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-semibold text-white">Ask Moonlit</h1>
          </div>
          <p className="text-white/90 mt-2">Your intelligent data analysis companion</p>
        </div>

        {/* Chat Messages Container */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-2xl px-6 py-4 ${message.sender === 'user'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                  }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <span className={`text-xs mt-2 block ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="border-t border-gray-200 bg-white px-8 py-6">
          <div className="max-w-4xl mx-auto flex gap-4 items-end">
            <div className="flex-1 relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Moonlit anything about your data..."
                className="w-full px-4 py-3 border border-gray-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 resize-none"
                rows={1}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={inputText.trim() === ''}
              className="px-6 py-3 bg-teal-500 text-white hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span className="font-medium">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
