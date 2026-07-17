// CV Data
const cvData = {
  billboard: {
    title: "Kshitij Prakash Pawar",
    category: "Astrophysicist & Educator",
    institution: "Collaborating with Dr. Šarūnas Mikolaitis & Dr. María Benito",
    date: "2026 Season",
    pi: "",
    match: "100% Match",
    duration: "Special Series",
    rating: "ALL",
    tags: ["Astrophysics", "Spectroscopy", "Galactic Archaeology", "Astronomy Educator", "Python"],
    summary: "I'm an astrophysicist building stellar property software with Dr. Šarūnas Mikolaitis and modeling Milky Way rotation curves with Dr. María Benito. I also teach astronomy to 1,000+ students and train asteroid hunters.",
    bullets: [
      "I'm an astrophysicist working with Dr. Šarūnas Mikolaitis on software that figures out a star's properties just from its light. The method: generate synthetic spectra with Turbospectrum and MARCS model atmospheres, then let a χ² minimization routine hunt through the grid until it finds the closest match to the real, observed spectrum. In practice it's teaching a machine to recognize a star it's never seen before.",
      "I also work with Dr. María Benito, modeling the Milky Way's rotation curve with Gaia and APOGEE data, trying to pin down how dark matter is spread through the galaxy.",
      "The other half of my work is teaching. For three years now I've taught astronomy to over 1,000 students, Grades III through XI, across India and the UAE, with Navars Edutech. Every unit of theory gets paired with something you can actually do: a DIY kit, a live demo, a night out with a telescope.",
      "I trained a batch of students in asteroid detection using Astrometrica, and a few of them went on to spot potential candidates entirely on their own, still one of my favorite things that's come out of this job.",
      "I've mentored 150+ student projects for science exhibitions and spoken on science communication at SCAI (ASI) and MPCST's Mahakala symposium."
    ],
    image: "assets/slideshow/slide1.jpg",
    cardImage: "assets/slideshow/slide1.jpg"
  },
  research: [
    {
      id: "res-vilnius",
      title: "Stellar Abundance Measurement",
      institution: "Vilnius University, Lithuania",
      date: "Oct 2025 - Present",
      pi: "Dr. Šarūnas Mikolaitis",
      match: "98% Match",
      rating: "A",
      tags: ["Stellar Atmospheres", "Turbospectrum", "MARCS", "Automation", "Python"],
      bullets: [
        "Developing an automatic abundance measurement software using Turbospectrum (TS_NLTE) with MARCS model atmospheres.",
        "Validated TS_NLTE setup by running and verifying official demo scripts for output consistency.",
        "Studied the MARCS stellar atmosphere grid; implementing interpolation routines to generate atmosphere models for arbitrary stellar parameters.",
        "Automated optimization of spectral broadening parameters (R and v sin i) to match observed Arcturus spectra with TS_NLTE synthetic spectra.",
        "Built a χ² minimization routine comparing a grid of synthetic spectra at varying elemental abundances against observed spectra to determine best-fit abundance values."
      ],
      image: "assets/stellar_abundance.png"
    },
    {
      id: "res-tartu",
      title: "Milky Way Dynamical Model",
      institution: "Tartu Observatory, Estonia",
      date: "Oct 2023 - Present",
      pi: "Dr. María Benito",
      match: "99% Match",
      rating: "A",
      tags: ["Galactic Dynamics", "Stellar Populations", "APOGEE", "Gaia Tools", "GMM"],
      bullets: [
        "Developing a dynamical model of the Milky Way to compare predicted and observed rotation curves.",
        "Gained experience with APOGEE spectroscopy and Gaia astrometric data.",
        "Converted heliocentric astrometric solutions into Galactocentric cylindrical coordinates using gaia-tools.",
        "Applied Gaussian Mixture Models (GMM) to separate stellar populations into thin (low-α) and thick (high-α) disk components.",
        "Transitioned to computational Galactic Archaeology; currently implementing GalCEM to model the Milky Way’s gas accretion history."
      ],
      image: "assets/milky_way_rotation_curve.png"
    },
    {
      id: "res-iia",
      title: "Quasar Spectra & Dark Galaxies",
      institution: "Indian Institute of Astrophysics, Bangalore",
      date: "Oct 2022 - May 2023",
      pi: "Dr. Ravi Joshi",
      match: "96% Match",
      rating: "A",
      tags: ["Quasar Spectra", "SDSS", "Emission Lines", "Templates", "Python"],
      bullets: [
        "Analyzed quasar spectra from SDSS to identify emission lines in foreground galaxies, providing insights into ionized gas content, star formation, and galaxy evolution.",
        "Co-developed a Python pipeline to identify emission lines in spectra of dark galaxies from the SDSS dataset.",
        "Created and applied [O II] and [O III] templates on spectral data, enhancing emission line detection accuracy.",
        "Manually reviewed algorithm results to minimize false detections, ensuring robust and reliable outcomes."
      ],
      image: "assets/quasar_spectra.jpg"
    },
    {
      id: "res-aries",
      title: "Sunspot Activity Prediction",
      institution: "Aryabhatta Research Institute (ARIES), Nainital",
      date: "June 2022",
      pi: "Mr. Pawan Kumar",
      match: "95% Match",
      rating: "A",
      tags: ["Sunspots", "Machine Learning", "Solar Cycle", "Python", "Data Viz"],
      bullets: [
        "Developed a machine learning model in Python to predict sunspot activity using statistical and ML libraries.",
        "Analyzed historical sunspot data, identifying trends and patterns to enhance model accuracy.",
        "Applied data visualization techniques to communicate prediction insights in support of solar cycle studies."
      ],
      image: "assets/sunspot_prediction.png"
    }
  ],
  work: [
    {
      id: "work-navars",
      title: "Senior Astronomy Educator",
      institution: "Navars Edutech",
      date: "2023 - Present",
      match: "97% Match",
      rating: "ALL",
      tags: ["Teaching", "Astrometrica", "Space News", "Observational Astronomy"],
      bullets: [
        "Taught astronomy to 1,000+ students across Grades III–XI at 7 schools across India and UAE, combining in-person sessions with online cohorts.",
        "Built lessons around an experiential model where every theory unit was followed by a hands-on activity: a DIY kit, a live demo, or an observation exercise.",
        "Trained students in asteroid detection using Astrometrica, contributing to the identification of 2 potential asteroid candidates in 2024.",
        "Conducted solar observation workshops and night sky sessions, including safe telescope handling, and ran astronomy summer camps across multiple schools.",
        "Coordinated space-themed competitions and mentored 150+ student projects across science exhibitions, building research and presentation skills.",
        "Built 3 web tools for school use covering live space news, upcoming competitions, and a nightly sky guide, and edited video content for online classes."
      ],
      image: "assets/slideshow/slide1.jpg"
    },
    {
      id: "work-physics-tutor",
      title: "Physics Tutor",
      institution: "Vijay Coaching Center / Independent",
      date: "2020 - 2022",
      match: "92% Match",
      rating: "ALL",
      tags: ["Physics", "Tutoring", "11th & 12th Grade", "Exam Prep", "Experiential Learning"],
      bullets: [
        "<strong>11th Grade Physics Teacher, Vijay Coaching Center</strong><br>Taught physics to a batch of 10 eleventh grade students using an experiential and hands on approach that built strong conceptual understanding, resulting in every student scoring above 70. Designed and set question papers for regular tests, conducted them, and personally evaluated every answer sheet to track progress.",
        "<strong>Private Tutor, 12th Grade Physics</strong><br>Delivered individualized instruction to a 12th grade student, covering the complete Maharashtra State Board physics syllabus over the academic year, resulting in a score of 85 out of 100 in the board exam. Tailored lesson plans to his learning pace, with focused preparation on exam heavy topics."
      ],
      image: "assets/physics_tutor.jpg"
    }
  ],
  education: [
    {
      id: "edu-msc",
      title: "M.Sc. in Physics (Astrophysics)",
      institution: "Fergusson College, Pune",
      date: "May 2023",
      match: "CGPA 7.89",
      rating: "ALL",
      tags: [],
      bullets: [
        "Master of Science degree focusing on Astronomy & Astrophysics and Cosmology.",
        "CGPA: 7.89 / 10",
        "Relevant Coursework: Classical Mechanics, Astronomy & Astrophysics, Cosmology, Statistical Physics, Electromagnetism & Special Theory of Relativity, Introduction to Probability, Nuclear & Particle Physics, Optics, Quantum Mechanics."
      ],
      image: "assets/astronomy_thumbnail.png"
    },
    {
      id: "edu-bsc",
      title: "B.Sc. in Physics",
      institution: "Ramnarain Ruia College, Mumbai",
      date: "May 2021",
      match: "CGPA 9.60",
      rating: "ALL",
      tags: [],
      bullets: [
        "Bachelor of Science degree in Physics.",
        "CGPA: 9.6 / 10",
        "Relevant Coursework: Classical Mechanics, Optics & Thermodynamics, Nuclear Physics & Quantum Mechanics, Mathematical Physics, Electronics & Electricity, Applied Physics, Statistical Physics, Solid State Physics, Atomic & Molecular Physics, Electrodynamics, Special Theory of Relativity."
      ],
      image: "assets/physics_thumbnail.png"
    }
  ],
  achievements: [
    {
      id: "ach-asteroid",
      title: "Asteroid Candidate Discovery",
      institution: "G.D. Goenka Public School",
      date: "2024",
      match: "Award Winning",
      rating: "ALL",
      tags: ["Astrometrica", "Asteroid Detection", "Mentorship", "Citizen Science"],
      bullets: [
        "Mentored Grade VIII students in using Astrometrica for asteroid detection.",
        "Four of those students went on to identify potential asteroid candidates independently."
      ],
      image: "assets/asteroid_discovery.png"
    },
    {
      id: "ach-mentor",
      title: "Best Student Mentorship Award",
      institution: "National Science Day",
      date: "2024",
      match: "Award Winning",
      rating: "ALL",
      tags: ["Award", "Mentorship", "Science Fair", "Public Engagement"],
      bullets: [
        "Recognised for outstanding mentorship during National Science Day activities.",
        "Guided students in developing and presenting original science projects to a public audience."
      ],
      image: "assets/student_mentorship.png"
    }
  ],
  conferences: [
    {
      id: "conf-satellite",
      title: "Satellite Making Workshop (1U Cube)",
      institution: "MPCST, 2026",
      date: "2026",
      match: "Talk",
      rating: "PG",
      tags: ["Satellite Design", "CubeSat", "Weather Satellite"],
      bullets: [
        "Kshitij Pawar, Sumit Yadav, 'Workshop on \"Satellite Making (1U Cube Weather Satellite)\"', International Conference on Mahakala: The Master of Time, Madhya Pradesh Council of Science and Technology (MPCST, 2026)."
      ],
      image: "assets/satellite_workshop.jpg"
    },
    {
      id: "conf-deepfakes",
      title: "From Deepfakes to Deep Space",
      institution: "Astronomical Society of India (ASI)",
      date: "2026",
      match: "Presentation",
      rating: "PG",
      tags: ["Communicating Astronomy", "Deepfakes", "Science Outreach"],
      bullets: [
        "Bhakti Mithagri, Kshitij Pawar, 'From Deepfakes to Deep space', Symposium for Communicating Astronomy in India, (SCAI-26), Astronomical Society of India (ASI, 2026)."
      ],
      image: "assets/slideshow/slide4.jpg"
    },
    {
      id: "conf-gamma",
      title: "Compton Gamma-Ray Successor",
      institution: "Dark Sky Preservation Conf.",
      date: "2023",
      match: "Presentation",
      rating: "PG",
      tags: ["Gamma-Ray Observatory", "AstronEra", "Space Telescopes"],
      bullets: [
        "Bhakti Mithagri, Kshitij Pawar, 'An Indian Successor to the Compton Gamma-Ray Observatory', International Dark Sky Preservation And Conservation Conference 2023, AstronEra."
      ],
      image: "assets/gamma_ray_successor.jpg"
    }
  ],
  skills: [
    {
      id: "skill-main",
      title: "Technical Skills",
      institution: "Core Competencies",
      date: "2026",
      match: "100% Fit",
      rating: "Expert",
      tags: ["Python", "Astropy", "Astrometrica", "LaTeX"],
      bullets: [
        "<strong>Programming:</strong> Python",
        "<strong>Operating Systems:</strong> Microsoft Windows, Linux",
        "<strong>Python Modules:</strong> Astropy, NumPy, Matplotlib",
        "<strong>Development Tools:</strong> LaTeX, Canva, Microsoft Office, Antigravity, Jupyter Notebook",
        "<strong>Planetarium & Astro Software:</strong> Stellarium, Celestia, Virtual Moon Atlas, Astrometrica",
        "<strong>Soft Skills:</strong> Problem Solving, Critical Thinking, Communication, Teamwork",
        "<strong>Languages:</strong> Marathi, Hindi, English",
        "<strong>Other Interests:</strong> Video Games, Music, Marathi Literature, Designing"
      ],
      image: "assets/technical_skills.png"
    }
  ],
  certificates: [
    {
      id: "cert-main",
      title: "Course Certificates",
      institution: "Professional Development",
      date: "2021 - 2023",
      match: "100% Completed",
      rating: "ALL",
      tags: ["Astrophysics", "ISRO", "IUCAA", "CFD", "Matlab"],
      bullets: [
        "<strong>Astro 101: Black Holes</strong> (Coursera / Online Course) — Studied gravity wells, event horizons, Hawking radiation, and the astrophysical signatures of black holes.",
        "<strong>Planetary Exploration: Going Beyond</strong> (Indian Planetary Association - IPSA) — Workshop on planetary science, space missions, and solar system exploration.",
        "<strong>Aditya L-1 Science Support Cell</strong> (ARIES-ISRO) — Workshop studying solar physics, ISRO instrument data structures, and solar observation methodologies.",
        "<strong>Summer School in Astronomy & Astrophysics</strong> (IUCAA, Pune) — Introductory summer school at the prestigious Inter-University Centre for Astronomy and Astrophysics.",
        "<strong>Photonics Using Matlab</strong> (MIT World Peace University, Pune) — Hands-on training on photonics applications and modeling using Matlab.",
        "<strong>HPC for CFD Applications</strong> (IIT Bombay) — Training on High-Performance Computing for computational fluid dynamics applications.",
        "<strong>Symposium on Gravitational Waves</strong> (Thapar Amateur Astronomers Society - TAAS) — Symposium covering gravitational waves, LIGO instrumentation, and general relativity.",
        "<strong>Astropedia</strong> (IIT BHU Varanasi) — Astronomy competition and workshop organised by the Astronomy Club, Science & Tech Council.",
        "<strong>Nanoscience & Nanotechnology</strong> (Shivaji University, Kolhapur) — Hands-on training workshop on basic experimental techniques in nanoscience."
      ],
      image: "assets/coursera_logo.png"
    }
  ]
};

// Play downloaded Netflix Tudum sound effect
function playTudumSound() {
  try {
    const audio = new Audio("assets/tudum.mp3");
    audio.volume = 0.85;
    audio.play();
  } catch (e) {
    console.error("Failed to play Tudum sound: ", e);
  }
}

// Render dynamic elements
document.addEventListener("DOMContentLoaded", () => {
  setupProfileSelection();
  renderBillboard();
  renderAllRows();
  setupEventListeners();
  setupBillboardVideo();
  initVideoPlayer();
});

// Profile Selection & Intro Animation
function setupProfileSelection() {
  const profileScreen = document.getElementById("profile-screen");
  const introScreen = document.getElementById("intro-screen");
  const mainApp = document.getElementById("main-app");
  const profileCard = document.querySelector(".profile-card");

  profileCard.addEventListener("click", () => {
    playTudumSound();

    profileScreen.classList.add("hidden");
    introScreen.classList.remove("hidden");

    const tudumN = document.querySelector(".tudum-letter-n");
    tudumN.classList.add("animate-tudum");

    const tudumText = document.querySelector(".tudum-text");
    tudumText.classList.add("animate-tudum-text");

    setTimeout(() => {
      introScreen.classList.add("fade-out");
      setTimeout(() => {
        introScreen.classList.add("hidden");
        mainApp.classList.remove("hidden");
        mainApp.classList.add("fade-in");
        document.body.style.overflow = "auto";
      }, 800);
    }, 4200);
  });

  const skipBtn = document.getElementById("skip-intro");
  skipBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    introScreen.classList.add("hidden");
    profileScreen.classList.add("hidden");
    mainApp.classList.remove("hidden");
    mainApp.classList.add("fade-in");
    document.body.style.overflow = "auto";
  });
}

// Billboard Rendering
function renderBillboard() {
  const playBtn = document.getElementById("billboard-play-btn");
  const infoBtn = document.getElementById("billboard-info-btn");
  const secondP = document.querySelector(".billboard-p-second");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      playBillboardVideo();
    });
  }

  if (infoBtn) {
    infoBtn.addEventListener("click", () => {
      if (secondP) {
        secondP.classList.toggle("expanded");
        if (secondP.classList.contains("expanded")) {
          infoBtn.innerHTML = `<i class="fa-solid fa-circle-info"></i> Less Info`;
        } else {
          infoBtn.innerHTML = `<i class="fa-solid fa-circle-info"></i> More Info`;
        }
      }
    });
  }
}

// Setup Billboard Background Video Mute/Unmute Controls
function setupBillboardVideo() {
  const muteBtn = document.getElementById("billboard-mute-btn");
  const video = document.getElementById("billboard-video");
  
  if (muteBtn && video) {
    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      const icon = muteBtn.querySelector("i");
      if (video.muted) {
        icon.className = "fa-solid fa-volume-xmark";
      } else {
        icon.className = "fa-solid fa-volume-high";
      }
    });
  }
}

// Global wrapper to trigger intro modal from HTML onclick
window.openIntroModal = function() {
  openModal(cvData.billboard);
};

// Carousel Rows Rendering
function renderAllRows() {
  const categories = [
    { key: "research", title: "Research Projects", id: "row-research" },
    { key: "work", title: "Work Experience", id: "row-work" },
    { key: "education", title: "Education", id: "row-education" },
    { key: "achievements", title: "Achievements", id: "row-achievements" },
    { key: "conferences", title: "Conferences & Talks", id: "row-conferences" },
    { key: "skills", title: "Technical Skills", id: "row-skills" },
    { key: "certificates", title: "Course Certificates", id: "row-certificates" }
  ];

  categories.forEach(cat => {
    const rowEl = document.getElementById(cat.id);
    if (!rowEl) return;

    const listContainer = rowEl.querySelector(".row-slider-inner");
    if (!listContainer) return;

    listContainer.innerHTML = "";
    
    cvData[cat.key].forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.dataset.id = item.id;
      card.dataset.category = cat.key;
      
      // Add bottom status labels (e.g., "New Episode") on the cards
      let bottomLabel = "";
      if (cat.key === "research" && index === 0) {
        bottomLabel = `<div class="card-bottom-labels"><span class="lbl-red">New Episode</span></div>`;
      } else if (cat.key === "work" && index === 0) {
        bottomLabel = `<div class="card-bottom-labels"><span class="lbl-red">New Episode</span></div>`;
      }

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="card-img" onerror="this.src='assets/placeholder_card.webp'">
        ${bottomLabel}
        <div class="card-hover-info">
          <div class="hover-img-wrap" style="background-image: url('${item.image}')"></div>
          <div class="hover-details">
            <div class="hover-controls">
              <button class="ctrl-btn play-circle" aria-label="Play"><i class="fas fa-play"></i></button>
              <button class="ctrl-btn plus" aria-label="Add to List"><i class="fas fa-plus"></i></button>
              <button class="ctrl-btn thumbs-up" aria-label="Like"><i class="fas fa-thumbs-up"></i></button>
              <button class="ctrl-btn info-circle" aria-label="More Info"><i class="fas fa-chevron-down"></i></button>
            </div>
            <h4 class="hover-title">${item.title}</h4>
            <p class="hover-meta">
              <span class="match">${item.match}</span>
              <span class="rating">${item.rating}</span>
              <span class="date">${item.date}</span>
            </p>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openModal(item));
      listContainer.appendChild(card);
    });
  });
}

// Modal Mechanics
function openModal(item) {
  const modal = document.getElementById("detail-modal");
  modal.dataset.id = item.id;
  const modalHero = modal.querySelector(".modal-hero");
  const modalTitle = modal.querySelector(".modal-title");
  const modalMatch = modal.querySelector(".modal-match");
  const modalYear = modal.querySelector(".modal-year");
  const modalRating = modal.querySelector(".modal-rating");
  const modalInstitution = modal.querySelector(".modal-institution");
  const modalPi = modal.querySelector(".modal-pi");
  const modalBullets = modal.querySelector(".modal-bullets-list");
  const modalCast = modal.querySelector(".cast-list");

  modalHero.style.backgroundImage = `linear-gradient(to top, #181818 0%, rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.7) 100%), url('${item.image}')`;
  modalTitle.textContent = item.title;
  modalMatch.textContent = item.match;
  modalYear.textContent = item.date;
  modalRating.textContent = item.rating;
  modalInstitution.textContent = item.institution || "Independent / General";

  if (item.pi) {
    modalPi.style.display = "block";
    modalPi.innerHTML = `<strong>Project PI/Advisor:</strong> ${item.pi}`;
  } else {
    modalPi.style.display = "none";
  }

  modalBullets.innerHTML = item.bullets.map(b => `<li>${b}</li>`).join("");

  modalCast.innerHTML = item.pi ? `${item.pi}, Kshitij Pawar` : "Kshitij Prakash Pawar";

  // Bind play button inside details modal
  const modalPlayBtn = modal.querySelector(".modal-play-btn");
  if (modalPlayBtn) {
    const newPlayBtn = modalPlayBtn.cloneNode(true);
    modalPlayBtn.parentNode.replaceChild(newPlayBtn, modalPlayBtn);
    
    // If it's the billboard introduction, link it to playing the fullscreen video
    if (!item.id || item.id === "billboard" || item === cvData.billboard) {
      newPlayBtn.innerHTML = `<i class="fa-solid fa-play"></i> Play Video`;
      newPlayBtn.addEventListener("click", () => {
        closeModal();
        playBillboardVideo();
      });
    } else {
      newPlayBtn.innerHTML = `<i class="fa-solid fa-play"></i> Read Work`;
      newPlayBtn.addEventListener("click", () => {
        // Standard experience play interaction (e.g. scroll to project or alert details)
        closeModal();
        const targetEl = document.getElementById(item.id);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("detail-modal");
  modal.classList.remove("show");
  const mainApp = document.getElementById("main-app");
  if (!mainApp.classList.contains("hidden")) {
    document.body.style.overflow = "auto";
  }
}

// Navigation & Interactive Scrolling Controls
function setupEventListeners() {
  const closeBtn = document.querySelector(".modal-close");
  const modal = document.getElementById("detail-modal");
  
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  const rows = document.querySelectorAll(".row-slider");
  rows.forEach(row => {
    const inner = row.querySelector(".row-slider-inner");
    const prev = row.querySelector(".arrow-left");
    const next = row.querySelector(".arrow-right");

    if (prev && next && inner) {
      prev.addEventListener("click", (e) => {
        e.stopPropagation();
        inner.scrollBy({ left: -window.innerWidth * 0.75, behavior: "smooth" });
      });

      next.addEventListener("click", (e) => {
        e.stopPropagation();
        inner.scrollBy({ left: window.innerWidth * 0.75, behavior: "smooth" });
      });

      inner.addEventListener("scroll", () => {
        if (inner.scrollLeft > 10) {
          prev.style.display = "flex";
        } else {
          prev.style.display = "none";
        }
      });
    }
  });

  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    const allCards = document.querySelectorAll(".movie-card");
    const allRows = document.querySelectorAll(".movie-row");

    if (q === "") {
      allCards.forEach(c => c.style.display = "block");
      allRows.forEach(r => r.style.display = "block");
      return;
    }

    allRows.forEach(row => {
      const cardsInRow = row.querySelectorAll(".movie-card");
      let visibleCount = 0;
      
      cardsInRow.forEach(card => {
        const id = card.dataset.id;
        const cat = card.dataset.category;
        const item = cvData[cat].find(i => i.id === id);
        
        if (item) {
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchInstitution = (item.institution || "").toLowerCase().includes(q);
          const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
          const matchBullets = item.bullets.some(b => b.toLowerCase().includes(q));

          if (matchTitle || matchInstitution || matchTags || matchBullets) {
            card.style.display = "block";
            visibleCount++;
          } else {
            card.style.display = "none";
          }
        }
      });

      if (visibleCount > 0) {
        row.style.display = "block";
      } else {
        row.style.display = "none";
      }
    });
  });
}

// Custom Full-Screen Video Player Mechanics
let playerControlsTimer;

function initVideoPlayer() {
  const container = document.getElementById("video-player-container");
  if (!container) return;

  const video = document.getElementById("player-video");
  const backBtn = container.querySelector(".player-back-btn");
  const playPauseBtn = container.querySelector(".play-pause-btn");
  const rewindBtn = container.querySelector(".rewind-btn");
  const forwardBtn = container.querySelector(".forward-btn");
  const volumeBtn = container.querySelector(".volume-btn");
  const volumeSlider = container.querySelector(".player-volume-slider");
  const currentTimeText = container.querySelector(".player-current-time");
  const durationText = container.querySelector(".player-duration");
  const timelineContainer = container.querySelector(".player-timeline-container");
  const progressBar = container.querySelector(".player-progress-bar");
  const progressHover = container.querySelector(".player-progress-hover");
  const timelineHandle = container.querySelector(".player-timeline-handle");
  const fullscreenBtn = container.querySelector(".fullscreen-btn");
  const controlsOverlay = container.querySelector(".player-controls");
  const centerPlayBtn = container.querySelector(".player-center-play");
  const billboardVideo = document.getElementById("billboard-video");

  // Helper: Format Time (seconds to M:SS)
  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // Toggle Play / Pause
  function togglePlay() {
    if (video.paused) {
      video.play().then(() => {
        playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        centerPlayBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        flashCenterPlay();
        showControls();
      });
    } else {
      video.pause();
      playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
      centerPlayBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      flashCenterPlay();
      showControls();
    }
  }

  function flashCenterPlay() {
    centerPlayBtn.classList.remove("flash");
    void centerPlayBtn.offsetWidth; // Trigger reflow
    centerPlayBtn.classList.add("flash");
  }

  // Seek
  function seekTo(e) {
    const rect = timelineContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * video.duration;
    if (!isNaN(seekTime)) {
      video.currentTime = seekTime;
      updateProgress();
    }
  }

  // Hover Seek Preview
  function handleHoverProgress(e) {
    const rect = timelineContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const clampedPos = Math.max(0, Math.min(1, pos));
    progressHover.style.width = `${clampedPos * 100}%`;
  }

  // Update progress bar & time text
  function updateProgress() {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${pct}%`;
    timelineHandle.style.left = `${pct}%`;
    currentTimeText.textContent = formatTime(video.currentTime);
  }

  // Update duration once metadata loaded
  video.addEventListener("loadedmetadata", () => {
    durationText.textContent = formatTime(video.duration);
  });

  // Time update event
  video.addEventListener("timeupdate", updateProgress);

  // Video end event
  video.addEventListener("ended", () => {
    closePlayer();
  });

  // Play Pause events
  playPauseBtn.addEventListener("click", togglePlay);
  centerPlayBtn.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);

  // Rewind & Forward 10s
  rewindBtn.addEventListener("click", () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
    updateProgress();
    showControls();
  });

  forwardBtn.addEventListener("click", () => {
    video.currentTime = Math.min(video.duration || 0, video.currentTime + 10);
    updateProgress();
    showControls();
  });

  // Volume control
  let previousVolume = 0.8;
  
  function updateVolume(val) {
    video.volume = val;
    volumeSlider.value = val;
    
    if (val === 0) {
      volumeBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
      video.muted = true;
    } else if (val < 0.5) {
      volumeBtn.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
      video.muted = false;
    } else {
      volumeBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
      video.muted = false;
    }
  }

  volumeSlider.addEventListener("input", (e) => {
    updateVolume(parseFloat(e.target.value));
    showControls();
  });

  volumeBtn.addEventListener("click", () => {
    if (video.volume > 0) {
      previousVolume = video.volume;
      updateVolume(0);
    } else {
      updateVolume(previousVolume > 0 ? previousVolume : 0.8);
    }
    showControls();
  });

  // Seek bar event listeners
  let isDragging = false;

  timelineContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    seekTo(e);
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging) seekTo(e);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  timelineContainer.addEventListener("mousemove", handleHoverProgress);

  // Fullscreen
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error("Error attempting to enable fullscreen:", err);
      });
      fullscreenBtn.innerHTML = `<i class="fa-solid fa-compress"></i>`;
    } else {
      document.exitFullscreen().catch(() => {});
      fullscreenBtn.innerHTML = `<i class="fa-solid fa-expand"></i>`;
    }
    showControls();
  }

  fullscreenBtn.addEventListener("click", toggleFullscreen);
  
  // Listen for fullscreen changes to update icon style
  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
      fullscreenBtn.innerHTML = `<i class="fa-solid fa-compress"></i>`;
    } else {
      fullscreenBtn.innerHTML = `<i class="fa-solid fa-expand"></i>`;
    }
  });

  // Controls Autohide logic
  function showControls() {
    controlsOverlay.classList.remove("hide-controls");
    clearTimeout(playerControlsTimer);
    if (!video.paused) {
      playerControlsTimer = setTimeout(() => {
        controlsOverlay.classList.add("hide-controls");
      }, 3000);
    }
  }

  container.addEventListener("mousemove", showControls);
  container.addEventListener("mouseleave", () => {
    if (!video.paused) {
      controlsOverlay.classList.add("hide-controls");
    }
  });

  // Back / Close
  function closePlayer() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    
    video.pause();
    container.classList.add("hidden");
    document.body.style.overflow = "auto";
    
    // Resume billboard background video
    if (billboardVideo) {
      billboardVideo.play().catch(e => console.log("Background video play blocked:", e));
    }
  }

  backBtn.addEventListener("click", closePlayer);

  // Global function to open player
  window.playBillboardVideo = function() {
    container.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    
    // Pause background video to save resources
    if (billboardVideo) {
      billboardVideo.pause();
    }
    
    // Sync volume slider and button icon (default unmuted sound)
    updateVolume(0.8);
    video.currentTime = 0;
    playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    
    video.play().then(() => {
      showControls();
    }).catch(err => {
      console.log("Autoplay failed/blocked. Waiting for user interaction.", err);
      playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
      showControls();
    });
  };

  // Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (container.classList.contains("hidden")) return;

    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    } else if (e.code === "ArrowLeft") {
      e.preventDefault();
      video.currentTime = Math.max(0, video.currentTime - 10);
      updateProgress();
      showControls();
    } else if (e.code === "ArrowRight") {
      e.preventDefault();
      video.currentTime = Math.min(video.duration || 0, video.currentTime + 10);
      updateProgress();
      showControls();
    } else if (e.key === "Escape") {
      e.preventDefault();
      closePlayer();
    }
  });
}
