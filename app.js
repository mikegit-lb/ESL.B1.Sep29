// App State
let currentIndex = 0;
let activeScaffoldTab = 'starters';
let currentCategoryFilter = 'all';
let currentSearchTerm = '';
let practicedIds = new Set(JSON.parse(localStorage.getItem('esl_b1_practiced') || '[]'));
let favoriteIds = new Set(JSON.parse(localStorage.getItem('esl_b1_favorites') || '[]'));

// Audio & Timer variables
let isSpeaking = false;
let mediaRecorder = null;
let audioChunks = [];
let recordedAudioUrl = null;
let isRecording = false;

// Timer State
let timerInterval = null;
let timerTotalSeconds = 60;
let timerRemainingSeconds = 60;
let timerIsRunning = false;
let timerPhase = 'prep'; // 'prep' or 'speak'
let prepSeconds = 15;
let speakSeconds = 60;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateProgressStats();
  renderFlashcard();
  renderListView();
  renderDrillQuestion();
  initEventListeners();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('esl_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('esl_theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!themeBtn) return;
  if (theme === 'dark') {
    themeBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;
  } else {
    themeBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
  }
}

// Event Listeners
function initEventListeners() {
  // Navigation tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
      
      const targetTab = btn.getAttribute('data-tab');
      btn.classList.add('active');
      const targetSection = document.getElementById(`view-${targetTab}`);
      if (targetSection) targetSection.classList.add('active');
    });
  });

  // Flashcard scaffolding tabs
  document.querySelectorAll('.scaffold-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.scaffold-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeScaffoldTab = btn.getAttribute('data-scaffold');
      renderScaffoldContent();
    });
  });

  // Search in list view
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value.toLowerCase();
      renderListView();
    });
  }

  // Category pills in list view
  document.querySelectorAll('.pill-btn').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategoryFilter = pill.getAttribute('data-filter');
      renderListView();
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    // Only navigate with arrows if not typing in input
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    
    const isFlashcardActive = document.getElementById('view-flashcard').classList.contains('active');
    if (isFlashcardActive) {
      if (e.key === 'ArrowRight') nextQuestion();
      if (e.key === 'ArrowLeft') prevQuestion();
      if (e.key === 'r' || e.key === 'R') shuffleQuestion();
      if (e.key === ' ') {
        e.preventDefault();
        speakCurrentQuestion();
      }
    }
  });
}

// Progress & Stats
function updateProgressStats() {
  const count = practicedIds.size;
  const total = speakingQuestions.length;
  const percent = Math.round((count / total) * 100);
  
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  const statPracticed = document.getElementById('stat-practiced-count');
  const statFavs = document.getElementById('stat-favs-count');

  if (progressFill) progressFill.style.width = `${percent}%`;
  if (progressText) progressText.innerText = `${count} / ${total} Practiced (${percent}%)`;
  if (statPracticed) statPracticed.innerText = `${count} Practiced`;
  if (statFavs) statFavs.innerText = `${favoriteIds.size} Saved`;
}

// Flashcard Render
function renderFlashcard() {
  const q = speakingQuestions[currentIndex];
  if (!q) return;

  // Header badges & navigation
  const counterBadge = document.getElementById('card-counter');
  if (counterBadge) counterBadge.innerText = `Question ${currentIndex + 1} of ${speakingQuestions.length}`;

  const categoryTag = document.getElementById('card-category-tag');
  if (categoryTag) {
    categoryTag.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      ${q.category}
    `;
  }

  // Favorite button state
  const favBtn = document.getElementById('card-fav-btn');
  if (favBtn) {
    favBtn.classList.toggle('active-favorite', favoriteIds.has(q.id));
    favBtn.title = favoriteIds.has(q.id) ? "Remove from Favorites" : "Save to Favorites";
  }

  // Practiced button state
  const practicedBtn = document.getElementById('card-practiced-btn');
  if (practicedBtn) {
    practicedBtn.classList.toggle('active-practiced', practicedIds.has(q.id));
    practicedBtn.title = practicedIds.has(q.id) ? "Mark as Not Practiced" : "Mark as Practiced";
  }

  // Question texts
  const topicLabel = document.getElementById('card-topic-label');
  if (topicLabel) topicLabel.innerText = q.title;

  const questionText = document.getElementById('card-question-text');
  if (questionText) questionText.innerText = q.question;

  // Follow-ups
  const followupsList = document.getElementById('card-followups-list');
  if (followupsList) {
    followupsList.innerHTML = q.followUps.map(f => `<li>${f}</li>`).join('');
  }

  // Scaffolding content (starters, vocab, model answer)
  renderScaffoldContent();

  // Reset audio playback widget if exists
  const audioPreview = document.getElementById('recorded-audio-preview');
  if (audioPreview) {
    audioPreview.style.display = 'none';
  }
}

function renderScaffoldContent() {
  const q = speakingQuestions[currentIndex];
  const container = document.getElementById('scaffold-content-display');
  if (!q || !container) return;

  if (activeScaffoldTab === 'starters') {
    container.innerHTML = `
      <ul class="starter-list">
        ${q.starters.map(s => `<li class="starter-item">"${s}"</li>`).join('')}
      </ul>
    `;
  } else if (activeScaffoldTab === 'vocab') {
    container.innerHTML = `
      <div class="vocab-grid">
        ${q.vocab.map(v => `
          <div class="vocab-card-item">
            <div class="vocab-term">${v.word}</div>
            <div class="vocab-def">${v.meaning}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeScaffoldTab === 'model') {
    container.innerHTML = `
      <div class="model-answer-text">
        <p>💡 <strong>Model Answer (B1 Level):</strong></p>
        <p style="margin-top: 0.5rem;">${q.modelAnswer}</p>
      </div>
    `;
  }
}

// Flashcard Navigation
function nextQuestion() {
  if (currentIndex < speakingQuestions.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // loop back
  }
  renderFlashcard();
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = speakingQuestions.length - 1; // loop to end
  }
  renderFlashcard();
}

function shuffleQuestion() {
  let nextIdx = Math.floor(Math.random() * speakingQuestions.length);
  while (nextIdx === currentIndex && speakingQuestions.length > 1) {
    nextIdx = Math.floor(Math.random() * speakingQuestions.length);
  }
  currentIndex = nextIdx;
  renderFlashcard();
  showToast("🔀 Picked a random question!");
}

function jumpToQuestion(id) {
  const idx = speakingQuestions.findIndex(q => q.id === id);
  if (idx !== -1) {
    currentIndex = idx;
    // Switch tab to flashcard
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.querySelector('[data-tab="flashcard"]').classList.add('active');
    document.getElementById('view-flashcard').classList.add('active');
    renderFlashcard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Favorite & Practiced Toggles
function toggleCurrentFavorite() {
  const q = speakingQuestions[currentIndex];
  if (!q) return;

  if (favoriteIds.has(q.id)) {
    favoriteIds.delete(q.id);
    showToast("Removed from favorites");
  } else {
    favoriteIds.add(q.id);
    showToast("⭐ Added to favorites!");
  }
  localStorage.setItem('esl_b1_favorites', JSON.stringify([...favoriteIds]));
  renderFlashcard();
  updateProgressStats();
  renderListView();
}

function toggleCurrentPracticed() {
  const q = speakingQuestions[currentIndex];
  if (!q) return;

  if (practicedIds.has(q.id)) {
    practicedIds.delete(q.id);
    showToast("Marked as not practiced");
  } else {
    practicedIds.add(q.id);
    showToast("🎉 Marked as practiced!");
  }
  localStorage.setItem('esl_b1_practiced', JSON.stringify([...practicedIds]));
  renderFlashcard();
  updateProgressStats();
  renderListView();
}

// Text to Speech
function speakCurrentQuestion() {
  const q = speakingQuestions[currentIndex];
  if (!q) return;
  speakText(q.question);
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    showToast("Text-to-speech not supported in this browser.");
    return;
  }

  window.speechSynthesis.cancel(); // Stop ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92; // slightly slower for language learners
  utterance.pitch = 1.0;
  utterance.lang = 'en-US';

  // Find a clear natural English voice if available
  const voices = window.speechSynthesis.getVoices();
  const naturalVoice = voices.find(v => (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'))));
  if (naturalVoice) utterance.voice = naturalVoice;

  const audioBtn = document.getElementById('card-listen-btn');
  if (audioBtn) audioBtn.classList.add('btn-accent');

  utterance.onend = () => {
    if (audioBtn) audioBtn.classList.remove('btn-accent');
  };

  utterance.onerror = () => {
    if (audioBtn) audioBtn.classList.remove('btn-accent');
  };

  window.speechSynthesis.speak(utterance);
}

// Voice Recorder for Self-Evaluation
async function toggleVoiceRecording() {
  const recordBtn = document.getElementById('card-record-btn');
  const recordLabel = document.getElementById('record-btn-label');
  const previewDiv = document.getElementById('recorded-audio-preview');

  if (!isRecording) {
    // Start Recording
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        recordedAudioUrl = URL.createObjectURL(audioBlob);
        
        if (previewDiv) {
          previewDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.75rem; background: var(--bg-card-subtle); padding: 0.6rem 1rem; border-radius: 12px; border: 1px solid var(--border);">
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary);">🎧 Your Recording:</span>
              <audio controls src="${recordedAudioUrl}" style="height: 32px; flex: 1;"></audio>
            </div>
          `;
          previewDiv.style.display = 'block';
        }
      };

      mediaRecorder.start();
      isRecording = true;
      if (recordBtn) recordBtn.classList.add('btn-recording');
      if (recordLabel) recordLabel.innerText = "Stop Recording";
      showToast("🔴 Recording your voice... Speak now!");
    } catch (err) {
      console.error(err);
      showToast("Microphone access denied or not supported.");
    }
  } else {
    // Stop Recording
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
    isRecording = false;
    if (recordBtn) recordBtn.classList.remove('btn-recording');
    if (recordLabel) recordLabel.innerText = "Record Voice";
    showToast("✅ Audio saved! Listen below to review your fluency.");
  }
}

// Speaking Practice Timer Logic
function openTimerModal(prepTime = 15, speakTime = 60) {
  prepSeconds = prepTime;
  speakSeconds = speakTime;
  timerPhase = prepSeconds > 0 ? 'prep' : 'speak';
  timerRemainingSeconds = timerPhase === 'prep' ? prepSeconds : speakSeconds;
  timerTotalSeconds = timerRemainingSeconds;

  const modal = document.getElementById('timer-modal');
  if (modal) modal.classList.add('open');

  updateTimerDisplay();
  resetTimerState();
}

function closeTimerModal() {
  clearInterval(timerInterval);
  timerIsRunning = false;
  const modal = document.getElementById('timer-modal');
  if (modal) modal.classList.remove('open');
}

function updateTimerDisplay() {
  const digits = document.getElementById('timer-digits');
  const phaseBadge = document.getElementById('timer-phase-badge');
  const circle = document.getElementById('timer-progress-svg-circle');

  const mins = Math.floor(timerRemainingSeconds / 60);
  const secs = timerRemainingSeconds % 60;
  if (digits) digits.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

  if (phaseBadge) {
    if (timerPhase === 'prep') {
      phaseBadge.innerText = "🧠 Prep Time (Think & Plan)";
      phaseBadge.style.background = "var(--accent-light)";
      phaseBadge.style.color = "var(--accent)";
      if (circle) circle.style.stroke = "var(--accent)";
    } else {
      phaseBadge.innerText = "🗣️ Speaking Time (Speak Fluently!)";
      phaseBadge.style.background = "var(--success-light)";
      phaseBadge.style.color = "var(--success)";
      if (circle) circle.style.stroke = "var(--success)";
    }
  }

  if (circle) {
    const totalLength = 471; // 2 * PI * 75
    const progress = (timerTotalSeconds - timerRemainingSeconds) / timerTotalSeconds;
    const offset = totalLength * progress;
    circle.style.strokeDashoffset = offset;
  }
}

function toggleTimerRun() {
  const btn = document.getElementById('timer-start-pause-btn');
  if (!timerIsRunning) {
    // Start
    timerIsRunning = true;
    if (btn) btn.innerText = "Pause";
    timerInterval = setInterval(() => {
      if (timerRemainingSeconds > 0) {
        timerRemainingSeconds--;
        updateTimerDisplay();
      } else {
        // Phase transition or completion
        playBeepTone();
        if (timerPhase === 'prep') {
          timerPhase = 'speak';
          timerRemainingSeconds = speakSeconds;
          timerTotalSeconds = speakSeconds;
          updateTimerDisplay();
          showToast("⏰ Prep over! Start speaking now!");
        } else {
          clearInterval(timerInterval);
          timerIsRunning = false;
          if (btn) btn.innerText = "Start";
          showToast("🎉 Time's up! Great job!");
        }
      }
    }, 1000);
  } else {
    // Pause
    clearInterval(timerInterval);
    timerIsRunning = false;
    if (btn) btn.innerText = "Resume";
  }
}

function resetTimerState() {
  clearInterval(timerInterval);
  timerIsRunning = false;
  timerPhase = prepSeconds > 0 ? 'prep' : 'speak';
  timerRemainingSeconds = timerPhase === 'prep' ? prepSeconds : speakSeconds;
  timerTotalSeconds = timerRemainingSeconds;
  const btn = document.getElementById('timer-start-pause-btn');
  if (btn) btn.innerText = "Start Timer";
  updateTimerDisplay();
}

function setTimerPreset(prep, speak) {
  prepSeconds = prep;
  speakSeconds = speak;
  resetTimerState();
}

// Synthesized Audio Beep for Timer
function playBeepTone() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 tone
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    osc.start();
    osc.stop(ctx.currentTime + 0.6);
  } catch (e) {
    // Ignore audio context autoplay limitations
  }
}

// ============================================================
// LIST VIEW RENDERING
// ============================================================
function renderListView() {
  const container = document.getElementById('questions-list-grid');
  if (!container) return;

  // Filter questions
  let filtered = speakingQuestions.filter(q => {
    // Category check
    if (currentCategoryFilter === 'favorites' && !favoriteIds.has(q.id)) return false;
    if (currentCategoryFilter === 'practiced' && !practicedIds.has(q.id)) return false;
    if (currentCategoryFilter !== 'all' && currentCategoryFilter !== 'favorites' && currentCategoryFilter !== 'practiced') {
      if (q.categoryKey !== currentCategoryFilter) return false;
    }

    // Search check
    if (currentSearchTerm) {
      const matchTitle = q.title.toLowerCase().includes(currentSearchTerm);
      const matchQ = q.question.toLowerCase().includes(currentSearchTerm);
      const matchCat = q.category.toLowerCase().includes(currentSearchTerm);
      const matchVocab = q.vocab.some(v => v.word.toLowerCase().includes(currentSearchTerm));
      if (!matchTitle && !matchQ && !matchCat && !matchVocab) return false;
    }

    return true;
  });

  const countDisplay = document.getElementById('list-result-count');
  if (countDisplay) {
    countDisplay.innerText = `Showing ${filtered.length} of ${speakingQuestions.length} Questions`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-weight: 700;">No questions match your criteria</p>
        <p style="font-size: 0.9rem; margin-top: 0.35rem;">Try adjusting your search terms or filter pills.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(q => {
    const isFav = favoriteIds.has(q.id);
    const isDone = practicedIds.has(q.id);

    return `
      <div class="question-list-card" id="list-card-${q.id}">
        <div>
          <div class="list-card-header">
            <span class="q-badge">#${q.id}</span>
            <div style="display: flex; gap: 0.35rem;">
              <button class="card-action-btn ${isFav ? 'active-favorite' : ''}" onclick="toggleListFavorite(${q.id})" title="Favorite">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </button>
              <button class="card-action-btn ${isDone ? 'active-practiced' : ''}" onclick="toggleListPracticed(${q.id})" title="Mark Practiced">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">${q.category}</span>
          <h3 class="list-card-title">${q.question}</h3>
        </div>

        <div class="list-card-footer">
          <button class="expand-btn" onclick="toggleAccordion(${q.id})">
            <span id="accordion-toggle-txt-${q.id}">View Details & Vocab</span>
            <svg id="accordion-toggle-icon-${q.id}" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          <div style="display: flex; gap: 0.35rem;">
            <button class="icon-btn" onclick="speakText('${q.question.replace(/'/g, "\\'")}')" title="Listen Audio">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            </button>
            <button class="tool-btn btn-primary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;" onclick="jumpToQuestion(${q.id})">
              Practice ⚡
            </button>
          </div>
        </div>

        <!-- Accordion Details -->
        <div class="accordion-details" id="accordion-${q.id}">
          <div style="margin-bottom: 0.75rem;">
            <strong style="color: var(--text-primary); font-size: 0.82rem; display: block; margin-bottom: 0.25rem;">Follow-up Prompts:</strong>
            <ul style="padding-left: 1.2rem; font-size: 0.82rem; line-height: 1.4;">
              ${q.followUps.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>

          <div style="margin-bottom: 0.75rem;">
            <strong style="color: var(--text-primary); font-size: 0.82rem; display: block; margin-bottom: 0.25rem;">Target Vocabulary:</strong>
            <div style="display: flex; flex-wrap: wrap; gap: 0.3rem;">
              ${q.vocab.map(v => `<span style="background: var(--bg-card); border: 1px solid var(--border); padding: 0.2rem 0.5rem; border-radius: 6px; font-size: 0.75rem;"><strong>${v.word}</strong>: ${v.meaning}</span>`).join('')}
            </div>
          </div>

          <div style="background: var(--bg-card); padding: 0.65rem 0.8rem; border-radius: 8px; border: 1px solid var(--border); font-size: 0.82rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.2rem;">Model Answer:</strong>
            <em>${q.modelAnswer}</em>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleAccordion(id) {
  const acc = document.getElementById(`accordion-${id}`);
  const txt = document.getElementById(`accordion-toggle-txt-${id}`);
  const icon = document.getElementById(`accordion-toggle-icon-${id}`);

  if (acc.classList.contains('open')) {
    acc.classList.remove('open');
    txt.innerText = "View Details & Vocab";
    icon.style.transform = "rotate(0deg)";
  } else {
    acc.classList.add('open');
    txt.innerText = "Hide Details";
    icon.style.transform = "rotate(180deg)";
  }
}

function toggleListFavorite(id) {
  if (favoriteIds.has(id)) {
    favoriteIds.delete(id);
    showToast("Removed from favorites");
  } else {
    favoriteIds.add(id);
    showToast("⭐ Added to favorites!");
  }
  localStorage.setItem('esl_b1_favorites', JSON.stringify([...favoriteIds]));
  renderListView();
  updateProgressStats();
  if (speakingQuestions[currentIndex].id === id) renderFlashcard();
}

function toggleListPracticed(id) {
  if (practicedIds.has(id)) {
    practicedIds.delete(id);
    showToast("Marked as not practiced");
  } else {
    practicedIds.add(id);
    showToast("🎉 Marked as practiced!");
  }
  localStorage.setItem('esl_b1_practiced', JSON.stringify([...practicedIds]));
  renderListView();
  updateProgressStats();
  if (speakingQuestions[currentIndex].id === id) renderFlashcard();
}

// ============================================================
// SPEED DRILL MODE
// ============================================================
let drillQuestionObj = null;

function renderDrillQuestion() {
  const randIdx = Math.floor(Math.random() * speakingQuestions.length);
  drillQuestionObj = speakingQuestions[randIdx];

  const catElem = document.getElementById('drill-category');
  const qElem = document.getElementById('drill-question-text');
  
  if (catElem) catElem.innerText = drillQuestionObj.category;
  if (qElem) qElem.innerText = `"${drillQuestionObj.question}"`;
}

function startDrillPractice() {
  if (!drillQuestionObj) return;
  openTimerModal(10, 60); // 10s prep, 60s speak
  toggleTimerRun();
}

// ============================================================
// UTILITIES
// ============================================================
function showToast(msg) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function printWorksheet() {
  window.print();
}
