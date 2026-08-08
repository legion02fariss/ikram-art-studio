document.addEventListener("DOMContentLoaded", () => {
  // 1. Artwork Modal Setup
  const modal = document.getElementById("artworkModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const modalImg = document.getElementById("modalCardImg");
  const modalTitle = document.getElementById("modalCardTitle");
  const modalDesc = document.getElementById("modalCardDesc");
  const modalPrice = document.getElementById("modalCardPrice");
  const modalBuyBtn = document.getElementById("modalCardBuyBtn");

  const cards = document.querySelectorAll(".class-card");

  cards.forEach(card => {
    const img = card.querySelector(".class-image img");
    const title = card.querySelector("h3").innerText;
    const description = card.querySelector(".class-content > p").innerText;
    const price = card.querySelector(".price").innerText;
    const buyLink = card.querySelector(".card-footer a").href;

    if (img) {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modalTitle.innerText = title;
        modalDesc.innerText = description;
        modalPrice.innerText = price;
        modalBuyBtn.href = buyLink;
        modal.style.display = "flex";
      });
    }
  });

  const closeModal = () => {
    if (modal) modal.style.display = "none";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
});

// 2. Custom Commission WhatsApp Handler (Triggered directly by button click)
function sendCommissionToWhatsApp() {
  const nameInput = document.getElementById("comm-name");
  const phoneInput = document.getElementById("comm-phone");
  const sizeInput = document.getElementById("comm-size");
  const paletteInput = document.getElementById("comm-palette");
  const detailsInput = document.getElementById("comm-details");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const size = sizeInput ? sizeInput.value : "";
  const palette = paletteInput ? paletteInput.value.trim() : "";
  const details = detailsInput ? detailsInput.value.trim() : "";

  // Basic validation check
  if (!name || !phone || !details) {
    alert("Please fill in your Name, Phone Number, and Details before submitting!");
    return;
  }

  const message = `Hi Ikram! I would like to request a custom painting.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Preferred Size:* ${size}\n*Color Palette:* ${palette}\n*Details:* ${details}`;

  const whatsappUrl = `https://wa.me/212787986554?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in a new tab cleanly
  window.open(whatsappUrl, "_blank");
}