# Lungenkrebszentrum Baden—Zürich

Statische Vorschau-Website (Entwurf) für das gemeinsame Lungenkrebszentrum des
Kantonsspitals Baden und des Stadtspitals Zürich Triemli.

## Aufbau

Reines HTML, CSS und JavaScript, kein Build-Schritt. Direkt hostbar.

```
index.html          Seite (alle Abschnitte)
css/styles.css      Styles
js/main.js          Scroll- und Reveal-Logik
assets/             Bilder und Logos
logo/               Wortmarke als SVG
```

## Lokal ansehen

Ordner öffnen und `index.html` doppelklicken, oder ein kleiner Server:

```
python3 -m http.server 8000
```

Dann `http://localhost:8000` im Browser öffnen.

## Hosting

Komplett statisch, läuft ohne Anpassung auf GitHub Pages, Vercel oder Netlify.

## Hinweise (Entwurf)

- Die Texte stammen aus den Kundendokumenten (PPTX und Leitbild).
- Links und Kontaktangaben sind Platzhalter und müssen noch ergänzt werden.
