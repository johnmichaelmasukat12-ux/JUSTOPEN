# Envelope Message

Website na may sobre, Buksan na button, at sulat sa loob. May background music.

## Mga file
- `index.html` – istruktura ng page
- `style.css` – kulay at animation (sobreng lumang papel na may twine, bulaklak, at wax seal; vinyl na background)
- `script.js` – **dito mo babaguhin ang sulat at music** (nasa taas ng file ang `CONFIG`)
- `assets/background.jpg` – background na larawan

## Paano baguhin ang sulat
Buksan ang `script.js` at i-edit ang `title` at `message` sa `CONFIG`.

## Paano baguhin ang music
1. Ilagay ang mp3 mo sa folder na `assets/` (hal. `assets/music.mp3`).
2. Sa `script.js`, gawing `musicFile: "assets/music.mp3"`.

Tandaan: may copyright ang karamihan ng kanta. Kung pampubliko ang GitHub repo o page mo, gumamit ng musikang pwede mong i-share.

## Paano i-upload sa GitHub at gawing website
1. Gumawa ng bagong repository sa GitHub.
2. I-upload ang lahat ng file at folder (ang laman mismo ng folder na ito).
3. Pumunta sa **Settings > Pages**, piliin ang branch na `main` at folder na `/ (root)`, tapos **Save**.
4. Pagkatapos ng ilang minuto, may link na ang website mo.

Puwede ring buksan ang `index.html` sa browser para masubukan bago i-upload.

## Kulay
Nasa taas ng `style.css` ang mga kulay (`--env`, `--env-dark`, `--flap`) kung gusto mong palitan ang burgundy.
