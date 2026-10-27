/**
 * Sowmiya · Product Designer & Creative Developer Portfolio
 * Interactive Desk Hotspots, Figma-style Selection, Particle Breeze & Case Studies
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Hotspot Definitions for Hero Illustration (Normalized Coordinates & Z-Index)
  // =========================================================================
  const HOTSPOTS = [
    // Background layer: Sowmiya herself (z-index: 10)
    {
      id: 'sowmiya_avatar',
      name: 'Sowmiya • Product Designer & UX Researcher',
      tag: 'Designer',
      icon: '👋',
      x: 0.235, y: 0.070, w: 0.250, h: 0.500,
      zIndex: 10,
      pulseX: 0.36, pulseY: 0.28,
      pop: 'Hi there! Welcome to my design space 👋',
      action: 'scroll',
      target: '#about'
    },
    // Upper Mid layer: Desktop System Monitor (z-index: 22)
    {
      id: 'monitor_wireframe',
      name: 'System Monitor • Wireframe Flow',
      tag: 'Wireframe',
      icon: '📐',
      x: 0.590, y: 0.235, w: 0.170, h: 0.250,
      zIndex: 22,
      pulseX: 0.67, pulseY: 0.34,
      pop: 'Wireframe user flows: 6 alternate navigation paths tested',
      action: 'scroll',
      target: '#wireframe-hifi'
    },
    {
      id: 'monitor_hifi',
      name: 'System Monitor • High-Fidelity UI Screens',
      tag: 'High Fidelity',
      icon: '📱',
      x: 0.760, y: 0.235, w: 0.195, h: 0.250,
      zIndex: 22,
      pulseX: 0.86, pulseY: 0.34,
      pop: 'Polished screens with WCAG AAA accessibility tokens',
      action: 'case',
      target: 'book_trainer'
    },
    // Foreground layer: Laptop (z-index: 25)
    {
      id: 'laptop',
      name: 'Laptop • Park Share Live Prototype',
      tag: 'Live Prototype',
      icon: '💻',
      x: 0.440, y: 0.505, w: 0.430, h: 0.335,
      zIndex: 25,
      pulseX: 0.65, pulseY: 0.66,
      pop: 'Figma interactive prototype: real-time spot reservations',
      action: 'case',
      target: 'park_share'
    },
    // Desk surface layer: Pages, Sketchbook, Books, Mug (z-index: 28)
    {
      id: 'table_pages',
      name: 'Pages on Table • High Fidelity UI & Component Specs',
      tag: 'High Fidelity',
      icon: '📑',
      x: 0.575, y: 0.835, w: 0.395, h: 0.155,
      zIndex: 28,
      pulseX: 0.76, pulseY: 0.90,
      pop: 'High-fidelity component specs & 8-pt grid system',
      action: 'scroll',
      target: '#wireframe-hifi'
    },
    {
      id: 'sketchbook',
      name: 'Sketchbook • Wireframe Ideation & Flows',
      tag: 'Wireframe',
      icon: '✏️',
      x: 0.215, y: 0.780, w: 0.355, h: 0.170,
      zIndex: 28,
      pulseX: 0.38, pulseY: 0.86,
      pop: 'Rapid pencil wireframes to explore information hierarchy',
      action: 'scroll',
      target: '#approach'
    },
    {
      id: 'coffee_mug',
      name: 'Coffee Mug • Fuel for 42 User Interviews',
      tag: 'User Empathy',
      icon: '☕',
      x: 0.052, y: 0.675, w: 0.155, h: 0.190,
      zIndex: 28,
      pulseX: 0.12, pulseY: 0.76,
      pop: 'Coffee & Empathy: 42 user research calls completed!',
      action: 'toast'
    },
    {
      id: 'color_swatches',
      name: 'Color Swatches • Contrast & HSL Design Tokens',
      tag: 'Design Tokens',
      icon: '🎨',
      x: 0.050, y: 0.865, w: 0.160, h: 0.125,
      zIndex: 28,
      pulseX: 0.13, pulseY: 0.92,
      pop: 'Harmonious HSL tokens tested across lighting conditions',
      action: 'scroll',
      target: '#toolkit'
    },
    {
      id: 'ux_books',
      name: 'UX Books • Research Heuristics & Design Systems',
      tag: 'UX Library',
      icon: '📚',
      x: 0.850, y: 0.645, w: 0.145, h: 0.180,
      zIndex: 28,
      pulseX: 0.92, pulseY: 0.73,
      pop: 'Nielsen Norman heuristics & Don Norman’s principles',
      action: 'scroll',
      target: '#approach'
    },
    {
      id: 'sticky_note_left',
      name: 'Sticky Note • Ideas → Wireframes → UI → Impact',
      tag: 'Process',
      icon: '💡',
      x: 0.008, y: 0.400, w: 0.095, h: 0.165,
      zIndex: 28,
      pulseX: 0.05, pulseY: 0.48,
      pop: 'Ideas → Wireframes → UI → Impact ♡',
      action: 'toast'
    },
    {
      id: 'sticky_note_wall',
      name: 'Affinity Wall • Better User Experiences ♡',
      tag: 'Mantra',
      icon: '✨',
      x: 0.510, y: 0.015, w: 0.100, h: 0.145,
      zIndex: 28,
      pulseX: 0.56, pulseY: 0.08,
      pop: 'Good design is empathetic and invisible ✨',
      action: 'toast'
    }
  ];

  // =========================================================================
  // 2. Case Study Data Repository
  // =========================================================================
  const CASE_STUDIES = {
    park_share: {
      title: 'Park Share — Smart Urban Parking & Host Platform',
      tagline: 'Empowering urban drivers to find and reserve verified parking spots in seconds while letting space owners monetize vacant bays.',
      role: 'Lead Product Designer & UX Researcher',
      timeline: '8 Weeks · End-to-End Delivery',
      platform: 'iOS, Android & Web App',
      heroImage: 'assets/images/park_share.jpg',
      metrics: [
        { value: '+34%', label: 'Reservation Speed' },
        { value: '94%', label: 'Task Success Rate' },
        { value: '4.8★', label: 'Beta App Store Rating' }
      ],
      sections: [
        {
          heading: '01. The Problem Space & Opportunity',
          content: 'In high-density metro areas, urban commuters spend an average of 18 minutes circling blocks looking for parking, increasing carbon emissions and road congestion. Simultaneously, residential parking bays remain empty during work hours. Park Share bridges this gap through a verified peer-to-peer ecosystem.'
        },
        {
          heading: '02. User Research & Key Insights',
          content: 'We conducted 24 qualitative user interviews and surveyed 140 daily drivers. Key insights revealed: 1) Price transparency is paramount — surprise fees cause 78% cart abandonment; 2) Walking distance certainty matters more than raw cost; 3) Host onboarding friction was too high due to manual spot dimension entry.'
        },
        {
          heading: '03. From Low-Fi Wireframes to User Testing',
          content: 'Initial wireframes focused on a single-screen map-first interface. User testing with 8 participants revealed that users struggled to compare rates across different time blocks. We redesigned the booking flow with progressive disclosure: bottom-sheet time sliders that dynamically calculate real-time rates before opening full booking.'
        },
        {
          heading: '04. High-Fidelity UI & Design System',
          content: 'The final interface was built with an accessible, high-contrast palette (Navy slate, vibrant sky blue, and warm status indicators). We created 48 auto-layout components in Figma with dark mode variants and accessible touch targets (minimum 48x48pt).'
        }
      ]
    },
    book_trainer: {
      title: 'BookMyTrainer — On-Demand Personal Training Platform',
      tagline: 'Connecting fitness enthusiasts with vetted certified personal trainers through algorithmic goal matching and 1-tap scheduling.',
      role: 'Senior UX/UI Designer',
      timeline: '10 Weeks · Product Discovery & UI',
      platform: 'iOS Mobile App',
      heroImage: 'assets/images/book_trainer.jpg',
      metrics: [
        { value: '42%', label: 'Higher Match Rate' },
        { value: '180', label: 'Athletes Surveyed' },
        { value: '4.9★', label: 'Client Satisfaction' }
      ],
      sections: [
        {
          heading: '01. Background & UX Challenge',
          content: 'Finding a personal trainer is historically fraught with intimidation and mismatched expectations. Clients often drop off due to unclear session pacing or personality mismatches. BookMyTrainer set out to create an approachable, science-backed matching funnel.'
        },
        {
          heading: '02. User Personas & Empathy Mapping',
          content: 'We defined two core personas: "Sarah, The Busy Executive" (needs 6 AM express HIIT, high scheduling flexibility) and "Liam, The Fitness Newbie" (intimidated by gym jargon, needs supportive habit coaching). These personas dictated our tailored onboarding quiz architecture.'
        },
        {
          heading: '03. Wireframe Architecture & Heuristic Evaluation',
          content: 'Low-fidelity wireframes mapped out a 3-step trainer quiz: Fitness Goals → Preferred Training Style → Availability. In usability testing, users completed the matching questionnaire in under 90 seconds, with an 88% progression rate to trainer profile review.'
        },
        {
          heading: '04. Visual Craft & Micro-Interactions',
          content: 'We crafted custom warm gradient hero cards, smooth spring physics on calendar date pickers, and clear trainer certification badges. Micro-animations celebrate booking confirmations to reinforce positive fitness habits.'
        }
      ]
    },
    wireframe_process: {
      title: 'Echo — Mindfulness & Productivity UX Research Board',
      tagline: 'Complete UX discovery, affinity mapping, and wireframe-to-prototype validation for mindful daily habits.',
      role: 'Product Designer & UX Researcher',
      timeline: '6 Weeks Discovery',
      platform: 'Cross-Platform Mobile',
      heroImage: 'assets/images/wireframe_process.jpg',
      metrics: [
        { value: '88%', label: 'Daily Retention' },
        { value: '2', label: 'Personas Validated' },
        { value: '14 Days', label: 'Diary Study Conducted' }
      ],
      sections: [
        {
          heading: '01. Discovery & Affinity Mapping',
          content: 'Through contextual inquiries and a 14-day user diary study, we collected over 120 qualitative observations. We synthesized these into 4 core thematic clusters on our digital affinity board: Stress Triggers, Organization Deficits, Motivation Loops, and Notification Fatigue.'
        },
        {
          heading: '02. Low-Fidelity Wireframing',
          content: 'Greyscale wireframing allowed us to iterate on structure without visual distraction. We mapped user flow diagrams from onboarding through goal setting and daily reflection, benchmarking task flows against Jakob Nielsen’s 10 usability heuristics.'
        },
        {
          heading: '03. Usability Testing & Refinements',
          content: 'Testing paper prototypes and Figma wireframes revealed that users felt overwhelmed by multi-task checklists. We introduced a single-focus timer card with ambient audio triggers, boosting user focus satisfaction by 65%.'
        }
      ]
    }
  };

  // =========================================================================
  // 3. Hotspots & Figma Selection Frame Logic
  // =========================================================================
  const stageCard = document.querySelector('.hero-stage-card');
  const hotspotsLayer = document.querySelector('.hotspots-layer');
  const selectionFrame = document.querySelector('.figma-selection-frame');
  const selBadge = document.querySelector('.sel-label-badge');

  let activeHotspotEl = null;

  function updateHotspotsLayerRect() {
    if (!hotspotsLayer || !stageCard) return;
    const W = stageCard.clientWidth;
    const H = stageCard.clientHeight;
    if (!W || !H) return;
    const AR = 1536 / 1024;
    let imgW, imgH, imgLeft, imgTop;
    if (W / H > AR) {
      imgW = W;
      imgH = W / AR;
      imgLeft = 0;
      imgTop = (H - imgH) * 0.38; // matching CSS object-position: center 38%
    } else {
      imgH = H;
      imgW = H * AR;
      imgTop = 0;
      imgLeft = (W - imgW) * 0.5;
    }
    hotspotsLayer.style.position = 'absolute';
    hotspotsLayer.style.left = imgLeft + 'px';
    hotspotsLayer.style.top = imgTop + 'px';
    hotspotsLayer.style.width = imgW + 'px';
    hotspotsLayer.style.height = imgH + 'px';
    hotspotsLayer.style.right = 'auto';
    hotspotsLayer.style.bottom = 'auto';
  }

  function initHotspots() {
    if (!hotspotsLayer || !stageCard) return;

    updateHotspotsLayerRect();

    // Clear existing
    hotspotsLayer.innerHTML = '';

    HOTSPOTS.forEach((spot) => {
      // Hotspot container element
      const el = document.createElement('div');
      el.className = 'desk-hotspot';
      el.dataset.id = spot.id;
      el.dataset.name = spot.name;
      el.dataset.tag = spot.tag;
      el.dataset.icon = spot.icon;
      el.dataset.pop = spot.pop;
      el.dataset.action = spot.action;
      if (spot.target) el.dataset.target = spot.target;

      el.style.left = (spot.x * 100) + '%';
      el.style.top = (spot.y * 100) + '%';
      el.style.width = (spot.w * 100) + '%';
      el.style.height = (spot.h * 100) + '%';
      el.style.zIndex = spot.zIndex || 20;
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', `${spot.name} (${spot.tag})`);

      // Add radar pulse
      if (spot.pulseX && spot.pulseY) {
        const pulse = document.createElement('div');
        pulse.className = 'hotspot-pulse';
        pulse.style.left = ((spot.pulseX - spot.x) / spot.w * 100) + '%';
        pulse.style.top = ((spot.pulseY - spot.y) / spot.h * 100) + '%';
        el.appendChild(pulse);
      }

      // Hover events
      el.addEventListener('mouseenter', () => activateHotspot(el, spot));
      el.addEventListener('mouseleave', () => deactivateHotspot(el));
      
      // Focus events (keyboard accessibility)
      el.addEventListener('focus', () => activateHotspot(el, spot));
      el.addEventListener('blur', () => deactivateHotspot(el));

      // Click / activation
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        handleHotspotClick(spot, e);
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleHotspotClick(spot, e);
        }
      });

      hotspotsLayer.appendChild(el);
    });

    // Handle clicks outside desk to clear selection
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.hero-stage-card')) {
        hideSelection();
      }
    });

    // Re-adjust frame position on window resize
    window.addEventListener('resize', () => {
      updateHotspotsLayerRect();
      if (activeHotspotEl) {
        const spot = HOTSPOTS.find(h => h.id === activeHotspotEl.dataset.id);
        if (spot) updateSelectionPosition(activeHotspotEl, spot);
      }
    });
  }

  function activateHotspot(el, spot) {
    activeHotspotEl = el;
    updateSelectionPosition(el, spot);
  }

  function deactivateHotspot(el) {
    if (activeHotspotEl === el) {
      activeHotspotEl = null;
      hideSelection();
    }
  }

  function updateSelectionPosition(el, spot) {
    if (!selectionFrame || !stageCard) return;

    const cardRect = stageCard.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const left = elRect.left - cardRect.left;
    const top = elRect.top - cardRect.top;
    const width = elRect.width;
    const height = elRect.height;

    selectionFrame.style.left = (left - 3) + 'px';
    selectionFrame.style.top = (top - 3) + 'px';
    selectionFrame.style.width = (width + 6) + 'px';
    selectionFrame.style.height = (height + 6) + 'px';

    // Update badge content
    if (selBadge) {
      selBadge.innerHTML = `
        <span class="badge-icon">${spot.icon}</span>
        <span>${spot.name}</span>
        <span class="badge-tag">${spot.tag}</span>
      `;

      // Flip badge above if spot is in bottom half of image (so it's never cut off)
      if (spot.y > 0.40) {
        selBadge.classList.add('flip-top');
      } else {
        selBadge.classList.remove('flip-top');
      }
    }

    selectionFrame.classList.add('active');
  }

  function hideSelection() {
    if (selectionFrame) {
      selectionFrame.classList.remove('active');
    }
  }

  function handleHotspotClick(spot, e) {
    // Show toast pop
    showDeskToast(spot.pop, e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2);

    if (spot.action === 'case') {
      setTimeout(() => openCaseModal(spot.target), 200);
    } else if (spot.action === 'scroll' && spot.target) {
      const targetEl = document.querySelector(spot.target);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  function showDeskToast(text, x, y) {
    const toast = document.createElement('div');
    toast.className = 'desk-pop-toast';
    toast.textContent = text;
    
    // Position comfortably near click
    const left = Math.min(window.innerWidth - 280, Math.max(20, x - 50));
    const top = Math.max(60, y - 50);

    toast.style.left = left + 'px';
    toast.style.top = top + 'px';

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  // =========================================================================
  // 4. Floating Dandelion Breeze Canvas FX
  // =========================================================================
  const canvas = document.getElementById('heroFxCanvas');
  const SKILLS = [
    'User Research', 'Wireframing', 'Figma Systems',
    'Interactive Prototyping', 'Usability Testing', 'Information Architecture',
    'Design Tokens', 'Micro-interactions', 'Behavioral UX', 'Accessibility WCAG'
  ];

  let ctx = null;
  let particles = [];
  let mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, speed: 0 };

  function initCanvas() {
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resizeCanvas();

    // Create particles
    const count = window.innerWidth < 768 ? 6 : 10;
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height * (0.15 + Math.random() * 0.7),
        vx: 0.3 + Math.random() * 0.5,
        vy: (Math.random() - 0.5) * 0.3,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        skill: SKILLS[i % SKILLS.length],
        radius: 12 + Math.random() * 4,
        hoverProgress: 0
      });
    }

    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('mousemove', (e) => {
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.speed = Math.hypot(mouse.x - mouse.prevX, mouse.y - mouse.prevY);
    });

    requestAnimationFrame(renderCanvas);
  }

  function resizeCanvas() {
    if (!canvas) return;
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    canvas.width = hero.clientWidth;
    canvas.height = hero.clientHeight;
  }

  function renderCanvas() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      // Movement
      p.x += p.vx;
      p.y += p.vy + Math.sin(p.angle) * 0.2;
      p.angle += p.angularSpeed;

      // Wrap around edges
      if (p.x > canvas.width + 40) p.x = -40;
      if (p.x < -40) p.x = canvas.width + 40;
      if (p.y > canvas.height + 40) p.y = -40;
      if (p.y < -40) p.y = canvas.height + 40;

      // Mouse proximity detection
      const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      const isNear = dist < 75;

      if (isNear) {
        p.hoverProgress = Math.min(1, p.hoverProgress + 0.1);
        p.x += (mouse.x - p.x) * 0.04;
        p.y += (mouse.y - p.y) * 0.04;
      } else {
        p.hoverProgress = Math.max(0, p.hoverProgress - 0.05);
      }

      // Draw dandelion seed
      drawSeed(p);

      // Draw floating skill tag when hovered
      if (p.hoverProgress > 0.05) {
        drawSkillBadge(p);
      }
    });

    requestAnimationFrame(renderCanvas);
  }

  function drawSeed(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.globalAlpha = 0.85;

    // Stem
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, p.radius * 1.5);
    ctx.stroke();

    // Dandelion filaments
    const filaments = 12;
    for (let k = 0; k < filaments; k++) {
      const a = (k / filaments) * Math.PI * 1.5 - Math.PI * 0.75;
      const len = p.radius * (0.8 + Math.sin(k) * 0.2);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len);
      ctx.stroke();

      // Tuft dot
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(Math.cos(a) * len, Math.sin(a) * len, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Seed center dot
    ctx.fillStyle = 'rgba(224, 119, 79, 0.95)';
    ctx.beginPath();
    ctx.arc(0, p.radius * 1.5, 1.8, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawSkillBadge(p) {
    ctx.save();
    ctx.globalAlpha = p.hoverProgress;
    ctx.font = '600 12px "Plus Jakarta Sans", sans-serif';

    const text = '✦ ' + p.skill;
    const textWidth = ctx.measureText(text).width;
    const paddingX = 12;
    const badgeW = textWidth + paddingX * 2;
    const badgeH = 26;
    const badgeX = p.x + 14;
    const badgeY = p.y - 32;

    // Glass pill background
    ctx.fillStyle = 'rgba(255, 252, 248, 0.95)';
    ctx.shadowColor = 'rgba(90, 50, 30, 0.18)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 4;

    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 13);
    ctx.fill();

    // Border
    ctx.strokeStyle = 'rgba(224, 119, 79, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Text
    ctx.fillStyle = '#1b2024';
    ctx.fillText(text, badgeX + paddingX, badgeY + 17);

    ctx.restore();
  }

  // =========================================================================
  // 5. Wireframe vs High-Fidelity Split Slider
  // =========================================================================
  const sliderBox = document.getElementById('comparisonSlider');
  const hifiLayer = document.querySelector('.slider-layer.hifi-layer');
  const dividerLine = document.querySelector('.slider-divider-line');
  const handleKnob = document.querySelector('.slider-handle-knob');
  const splitBtns = document.querySelectorAll('.split-btn');

  let isDraggingSlider = false;

  function initSplitSlider() {
    if (!sliderBox || !hifiLayer || !dividerLine || !handleKnob) return;

    function setSliderPosition(percent) {
      const p = Math.max(0, Math.min(100, percent));
      hifiLayer.style.clipPath = `polygon(0 0, ${p}% 0, ${p}% 100%, 0 100%)`;
      dividerLine.style.left = `${p}%`;
      handleKnob.style.left = `${p}%`;
    }

    function handleMove(clientX) {
      const rect = sliderBox.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    }

    sliderBox.addEventListener('mousedown', (e) => {
      isDraggingSlider = true;
      handleMove(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDraggingSlider = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (isDraggingSlider) {
        handleMove(e.clientX);
      }
    });

    // Touch support for tablets/mobile
    sliderBox.addEventListener('touchstart', (e) => {
      isDraggingSlider = true;
      if (e.touches.length > 0) handleMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDraggingSlider = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (isDraggingSlider && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    }, { passive: true });

    // Preset Buttons (Wireframe, 50/50, High Fidelity)
    splitBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        splitBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const mode = btn.dataset.mode;
        if (mode === 'wireframe') setSliderPosition(0);
        else if (mode === 'split') setSliderPosition(50);
        else if (mode === 'hifi') setSliderPosition(100);
      });
    });

    // Default 50%
    setSliderPosition(50);
  }

  // =========================================================================
  // 6. Interactive Affinity Board Filters
  // =========================================================================
  function initAffinityBoard() {
    const filterBtns = document.querySelectorAll('.affinity-pill-btn');
    const notes = document.querySelectorAll('.sticky-note');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.filter;

        notes.forEach((note) => {
          if (category === 'all' || note.dataset.category === category) {
            note.style.display = 'block';
            note.style.opacity = '1';
          } else {
            note.style.display = 'none';
          }
        });
      });
    });
  }

  // =========================================================================
  // 7. Case Study Deep-Dive Modal
  // =========================================================================
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalBody = document.querySelector('.modal-content-body');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  function openCaseModal(caseId) {
    const data = CASE_STUDIES[caseId];
    if (!data || !modalOverlay || !modalBody) return;

    let metricsHtml = '';
    if (data.metrics) {
      metricsHtml = `
        <div class="project-metrics-row" style="margin: 24px 0;">
          ${data.metrics.map(m => `
            <div class="metric-item">
              <span class="metric-value">${m.value}</span>
              <span class="metric-label">${m.label}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    let sectionsHtml = '';
    if (data.sections) {
      sectionsHtml = data.sections.map(s => `
        <div style="margin-bottom: 32px;">
          <h3 style="font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--ink-900); margin-bottom: 10px;">${s.heading}</h3>
          <p style="font-size: 15.5px; color: var(--ink-700); line-height: 1.7;">${s.content}</p>
        </div>
      `).join('');
    }

    modalBody.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="section-tag" style="margin-bottom: 8px;">CASE STUDY DEEP DIVE</span>
        <h2 style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--ink-900); line-height: 1.2;">${data.title}</h2>
        <p style="font-size: 16px; color: var(--ink-500); margin-top: 8px;">${data.tagline}</p>
        <div style="display: flex; gap: 16px; margin-top: 14px; font-size: 13px; color: var(--ink-500); flex-wrap: wrap;">
          <span><strong>Role:</strong> ${data.role}</span>
          <span>•</span>
          <span><strong>Timeline:</strong> ${data.timeline}</span>
          <span>•</span>
          <span><strong>Platform:</strong> ${data.platform}</span>
        </div>
      </div>

      <div style="width: 100%; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <img src="${data.heroImage}" alt="${data.title}" style="width: 100%; display: block; object-fit: cover;">
      </div>

      ${metricsHtml}

      <div style="border-top: 1px solid var(--ink-100); padding-top: 32px;">
        ${sectionsHtml}
      </div>

      <div style="margin-top: 40px; padding: 24px; background: var(--bg-subtle); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <h4 style="font-size: 15px; font-weight: 700; color: var(--ink-900);">Interested in the full Figma file &amp; specs?</h4>
          <p style="font-size: 13px; color: var(--ink-500);">Full component system &amp; user journey flows available upon request.</p>
        </div>
        <a href="#contact" onclick="document.getElementById('caseStudyModal').classList.remove('active'); document.body.style.overflow = '';" class="btn-primary">Request Access →</a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCaseModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeCaseModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCaseModal();
  });

  // Attach to project buttons
  document.querySelectorAll('[data-open-case]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = btn.dataset.openCase;
      openCaseModal(caseId);
    });
  });

  // =========================================================================
  // 8. Copy Email to Clipboard & Mobile Navigation
  // =========================================================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'sowmiya.design@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showDeskToast('Email copied to clipboard! 📬', window.innerWidth / 2, window.innerHeight / 2);
        copyEmailBtn.textContent = 'Copied! ✓';
        setTimeout(() => {
          copyEmailBtn.innerHTML = 'Copy Email <span>📋</span>';
        }, 2200);
      });
    });
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinksCapsule = document.getElementById('navLinksCapsule');
  if (mobileToggle && navLinksCapsule) {
    mobileToggle.addEventListener('click', () => {
      navLinksCapsule.classList.toggle('mobile-open');
    });
    // Close on link click
    navLinksCapsule.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinksCapsule.classList.remove('mobile-open');
      });
    });
  }

  // =========================================================================
  // 9. Hero Parallax Scrolling & 3D Interactive Motion
  // =========================================================================
  function initParallax() {
    const heroSection = document.getElementById('heroSection');
    const heroCard = document.getElementById('heroStageCard');
    const heroCopy = document.getElementById('heroCopy');
    const heroHint = document.getElementById('heroHint');
    const heroBackdrop = document.querySelector('.hero-ambient-backdrop');

    if (!heroSection || !heroCard) return;

    let targetTiltX = 0, targetTiltY = 0;
    let currentTiltX = 0, currentTiltY = 0;

    // Subtle 3D mouse parallax following cursor
    window.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      if (rect.bottom < 0) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetTiltX = (e.clientX - cx) / cx;
      targetTiltY = (e.clientY - cy) / cy;
    }, { passive: true });

    function updateParallax() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const heroHeight = heroSection.offsetHeight;

      // Smooth mouse tilt interpolation
      currentTiltX += (targetTiltX - currentTiltX) * 0.08;
      currentTiltY += (targetTiltY - currentTiltY) * 0.08;

      if (scrollY <= heroHeight * 1.3) {
        const progress = Math.min(1, Math.max(0, scrollY / heroHeight));

        // 1. Copy lifts up and fades out smoothly
        if (heroCopy) {
          const liftY = scrollY * 0.72;
          const opacity = Math.max(0, 1 - progress * 2.2);
          heroCopy.style.transform = `translate3d(0, -${liftY}px, 0)`;
          heroCopy.style.opacity = opacity.toFixed(3);
        }

        // 2. Hint capsule fades out
        if (heroHint) {
          const hintOpacity = Math.max(0, 1 - progress * 3.5);
          heroHint.style.opacity = hintOpacity.toFixed(3);
        }

        // 3. Ambient blurred backdrop drifts at slower depth speed
        if (heroBackdrop) {
          const bgY = scrollY * 0.22;
          heroBackdrop.style.transform = `scale(1.1) translate3d(0, ${bgY}px, 0)`;
        }

        // 4. Studio stage card moves with parallax depth and subtle scale
        const cardParallaxY = scrollY * 0.35;
        const cardScale = 1 + progress * 0.08;
        const tiltDegX = -currentTiltY * 2.2;
        const tiltDegY = currentTiltX * 3.2;

        heroCard.style.transform = `translate3d(0, ${cardParallaxY}px, 0) scale(${cardScale}) rotateX(${tiltDegX}deg) rotateY(${tiltDegY}deg)`;
      }

      requestAnimationFrame(updateParallax);
    }

    requestAnimationFrame(updateParallax);
  }

  // =========================================================================
  // 10. Initialization
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initHotspots();
    initCanvas();
    initSplitSlider();
    initAffinityBoard();
    initParallax();
  });

})();
