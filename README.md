## 🎨 CSS Animation Playground

This project demonstrates different types of animations built with **raw HTML and CSS** — no JavaScript, no frameworks. Just clean, creative, and lightweight animations!

---

## 📂 Project Structure

<button id="openBtn">Upload</button>

<div id="dialog1" class="dialog hidden">
  <h2>What do you want to upload?</h2>
  <button class="selectBtn" data-type="short">Short</button>
  <button class="selectBtn" data-type="video">Video</button>
</div>

<div id="dialog2" class="dialog hidden">
  <h2>Upload a Short</h2>
  <input type="text" placeholder="Title" />
  <textarea placeholder="Description"></textarea>
  <input type="file" />
  <input type="file" placeholder="Thumbnail" />
  <select>
    <option>Category</option>
    <option>Music</option>
    <option>Education</option>
  </select>
  <button>Submit</button>
</div>





.dialog {
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: top 0.5s ease, scale 0.4s ease;
  z-index: 100;
}





.dialog.show {
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
}

.dialog.hidden {
  display: none;
}






document.getElementById('openBtn').onclick = function () {
  const dialog1 = document.getElementById('dialog1');
  dialog1.classList.remove('hidden');
  dialog1.classList.add('show');
};

document.querySelectorAll('.selectBtn').forEach(btn => {
  btn.onclick = function () {
    const dialog1 = document.getElementById('dialog1');
    const dialog2 = document.getElementById('dialog2');

    // Hide dialog 1
    dialog1.classList.remove('show');
    dialog1.classList.add('hidden');

    // Show dialog 2 with animation
    dialog2.classList.remove('hidden');
    setTimeout(() => {
      dialog2.classList.add('show');
    }, 100);
  };
})





Animation Idea (Optional - smooth transition):

To make dialog-2 grow from small to big, you can add:




.dialog {
  scale: 0.8;
  opacity: 0;
  transition: all 0.3s ease;
}

.dialog.show {
  scale: 1;
  opacity: 1;
}
