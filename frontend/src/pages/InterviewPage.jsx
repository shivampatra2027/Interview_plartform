import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  MessageSquare,
  Clock,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowLeft
} from "lucide-react";
import { interviewAPI } from "../api";
import { useAPI } from "../hooks/useAPI";

export default function InterviewPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { callAPI, loading } = useAPI();

  // Interview flow state
  const [flowStep, setFlowStep] = useState("setup"); // setup, interview, completed
  const [interview, setInterview] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState("");

  // Setup form state
  const [setupData, setSetupData] = useState({
    title: "Mock Interview",
    position: "Software Engineer",
    difficultyLevel: "beginner",
    questionCount: 5
  });

  // Recording states
  const [isRecording, setIsRecording] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Timer
  const [timeElapsed, setTimeElapsed] = useState(0);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Load existing interview
  const loadExistingInterview = React.useCallback(async (interviewId) => {
    try {
      const response = await callAPI(interviewAPI.getInterviewById, interviewId);
      if (response?.data?.interview) {
        setInterview(response.data.interview);
        setFlowStep(response.data.interview.status === "ongoing" ? "interview" : "setup");
        
        // Load existing answers
        const answerMap = {};
        response.data.interview.answers?.forEach(ans => {
          answerMap[ans.questionIndex] = ans.text;
        });
        setAnswers(answerMap);
        setCurrentQuestionIndex(response.data.interview.currentQuestionIndex || 0);
      }
    } catch (error) {
      console.error("Failed to load interview:", error);
    }
  }, [callAPI]);

  // Check for existing interview ID from URL
  useEffect(() => {
    const interviewId = searchParams.get("id");
    if (interviewId) {
      // Load interview data from backend when URL parameter exists
      loadExistingInterview(interviewId).catch(err => console.error(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (flowStep === "interview") {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [flowStep]);

  // Create new interview
  const handleCreateInterview = async () => {
    try {
      const response = await callAPI(interviewAPI.createInterview, setupData);
      if (response?.data?.interview) {
        setInterview(response.data.interview);
        
        // Auto-start the interview
        const startResponse = await callAPI(interviewAPI.startInterview, response.data.interview._id);
        if (startResponse?.data?.interview) {
          setInterview(startResponse.data.interview);
          setFlowStep("interview");
          setTimeElapsed(0);
        }
      }
    } catch (error) {
      console.error("Failed to create interview:", error);
      alert("Failed to create interview. Please try again.");
    }
  };

  // Submit answer
  const handleSubmitAnswer = async () => {
    if (!currentAnswer.trim()) {
      alert("Please provide an answer before submitting.");
      return;
    }

    try {
      const response = await callAPI(
        interviewAPI.submitAnswer,
        interview._id,
        {
          questionIndex: currentQuestionIndex,
          answerText: currentAnswer
        }
      );

      if (response?.data) {
        setAnswers({
          ...answers,
          [currentQuestionIndex]: currentAnswer
        });

        // Check if this was the last question
        if (response.data.isLastQuestion) {
          // Complete the interview
          handleCompleteInterview();
        } else {
          // Move to next question
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setCurrentAnswer(answers[currentQuestionIndex + 1] || "");
        }
      }
    } catch (error) {
      console.error("Failed to submit answer:", error);
      alert("Failed to submit answer. Please try again.");
    }
  };

  // Navigate between questions
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentAnswer(answers[currentQuestionIndex - 1] || "");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < interview.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(answers[currentQuestionIndex + 1] || "");
    }
  };

  // Complete interview
  const handleCompleteInterview = async () => {
    if (!window.confirm("Are you sure you want to complete this interview?")) {
      return;
    }

    try {
      const response = await callAPI(interviewAPI.completeInterview, interview._id);
      if (response?.data) {
        setFlowStep("completed");
      }
    } catch (error) {
      console.error("Failed to complete interview:", error);
      alert("Failed to complete interview. Please try again.");
    }
  };

  // Recording mock functions
  const handleStartRecording = () => {
    setIsRecording(true);
    // TODO: Implement actual audio recording
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // TODO: Implement actual audio recording stop
  };

  // SETUP SCREEN
  if (flowStep === "setup") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">
              Setup Your Interview
            </h1>
            <p className="text-slate-400">
              Configure your mock interview session preferences
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="space-y-6">
              {/* Interview Title */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Interview Title
                </label>
                <input
                  type="text"
                  value={setupData.title}
                  onChange={(e) => setSetupData({ ...setupData, title: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g., Mock Interview - Software Engineer"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Position
                </label>
                <input
                  type="text"
                  value={setupData.position}
                  onChange={(e) => setSetupData({ ...setupData, position: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g., Software Engineer, Data Scientist"
                />
              </div>

              {/* Difficulty Level */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Difficulty Level
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {["beginner", "easy", "hard", "advanced"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSetupData({ ...setupData, difficultyLevel: level })}
                      className={`py-3 px-4 rounded-lg font-medium transition-all ${
                        setupData.difficultyLevel === level
                          ? "bg-blue-600 text-white"
                          : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question Count */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Number of Questions: {setupData.questionCount}
                </label>
                <input
                  type="range"
                  min="3"
                  max="10"
                  value={setupData.questionCount}
                  onChange={(e) => setSetupData({ ...setupData, questionCount: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>3</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Dashboard
              </button>
              <button
                onClick={handleCreateInterview}
                disabled={loading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Start Interview
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // COMPLETED SCREEN
  if (flowStep === "completed") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">
              Interview Completed!
            </h1>
            <p className="text-slate-400 text-lg">
              Great job! Your interview has been completed and your report is being generated.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-6">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-slate-400 text-sm mb-1">Questions</p>
                <p className="text-3xl font-bold text-white">{interview?.questions?.length || 0}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Time Taken</p>
                <p className="text-3xl font-bold text-white">{formatTime(timeElapsed)}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Status</p>
                <p className="text-3xl font-bold text-green-400">✓</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => navigate("/reports")}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              View Report
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // INTERVIEW SCREEN
  if (!interview) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
      </div>
    );
  }

  const currentQuestion = interview.questions?.[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === interview.questions?.length - 1;
  const progress = ((currentQuestionIndex + 1) / interview.questions?.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* HEADER */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-white font-medium">Interview in Progress</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timeElapsed)}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-slate-400 text-sm">
                Question {currentQuestionIndex + 1} of {interview.questions?.length}
              </div>
              <button
                onClick={handleCompleteInterview}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
              >
                <Phone className="w-4 h-4" />
                End Interview
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 flex">
        {/* VIDEO SECTION */}
        <div className="flex-1 p-6">
          <div className="h-full flex flex-col gap-4">
            {/* AI Interviewer */}
            <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-slate-400">AI Interviewer</p>
                </div>
              </div>
            </div>

            {/* User camera */}
            <div className="h-48 bg-slate-900 border border-slate-800 rounded-xl relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {videoEnabled ? (
                  <div className="text-center">
                    <Video className="w-8 h-8 text-slate-500 mx-auto" />
                    <p className="text-slate-500 text-sm mt-2">Your Camera</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <VideoOff className="w-8 h-8 text-slate-500 mx-auto" />
                    <p className="text-slate-500 text-sm mt-2">Camera Off</p>
                  </div>
                )}
              </div>

              {/* controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                <button
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className={`w-10 h-10 rounded-full flex justify-center items-center transition-colors ${
                    audioEnabled ? "bg-slate-800 hover:bg-slate-700" : "bg-red-600 hover:bg-red-700"
                  } text-white`}
                >
                  {audioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                </button>

                <button
                  onClick={() => setVideoEnabled(!videoEnabled)}
                  className={`w-10 h-10 rounded-full flex justify-center items-center transition-colors ${
                    videoEnabled ? "bg-slate-800 hover:bg-slate-700" : "bg-red-600 hover:bg-red-700"
                  } text-white`}
                >
                  {videoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="w-96 bg-slate-900 border-l border-slate-800 p-6 flex flex-col">
          {/* Current Question */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <h3 className="text-white font-semibold">Question {currentQuestionIndex + 1}</h3>
              </div>
              <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                {currentQuestion?.difficulty || "medium"}
              </span>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-slate-300 leading-relaxed">{currentQuestion?.text}</p>
            </div>
          </div>

          {/* Answer Input */}
          <div className="flex-1 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-green-400" />
              <h3 className="text-white font-semibold">Your Answer</h3>
            </div>
            <textarea
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full h-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-300 resize-none focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Navigation and Submit */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
              <button
                onClick={handleNextQuestion}
                disabled={isLastQuestion}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={handleSubmitAnswer}
              disabled={loading || !currentAnswer.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : isLastQuestion ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Submit & Complete
                </>
              ) : (
                <>
                  <ArrowRight className="w-5 h-5" />
                  Submit Answer
                </>
              )}
            </button>

            {/* Recording Button (Optional) */}
            {!isRecording ? (
              <button
                onClick={handleStartRecording}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors"
              >
                <Mic className="w-4 h-4" />
                Record Voice Answer
              </button>
            ) : (
              <button
                onClick={handleStopRecording}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors animate-pulse"
              >
                <MicOff className="w-4 h-4" />
                Stop Recording
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
