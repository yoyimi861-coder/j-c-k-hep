/* ============================================================
   한·중·일 유학생 학습 도우미 — script.js
   ============================================================ */

/* ── 예시 번역 사전 ── */
const translations = {
  "ko-zh": {
    "안녕하세요": "你好",
    "감사합니다": "谢谢",
    "도와주세요": "请帮帮我",
    "교수님": "教授",
    "과제": "作业",
    "시험": "考试",
    "도서관": "图书馆",
    "발표": "演讲",
    "수업": "课程",
    "기숙사": "宿舍",
    "안녕히 가세요": "再见",
    "미안합니다": "对不起",
    "반갑습니다": "很高兴认识你",
    "잠깐만요": "请稍等",
    "이해했습니다": "我明白了",
  },
  "ko-ja": {
    "안녕하세요": "こんにちは",
    "감사합니다": "ありがとうございます",
    "도와주세요": "助けてください",
    "교수님": "先生",
    "과제": "課題",
    "시험": "試験",
    "도서관": "図書館",
    "발표": "発表",
    "수업": "授業",
    "기숙사": "寮",
    "안녕히 가세요": "さようなら",
    "미안합니다": "すみません",
    "반갑습니다": "はじめまして",
    "잠깐만요": "少々お待ちください",
    "이해했습니다": "わかりました",
  },
  "zh-ko": {
    "你好": "안녕하세요",
    "谢谢": "감사합니다",
    "老师": "선생님 / 교수님",
    "作业": "과제",
    "考试": "시험",
    "图书馆": "도서관",
    "演讲": "발표",
    "宿舍": "기숙사",
    "再见": "안녕히 가세요",
    "对不起": "미안합니다",
    "请稍等": "잠깐만요",
    "我明白了": "이해했습니다",
  },
  "zh-ja": {
    "你好": "こんにちは",
    "谢谢": "ありがとうございます",
    "老师": "先生",
    "作业": "課題",
    "考试": "試験",
    "图书馆": "図書館",
    "演讲": "発表",
    "宿舍": "寮",
    "再见": "さようなら",
    "对不起": "すみません",
    "请稍等": "少々お待ちください",
    "我明白了": "わかりました",
  },
  "ja-ko": {
    "こんにちは": "안녕하세요",
    "ありがとうございます": "감사합니다",
    "先生": "선생님 / 교수님",
    "課題": "과제",
    "試験": "시험",
    "図書館": "도서관",
    "発表": "발표",
    "寮": "기숙사",
    "さようなら": "안녕히 가세요",
    "すみません": "미안합니다 / 실례합니다",
    "はじめまして": "처음 뵙겠습니다",
    "わかりました": "알겠습니다",
  },
  "ja-zh": {
    "こんにちは": "你好",
    "ありがとうございます": "谢谢",
    "先生": "老师",
    "課題": "作业",
    "試験": "考试",
    "図書館": "图书馆",
    "発表": "演讲",
    "寮": "宿舍",
    "さようなら": "再见",
    "すみません": "对不起",
    "はじめまして": "初次见面",
    "わかりました": "我明白了",
  },
};

/* ── 표현 카테고리 데이터 ── */
const phrasesData = {
  greeting: [
    {
      situation: "첫 만남",
      ko: "안녕하세요, 처음 뵙겠습니다.",
      zh: "你好，初次见面，请多关照。",
      ja: "はじめまして、よろしくお願いします。",
    },
    {
      situation: "자기소개",
      ko: "저는 한국어를 공부하고 있어요.",
      zh: "我正在学习韩语。",
      ja: "私は韓国語を勉強しています。",
    },
    {
      situation: "감사 인사",
      ko: "도와주셔서 감사합니다.",
      zh: "感谢您的帮助。",
      ja: "助けていただきありがとうございます。",
    },
    {
      situation: "작별 인사",
      ko: "안녕히 가세요. 또 만나요!",
      zh: "再见，下次见！",
      ja: "さようなら、またね！",
    },
    {
      situation: "사과",
      ko: "죄송합니다, 제 실수예요.",
      zh: "对不起，这是我的错。",
      ja: "すみません、私のミスです。",
    },
    {
      situation: "부탁",
      ko: "잠깐 도와주실 수 있으세요?",
      zh: "能稍微帮我一下吗？",
      ja: "少し手伝っていただけますか？",
    },
  ],
  school: [
    {
      situation: "수강 신청",
      ko: "이 수업 신청하는 방법이 뭐예요?",
      zh: "这门课怎么选修？",
      ja: "この授業の受講申請はどうやりますか？",
    },
    {
      situation: "과제 제출",
      ko: "과제 마감일이 언제예요?",
      zh: "作业截止日期是什么时候？",
      ja: "課題の締め切りはいつですか？",
    },
    {
      situation: "도서관",
      ko: "도서관은 몇 시에 문을 닫아요?",
      zh: "图书馆几点关门？",
      ja: "図書館は何時に閉まりますか？",
    },
    {
      situation: "성적 확인",
      ko: "성적을 어디서 확인할 수 있어요?",
      zh: "在哪里可以查成绩？",
      ja: "成績はどこで確認できますか？",
    },
    {
      situation: "시험 범위",
      ko: "중간고사 범위가 어디까지예요?",
      zh: "期中考试的范围是多少？",
      ja: "中間テストの範囲はどこまでですか？",
    },
    {
      situation: "학생증",
      ko: "학생증 발급은 어디서 해요?",
      zh: "学生证在哪里办理？",
      ja: "学生証はどこで発行できますか？",
    },
  ],
  presentation: [
    {
      situation: "발표 시작",
      ko: "안녕하세요, 지금부터 발표를 시작하겠습니다.",
      zh: "大家好，现在开始我的发表。",
      ja: "皆さん、これから発表を始めます。",
    },
    {
      situation: "주제 소개",
      ko: "오늘 발표 주제는 ~입니다.",
      zh: "今天的发表主题是～。",
      ja: "本日の発表テーマは～です。",
    },
    {
      situation: "다음으로 전환",
      ko: "다음으로 넘어가겠습니다.",
      zh: "接下来我们进入下一个话题。",
      ja: "次に移ります。",
    },
    {
      situation: "질문 유도",
      ko: "질문 있으시면 말씀해 주세요.",
      zh: "如果有问题，请告诉我。",
      ja: "ご質問があればおっしゃってください。",
    },
    {
      situation: "발표 마무리",
      ko: "이상으로 발표를 마치겠습니다. 감사합니다.",
      zh: "以上是我的发表，谢谢大家。",
      ja: "以上で発表を終わります。ありがとうございました。",
    },
    {
      situation: "핵심 강조",
      ko: "이 부분이 가장 중요합니다.",
      zh: "这一点是最重要的。",
      ja: "この点が最も重要です。",
    },
  ],
  email: [
    {
      situation: "첫 인사",
      ko: "교수님, 안녕하세요. 저는 ~학과 ~입니다.",
      zh: "教授您好，我是～系的～。",
      ja: "先生、こんにちは。～学科の～です。",
    },
    {
      situation: "메일 목적",
      ko: "다름이 아니라 ~에 대해 여쭤보고 싶습니다.",
      zh: "我想请问一下关于～的问题。",
      ja: "～についてお伺いしたいことがあります。",
    },
    {
      situation: "면담 요청",
      ko: "면담 시간을 잡을 수 있을까요?",
      zh: "能安排一下面谈时间吗？",
      ja: "面談のお時間をいただけますでしょうか？",
    },
    {
      situation: "과제 문의",
      ko: "과제 관련하여 궁금한 점이 있습니다.",
      zh: "我有一个关于作业的问题。",
      ja: "課題についてご質問があります。",
    },
    {
      situation: "결석 사유",
      ko: "~로 인해 수업에 참석하지 못할 것 같습니다.",
      zh: "由于～，我可能无法参加课程。",
      ja: "～のため、授業に出席できない可能性があります。",
    },
    {
      situation: "메일 마무리",
      ko: "바쁘신 중에 읽어주셔서 감사합니다.",
      zh: "感谢您在百忙中阅读此邮件。",
      ja: "お忙しい中、ご覧いただきありがとうございます。",
    },
  ],
};

/* ── DOM 요소 참조 ── */
const themeToggle   = document.getElementById('themeToggle');
const themeIcon     = themeToggle.querySelector('.theme-icon');
const sourceLangSel = document.getElementById('sourceLang');
const targetLangSel = document.getElementById('targetLang');
const sourceText    = document.getElementById('sourceText');
const charCount     = document.getElementById('charCount');
const translateBtn  = document.getElementById('translateBtn');
const resultBox     = document.getElementById('resultBox');
const copyResultBtn = document.getElementById('copyResult');
const swapLangBtn   = document.getElementById('swapLang');
const phraseList    = document.getElementById('phraseList');
const favoriteList  = document.getElementById('favoriteList');
const favEmpty      = document.getElementById('favEmpty');
const clearFavBtn   = document.getElementById('clearFavorites');
const toastEl       = document.getElementById('toast');

/* ══════════════════════════════════════════════
   1. 다크 모드
══════════════════════════════════════════════ */
function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
    themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    themeIcon.textContent = '🌙';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 저장된 테마 적용
applyTheme(localStorage.getItem('theme') === 'dark');

themeToggle.addEventListener('click', () => {
  applyTheme(!document.body.classList.contains('dark'));
});

/* ══════════════════════════════════════════════
   2. 글자 수 카운터
══════════════════════════════════════════════ */
sourceText.addEventListener('input', () => {
  charCount.textContent = sourceText.value.length;
});

/* ══════════════════════════════════════════════
   3. 번역 기능
══════════════════════════════════════════════ */
function translate(text, srcLang, tgtLang) {
  // 같은 언어 선택 시 그대로 반환
  if (srcLang === tgtLang) return text;

  const key  = `${srcLang}-${tgtLang}`;
  const dict = translations[key];

  if (!dict) return '⚠️ 지원하지 않는 언어 조합입니다.';

  const trimmed = text.trim();

  // 정확히 일치하는 경우
  if (dict[trimmed]) return dict[trimmed];

  // 포함된 단어 치환
  let result   = trimmed;
  let replaced = false;
  Object.keys(dict).forEach(src => {
    if (result.includes(src)) {
      result   = result.replaceAll(src, dict[src]);
      replaced = true;
    }
  });
  if (replaced) return result;

  // 사전에 없는 경우
  return `💬 "${trimmed}"에 대한 번역 예시가 없습니다.\n실제 서비스에서는 번역 API가 연결됩니다.`;
}

translateBtn.addEventListener('click', () => {
  const text = sourceText.value.trim();
  if (!text) { showToast('번역할 텍스트를 입력해 주세요.'); return; }

  const result = translate(text, sourceLangSel.value, targetLangSel.value);
  resultBox.innerHTML = result
    .split('\n')
    .map(line => `<span>${escapeHtml(line)}</span>`)
    .join('<br />');
});

// Ctrl+Enter / Cmd+Enter 단축키
sourceText.addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    translateBtn.click();
  }
});

/* ══════════════════════════════════════════════
   4. 언어 교환
══════════════════════════════════════════════ */
swapLangBtn.addEventListener('click', () => {
  const srcVal = sourceLangSel.value;
  const tgtVal = targetLangSel.value;

  sourceLangSel.value = tgtVal;
  targetLangSel.value = srcVal;

  // 번역 결과가 있으면 입력창으로 이동
  const currentResult = resultBox.textContent.trim();
  if (currentResult && !currentResult.includes('번역 결과가 여기에')) {
    sourceText.value = currentResult;
    charCount.textContent = currentResult.length;
    resultBox.innerHTML = '<p class="result-placeholder">번역 결과가 여기에 표시됩니다.</p>';
  }
});

/* ══════════════════════════════════════════════
   5. 번역 결과 복사
══════════════════════════════════════════════ */
copyResultBtn.addEventListener('click', () => {
  const text = resultBox.textContent.trim();
  if (!text || text === '번역 결과가 여기에 표시됩니다.') {
    showToast('복사할 내용이 없습니다.');
    return;
  }
  copyToClipboard(text, '번역 결과가 복사되었습니다! 📋');
});

/* ══════════════════════════════════════════════
   6. 표현 카드 렌더링
══════════════════════════════════════════════ */

// 현재 즐겨찾기 ID Set
let favorites = loadFavoriteIds();

/**
 * 언어 행 HTML 생성
 */
function makePhraseRow(lang, text) {
  return `
    <div class="phrase-row">
      <span class="lang-badge">${lang}</span>
      <span class="phrase-text">${escapeHtml(text)}</span>
      <button class="phrase-copy-btn" aria-label="${lang} 복사">📋</button>
    </div>
  `;
}

/**
 * 표현 카드 DOM 요소 생성
 */
function createPhraseCard(phrase, favId, inFavSection) {
  const isFaved = favorites.has(favId);

  const card = document.createElement('div');
  card.className    = 'phrase-card';
  card.dataset.favId = favId;

  card.innerHTML = `
    <div class="phrase-card-header">
      <span class="phrase-situation">${escapeHtml(phrase.situation)}</span>
      <button class="fav-btn" aria-label="즐겨찾기" title="${isFaved ? '즐겨찾기 해제' : '즐겨찾기 추가'}">
        ${isFaved ? '⭐' : '☆'}
      </button>
    </div>
    ${makePhraseRow('KO', phrase.ko)}
    ${makePhraseRow('ZH', phrase.zh)}
    ${makePhraseRow('JA', phrase.ja)}
  `;

  // 즐겨찾기 버튼
  card.querySelector('.fav-btn').addEventListener('click', () => {
    toggleFavorite(favId, phrase, card, inFavSection);
  });

  // 각 언어 복사 버튼
  card.querySelectorAll('.phrase-copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.closest('.phrase-row').querySelector('.phrase-text').textContent;
      copyToClipboard(text, '표현이 복사되었습니다! 📋');
    });
  });

  return card;
}

/**
 * 카테고리 표현 목록 렌더링
 */
function renderPhrases(category) {
  phraseList.innerHTML = '';
  (phrasesData[category] || []).forEach((phrase, index) => {
    phraseList.appendChild(createPhraseCard(phrase, `${category}-${index}`, false));
  });
}

/* ══════════════════════════════════════════════
   7. 탭 기능
══════════════════════════════════════════════ */
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    renderPhrases(tab.dataset.category);
  });
});

// 초기 렌더링
renderPhrases('greeting');

/* ══════════════════════════════════════════════
   8. 즐겨찾기
══════════════════════════════════════════════ */

/** localStorage에서 즐겨찾기 ID Set 로드 */
function loadFavoriteIds() {
  try {
    const raw = localStorage.getItem('favorites');
    return raw ? new Set(Object.keys(JSON.parse(raw))) : new Set();
  } catch { return new Set(); }
}

/** localStorage에서 즐겨찾기 전체 맵 로드 */
function loadFavoritesMap() {
  try {
    const raw = localStorage.getItem('favorites');
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

/** localStorage에 즐겨찾기 맵 저장 */
function saveFavoritesMap(map) {
  localStorage.setItem('favorites', JSON.stringify(map));
}

/** 즐겨찾기 추가 / 해제 토글 */
function toggleFavorite(favId, phrase, cardEl, inFavSection) {
  const map = loadFavoritesMap();
  const btn = cardEl.querySelector('.fav-btn');

  if (favorites.has(favId)) {
    // ── 해제
    favorites.delete(favId);
    delete map[favId];
    btn.textContent = '☆';
    btn.title = '즐겨찾기 추가';
    showToast('즐겨찾기에서 삭제했습니다.');

    if (inFavSection) {
      cardEl.remove();
    } else {
      const favCard = favoriteList.querySelector(`[data-fav-id="${favId}"]`);
      if (favCard) favCard.remove();
    }
  } else {
    // ── 추가
    favorites.add(favId);
    map[favId] = phrase;
    btn.textContent = '⭐';
    btn.title = '즐겨찾기 해제';
    showToast('즐겨찾기에 저장했습니다! ⭐');
    favoriteList.appendChild(createPhraseCard(phrase, favId, true));
  }

  saveFavoritesMap(map);
  updateFavEmpty();
}

/** 즐겨찾기 섹션 초기 렌더링 */
function renderFavorites() {
  const map = loadFavoritesMap();
  favoriteList.innerHTML = '';
  Object.entries(map).forEach(([id, phrase]) => {
    favoriteList.appendChild(createPhraseCard(phrase, id, true));
  });
  updateFavEmpty();
}

/** 즐겨찾기 비어있음 메시지 업데이트 */
function updateFavEmpty() {
  const isEmpty = favoriteList.children.length === 0;
  favEmpty.style.display   = isEmpty ? 'block' : 'none';
  clearFavBtn.style.display = isEmpty ? 'none'  : 'inline-flex';
}

// 즐겨찾기 전체 삭제
clearFavBtn.addEventListener('click', () => {
  if (!confirm('즐겨찾기를 모두 삭제할까요?')) return;
  favorites.clear();
  localStorage.removeItem('favorites');
  favoriteList.innerHTML = '';
  updateFavEmpty();
  document.querySelectorAll('.phrase-card .fav-btn').forEach(btn => {
    btn.textContent = '☆';
    btn.title = '즐겨찾기 추가';
  });
  showToast('즐겨찾기를 모두 삭제했습니다.');
});

// 페이지 로드 시 즐겨찾기 렌더링
renderFavorites();

/* ══════════════════════════════════════════════
   9. 토스트 알림
══════════════════════════════════════════════ */
let toastTimer = null;

function showToast(message, duration = 2200) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), duration);
}

/* ══════════════════════════════════════════════
   10. 클립보드 복사
══════════════════════════════════════════════ */
async function copyToClipboard(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    // 구형 브라우저 폴백
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(message);
  }
}

/* ══════════════════════════════════════════════
   11. XSS 방지: HTML 이스케이프
══════════════════════════════════════════════ */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');
}

console.log('✅ 한·중·일 유학생 학습 도우미 준비 완료');
console.log('💡 Ctrl+Enter (Mac: Cmd+Enter) 로 번역 실행');
