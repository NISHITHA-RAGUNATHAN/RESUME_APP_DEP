import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, user: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      let responseMessage;

      // Check for job description queries
      const jobTitle = extractJobTitle(input);
      if (jobTitle) {
        responseMessage = { text: generateJobDescription(jobTitle), user: 'bot' };
      } else {
        try {
          responseMessage = await fetchResponse(input);
        } catch (error) {
          console.error('Error fetching response:', error);
          responseMessage = { text: 'Sorry, something went wrong. Please try again later.', user: 'bot' };
        }
      }

      // Add bot's response to the messages
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
      setInput('');
    }
  };

  const fetchResponse = async (question) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-4",
        messages: [{ role: "user", content: question }],
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const botMessage = response.data.choices[0].message.content;
      return { text: botMessage, user: 'bot' };
    } catch (error) {
      console.error('Error fetching response:', error.response ? error.response.data : error.message);
      throw new Error('Failed to fetch response');
    }
  };

  const extractJobTitle = (input) => {
    const jobTitles = ['Java Developer', 'Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Internship'];
    const lowercasedInput = input.toLowerCase();
    return jobTitles.find(title => lowercasedInput.includes(title.toLowerCase()));
  };

  const generateJobDescription = (role) => {
    switch (role) {
      case 'Java Developer':
        return `As a Java Developer, you will design, develop, and manage Java-based applications. Responsibilities include writing clean code, debugging issues, and collaborating with teams. Strong Java knowledge and experience with Spring and Hibernate are essential.`;
      case 'Front-End Developer':
        return `As a Front-End Developer, you will be responsible for designing and developing user interfaces for web applications. You will work with HTML, CSS, and JavaScript frameworks like React or Angular. Creativity and attention to detail are key.`;
      case 'Back-End Developer':
        return `As a Back-End Developer, you will focus on server-side logic, database management, and APIs. You should have expertise in server-side languages like Node.js, Python, or Java, and experience with databases such as MySQL or MongoDB.`;
      case 'Full-Stack Developer':
        return `As a Full-Stack Developer, you will handle both front-end and back-end development. You need proficiency in front-end technologies (HTML, CSS, JavaScript) and back-end languages (Node.js, Python, etc.), along with database management.`;
      case 'Internship':
        return `As an Intern, you will gain practical experience in your field by assisting with various tasks under the guidance of experienced professionals. This is an opportunity to develop skills and learn industry practices.`;
      default:
        return `Sorry, I don't have a predefined description for that role. Please try asking about another role.`;
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.user}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Ask a question..." 
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
