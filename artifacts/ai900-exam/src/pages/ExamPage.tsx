import { useState, useEffect } from "react";
import questions, { TOTAL_QUESTIONS } from "../data/questions";

interface Stats {
  correct: number;
  wrong: number;
}

export default function ExamPage() {
  const [currentId, setCurrentId] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
  const [answered, setAnswered] = useState(false);
  const [stats, setStats] = useState<Stats>({ correct: 0, wrong: 0 });
  const [inputValue, setInputValue] = useState("1");

  const q = questions[currentId];

  useEffect(() => {
    setInputValue(String(currentId));
  }, [currentId]);

  function goToQuestion(num: number) {
    if (num >= 1 && num <= TOTAL_QUESTIONS) {
      setCurrentId(num);
      setSelectedAnswer(-1);
      setAnswered(false);
    }
  }

  function handleSubmit() {
    if (selectedAnswer === -1 || answered || !q) return;
    setAnswered(true);
    if (selectedAnswer === q.a) {
      setStats(s => ({ ...s, correct: s.correct + 1 }));
    } else {
      setStats(s => ({ ...s, wrong: s.wrong + 1 }));
    }
  }

  function handleReset() {
    setStats({ correct: 0, wrong: 0 });
  }

  const isCorrect = answered && selectedAnswer === q?.a;

  return (
    <div style={{
      background: "linear-gradient(145deg, #f0f5fc 0%, #ffffff 100%)",
      minHeight: "100vh",
      padding: "24px",
      display: "flex",
      justifyContent: "center",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      <div style={{
        maxWidth: "1100px",
        width: "100%",
        background: "white",
        borderRadius: "40px",
        boxShadow: "0 30px 60px rgba(0,30,60,0.25)",
        padding: "32px 36px"
      }}>
        {/* Header */}
        <h1 style={{
          fontSize: "2.4rem",
          fontWeight: 700,
          background: "linear-gradient(135deg, #0a2a44, #1e4f7a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "6px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          margin: 0
        }}>
          📘 AI-900 · Complete Exam Bank
        </h1>
        <div style={{
          background: "#e2eefb",
          color: "#1b4d78",
          padding: "6px 20px",
          borderRadius: "60px",
          fontSize: "1rem",
          fontWeight: 600,
          display: "inline-block",
          marginTop: "8px",
          marginBottom: "20px"
        }}>
          {TOTAL_QUESTIONS} real questions · exact from CertyIQ + Oct 2024
        </div>

        {/* Stats Row */}
        <div style={{
          display: "flex",
          gap: "30px",
          background: "#f3f9ff",
          padding: "14px 32px",
          borderRadius: "60px",
          marginBottom: "25px",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: "2rem", fontWeight: 700, color: "#0f3b60" }}>{stats.correct}</span>
            <span style={{ color: "#4a6f92" }}>correct</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: "2rem", fontWeight: 700, color: "#0f3b60" }}>{stats.wrong}</span>
            <span style={{ color: "#4a6f92" }}>wrong</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: "2rem", fontWeight: 700, color: "#0f3b60" }}>{TOTAL_QUESTIONS}</span>
            <span style={{ color: "#4a6f92" }}>total</span>
          </div>
          <button
            onClick={handleReset}
            style={{
              background: "white",
              border: "2px solid #b8cfec",
              padding: "8px 20px",
              borderRadius: "60px",
              fontWeight: 500,
              color: "#2b5b88",
              cursor: "pointer",
              fontSize: "0.9rem"
            }}
          >
            ↻ reset stats
          </button>
        </div>

        {/* Navigation Panel */}
        <div style={{
          background: "#f8fafd",
          borderRadius: "80px",
          padding: "18px 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "18px",
          border: "1px solid #cde0f0",
          marginBottom: "30px"
        }}>
          {/* Number Input */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "white",
            padding: "4px 4px 4px 18px",
            borderRadius: "60px",
            border: "2px solid #bcd2ec"
          }}>
            <input
              type="number"
              min={1}
              max={TOTAL_QUESTIONS}
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") goToQuestion(parseInt(inputValue)); }}
              style={{
                width: "80px",
                padding: "12px 0 12px 8px",
                border: "none",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#0c2945",
                outline: "none",
                textAlign: "center"
              }}
            />
            <button
              onClick={() => goToQuestion(parseInt(inputValue))}
              style={{
                background: "#0b3353",
                color: "white",
                border: "none",
                padding: "12px 28px",
                borderRadius: "60px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer"
              }}
            >
              GO
            </button>
          </div>

          {/* Dropdown */}
          <select
            value={currentId}
            onChange={e => goToQuestion(parseInt(e.target.value))}
            style={{
              padding: "12px 24px",
              borderRadius: "60px",
              border: "2px solid #bed3ec",
              background: "white",
              fontWeight: 500,
              fontSize: "1rem",
              color: "#1c4a76",
              cursor: "pointer"
            }}
          >
            {Array.from({ length: TOTAL_QUESTIONS }, (_, i) => i + 1).map(n => (
              <option key={n} value={n}>Q{n}</option>
            ))}
          </select>

          {/* Nav Buttons */}
          <div style={{ display: "flex", gap: "10px", marginLeft: "auto", flexWrap: "wrap" }}>
            <button
              onClick={() => goToQuestion(currentId - 1)}
              disabled={currentId <= 1}
              style={{
                background: "white",
                border: "2px solid #bed3ec",
                padding: "12px 24px",
                borderRadius: "60px",
                fontWeight: 600,
                color: "#1c4a76",
                cursor: currentId <= 1 ? "not-allowed" : "pointer",
                opacity: currentId <= 1 ? 0.5 : 1
              }}
            >
              ◀ PREV
            </button>
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === -1 || answered}
              style={{
                background: "#0b3353",
                border: "2px solid #0b3353",
                padding: "12px 24px",
                borderRadius: "60px",
                fontWeight: 600,
                color: "white",
                cursor: (selectedAnswer === -1 || answered) ? "not-allowed" : "pointer",
                opacity: (selectedAnswer === -1 || answered) ? 0.7 : 1
              }}
            >
              ✓ SUBMIT
            </button>
            <button
              onClick={() => goToQuestion(currentId + 1)}
              disabled={currentId >= TOTAL_QUESTIONS}
              style={{
                background: "white",
                border: "2px solid #bed3ec",
                padding: "12px 24px",
                borderRadius: "60px",
                fontWeight: 600,
                color: "#1c4a76",
                cursor: currentId >= TOTAL_QUESTIONS ? "not-allowed" : "pointer",
                opacity: currentId >= TOTAL_QUESTIONS ? 0.5 : 1
              }}
            >
              NEXT ▶
            </button>
          </div>
        </div>

        {/* Question Card */}
        {q && (
          <div style={{
            background: "#ffffff",
            border: "2px solid #d6e4f2",
            borderRadius: "32px",
            padding: "32px 38px",
            marginBottom: "20px"
          }}>
            <div style={{
              background: "#0b3353",
              color: "white",
              display: "inline-block",
              padding: "6px 30px",
              borderRadius: "60px",
              fontWeight: 700,
              marginBottom: "22px",
              fontSize: "1rem"
            }}>
              QUESTION {q.id} of {TOTAL_QUESTIONS}
            </div>

            <div style={{
              fontSize: "1.3rem",
              lineHeight: 1.6,
              fontWeight: 550,
              color: "#0b253d",
              marginBottom: "30px",
              whiteSpace: "pre-line"
            }}>
              {q.q}
            </div>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}>
              {q.o.map((opt, idx) => {
                let borderColor = "#d6e4f2";
                let bg = "#f9fcff";
                let boxShadow = "none";

                if (answered) {
                  if (idx === q.a) {
                    borderColor = "#1d825a";
                    bg = "#e3f5e8";
                    boxShadow = "0 4px 12px rgba(29,130,90,0.15)";
                  } else if (idx === selectedAnswer && selectedAnswer !== q.a) {
                    borderColor = "#bc3f3f";
                    bg = "#ffeaea";
                    boxShadow = "0 4px 12px rgba(188,63,63,0.15)";
                  }
                } else if (selectedAnswer === idx) {
                  borderColor = "#1c5f9c";
                  bg = "#d5e9ff";
                  boxShadow = "0 4px 12px rgba(0,85,160,0.15)";
                }

                return (
                  <label
                    key={idx}
                    onClick={() => { if (!answered) setSelectedAnswer(idx); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "16px 28px",
                      border: `2px solid ${borderColor}`,
                      borderRadius: "60px",
                      fontSize: "1.1rem",
                      cursor: answered ? "default" : "pointer",
                      background: bg,
                      boxShadow,
                      transition: "0.1s ease"
                    }}
                  >
                    <input
                      type="radio"
                      name="qOption"
                      value={idx}
                      checked={selectedAnswer === idx}
                      onChange={() => { if (!answered) setSelectedAnswer(idx); }}
                      disabled={answered}
                      style={{ marginRight: "20px", width: "20px", height: "20px", accentColor: "#1c5f9c" }}
                    />
                    {opt}
                  </label>
                );
              })}
            </div>

            {/* Feedback */}
            {answered && (
              <div style={{
                background: isCorrect ? "#e3f5e8" : "#ffeaea",
                borderRadius: "28px",
                padding: "24px 32px",
                marginTop: "28px",
                borderLeft: `8px solid ${isCorrect ? "#1d825a" : "#bc3f3f"}`
              }}>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>
                  {isCorrect ? "✓ Correct!" : "❌ Incorrect"}
                </div>
                <div style={{ lineHeight: 1.6, color: "#1a3a1a" }}>
                  <strong>Explanation:</strong> {q.e}
                </div>
                {!isCorrect && (
                  <div style={{ marginTop: "12px", fontWeight: 600, color: "#1d825a" }}>
                    ✔ Correct answer: {q.o[q.a]}
                  </div>
                )}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "15px" }}>
                  {q.k.map(tag => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(255,255,255,0.7)",
                        border: "1px dashed #9bb9d9",
                        padding: "5px 18px",
                        borderRadius: "40px",
                        fontSize: "0.9rem",
                        color: "#1d4f7c",
                        fontWeight: 500
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div style={{
          textAlign: "center",
          color: "#4a6f92",
          marginTop: "30px",
          fontSize: "0.9rem"
        }}>
          ⚡ All {TOTAL_QUESTIONS} questions from AI-900 PDFs · full explanations & keywords
        </div>
      </div>
    </div>
  );
}
