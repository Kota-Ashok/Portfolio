document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navRow = document.getElementById('nav-row');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navRow) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileToggle.classList.toggle('active');
            navRow.classList.toggle('active');
        });

        // Close navigation menu if click is outside of it on mobile
        document.addEventListener('click', (e) => {
            if (navRow.classList.contains('active') && !navRow.contains(e.target) && e.target !== mobileToggle) {
                mobileToggle.classList.remove('active');
                navRow.classList.remove('active');
            }
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileToggle && navRow) {
                mobileToggle.classList.remove('active');
                navRow.classList.remove('active');
            }
        });
    });



    // 4. Interactive CLI Terminal Simulator
    const terminalBody = document.getElementById('terminal-body');
    const terminalInputRow = document.getElementById('terminal-input-row');
    const terminalTextbox = document.getElementById('terminal-textbox');

    // Terminal command definitions
    const commands = {
        help: () => `Available commands:
  <span style="color: var(--color-primary);">info</span>       - Display professional summary
  <span style="color: var(--color-primary);">skills</span>     - List technical skills by category
  <span style="color: var(--color-primary);">experience</span> - View professional software experience
  <span style="color: var(--color-primary);">projects</span>   - List featured engineering projects
  <span style="color: var(--color-primary);">contact</span>    - Show contact details
  <span style="color: var(--color-primary);">download</span>   - Download PDF Resume
  <span style="color: var(--color-primary);">clear</span>      - Clear terminal history`,
        info: () => `<strong>Ashok Kumar Reddy Kota</strong>
Backend-Focused Full-Stack Software Engineer
-------------------------------------------
2.5+ years of experience building scalable SaaS, FinTech ledger systems, 
educational management software, and AI microservices.
Passionate about distributed systems, performance tuning, and robust security.`,
        skills: () => `<strong>Technical Skill Matrix:</strong>
  - <strong>Backend & APIs:</strong> Python, FastAPI, Django, Django REST Framework, Flask, RESTful APIs, Async Programming, Background Tasks, API Design, API Versioning
  - <strong>Authentication & Security:</strong> OAuth 2.0, OpenID Connect, Keycloak, AWS Cognito, JWT, RBAC, Password Hashing, Token Rotation, TLS 1.3, AES-256
  - <strong>Databases & Caching:</strong> PostgreSQL, MySQL, MongoDB, Redis, Schema Design, Query Optimization, Database Management, Indexing, Caching, Audit Logs
  - <strong>Cloud & AI:</strong> AWS (EC2/S3/RDS/Cognito/CloudFront), AWS Bedrock, Hugging Face, LLMs (Llama 3/Qwen3), Prompt Engineering, RAG, AI Microservices
  - <strong>DevOps & Testing:</strong> Docker, Git, GitHub, CI/CD Concepts, Pytest, Unit Testing, Integration Testing, Postman, Logging & Monitoring
  - <strong>Frontend:</strong> React.js, TypeScript, JavaScript, Redux Toolkit, RTK Query, HTML5, CSS3, Real-Time UI Development
  - <strong>System Design:</strong> Microservices, Event-Driven Architecture, Scalable Architectures, Distributed Systems, Multi-Tenant SaaS, Design Patterns`,
        experience: () => `<strong>Professional Milestones:</strong>
  1. <strong>AppZone Technology</strong> (Mar 2026 - Present) | Software Engineer
     - Project: AP Gurukulam (APTWREIS educational management platform)
     - Tech: Django, REST APIs, MySQL, RBAC
  2. <strong>CosmoOps Private Limited</strong> (Dec 2023 - Feb 2026) | Software Engineer
     - Tech: FastAPI, Django, Redis, PostgreSQL, Stripe/Razorpay, AWS Bedrock
     - Ledger financial system, AI analytics pipeline, WebSockets`,
        projects: () => `<strong>Featured Engineering Projects:</strong>
  - <strong>AP Gurukulam:</strong> Government educational portal (Django, MySQL)
  - <strong>AcuFinAI Engine:</strong> Double-entry ledger wallet & analytics (FastAPI, Redis)
  - <strong>Collabryta:</strong> Real-time remote team chat & summary (WebSockets, Llama 3)
  - <strong>OrbitOrg:</strong> Multi-tenant SaaS platform (FastAPI, React.js, Docker)
  - <strong>Schedora:</strong> High-concurrency appointment scheduling (DRF, React.js, Redis, S3)
  - <strong>OutfitCart:</strong> End-to-end e-commerce workflows (DRF, React.js, PostgreSQL)
  - <strong>Library System:</strong> AWS EC2-hosted book application (Django, SQLite)`,
        contact: () => `<strong>Contact Channels:</strong>
  - <strong>Location:</strong> Hyderabad, Telangana, India
  - <strong>Email:</strong> <a href="mailto:kotaashok543@gmail.com" style="color: var(--color-primary); text-decoration: underline;">kotaashok543@gmail.com</a>
  - <strong>Phone:</strong> +91 8688056443
  - <strong>GitHub:</strong> <a href="https://github.com/kota-ashok" target="_blank" style="color: var(--color-primary); text-decoration: underline;">github.com/kota-ashok</a>
  - <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kota-ashok-reddy/" target="_blank" style="color: var(--color-primary); text-decoration: underline;">linkedin.com/in/kota-ashok-reddy</a>`,
        download: () => {
            // Trigger PDF download
            const link = document.createElement('a');
            link.href = 'AshokReddy_Fullstack_Resume.pdf';
            link.download = 'AshokReddy_Fullstack_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return `Initiated download for <strong>AshokReddy_Fullstack_Resume.pdf</strong>. Check your downloads!`;
        }
    };

    if (terminalTextbox) {
        // Listen for terminal CLI submit
        terminalTextbox.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const rawInput = terminalTextbox.value;
                const cleanInput = rawInput.trim().toLowerCase();
                
                // Clear input textbox
                terminalTextbox.value = '';

                // Add input display line
                const displayLine = document.createElement('div');
                displayLine.className = 'terminal-line';
                displayLine.innerHTML = `<span class="terminal-prompt">guest@ashok-reddy:~$</span> <span class="terminal-command">${escapeHtml(rawInput)}</span>`;
                terminalBody.insertBefore(displayLine, terminalInputRow);

                if (cleanInput === 'clear') {
                    // Clear all terminal lines except the dynamic input line
                    const lines = terminalBody.querySelectorAll('.terminal-line, .terminal-output');
                    lines.forEach(l => l.remove());
                } else if (cleanInput) {
                    const outputLine = document.createElement('div');
                    outputLine.className = 'terminal-output';
                    
                    if (commands[cleanInput]) {
                        outputLine.innerHTML = commands[cleanInput]();
                    } else {
                        outputLine.innerHTML = `Command not found: <span style="color: #ef4444;">${escapeHtml(cleanInput)}</span>. Type <span style="color: var(--color-primary);">help</span> to see options.`;
                    }
                    
                    terminalBody.insertBefore(outputLine, terminalInputRow);
                }

                // Scroll to the bottom of the terminal container
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        });

        // Helper to escape HTML tags entered into the CLI
        function escapeHtml(text) {
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Keep terminal focused on body click
        const terminalContainer = document.getElementById('terminal');
        if (terminalContainer) {
            terminalContainer.addEventListener('click', () => {
                terminalTextbox.focus();
            });
        }
    }

    // 5. Skills Grid Category Filtering
    const tabButtons = document.querySelectorAll('.skill-tab-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state on tab buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Trigger simple transition
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });

    // 6. Project Modal Triggering
    const projectCards = document.querySelectorAll('.project-card');
    const modals = document.querySelectorAll('.modal');
    const modalCloseButtons = document.querySelectorAll('.modal-close-btn');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const project = card.getAttribute('data-project');
            const targetModal = document.getElementById(`modal-${project}`);
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock background scroll
            }
        });
    });

    // Close modals
    function closeAllModals() {
        modals.forEach(m => m.classList.remove('active'));
        document.body.style.overflow = ''; // Unlock background scroll
    }

    modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllModals();
        });
    });

    // Close modal if user clicks on backdrop background
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });

    // Close modals on Esc key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // 7. Active Scroll Section Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY + 140; // Offset for dual-row header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Run once initially

    // 8. Contact Form Handling (Simulation)
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get inputs
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            // Simple validation simulation
            if (name && email && subject && message) {
                // Show sending simulation message
                formFeedback.style.display = 'block';
                formFeedback.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
                formFeedback.style.border = '1px solid var(--color-accent)';
                formFeedback.style.color = '#34d399';
                formFeedback.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.2)';
                formFeedback.innerHTML = `<i data-lucide="check-circle" style="width:14px;height:14px;vertical-align:middle;display:inline-block;margin-right:5px;"></i> Success! Message from <strong>${escapeHtml(name)}</strong> queued. (Simulation)`;
                
                // Re-initialize dynamic feedback icon
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons({
                        attrs: {
                            class: 'lucide-icon'
                        }
                    });
                }

                // Clear the form fields
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formFeedback.style.opacity = '0';
                    setTimeout(() => {
                        formFeedback.style.display = 'none';
                        formFeedback.style.opacity = '1';
                    }, 500);
                }, 5000);
            }
        });
    }
});
