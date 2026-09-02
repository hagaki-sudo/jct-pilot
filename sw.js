const CACHE_NAME = "jct-pilot-v10";
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
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const isAppShell =
    url.origin === self.location.origin &&
    (event.request.mode === "navigate" || /\.(?:html|js|css|webmanifest)$/.test(url.pathname));

  if (isAppShell) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached ?? fetch(event.request)));
});
