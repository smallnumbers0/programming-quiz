export const quizStyles = `
  .quiz-question {
    max-width: 600px;
    margin: 0 auto;
    padding: 1.2rem;
    background: linear-gradient(145deg, #1a1a1a 0%, #2a1a2a 100%);
    border: 2px solid #333;
    border-radius: 16px;
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .question-header {
    text-align: center;
    margin-bottom: 1.2rem;
    padding-bottom: 0.6rem;
    border-bottom: 2px solid #9333ea;
    position: relative;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .question-header h2 {
    color: #e0e0e0;
    font-size: 1.2rem;
    margin: 0;
    font-family: 'Fira Code', monospace;
  }

  .question-header h2::before {
    content: '[ ';
    color: #9333ea;
  }

  .question-header h2::after {
    content: ' ]';
    color: #9333ea;
  }

  .exit-button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    color: #9333ea;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 0;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Fira Code', monospace;
  }

  .exit-button:hover {
    background: transparent;
    color: #a855f7;
    box-shadow: none;
    transform: translateY(-50%) scale(1.2);
  }

  .question-content h3 {
    font-size: 1.2rem;
    color: #e0e0e0;
    margin-bottom: 1.2rem;
    line-height: 1.3;
    font-family: 'Fira Code', monospace;
    font-weight: 500;
  }

  .answer-options {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 1.2rem;
  }

  .option {
    display: flex;
    align-items: center;
    padding: 0.6rem;
    border: 2px solid #444;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: linear-gradient(145deg, #0f0f0f 0%, #1f1f1f 100%);
    position: relative;
    overflow: hidden;
  }

  .option::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.1), transparent);
    transition: left 0.3s;
  }

  .option:hover::before {
    left: 100%;
  }

  .option:hover {
    border-color: #9333ea;
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
  }

  .option input[type="radio"] {
    margin-right: 1rem;
    transform: scale(1.2);
    accent-color: #9333ea;
  }

  .option-letter {
    font-weight: bold;
    color: #9333ea;
    margin-right: 0.5rem;
    min-width: 30px;
    font-family: 'Fira Code', monospace;
  }

  .option-text {
    flex: 1;
    color: #e0e0e0;
    font-family: 'Fira Code', monospace;
  }

  .option input[type="radio"]:checked + .option-letter {
    color: #a855f7;
    text-shadow: 0 0 10px rgba(168, 85, 247, 0.8);
  }

  .option:has(input[type="radio"]:checked) {
    border-color: #a855f7;
    background: linear-gradient(145deg, #1a0f2e 0%, #2a1a3a 100%);
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
  }

  #submit-answer {
    background: linear-gradient(145deg, #9333ea 0%, #7c3aed 100%);
    color: white;
    border: 2px solid #9333ea;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    font-family: 'Fira Code', monospace;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  #submit-answer:hover:not(:disabled) {
    background: linear-gradient(145deg, #a855f7 0%, #8b5cf6 100%);
    box-shadow: 0 0 25px rgba(147, 51, 234, 0.5);
    transform: translateY(-2px);
  }

  #submit-answer:disabled {
    background: #444;
    border-color: #444;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .quiz-results {
    max-width: 600px;
    margin: 0 auto;
    padding: 3rem 2rem;
    background: linear-gradient(145deg, #1a1a1a 0%, #2a1a2a 100%);
    border: 2px solid #333;
    border-radius: 16px;
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    text-align: center;
  }

  .results-header h2 {
    font-size: 2.5rem;
    color: #e0e0e0;
    margin: 0 0 0.5rem 0;
    font-family: 'Fira Code', monospace;
    text-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
  }

  .results-header h2::before {
    content: '>>> ';
    color: #9333ea;
  }

  .class-name {
    font-size: 1.1rem;
    color: #a0a0a0;
    font-weight: 500;
    margin-bottom: 2rem;
    font-family: 'Fira Code', monospace;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .score-display {
    margin: 3rem 0;
  }

  .score-circle {
    width: 200px;
    height: 200px;
    border: 8px solid #9333ea;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    background: radial-gradient(circle, #1a0f2e 0%, #0a0a0a 70%);
    box-shadow: 
      0 0 40px rgba(147, 51, 234, 0.3),
      inset 0 0 20px rgba(0, 0, 0, 0.5);
  }

  .score-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .score-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #e0e0e0;
    line-height: 1;
    font-family: 'Fira Code', monospace;
    text-shadow: 0 0 15px rgba(147, 51, 234, 0.5);
  }

  .wrong-count {
    font-size: 1.2rem;
    color: #ef4444;
    margin-top: 0.5rem;
    font-family: 'Fira Code', monospace;
    font-weight: 500;
  }

  .results-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2rem;
    border: 2px solid;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 180px;
    font-family: 'Fira Code', monospace;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .btn-primary {
    background: linear-gradient(145deg, #9333ea 0%, #7c3aed 100%);
    color: white;
    border-color: #9333ea;
  }

  .btn-primary:hover {
    background: linear-gradient(145deg, #a855f7 0%, #8b5cf6 100%);
    box-shadow: 0 0 25px rgba(147, 51, 234, 0.5);
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: linear-gradient(145deg, #333 0%, #444 100%);
    color: #e0e0e0;
    border-color: #555;
  }

  .btn-secondary:hover {
    background: linear-gradient(145deg, #444 0%, #555 100%);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  .reasoning-container {
    max-width: 600px;
    margin: 1.2rem auto 0;
    padding: 1.2rem;
    background: linear-gradient(145deg, #1a1a1a 0%, #2a1a2a 100%);
    border: 2px solid #9333ea;
    border-radius: 12px;
    box-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
  }

  .reasoning-header h3 {
    color: #e0e0e0;
    margin: 0 0 0.6rem 0;
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    text-align: center;
  }

  .correct-answer {
    color: #a0a0a0;
    font-family: 'Fira Code', monospace;
    text-align: center;
    margin: 0 0 1rem 0;
    padding: 0.6rem;
    background: rgba(147, 51, 234, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(147, 51, 234, 0.3);
  }

  .reasoning-content {
    margin: 1rem 0;
  }

  .explanation-text {
    color: #e0e0e0;
    font-family: 'Fira Code', monospace;
    line-height: 1.4;
    background: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #9333ea;
  }
`;
