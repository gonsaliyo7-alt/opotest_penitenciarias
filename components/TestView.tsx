
import React, { useState, useMemo, useEffect } from 'react';
import type { Test, Question } from '../types';
import { aiService } from '../services/ai';

interface TestViewProps {
  test: Test;
  onComplete: (testId: string, score: number, totalQuestions: number, details: { correct: string[], incorrect: string[] }) => void;
  onExit: () => void;
}

const TestView: React.FC<TestViewProps> = ({ test, onComplete, onExit }) => {
  const isAI = test.id === 'test-ai' || test.id === 'test-ai-ko';
  const isSurvival = test.id === 'test-survival' || test.id === 'test-ko-exams' || test.id === 'test-ai-ko';
  const isInfinite = test.id === 'test-infinite';

  // State for AI Mode
  const [aiQuestions, setAiQuestions] = useState<Question[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(isAI && !aiService.hasKey());
  const [aiError, setAiError] = useState<string | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // In AI mode, we build the questions array dynamically. 
  // In normal mode, we use the static test.questions.
  const activeQuestions = isAI ? aiQuestions : test.questions;

  const [answers, setAnswers] = useState<(number | null)[]>([]);

  // Survival Mode States
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  // Initialize answers array when questions change (or initially)
  useEffect(() => {
    if (!isAI) {
      setAnswers(new Array(test.questions.length).fill(null));
    }
  }, [test.questions.length, isAI]);

  // AI Generation Effect
  useEffect(() => {
    if (isAI && !showKeyInput && aiQuestions.length === 0 && !isGenerating && !aiError) {
      generateNextQuestion();
    }
  }, [isAI, showKeyInput, aiQuestions.length, isGenerating, aiError]);

  const generateNextQuestion = async () => {
    setIsGenerating(true);
    setAiError(null);
    try {
      const newQuestion = await aiService.generateQuestion();
      setAiQuestions(prev => [...prev, newQuestion]);
      setAnswers(prev => [...prev, null]);
    } catch (err) {
      console.error(err);
      setAiError("Error generando pregunta. Verifica tu API Key o intenta de nuevo.");
      // If error is due to missing key (e.g. cleared), show input
      if (!aiService.hasKey()) {
        setShowKeyInput(true);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveKey = () => {
    if (apiKey.trim()) {
      aiService.initialize(apiKey.trim());
      setShowKeyInput(false);
      setAiError(null);
    }
  };

  const currentQuestion = useMemo(() => activeQuestions[currentQuestionIndex], [activeQuestions, currentQuestionIndex]);

  const currentScenario = currentQuestion?.scenario || test.scenario;

  const handleAnswerSelect = (optionIndex: number) => {
    // Bloquear la respuesta si ya se ha contestado
    if (answers[currentQuestionIndex] !== null || gameOver) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);

    // Logic for Survival Mode
    if (isSurvival) {
      const isCorrect = optionIndex === currentQuestion.correctAnswer;
      if (!isCorrect) {
        const newLives = lives - 1;
        setLives(newLives);
        if (newLives === 0) {
          setGameOver(true);
          setTimeout(() => {
            handleFinishSurvival(newAnswers);
          }, 1500);
        }
      }
    }
  };

  const handleNext = () => {
    if (isAI) {
      // In AI mode, if we are at the last generated question, generate a new one
      if (currentQuestionIndex === activeQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        generateNextQuestion();
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      if (currentQuestionIndex < activeQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getResultsDetails = (currentAnswers = answers) => {
    const correct: string[] = [];
    const incorrect: string[] = [];
    let score = 0;

    currentAnswers.forEach((answer, index) => {
      if (answer !== null && activeQuestions[index]) {
        const question = activeQuestions[index];
        if (answer === question.correctAnswer) {
          score++;
          correct.push(question.questionText.trim());
        } else {
          incorrect.push(question.questionText.trim());
        }
      }
    });
    return { score, correct, incorrect };
  };

  const handleSubmit = () => {
    const { score, correct, incorrect } = getResultsDetails();
    onComplete(test.id, score, activeQuestions.length, { correct, incorrect });
  };

  const handleFinishInfinite = () => {
    const { score, correct, incorrect } = getResultsDetails();
    const answeredCount = answers.filter(a => a !== null).length;
    const totalForStats = answeredCount > 0 ? answeredCount : 1;

    onComplete(test.id, score, totalForStats, { correct, incorrect });
  };

  const handleFinishSurvival = (finalAnswers: (number | null)[]) => {
    const { score, correct, incorrect } = getResultsDetails(finalAnswers);
    const attempted = correct.length + incorrect.length;
    onComplete(test.id, score, attempted, { correct, incorrect });
  };

  // Calculate progress
  const progressPercentage = isAI
    ? 100 // In AI mode, progress bar is always full or maybe indeterminate
    : ((currentQuestionIndex + 1) / activeQuestions.length) * 100;

  const isAnswered = answers[currentQuestionIndex] !== null && answers[currentQuestionIndex] !== undefined;

  // Render API Key Input
  if (isAI && showKeyInput) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-purple-200">
        <div className="text-center mb-6">
          <span className="text-4xl">🤖</span>
          <h2 className="text-2xl font-bold text-purple-800 mt-2">Configurar IA</h2>
          <p className="text-slate-600 text-sm mt-2">
            Para generar preguntas infinitas, necesitas una API Key de Google Gemini (es gratuita).
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">Google Gemini API Key</label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Pega tu API Key aquí..."
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
          />
          <p className="text-xs text-slate-500 mt-2">
            Puedes conseguirla en <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-purple-600 hover:underline">Google AI Studio</a>.
            La clave se guardará en tu navegador.
          </p>
        </div>

        <div className="flex gap-3">
          <button onClick={onExit} className="flex-1 py-2 px-4 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 font-semibold">
            Cancelar
          </button>
          <button
            onClick={handleSaveKey}
            disabled={!apiKey.trim()}
            className="flex-1 py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Comenzar
          </button>
        </div>
      </div>
    );
  }

  // Render Loading State
  if (isAI && isGenerating && !currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center h-64 animate-fade-in">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
        <h3 className="text-xl font-semibold text-purple-800">Generando pregunta con IA...</h3>
        <p className="text-slate-500">Analizando el temario penitenciario</p>
      </div>
    );
  }

  const handleChangeKey = () => {
    aiService.clearKey();
    setApiKey('');
    setShowKeyInput(true);
    setAiError(null);
  };

  if (isAI && aiError && !currentQuestion) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-xl border border-red-200">
        <h3 className="text-xl font-bold text-red-700 mb-2">Error</h3>
        <p className="text-red-600 mb-4">{aiError}</p>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-4 justify-center">
            <button onClick={onExit} className="px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg">Salir</button>
            <button onClick={() => generateNextQuestion()} className="px-4 py-2 bg-red-600 text-white rounded-lg">Reintentar</button>
          </div>
          <button onClick={handleChangeKey} className="text-sm text-red-600 underline hover:text-red-800">
            Cambiar API Key
          </button>
        </div>
      </div>
    );
  }

  // Should not happen if logic is correct, but safe guard
  if (!currentQuestion) return null;

  return (
    <div className={`flex flex-col ${isSurvival && lives === 1 ? 'animate-pulse bg-red-50 p-2 rounded-xl' : ''}`}>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-700 flex items-center gap-2">
            {test.title}
            {isInfinite && <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full border border-purple-200">Modo Infinito</span>}
            {isAI && <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full border border-purple-200 flex items-center gap-1">✨ IA Generativa</span>}
          </h2>

          {isSurvival ? (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-slate-600 font-semibold">Vidas:</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className={`text-2xl transition-all duration-500 ${i < lives ? 'text-red-500 scale-100' : 'text-gray-300 scale-75 grayscale'}`}>
                    ❤️
                  </span>
                ))}
              </div>
              <span className="ml-4 text-sm font-mono bg-slate-800 text-white px-2 py-1 rounded">Racha: {answers.filter((a, i) => a !== null && activeQuestions[i] && a === activeQuestions[i].correctAnswer).length}</span>
            </div>
          ) : (
            <p className="text-slate-500 mt-1">
              {isAI ? `Pregunta Generada #${currentQuestionIndex + 1}` : `Pregunta ${currentQuestionIndex + 1} ${isInfinite ? '' : `de ${activeQuestions.length}`}`}
            </p>
          )}
        </div>
        <button
          onClick={onExit}
          className="self-end sm:self-auto bg-white hover:bg-red-50 text-red-600 hover:text-red-700 border border-red-200 px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Abandonar
        </button>
      </div>

      {!isSurvival && !isAI && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      )}

      {isSurvival && (
        <div className="w-full bg-gray-200 rounded-full h-1 mb-6">
          <div className="bg-red-500 h-1 rounded-full transition-all duration-300" style={{ width: `${(currentQuestionIndex / 100) * 100}%` }}></div>
        </div>
      )}

      {currentScenario && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 text-slate-700 rounded-r shadow-sm">
          <h3 className="font-bold text-lg mb-2 text-blue-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            Supuesto de Hecho
          </h3>
          <p className="whitespace-pre-line leading-relaxed text-justify">{currentScenario}</p>
        </div>
      )}

      <div className={`bg-slate-50 p-6 rounded-lg shadow-inner border ${isAI ? 'border-purple-200' : 'border-slate-100'} relative overflow-hidden`}>
        {gameOver && (
          <div className="absolute inset-0 bg-red-100/80 z-10 flex items-center justify-center flex-col animate-fade-in">
            <span className="text-6xl">💀</span>
            <h3 className="text-3xl font-bold text-red-800 mt-4">¡Fin del Juego!</h3>
            <p className="text-red-700">Has perdido tus 3 vidas.</p>
          </div>
        )}
        <h3 className="text-lg font-semibold mb-4 text-slate-800">{currentQuestion.questionText}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = answers[currentQuestionIndex] === index;
            const isCorrect = index === currentQuestion.correctAnswer;

            let containerClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between ";
            let badgeClass = "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-3 font-bold text-sm ";

            if (!isAnswered) {
              // Estado normal: no respondida
              containerClass += "bg-white border-slate-200 hover:bg-slate-100 hover:border-slate-300 cursor-pointer";
              badgeClass += "bg-slate-200 text-slate-600";
            } else {
              // Estado respondida: feedback inmediato
              if (isCorrect) {
                containerClass += "bg-green-50 border-green-500 shadow-sm";
                badgeClass += "bg-green-500 text-white";
              } else if (isSelected) {
                containerClass += "bg-red-50 border-red-500 shadow-sm";
                badgeClass += "bg-red-500 text-white";
              } else {
                containerClass += "bg-white border-slate-100 opacity-50";
                badgeClass += "bg-slate-100 text-slate-400";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered || gameOver || isGenerating}
                className={containerClass}
              >
                <div className="flex items-center">
                  <span className={badgeClass}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className={isAnswered && isCorrect ? "font-medium text-green-800" : (isAnswered && isSelected ? "font-medium text-red-800" : "text-slate-700")}>
                    {option}
                  </span>
                </div>
                {isAnswered && isCorrect && (
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                )}
              </button>
            )
          })}
        </div>

        {isAnswered && currentQuestion.explanation && (
          <div className={`mt-6 p-4 rounded-lg border-l-4 ${answers[currentQuestionIndex] === currentQuestion.correctAnswer ? 'bg-green-50 border-green-500 text-green-800' : 'bg-blue-50 border-blue-500 text-blue-800'} animate-fade-in`}>
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Explicación
            </h4>
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-8 gap-2 flex-wrap sm:flex-nowrap">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0 || gameOver || isGenerating}
          className="order-1 flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold py-2 px-5 rounded-lg border border-slate-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Anterior
        </button>

        {(isInfinite || isAI) && (
          <button
            onClick={handleFinishInfinite}
            className="order-3 sm:order-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-lg shadow-md flex items-center gap-2 flex-grow sm:flex-grow-0 justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Finalizar y ver nota
          </button>
        )}

        {!isAI && currentQuestionIndex === activeQuestions.length - 1 ? (
          <button
            onClick={isInfinite ? handleFinishInfinite : handleSubmit}
            disabled={!isInfinite && answers.some(a => a === null)}
            className="order-2 sm:order-3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Finalizar Test
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={gameOver || isGenerating || (!isAnswered && !isAI)} // En modo normal obligamos a responder, en IA no necesariamente pero es mejor
            className={`order-2 sm:order-3 flex items-center gap-2 font-bold py-2 px-5 rounded-lg shadow-md disabled:opacity-50 ${isAI ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
          >
            {isAI && isGenerating ? 'Generando...' : 'Siguiente'}
            {!isGenerating && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default TestView;
