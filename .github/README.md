# Beemarks

A free, GoodNotes-style note-taking web app made by students, for students. Type, handwrite with a stylus, embed photos, pick your paper, and attach files or 3D models, all in one place. Built with plain HTML, CSS, and JavaScript, no build step and no backend.

## Features

- **Rich text editing** with headings, bold, italic, underline, text color, highlight, and inline images placed right at the cursor
- **12 fonts** (Montserrat, Inter, Poppins, Nunito, Quicksand, Comic Neue, Caveat, Pacifico, Playfair Display, Lora, Merriweather, Roboto Mono) and **11 font sizes** (10px to 48px)
- **Handwriting and drawing** on the same page as your typed text, with pen and eraser tools, color and size controls, undo, and pressure sensitivity for stylus input (Apple Pencil, Surface Pen, and similar)
- **Paper styles**: plain, lined, grid, dot grid, kawaii, or your own uploaded background image, with editable line and page colors
- **Subjects**: default school subjects (Math, Science, English, History, Computer Science, Art, plus Personal and Reminders) and the ability to add your own. Your most-used and most-recent subjects float to the top.
- **Search and filter** across note titles, note text, and subjects
- **Attachments**: upload images, PDFs, documents, or any other file from a laptop, iPad, or phone
- **Interactive 3D model preview** for `.glb`, `.gltf`, `.obj`, and `.stl` files (drag to orbit, scroll or pinch to zoom)
- **Touch and stylus friendly**: large tap targets and Pointer Events for unified mouse, touch, and pen input
- **Large local storage** using IndexedDB, with up to 50MB per attached file

## Getting started

No install is required.

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (or serve the folder with any static server).
4. Open the address it gives you (usually `http://127.0.0.1:5500`).

You need an internet connection when loading the app, because the editor, 3D viewer, icons, and fonts are loaded from CDNs.

## How to use

- Click **Add** to open a new note, give it a title, and start typing.
- Click the **pen icon** in the top bar to turn on drawing. Your stylus or finger then draws on top of the page. Click it again to go back to typing. Text and ink stay on the same page.
- Use the **image icon** in the text toolbar to place a photo inline at your cursor.
- Pick a paper style and colors from the row above the toolbar.
- Use **Add file or 3D model** at the bottom of the page for attachments.
- Choose a subject (or type a new one) before saving.
- Click any note card on the home screen to reopen and edit it.

## Tech stack

- HTML, CSS, and vanilla JavaScript
- [Quill 1.3.7](https://quilljs.com/) for rich text editing
- [Three.js r128](https://threejs.org/) with GLTFLoader, OBJLoader, STLLoader, and OrbitControls for 3D previews
- [Font Awesome 6.4](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for the font library
- IndexedDB for storage

## Project structure

```
index.html   page markup and library includes
style.css    all styling
script.js    app logic: storage, editor, drawing, paper styles, attachments, 3D viewer
README.md    this file
```

## Data and privacy

Everything is stored locally in your own browser using IndexedDB. Nothing is uploaded to a server. Because of this:

- Notes are tied to the browser and the address you used them on. Opening the app at a different URL, in a different browser, or on a different device starts with an empty notebook.
- Clearing your browser's site data will delete your notes.

## Known limitations

- Ink is saved as a single image that matches the page size at the time of saving. If you later add or remove a lot of text, older ink can drift out of line with the words underneath it.
- `.gltf` files that depend on separate texture or `.bin` files will not load. Use the self-contained `.glb` format instead.
- Files over 50MB are rejected.
- There is no sync between devices or accounts yet.

## Roadmap ideas

- Export and import notes as a backup file
- Sync across devices
- Page templates and multi-page notebooks
- Folders and nested subjects

## License

Add a license of your choice here, for example MIT.
