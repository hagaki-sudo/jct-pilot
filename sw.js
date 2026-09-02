const CACHE_NAME = "jct-pilot-v8";
const SYSTEM_AUDIO = ["start-guide", "start-demo", "resume-demo", "voice-on"]
  .map((name) => `./audio/${name}.mp3`);
const ROUTE_AUDIO = Array.from({ length: 15 }, (_, index) =>
  [2000, 800, 300].map((distance) =>
    `./audio/hatsudai-yokohama-c2/${String(index).padStart(2, "0")}-${distance}.mp3`
  )
).flat();
const FILES = [
  "./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./favicon.svg",
  ...SYSTEM_AUDIO, ...ROUTE_AUDIO,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached ?? fetch(event.request)));
});
