import { useState, useEffect, useCallback } from "react";
import questions, { TOTAL_QUESTIONS } from "../data/questions";

type QResult = "correct" | "incorrect" | null;
interface QStatus { result: QResult; bookmarked: boolean; selectedAnswer: number; }
type QStates = Record<number, QStatus>;
type FilterMode = "all" | "wrong" | "bookmarked" | "unanswered";
type AppMode = "study" | "exam";

const STORAGE_KEY = "ai900_v2";
const EXAM_Q_COUNT = 44;
const EXAM_DURATION = 45 * 60;

function loadStates(): QStates {
  try { const s = localStorage.getItem(STORAGE_KEY); return s ? JSON.parse(s) : {}; } catch { return {}; }
}
function saveStates(s: QStates) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
}
function getQS(states: QStates, id: number): QStatus {
  return states[id] ?? { result: null, bookmarked: false, selectedAnswer: -1 };
}
function getTopic(id: number): string {
  const q = questions[id];
  if (!q) return "General";
  const text = (q.k.join(" ") + " " + q.q).toLowerCase();
  if (text.match(/generative|llm|openai|dall.e|copilot|gpt|large language/)) return "Generative AI";
  if (text.match(/responsible ai|accountab|transparency|fairness|inclus|privacy|reliab/)) return "Responsible AI";
  if (text.match(/bot service|conversational ai|qna|chatbot|power virtual|azure bot/)) return "Conversational AI";
  if (text.match(/computer vision|image class|object detect|ocr|semantic seg|face api|custom vision|bounding|facial/)) return "Computer Vision";
  if (text.match(/nlp|natural language|sentiment|entity recogn|key phrase|translat|speech|language detect|luis|utterance|intent/)) return "NLP & Speech";
  if (text.match(/form recognizer|document intel|knowledge mining|cognitive search|index/)) return "Document AI";
  if (text.match(/regression|classification|clustering|automl|featur|label|confusion|overfit|train|evaluat|accuracy|metric|split data/)) return "Machine Learning";
  return "Azure AI";
}
const TOPIC_COLORS: Record<string, string> = {
  "Responsible AI": "#7c3aed",
  "Machine Learning": "#0369a1",
  "Computer Vision": "#0f766e",
  "NLP & Speech": "#b45309",
  "Conversational AI": "#be185d",
  "Document AI": "#065f46",
  "Generative AI": "#9333ea",
  "Azure AI": "#1d4ed8",
};
function fmtTime(secs: number) {
  const m = Math.floor(secs / 60), s = secs % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
function getFilteredIds(states: QStates, filter: FilterMode): number[] {
  const all = Array.from({ length: TOTAL_QUESTIONS }, (_, i) => i + 1);
  if (filter === "wrong") return all.filter(id => getQS(states, id).result === "incorrect");
  if (filter === "bookmarked") return all.filter(id => getQS(states, id).bookmarked);
  if (filter === "unanswered") return all.filter(id => getQS(states, id).result === null);
  return all;
}

export default function ExamPage() {
  const [qStates, setQStates] = useState<QStates>(loadStates);
  const [appMode, setAppMode] = useState<AppMode>("study");
  const [filter, setFilter] = useState<FilterMode>("all");
  const [filteredIds, setFilteredIds] = useState<number[]>(() => Array.from({ length: TOTAL_QUESTIONS }, (_, i) => i + 1));
  const [currentId, setCurrentId] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [inputValue, setInputValue] = useState("1");
  const [showGrid, setShowGrid] = useState(false);

  const [examIds, setExamIds] = useState<number[]>([]);
  const [examIdx, setExamIdx] = useState(0);
  const [examAnswers, setExamAnswers] = useState<Record<number, number>>({});
  const [examTimeLeft, setExamTimeLeft] = useState(EXAM_DURATION);
  const [examSubmitted, setExamSubmitted] = useState(false);

  const q = questions[currentId];
  const qStatus = getQS(qStates, currentId);
  const answered = qStatus.result !== null;
  const isCorrect = qStatus.result === "correct";

  const totalCorrect = Object.values(qStates).filter(s => s.result === "correct").length;
  const totalWrong = Object.values(qStates).filter(s => s.result === "incorrect").length;
  const totalAnswered = totalCorrect + totalWrong;
  const totalBookmarked = Object.values(qStates).filter(s => s.bookmarked).length;
  const pctNum = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : null;

  useEffect(() => {
    const ids = getFilteredIds(qStates, filter);
    setFilteredIds(ids);
    if (ids.length > 0 && !ids.includes(currentId)) {
      updateCurrentId(ids[0]);
    }
  }, [filter, qStates]);

  useEffect(() => { saveStates(qStates); }, [qStates]);

  useEffect(() => {
    if (appMode !== "exam" || examSubmitted) return;
    const t = setInterval(() => {
      setExamTimeLeft(prev => { if (prev <= 1) { setExamSubmitted(true); return 0; } return prev - 1; });
    }, 1000);
    return () => clearInterval(t);
  }, [appMode, examSubmitted]);

  function updateCurrentId(id: number) {
    setCurrentId(id);
    setInputValue(String(id));
    const s = getQS(qStates, id);
    setSelectedAnswer(s.result !== null ? s.selectedAnswer : -1);
  }

  function goToQuestion(num: number) {
    if (filteredIds.includes(num)) updateCurrentId(num);
  }

  function goNext() {
    const idx = filteredIds.indexOf(currentId);
    if (idx < filteredIds.length - 1) updateCurrentId(filteredIds[idx + 1]);
  }

  function goPrev() {
    const idx = filteredIds.indexOf(currentId);
    if (idx > 0) updateCurrentId(filteredIds[idx - 1]);
  }

  function handleSubmit() {
    if (selectedAnswer === -1 || answered || !q) return;
    const correct = selectedAnswer === q.a;
    setQStates(prev => ({
      ...prev,
      [currentId]: { result: correct ? "correct" : "incorrect", bookmarked: getQS(prev, currentId).bookmarked, selectedAnswer },
    }));
  }

  function toggleBookmark() {
    setQStates(prev => ({
      ...prev,
      [currentId]: { ...getQS(prev, currentId), bookmarked: !getQS(prev, currentId).bookmarked },
    }));
  }

  function handleReset() {
    if (confirm("Reset ALL progress and bookmarks? This cannot be undone.")) {
      setQStates({});
      setSelectedAnswer(-1);
      setFilter("all");
    }
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
    if (appMode !== "study") return;
    const qObj = questions[currentId];
    if (!qObj) return;
    if (!answered && e.key >= "1" && parseInt(e.key) <= qObj.o.length) {
      setSelectedAnswer(parseInt(e.key) - 1);
    }
    if (e.key === "Enter" && !answered && selectedAnswer !== -1) handleSubmit();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "b" || e.key === "B") toggleBookmark();
    if (e.key === "g" || e.key === "G") setShowGrid(prev => !prev);
  }, [answered, selectedAnswer, currentId, filteredIds, qStates, appMode]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  function startExam() {
    const all = Array.from({ length: TOTAL_QUESTIONS }, (_, i) => i + 1);
    const shuffled = [...all].sort(() => Math.random() - 0.5).slice(0, EXAM_Q_COUNT);
    setExamIds(shuffled);
    setExamIdx(0);
    setExamAnswers({});
    setExamTimeLeft(EXAM_DURATION);
    setExamSubmitted(false);
    setAppMode("exam");
  }

  function exitExam() {
    setAppMode("study");
    setExamIds([]);
    setExamAnswers({});
    setExamIdx(0);
    setExamSubmitted(false);
  }

  const currentExamId = examIds[examIdx];
  const examScore = examIds.filter(id => examAnswers[id] === questions[id]?.a).length;

  if (appMode === "exam") {
    if (examSubmitted) {
      const pct = Math.round((examScore / examIds.length) * 100);
      const passed = pct >= 70;
      return (
        <div style={pageWrap}>
          <div style={{ ...card, maxWidth: 900 }}>
            <h2 style={{ margin: "0 0 4px", fontSize: "2rem", fontWeight: 800, color: "#0b3353" }}>
              {passed ? "🎉 Passed!" : "📚 Keep Practicing"}
            </h2>
            <div style={{ fontSize: "4rem", fontWeight: 900, color: passed ? "#1d825a" : "#bc3f3f", lineHeight: 1.1, margin: "12px 0" }}>{pct}%</div>
            <div style={{ fontSize: "1.2rem", color: "#4a6f92", marginBottom: "4px" }}>{examScore} / {examIds.length} correct</div>
            <div style={{ display: "inline-block", padding: "5px 20px", borderRadius: "40px", background: passed ? "#e3f5e8" : "#ffeaea", color: passed ? "#1d825a" : "#bc3f3f", fontWeight: 700, marginBottom: "28px" }}>
              {passed ? "✓ PASS" : "✗ FAIL"} · AI-900 requires 700/1000 (~70%)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxHeight: 380, overflowY: "auto", paddingRight: "4px" }}>
              {examIds.map(id => {
                const eq = questions[id];
                const chosen = examAnswers[id] ?? -1;
                const ok = chosen === eq?.a;
                return (
                  <div key={id} style={{ padding: "14px 18px", borderRadius: "16px", background: ok ? "#e3f5e8" : "#ffeaea", border: `1.5px solid ${ok ? "#1d825a" : "#e88"}` }}>
                    <div style={{ fontWeight: 600, color: "#0b3353", marginBottom: "5px", fontSize: "0.95rem" }}>Q{id}: {eq?.q.slice(0, 100)}{(eq?.q.length ?? 0) > 100 ? "…" : ""}</div>
                    <div style={{ fontSize: "0.88rem", color: ok ? "#1d825a" : "#bc3f3f" }}>
                      {ok ? "✓ Correct" : `✗ You chose: ${chosen >= 0 ? eq?.o[chosen] : "No answer"} → Correct: ${eq?.o[eq.a ?? 0]}`}
                    </div>
                  </div>
                );
              })}
            </div>
            <button onClick={exitExam} style={{ ...btnPrimary, marginTop: 24 }}>← Back to Study Mode</button>
          </div>
        </div>
      );
    }

    const timeColor = examTimeLeft < 300 ? "#bc3f3f" : examTimeLeft < 600 ? "#d97706" : "#0b3353";
    const examQ = questions[currentExamId];
    const answeredCount = examIds.filter(id => examAnswers[id] !== undefined).length;
    return (
      <div style={pageWrap}>
        <div style={{ ...card, maxWidth: 900 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: "1.7rem", fontWeight: 800, color: "#0b3353" }}>📝 Mock Exam</h2>
              <div style={{ color: "#4a6f92", marginTop: "4px", fontSize: "0.95rem" }}>{EXAM_Q_COUNT} questions · 45 minutes · no feedback until submit</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "2.4rem", fontWeight: 900, color: timeColor, fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{fmtTime(examTimeLeft)}</div>
              <div style={{ color: "#4a6f92", fontSize: "0.88rem", marginTop: "4px" }}>{answeredCount} / {EXAM_Q_COUNT} answered</div>
            </div>
          </div>

          <div style={{ background: "#e8f0f8", borderRadius: "6px", height: "7px", marginBottom: "24px" }}>
            <div style={{ background: "linear-gradient(90deg,#0b3353,#1e6fa8)", borderRadius: "6px", height: "100%", width: `${((examIdx + 1) / examIds.length) * 100}%`, transition: "width 0.3s" }} />
          </div>

          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "20px" }}>
            {examIds.map((id, i) => {
              const chosen = examAnswers[id];
              const dotBg = chosen !== undefined ? "#0b3353" : i === examIdx ? "#93c5fd" : "#e2e8f0";
              return (
                <div key={id} onClick={() => setExamIdx(i)} title={`Q${id}`}
                  style={{ width: "20px", height: "20px", borderRadius: "4px", background: dotBg, cursor: "pointer", border: i === examIdx ? "2px solid #0b3353" : "1px solid transparent", boxSizing: "border-box" }} />
              );
            })}
          </div>

          {examQ && (
            <>
              <div style={{ background: "#0b3353", color: "white", display: "inline-block", padding: "6px 26px", borderRadius: "60px", fontWeight: 700, marginBottom: "18px" }}>
                Question {examIdx + 1} of {examIds.length} · Q{currentExamId}
              </div>
              <div style={{ fontSize: "1.2rem", lineHeight: 1.65, fontWeight: 550, color: "#0b253d", marginBottom: "24px" }}>{examQ.q}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginBottom: "28px" }}>
                {examQ.o.map((opt, idx) => {
                  const isSelected = examAnswers[currentExamId] === idx;
                  return (
                    <label key={idx} onClick={() => setExamAnswers(prev => ({ ...prev, [currentExamId]: idx }))}
                      style={{ display: "flex", alignItems: "center", padding: "13px 22px", border: `2px solid ${isSelected ? "#1c5f9c" : "#d6e4f2"}`, borderRadius: "60px", cursor: "pointer", background: isSelected ? "#d5e9ff" : "#f9fcff", transition: "0.1s" }}>
                      <input type="radio" name="examOpt" value={idx} checked={isSelected} onChange={() => setExamAnswers(prev => ({ ...prev, [currentExamId]: idx }))} style={{ marginRight: "16px", width: "17px", height: "17px", accentColor: "#1c5f9c" }} />
                      <span style={{ fontWeight: 500 }}>{idx + 1}.</span>&nbsp;{opt}
                    </label>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button onClick={() => setExamIdx(i => Math.max(0, i - 1))} disabled={examIdx === 0} style={{ ...btnOutline, opacity: examIdx === 0 ? 0.5 : 1, cursor: examIdx === 0 ? "not-allowed" : "pointer" }}>◀ PREV</button>
                {examIdx < examIds.length - 1
                  ? <button onClick={() => setExamIdx(i => i + 1)} style={btnPrimary}>NEXT ▶</button>
                  : <button onClick={() => setExamSubmitted(true)} style={{ ...btnPrimary, background: "#1d825a" }}>✓ SUBMIT EXAM</button>
                }
                <button onClick={exitExam} style={{ ...btnOutline, marginLeft: "auto", color: "#bc3f3f", borderColor: "#f0c0c0" }}>✕ Exit Exam</button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  const currentIdx = filteredIds.indexOf(currentId);
  const studyTotal = filteredIds.length;
  const topic = getTopic(currentId);
  const topicColor = TOPIC_COLORS[topic] ?? "#1d4ed8";

  return (
    <div style={pageWrap}>
      <div style={card}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
          <div>
            <h1 style={{ fontSize: "2.1rem", fontWeight: 800, background: "linear-gradient(135deg,#0a2a44,#1e4f7a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 }}>
              📘 AI-900 · Complete Exam Bank
            </h1>
            <div style={{ background: "#e2eefb", color: "#1b4d78", padding: "5px 18px", borderRadius: "60px", fontSize: "0.92rem", fontWeight: 600, display: "inline-block", marginTop: "8px" }}>
              {TOTAL_QUESTIONS} real questions · exact from CertyIQ + Oct 2024
            </div>
          </div>
          <button onClick={startExam} style={{ background: "linear-gradient(135deg,#1b5e20,#2e7d32)", color: "white", border: "none", padding: "13px 26px", borderRadius: "60px", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", boxShadow: "0 4px 14px rgba(27,94,32,0.3)", whiteSpace: "nowrap" }}>
            📝 Mock Exam
          </button>
        </div>

        {/* Stats Row */}
        <div style={{ display: "flex", gap: "10px", background: "#f3f9ff", padding: "12px 22px", borderRadius: "60px", marginBottom: "14px", flexWrap: "wrap", alignItems: "center" }}>
          <StatBadge value={totalCorrect} label="correct" color="#1d825a" />
          <StatBadge value={totalWrong} label="wrong" color="#bc3f3f" />
          <StatBadge value={TOTAL_QUESTIONS - totalAnswered} label="left" color="#4a6f92" />
          <StatBadge value={totalBookmarked} label="saved" color="#b07a00" />
          {pctNum !== null && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
              <span style={{ fontSize: "1.7rem", fontWeight: 800, color: pctNum >= 70 ? "#1d825a" : "#bc3f3f" }}>{pctNum}%</span>
              <span style={{ padding: "4px 12px", borderRadius: "40px", background: pctNum >= 70 ? "#e3f5e8" : "#ffeaea", color: pctNum >= 70 ? "#1d825a" : "#bc3f3f", fontWeight: 700, fontSize: "0.82rem" }}>
                {pctNum >= 70 ? "✓ PASS" : "✗ FAIL"}
              </span>
            </div>
          )}
          <button onClick={handleReset} style={{ background: "white", border: "2px solid #b8cfec", padding: "7px 16px", borderRadius: "60px", fontWeight: 500, color: "#2b5b88", cursor: "pointer", fontSize: "0.85rem" }}>↻ reset</button>
        </div>

        {/* Progress bar */}
        <div style={{ background: "#e8f0f8", borderRadius: "6px", height: "6px", marginBottom: "18px" }}>
          <div style={{ background: "linear-gradient(90deg,#1d825a,#27ae60)", borderRadius: "6px", height: "100%", width: `${(totalAnswered / TOTAL_QUESTIONS) * 100}%`, transition: "width 0.6s ease" }} />
        </div>

        {/* Filter + Grid Toggle */}
        <div style={{ display: "flex", gap: "7px", marginBottom: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ color: "#4a6f92", fontWeight: 600, fontSize: "0.85rem", marginRight: "2px" }}>Filter:</span>
          {(["all", "unanswered", "wrong", "bookmarked"] as FilterMode[]).map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "6px 16px", borderRadius: "40px",
              border: `2px solid ${filter === f ? "#0b3353" : "#bed3ec"}`,
              background: filter === f ? "#0b3353" : "white",
              color: filter === f ? "white" : "#1c4a76",
              fontWeight: 600, cursor: "pointer", fontSize: "0.82rem"
            }}>
              {f === "all" ? `All (${TOTAL_QUESTIONS})` : f === "wrong" ? `❌ Wrong (${totalWrong})` : f === "bookmarked" ? `⭐ Saved (${totalBookmarked})` : `⬜ Left (${TOTAL_QUESTIONS - totalAnswered})`}
            </button>
          ))}
          <button onClick={() => setShowGrid(g => !g)} style={{
            marginLeft: "auto", padding: "6px 16px", borderRadius: "40px",
            border: `2px solid ${showGrid ? "#0b3353" : "#bed3ec"}`,
            background: showGrid ? "#0b3353" : "white",
            color: showGrid ? "white" : "#1c4a76",
            fontWeight: 600, cursor: "pointer", fontSize: "0.82rem"
          }}>
            ⊞ Question Map
          </button>
        </div>

        {/* Question Grid */}
        {showGrid && (
          <div style={{ background: "#f3f9ff", borderRadius: "20px", padding: "16px", marginBottom: "18px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px", marginBottom: "12px" }}>
              {Array.from({ length: TOTAL_QUESTIONS }, (_, i) => i + 1).map(id => {
                const s = getQS(qStates, id);
                let bg = "#d0d8e8";
                if (s.result === "correct") bg = "#1d825a";
                else if (s.result === "incorrect") bg = "#bc3f3f";
                else if (s.bookmarked) bg = "#e0a800";
                return (
                  <div key={id} onClick={() => { setFilter("all"); updateCurrentId(id); setShowGrid(false); }}
                    title={`Q${id} · ${getTopic(id)}`}
                    style={{ width: "22px", height: "22px", borderRadius: "4px", background: bg, cursor: "pointer", border: id === currentId ? "2px solid #0b3353" : "1px solid rgba(255,255,255,0.25)", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.42rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                    {id}
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "0.8rem", color: "#4a6f92" }}>
              {[["#1d825a", "Correct"], ["#bc3f3f", "Wrong"], ["#e0a800", "Bookmarked"], ["#d0d8e8", "Unanswered"]].map(([color, label]) => (
                <span key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "11px", height: "11px", borderRadius: "3px", background: color, display: "inline-block" }} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Panel */}
        <div style={{ background: "#f8fafd", borderRadius: "80px", padding: "12px 18px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", border: "1px solid #cde0f0", marginBottom: "22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "white", padding: "3px 3px 3px 14px", borderRadius: "60px", border: "2px solid #bcd2ec" }}>
            <input type="number" min={1} max={TOTAL_QUESTIONS} value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") goToQuestion(parseInt(inputValue)); }}
              style={{ width: "66px", padding: "8px 0", border: "none", fontSize: "1.05rem", fontWeight: 600, color: "#0c2945", outline: "none", textAlign: "center", background: "transparent" }} />
            <button onClick={() => goToQuestion(parseInt(inputValue))} style={{ ...btnPrimary, padding: "9px 20px" }}>GO</button>
          </div>

          <select value={currentId} onChange={e => goToQuestion(parseInt(e.target.value))}
            style={{ padding: "9px 18px", borderRadius: "60px", border: "2px solid #bed3ec", background: "white", fontWeight: 500, fontSize: "0.92rem", color: "#1c4a76", cursor: "pointer" }}>
            {filteredIds.map(n => <option key={n} value={n}>Q{n}{getQS(qStates, n).bookmarked ? " ⭐" : ""}</option>)}
          </select>

          <button onClick={toggleBookmark} title="Bookmark (B)"
            style={{ background: qStatus.bookmarked ? "#fff8e0" : "white", border: `2px solid ${qStatus.bookmarked ? "#e0a800" : "#bed3ec"}`, padding: "9px 16px", borderRadius: "60px", cursor: "pointer", fontSize: "1.05rem" }}>
            {qStatus.bookmarked ? "⭐" : "☆"}
          </button>

          <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
            <button onClick={goPrev} disabled={currentIdx <= 0}
              style={{ ...btnOutline, cursor: currentIdx <= 0 ? "not-allowed" : "pointer", opacity: currentIdx <= 0 ? 0.5 : 1 }}>◀ PREV</button>
            <button onClick={handleSubmit} disabled={selectedAnswer === -1 || answered}
              style={{ ...btnPrimary, cursor: (selectedAnswer === -1 || answered) ? "not-allowed" : "pointer", opacity: (selectedAnswer === -1 || answered) ? 0.65 : 1 }}>✓ SUBMIT</button>
            <button onClick={goNext} disabled={currentIdx >= studyTotal - 1}
              style={{ ...btnOutline, cursor: currentIdx >= studyTotal - 1 ? "not-allowed" : "pointer", opacity: currentIdx >= studyTotal - 1 ? 0.5 : 1 }}>NEXT ▶</button>
          </div>
        </div>

        {/* Empty state */}
        {filteredIds.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#4a6f92" }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "14px" }}>
              {filter === "wrong" ? "🏆" : filter === "bookmarked" ? "🔖" : "✅"}
            </div>
            <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0b3353" }}>
              {filter === "wrong" ? "No wrong answers yet — great start!" : filter === "bookmarked" ? "No bookmarks yet. Press ⭐ to save any question." : "All questions answered!"}
            </div>
            <button onClick={() => setFilter("all")} style={{ ...btnOutline, marginTop: "20px" }}>View all questions</button>
          </div>
        )}

        {/* Question Card */}
        {q && filteredIds.length > 0 && (
          <div style={{ background: "#fff", border: "2px solid #d6e4f2", borderRadius: "28px", padding: "28px 34px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ background: "#0b3353", color: "white", display: "inline-block", padding: "6px 26px", borderRadius: "60px", fontWeight: 700, fontSize: "0.92rem" }}>
                QUESTION {currentId} of {TOTAL_QUESTIONS}{filter !== "all" ? ` · ${currentIdx + 1}/${studyTotal} shown` : ""}
              </div>
              <span style={{ padding: "5px 14px", borderRadius: "40px", background: topicColor + "18", color: topicColor, fontWeight: 700, fontSize: "0.8rem", border: `1.5px solid ${topicColor}40` }}>
                {topic}
              </span>
            </div>

            <div style={{ fontSize: "1.22rem", lineHeight: 1.68, fontWeight: 550, color: "#0b253d", marginBottom: "26px", whiteSpace: "pre-line" }}>
              {q.q}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginBottom: "18px" }}>
              {q.o.map((opt, idx) => {
                let borderColor = "#d6e4f2", bg = "#f9fcff", shadow = "none";
                if (answered) {
                  if (idx === q.a) { borderColor = "#1d825a"; bg = "#e3f5e8"; shadow = "0 4px 12px rgba(29,130,90,0.15)"; }
                  else if (idx === qStatus.selectedAnswer && qStatus.selectedAnswer !== q.a) { borderColor = "#bc3f3f"; bg = "#ffeaea"; shadow = "0 4px 12px rgba(188,63,63,0.15)"; }
                } else if (selectedAnswer === idx) { borderColor = "#1c5f9c"; bg = "#d5e9ff"; shadow = "0 4px 12px rgba(0,85,160,0.15)"; }
                return (
                  <label key={idx} onClick={() => { if (!answered) setSelectedAnswer(idx); }}
                    style={{ display: "flex", alignItems: "center", padding: "13px 24px", border: `2px solid ${borderColor}`, borderRadius: "60px", fontSize: "1.02rem", cursor: answered ? "default" : "pointer", background: bg, boxShadow: shadow, transition: "0.1s ease" }}>
                    <input type="radio" name="qOption" value={idx} checked={answered ? idx === qStatus.selectedAnswer : selectedAnswer === idx}
                      onChange={() => { if (!answered) setSelectedAnswer(idx); }} disabled={answered}
                      style={{ marginRight: "16px", width: "17px", height: "17px", accentColor: "#1c5f9c", flexShrink: 0 }} />
                    <span style={{ color: "#8aaccc", fontWeight: 700, marginRight: "8px", fontSize: "0.9rem" }}>{idx + 1}</span>
                    {opt}
                  </label>
                );
              })}
            </div>

            {answered && (
              <div style={{ background: isCorrect ? "#e3f5e8" : "#ffeaea", borderRadius: "20px", padding: "20px 26px", borderLeft: `7px solid ${isCorrect ? "#1d825a" : "#bc3f3f"}` }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "9px" }}>{isCorrect ? "✅ Correct!" : "❌ Incorrect"}</div>
                <div style={{ lineHeight: 1.68, color: "#1a3a1a", fontSize: "0.97rem" }}>
                  <strong>Explanation:</strong> {q.e}
                </div>
                {!isCorrect && (
                  <div style={{ marginTop: "10px", fontWeight: 600, color: "#1d825a", fontSize: "0.95rem" }}>✔ Correct answer: {q.o[q.a]}</div>
                )}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "13px" }}>
                  {q.k.map(tag => (
                    <span key={tag} style={{ background: "rgba(255,255,255,0.7)", border: "1px dashed #9bb9d9", padding: "4px 14px", borderRadius: "40px", fontSize: "0.82rem", color: "#1d4f7c", fontWeight: 500 }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div style={{ textAlign: "center", color: "#99b8d8", fontSize: "0.78rem", marginTop: "8px" }}>
          ⌨️ 1–4 select answer · Enter submit · ← → navigate · B bookmark · G grid map
        </div>
        <div style={{ textAlign: "center", color: "#b0c8e0", fontSize: "0.78rem", marginTop: "6px" }}>
          Creator: <a href="https://linkedin.com/in/diontakir/" target="_blank" rel="noopener noreferrer" style={{ color: "#1c4a76", textDecoration: "none", fontWeight: 600 }}>linkedin.com/in/diontakir/</a>
        </div>
      </div>
    </div>
  );
}

function StatBadge({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
      <span style={{ fontSize: "1.7rem", fontWeight: 800, color }}>{value}</span>
      <span style={{ color: "#4a6f92", fontSize: "0.85rem" }}>{label}</span>
    </div>
  );
}

const pageWrap: React.CSSProperties = {
  background: "linear-gradient(145deg,#f0f5fc 0%,#ffffff 100%)",
  minHeight: "100vh",
  padding: "24px",
  display: "flex",
  justifyContent: "center",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};
const card: React.CSSProperties = {
  maxWidth: "1100px",
  width: "100%",
  background: "white",
  borderRadius: "36px",
  boxShadow: "0 30px 60px rgba(0,30,60,0.22)",
  padding: "32px 36px",
  alignSelf: "flex-start",
};
const btnPrimary: React.CSSProperties = {
  background: "#0b3353",
  color: "white",
  border: "none",
  padding: "10px 24px",
  borderRadius: "60px",
  fontWeight: 700,
  fontSize: "0.92rem",
  cursor: "pointer",
};
const btnOutline: React.CSSProperties = {
  background: "white",
  border: "2px solid #bed3ec",
  padding: "10px 22px",
  borderRadius: "60px",
  fontWeight: 600,
  color: "#1c4a76",
  cursor: "pointer",
  fontSize: "0.92rem",
};
