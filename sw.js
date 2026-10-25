"use strict";
const CACHE_NAME = "plusminusplus-shell-v2";
const ROOT = new URL("./", self.location.href);
const INDEX = new URL("./index.html", ROOT).href;
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icons/icon-192.png", "./icons/icon-512.png"].map(p => new URL(p, ROOT).href);
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("plusminusplus-shell-") && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if(request.method !== "GET" || url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname)) return;
  if(request.mode === "navigate"){
    if(url.pathname !== ROOT.pathname && url.pathname !== new URL(INDEX).pathname) return;
    event.respondWith(fetch(request).then(async response => {
      if(response.ok) { const cache = await caches.open(CACHE_NAME); await cache.put(INDEX, response.clone()); }
      return response;
    }).catch(async () => (await caches.open(CACHE_NAME)).match(INDEX)));
  } else if(ASSETS.includes(url.href)) {
    event.respondWith(caches.open(CACHE_NAME).then(async cache => (await cache.match(request)) || fetch(request)));
  }
});
