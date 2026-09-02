const ROUTES = [
  {
    id: "hatsudai-yokohama-c2",
    title: "初台南 → 横浜・川崎 → C2 → 富ヶ谷",
    shortTitle: "初台南発・指定周回ルート",
    road: "C2",
    direction: "中央環状線 内回り",
    loop: false,
    junctions: [
      { name: "富ヶ谷出口（通過）", lat: 35.66970, lon: 139.68810, road: "C2", direction: "中央環状線 内回り", turn: "↑", lane: "keep", instruction: "富ヶ谷出口へ出ず、本線を直進", signRoad: "C2", signText: "大井・湾岸線", destination: "C2 大井・湾岸線" },
      { name: "大井JCT", lat: 35.60627, lon: 139.75460, road: "C2", direction: "中央環状線 内回り", turn: "↑", lane: "keep", instruction: "「B 横浜」へ直進", signRoad: "B", signText: "横浜", destination: "B 横浜" },
      { name: "東海JCT", lat: 35.58920, lon: 139.75420, road: "B", direction: "湾岸線 西行き", turn: "↑", lane: "keep", instruction: "「B 空港中央・大黒ふ頭」へ直進", signRoad: "B", signText: "空港中央・大黒ふ頭", destination: "B 空港中央・大黒ふ頭" },
      { name: "本牧JCT", lat: 35.42380, lon: 139.67780, road: "B", direction: "湾岸線 西行き", turn: "↗", lane: "right", instruction: "「K3 横浜公園・保土ヶ谷バイパス」へ", signRoad: "K3", signText: "横浜公園・保土ヶ谷バイパス", destination: "K3 横浜公園・保土ヶ谷バイパス" },
      { name: "石川町JCT", lat: 35.43851, lon: 139.64270, road: "K3", direction: "狩場線", turn: "↖", lane: "left", instruction: "「K1 羽田・みなとみらい」へ", signRoad: "K1", signText: "羽田・みなとみらい\n出口168", destination: "K1 羽田・みなとみらい" },
      { name: "金港JCT", lat: 35.47070, lon: 139.62590, road: "K1", direction: "横羽線 上り", turn: "↑", lane: "keep", instruction: "「K1 羽田」へ直進", signRoad: "K1", signText: "羽田", destination: "K1 羽田" },
      { name: "大師JCT", lat: 35.53732, lon: 139.74130, road: "K1", direction: "横羽線 上り", turn: "↖", lane: "left", instruction: "「B 湾岸線・K6」へ", signRoad: "K6", signText: "B 湾岸線\n大師 出口152A", destination: "B 湾岸線・K6" },
      { name: "川崎浮島JCT", lat: 35.52030, lon: 139.78680, road: "K6", direction: "川崎線", turn: "↖", lane: "left", instruction: "まず首都高速、東京・横浜へ。続いてB東京へ", signRoad: "B", signText: "① 首都高速 東京・横浜\n② 東京", destination: "B 首都高速 東京・横浜 → B 東京" },
      { name: "葛西JCT", lat: 35.64507, lon: 139.86100, road: "B", direction: "湾岸線 東行き", turn: "↖", lane: "left", instruction: "「E4東北道・E6常磐道」へ", signRoad: "C2", signText: "E4 東北道・E6 常磐道", destination: "C2 E4東北道・E6常磐道" },
      { name: "堀切JCT", lat: 35.73890, lon: 139.83080, road: "C2", direction: "中央環状線 内回り", turn: "↑", lane: "keep", instruction: "「E4東北道・C2大宮」へ", signRoad: "C2", signText: "E4 東北道・大宮", destination: "C2 E4東北道・大宮" },
      { name: "小菅JCT", lat: 35.75405, lon: 139.82090, road: "C2", direction: "中央環状線 内回り", turn: "↖", lane: "left", instruction: "「E4東北道・C2大宮」へ", signRoad: "C2", signText: "E4 東北道・大宮", destination: "C2 E4東北道・大宮" },
      { name: "江北JCT", lat: 35.77710, lon: 139.75120, road: "C2", direction: "中央環状線 内回り", turn: "↙", lane: "left", instruction: "「C2東池袋・E1東名」へ", signRoad: "C2", signText: "東池袋・E1 東名", destination: "C2 東池袋・E1東名" },
      { name: "板橋JCT", lat: 35.76110, lon: 139.70480, road: "C2", direction: "中央環状線 内回り", turn: "↘", lane: "right", instruction: "「E20中央道・E1東名・C2」へ", signRoad: "C2", signText: "E20 中央道・E1 東名", destination: "C2 E20中央道・E1東名" },
      { name: "熊野町JCT", lat: 35.74070, lon: 139.70440, road: "C2", direction: "中央環状線 内回り", turn: "↙", lane: "left", instruction: "「E20中央道・E1東名・C2」へ", signRoad: "C2", signText: "E20 中央道・E1 東名", destination: "C2 E20中央道・E1東名" },
      { name: "富ヶ谷出口", lat: 35.66970, lon: 139.68810, road: "C2", direction: "中央環状線 内回り", turn: "↖", lane: "left", instruction: "「富ヶ谷 出口C22」へ", signRoad: "C22", signText: "富ヶ谷 出口", destination: "富ヶ谷 出口C22" },
    ],
  },
  {
    id: "c1-inner",
    title: "C1 都心環状線・内回り",
    shortTitle: "C1 内回り",
    road: "C1",
    direction: "都心環状線 内回り",
    junctions: [
      { name: "江戸橋JCT", lat: 35.68310, lon: 139.77562, turn: "↙", lane: "left", instruction: "左方向へ進み、C1を継続", destination: "銀座・浜崎橋方面" },
      { name: "京橋JCT", lat: 35.67545, lon: 139.77064, turn: "↖", lane: "left", instruction: "左寄りを進み、C1を継続", destination: "銀座・浜崎橋方面" },
      { name: "浜崎橋JCT", lat: 35.65371, lon: 139.75767, turn: "↗", lane: "right", instruction: "右方向、C1を継続", destination: "芝公園・一ノ橋方面" },
      { name: "一ノ橋JCT", lat: 35.65215, lon: 139.74328, turn: "↗", lane: "right", instruction: "右方向、C1を継続", destination: "谷町・霞が関方面" },
      { name: "谷町JCT", lat: 35.66631, lon: 139.73946, turn: "↖", lane: "left", instruction: "左方向、C1を継続", destination: "霞が関・三宅坂方面" },
      { name: "三宅坂JCT", lat: 35.67803, lon: 139.74406, turn: "↗", lane: "right", instruction: "右方向、C1を継続", destination: "代官町・竹橋方面" },
      { name: "竹橋JCT", lat: 35.69017, lon: 139.75754, turn: "↘", lane: "right", instruction: "右方向、C1を継続", destination: "神田橋・江戸橋方面" },
      { name: "神田橋JCT", lat: 35.68963, lon: 139.76654, turn: "↘", lane: "right", instruction: "右寄りを進み、C1を継続", destination: "江戸橋・銀座方面" },
    ],
  },
  {
    id: "c1-outer",
    title: "C1 都心環状線・外回り",
    shortTitle: "C1 外回り",
    road: "C1",
    direction: "都心環状線 外回り",
    junctions: [
      { name: "神田橋JCT", lat: 35.68963, lon: 139.76654, turn: "↖", lane: "left", instruction: "左寄りを進み、C1を継続", destination: "竹橋・代官町方面" },
      { name: "竹橋JCT", lat: 35.69017, lon: 139.75754, turn: "↙", lane: "left", instruction: "左方向、C1を継続", destination: "三宅坂・霞が関方面" },
      { name: "三宅坂JCT", lat: 35.67803, lon: 139.74406, turn: "↙", lane: "left", instruction: "左方向、C1を継続", destination: "谷町・一ノ橋方面" },
      { name: "谷町JCT", lat: 35.66631, lon: 139.73946, turn: "↘", lane: "right", instruction: "右方向、C1を継続", destination: "一ノ橋・芝公園方面" },
      { name: "一ノ橋JCT", lat: 35.65215, lon: 139.74328, turn: "↙", lane: "left", instruction: "左方向、C1を継続", destination: "浜崎橋・銀座方面" },
      { name: "浜崎橋JCT", lat: 35.65371, lon: 139.75767, turn: "↖", lane: "left", instruction: "左方向、C1を継続", destination: "汐留・銀座方面" },
      { name: "京橋JCT", lat: 35.67545, lon: 139.77064, turn: "↗", lane: "right", instruction: "右寄りを進み、C1を継続", destination: "江戸橋・神田橋方面" },
      { name: "江戸橋JCT", lat: 35.68310, lon: 139.77562, turn: "↗", lane: "right", instruction: "右方向へ進み、C1を継続", destination: "神田橋・竹橋方面" },
    ],
  },
];

const state = {
  route: ROUTES[0],
  mode: "standby",
  index: 0,
  watchId: null,
  demoTimer: null,
  demoDistance: 2400,
  sound: true,
  spokenThresholds: new Set(),
  lastPosition: null,
  hasInitialMatch: false,
  activeUtterance: null,
  speechUnlocked: false,
  audioUnlocked: false,
};

const el = Object.fromEntries([
  "soundToggle", "modeLabel", "accuracyLabel", "liveDot", "currentRoad",
  "currentDirection", "distanceNumber", "distanceUnit", "junctionName",
  "instructionText", "destinationText", "turnSymbol", "laneArrow", "heroCard",
  "routeTitle", "progressCount", "routeTrack", "afterNext", "routeSelect",
  "gpsButton", "demoButton", "stopButton", "toast", "signShield", "audioPlayer",
].map((id) => [id, document.getElementById(id)]));

function init() {
  ROUTES.forEach((route) => {
    const option = document.createElement("option");
    option.value = route.id;
    option.textContent = route.title;
    el.routeSelect.append(option);
  });
  el.routeSelect.addEventListener("change", changeRoute);
  el.gpsButton.addEventListener("click", startGps);
  el.demoButton.addEventListener("click", toggleDemo);
  el.stopButton.addEventListener("click", stopGuidance);
  el.soundToggle.addEventListener("click", toggleSound);
  render();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function changeRoute() {
  stopGuidance(false);
  state.route = ROUTES.find((route) => route.id === el.routeSelect.value) ?? ROUTES[0];
  state.index = 0;
  state.hasInitialMatch = false;
  render();
}

function startGps() {
  if (!("geolocation" in navigator)) {
    notify("このブラウザでは位置情報を利用できません。デモ走行をお試しください。");
    return;
  }
  stopGuidance(false);
  state.mode = "gps";
  state.hasInitialMatch = false;
  state.spokenThresholds.clear();
  renderStatus("GPS", "現在地を取得しています");
  el.stopButton.hidden = false;
  unlockAudio("start-guide");
  state.watchId = navigator.geolocation.watchPosition(onPosition, onGpsError, {
    enableHighAccuracy: true,
    maximumAge: 1000,
    timeout: 12000,
  });
}

function onPosition(position) {
  const point = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
    heading: position.coords.heading,
  };
  state.lastPosition = point;
  const match = matchNextJunction(point);
  state.index = match.index;
  renderDistance(match.distance);
  renderStatus("GPS LIVE", `精度 ±${Math.round(position.coords.accuracy)}m`);
  renderJunction();
  speakForDistance(match.distance);
}

function onGpsError(error) {
  const messages = {
    1: "位置情報が許可されていません。ブラウザの設定をご確認ください。",
    2: "現在地を取得できませんでした。",
    3: "位置情報の取得がタイムアウトしました。",
  };
  notify(messages[error.code] ?? "位置情報でエラーが発生しました。");
  stopGuidance();
}

function matchNextJunction(point) {
  const distances = state.route.junctions.map((jct) => haversine(point, jct));
  if (!state.hasInitialMatch) {
    state.hasInitialMatch = true;
    const nearestIndex = distances.indexOf(Math.min(...distances));
    return { index: nearestIndex, distance: distances[nearestIndex] };
  }

  let nextIndex = state.index;
  const canAdvance = state.route.loop !== false || state.index < state.route.junctions.length - 1;
  const followingIndex = canAdvance ? (state.index + 1) % state.route.junctions.length : state.index;
  if (canAdvance && distances[state.index] < 350) nextIndex = followingIndex;
  else if (canAdvance && distances[followingIndex] + 500 < distances[state.index]) nextIndex = followingIndex;
  return { index: nextIndex, distance: distances[nextIndex] };
}

function toggleDemo() {
  if (state.mode === "demo") {
    pauseDemo();
    return;
  }
  if (state.mode === "paused") {
    state.mode = "demo";
    el.demoButton.querySelector("strong").textContent = "一時停止";
    el.demoButton.querySelector(".button-icon").textContent = "Ⅱ";
    renderStatus("DEMO LIVE", "時速 約65kmで模擬走行中");
    unlockAudio("resume-demo");
    state.demoTimer = window.setInterval(stepDemo, 250);
    return;
  }
  stopGuidance(false);
  state.mode = "demo";
  state.index = 0;
  state.hasInitialMatch = true;
  state.demoDistance = 2400;
  state.spokenThresholds.clear();
  el.stopButton.hidden = false;
  el.demoButton.querySelector("strong").textContent = "一時停止";
  el.demoButton.querySelector(".button-icon").textContent = "Ⅱ";
  renderStatus("DEMO LIVE", "時速 約65kmで模擬走行中");
  renderJunction();
  renderDistance(state.demoDistance);
  unlockAudio("start-demo");
  state.demoTimer = window.setInterval(stepDemo, 250);
}

function pauseDemo() {
  clearInterval(state.demoTimer);
  state.demoTimer = null;
  state.mode = "paused";
  el.demoButton.querySelector("strong").textContent = "デモ再開";
  el.demoButton.querySelector(".button-icon").textContent = "▶";
  renderStatus("PAUSED", "デモ走行を一時停止中");
}

function stepDemo() {
  state.demoDistance -= 45;
  if (state.demoDistance <= 0) {
    if (state.route.loop === false && state.index === state.route.junctions.length - 1) {
      pauseDemo();
      renderDistance(0);
      notify("指定ルートの終点、富ヶ谷出口です");
      return;
    }
    state.index = (state.index + 1) % state.route.junctions.length;
    state.demoDistance = 1500 + Math.round(Math.random() * 1200);
    state.spokenThresholds.clear();
    renderJunction();
  }
  renderDistance(state.demoDistance);
  speakForDistance(state.demoDistance);
}

function stopGuidance(showToast = true) {
  if (state.watchId !== null) navigator.geolocation.clearWatch(state.watchId);
  clearInterval(state.demoTimer);
  window.speechSynthesis?.cancel();
  el.audioPlayer.pause();
  el.audioPlayer.currentTime = 0;
  state.watchId = null;
  state.demoTimer = null;
  state.mode = "standby";
  state.index = 0;
  state.hasInitialMatch = false;
  state.spokenThresholds.clear();
  el.stopButton.hidden = true;
  el.demoButton.querySelector("strong").textContent = "デモ走行";
  el.demoButton.querySelector(".button-icon").textContent = "▶";
  if (showToast) notify("走行案内を終了しました");
  render();
}

function toggleSound() {
  state.sound = !state.sound;
  el.soundToggle.setAttribute("aria-pressed", String(state.sound));
  if (!state.sound) {
    window.speechSynthesis?.cancel();
    el.audioPlayer.pause();
    el.audioPlayer.currentTime = 0;
    state.activeUtterance = null;
  } else {
    unlockAudio("voice-on");
  }
  notify(state.sound ? "音声案内をオンにしました" : "音声案内をオフにしました");
}

function unlockAudio(key) {
  if (!state.sound) return;
  playRecordedAudio(key, true);
}

function playRecordedAudio(key, showError = false) {
  if (!state.sound || !el.audioPlayer) return false;
  el.audioPlayer.pause();
  el.audioPlayer.src = `./audio/${key}.mp3`;
  el.audioPlayer.currentTime = 0;
  const playback = el.audioPlayer.play();
  if (playback?.then) {
    playback
      .then(() => { state.audioUnlocked = true; })
      .catch(() => {
        if (showError) notify("音声ファイルを再生できません。公開先のaudioフォルダをご確認ください");
      });
  } else {
    state.audioUnlocked = true;
  }
  return true;
}

function unlockSpeech(message) {
  if (!state.sound) return;
  const started = speakText(message);
  if (started) state.speechUnlocked = true;
}

function speakText(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    notify("この端末では音声読み上げを利用できません");
    return false;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 1.02;
  const japaneseVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang?.toLowerCase().startsWith("ja"));
  if (japaneseVoice) utterance.voice = japaneseVoice;

  utterance.onstart = () => {
    state.speechUnlocked = true;
  };
  utterance.onend = () => {
    if (state.activeUtterance === utterance) state.activeUtterance = null;
  };
  utterance.onerror = (event) => {
    if (state.activeUtterance === utterance) state.activeUtterance = null;
    if (!['canceled', 'interrupted'].includes(event.error)) {
      notify("音声を再生できませんでした。VOICEを押して再試行してください");
    }
  };

  // iOS Safariで読み上げ完了前に破棄されないよう参照を保持する。
  state.activeUtterance = utterance;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  return true;
}

function speakForDistance(distance) {
  const threshold = [2000, 800, 300].find((value) => distance <= value && !state.spokenThresholds.has(value));
  if (!threshold || !state.sound) return;
  state.spokenThresholds.add(threshold);
  if (state.route.id === "hatsudai-yokohama-c2") {
    const clip = `hatsudai-yokohama-c2/${String(state.index).padStart(2, "0")}-${threshold}`;
    playRecordedAudio(clip, true);
    return;
  }
  if (!("speechSynthesis" in window)) return;
  const jct = state.route.junctions[state.index];
  const phrase = threshold >= 1000 ? `${threshold / 1000}キロ先` : `${threshold}メートル先`;
  const guidance = jct.signText ? jct.instruction : `${jct.instruction}。${jct.destination}方面です`;
  speakText(`${phrase}、${jct.name}。${guidance}。`);
}

function render() {
  el.currentRoad.textContent = state.route.road;
  el.currentDirection.textContent = state.route.direction;
  el.routeTitle.textContent = state.route.shortTitle;
  el.routeSelect.value = state.route.id;
  renderStatus("STANDBY", "位置情報を待っています");
  renderJunction();
  if (state.mode === "standby") {
    el.distanceNumber.textContent = "—";
    el.distanceUnit.textContent = "km";
  }
}

function renderJunction() {
  const jct = state.route.junctions[state.index];
  el.currentRoad.textContent = jct.road ?? state.route.road;
  el.currentDirection.textContent = jct.direction ?? state.route.direction;
  el.junctionName.textContent = jct.name;
  el.instructionText.textContent = jct.instruction;
  el.destinationText.textContent = jct.destination;
  el.signShield.textContent = jct.signRoad ?? jct.road ?? state.route.road;
  el.destinationText.textContent = jct.signText ?? jct.destination;
  el.turnSymbol.textContent = jct.turn;
  el.laneArrow.textContent = jct.lane === "left" ? "↖" : jct.lane === "right" ? "↗" : "↑";
  el.heroCard.classList.toggle("alert", state.mode !== "standby" && state.demoDistance <= 500);
  el.progressCount.textContent = `${state.index + 1} / ${state.route.junctions.length}`;
  const isFinal = state.route.loop === false && state.index === state.route.junctions.length - 1;
  const next = state.route.junctions[(state.index + 1) % state.route.junctions.length];
  el.afterNext.textContent = isFinal ? "ルート終了" : `${next.name}・${next.destination}`;
  renderTrack();
}

function renderTrack() {
  el.routeTrack.replaceChildren();
  state.route.junctions.forEach((jct, index) => {
    const node = document.createElement("span");
    node.className = `track-node${index < state.index ? " complete" : ""}${index === state.index ? " current" : ""}`;
    const label = document.createElement("label");
    label.textContent = jct.name.replace("JCT", "");
    node.append(label);
    el.routeTrack.append(node);
  });
}

function renderDistance(meters) {
  if (meters >= 1000) {
    el.distanceNumber.textContent = (meters / 1000).toFixed(1);
    el.distanceUnit.textContent = "km";
  } else {
    el.distanceNumber.textContent = Math.max(0, Math.round(meters / 10) * 10);
    el.distanceUnit.textContent = "m";
  }
  el.heroCard.classList.toggle("alert", meters <= 500);
}

function renderStatus(mode, detail) {
  el.modeLabel.textContent = mode;
  el.accuracyLabel.textContent = detail;
  el.liveDot.parentElement.classList.toggle("active", state.mode === "gps" || state.mode === "demo");
}

function haversine(a, b) {
  const radius = 6371000;
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLon = (b.lon - a.lon) * rad;
  const value = Math.sin(dLat / 2) ** 2
    + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * radius * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

let toastTimer;
function notify(message) {
  clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("show");
  toastTimer = setTimeout(() => el.toast.classList.remove("show"), 3200);
}

init();
