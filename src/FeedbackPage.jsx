import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackPage.css';

function FeedbackPage() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      selectedEmoji: selectedEmoji,
      selectedCategory: selectedCategory,
      feedback: feedback,
    };

    try {
      const response = await axios.post('http://localhost:5000/feedback', feedbackData);
      console.log('Feedback submitted successfully:', response.data);

      setSelectedEmoji(null);
      setSelectedCategory('');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="feedback-page-container">
      <div className="feedback-form-container">
        <h2>Your Feedback</h2>
        <p>We would like your feedback to improve our website.</p>
        <p>What is your opinion of this page?</p>
        <div className="emoji-rating">
          {['😞', '😕', '😐', '😊', '😁'].map((emoji, index) => (
            <span
              key={index}
              className={`emoji ${selectedEmoji === emoji ? 'selected' : ''}`}
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <p>Please select your feedback category below.</p>
          <div className="category-selection">
            {['Suggestion', 'Something is not quite right', 'Compliment'].map(
              (category, index) => (
                <button
                  key={index}
                  type="button"
                  className={`category-button ${
                    selectedCategory === category ? 'selected' : ''
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>
          <p>Please leave your feedback below:</p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback..."
            required
          />
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackPage;
