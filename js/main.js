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
    // Background layer: Sowmiya herself (z-index: 12)
    {
      id: 'sowmiya_avatar',
      name: 'Sowmiya • Product Designer & UX Researcher',
      tag: 'Designer',
      icon: '👋',
      x: 0.310, y: 0.250, w: 0.210, h: 0.490,
      zIndex: 12,
      pulseX: 0.440, pulseY: 0.410,
      pop: 'Hi there! Welcome to my sunlit design studio 👋',
      action: 'scroll',
      target: '#about'
    },
    // Upper Mid layer: Desktop System Monitor (z-index: 22)
    {
      id: 'monitor_wireframe',
      name: 'System Monitor • Wireframe Flow',
      tag: 'Wireframe',
      icon: '📐',
      x: 0.670, y: 0.330, w: 0.095, h: 0.250,
      zIndex: 22,
      pulseX: 0.715, pulseY: 0.440,
      pop: 'Wireframe user flows: 6 alternate navigation paths tested',
      action: 'scroll',
      target: '#wireframe-hifi'
    },
    {
      id: 'monitor_hifi',
      name: 'System Monitor • High-Fidelity UI Screens',
      tag: 'High Fidelity',
      icon: '📱',
      x: 0.765, y: 0.330, w: 0.125, h: 0.250,
      zIndex: 22,
      pulseX: 0.830, pulseY: 0.440,
      pop: 'Polished screens with WCAG AAA accessibility tokens',
      action: 'case',
      target: 'fitness_trainer'
    },
    // Wall Process Checklist Board (z-index: 20)
    {
      id: 'ux_process_board',
      name: 'UX / UI Process Board • Research to Iteration',
      tag: 'Methodology',
      icon: '📋',
      x: 0.545, y: 0.100, w: 0.105, h: 0.285,
      zIndex: 20,
      pulseX: 0.595, pulseY: 0.220,
      pop: 'The 6-stage product loop: Research → Wireframes → UI → Prototype → Test → Iterate ♡',
      action: 'scroll',
      target: '#approach'
    },
    // Foreground layer: Laptop (z-index: 25)
    {
      id: 'laptop',
      name: 'Laptop • Park Share Live Prototype',
      tag: 'Live Prototype',
      icon: '💻',
      x: 0.530, y: 0.500, w: 0.240, h: 0.300,
      zIndex: 25,
      pulseX: 0.650, pulseY: 0.630,
      pop: 'Figma interactive prototype: real-time spot reservations',
      action: 'case',
      target: 'park_share'
    },
    // Desk surface layer: Digital Tablet on left (z-index: 28)
    {
      id: 'tablet_wireframe',
      name: 'Digital Tablet • Interactive Wireframes',
      tag: 'Tablet Prototype',
      icon: '📱',
      x: 0.035, y: 0.860, w: 0.315, h: 0.135,
      zIndex: 28,
      pulseX: 0.180, pulseY: 0.925,
      pop: 'Testing touch gestures, tap targets & responsive layouts on tablet',
      action: 'scroll',
      target: '#wireframe-hifi'
    },
    // Desk surface layer: Open Sketchbook (z-index: 28)
    {
      id: 'sketchbook',
      name: 'Sketchbook • Wireframe Ideation & Flows',
      tag: 'Wireframe',
      icon: '✏️',
      x: 0.295, y: 0.745, w: 0.255, h: 0.150,
      zIndex: 28,
      pulseX: 0.420, pulseY: 0.810,
      pop: 'Rapid pencil wireframes exploring information hierarchy',
      action: 'scroll',
      target: '#approach'
    },
    // Coffee Mug (z-index: 28)
    {
      id: 'coffee_mug',
      name: 'Coffee Mug • Fuel for 42 User Interviews',
      tag: 'User Empathy',
      icon: '☕',
      x: 0.185, y: 0.670, w: 0.090, h: 0.175,
      zIndex: 28,
      pulseX: 0.230, pulseY: 0.745,
      pop: 'Good Design, Better Experiences: 42 user research calls completed! ☕',
      action: 'toast'
    },
    // Color Swatches (z-index: 28)
    {
      id: 'color_swatches',
      name: 'Color Swatches • Contrast & HSL Design Tokens',
      tag: 'Design Tokens',
      icon: '🎨',
      x: 0.405, y: 0.870, w: 0.150, h: 0.125,
      zIndex: 28,
      pulseX: 0.475, pulseY: 0.930,
      pop: 'Harmonious HSL tokens tested across diverse lighting conditions',
      action: 'scroll',
      target: '#toolkit'
    },
    // UX Books Stack on Left (z-index: 26)
    {
      id: 'ux_books_left',
      name: 'Design Library • Interaction & Design Systems',
      tag: 'UX Library',
      icon: '📚',
      x: 0.000, y: 0.520, w: 0.180, h: 0.430,
      zIndex: 26,
      pulseX: 0.085, pulseY: 0.760,
      pop: 'Nielsen Norman heuristics & Don Norman’s design principles',
      action: 'scroll',
      target: '#approach'
    },
    // Design Books & Thermos on Right (z-index: 26)
    {
      id: 'desk_books_right',
      name: 'Research Hub • Design Systems & User Testing',
      tag: 'Design Systems',
      icon: '📘',
      x: 0.770, y: 0.600, w: 0.200, h: 0.190,
      zIndex: 26,
      pulseX: 0.865, pulseY: 0.680,
      pop: 'Design systems documentation & user test synthesis logs',
      action: 'scroll',
      target: '#approach'
    },
    // Sticky Note on Desk (z-index: 28)
    {
      id: 'sticky_note_people',
      name: 'Sticky Note • Better Experiences for Real People',
      tag: 'Empathy',
      icon: '💛',
      x: 0.320, y: 0.910, w: 0.080, h: 0.085,
      zIndex: 28,
      pulseX: 0.355, pulseY: 0.945,
      pop: 'Better Experiences for Real People ♡',
      action: 'toast'
    },
    // Sticky Note on Wall (z-index: 20)
    {
      id: 'sticky_note_wall',
      name: 'Sticky Note • Small Steps, Big Designs',
      tag: 'Mantra',
      icon: '✨',
      x: 0.375, y: 0.135, w: 0.055, h: 0.125,
      zIndex: 20,
      pulseX: 0.400, pulseY: 0.195,
      pop: 'Small Steps, Big Designs ♡',
      action: 'toast'
    }
  ];

  // =========================================================================
  // 2. Case Study Data Repository (6 Real Projects)
  // =========================================================================
  const CASE_STUDIES = {
    // Project 1 (Internship): Park Share
    park_share: {
      title: 'Park Share — Smart Urban Parking & Host Platform',
      tagline: 'Connecting urban commuters with verified private parking bays, eliminating circling anxiety through dynamic vehicle dimension fit-checks and transparent hourly host bookings.',
      role: 'Lead UI/UX Designer (Nexzware Technology Internship)',
      timeline: 'Internship Delivery · 2024',
      platform: 'Android & iOS Mobile Application',
      category: 'internship',
      heroImage: 'assets/images/Parkshare/User home .png',
      metrics: [
        { value: '+34%', label: 'Reservation Speed' },
        { value: '94%', label: 'Task Success Rate' },
        { value: '4.8★', label: 'Host Rating' }
      ],
      sections: [
        {
          heading: '01. The Problem Space & Urban Commuter Friction',
          content: 'In densely congested Indian metro centers, commuters spend 15–20 minutes circling blocks searching for parking, compounding fuel costs, air pollution, and stress. Concurrently, thousands of commercial and residential parking bays sit vacant. Park Share builds a verified peer-to-peer ecosystem where space owners monetize empty slots while drivers book guaranteed bays in seconds.'
        },
        {
          heading: '02. Core Innovation: Vehicle Dimension Fit-Check',
          content: 'Through 24 user interviews, drivers reported frequent negative experiences arriving at underground parking only to find low overhead clearance or narrow gates. We engineered an algorithmic Fit-Check modal: users input vehicle height/width once, and the app instantly flags spots as "Verified Fit" or "Clearance Warning" before payment.'
        },
        {
          heading: '03. Dual-Sided Host & Driver Information Architecture',
          content: 'The platform features distinct experiences tailored to two user personas: Drivers (rapid geo-search, amenity filters, real-time navigation directions) and Space Owners (hourly pricing rules, vehicle dimension limits, live bay status tracking, and automated payout accounting).'
        },
        {
          heading: '04. High-Fidelity UI & Production Design System',
          content: 'Designed with high-contrast accessibility tokens in Figma, featuring clear map pins, dark mode compatibility for nighttime parking, and 1-tap booking confirmation with auto-generated QR entry codes.'
        }
      ],
      gallery: [
        { src: 'assets/images/Parkshare/Select user or owner.png', label: 'Dual Role Onboarding' },
        { src: 'assets/images/Parkshare/User home .png', label: 'User Map & Nearby Bays' },
        { src: 'assets/images/Parkshare/User place search.png', label: 'Destination Rate Search' },
        { src: 'assets/images/Parkshare/User vehicle info .png', label: 'Vehicle Specs Setup' },
        { src: 'assets/images/Parkshare/User fit check fits. .png', label: 'Fit Check: Verified Clearance' },
        { src: 'assets/images/Parkshare/User fit check not fit.png', label: 'Fit Check: Clearance Warning' },
        { src: 'assets/images/Parkshare/User prefernce setting.png', label: 'Amenities & Security Filters' },
        { src: 'assets/images/Parkshare/owner home.png', label: 'Host Driveway Dashboard' },
        { src: 'assets/images/Parkshare/owner Parking details.png', label: 'Host Pricing & Rules' },
        { src: 'assets/images/Parkshare/owner fix hight weight.png', label: 'Host Dimension Limits' },
        { src: 'assets/images/Parkshare/owner parking place details.png', label: 'Host Access Guidelines' }
      ]
    },

    // Project 2 (Internship): Fitness Trainer
    fitness_trainer: {
      title: 'Fitness Trainer — Personal Coach Matchmaking & Client Coaching',
      tagline: 'Personalized trainer matchmaking, session scheduling, workout progress monitoring, and seamless revenue tracking for certified fitness coaches.',
      role: 'UI/UX Designer (Nexzware Technology Internship)',
      timeline: 'Internship Delivery · 2024',
      platform: 'iOS & Android Mobile App',
      category: 'internship',
      heroImage: 'assets/images/Fitness trainer/user home.png',
      metrics: [
        { value: '42%', label: 'Higher Match Rate' },
        { value: '180', label: 'Athletes Surveyed' },
        { value: '4.9★', label: 'Trainer Satisfaction' }
      ],
      sections: [
        {
          heading: '01. Background & The Gym Intimidation Barrier',
          content: 'Starting personal training often involves awkward gym desk sales and mismatched coaching philosophies. Both clients and independent personal trainers lacked a transparent digital platform for mutual alignment, scheduling, and habit accountability.'
        },
        {
          heading: '02. Client-Centric Discovery & Booking Funnel',
          content: 'We designed an intuitive onboarding questionnaire identifying client fitness levels, injury history, preferred workout styles, and target schedule. Trainer profiles highlight verified certifications, client transformations, package rates, and live calendar slots.'
        },
        {
          heading: '03. Coach Portal: Roster & Revenue Management',
          content: 'For trainers, the app serves as a mobile command center: viewing upcoming sessions, logging client PRs (personal records) and biomechanical feedback, and monitoring monthly revenue earnings and pending payouts.'
        },
        {
          heading: '04. Visual Craft & Micro-Interactions',
          content: 'Engineered with vibrant energizing coral and clean dark mode typography. Micro-interactions celebrate workout completions and booking confirmations, reinforcing positive behavioral health loops.'
        }
      ],
      gallery: [
        { src: 'assets/images/Fitness trainer/user and trainer.png', label: 'Client / Trainer Selection' },
        { src: 'assets/images/Fitness trainer/user home.png', label: 'Client Fitness Dashboard' },
        { src: 'assets/images/Fitness trainer/user side trainer details.png', label: 'Trainer Profile & Certs' },
        { src: 'assets/images/Fitness trainer/user sesssion option.png', label: 'Session Package Options' },
        { src: 'assets/images/Fitness trainer/user side trainer next sesssion booking.png', label: 'Live Calendar Scheduling' },
        { src: 'assets/images/Fitness trainer/tranier home.png', label: 'Trainer Daily Roster' },
        { src: 'assets/images/Fitness trainer/tranier client info view.png', label: 'Client Health Metrics' },
        { src: 'assets/images/Fitness trainer/tranier client specific session info. .png', label: 'Custom Session Plan' },
        { src: 'assets/images/Fitness trainer/trainer earing.png', label: 'Trainer Monthly Earnings' }
      ]
    },

    // Project 3 (Internship): TNGSA
    tngsa: {
      title: 'TNGSA — Tamil Nadu Govt School Attendance & Admin System',
      tagline: 'Bilingual digital attendance and administrative platform for Tamil Nadu educators featuring daily roll call, leave approvals, Headmaster oversight, bulk Excel roster import, and automated SMS alerts to parents.',
      role: 'UI/UX Designer (Nexzware Technology Internship)',
      timeline: 'GovTech Internship · 2024',
      platform: 'Tablet & Mobile Android App',
      category: 'internship',
      heroImage: 'assets/images/TNGSA/Home teacher .png',
      metrics: [
        { value: '80%', label: 'Faster Roll Call' },
        { value: '100%', label: 'Tamil / English Bilingual' },
        { value: 'Zero', label: 'Data Dropoff' }
      ],
      sections: [
        {
          heading: '01. Digital Transformation for Rural & Urban Classrooms',
          content: 'Paper-based registers in government schools caused significant clerical overhead, delayed absence reporting, and human error in mid-day meal planning. TNGSA modernized school record keeping with a resilient, offline-first attendance solution.'
        },
        {
          heading: '02. Inclusive Bilingual Interface (தமிழ் / English)',
          content: 'Recognizing varying digital literacy levels across primary school staff, the UI supports a 1-tap language toggle between Tamil and English. High-contrast status colors (Green for Present, Red for Absent, Yellow for Leave) ensure zero ambiguity.'
        },
        {
          heading: '03. Headmaster Analytics & Bulk Roster Management',
          content: 'School headmasters gain real-time visibility into grade-level attendance percentages and teacher staffing. Administrators can effortlessly import complete student rosters from existing Government Excel files in seconds.'
        },
        {
          heading: '04. Instant Automated Parent Communication',
          content: 'The platform integrates automated SMS triggers notifying parents immediately when a child is marked absent, strengthening student safety and parental engagement without burdening teachers.'
        }
      ],
      gallery: [
        { src: 'assets/images/TNGSA/Language.png', label: 'Bilingual Language Select' },
        { src: 'assets/images/TNGSA/Home teacher .png', label: 'Teacher Home Dashboard' },
        { src: 'assets/images/TNGSA/Attendance confirmation.png', label: '1-Tap Daily Roll Call' },
        { src: 'assets/images/TNGSA/Attendance correction.png', label: 'Attendance Audit & Correction' },
        { src: 'assets/images/TNGSA/Attendance leave.png', label: 'Leave & Sick Tracking' },
        { src: 'assets/images/TNGSA/SMS.png', label: 'Automated Parent Absence SMS' },
        { src: 'assets/images/TNGSA/Head Mister.png', label: 'Headmaster Administrative Analytics' },
        { src: 'assets/images/TNGSA/Manage.png', label: 'Class & Staff Management' },
        { src: 'assets/images/TNGSA/Add New Class.png', label: 'Add Class Setup' },
        { src: 'assets/images/TNGSA/Add New Class 2.png', label: 'Class Curriculum Mapping' },
        { src: 'assets/images/TNGSA/Add Teacher.png', label: 'Teacher Faculty Registration' },
        { src: 'assets/images/TNGSA/Import from Excel.png', label: 'Bulk Student Excel Import' }
      ]
    },

    // Project 4 (Case Study): BookMyShow
    bookmyshow: {
      title: 'BookMyShow — AI Smart Movie Booking & Rush Eliminator',
      tagline: 'Reinventing blockbuster movie ticket booking by introducing secondary seat/showtime preferences and seamless pre-authorized autopay, eliminating server queues and sold-out heartbreak.',
      role: 'Lead UX Researcher & Product Designer',
      timeline: 'UX Research Case Study · 6 Weeks',
      platform: 'iOS & Android App',
      category: 'casestudy',
      heroImage: 'assets/images/casestudy/Bookmyshow/APP/AI Smart booking page 3.png',
      metrics: [
        { value: '76%', label: 'Rush Anxiety Reduction' },
        { value: '91%', label: 'Autopay Adoption' },
        { value: '3.2s', label: 'Pre-Checkout Speed' },
        { value: '94%', label: 'Fallback Booking Success' }
      ],
      sections: [
        {
          heading: '01. The Blockbuster Rush Problem Space',
          content: 'During major blockbuster ticket drops (Marvel, Rajinikanth, Vijay releases), millions of users flood BookMyShow simultaneously. Users pick seats, enter payment details, and hit gateway errors or sold-out notifications at the final confirmation step, causing extreme user frustration and server overload.'
        },
        {
          heading: '02. Secondary Slot Preferences & Intelligent Fallback',
          content: 'We introduced AI Pre-Booking: users specify primary and secondary showtimes (e.g., 7:00 PM IMAX or 10:30 PM 3D) and secondary seat zones. When sales open, the AI engine secures the best matching seats within milliseconds without user panic.'
        },
        {
          heading: '03. Pre-Authorized Autopay (UPI & Card Mandates)',
          content: 'Legacy checkout required manual OTP or UPI app switching during high-traffic windows. Our redesign enables users to pre-authorize payment via UPI Autopay or tokenized Debit Cards that only deduct funds if tickets are successfully booked, speeding up transactions from 90 seconds to 3.2 seconds.'
        },
        {
          heading: '04. Live Ticket Status Tracking & User Control',
          content: 'A dedicated booking status dashboard keeps fans updated on pre-booking queue position, confirmation receipts, and provides 1-tap cancellation before confirmation triggers.'
        }
      ],
      gallery: [
        { src: 'assets/images/casestudy/Bookmyshow/APP/Movies page 1.png', label: 'Movie Showcase & AI Tag' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/Coming soon 2.png', label: 'Coming Soon Pre-Booking' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/AI Smart booking page 3.png', label: 'AI Smart Booking Engine' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/AI guidlines 4.png', label: 'AI Preference Guidelines' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/booking preference setting 5.png', label: 'Time & Format Preferences' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/seat selection 6.png', label: 'Interactive Seat Matrix' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/number of seats 7.png', label: 'Seat Quantity Selector' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/seat overview 8.png', label: 'Primary Preferred Seats' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/seat selection 1 slot 9.png', label: 'Primary Slot 1 Matrix' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/seat overview II 10.png', label: 'Secondary Fallback Seats' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/seat selection secondry slot 11.png', label: 'Secondary Slot 2 Matrix' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/preview 12.png', label: 'Summary Booking Preview' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/Payment setting for autopay 13.png', label: 'Autopay Pre-Authorization' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/debit cards save 14.png', label: 'Debit Card Tokenization' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/debit cards autopay enabled confirmation 15.png', label: 'Debit Autopay Verified' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/autopay setting for UPI  id verified save 16.png', label: 'UPI Autopay Mandate Setup' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/UPI autopay enable confirmation 17.png', label: 'UPI Autopay Confirmed' },
        { src: 'assets/images/casestudy/Bookmyshow/APP/Prebooking confirmation 18.png', label: 'Rush Booking Locked In' }
      ]
    },

    // Project 5 (Case Study): Sensory Mapping
    sensory_mapping: {
      title: 'Sensory Mapping — Inclusive Urban Environmental Navigation',
      tagline: 'A thoughtful environmental route navigation feature for neurodiverse and sensory-sensitive travelers, offering noise/crowd heatmaps and calm alternative routes.',
      role: 'Accessibility UX Researcher & UI Designer',
      timeline: 'Inclusive Design Case Study · 5 Weeks',
      platform: 'Google Maps Mobile Concept',
      category: 'casestudy',
      heroImage: 'assets/images/casestudy/sensory mapping/Sensory Toggle/Map with Environmental Overlay (Heatmap).png',
      metrics: [
        { value: '88%', label: 'Stress Reduction' },
        { value: '3 Modes', label: 'Sensory Filters' },
        { value: '4.9★', label: 'Inclusivity Rating' }
      ],
      sections: [
        {
          heading: '01. The Invisible Barrier of Sensory Overload',
          content: 'Modern urban navigation apps optimize strictly for speed and distance, ignoring environmental stressors such as piercing construction noise, flashing neon billboards, and suffocating crowd bottlenecks. For autistic individuals, neurodivergent travelers, and people with sensory processing sensitivity, unexpected sensory spikes can induce panic attacks and disorientation.'
        },
        {
          heading: '02. Environmental Heatmap Overlays',
          content: 'Our feature introduces three toggleable layer overlays on Google Maps: Acoustic Decibels (noise zones), Visual Brightness (glare and flashing signage), and Pedestrian Crowd Density. Heatmaps give users immediate visual clarity on environmental turbulence.'
        },
        {
          heading: '03. Calm Alternative Routing Algorithm',
          content: 'Instead of forcing the quickest route down chaotic main avenues, Sensory Mapping presents "Calm Alternative Routes" passing through tree-lined streets, pedestrian plazas, and low-stimulus corridors, showing expected sensory comfort metrics alongside travel duration.'
        },
        {
          heading: '04. Proactive Sensory Smart Alerts',
          content: 'During live turn-by-turn navigation, ambient audio-visual alerts notify travelers 200 meters in advance: "Upcoming high-decibel construction zone in 2 mins. Reroute via park path?" empowering users with agency and peace of mind.'
        }
      ],
      gallery: [
        { src: 'assets/images/casestudy/sensory mapping/Sensory Toggle/Sensory Preferences.png', label: 'Sensory Sensitivity Preferences' },
        { src: 'assets/images/casestudy/sensory mapping/Sensory Toggle/Sensory Toggle.png', label: 'Google Maps Sensory Mode Toggle' },
        { src: 'assets/images/casestudy/sensory mapping/Sensory Toggle/Map with Environmental Overlay (Heatmap).png', label: 'Live Acoustic & Light Heatmap' },
        { src: 'assets/images/casestudy/sensory mapping/Sensory Toggle/Map with Environmental Overlays 1.png', label: 'Acoustic Decibel Heatmap' },
        { src: 'assets/images/casestudy/sensory mapping/Sensory Toggle/Map with Environmental Overlays 2.png', label: 'Crowd Density Overlays' },
        { src: 'assets/images/casestudy/sensory mapping/Sensory Toggle/Route Selection.png', label: 'Calm vs Fast Route Selection' },
        { src: 'assets/images/casestudy/sensory mapping/Sensory Toggle/Navigation with Smart Alerts.png', label: 'Turn-by-Turn Sensory Alerts' },
        { src: 'assets/images/casestudy/sensory mapping/comparison screens/New added feature screen.png', label: 'Before & After Comparison View' }
      ]
    },

    // Project 6 (Case Study): Google Pay Spend Indicator
    gpay: {
      title: 'Google Pay — "Today\'s Spend" Mindfulness Feature',
      tagline: 'Embedding ambient daily spending awareness directly into payment confirmation screens to curb unconscious impulse spending without demanding manual budgeting.',
      role: 'FinTech UX Researcher & Product Designer',
      timeline: 'FinTech Behavioral Case Study · 4 Weeks',
      platform: 'Google Pay Android / iOS Concept',
      category: 'casestudy',
      heroImage: 'assets/images/casestudy/G-pay/camparsion/New feature added version.png',
      metrics: [
        { value: '63%', label: 'Less Impulse Spend' },
        { value: '0s', label: 'Setup Time' },
        { value: '82%', label: 'Financial Clarity' }
      ],
      sections: [
        {
          heading: '01. The UPI Frictionless Spending Paradox',
          content: 'UPI and QR contactless payments made financial transactions completely frictionless. However, removing physical cash tactile friction created a psychological side effect: users lose track of micro-spending across food, cabs, and impulsive small purchases throughout the day.'
        },
        {
          heading: '02. Behavioral Nudge at the Point of Decision',
          content: 'Traditional budgeting apps fail because they require manual transaction logging. Our solution embeds an ambient "Today’s Spend" counter directly on the payment amount entry and camera scan screen, providing instantaneous awareness right before entering UPI PIN.'
        },
        {
          heading: '03. Dynamic Visual Feedback without Guilt',
          content: 'The spend tag uses soft neutral tones that gently shift to warm amber when daily average thresholds are approached. It avoids punitive negative messaging, instead offering constructive mindfulness: "You\'ve spent ₹640 today across 4 transactions."'
        },
        {
          heading: '04. User Validation & Behavioral Impact',
          content: 'Usability testing with 20 young working professionals demonstrated a 63% decrease in unintended impulse micro-transactions, with 95% stating they preferred the ambient indicator over complex third-party budgeting spreadsheets.'
        }
      ],
      gallery: [
        { src: 'assets/images/casestudy/G-pay/gpay screen/google pay 1.png', label: 'Scanner & Contact Pay Flow' },
        { src: 'assets/images/casestudy/G-pay/camparsion/New feature added version.png', label: 'Ambient "Today Spend" Counter' },
        { src: 'assets/images/casestudy/G-pay/gpay screen/2.png', label: 'Payment Entry Screen' },
        { src: 'assets/images/casestudy/G-pay/gpay screen/3.png', label: 'Dynamic Budget Limit Nudge' },
        { src: 'assets/images/casestudy/G-pay/gpay screen/4.png', label: 'Real-Time Total Update' },
        { src: 'assets/images/casestudy/G-pay/gpay screen/5.png', label: 'Quick Category Breakdown' },
        { src: 'assets/images/casestudy/G-pay/gpay screen/6.png', label: 'Daily Milestone Micro-Cheer' },
        { src: 'assets/images/casestudy/G-pay/gpay screen/7.png', label: 'Weekly Trend Sparkline' },
        { src: 'assets/images/casestudy/G-pay/gpay screen/8.png', label: 'Payment Success & Daily Summary' },
        { src: 'assets/images/casestudy/G-pay/gpay screen/9.png', label: 'Mindful Spending History' }
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
    const AR = 1672 / 940;
    let imgW, imgH, imgLeft, imgTop;
    if (W / H > AR) {
      imgW = W;
      imgH = W / AR;
      imgLeft = 0;
      imgTop = (H - imgH) * 0.48; // matching CSS object-position: center 48%
    } else {
      imgH = H;
      imgW = H * AR;
      imgTop = (H - imgH) * 0.48;
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
  // =========================================================================
  // 7. Case Study Deep-Dive Modal with Full UI Screen Gallery & Lightbox
  // =========================================================================
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalBody = document.querySelector('.modal-content-body');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  // Create Screen Zoom Lightbox Element if not exists
  let zoomOverlay = document.querySelector('.screen-zoom-overlay');
  if (!zoomOverlay) {
    zoomOverlay = document.createElement('div');
    zoomOverlay.className = 'screen-zoom-overlay';
    zoomOverlay.innerHTML = `
      <div class="screen-zoom-content">
        <img class="screen-zoom-img" src="" alt="Full Resolution UI Screen">
        <div class="screen-zoom-caption"></div>
      </div>
    `;
    document.body.appendChild(zoomOverlay);

    zoomOverlay.addEventListener('click', () => {
      zoomOverlay.classList.remove('active');
    });
  }

  function openLightbox(src, label) {
    if (!zoomOverlay) return;
    const img = zoomOverlay.querySelector('.screen-zoom-img');
    const cap = zoomOverlay.querySelector('.screen-zoom-caption');
    if (img && cap) {
      img.src = src;
      img.alt = label;
      cap.textContent = `❖ ${label} • Tap anywhere to close`;
      zoomOverlay.classList.add('active');
    }
  }

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

    let galleryHtml = '';
    if (data.gallery && data.gallery.length > 0) {
      galleryHtml = `
        <div style="border-top: 1px solid var(--ink-100); padding-top: 32px; margin-top: 32px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
            <h3 style="font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--ink-900);">
              📱 Complete UI Screens &amp; User Flow (${data.gallery.length} Screens)
            </h3>
            <span style="font-size: 13px; color: var(--coral); font-weight: 600;">✦ Click any screen to zoom in full size</span>
          </div>
          <p style="font-size: 14px; color: var(--ink-500); margin-bottom: 20px;">
            Authentic production screens designed in Figma with pixel-perfect layouts, accessible color contrast tokens, and interactive bottom sheets.
          </p>
          <div class="modal-screens-grid">
            ${data.gallery.map((item) => `
              <div class="modal-screen-item" data-src="${item.src}" data-label="${item.label}" title="Click to view full screen">
                <img src="${item.src}" alt="${item.label}" loading="lazy">
                <div class="screen-label">${item.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    const badgeCategory = data.category === 'internship' ? '💼 Nexzware Internship Project' : '🎓 UX Research Case Study';

    modalBody.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="section-tag" style="margin-bottom: 8px;">${badgeCategory}</span>
        <h2 style="font-family: var(--font-display); font-size: 30px; font-weight: 800; color: var(--ink-900); line-height: 1.25;">${data.title}</h2>
        <p style="font-size: 16px; color: var(--ink-600); margin-top: 10px; line-height: 1.6;">${data.tagline}</p>
        <div style="display: flex; gap: 16px; margin-top: 16px; font-size: 13px; color: var(--ink-500); flex-wrap: wrap;">
          <span><strong>Role:</strong> ${data.role}</span>
          <span>•</span>
          <span><strong>Timeline:</strong> ${data.timeline}</span>
          <span>•</span>
          <span><strong>Platform:</strong> ${data.platform}</span>
        </div>
      </div>

      <div style="width: 100%; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 32px; box-shadow: 0 12px 36px rgba(0,0,0,0.12); border: 1px solid rgba(0,0,0,0.06);">
        <img src="${data.heroImage}" alt="${data.title}" style="width: 100%; display: block; max-height: 520px; object-fit: contain; background: #faf5ef; padding: 20px 0;">
      </div>

      ${metricsHtml}

      <div style="border-top: 1px solid var(--ink-100); padding-top: 32px;">
        ${sectionsHtml}
      </div>

      ${galleryHtml}

      <div style="margin-top: 40px; padding: 26px; background: var(--bg-subtle); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; border: 1px solid rgba(0,0,0,0.05);">
        <div>
          <h4 style="font-size: 16px; font-weight: 700; color: var(--ink-900);">Want to inspect the full Figma design system or prototype?</h4>
          <p style="font-size: 13.5px; color: var(--ink-500); margin-top: 4px;">Component architecture, auto-layout tokens, and interactive flows available for review.</p>
        </div>
        <a href="#contact" onclick="document.getElementById('caseStudyModal').classList.remove('active'); document.body.style.overflow = '';" class="btn-primary">Connect with Sowmiya →</a>
      </div>
    `;

    // Attach click-to-zoom on screen items in modal
    modalBody.querySelectorAll('.modal-screen-item').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.dataset.src;
        const label = item.dataset.label;
        openLightbox(src, label);
      });
    });

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
    if (e.key === 'Escape') {
      if (zoomOverlay && zoomOverlay.classList.contains('active')) {
        zoomOverlay.classList.remove('active');
      } else {
        closeCaseModal();
      }
    }
  });

  // Attach to project buttons dynamically
  function attachCaseButtons() {
    document.querySelectorAll('[data-open-case]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const caseId = btn.dataset.openCase;
        openCaseModal(caseId);
      });
    });
  }

  // =========================================================================
  // 8. Projects Filter Tabs (All / Internship / Case Studies)
  // =========================================================================
  function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-tab-btn');
    const cards = document.querySelectorAll('.project-card.stack-card');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        cards.forEach((card) => {
          const category = card.dataset.category;
          if (filter === 'all' || category === filter) {
            card.classList.remove('is-hidden');
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.opacity = '1';
            }, 30);
          } else {
            card.classList.add('is-hidden');
            card.style.transform = 'translate3d(0, 0, 0) scale(1)';
            card.style.filter = 'none';
          }
        });

        // Re-number visible card stack pills dynamically (e.g. 01 / 03)
        const visibleCards = Array.from(document.querySelectorAll('#cardsStackDeck .project-card.stack-card:not(.is-hidden)'));
        visibleCards.forEach((c, idx) => {
          const pill = c.querySelector('.card-stack-index-pill');
          if (pill) {
            const num = (idx + 1).toString().padStart(2, '0');
            const total = visibleCards.length.toString().padStart(2, '0');
            pill.textContent = `${num} / ${total}`;
          }
        });

        if (window.updateCardStack) {
          setTimeout(window.updateCardStack, 60);
        }
      });
    });
  }

  // =========================================================================
  // 8b. Stacked Cards Parallax Deck Controller
  // =========================================================================
  function initStackedCardsParallax() {
    const deck = document.getElementById('cardsStackDeck');
    if (!deck) return;

    let isUpdating = false;

    window.updateCardStack = function () {
      const cards = Array.from(deck.querySelectorAll('.project-card.stack-card:not(.is-hidden)'));
      if (cards.length === 0) return;

      const viewportHeight = window.innerHeight;
      const stickyThreshold = Math.max(75, Math.min(105, viewportHeight * 0.11));

      cards.forEach((card, idx) => {
        const nextCard = cards[idx + 1];

        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect();
          const cardRect = card.getBoundingClientRect();
          const overlapDistance = cardRect.bottom - nextRect.top;
          const activeRange = cardRect.height * 0.9;

          if (nextRect.top < cardRect.bottom && nextRect.top > stickyThreshold) {
            // Next card is actively sliding up and stacking over this card
            const progress = Math.min(1, Math.max(0, overlapDistance / activeRange));
            const scale = 1 - progress * 0.055; // Scales from 1.00 down to 0.945
            const translateY = -progress * 16; // Smooth upward parallax tuck
            const brightness = 1 - progress * 0.14; // Soft physical shadow dimming
            const blur = progress * 1.2;

            card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale.toFixed(4)})`;
            card.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blur.toFixed(1)}px)`;
          } else if (nextRect.top <= stickyThreshold) {
            // Next card has fully locked over this card
            card.style.transform = `translate3d(0, -16px, 0) scale(0.945)`;
            card.style.filter = `brightness(0.86) blur(1.2px)`;
          } else {
            // Next card has not reached this card yet
            card.style.transform = 'translate3d(0, 0, 0) scale(1)';
            card.style.filter = 'none';
          }
        } else {
          // Last card in the active stack
          card.style.transform = 'translate3d(0, 0, 0) scale(1)';
          card.style.filter = 'none';
        }
      });

      isUpdating = false;
    };

    function onScroll() {
      if (!isUpdating) {
        requestAnimationFrame(window.updateCardStack);
        isUpdating = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial pass
    window.updateCardStack();
  }

  // =========================================================================
  // 9. Interactive Before / After Comparison Tabs Switcher
  // =========================================================================
  const COMPARISONS = {
    bms_slots: {
      title: 'BookMyShow • Legacy 1 Slot vs AI 2 Slots',
      beforeImg: 'assets/images/casestudy/Bookmyshow/Theater and timing/Before 1 time slot.png',
      afterImg: 'assets/images/casestudy/Bookmyshow/Theater and timing/After AI 2 time slot.png',
      beforeBadge: '⚠️ Before: Single Time Slot Constraint',
      afterBadge: '⚡ After: AI Multi-Slot Smart Fallback',
      insights: [
        { icon: '⚡', title: 'Cognitive Friction Elimination', desc: 'By allowing users to set a secondary fallback time slot upfront, drop-off drops from 48% to 12% when high-demand seats sell out.' },
        { icon: '💡', title: 'Real-Time User Feedback', desc: 'Ambient visual cues and clear status chips inform users about seat availability before proceeding to checkout.' },
        { icon: '🎯', title: 'Conversion & Task Success', desc: 'Users complete ticket booking in 3.2 seconds on average, with 91% adopting automated fallback preferences.' }
      ]
    },
    sensory_route: {
      title: 'Sensory Mapping • Standard Route vs Environmental Overlay',
      beforeImg: 'assets/images/casestudy/sensory mapping/comparison screens/Og screen.jpeg',
      afterImg: 'assets/images/casestudy/sensory mapping/comparison screens/New added feature screen.png',
      beforeBadge: '🚗 Before: Standard Google Maps Route',
      afterBadge: '🌿 After: Sound & Crowd Heatmap Overlay',
      insights: [
        { icon: '🌿', title: 'Calm Sensory Navigation', desc: 'Highlights low-decibel, shaded pathways for neurodiverse and sensory-sensitive pedestrians.' },
        { icon: '🎨', title: 'Acoustic & Glare Heatmaps', desc: 'Intuitive color-graded overlays indicate construction noise hotspots and high crowd congestion in real-time.' },
        { icon: '🛡️', title: 'Advance Proactive Alerts', desc: 'Sensory smart notifications alert users 200m before loud zones with 1-tap rerouting options.' }
      ]
    },
    gpay_spend: {
      title: 'Google Pay • Standard Payment vs Today\'s Spend Indicator',
      beforeImg: 'assets/images/casestudy/G-pay/camparsion/old version.png',
      afterImg: 'assets/images/casestudy/G-pay/camparsion/New feature added version.png',
      beforeBadge: '⚪ Before: Static Payment Amount Only',
      afterBadge: '💡 After: Today\'s Spend Awareness Tag',
      insights: [
        { icon: '💡', title: 'Zero-Friction Behavioral Nudge', desc: 'Ambient daily spending total is visible at the instant of payment entry, preventing impulse buys without manual budgeting.' },
        { icon: '🌱', title: 'Non-Punitive Mindfulness', desc: 'Soft pastel badges gently turn warm amber when daily limits approach, keeping budgeting constructive rather than stressful.' },
        { icon: '📊', title: '63% Impulse Reduction', desc: 'Usability testing demonstrated a 63% decrease in unintended impulse micro-transactions across test cohorts.' }
      ]
    },
    bms_payment: {
      title: 'BookMyShow • Manual Payment vs AI Autopay Pre-authorization',
      beforeImg: 'assets/images/casestudy/Bookmyshow/payment/Before payment.png',
      afterImg: 'assets/images/casestudy/Bookmyshow/payment/After New feature auto payment.png',
      beforeBadge: '⏳ Before: Manual Gateway Redirect Checkout',
      afterBadge: '🚀 After: 1-Tap UPI/Debit Pre-Authorized Autopay',
      insights: [
        { icon: '🚀', title: '1-Tap Fast Checkout', desc: 'Pre-authorizes UPI / Debit mandate before booking opens so high-demand tickets are locked in instantaneously.' },
        { icon: '🔒', title: 'Zero Deduction Guarantee', desc: 'Funds are securely escrowed and only debited when ticket generation is verified by the theater server.' },
        { icon: '📈', title: '91% Autopay Adoption', desc: 'Eliminates 90-second gateway wait times and payment session timeouts during blockbuster ticket launches.' }
      ]
    }
  };

  function initComparisonTabs() {
    const compTabs = document.querySelectorAll('.comp-tab-btn');
    const compBeforeImg = document.getElementById('compBeforeImg');
    const compAfterImg = document.getElementById('compAfterImg');
    const compBeforeBadge = document.getElementById('compBeforeBadge');
    const compAfterBadge = document.getElementById('compAfterBadge');
    const compViewerTitle = document.getElementById('compViewerTitle');

    if (!compTabs.length || !compBeforeImg || !compAfterImg) return;

    compTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        compTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const key = tab.dataset.comp;
        const config = COMPARISONS[key];
        if (!config) return;

        // Smooth fade swap
        compBeforeImg.style.opacity = '0.3';
        compAfterImg.style.opacity = '0.3';

        setTimeout(() => {
          compBeforeImg.src = config.beforeImg;
          compAfterImg.src = config.afterImg;
          if (compBeforeBadge) compBeforeBadge.textContent = config.beforeBadge;
          if (compAfterBadge) compAfterBadge.textContent = config.afterBadge;
          if (compViewerTitle) compViewerTitle.textContent = config.title;

          // Update insights
          if (config.insights) {
            config.insights.forEach((ins, i) => {
              const iconEl = document.getElementById(`insightIcon${i + 1}`);
              const titleEl = document.getElementById(`insightTitle${i + 1}`);
              const descEl = document.getElementById(`insightDesc${i + 1}`);
              if (iconEl) iconEl.textContent = ins.icon;
              if (titleEl) titleEl.textContent = ins.title;
              if (descEl) descEl.textContent = ins.desc;
            });
          }

          compBeforeImg.style.opacity = '1';
          compAfterImg.style.opacity = '1';
        }, 150);
      });
    });
  }

  // =========================================================================
  // 10. Cute & Soft Figma-Themed Interactive Animations
  // =========================================================================
  function initCuteFigmaInteractions() {
    // 1. Live Multiplayer Figma Cursor
    const cursor = document.createElement('div');
    cursor.className = 'figma-live-cursor';
    cursor.innerHTML = `
      <svg class="figma-cursor-icon" viewBox="0 0 17 17" fill="none">
        <path d="M1 1L6.5 15.5L9.5 9.5L15.5 6.5L1 1Z" fill="#0D99FF" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
      <div class="figma-cursor-badge">
        <span class="badge-dot"></span>
        <span class="badge-label">❖ Sowmiya • Designing ♡</span>
      </div>
    `;
    document.body.appendChild(cursor);

    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursor.classList.contains('visible')) {
        cursor.classList.add('visible');
      }
    });

    window.addEventListener('mousedown', () => {
      cursor.classList.add('clicking');
    });

    window.addEventListener('mouseup', () => {
      cursor.classList.remove('clicking');
    });

    // Smooth cursor interpolation
    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Playful cursor messages on hovering interactive elements
    const badgeLabel = cursor.querySelector('.badge-label');

    const hoverMessages = [
      { selector: '.project-card', text: '❖ Inspecting UI Screen (412×917)' },
      { selector: '.btn-primary', text: '❖ 1-Click Prototype Preview ✨' },
      { selector: '.comp-tab-btn', text: '❖ Comparing UX Solutions 📐' },
      { selector: '.filter-tab-btn', text: '❖ Filtering Components 🎨' },
      { selector: '.token-palette-card', text: '❖ WCAG AAA Color Tokens ♡' },
      { selector: '.affinity-board-card', text: '❖ Affinity Research Synthesis 💛' },
      { selector: '.nav-resume-btn', text: '❖ Download Sowmiya Resume PDF 📄' }
    ];

    hoverMessages.forEach(({ selector, text }) => {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (badgeLabel) badgeLabel.textContent = text;
        });
        el.addEventListener('mouseleave', () => {
          if (badgeLabel) badgeLabel.textContent = '❖ Sowmiya • Designing ♡';
        });
      });
    });


    // 3. Cute Reaction Burst Particle Emitter on Case Study click
    const cuteEmojis = ['❖', '✨', '💖', '🌸', '📐', '🎨', '💡', '✦'];

    document.querySelectorAll('[data-open-case]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        triggerFigmaBurst(e.clientX, e.clientY);
      });
    });

    function triggerFigmaBurst(x, y) {
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'figma-particle-reaction';
        particle.textContent = cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)];
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const angle = (Math.PI * 2 * i) / 8 + (Math.random() - 0.5) * 0.5;
        const dist = 50 + Math.random() * 60;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist - 20;
        const rot = (Math.random() - 0.5) * 60;

        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        particle.style.setProperty('--rot', `${rot}deg`);

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1900);
      }
    }
  }

  // =========================================================================
  // 11. Copy Email to Clipboard & Mobile Navigation
  // =========================================================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'sowmiyasoms747@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showDeskToast('Email copied to clipboard! 📬 sowmiyasoms747@gmail.com', window.innerWidth / 2, window.innerHeight / 2);
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
  // 12. Hero Parallax Scrolling & 3D Interactive Motion
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
  // 13. Initialization
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initHotspots();
    initCanvas();
    initSplitSlider();
    initAffinityBoard();
    initParallax();
    attachCaseButtons();
    initProjectFilters();
    initStackedCardsParallax();
    initComparisonTabs();
    initCuteFigmaInteractions();
  });

})();
