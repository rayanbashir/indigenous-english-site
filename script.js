/* ===== Mobile Nav Toggle ===== */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  /* ===== Accordion ===== */
  document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const body = item.querySelector(".accordion-body");

      const isOpen = item.classList.contains("open");

      // close all
      document.querySelectorAll(".accordion-item").forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".accordion-body").style.maxHeight = null;
      });

      // open clicked if it was closed
      if (!isOpen) {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  /* ===== Quiz ===== */
  document.querySelectorAll(".quiz-box").forEach((box) => {
    const options = box.querySelectorAll(".quiz-option");
    const feedback = box.querySelector(".quiz-feedback");
    let answered = false;

    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        if (answered) return;
        answered = true;

        const isCorrect = opt.dataset.correct === "true";

        if (isCorrect) {
          opt.classList.add("correct");
          if (feedback) {
            feedback.textContent = opt.dataset.feedback || "Correct!";
            feedback.className = "quiz-feedback show correct";
          }
        } else {
          opt.classList.add("incorrect");
          // highlight the correct answer
          options.forEach((o) => {
            if (o.dataset.correct === "true") o.classList.add("correct");
          });
          if (feedback) {
            feedback.textContent = opt.dataset.feedback || "Not quite — see the highlighted answer.";
            feedback.className = "quiz-feedback show incorrect";
          }
        }
      });
    });
  });
});
