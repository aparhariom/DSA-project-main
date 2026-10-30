# 🎓 SmartExam - Complete Online Examination System Source Code Export

> **Generated**: 10/30/2026, 12:22:34 AM
> **Project**: Online Examination & Proctoring System (SmartExam)
> **Tech Stack**: HTML5, CSS3, JavaScript (ES6+), Node.js REST Backend, WebRTC Live Proctoring, QuickSort Merit Engine

## 📁 Table of Contents

1. [index.html](#index-html)
2. [database/schema.sql](#database-schema-sql)
3. [server/server.js](#server-server-js)
4. [server/package.json](#server-package-json)
5. [js/store.js](#js-store-js)
6. [js/proctor-ai.js](#js-proctor-ai-js)
7. [js/app.js](#js-app-js)
8. [js/auth.js](#js-auth-js)
9. [js/admin.js](#js-admin-js)
10. [js/exam.js](#js-exam-js)
11. [js/questions.js](#js-questions-js)
12. [js/result.js](#js-result-js)
13. [css/style.css](#css-style-css)
14. [css/auth.css](#css-auth-css)
15. [css/dashboard.css](#css-dashboard-css)
16. [css/exam.css](#css-exam-css)
17. [css/login.css](#css-login-css)
18. [student/login.html](#student-login-html)
19. [student/register.html](#student-register-html)
20. [student/dashboard.html](#student-dashboard-html)
21. [student/instructions.html](#student-instructions-html)
22. [student/exam.html](#student-exam-html)
23. [student/result.html](#student-result-html)
24. [student/performance.html](#student-performance-html)
25. [student/exams.html](#student-exams-html)
26. [admin/login.html](#admin-login-html)
27. [admin/dashboard.html](#admin-dashboard-html)
28. [admin/students.html](#admin-students-html)
29. [admin/questions.html](#admin-questions-html)
30. [admin/add-question.html](#admin-add-question-html)
31. [admin/create-exam.html](#admin-create-exam-html)
32. [admin/exams.html](#admin-exams-html)
33. [admin/results.html](#admin-results-html)

---

## 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SmartExam | Next-Gen DSA Online Examination System</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --primary-light: #eff6ff;
            --accent: #3b82f6;
            --navy-dark: #090d16;
            --navy-surface: #0f172a;
            --text-main: #0f172a;
            --text-muted: #64748b;
            --border-light: #e2e8f0;
            --card-bg: #ffffff;
            --success: #10b981;
            --purple: #8b5cf6;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif;
            scroll-behavior: smooth;
        }

        body {
            background-color: #ffffff;
            color: var(--text-main);
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* Ambient Hero Glow */
        .bg-glow {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            height: 650px;
            background: radial-gradient(circle at 50% 10%, rgba(37, 99, 235, 0.12) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%);
            z-index: -1;
            pointer-events: none;
        }

        /* Glassmorphic Sticky Header */
        header {
            position: sticky;
            top: 0;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            z-index: 100;
        }

        .navbar {
            max-width: 1240px;
            margin: 0 auto;
            padding: 16px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .brand-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            font-size: 22px;
            font-weight: 800;
            color: var(--navy-dark);
            letter-spacing: -0.5px;
        }

        .brand-logo .logo-icon {
            width: 38px;
            height: 38px;
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: #ffffff;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: 800;
            box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
        }

        .brand-logo span {
            color: var(--primary);
        }

        .nav-menu {
            display: flex;
            align-items: center;
            gap: 28px;
            list-style: none;
        }

        .nav-menu a {
            text-decoration: none;
            color: var(--text-muted);
            font-size: 14px;
            font-weight: 600;
            transition: color 0.2s ease;
        }

        .nav-menu a:hover {
            color: var(--primary);
        }

        .nav-actions {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .btn-nav-student {
            text-decoration: none;
            color: var(--navy-dark);
            font-size: 14px;
            font-weight: 600;
            padding: 9px 18px;
            border-radius: 8px;
            transition: background 0.2s ease;
        }

        .btn-nav-student:hover {
            background: #f1f5f9;
        }

        .btn-nav-admin {
            text-decoration: none;
            background: var(--navy-dark);
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
            padding: 9px 18px;
            border-radius: 8px;
            transition: all 0.2s ease;
            box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15);
        }

        .btn-nav-admin:hover {
            background: #1e293b;
            transform: translateY(-1px);
        }

        /* Hero Section */
        .hero-section {
            max-width: 1240px;
            margin: 0 auto;
            padding: 70px 24px 80px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #eff6ff;
            color: var(--primary);
            border: 1px solid #dbeafe;
            padding: 6px 14px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 24px;
            animation: fadeIn 0.8s ease-out;
        }

        .hero-badge .pulse-dot {
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
            animation: pulse 2s infinite;
        }

        .hero-title {
            font-size: 54px;
            font-weight: 800;
            letter-spacing: -1.5px;
            line-height: 1.15;
            color: var(--navy-dark);
            max-width: 860px;
            margin-bottom: 20px;
        }

        .gradient-text {
            background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
            font-size: 18px;
            color: var(--text-muted);
            max-width: 650px;
            line-height: 1.6;
            margin-bottom: 36px;
        }

        .hero-cta-group {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 60px;
        }

        .btn-hero-primary {
            background: var(--primary);
            color: #ffffff;
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            padding: 14px 28px;
            border-radius: 10px;
            box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.35);
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-hero-primary:hover {
            background: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.45);
        }

        .btn-hero-secondary {
            background: #ffffff;
            color: var(--navy-dark);
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            padding: 14px 24px;
            border-radius: 10px;
            border: 1px solid var(--border-light);
            transition: all 0.2s ease;
        }

        .btn-hero-secondary:hover {
            background: #f8fafc;
            border-color: #cbd5e1;
        }

        /* Hero Preview Card Mockup */
        .hero-preview {
            width: 100%;
            max-width: 950px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.08);
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            text-align: left;
        }

        .preview-mini-card {
            background: #f8fafc;
            border: 1px solid var(--border-light);
            padding: 18px;
            border-radius: 12px;
            transition: transform 0.2s ease;
        }

        .preview-mini-card:hover {
            transform: translateY(-3px);
            background: #ffffff;
            box-shadow: 0 8px 16px rgba(0,0,0,0.04);
        }

        .preview-mini-card .mini-tag {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--primary);
            margin-bottom: 6px;
        }

        .preview-mini-card h3 {
            font-size: 16px;
            font-weight: 700;
            color: var(--navy-dark);
            margin-bottom: 6px;
        }

        .preview-mini-card p {
            font-size: 13px;
            color: var(--text-muted);
        }

        /* Features Section */
        .section-wrapper {
            max-width: 1240px;
            margin: 0 auto;
            padding: 90px 24px;
        }

        .section-header {
            text-align: center;
            max-width: 680px;
            margin: 0 auto 55px;
        }

        .section-tag {
            color: var(--primary);
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
            display: inline-block;
        }

        .section-header h2 {
            font-size: 36px;
            font-weight: 800;
            letter-spacing: -0.8px;
            color: var(--navy-dark);
            margin-bottom: 12px;
        }

        .section-header p {
            color: var(--text-muted);
            font-size: 16px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
        }

        .feature-box {
            background: #ffffff;
            border: 1px solid var(--border-light);
            border-radius: 14px;
            padding: 32px;
            transition: all 0.25s ease;
            position: relative;
        }

        .feature-box:hover {
            border-color: #cbd5e1;
            box-shadow: 0 12px 24px -6px rgba(15, 23, 42, 0.06);
            transform: translateY(-4px);
        }

        .feature-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            margin-bottom: 20px;
        }

        .icon-blue { background: #eff6ff; color: var(--primary); }
        .icon-green { background: #ecfdf5; color: var(--success); }
        .icon-purple { background: #f5f3ff; color: var(--purple); }
        .icon-amber { background: #fffbeb; color: #d97706; }

        .feature-box h3 {
            font-size: 19px;
            font-weight: 700;
            color: var(--navy-dark);
            margin-bottom: 10px;
        }

        .feature-box p {
            font-size: 14px;
            color: var(--text-muted);
            line-height: 1.6;
        }

        .dsa-badge {
            display: inline-block;
            margin-top: 14px;
            font-size: 11px;
            font-weight: 700;
            background: #f1f5f9;
            color: #475569;
            padding: 3px 8px;
            border-radius: 6px;
        }

        /* Dual Portal Section */
        .portal-split-section {
            background: #f8fafc;
            border-top: 1px solid var(--border-light);
            border-bottom: 1px solid var(--border-light);
            padding: 90px 24px;
        }

        .portal-grid {
            max-width: 1240px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }

        .portal-card {
            background: #ffffff;
            border: 1px solid var(--border-light);
            border-radius: 16px;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.25s ease;
        }

        .portal-card:hover {
            box-shadow: 0 16px 32px rgba(15, 23, 42, 0.05);
            transform: translateY(-3px);
        }

        .portal-card.dark {
            background: var(--navy-surface);
            color: #ffffff;
            border-color: #1e293b;
        }

        .portal-card.dark h3 {
            color: #ffffff;
        }

        .portal-card.dark p {
            color: #94a3b8;
        }

        .portal-card h3 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .portal-card p {
            font-size: 15px;
            color: var(--text-muted);
            margin-bottom: 24px;
        }

        .portal-checklist {
            list-style: none;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            font-size: 14px;
        }

        .portal-checklist li {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .check-dot {
            color: var(--primary);
            font-weight: 800;
        }

        .portal-card.dark .check-dot {
            color: #60a5fa;
        }

        .btn-portal {
            display: inline-block;
            text-align: center;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
        }

        .btn-portal-blue {
            background: var(--primary);
            color: #ffffff;
        }

        .btn-portal-blue:hover {
            background: var(--primary-hover);
        }

        .btn-portal-white {
            background: #ffffff;
            color: var(--navy-dark);
        }

        .btn-portal-white:hover {
            background: #f1f5f9;
        }

        /* Footer */
        footer {
            background: #ffffff;
            padding: 60px 24px 30px;
            border-top: 1px solid var(--border-light);
        }

        .footer-inner {
            max-width: 1240px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            padding-bottom: 30px;
            border-bottom: 1px solid var(--border-light);
        }

        .footer-bottom {
            max-width: 1240px;
            margin: 25px auto 0;
            text-align: center;
            font-size: 13px;
            color: var(--text-muted);
        }

        /* Animations */
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.6); }
            70% { box-shadow: 0 0 0 8px rgba(37, 99, 235, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
            .hero-title { font-size: 38px; }
            .hero-preview { grid-template-columns: 1fr; }
            .portal-grid { grid-template-columns: 1fr; }
            .nav-menu { display: none; }
        }
    </style>
</head>
<body>

    <div class="bg-glow"></div>

    <!-- Header / Navbar -->
    <header>
        <div class="navbar">
            <a href="index.html" class="brand-logo">
                <div class="logo-icon">E</div>
                Exam Matrix<span></span>
            </a>

            <ul class="nav-menu">
                <li><a href="#features">Features</a></li>
                <li><a href="#portals">Portals</a></li>
                <li><a href="#about">Architecture</a></li>
            </ul>

            <div class="nav-actions">
                <a href="student/login.html" class="btn-nav-student">Student Login</a>
                <a href="admin/login.html" class="btn-nav-admin">Admin Portal →</a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-badge">
            <div class="pulse-dot"></div>
            DSA Powered Examination Engine
        </div>

        <h1 class="hero-title">
             ExamMatrix  <br>
            <span class="gradient-text">Online Examination Portal</span>
        </h1>

        <p class="hero-subtitle">
            An academic examination management system implementing real-world Data Structures: Linked Lists, Stacks, Priority Queues, and QuickSort ranking.
        </p>

        <div class="hero-cta-group">
            <a href="student/login.html" class="btn-hero-primary">
                Take Online Exam <span>→</span>
            </a>
            <a href="admin/login.html" class="btn-hero-secondary">
                Teacher / Admin Access
            </a>
        </div>

        <!-- 3-Pillar Highlight Cards -->
        <div class="hero-preview">
            <div class="preview-mini-card">
                <div class="mini-tag">Stack & Queue</div>
                <h3>Question Palette</h3>
                <p>Track answered, skipped, and marked questions with real-time state management.</p>
            </div>
            <div class="preview-mini-card">
                <div class="mini-tag">Synchronized Bank</div>
                <h3>Live Question Sync</h3>
                <p>Questions published by teachers appear instantly in the candidate's test room.</p>
            </div>
            <div class="preview-mini-card">
                <div class="mini-tag">QuickSort Ranking</div>
                <h3>Automated Merit List</h3>
                <p>Instant scoring, accuracy analysis, and dynamic leaderboard sorting.</p>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="section-wrapper" id="features">
        <div class="section-header">
            <span class="section-tag">Core Capabilities</span>
            <h2>Engineered with Core DSA Logic</h2>
            <p>Practical integration of algorithmic efficiency and clean user interface design.</p>
        </div>

        <div class="features-grid">
            <div class="feature-box">
                <div class="feature-icon-wrapper icon-blue">⏱️</div>
                <h3>Smart Reverse Timer</h3>
                <p>Automatic countdown and auto-submission safeguards ensure precise exam timings.</p>
                <span class="dsa-badge">State Management</span>
            </div>

            <div class="feature-box">
                <div class="feature-icon-wrapper icon-green">📚</div>
                <h3>Central Question Bank</h3>
                <p>Categorized MCQs filtered by Subject, Difficulty (Easy/Medium/Hard), and Marks.</p>
                <span class="dsa-badge">Linked List & Hashing</span>
            </div>

            <div class="feature-box">
                <div class="feature-icon-wrapper icon-purple">🏆</div>
                <h3>Instant Scorecard & Merit</h3>
                <p>Get immediate answer breakdown with verified correct keys and candidate accuracy.</p>
                <span class="dsa-badge">QuickSort Algorithm</span>
            </div>

            <div class="feature-box">
                <div class="feature-icon-wrapper icon-amber">🛡️</div>
                <h3>Secure Authentication</h3>
                <p>Role-based access separation between Candidates and Examination Administrators.</p>
                <span class="dsa-badge">Session Control</span>
            </div>
        </div>
    </section>

    <!-- Dual Portal Showcase Section -->
    <section class="portal-split-section" id="portals">
        <div class="portal-grid">
            
            <!-- Student Portal Card -->
            <div class="portal-card">
                <div>
                    <span class="section-tag">For Candidates</span>
                    <h3>Student Portal</h3>
                    <p>Access categorized mock tests, practice DSA algorithms, and receive immediate results.</p>

                    <ul class="portal-checklist">
                        <li><span class="check-dot">✓</span> Chapter-wise mock examinations</li>
                        <li><span class="check-dot">✓</span> Interactive question navigation palette</li>
                        <li><span class="check-dot">✓</span> Detailed scorecard with correct answers key</li>
                    </ul>
                </div>
                <a href="student/login.html" class="btn-portal btn-portal-blue">Student Login Portal →</a>
            </div>

            <!-- Admin Portal Card (Dark Theme) -->
            <div class="portal-card dark">
                <div>
                    <span class="section-tag" style="color:#60a5fa;">For Teachers / Admins</span>
                    <h3>Admin Management</h3>
                    <p>Full control over question bank creation, scheduling exams, and reviewing merit rankings.</p>

                    <ul class="portal-checklist">
                        <li><span class="check-dot">✓</span> Add, edit & delete MCQs dynamically</li>
                        <li><span class="check-dot">✓</span> Schedule & toggle exam availability</li>
                        <li><span class="check-dot">✓</span> Real-time student performance leaderboard</li>
                    </ul>
                </div>
                <a href="admin/login.html" class="btn-portal btn-portal-white">Admin Dashboard Login →</a>
            </div>

        </div>
    </section>

    <!-- Footer -->
    <footer id="about">
        <div class="footer-inner">
            <div class="brand-logo">
                <div class="logo-icon">E</div>
                Exam Matrix<span></span>
            </div>

            <div style="font-size: 14px; color: var(--text-muted);">
                Data Structures & Algorithms Mini Project &bull; Academic Year 2026
            </div>
        </div>

        <div class="footer-bottom">
            &copy; 2026 ExamMatrix System. All rights reserved.
        </div>
    </footer>

</body>
</html>
```

---

## 📄 `database/schema.sql`

```sql
-- ========================================================
-- SMARTEXAM - RELATIONAL DATABASE SCHEMA (MySQL / PostgreSQL)
-- Complete schema for users, questions, exams, results, and proctoring.
-- ========================================================

CREATE DATABASE IF NOT EXISTS smartexam_db;
USE smartexam_db;

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('STUDENT', 'ADMIN') DEFAULT 'STUDENT',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. SUBJECTS TABLE
CREATE TABLE IF NOT EXISTS subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(20) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. QUESTIONS TABLE (CENTRAL QUESTION BANK)
CREATE TABLE IF NOT EXISTS questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subject_id INT NOT NULL,
    question_text TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_option CHAR(1) NOT NULL, -- 'A', 'B', 'C', 'D'
    difficulty ENUM('Easy', 'Medium', 'Hard') DEFAULT 'Medium',
    marks INT DEFAULT 2,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

-- 4. EXAMINATIONS TABLE
CREATE TABLE IF NOT EXISTS exams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    subject_id INT NOT NULL,
    duration_minutes INT NOT NULL DEFAULT 30,
    total_questions INT NOT NULL DEFAULT 15,
    pass_percentage INT NOT NULL DEFAULT 40,
    deadline DATETIME DEFAULT NULL,
    status ENUM('Active', 'Closed', 'Draft') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

-- 5. EXAM SUBMISSIONS & PROCTORING AUDIT TABLE
CREATE TABLE IF NOT EXISTS exam_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    exam_id INT,
    user_id INT NOT NULL,
    score INT NOT NULL DEFAULT 0,
    total_marks INT NOT NULL DEFAULT 0,
    percentage DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    status ENUM('Passed', 'Failed') NOT NULL,
    proctor_strikes INT DEFAULT 0,
    is_flagged BOOLEAN DEFAULT FALSE,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE SET NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 6. PROCTORING INTEGRITY SNAPSHOTS TABLE
CREATE TABLE IF NOT EXISTS proctor_snapshots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id INT NOT NULL,
    snapshot_label VARCHAR(100) NOT NULL,
    snapshot_type ENUM('checkin', 'periodic', 'violation', 'submission') DEFAULT 'periodic',
    image_data MEDIUMTEXT, -- Base64 data URI or Cloud Storage URL
    captured_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (submission_id) REFERENCES exam_submissions(id) ON DELETE CASCADE
);

-- 6. SUBMISSION ANSWER BREAKDOWN
CREATE TABLE IF NOT EXISTS submission_answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id INT NOT NULL,
    question_id INT NOT NULL,
    chosen_option CHAR(1),
    correct_option CHAR(1) NOT NULL,
    is_correct BOOLEAN NOT NULL DEFAULT FALSE,
    marks_awarded INT DEFAULT 0,
    FOREIGN KEY (submission_id) REFERENCES exam_submissions(id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

-- ========================================================
-- SEED DATA (INITIAL DATA POPULATION)
-- ========================================================

-- Insert Demo Users
INSERT INTO users (name, email, password_hash, role) VALUES
('Aditya Gore', 'student@smartexam.com', 'student123', 'STUDENT'),
('Administrator', 'admin@smartexam.com', 'admin123', 'ADMIN');

-- Insert Subjects
INSERT INTO subjects (name, code, description) VALUES
('Data Structures & Algorithms', 'DSA', 'Core DSA concepts including stacks, queues, trees, graphs & algorithms'),
('Java Programming', 'JAVA', 'Core Java, OOPs principles, collections, exceptions and multithreading'),
('Database Management', 'DBMS', 'Relational database systems, normalization, indexing and SQL queries'),
('C Programming', 'C', 'Pointers, memory allocation, structs and standard C programming'),
('General Aptitude', 'APT', 'Logical reasoning, quantitative problem solving and analytics');

-- Insert Sample Questions
INSERT INTO questions (subject_id, question_text, option_a, option_b, option_c, option_d, correct_option, difficulty, marks) VALUES
(1, 'Which data structure follows the LIFO (Last In First Out) principle?', 'Queue', 'Stack', 'Tree', 'Array', 'B', 'Easy', 2),
(1, 'Which data structure follows the FIFO (First In First Out) principle?', 'Stack', 'Queue', 'Binary Search Tree', 'Graph', 'B', 'Easy', 2),
(1, 'What is the time complexity to access an element by index in an array?', 'O(1)', 'O(n)', 'O(log n)', 'O(n²)', 'A', 'Easy', 2),
(1, 'Which of the following data structures is non-linear?', 'Array', 'Linked List', 'Stack', 'Binary Tree', 'D', 'Easy', 2),
(1, 'What is the worst-case time complexity of Linear Search in an array of size n?', 'O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'C', 'Easy', 2),
(1, 'What is the prerequisite condition required to perform Binary Search on an array?', 'The array must be sorted', 'The array must contain only positive numbers', 'The array must have an even number of elements', 'The array must be dynamic', 'A', 'Easy', 2),
(1, 'In a singly linked list, each node contains data and a pointer to:', 'The previous node', 'The next node', 'The head node', 'Both next and previous nodes', 'B', 'Easy', 2),
(1, 'Which operation is used to insert an element into a Stack?', 'Pop', 'Push', 'Enqueue', 'Dequeue', 'B', 'Easy', 2),
(1, 'Which operation is used to remove an element from a Queue?', 'Push', 'Pop', 'Enqueue', 'Dequeue', 'D', 'Easy', 2),
(1, 'What is the maximum number of children a binary tree node can have?', '1', '2', '3', 'Any number', 'B', 'Easy', 2),
(1, 'What is the time complexity of Binary Search on a sorted array of size n?', 'O(1)', 'O(log n)', 'O(n)', 'O(n²)', 'B', 'Easy', 2),
(1, 'Which tree traversal visits the root node before its left and right subtrees?', 'Inorder', 'Preorder', 'Postorder', 'Level-order', 'B', 'Easy', 2),
(1, 'Which data structure is typically used to implement Breadth-First Search (BFS)?', 'Stack', 'Queue', 'Priority Queue', 'Binary Tree', 'B', 'Easy', 2),
(1, 'Which data structure is typically used to implement Depth-First Search (DFS)?', 'Queue', 'Stack', 'Circular Queue', 'Hash Map', 'B', 'Easy', 2),
(1, 'What is the term for attempting to push an element onto a full stack?', 'Underflow', 'Overflow', 'Segmentation fault', 'Deadlock', 'B', 'Easy', 2),
(1, 'What is the term for attempting to pop an element from an empty stack?', 'Overflow', 'Underflow', 'Garbage collection', 'Memory leak', 'B', 'Easy', 2),
(1, 'In a circular queue of capacity N, after index N-1, where does the next element go?', 'Index N', 'Index 0', 'Index -1', 'It cannot be inserted', 'B', 'Easy', 2),
(1, 'Which sorting algorithm repeatedly compares adjacent elements and swaps them if out of order?', 'Selection Sort', 'Bubble Sort', 'Merge Sort', 'QuickSort', 'B', 'Easy', 2),
(1, 'A node in a standard doubly linked list contains how many pointers?', '0', '1', '2', '3', 'C', 'Easy', 2),
(1, 'What is the top pointer of a Stack initialized to when using a 0-indexed array?', '-1', '0', '1', 'null', 'A', 'Easy', 2),
(2, 'Which keyword is used to create an instance of a class in Java?', 'class', 'new', 'create', 'alloc', 'B', 'Easy', 2),
(2, 'What is the default value of a boolean instance variable in Java?', 'true', 'false', '0', 'null', 'B', 'Easy', 2),
(2, 'Which of the following is NOT a primitive data type in Java?', 'int', 'float', 'String', 'char', 'C', 'Easy', 2),
(2, 'Which keyword in Java is used to inherit a class?', 'implements', 'extends', 'inherits', 'instanceof', 'B', 'Easy', 2),
(2, 'Which keyword in Java is used to implement an interface?', 'extends', 'implements', 'interface', 'import', 'B', 'Easy', 2),
(2, 'What is the return type of a constructor in Java?', 'void', 'int', 'No return type', 'Object', 'C', 'Easy', 2),
(2, 'Which Java keyword prevents a method from being overridden in a subclass?', 'static', 'final', 'abstract', 'synchronized', 'B', 'Easy', 2),
(2, 'Which method is the starting execution point for any Java standalone application?', 'start()', 'main()', 'run()', 'init()', 'B', 'Easy', 2),
(2, 'What is the size of an int data type in standard Java?', '2 bytes', '4 bytes', '8 bytes', '1 byte', 'B', 'Easy', 2),
(2, 'Which exception is thrown when attempting to divide an integer by zero in Java?', 'NullPointerException', 'ArithmeticException', 'NumberFormatException', 'ArrayIndexOutOfBoundsException', 'B', 'Easy', 2),
(2, 'What does JVM stand for?', 'Java Virtual Machine', 'Java Variable Manager', 'Java Visual Mechanism', 'Java Vector Method', 'A', 'Easy', 2),
(2, 'Which package is automatically imported in every Java program without explicit import?', 'java.util', 'java.io', 'java.lang', 'java.net', 'C', 'Easy', 2),
(2, 'Which block is always executed in exception handling, whether an exception occurs or not?', 'try', 'catch', 'finally', 'throw', 'C', 'Easy', 2),
(2, 'Which keyword is used to refer to the immediate parent class object in Java?', 'this', 'super', 'parent', 'base', 'B', 'Easy', 2),
(2, 'Which collection class in Java provides a resizable array implementation of the List interface?', 'ArrayList', 'HashSet', 'TreeSet', 'HashMap', 'A', 'Easy', 2),
(2, 'What is the index of the first element in a Java array?', '-1', '0', '1', 'Depends on declaration', 'B', 'Easy', 2),
(2, 'Which keyword is used to define a constant variable whose value cannot change in Java?', 'const', 'final', 'static', 'immutable', 'B', 'Easy', 2),
(2, 'Defining multiple methods with the same name but different parameters in one class is known as:', 'Method Overloading', 'Method Overriding', 'Encapsulation', 'Inheritance', 'A', 'Easy', 2),
(2, 'Which Java keyword is used to access package members from another file or package?', 'include', 'import', 'using', 'require', 'B', 'Easy', 2),
(2, 'Are String objects in Java mutable or immutable?', 'Mutable', 'Immutable', 'Depends on compiler', 'Dynamic', 'B', 'Easy', 2),
(3, 'What does DBMS stand for?', 'Database Management System', 'Data Base Multi System', 'Digital Backup Management System', 'Data Block Memory Storage', 'A', 'Easy', 2),
(3, 'What does SQL stand for?', 'Structured Query Language', 'Sequential Query List', 'Simple Query Logic', 'Standard Question Language', 'A', 'Easy', 2),
(3, 'Which SQL command is used to retrieve data from a database table?', 'GET', 'FETCH', 'SELECT', 'RETRIEVE', 'C', 'Easy', 2),
(3, 'Which SQL clause is used to filter records based on a specified condition?', 'ORDER BY', 'GROUP BY', 'WHERE', 'HAVING', 'C', 'Easy', 2),
(3, 'Which key uniquely identifies each record/tuple in a database table?', 'Foreign Key', 'Candidate Key', 'Primary Key', 'Super Key', 'C', 'Easy', 2),
(3, 'A foreign key in a child table references which key in the parent table?', 'Composite Key', 'Primary Key', 'Foreign Key', 'Alternate Key', 'B', 'Easy', 2),
(3, 'Which SQL command is used to insert new rows of data into a table?', 'ADD ROW', 'INSERT INTO', 'UPDATE', 'CREATE', 'B', 'Easy', 2),
(3, 'Which SQL command is used to modify existing data records in a table?', 'MODIFY', 'CHANGE', 'UPDATE', 'ALTER', 'C', 'Easy', 2),
(3, 'Which SQL command is used to remove specific rows from a table?', 'REMOVE', 'DELETE', 'DROP', 'TRUNCATE', 'B', 'Easy', 2),
(3, 'Which SQL statement is used to permanently remove an entire table including its schema?', 'DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'CLEAR TABLE', 'B', 'Easy', 2),
(3, 'What does ACID stand for in the context of DBMS transactions?', 'Atomicity, Consistency, Isolation, Durability', 'Accuracy, Control, Integrity, Data', 'Access, Security, Identity, Device', 'Auto, Cache, Index, Directory', 'A', 'Easy', 2),
(3, 'Which ACID property ensures that all operations in a transaction succeed or none occur?', 'Consistency', 'Atomicity', 'Isolation', 'Durability', 'B', 'Easy', 2),
(3, 'Which clause is used in SQL to sort the query result-set?', 'SORT BY', 'ORDER BY', 'ARRANGE BY', 'GROUP BY', 'B', 'Easy', 2),
(3, 'By default, what sort order does the ORDER BY clause apply in SQL?', 'Descending (DESC)', 'Ascending (ASC)', 'Random', 'Creation order', 'B', 'Easy', 2),
(3, 'Which SQL aggregate function is used to count the number of rows matching a condition?', 'SUM()', 'COUNT()', 'TOTAL()', 'NUMBER()', 'B', 'Easy', 2),
(3, 'Which SQL keyword is used to return only distinct (different) values?', 'UNIQUE', 'DISTINCT', 'DIFFERENT', 'SEPARATE', 'B', 'Easy', 2),
(3, 'What type of SQL JOIN returns rows that have matching values in both tables?', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN', 'C', 'Easy', 2),
(3, 'What fundamental rule does First Normal Form (1NF) enforce in a database table?', 'Elimination of transitive dependency', 'Atomic (indivisible) values in every column', 'No partial key dependency', 'Primary key indexing', 'B', 'Easy', 2),
(3, 'Which of the following SQL commands belongs to DDL (Data Definition Language)?', 'SELECT', 'INSERT', 'CREATE', 'UPDATE', 'C', 'Easy', 2),
(3, 'What is a View in relational SQL databases?', 'A physical copy of the database', 'A virtual table based on a SQL query result', 'A database backup file', 'A special primary key index', 'B', 'Easy', 2),
(4, 'Who is recognized as the creator of the C programming language?', 'Bjarne Stroustrup', 'Dennis Ritchie', 'James Gosling', 'Guido van Rossum', 'B', 'Easy', 2),
(4, 'Which header file is required to use printf() and scanf() in a C program?', '<stdlib.h>', '<stdio.h>', '<conio.h>', '<string.h>', 'B', 'Easy', 2),
(4, 'Which format specifier is used to print an integer value in C?', '%f', '%c', '%d', '%s', 'C', 'Easy', 2),
(4, 'Which format specifier is used to print a single character in C?', '%c', '%s', '%d', '%f', 'A', 'Easy', 2),
(4, 'What character is used to terminate every simple statement in C?', ': (colon)', '; (semicolon)', '. (dot)', ', (comma)', 'B', 'Easy', 2),
(4, 'What is the standard return type of the main() function in ANSI C?', 'void', 'int', 'float', 'char', 'B', 'Easy', 2),
(4, 'What does a pointer variable store in C?', 'Value of another variable', 'Memory address of another variable', 'Name of a function', 'Size of data type', 'B', 'Easy', 2),
(4, 'Which operator is used to determine the memory address of a variable in C?', '* (asterisk)', '& (ampersand)', '-> (arrow)', '% (percent)', 'B', 'Easy', 2),
(4, 'Which operator is used to dereference a pointer (access value at address) in C?', '&', '*', '#', '->', 'B', 'Easy', 2),
(4, 'What is the size of a char data type in standard C?', '1 byte', '2 bytes', '4 bytes', '8 bytes', 'A', 'Easy', 2),
(4, 'Which escape sequence character marks the end of a string in C?', '''\0'' (null character)', '''\n'' (newline)', '''\t'' (tab)', ''' '' (space)', 'A', 'Easy', 2),
(4, 'Which function dynamically allocates memory in C without initializing it to zero?', 'calloc()', 'malloc()', 'realloc()', 'free()', 'B', 'Easy', 2),
(4, 'Which function is used to deallocate dynamically allocated heap memory in C?', 'delete()', 'free()', 'clear()', 'release()', 'B', 'Easy', 2),
(4, 'Which function dynamically allocates memory and initializes all allocated bytes to zero?', 'malloc()', 'calloc()', 'alloc()', 'memset()', 'B', 'Easy', 2),
(4, 'What is the starting index of an array in C?', '-1', '0', '1', 'User-defined', 'B', 'Easy', 2),
(4, 'Which loop construct in C is guaranteed to execute its body at least once?', 'for loop', 'while loop', 'do-while loop', 'nested loop', 'C', 'Easy', 2),
(4, 'Which keyword is used to terminate and exit immediately from a loop in C?', 'exit', 'stop', 'break', 'continue', 'C', 'Easy', 2),
(4, 'Which keyword is used to skip the rest of the current iteration and jump to the next?', 'skip', 'continue', 'pass', 'next', 'B', 'Easy', 2),
(4, 'Which compile-time operator returns the size of a variable or data type in bytes?', 'sizeof', 'len', 'size', 'bytes', 'A', 'Easy', 2),
(4, 'Which standard library function in <string.h> is used to determine the length of a string?', 'strlength()', 'strlen()', 'strcount()', 'size()', 'B', 'Easy', 2),
(5, 'What is 15% of 200?', '20', '25', '30', '35', 'C', 'Easy', 2),
(5, 'Find the next number in the geometric progression: 2, 4, 8, 16, ?', '24', '30', '32', '64', 'C', 'Easy', 2),
(5, 'If a car travels at a constant speed of 60 km/h, what distance does it cover in 2.5 hours?', '120 km', '140 km', '150 km', '160 km', 'C', 'Easy', 2),
(5, 'What is the average of the five numbers: 10, 20, 30, 40, and 50?', '25', '30', '35', '40', 'B', 'Easy', 2),
(5, 'What is the square root of 144?', '11', '12', '13', '14', 'B', 'Easy', 2),
(5, 'If the price of an item increases from ₹100 to ₹120, what is the percentage increase?', '15%', '20%', '25%', '30%', 'B', 'Easy', 2),
(5, 'Find the missing number in the arithmetic progression: 5, 10, 15, 20, ?', '22', '25', '30', '35', 'B', 'Easy', 2),
(5, 'A train running at 72 km/h crosses a 200m platform in 20s. What is the length of the train?', '150 m', '200 m', '250 m', '300 m', 'B', 'Easy', 2),
(5, 'If 5 workers complete a task in 10 days, how many days will 10 workers take at the same rate?', '2 days', '5 days', '10 days', '15 days', 'B', 'Easy', 2),
(5, 'What is the simplified ratio of 30 minutes to 2 hours?', '1 : 2', '1 : 3', '1 : 4', '1 : 6', 'C', 'Easy', 2),
(5, 'If the cost price of an article is ₹500 and the selling price is ₹600, what is the profit percentage?', '10%', '15%', '20%', '25%', 'C', 'Easy', 2),
(5, 'What is the simple interest on a principal of ₹1,000 at 10% per annum for 2 years?', '₹100', '₹150', '₹200', '₹250', 'C', 'Easy', 2),
(5, 'What is the sum of the interior angles of any triangle?', '90°', '180°', '270°', '360°', 'B', 'Easy', 2),
(5, 'What is the value of 7³ (7 raised to the power of 3)?', '49', '243', '343', '353', 'C', 'Easy', 2),
(5, 'Find the next letter in the alphabet sequence: A, C, E, G, ?', 'H', 'I', 'J', 'K', 'B', 'Easy', 2),
(5, 'When an analog clock displays 3:00, what is the angle between the hour hand and minute hand?', '45°', '60°', '90°', '120°', 'C', 'Easy', 2),
(5, 'What is the perimeter of a square whose side length is 8 cm?', '16 cm', '24 cm', '32 cm', '64 cm', 'C', 'Easy', 2),
(5, 'What is the median of the ordered data set: 3, 7, 9, 12, 15?', '7', '9', '10', '12', 'B', 'Easy', 2),
(5, 'If today is Monday, what day of the week will it be exactly 14 days from today?', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'B', 'Easy', 2),
(5, 'Complete the logical word analogy: Doctor : Hospital :: Teacher : ?', 'School', 'Court', 'Office', 'Factory', 'A', 'Easy', 2);

-- Insert Sample Exams
INSERT INTO exams (title, subject_id, duration_minutes, total_questions, pass_percentage, status) VALUES
('Data Structures & Algorithms Mock Test', 1, 30, 15, 40, 'Active'),
('Java OOPs & Multithreading Assessment', 2, 25, 10, 40, 'Active'),
('DBMS SQL & Normalization Diagnostic', 3, 20, 10, 40, 'Active'),
('C Programming & Pointers Challenge', 4, 20, 10, 40, 'Active'),
('Quantitative Aptitude & Logic Sprint', 5, 15, 10, 40, 'Active');
```

---

## 📄 `server/server.js`

```javascript
/**
 * =========================================================
 * SMARTEXAM - NODE.JS REST API & STATIC WEB SERVER
 * Zero-dependency standalone backend providing REST endpoints and static serving.
 * Run with: `node server/server.js` or `npm start`
 * =========================================================
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.join(__dirname, "..");

// In-Memory Database (Synced from defaults)
const DB = {
    users: [
        { id: 1, name: "Aditya Gore", email: "student@smartexam.com", password: "student123", role: "STUDENT" },
        { id: 2, name: "Administrator", email: "admin@smartexam.com", password: "admin123", role: "ADMIN" }
    ],
    questions: [
        {
                "id": 101,
                "text": "Which data structure follows the LIFO (Last In First Out) principle?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Queue",
                        "Stack",
                        "Tree",
                        "Array"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 102,
                "text": "Which data structure follows the FIFO (First In First Out) principle?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Stack",
                        "Queue",
                        "Binary Search Tree",
                        "Graph"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 103,
                "text": "What is the time complexity to access an element by index in an array?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "O(1)",
                        "O(n)",
                        "O(log n)",
                        "O(n²)"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 104,
                "text": "Which of the following data structures is non-linear?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Array",
                        "Linked List",
                        "Stack",
                        "Binary Tree"
                ],
                "correctOption": "D",
                "marks": 2
        },
        {
                "id": 105,
                "text": "What is the worst-case time complexity of Linear Search in an array of size n?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "O(1)",
                        "O(log n)",
                        "O(n)",
                        "O(n log n)"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 106,
                "text": "What is the prerequisite condition required to perform Binary Search on an array?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "The array must be sorted",
                        "The array must contain only positive numbers",
                        "The array must have an even number of elements",
                        "The array must be dynamic"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 107,
                "text": "In a singly linked list, each node contains data and a pointer to:",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "The previous node",
                        "The next node",
                        "The head node",
                        "Both next and previous nodes"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 108,
                "text": "Which operation is used to insert an element into a Stack?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Pop",
                        "Push",
                        "Enqueue",
                        "Dequeue"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 109,
                "text": "Which operation is used to remove an element from a Queue?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Push",
                        "Pop",
                        "Enqueue",
                        "Dequeue"
                ],
                "correctOption": "D",
                "marks": 2
        },
        {
                "id": 110,
                "text": "What is the maximum number of children a binary tree node can have?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "1",
                        "2",
                        "3",
                        "Any number"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 111,
                "text": "What is the time complexity of Binary Search on a sorted array of size n?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "O(1)",
                        "O(log n)",
                        "O(n)",
                        "O(n²)"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 112,
                "text": "Which tree traversal visits the root node before its left and right subtrees?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Inorder",
                        "Preorder",
                        "Postorder",
                        "Level-order"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 113,
                "text": "Which data structure is typically used to implement Breadth-First Search (BFS)?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Stack",
                        "Queue",
                        "Priority Queue",
                        "Binary Tree"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 114,
                "text": "Which data structure is typically used to implement Depth-First Search (DFS)?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Queue",
                        "Stack",
                        "Circular Queue",
                        "Hash Map"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 115,
                "text": "What is the term for attempting to push an element onto a full stack?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Underflow",
                        "Overflow",
                        "Segmentation fault",
                        "Deadlock"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 116,
                "text": "What is the term for attempting to pop an element from an empty stack?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Overflow",
                        "Underflow",
                        "Garbage collection",
                        "Memory leak"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 117,
                "text": "In a circular queue of capacity N, after index N-1, where does the next element go?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Index N",
                        "Index 0",
                        "Index -1",
                        "It cannot be inserted"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 118,
                "text": "Which sorting algorithm repeatedly compares adjacent elements and swaps them if out of order?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Selection Sort",
                        "Bubble Sort",
                        "Merge Sort",
                        "QuickSort"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 119,
                "text": "A node in a standard doubly linked list contains how many pointers?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "0",
                        "1",
                        "2",
                        "3"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 120,
                "text": "What is the top pointer of a Stack initialized to when using a 0-indexed array?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "-1",
                        "0",
                        "1",
                        "null"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 201,
                "text": "Which keyword is used to create an instance of a class in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "class",
                        "new",
                        "create",
                        "alloc"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 202,
                "text": "What is the default value of a boolean instance variable in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "true",
                        "false",
                        "0",
                        "null"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 203,
                "text": "Which of the following is NOT a primitive data type in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "int",
                        "float",
                        "String",
                        "char"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 204,
                "text": "Which keyword in Java is used to inherit a class?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "implements",
                        "extends",
                        "inherits",
                        "instanceof"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 205,
                "text": "Which keyword in Java is used to implement an interface?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "extends",
                        "implements",
                        "interface",
                        "import"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 206,
                "text": "What is the return type of a constructor in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "void",
                        "int",
                        "No return type",
                        "Object"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 207,
                "text": "Which Java keyword prevents a method from being overridden in a subclass?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "static",
                        "final",
                        "abstract",
                        "synchronized"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 208,
                "text": "Which method is the starting execution point for any Java standalone application?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "start()",
                        "main()",
                        "run()",
                        "init()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 209,
                "text": "What is the size of an int data type in standard Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "2 bytes",
                        "4 bytes",
                        "8 bytes",
                        "1 byte"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 210,
                "text": "Which exception is thrown when attempting to divide an integer by zero in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "NullPointerException",
                        "ArithmeticException",
                        "NumberFormatException",
                        "ArrayIndexOutOfBoundsException"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 211,
                "text": "What does JVM stand for?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "Java Virtual Machine",
                        "Java Variable Manager",
                        "Java Visual Mechanism",
                        "Java Vector Method"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 212,
                "text": "Which package is automatically imported in every Java program without explicit import?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "java.util",
                        "java.io",
                        "java.lang",
                        "java.net"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 213,
                "text": "Which block is always executed in exception handling, whether an exception occurs or not?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "try",
                        "catch",
                        "finally",
                        "throw"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 214,
                "text": "Which keyword is used to refer to the immediate parent class object in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "this",
                        "super",
                        "parent",
                        "base"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 215,
                "text": "Which collection class in Java provides a resizable array implementation of the List interface?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "ArrayList",
                        "HashSet",
                        "TreeSet",
                        "HashMap"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 216,
                "text": "What is the index of the first element in a Java array?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "-1",
                        "0",
                        "1",
                        "Depends on declaration"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 217,
                "text": "Which keyword is used to define a constant variable whose value cannot change in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "const",
                        "final",
                        "static",
                        "immutable"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 218,
                "text": "Defining multiple methods with the same name but different parameters in one class is known as:",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "Method Overloading",
                        "Method Overriding",
                        "Encapsulation",
                        "Inheritance"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 219,
                "text": "Which Java keyword is used to access package members from another file or package?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "include",
                        "import",
                        "using",
                        "require"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 220,
                "text": "Are String objects in Java mutable or immutable?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "Mutable",
                        "Immutable",
                        "Depends on compiler",
                        "Dynamic"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 301,
                "text": "What does DBMS stand for?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Database Management System",
                        "Data Base Multi System",
                        "Digital Backup Management System",
                        "Data Block Memory Storage"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 302,
                "text": "What does SQL stand for?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Structured Query Language",
                        "Sequential Query List",
                        "Simple Query Logic",
                        "Standard Question Language"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 303,
                "text": "Which SQL command is used to retrieve data from a database table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "GET",
                        "FETCH",
                        "SELECT",
                        "RETRIEVE"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 304,
                "text": "Which SQL clause is used to filter records based on a specified condition?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "ORDER BY",
                        "GROUP BY",
                        "WHERE",
                        "HAVING"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 305,
                "text": "Which key uniquely identifies each record/tuple in a database table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Foreign Key",
                        "Candidate Key",
                        "Primary Key",
                        "Super Key"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 306,
                "text": "A foreign key in a child table references which key in the parent table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Composite Key",
                        "Primary Key",
                        "Foreign Key",
                        "Alternate Key"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 307,
                "text": "Which SQL command is used to insert new rows of data into a table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "ADD ROW",
                        "INSERT INTO",
                        "UPDATE",
                        "CREATE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 308,
                "text": "Which SQL command is used to modify existing data records in a table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "MODIFY",
                        "CHANGE",
                        "UPDATE",
                        "ALTER"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 309,
                "text": "Which SQL command is used to remove specific rows from a table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "REMOVE",
                        "DELETE",
                        "DROP",
                        "TRUNCATE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 310,
                "text": "Which SQL statement is used to permanently remove an entire table including its schema?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "DELETE TABLE",
                        "DROP TABLE",
                        "REMOVE TABLE",
                        "CLEAR TABLE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 311,
                "text": "What does ACID stand for in the context of DBMS transactions?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Atomicity, Consistency, Isolation, Durability",
                        "Accuracy, Control, Integrity, Data",
                        "Access, Security, Identity, Device",
                        "Auto, Cache, Index, Directory"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 312,
                "text": "Which ACID property ensures that all operations in a transaction succeed or none occur?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Consistency",
                        "Atomicity",
                        "Isolation",
                        "Durability"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 313,
                "text": "Which clause is used in SQL to sort the query result-set?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "SORT BY",
                        "ORDER BY",
                        "ARRANGE BY",
                        "GROUP BY"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 314,
                "text": "By default, what sort order does the ORDER BY clause apply in SQL?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Descending (DESC)",
                        "Ascending (ASC)",
                        "Random",
                        "Creation order"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 315,
                "text": "Which SQL aggregate function is used to count the number of rows matching a condition?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "SUM()",
                        "COUNT()",
                        "TOTAL()",
                        "NUMBER()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 316,
                "text": "Which SQL keyword is used to return only distinct (different) values?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "UNIQUE",
                        "DISTINCT",
                        "DIFFERENT",
                        "SEPARATE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 317,
                "text": "What type of SQL JOIN returns rows that have matching values in both tables?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "LEFT JOIN",
                        "RIGHT JOIN",
                        "INNER JOIN",
                        "FULL OUTER JOIN"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 318,
                "text": "What fundamental rule does First Normal Form (1NF) enforce in a database table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Elimination of transitive dependency",
                        "Atomic (indivisible) values in every column",
                        "No partial key dependency",
                        "Primary key indexing"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 319,
                "text": "Which of the following SQL commands belongs to DDL (Data Definition Language)?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "SELECT",
                        "INSERT",
                        "CREATE",
                        "UPDATE"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 320,
                "text": "What is a View in relational SQL databases?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "A physical copy of the database",
                        "A virtual table based on a SQL query result",
                        "A database backup file",
                        "A special primary key index"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 401,
                "text": "Who is recognized as the creator of the C programming language?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "Bjarne Stroustrup",
                        "Dennis Ritchie",
                        "James Gosling",
                        "Guido van Rossum"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 402,
                "text": "Which header file is required to use printf() and scanf() in a C program?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "<stdlib.h>",
                        "<stdio.h>",
                        "<conio.h>",
                        "<string.h>"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 403,
                "text": "Which format specifier is used to print an integer value in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "%f",
                        "%c",
                        "%d",
                        "%s"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 404,
                "text": "Which format specifier is used to print a single character in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "%c",
                        "%s",
                        "%d",
                        "%f"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 405,
                "text": "What character is used to terminate every simple statement in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        ": (colon)",
                        "; (semicolon)",
                        ". (dot)",
                        ", (comma)"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 406,
                "text": "What is the standard return type of the main() function in ANSI C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "void",
                        "int",
                        "float",
                        "char"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 407,
                "text": "What does a pointer variable store in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "Value of another variable",
                        "Memory address of another variable",
                        "Name of a function",
                        "Size of data type"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 408,
                "text": "Which operator is used to determine the memory address of a variable in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "* (asterisk)",
                        "& (ampersand)",
                        "-> (arrow)",
                        "% (percent)"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 409,
                "text": "Which operator is used to dereference a pointer (access value at address) in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "&",
                        "*",
                        "#",
                        "->"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 410,
                "text": "What is the size of a char data type in standard C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "1 byte",
                        "2 bytes",
                        "4 bytes",
                        "8 bytes"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 411,
                "text": "Which escape sequence character marks the end of a string in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "'\\0' (null character)",
                        "'\\n' (newline)",
                        "'\\t' (tab)",
                        "' ' (space)"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 412,
                "text": "Which function dynamically allocates memory in C without initializing it to zero?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "calloc()",
                        "malloc()",
                        "realloc()",
                        "free()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 413,
                "text": "Which function is used to deallocate dynamically allocated heap memory in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "delete()",
                        "free()",
                        "clear()",
                        "release()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 414,
                "text": "Which function dynamically allocates memory and initializes all allocated bytes to zero?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "malloc()",
                        "calloc()",
                        "alloc()",
                        "memset()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 415,
                "text": "What is the starting index of an array in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "-1",
                        "0",
                        "1",
                        "User-defined"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 416,
                "text": "Which loop construct in C is guaranteed to execute its body at least once?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "for loop",
                        "while loop",
                        "do-while loop",
                        "nested loop"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 417,
                "text": "Which keyword is used to terminate and exit immediately from a loop in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "exit",
                        "stop",
                        "break",
                        "continue"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 418,
                "text": "Which keyword is used to skip the rest of the current iteration and jump to the next?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "skip",
                        "continue",
                        "pass",
                        "next"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 419,
                "text": "Which compile-time operator returns the size of a variable or data type in bytes?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "sizeof",
                        "len",
                        "size",
                        "bytes"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 420,
                "text": "Which standard library function in <string.h> is used to determine the length of a string?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "strlength()",
                        "strlen()",
                        "strcount()",
                        "size()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 501,
                "text": "What is 15% of 200?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "20",
                        "25",
                        "30",
                        "35"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 502,
                "text": "Find the next number in the geometric progression: 2, 4, 8, 16, ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "24",
                        "30",
                        "32",
                        "64"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 503,
                "text": "If a car travels at a constant speed of 60 km/h, what distance does it cover in 2.5 hours?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "120 km",
                        "140 km",
                        "150 km",
                        "160 km"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 504,
                "text": "What is the average of the five numbers: 10, 20, 30, 40, and 50?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "25",
                        "30",
                        "35",
                        "40"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 505,
                "text": "What is the square root of 144?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "11",
                        "12",
                        "13",
                        "14"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 506,
                "text": "If the price of an item increases from ₹100 to ₹120, what is the percentage increase?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "15%",
                        "20%",
                        "25%",
                        "30%"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 507,
                "text": "Find the missing number in the arithmetic progression: 5, 10, 15, 20, ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "22",
                        "25",
                        "30",
                        "35"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 508,
                "text": "A train running at 72 km/h crosses a 200m platform in 20s. What is the length of the train?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "150 m",
                        "200 m",
                        "250 m",
                        "300 m"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 509,
                "text": "If 5 workers complete a task in 10 days, how many days will 10 workers take at the same rate?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "2 days",
                        "5 days",
                        "10 days",
                        "15 days"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 510,
                "text": "What is the simplified ratio of 30 minutes to 2 hours?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "1 : 2",
                        "1 : 3",
                        "1 : 4",
                        "1 : 6"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 511,
                "text": "If the cost price of an article is ₹500 and the selling price is ₹600, what is the profit percentage?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "10%",
                        "15%",
                        "20%",
                        "25%"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 512,
                "text": "What is the simple interest on a principal of ₹1,000 at 10% per annum for 2 years?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "₹100",
                        "₹150",
                        "₹200",
                        "₹250"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 513,
                "text": "What is the sum of the interior angles of any triangle?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "90°",
                        "180°",
                        "270°",
                        "360°"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 514,
                "text": "What is the value of 7³ (7 raised to the power of 3)?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "49",
                        "243",
                        "343",
                        "353"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 515,
                "text": "Find the next letter in the alphabet sequence: A, C, E, G, ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "H",
                        "I",
                        "J",
                        "K"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 516,
                "text": "When an analog clock displays 3:00, what is the angle between the hour hand and minute hand?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "45°",
                        "60°",
                        "90°",
                        "120°"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 517,
                "text": "What is the perimeter of a square whose side length is 8 cm?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "16 cm",
                        "24 cm",
                        "32 cm",
                        "64 cm"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 518,
                "text": "What is the median of the ordered data set: 3, 7, 9, 12, 15?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "7",
                        "9",
                        "10",
                        "12"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 519,
                "text": "If today is Monday, what day of the week will it be exactly 14 days from today?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 520,
                "text": "Complete the logical word analogy: Doctor : Hospital :: Teacher : ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "School",
                        "Court",
                        "Office",
                        "Factory"
                ],
                "correctOption": "A",
                "marks": 2
        }
],
    exams: [
        { id: 1, title: "Data Structures & Algorithms Mock Test", subject: "DSA", durationMinutes: 30, questions: 15, passPercent: 40, status: "Active" },
        { id: 2, title: "Java OOPs & Multithreading Assessment", subject: "Java", durationMinutes: 25, questions: 10, passPercent: 40, status: "Active" },
        { id: 3, title: "DBMS SQL & Normalization Diagnostic", subject: "DBMS", durationMinutes: 20, questions: 10, passPercent: 40, status: "Active" }
    ],
    results: [
        {
            id: "res_demo_1",
            studentName: "Aditya Gore",
            studentEmail: "student@smartexam.com",
            examTitle: "Data Structures & Algorithms Mock Test",
            subject: "DSA",
            totalQuestions: 5,
            correct: 5,
            score: 14,
            totalMarks: 14,
            percentage: 100,
            status: "Passed",
            proctorStrikes: 0,
            date: new Date().toISOString()
        }
    ]
};

// MIME Types Map
const MIME_TYPES = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon"
};

// QuickSort Algorithm for leaderboard
function quickSort(arr, key = "score", desc = true) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (desc ? arr[i][key] >= pivot[key] : arr[i][key] <= pivot[key]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left, key, desc), pivot, ...quickSort(right, key, desc)];
}

// Parse Request Body Helper
function parseJSONBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", chunk => (body += chunk));
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(err);
            }
        });
        req.on("error", reject);
    });
}

// Send JSON Response Helper
function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    });
    res.end(JSON.stringify(data));
}

// Serve Static Files
function serveStatic(req, res, pathname) {
    let filePath = path.join(ROOT_DIR, pathname === "/" ? "index.html" : pathname);

    // Default to .html if no extension
    if (!path.extname(filePath) && fs.existsSync(filePath + ".html")) {
        filePath += ".html";
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 - Page Not Found</h1><p>SmartExam Server</p>");
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || "application/octet-stream";

        res.writeHead(200, { "Content-Type": contentType });
        fs.createReadStream(filePath).pipe(res);
    });
}

// Main HTTP Request Handler
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    // Handle CORS preflight
    if (method === "OPTIONS") {
        res.writeHead(204, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        });
        res.end();
        return;
    }

    // =====================================================
    // REST API ENDPOINTS
    // =====================================================

    // 1. Health check & API Overview
    if (pathname === "/api" || pathname === "/api/health") {
        return sendJSON(res, 200, {
            status: "Online",
            system: "SmartExam Online Examination System API",
            timestamp: new Date().toISOString(),
            metrics: {
                totalQuestions: DB.questions.length,
                totalExams: DB.exams.length,
                totalUsers: DB.users.length,
                totalResults: DB.results.length
            }
        });
    }

    // 2. Authentication: Login
    if (pathname === "/api/auth/login" && method === "POST") {
        try {
            const body = await parseJSONBody(req);
            const { email, password, role } = body;
            const user = DB.users.find(u => u.email.toLowerCase() === (email || "").toLowerCase() && u.password === password);

            if (user) {
                return sendJSON(res, 200, { success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
            }
            return sendJSON(res, 401, { success: false, message: "Invalid email or password." });
        } catch (e) {
            return sendJSON(res, 400, { error: "Invalid JSON format" });
        }
    }

    // 3. Authentication: Register
    if (pathname === "/api/auth/register" && method === "POST") {
        try {
            const body = await parseJSONBody(req);
            const { name, email, password } = body;

            if (DB.users.some(u => u.email.toLowerCase() === (email || "").toLowerCase())) {
                return sendJSON(res, 409, { success: false, message: "User with this email already exists." });
            }

            const newUser = { id: Date.now(), name, email, password, role: "STUDENT" };
            DB.users.push(newUser);
            return sendJSON(res, 201, { success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } });
        } catch (e) {
            return sendJSON(res, 400, { error: "Invalid registration payload" });
        }
    }

    // 3b. Students Directory: GET /api/students
    if (pathname === "/api/students" && method === "GET") {
        const students = DB.users.filter(u => u.role === "STUDENT").map(u => ({
            id: u.id,
            name: u.name,
            email: u.email,
            role: u.role
        }));
        return sendJSON(res, 200, { count: students.length, students });
    }

    // 4. Questions: GET /api/questions?subject=DSA
    if (pathname === "/api/questions" && method === "GET") {
        const subject = parsedUrl.query.subject;
        let list = DB.questions;
        if (subject && subject !== "All" && subject.toLowerCase() !== "all") {
            list = list.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
        }
        return sendJSON(res, 200, { count: list.length, questions: list });
    }

    // 5. Questions: POST /api/questions
    if (pathname === "/api/questions" && method === "POST") {
        try {
            const body = await parseJSONBody(req);
            const newQ = {
                id: Date.now(),
                text: body.text,
                subject: body.subject || "DSA",
                difficulty: body.difficulty || "Medium",
                options: body.options || ["A", "B", "C", "D"],
                correctOption: body.correctOption || "A",
                marks: parseInt(body.marks, 10) || 2
            };
            DB.questions.push(newQ);
            return sendJSON(res, 201, { success: true, question: newQ });
        } catch (e) {
            return sendJSON(res, 400, { error: "Failed to add question" });
        }
    }

    // 6. Questions: DELETE /api/questions/:id
    if (pathname.startsWith("/api/questions/") && method === "DELETE") {
        const id = parseInt(pathname.replace("/api/questions/", ""), 10);
        DB.questions = DB.questions.filter(q => q.id !== id);
        return sendJSON(res, 200, { success: true, message: `Question #${id} removed` });
    }

    // 7. Exams: GET /api/exams
    if (pathname === "/api/exams" && method === "GET") {
        return sendJSON(res, 200, { count: DB.exams.length, exams: DB.exams });
    }

    // 8. Exams: POST /api/exams
    if (pathname === "/api/exams" && method === "POST") {
        try {
            const body = await parseJSONBody(req);
            const newExam = {
                id: Date.now(),
                title: body.title,
                subject: body.subject || "General",
                durationMinutes: parseInt(body.durationMinutes, 10) || 30,
                questions: parseInt(body.questions, 10) || 15,
                passPercent: parseInt(body.passPercent, 10) || 40,
                status: body.status || "Active"
            };
            DB.exams.push(newExam);
            return sendJSON(res, 201, { success: true, exam: newExam });
        } catch (e) {
            return sendJSON(res, 400, { error: "Failed to create exam" });
        }
    }

    // 9. Results & Leaderboard: GET /api/results
    if (pathname === "/api/results" && method === "GET") {
        const sorted = quickSort(DB.results, "score", true);
        return sendJSON(res, 200, { count: sorted.length, leaderboard: sorted });
    }

    // 10. Exam Evaluation & Anti-Cheat Submission: POST /api/exams/submit
    if (pathname === "/api/exams/submit" && method === "POST") {
        try {
            const body = await parseJSONBody(req);
            const { studentName, studentEmail, examTitle, subject, userAnswers, proctorStrikes } = body;

            // Score calculation
            let relevantQuestions = DB.questions;
            if (subject && subject !== "All") {
                relevantQuestions = DB.questions.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
            }

            let score = 0;
            let totalMarks = 0;
            let correctCount = 0;

            const breakdown = relevantQuestions.map((q, idx) => {
                const marks = q.marks || 2;
                totalMarks += marks;
                const userChoice = (userAnswers && userAnswers[idx]) ? userAnswers[idx].toString().toUpperCase() : "";
                const isCorrect = userChoice === q.correctOption.toUpperCase();

                if (isCorrect) {
                    score += marks;
                    correctCount++;
                }

                return {
                    id: q.id,
                    text: q.text,
                    subject: q.subject,
                    userAnswer: userChoice || "Not Attempted",
                    correctAnswer: q.correctOption,
                    isCorrect,
                    marks
                };
            });

            const percentage = totalMarks > 0 ? Math.round((score / totalMarks) * 100) : 0;
            const status = percentage >= 40 ? "Passed" : "Failed";

            const submissionResult = {
                id: `res_${Date.now()}`,
                studentName: studentName || "Student",
                studentEmail: studentEmail || "student@smartexam.com",
                examTitle: examTitle || "Assessment",
                subject: subject || "General",
                totalQuestions: relevantQuestions.length,
                correct: correctCount,
                score,
                totalMarks,
                percentage,
                status,
                proctorStrikes: proctorStrikes || 0,
                proctorFlagged: (proctorStrikes || 0) >= 3,
                date: new Date().toISOString(),
                breakdown
            };

            DB.results.unshift(submissionResult);
            return sendJSON(res, 201, { success: true, result: submissionResult });
        } catch (e) {
            return sendJSON(res, 400, { error: "Failed to evaluate exam submission" });
        }
    }

    // Default: Fallback to static web server
    serveStatic(req, res, pathname);
});

// Start Server
server.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 SmartExam Server running at: http://localhost:${PORT}`);
    console.log(`📡 REST API Health:           http://localhost:${PORT}/api/health`);
    console.log(`👨‍🎓 Student Portal:            http://localhost:${PORT}/student/login.html`);
    console.log(`👨‍💼 Admin Portal:              http://localhost:${PORT}/admin/login.html`);
    console.log(`======================================================\n`);
});
```

---

## 📄 `server/package.json`

```javascript
{
  "name": "smartexam-server",
  "version": "1.0.0",
  "description": "SmartExam Online Examination System Backend REST API & Static Server",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "keywords": ["online-examination", "proctoring", "dsa", "rest-api"],
  "author": "SmartExam Team",
  "license": "MIT"
}
```

---

## 📄 `js/store.js`

```javascript
/**
 * =========================================================
 * SMARTEXAM - CENTRAL STORE & DATA LAYER (store.js)
 * Provides unified state management across Student & Admin portals.
 * =========================================================
 */

(function (globalScope) {
    "use strict";

    const STORAGE_KEYS = {
        QUESTIONS: "adminQuestions",
        EXAMS: "adminExams",
        STUDENTS: "registeredStudents",
        RESULTS: "allExamResults",
        LATEST_RESULT: "latestResult",
        CURRENT_STUDENT: "student",
        CURRENT_ADMIN: "adminUser",
        STUDENT_LOGGED_IN: "studentLoggedIn",
        ADMIN_LOGGED_IN: "adminLoggedIn"
    };

    // Default Question Pool across 5 Core Tracks
    const DEFAULT_QUESTIONS = [
        {
                "id": 101,
                "text": "Which data structure follows the LIFO (Last In First Out) principle?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Queue",
                        "Stack",
                        "Tree",
                        "Array"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 102,
                "text": "Which data structure follows the FIFO (First In First Out) principle?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Stack",
                        "Queue",
                        "Binary Search Tree",
                        "Graph"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 103,
                "text": "What is the time complexity to access an element by index in an array?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "O(1)",
                        "O(n)",
                        "O(log n)",
                        "O(n²)"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 104,
                "text": "Which of the following data structures is non-linear?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Array",
                        "Linked List",
                        "Stack",
                        "Binary Tree"
                ],
                "correctOption": "D",
                "marks": 2
        },
        {
                "id": 105,
                "text": "What is the worst-case time complexity of Linear Search in an array of size n?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "O(1)",
                        "O(log n)",
                        "O(n)",
                        "O(n log n)"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 106,
                "text": "What is the prerequisite condition required to perform Binary Search on an array?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "The array must be sorted",
                        "The array must contain only positive numbers",
                        "The array must have an even number of elements",
                        "The array must be dynamic"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 107,
                "text": "In a singly linked list, each node contains data and a pointer to:",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "The previous node",
                        "The next node",
                        "The head node",
                        "Both next and previous nodes"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 108,
                "text": "Which operation is used to insert an element into a Stack?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Pop",
                        "Push",
                        "Enqueue",
                        "Dequeue"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 109,
                "text": "Which operation is used to remove an element from a Queue?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Push",
                        "Pop",
                        "Enqueue",
                        "Dequeue"
                ],
                "correctOption": "D",
                "marks": 2
        },
        {
                "id": 110,
                "text": "What is the maximum number of children a binary tree node can have?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "1",
                        "2",
                        "3",
                        "Any number"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 111,
                "text": "What is the time complexity of Binary Search on a sorted array of size n?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "O(1)",
                        "O(log n)",
                        "O(n)",
                        "O(n²)"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 112,
                "text": "Which tree traversal visits the root node before its left and right subtrees?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Inorder",
                        "Preorder",
                        "Postorder",
                        "Level-order"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 113,
                "text": "Which data structure is typically used to implement Breadth-First Search (BFS)?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Stack",
                        "Queue",
                        "Priority Queue",
                        "Binary Tree"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 114,
                "text": "Which data structure is typically used to implement Depth-First Search (DFS)?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Queue",
                        "Stack",
                        "Circular Queue",
                        "Hash Map"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 115,
                "text": "What is the term for attempting to push an element onto a full stack?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Underflow",
                        "Overflow",
                        "Segmentation fault",
                        "Deadlock"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 116,
                "text": "What is the term for attempting to pop an element from an empty stack?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Overflow",
                        "Underflow",
                        "Garbage collection",
                        "Memory leak"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 117,
                "text": "In a circular queue of capacity N, after index N-1, where does the next element go?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Index N",
                        "Index 0",
                        "Index -1",
                        "It cannot be inserted"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 118,
                "text": "Which sorting algorithm repeatedly compares adjacent elements and swaps them if out of order?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Selection Sort",
                        "Bubble Sort",
                        "Merge Sort",
                        "QuickSort"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 119,
                "text": "A node in a standard doubly linked list contains how many pointers?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "0",
                        "1",
                        "2",
                        "3"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 120,
                "text": "What is the top pointer of a Stack initialized to when using a 0-indexed array?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "-1",
                        "0",
                        "1",
                        "null"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 201,
                "text": "Which keyword is used to create an instance of a class in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "class",
                        "new",
                        "create",
                        "alloc"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 202,
                "text": "What is the default value of a boolean instance variable in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "true",
                        "false",
                        "0",
                        "null"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 203,
                "text": "Which of the following is NOT a primitive data type in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "int",
                        "float",
                        "String",
                        "char"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 204,
                "text": "Which keyword in Java is used to inherit a class?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "implements",
                        "extends",
                        "inherits",
                        "instanceof"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 205,
                "text": "Which keyword in Java is used to implement an interface?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "extends",
                        "implements",
                        "interface",
                        "import"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 206,
                "text": "What is the return type of a constructor in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "void",
                        "int",
                        "No return type",
                        "Object"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 207,
                "text": "Which Java keyword prevents a method from being overridden in a subclass?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "static",
                        "final",
                        "abstract",
                        "synchronized"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 208,
                "text": "Which method is the starting execution point for any Java standalone application?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "start()",
                        "main()",
                        "run()",
                        "init()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 209,
                "text": "What is the size of an int data type in standard Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "2 bytes",
                        "4 bytes",
                        "8 bytes",
                        "1 byte"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 210,
                "text": "Which exception is thrown when attempting to divide an integer by zero in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "NullPointerException",
                        "ArithmeticException",
                        "NumberFormatException",
                        "ArrayIndexOutOfBoundsException"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 211,
                "text": "What does JVM stand for?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "Java Virtual Machine",
                        "Java Variable Manager",
                        "Java Visual Mechanism",
                        "Java Vector Method"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 212,
                "text": "Which package is automatically imported in every Java program without explicit import?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "java.util",
                        "java.io",
                        "java.lang",
                        "java.net"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 213,
                "text": "Which block is always executed in exception handling, whether an exception occurs or not?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "try",
                        "catch",
                        "finally",
                        "throw"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 214,
                "text": "Which keyword is used to refer to the immediate parent class object in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "this",
                        "super",
                        "parent",
                        "base"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 215,
                "text": "Which collection class in Java provides a resizable array implementation of the List interface?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "ArrayList",
                        "HashSet",
                        "TreeSet",
                        "HashMap"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 216,
                "text": "What is the index of the first element in a Java array?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "-1",
                        "0",
                        "1",
                        "Depends on declaration"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 217,
                "text": "Which keyword is used to define a constant variable whose value cannot change in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "const",
                        "final",
                        "static",
                        "immutable"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 218,
                "text": "Defining multiple methods with the same name but different parameters in one class is known as:",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "Method Overloading",
                        "Method Overriding",
                        "Encapsulation",
                        "Inheritance"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 219,
                "text": "Which Java keyword is used to access package members from another file or package?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "include",
                        "import",
                        "using",
                        "require"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 220,
                "text": "Are String objects in Java mutable or immutable?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "Mutable",
                        "Immutable",
                        "Depends on compiler",
                        "Dynamic"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 301,
                "text": "What does DBMS stand for?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Database Management System",
                        "Data Base Multi System",
                        "Digital Backup Management System",
                        "Data Block Memory Storage"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 302,
                "text": "What does SQL stand for?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Structured Query Language",
                        "Sequential Query List",
                        "Simple Query Logic",
                        "Standard Question Language"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 303,
                "text": "Which SQL command is used to retrieve data from a database table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "GET",
                        "FETCH",
                        "SELECT",
                        "RETRIEVE"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 304,
                "text": "Which SQL clause is used to filter records based on a specified condition?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "ORDER BY",
                        "GROUP BY",
                        "WHERE",
                        "HAVING"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 305,
                "text": "Which key uniquely identifies each record/tuple in a database table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Foreign Key",
                        "Candidate Key",
                        "Primary Key",
                        "Super Key"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 306,
                "text": "A foreign key in a child table references which key in the parent table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Composite Key",
                        "Primary Key",
                        "Foreign Key",
                        "Alternate Key"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 307,
                "text": "Which SQL command is used to insert new rows of data into a table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "ADD ROW",
                        "INSERT INTO",
                        "UPDATE",
                        "CREATE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 308,
                "text": "Which SQL command is used to modify existing data records in a table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "MODIFY",
                        "CHANGE",
                        "UPDATE",
                        "ALTER"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 309,
                "text": "Which SQL command is used to remove specific rows from a table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "REMOVE",
                        "DELETE",
                        "DROP",
                        "TRUNCATE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 310,
                "text": "Which SQL statement is used to permanently remove an entire table including its schema?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "DELETE TABLE",
                        "DROP TABLE",
                        "REMOVE TABLE",
                        "CLEAR TABLE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 311,
                "text": "What does ACID stand for in the context of DBMS transactions?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Atomicity, Consistency, Isolation, Durability",
                        "Accuracy, Control, Integrity, Data",
                        "Access, Security, Identity, Device",
                        "Auto, Cache, Index, Directory"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 312,
                "text": "Which ACID property ensures that all operations in a transaction succeed or none occur?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Consistency",
                        "Atomicity",
                        "Isolation",
                        "Durability"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 313,
                "text": "Which clause is used in SQL to sort the query result-set?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "SORT BY",
                        "ORDER BY",
                        "ARRANGE BY",
                        "GROUP BY"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 314,
                "text": "By default, what sort order does the ORDER BY clause apply in SQL?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Descending (DESC)",
                        "Ascending (ASC)",
                        "Random",
                        "Creation order"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 315,
                "text": "Which SQL aggregate function is used to count the number of rows matching a condition?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "SUM()",
                        "COUNT()",
                        "TOTAL()",
                        "NUMBER()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 316,
                "text": "Which SQL keyword is used to return only distinct (different) values?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "UNIQUE",
                        "DISTINCT",
                        "DIFFERENT",
                        "SEPARATE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 317,
                "text": "What type of SQL JOIN returns rows that have matching values in both tables?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "LEFT JOIN",
                        "RIGHT JOIN",
                        "INNER JOIN",
                        "FULL OUTER JOIN"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 318,
                "text": "What fundamental rule does First Normal Form (1NF) enforce in a database table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Elimination of transitive dependency",
                        "Atomic (indivisible) values in every column",
                        "No partial key dependency",
                        "Primary key indexing"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 319,
                "text": "Which of the following SQL commands belongs to DDL (Data Definition Language)?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "SELECT",
                        "INSERT",
                        "CREATE",
                        "UPDATE"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 320,
                "text": "What is a View in relational SQL databases?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "A physical copy of the database",
                        "A virtual table based on a SQL query result",
                        "A database backup file",
                        "A special primary key index"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 401,
                "text": "Who is recognized as the creator of the C programming language?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "Bjarne Stroustrup",
                        "Dennis Ritchie",
                        "James Gosling",
                        "Guido van Rossum"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 402,
                "text": "Which header file is required to use printf() and scanf() in a C program?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "<stdlib.h>",
                        "<stdio.h>",
                        "<conio.h>",
                        "<string.h>"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 403,
                "text": "Which format specifier is used to print an integer value in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "%f",
                        "%c",
                        "%d",
                        "%s"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 404,
                "text": "Which format specifier is used to print a single character in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "%c",
                        "%s",
                        "%d",
                        "%f"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 405,
                "text": "What character is used to terminate every simple statement in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        ": (colon)",
                        "; (semicolon)",
                        ". (dot)",
                        ", (comma)"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 406,
                "text": "What is the standard return type of the main() function in ANSI C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "void",
                        "int",
                        "float",
                        "char"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 407,
                "text": "What does a pointer variable store in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "Value of another variable",
                        "Memory address of another variable",
                        "Name of a function",
                        "Size of data type"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 408,
                "text": "Which operator is used to determine the memory address of a variable in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "* (asterisk)",
                        "& (ampersand)",
                        "-> (arrow)",
                        "% (percent)"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 409,
                "text": "Which operator is used to dereference a pointer (access value at address) in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "&",
                        "*",
                        "#",
                        "->"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 410,
                "text": "What is the size of a char data type in standard C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "1 byte",
                        "2 bytes",
                        "4 bytes",
                        "8 bytes"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 411,
                "text": "Which escape sequence character marks the end of a string in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "'\\0' (null character)",
                        "'\\n' (newline)",
                        "'\\t' (tab)",
                        "' ' (space)"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 412,
                "text": "Which function dynamically allocates memory in C without initializing it to zero?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "calloc()",
                        "malloc()",
                        "realloc()",
                        "free()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 413,
                "text": "Which function is used to deallocate dynamically allocated heap memory in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "delete()",
                        "free()",
                        "clear()",
                        "release()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 414,
                "text": "Which function dynamically allocates memory and initializes all allocated bytes to zero?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "malloc()",
                        "calloc()",
                        "alloc()",
                        "memset()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 415,
                "text": "What is the starting index of an array in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "-1",
                        "0",
                        "1",
                        "User-defined"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 416,
                "text": "Which loop construct in C is guaranteed to execute its body at least once?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "for loop",
                        "while loop",
                        "do-while loop",
                        "nested loop"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 417,
                "text": "Which keyword is used to terminate and exit immediately from a loop in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "exit",
                        "stop",
                        "break",
                        "continue"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 418,
                "text": "Which keyword is used to skip the rest of the current iteration and jump to the next?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "skip",
                        "continue",
                        "pass",
                        "next"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 419,
                "text": "Which compile-time operator returns the size of a variable or data type in bytes?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "sizeof",
                        "len",
                        "size",
                        "bytes"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 420,
                "text": "Which standard library function in <string.h> is used to determine the length of a string?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "strlength()",
                        "strlen()",
                        "strcount()",
                        "size()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 501,
                "text": "What is 15% of 200?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "20",
                        "25",
                        "30",
                        "35"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 502,
                "text": "Find the next number in the geometric progression: 2, 4, 8, 16, ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "24",
                        "30",
                        "32",
                        "64"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 503,
                "text": "If a car travels at a constant speed of 60 km/h, what distance does it cover in 2.5 hours?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "120 km",
                        "140 km",
                        "150 km",
                        "160 km"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 504,
                "text": "What is the average of the five numbers: 10, 20, 30, 40, and 50?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "25",
                        "30",
                        "35",
                        "40"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 505,
                "text": "What is the square root of 144?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "11",
                        "12",
                        "13",
                        "14"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 506,
                "text": "If the price of an item increases from ₹100 to ₹120, what is the percentage increase?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "15%",
                        "20%",
                        "25%",
                        "30%"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 507,
                "text": "Find the missing number in the arithmetic progression: 5, 10, 15, 20, ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "22",
                        "25",
                        "30",
                        "35"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 508,
                "text": "A train running at 72 km/h crosses a 200m platform in 20s. What is the length of the train?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "150 m",
                        "200 m",
                        "250 m",
                        "300 m"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 509,
                "text": "If 5 workers complete a task in 10 days, how many days will 10 workers take at the same rate?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "2 days",
                        "5 days",
                        "10 days",
                        "15 days"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 510,
                "text": "What is the simplified ratio of 30 minutes to 2 hours?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "1 : 2",
                        "1 : 3",
                        "1 : 4",
                        "1 : 6"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 511,
                "text": "If the cost price of an article is ₹500 and the selling price is ₹600, what is the profit percentage?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "10%",
                        "15%",
                        "20%",
                        "25%"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 512,
                "text": "What is the simple interest on a principal of ₹1,000 at 10% per annum for 2 years?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "₹100",
                        "₹150",
                        "₹200",
                        "₹250"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 513,
                "text": "What is the sum of the interior angles of any triangle?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "90°",
                        "180°",
                        "270°",
                        "360°"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 514,
                "text": "What is the value of 7³ (7 raised to the power of 3)?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "49",
                        "243",
                        "343",
                        "353"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 515,
                "text": "Find the next letter in the alphabet sequence: A, C, E, G, ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "H",
                        "I",
                        "J",
                        "K"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 516,
                "text": "When an analog clock displays 3:00, what is the angle between the hour hand and minute hand?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "45°",
                        "60°",
                        "90°",
                        "120°"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 517,
                "text": "What is the perimeter of a square whose side length is 8 cm?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "16 cm",
                        "24 cm",
                        "32 cm",
                        "64 cm"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 518,
                "text": "What is the median of the ordered data set: 3, 7, 9, 12, 15?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "7",
                        "9",
                        "10",
                        "12"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 519,
                "text": "If today is Monday, what day of the week will it be exactly 14 days from today?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 520,
                "text": "Complete the logical word analogy: Doctor : Hospital :: Teacher : ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "School",
                        "Court",
                        "Office",
                        "Factory"
                ],
                "correctOption": "A",
                "marks": 2
        }
];

    // Default Scheduled Exams with Deadlines
    const futureDate = (days) => new Date(Date.now() + days * 24 * 3600 * 1000).toISOString();
    const DEFAULT_EXAMS = [
        { id: 1, title: "Data Structures & Algorithms Mock Test", subject: "DSA", duration: "30 Mins", durationMinutes: 30, questions: 20, passPercent: 40, deadline: futureDate(7), status: "Active" },
        { id: 2, title: "Java OOPs & Multithreading Assessment", subject: "Java", duration: "25 Mins", durationMinutes: 25, questions: 20, passPercent: 40, deadline: futureDate(5), status: "Active" },
        { id: 3, title: "DBMS SQL & Normalization Diagnostic", subject: "DBMS", duration: "20 Mins", durationMinutes: 20, questions: 20, passPercent: 40, deadline: futureDate(10), status: "Active" },
        { id: 4, title: "C Programming & Pointers Challenge", subject: "C", duration: "20 Mins", durationMinutes: 20, questions: 20, passPercent: 40, deadline: futureDate(3), status: "Active" },
        { id: 5, title: "Quantitative Aptitude & Logic Sprint", subject: "Aptitude", duration: "15 Mins", durationMinutes: 15, questions: 20, passPercent: 40, deadline: futureDate(4), status: "Active" },
        { id: 6, title: "Full Syllabus Comprehensive Mock Exam", subject: "All", duration: "45 Mins", durationMinutes: 45, questions: 25, passPercent: 40, deadline: futureDate(14), status: "Active" }
    ];

    // Default Mock Student and Admin
    const DEFAULT_STUDENT = {
        id: 1,
        name: "Aditya Gore",
        email: "student@smartexam.com",
        password: "student123",
        registeredAt: new Date(Date.now() - 3600000 * 48).toISOString(),
        registeredAtFormatted: "Initial Setup"
    };

    const DEFAULT_ADMIN = {
        name: "System Administrator",
        email: "admin@smartexam.com",
        password: "admin123"
    };

    // Default Pre-seeded Results for Leaderboard demo (Only Violation Snapshots)
    const DEFAULT_RESULTS = [
        {
            id: "res_demo_1",
            studentName: "Aditya Gore",
            studentEmail: "student@smartexam.com",
            examTitle: "Data Structures & Algorithms Mock Test",
            subject: "DSA",
            totalQuestions: 5,
            correct: 5,
            score: 14,
            totalMarks: 14,
            percentage: 100,
            status: "Passed",
            proctorStrikes: 0,
            proctorFlagged: false,
            date: new Date(Date.now() - 3600000 * 24).toISOString(),
            dateFormatted: "Yesterday",
            proctorSnapshots: []
        },
        {
            id: "res_demo_2",
            studentName: "Priya Sharma",
            studentEmail: "priya@example.com",
            examTitle: "Java OOPs & Multithreading Assessment",
            subject: "Java",
            totalQuestions: 4,
            correct: 3,
            score: 6,
            totalMarks: 8,
            percentage: 75,
            status: "Passed",
            proctorStrikes: 1,
            proctorFlagged: false,
            date: new Date(Date.now() - 3600000 * 48).toISOString(),
            dateFormatted: "2 days ago",
            proctorSnapshots: [
                { timestamp: "02:20:15 PM", label: "Violation: Tab Switch", type: "violation" }
            ]
        },
        {
            id: "res_demo_3",
            studentName: "Rahul Verma",
            studentEmail: "rahul@example.com",
            examTitle: "DBMS SQL & Normalization Diagnostic",
            subject: "DBMS",
            totalQuestions: 3,
            correct: 2,
            score: 5,
            totalMarks: 9,
            percentage: 56,
            status: "Passed",
            proctorStrikes: 0,
            proctorFlagged: false,
            date: new Date(Date.now() - 3600000 * 72).toISOString(),
            dateFormatted: "3 days ago",
            proctorSnapshots: []
        }
    ];

    /**
     * Storage Helpers
     */
    function getItem(key, fallback = null) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
            console.error(`Error reading key ${key}:`, e);
            return fallback;
        }
    }

    function setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(`Error saving key ${key}:`, e);
        }
    }

    const SmartStore = {
        KEYS: STORAGE_KEYS,

        /**
         * Initializes default dataset in localStorage if missing.
         */
        init: function () {
            const existingQ = getItem(STORAGE_KEYS.QUESTIONS, null);
            if (!existingQ || existingQ.length < DEFAULT_QUESTIONS.length) {
                // Automatically upgrade/seed full 20 questions per subject
                setItem(STORAGE_KEYS.QUESTIONS, DEFAULT_QUESTIONS);
            }
            if (!localStorage.getItem(STORAGE_KEYS.EXAMS)) {
                setItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
            }
            if (!localStorage.getItem(STORAGE_KEYS.STUDENTS)) {
                setItem(STORAGE_KEYS.STUDENTS, [DEFAULT_STUDENT]);
            }
            if (!localStorage.getItem(STORAGE_KEYS.RESULTS)) {
                setItem(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
            }
            if (!localStorage.getItem(STORAGE_KEYS.CURRENT_STUDENT)) {
                setItem(STORAGE_KEYS.CURRENT_STUDENT, DEFAULT_STUDENT);
            }
        },

        // --- QUESTIONS ---
        getQuestions: function (subject = "All") {
            this.init();
            const pool = getItem(STORAGE_KEYS.QUESTIONS, DEFAULT_QUESTIONS);
            if (!subject || subject === "All" || subject.toLowerCase() === "all") {
                return pool;
            }
            const s = subject.toLowerCase().trim();
            return pool.filter(q => {
                const qs = (q.subject || "").toLowerCase().trim();
                if (qs === s) return true;
                if ((s.includes("c prog") || s === "c") && (qs === "c" || qs === "c programming")) return true;
                if ((s.includes("dsa") || s.includes("data structure")) && (qs === "dsa" || qs.includes("data structure"))) return true;
                if ((s.includes("dbms") || s.includes("database")) && (qs === "dbms" || qs.includes("database"))) return true;
                if (s.includes("aptitude") && qs.includes("aptitude")) return true;
                return false;
            });
        },

        addQuestion: function (question) {
            this.init();
            const questions = getItem(STORAGE_KEYS.QUESTIONS, DEFAULT_QUESTIONS);
            const maxId = questions.reduce((max, q) => (q.id > max ? q.id : max), 100);
            const newQ = {
                id: maxId + 1,
                text: question.text,
                subject: question.subject || "DSA",
                difficulty: question.difficulty || "Medium",
                options: question.options || ["Option A", "Option B", "Option C", "Option D"],
                correctOption: question.correctOption || "A",
                marks: parseInt(question.marks, 10) || 2
            };
            questions.push(newQ);
            setItem(STORAGE_KEYS.QUESTIONS, questions);
            return newQ;
        },

        deleteQuestion: function (id) {
            this.init();
            const questions = getItem(STORAGE_KEYS.QUESTIONS, DEFAULT_QUESTIONS);
            const filtered = questions.filter(q => q.id !== id);
            setItem(STORAGE_KEYS.QUESTIONS, filtered);
            return filtered;
        },

        // --- EXAMS ---
        getExams: function () {
            this.init();
            return getItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
        },

        addExam: function (exam) {
            this.init();
            const exams = getItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
            const defaultDeadline = new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString();
            const newExam = {
                id: Date.now(),
                title: exam.title,
                subject: exam.subject || "General",
                duration: `${exam.durationMinutes || 30} Mins`,
                durationMinutes: parseInt(exam.durationMinutes, 10) || 30,
                questions: parseInt(exam.questions, 10) || 15,
                passPercent: parseInt(exam.passPercent, 10) || 40,
                deadline: exam.deadline || defaultDeadline,
                status: exam.status || "Active"
            };
            exams.push(newExam);
            setItem(STORAGE_KEYS.EXAMS, exams);
            return newExam;
        },

        isExamExpired: function (exam) {
            if (!exam || !exam.deadline) return false;
            return new Date() > new Date(exam.deadline);
        },

        formatDateTime: function (isoStr) {
            if (!isoStr) return "-";
            const d = new Date(isoStr);
            if (Number.isNaN(d.getTime())) return isoStr;
            return d.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            });
        },

        toggleExamStatus: function (id) {
            this.init();
            const exams = getItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
            const updated = exams.map(e => (e.id === id ? { ...e, status: e.status === "Active" ? "Closed" : "Active" } : e));
            setItem(STORAGE_KEYS.EXAMS, updated);
            return updated;
        },

        deleteExam: function (id) {
            this.init();
            const exams = getItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
            const filtered = exams.filter(e => e.id !== id);
            setItem(STORAGE_KEYS.EXAMS, filtered);
            return filtered;
        },

        // --- RESULTS & LEADERBOARD ---
        getResults: function () {
            this.init();
            return getItem(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
        },

        getStudentResults: function (email) {
            const results = this.getResults();
            if (!email) return results;
            return results.filter(r => (r.studentEmail || "").toLowerCase() === email.toLowerCase());
        },

        saveResult: function (resultData) {
            this.init();
            const allResults = getItem(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
            const resultRecord = {
                id: `res_${Date.now()}`,
                studentName: resultData.studentName || "Student",
                studentEmail: resultData.studentEmail || "student@smartexam.com",
                examTitle: resultData.examTitle || "General Exam",
                subject: resultData.subject || "General",
                totalQuestions: resultData.totalQuestions || 0,
                correct: resultData.correct || 0,
                score: resultData.score || 0,
                totalMarks: resultData.totalMarks || 0,
                percentage: resultData.percentage || 0,
                status: resultData.percentage >= (resultData.passPercent || 40) ? "Passed" : "Failed",
                proctorStrikes: resultData.proctorStrikes || 0,
                proctorFlagged: (resultData.proctorStrikes || 0) >= 3,
                date: new Date().toISOString(),
                dateFormatted: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
                proctorSnapshots: resultData.proctorSnapshots || [],
                violations: resultData.violations || [],
                breakdown: resultData.breakdown || []
            };

            // Prepend new result
            allResults.unshift(resultRecord);
            setItem(STORAGE_KEYS.RESULTS, allResults);
            setItem(STORAGE_KEYS.LATEST_RESULT, resultRecord);
            return resultRecord;
        },

        getLatestResult: function () {
            return getItem(STORAGE_KEYS.LATEST_RESULT, null);
        },

        clearResults: function () {
            setItem(STORAGE_KEYS.RESULTS, []);
            localStorage.removeItem(STORAGE_KEYS.LATEST_RESULT);
        },

        // --- STUDENTS & AUTH ---
        getStudents: function () {
            this.init();
            return getItem(STORAGE_KEYS.STUDENTS, [DEFAULT_STUDENT]);
        },

        registerStudent: function (name, email, password) {
            this.init();
            const students = getItem(STORAGE_KEYS.STUDENTS, [DEFAULT_STUDENT]);
            const cleanName = (name || "").trim();
            const cleanEmail = (email || "").trim().toLowerCase();
            const exists = students.some(s => (s.email || "").toLowerCase() === cleanEmail);
            if (exists) {
                return { success: false, message: "Email is already registered. Please login." };
            }
            const newStudent = {
                id: Date.now(),
                name: cleanName,
                email: cleanEmail,
                password: password,
                registeredAt: new Date().toISOString(),
                registeredAtFormatted: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
            };
            students.push(newStudent);
            setItem(STORAGE_KEYS.STUDENTS, students);
            setItem(STORAGE_KEYS.CURRENT_STUDENT, newStudent);
            return { success: true, student: newStudent };
        },

        deleteStudent: function (email) {
            this.init();
            const students = this.getStudents();
            const filtered = students.filter(s => (s.email || '').toLowerCase() !== (email || '').toLowerCase());
            setItem(STORAGE_KEYS.STUDENTS, filtered);
            return filtered;
        },

        loginStudent: function (email, password) {
            this.init();
            const students = getItem(STORAGE_KEYS.STUDENTS, [DEFAULT_STUDENT]);
            const found = students.find(s => s.email.toLowerCase() === email.toLowerCase() && s.password === password);
            if (found) {
                setItem(STORAGE_KEYS.CURRENT_STUDENT, found);
                localStorage.setItem(STORAGE_KEYS.STUDENT_LOGGED_IN, "true");
                return { success: true, student: found };
            }
            // Demo fallback
            if (email === DEFAULT_STUDENT.email && password === DEFAULT_STUDENT.password) {
                setItem(STORAGE_KEYS.CURRENT_STUDENT, DEFAULT_STUDENT);
                localStorage.setItem(STORAGE_KEYS.STUDENT_LOGGED_IN, "true");
                return { success: true, student: DEFAULT_STUDENT };
            }
            return { success: false, message: "Invalid email or password." };
        },

        getCurrentStudent: function () {
            return getItem(STORAGE_KEYS.CURRENT_STUDENT, DEFAULT_STUDENT);
        },

        loginAdmin: function (email, password) {
            if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
                setItem(STORAGE_KEYS.CURRENT_ADMIN, DEFAULT_ADMIN);
                localStorage.setItem(STORAGE_KEYS.ADMIN_LOGGED_IN, "true");
                return { success: true, admin: DEFAULT_ADMIN };
            }
            return { success: false, message: "Invalid admin credentials." };
        },

        logoutStudent: function () {
            localStorage.removeItem(STORAGE_KEYS.STUDENT_LOGGED_IN);
            window.location.href = "login.html";
        },

        logoutAdmin: function () {
            localStorage.removeItem(STORAGE_KEYS.ADMIN_LOGGED_IN);
            window.location.href = "login.html";
        },

        // --- ALGORITHMS: QUICKSORT ---
        /**
         * Sorts results array using the QuickSort algorithm by score (descending by default)
         * @param {Array} arr - The array of student result objects
         * @param {string} key - The property to compare (e.g., 'score', 'percentage')
         * @param {boolean} descending - True for highest score first
         * @returns {Array} Sorted array
         */
        quickSort: function (arr, key = "score", descending = true) {
            if (!Array.isArray(arr) || arr.length <= 1) return arr;

            const pivot = arr[arr.length - 1];
            const left = [];
            const right = [];

            for (let i = 0; i < arr.length - 1; i++) {
                const itemVal = arr[i][key] ?? 0;
                const pivotVal = pivot[key] ?? 0;

                if (descending) {
                    if (itemVal >= pivotVal) {
                        left.push(arr[i]);
                    } else {
                        right.push(arr[i]);
                    }
                } else {
                    if (itemVal <= pivotVal) {
                        left.push(arr[i]);
                    } else {
                        right.push(arr[i]);
                    }
                }
            }

            return [...this.quickSort(left, key, descending), pivot, ...this.quickSort(right, key, descending)];
        },

        escapeHTML: function (val) {
            const div = document.createElement("div");
            div.textContent = String(val ?? "");
            return div.innerHTML;
        }
    };

    // Auto-initialize when loaded
    SmartStore.init();

    // Export to global scope & module.exports
    if (typeof globalScope !== "undefined") {
        globalScope.SmartStore = SmartStore;
    }
    if (typeof module !== "undefined" && module.exports) {
        module.exports = SmartStore;
    }

})(typeof window !== "undefined" ? window : globalThis);
```

---

## 📄 `js/proctor-ai.js`

```javascript
/**
 * ===================================================================
 * ExamMatrix / SmartExam - ProctorAI Multi-Person Face Detection Engine
 * High-Precision Multi-Layer AI Proctoring System
 * 
 * Architecture:
 * 1. Tier 1 (Neural): Google BlazeFace via TensorFlow.js
 *    Deep learning SSD model with 6 facial keypoints (eyes, nose, mouth).
 *    Completely immune to necks, hands, clothing, or background false positives.
 * 2. Tier 2 (Hardware): Native Shape Detection API (window.FaceDetector).
 * 3. Tier 3 (Anthropometric CV Engine):
 *    - YCbCr chrominance ellipse skin segmentation.
 *    - Spatial neck/body co-location merging (suppresses chin/throat split).
 *    - Dominant face sizing & hand/desk artifact suppression.
 *    - Bilateral eye-socket contrast gradient validation.
 * ===================================================================
 */

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.ProctorAI = factory();
    }
}(typeof self !== "undefined" ? self : this, function () {
    "use strict";

    // ---------------------------------------------------------------
    // 1. NEURAL DETECTOR: Google BlazeFace Integration
    // ---------------------------------------------------------------
    let blazeFaceModel = null;
    let isBlazeFaceLoading = false;
    let blazeFaceLoadFailed = false;

    async function getBlazeFaceModel() {
        if (blazeFaceModel) return blazeFaceModel;
        if (blazeFaceLoadFailed) return null;
        if (typeof window !== "undefined" && window.blazeface && !isBlazeFaceLoading) {
            isBlazeFaceLoading = true;
            try {
                blazeFaceModel = await window.blazeface.load();
                console.log("✅ ProctorAI: Google BlazeFace neural model loaded successfully!");
            } catch (err) {
                console.warn("ProctorAI: BlazeFace load error, falling back to Enhanced CV:", err);
                blazeFaceLoadFailed = true;
            } finally {
                isBlazeFaceLoading = false;
            }
        }
        return blazeFaceModel;
    }

    // Proactively initialize BlazeFace if window.blazeface is already present
    if (typeof window !== "undefined" && window.blazeface) {
        getBlazeFaceModel().catch(() => {});
    }

    // ---------------------------------------------------------------
    // 2. HARDWARE DETECTOR: Native window.FaceDetector API
    // ---------------------------------------------------------------
    let nativeDetector = null;
    let isNativeSupported = false;

    try {
        if (typeof window !== "undefined" && "FaceDetector" in window) {
            nativeDetector = new window.FaceDetector({ fastMode: true, maxDetectedFaces: 10 });
            isNativeSupported = true;
        }
    } catch (e) {
        isNativeSupported = false;
        nativeDetector = null;
    }

    // Helper canvas for video frame analysis
    let helperCanvas = null;
    let helperCtx = null;

    function getHelperContext(width, height) {
        if (typeof document === "undefined") return null;
        if (!helperCanvas) {
            helperCanvas = document.createElement("canvas");
            helperCtx = helperCanvas.getContext("2d", { willReadFrequently: true });
        }
        if (helperCanvas.width !== width || helperCanvas.height !== height) {
            helperCanvas.width = width;
            helperCanvas.height = height;
        }
        return helperCtx;
    }

    // ---------------------------------------------------------------
    // 3. ANTHROPOMETRIC COMPUTER VISION ENGINE (High-Precision Fallback)
    // ---------------------------------------------------------------
    /**
     * Advanced anthropometric face detector:
     * - Uses YCbCr chrominance separation
     * - Analyzes face candidate clusters
     * - Merges vertically stacked neck/chest regions into primary candidate
     * - Discards non-head skin patches (hands, forearms, background)
     */
    function analyzeCanvasFaces(video, targetWidth = 160, targetHeight = 120) {
        const vW = video.videoWidth || 320;
        const vH = video.videoHeight || 240;
        const ctx = getHelperContext(targetWidth, targetHeight);
        if (!ctx) return [];

        ctx.drawImage(video, 0, 0, targetWidth, targetHeight);
        let imgData;
        try {
            imgData = ctx.getImageData(0, 0, targetWidth, targetHeight);
        } catch (e) {
            return [];
        }
        const data = imgData.data;

        // Downsampled 4x4 grid representation
        const cell = 4;
        const gridW = Math.floor(targetWidth / cell);
        const gridH = Math.floor(targetHeight / cell);
        const skinGrid = new Uint8Array(gridW * gridH);
        const lumaGrid = new Uint8Array(gridW * gridH);

        for (let gy = 0; gy < gridH; gy++) {
            for (let gx = 0; gx < gridW; gx++) {
                const px = gx * cell;
                const py = gy * cell;
                const idx = (py * targetWidth + px) * 4;

                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];

                // ITU-R BT.601 YCbCr Color Space
                const y = 0.299 * r + 0.587 * g + 0.114 * b;
                const cb = -0.168736 * r - 0.331264 * g + 0.5 * b + 128;
                const cr = 0.5 * r - 0.418688 * g - 0.081312 * b + 128;

                lumaGrid[gy * gridW + gx] = Math.round(y);

                // Calibrated human skin chromaticity model
                const isSkin = (
                    cb >= 77 && cb <= 130 &&
                    cr >= 133 && cr <= 175 &&
                    y >= 45 &&
                    r > g && g >= b &&
                    (r - g) >= 12 &&
                    (r - b) >= 15
                );

                if (isSkin) {
                    skinGrid[gy * gridW + gx] = 1;
                }
            }
        }

        // Connected Components (8-connected flood fill)
        const visited = new Uint8Array(gridW * gridH);
        const rawBlobs = [];

        for (let gy = 0; gy < gridH; gy++) {
            for (let gx = 0; gx < gridW; gx++) {
                const pos = gy * gridW + gx;
                if (skinGrid[pos] === 1 && !visited[pos]) {
                    let minX = gx, maxX = gx;
                    let minY = gy, maxY = gy;
                    let count = 0;

                    const queue = [gx, gy];
                    visited[pos] = 1;

                    while (queue.length > 0) {
                        const cy = queue.pop();
                        const cx = queue.pop();
                        count++;

                        if (cx < minX) minX = cx;
                        if (cx > maxX) maxX = cx;
                        if (cy < minY) minY = cy;
                        if (cy > maxY) maxY = cy;

                        // 8-connected neighbors for cohesive face structure
                        for (let dy = -1; dy <= 1; dy++) {
                            for (let dx = -1; dx <= 1; dx++) {
                                if (dx === 0 && dy === 0) continue;
                                const nx = cx + dx;
                                const ny = cy + dy;
                                if (nx >= 0 && nx < gridW && ny >= 0 && ny < gridH) {
                                    const nPos = ny * gridW + nx;
                                    if (skinGrid[nPos] === 1 && !visited[nPos]) {
                                        visited[nPos] = 1;
                                        queue.push(nx, ny);
                                    }
                                }
                            }
                        }
                    }

                    const width = (maxX - minX + 1) * cell;
                    const height = (maxY - minY + 1) * cell;
                    const aspectRatio = height / (width || 1);

                    // Candidate filtering: must have sufficient size and oval proportions
                    // A human face in webcam is at least 32px wide and 40px tall (on 160x120)
                    if (count >= 24 && width >= 28 && height >= 36 && aspectRatio >= 0.8 && aspectRatio <= 2.2) {
                        rawBlobs.push({
                            minX: minX * cell,
                            maxX: (maxX + 1) * cell,
                            minY: minY * cell,
                            maxY: (maxY + 1) * cell,
                            width: width,
                            height: height,
                            count: count,
                            aspectRatio: aspectRatio,
                            centerX: (minX + (maxX - minX) / 2) * cell,
                            centerY: (minY + (maxY - minY) / 2) * cell
                        });
                    }
                }
            }
        }

        if (rawBlobs.length === 0) {
            return [];
        }

        // Sort candidates by size (pixel count) descending
        rawBlobs.sort((a, b) => b.count - a.count);

        // Primary candidate is the largest head oval in view
        const primary = rawBlobs[0];
        const verifiedFaces = [];

        verifiedFaces.push(primary);

        // Process other candidates to eliminate false double-detections (neck, hands, chest)
        for (let i = 1; i < rawBlobs.length; i++) {
            const cand = rawBlobs[i];

            // 1. Neck / Collar / Chest Suppression:
            // If the blob is horizontally aligned with the primary face and located underneath it,
            // it is physically the candidate's NECK or CHEST, not a second person!
            const horizDist = Math.abs(cand.centerX - primary.centerX);
            const isVerticallyStacked = horizDist < (primary.width * 0.55);
            const isBelowPrimary = cand.centerY > primary.centerY;

            if (isVerticallyStacked && isBelowPrimary) {
                // Merge neck into candidate bounding envelope, do NOT treat as second person
                primary.minX = Math.min(primary.minX, cand.minX);
                primary.maxX = Math.max(primary.maxX, cand.maxX);
                primary.maxY = Math.max(primary.maxY, cand.maxY);
                primary.width = primary.maxX - primary.minX;
                primary.height = primary.maxY - primary.minY;
                continue;
            }

            // 2. Relative Area Test:
            // A secondary person's head must be substantial (at least 45% of the primary face area).
            // Small patches (hands, wrists, forearms, background wood) are ignored.
            if (cand.count < (primary.count * 0.42)) {
                continue;
            }

            // 3. Proximity overlap check:
            // If the candidate overlaps significantly with primary, merge them
            const overlapX = Math.max(0, Math.min(primary.maxX, cand.maxX) - Math.max(primary.minX, cand.minX));
            const overlapY = Math.max(0, Math.min(primary.maxY, cand.maxY) - Math.max(primary.minY, cand.minY));
            if (overlapX > cand.width * 0.4 && overlapY > cand.height * 0.4) {
                primary.minX = Math.min(primary.minX, cand.minX);
                primary.maxX = Math.max(primary.maxX, cand.maxX);
                primary.minY = Math.min(primary.minY, cand.minY);
                primary.maxY = Math.max(primary.maxY, cand.maxY);
                continue;
            }

            // 4. Horizontal Separation Requirement for 2nd Person:
            // A true distinct second person is positioned beside or behind the candidate
            if (horizDist > (primary.width * 0.6)) {
                verifiedFaces.push(cand);
            }
        }

        // Scale coordinates back to original video dimensions
        const scaleX = vW / targetWidth;
        const scaleY = vH / targetHeight;

        return verifiedFaces.map(f => ({
            x: Math.round(f.minX * scaleX),
            y: Math.round(f.minY * scaleY),
            width: Math.round((f.maxX - f.minX) * scaleX),
            height: Math.round((f.maxY - f.minY) * scaleY),
            confidence: Math.min(0.96, 0.70 + (f.count / 150) * 0.26)
        }));
    }

    // ---------------------------------------------------------------
    // 4. PUBLIC API
    // ---------------------------------------------------------------
    const ProctorAI = {
        name: "ProctorAI Multi-Person Face Detector",
        version: "2.0.0 (High Precision Neural + Anthropometric)",

        /**
         * Checks if native browser FaceDetector is active
         */
        isNative: function () {
            return isNativeSupported;
        },

        /**
         * Checks if Google BlazeFace neural model is active
         */
        isNeural: function () {
            return !!blazeFaceModel;
        },

        /**
         * Detects faces from an active HTMLVideoElement
         * @param {HTMLVideoElement} video
         * @returns {Promise<Array<{x: number, y: number, width: number, height: number, confidence: number}>>}
         */
        detectFaces: async function (video) {
            if (!video || !video.videoWidth || video.videoWidth === 0) {
                return [];
            }

            // LEVEL 1: Google BlazeFace Deep Learning Model (Top Precision)
            const bz = await getBlazeFaceModel();
            if (bz) {
                try {
                    const predictions = await bz.estimateFaces(video, false);
                    if (Array.isArray(predictions) && predictions.length > 0) {
                        const verified = [];
                        for (let i = 0; i < predictions.length; i++) {
                            const p = predictions[i];
                            const prob = Array.isArray(p.probability) ? p.probability[0] : (p.probability || 1);
                            // High threshold to eliminate false positives
                            if (prob >= 0.72) {
                                const start = p.topLeft;
                                const end = p.bottomRight;
                                const w = Math.round(end[0] - start[0]);
                                const h = Math.round(end[1] - start[1]);
                                if (w >= 35 && h >= 35) {
                                    verified.push({
                                        x: Math.round(start[0]),
                                        y: Math.round(start[1]),
                                        width: w,
                                        height: h,
                                        confidence: prob,
                                        landmarks: p.landmarks
                                    });
                                }
                            }
                        }
                        if (verified.length > 0) {
                            return verified;
                        }
                    }
                } catch (err) {
                    // Fall through to next tier
                }
            }

            // LEVEL 2: Native Hardware FaceDetector
            if (isNativeSupported && nativeDetector) {
                try {
                    const nativeFaces = await nativeDetector.detect(video);
                    if (Array.isArray(nativeFaces) && nativeFaces.length > 0) {
                        return nativeFaces.map(f => ({
                            x: Math.round(f.boundingBox.x),
                            y: Math.round(f.boundingBox.y),
                            width: Math.round(f.boundingBox.width),
                            height: Math.round(f.boundingBox.height),
                            confidence: 0.98
                        }));
                    }
                } catch (err) {
                    // Fall through to Tier 3
                }
            }

            // LEVEL 3: Overhauled Anthropometric CV Engine
            return analyzeCanvasFaces(video);
        },

        /**
         * Draws smooth detection bounding boxes with mirrored coordinates onto an overlay canvas
         * @param {HTMLCanvasElement} canvas
         * @param {Array} faces
         * @param {HTMLVideoElement} video
         */
        drawFaceOverlays: function (canvas, faces, video) {
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const cW = canvas.width;
            const cH = canvas.height;
            const vW = (video && video.videoWidth) ? video.videoWidth : cW;
            const vH = (video && video.videoHeight) ? video.videoHeight : cH;

            ctx.clearRect(0, 0, cW, cH);

            if (!faces || faces.length === 0) return;

            const isMulti = faces.length > 1;
            const scaleX = cW / vW;
            const scaleY = cH / vH;

            faces.forEach((face, idx) => {
                // Video is mirrored in CSS with transform: scaleX(-1),
                // so mirror X coordinates for the overlay canvas
                const mirroredX = cW - (face.x * scaleX + face.width * scaleX);
                const drawY = Math.max(4, face.y * scaleY);
                const drawW = face.width * scaleX;
                const drawH = face.height * scaleY;

                ctx.save();

                // Distinct styling: Green for single candidate, Red for multiple persons
                const boxColor = isMulti ? "#ef4444" : "#22c55e";
                const bgColor = isMulti ? "rgba(239, 68, 68, 0.18)" : "rgba(34, 197, 94, 0.12)";
                const labelText = isMulti ? `🚨 Person #${idx + 1}` : `✓ Candidate Verified`;

                // Bounding Box
                ctx.strokeStyle = boxColor;
                ctx.lineWidth = 2.5;
                ctx.fillStyle = bgColor;

                if (typeof ctx.roundRect === "function") {
                    ctx.beginPath();
                    ctx.roundRect(mirroredX, drawY, drawW, drawH, 6);
                    ctx.stroke();
                    ctx.fill();
                } else {
                    ctx.strokeRect(mirroredX, drawY, drawW, drawH);
                    ctx.fillRect(mirroredX, drawY, drawW, drawH);
                }

                // Header Tag Bar
                const tagH = 18;
                const tagW = Math.max(90, Math.min(drawW, 130));
                ctx.fillStyle = boxColor;
                ctx.fillRect(mirroredX, Math.max(0, drawY - tagH), tagW, tagH);

                ctx.fillStyle = "#ffffff";
                ctx.font = "bold 10px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
                ctx.fillText(labelText, mirroredX + 6, Math.max(12, drawY - 5));

                ctx.restore();
            });
        }
    };

    return ProctorAI;
}));
```

---

## 📄 `js/app.js`

```javascript
/* =========================================================
   SMARTEXAM - APP.JS
   Main frontend application logic
========================================================= */

"use strict";


/* =========================================================
   STORAGE KEYS
========================================================= */

const STORAGE_KEYS = {

    exams: "smartExam_exams",

    results: "smartExam_results",

    studentLoggedIn: "studentLoggedIn",

    studentEmail: "studentEmail",

    adminLoggedIn: "adminLoggedIn",

    adminEmail: "adminEmail",

    currentExam: "smartExam_currentExam"

};


/* =========================================================
   DEFAULT EXAMS
========================================================= */

const DEFAULT_EXAMS = [

    {
        id: "exam_dsa_001",

        title: "Data Structures & Algorithms",

        subject: "Data Structures",

        duration: 30,

        description:
            "Test your knowledge of arrays, stacks, queues, linked lists and trees.",

        createdAt: new Date().toISOString(),

        questions: [

            {
                id: "q1",

                text:
                    "Which data structure follows LIFO principle?",

                options: [
                    "Queue",
                    "Stack",
                    "Array",
                    "Linked List"
                ],

                answer: 1,

                marks: 1
            },

            {
                id: "q2",

                text:
                    "Which data structure follows FIFO principle?",

                options: [
                    "Stack",
                    "Tree",
                    "Queue",
                    "Graph"
                ],

                answer: 2,

                marks: 1
            },

            {
                id: "q3",

                text:
                    "What is the average time complexity of binary search?",

                options: [
                    "O(n)",
                    "O(log n)",
                    "O(n²)",
                    "O(1)"
                ],

                answer: 1,

                marks: 1
            },

            {
                id: "q4",

                text:
                    "Which data structure consists of nodes connected by edges?",

                options: [
                    "Array",
                    "Stack",
                    "Graph",
                    "Queue"
                ],

                answer: 2,

                marks: 1
            }

        ]

    },


    {

        id: "exam_cpp_001",

        title: "C++ Programming Fundamentals",

        subject: "C++",

        duration: 25,

        description:
            "Test your understanding of C++ programming fundamentals.",

        createdAt: new Date().toISOString(),

        questions: [

            {
                id: "q1",

                text:
                    "Which symbol is used to end a C++ statement?",

                options: [
                    ".",
                    ":",
                    ";",
                    ","
                ],

                answer: 2,

                marks: 1

            },

            {
                id: "q2",

                text:
                    "Which keyword is used to create a class in C++?",

                options: [
                    "object",
                    "class",
                    "structural",
                    "define"
                ],

                answer: 1,

                marks: 1

            },

            {
                id: "q3",

                text:
                    "Which operator is used for scope resolution?",

                options: [
                    ".",
                    "::",
                    "->",
                    ":"
                ],

                answer: 1,

                marks: 1

            }

        ]

    }

];


/* =========================================================
   INITIALIZE APPLICATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeStorage();

        initializeLogout();

        initializeUserInformation();

        initializeExamPage();

    }
);


/* =========================================================
   STORAGE INITIALIZATION
========================================================= */

function initializeStorage() {

    const exams =
        localStorage.getItem(
            STORAGE_KEYS.exams
        );


    if (!exams) {

        localStorage.setItem(
            STORAGE_KEYS.exams,
            JSON.stringify(
                DEFAULT_EXAMS
            )
        );

    }


    const results =
        localStorage.getItem(
            STORAGE_KEYS.results
        );


    if (!results) {

        localStorage.setItem(
            STORAGE_KEYS.results,
            JSON.stringify([])
        );

    }

}


/* =========================================================
   GET EXAMS
========================================================= */

function getExams() {

    try {

        return JSON.parse(
            localStorage.getItem(
                STORAGE_KEYS.exams
            )
        ) || [];

    }

    catch (error) {

        console.error(
            "Unable to read exams:",
            error
        );

        return [];

    }

}


/* =========================================================
   SAVE EXAMS
========================================================= */

function saveExams(exams) {

    localStorage.setItem(
        STORAGE_KEYS.exams,
        JSON.stringify(exams)
    );

}


/* =========================================================
   GET RESULTS
========================================================= */

function getResults() {

    try {

        return JSON.parse(
            localStorage.getItem(
                STORAGE_KEYS.results
            )
        ) || [];

    }

    catch (error) {

        console.error(
            "Unable to read results:",
            error
        );

        return [];

    }

}


/* =========================================================
   SAVE RESULTS
========================================================= */

function saveResults(results) {

    localStorage.setItem(
        STORAGE_KEYS.results,
        JSON.stringify(results)
    );

}


/* =========================================================
   EXAM PAGE
========================================================= */

function initializeExamPage() {

    const examGrid =
        document.getElementById(
            "examGrid"
        );


    if (!examGrid) {

        return;

    }


    const exams =
        getExams();


    updateExamStatistics(
        exams
    );


    populateSubjectFilter(
        exams
    );


    renderExams(
        exams
    );


    const search =
        document.getElementById(
            "examSearch"
        );


    const filter =
        document.getElementById(
            "subjectFilter"
        );


    if (search) {

        search.addEventListener(
            "input",
            function () {

                filterExams(
                    exams
                );

            }
        );

    }


    if (filter) {

        filter.addEventListener(
            "change",
            function () {

                filterExams(
                    exams
                );

            }
        );

    }

}


/* =========================================================
   UPDATE STATISTICS
========================================================= */

function updateExamStatistics(
    exams
) {

    const totalExams =
        document.getElementById(
            "totalExams"
        );


    const totalQuestions =
        document.getElementById(
            "totalQuestions"
        );


    const totalSubjects =
        document.getElementById(
            "totalSubjects"
        );


    if (totalExams) {

        totalExams.textContent =
            exams.length;

    }


    if (totalQuestions) {

        const count =
            exams.reduce(
                function (
                    total,
                    exam
                ) {

                    return total +
                        exam.questions.length;

                },
                0
            );


        totalQuestions.textContent =
            count;

    }


    if (totalSubjects) {

        const subjects =
            new Set(
                exams.map(
                    exam =>
                        exam.subject
                )
            );


        totalSubjects.textContent =
            subjects.size;

    }

}


/* =========================================================
   SUBJECT FILTER
========================================================= */

function populateSubjectFilter(
    exams
) {

    const filter =
        document.getElementById(
            "subjectFilter"
        );


    if (!filter) {

        return;

    }


    const subjects =
        [
            ...new Set(
                exams.map(
                    exam =>
                        exam.subject
                )
            )
        ];


    filter.innerHTML =
        `<option value="all">
            All Subjects
        </option>`;


    subjects.forEach(
        function (subject) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                subject;


            option.textContent =
                subject;


            filter.appendChild(
                option
            );

        }
    );

}


/* =========================================================
   FILTER EXAMS
========================================================= */

function filterExams(
    exams
) {

    const search =
        document.getElementById(
            "examSearch"
        );


    const filter =
        document.getElementById(
            "subjectFilter"
        );


    const searchValue =
        search
            ? search.value
                .trim()
                .toLowerCase()
            : "";


    const subjectValue =
        filter
            ? filter.value
            : "all";


    const filtered =
        exams.filter(
            function (exam) {

                const matchesSearch =
                    exam.title
                        .toLowerCase()
                        .includes(searchValue) ||

                    exam.subject
                        .toLowerCase()
                        .includes(searchValue);


                const matchesSubject =
                    subjectValue === "all" ||
                    exam.subject === subjectValue;


                return (
                    matchesSearch &&
                    matchesSubject
                );

            }
        );


    renderExams(
        filtered
    );

}


/* =========================================================
   RENDER EXAMS
========================================================= */

function renderExams(
    exams
) {

    const grid =
        document.getElementById(
            "examGrid"
        );


    const empty =
        document.getElementById(
            "noExams"
        );


    if (!grid) {

        return;

    }


    grid.innerHTML = "";


    if (exams.length === 0) {

        if (empty) {

            empty.classList.remove(
                "hidden"
            );

        }

        return;

    }


    if (empty) {

        empty.classList.add(
            "hidden"
        );

    }


    exams.forEach(
        function (exam) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "exam-card";


            const questionCount =
                exam.questions
                    ? exam.questions.length
                    : 0;


            card.innerHTML = `

                <div class="exam-card-top">

                    <span class="subject-tag">
                        ${escapeHTML(exam.subject)}
                    </span>

                    <span class="duration">
                        ⏱ ${exam.duration} min
                    </span>

                </div>


                <h2>
                    ${escapeHTML(exam.title)}
                </h2>


                <p>
                    ${escapeHTML(
                        exam.description ||
                        "Online examination"
                    )}
                </p>


                <div class="exam-meta">

                    <span>
                        📝 ${questionCount} Questions
                    </span>

                    <span>
                        🎯 ${
                            getTotalMarks(exam)
                        } Marks
                    </span>

                </div>


                <button
                    class="btn btn-primary start-exam"
                    data-exam-id="${exam.id}">

                    Start Exam →

                </button>

            `;


            grid.appendChild(
                card
            );

        }
    );


    document
        .querySelectorAll(
            ".start-exam"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        startExam(
                            button.dataset.examId
                        );

                    }
                );

            }
        );

}


/* =========================================================
   TOTAL MARKS
========================================================= */

function getTotalMarks(
    exam
) {

    return exam.questions.reduce(
        function (
            total,
            question
        ) {

            return total +
                Number(
                    question.marks || 1
                );

        },
        0
    );

}


/* =========================================================
   START EXAM
========================================================= */

function startExam(
    examId
) {

    const exams =
        getExams();


    const exam =
        exams.find(
            function (item) {

                return item.id === examId;

            }
        );


    if (!exam) {

        alert(
            "Exam could not be found."
        );

        return;

    }


    localStorage.setItem(
        STORAGE_KEYS.currentExam,
        JSON.stringify(exam)
    );


    /*
    This page should be created next:
    student/exam.html
    */

    window.location.href =
        "student/exam.html";

}


/* =========================================================
   LOGOUT
========================================================= */

function initializeLogout() {

    const logoutButton =
        document.getElementById(
            "logoutButton"
        );


    if (!logoutButton) {

        return;

    }


    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                STORAGE_KEYS.studentLoggedIn
            );

            localStorage.removeItem(
                STORAGE_KEYS.studentEmail
            );

            localStorage.removeItem(
                STORAGE_KEYS.adminLoggedIn
            );

            localStorage.removeItem(
                STORAGE_KEYS.adminEmail
            );


            window.location.href =
                "index.html";

        }
    );

}


/* =========================================================
   USER INFORMATION
========================================================= */

function initializeUserInformation() {

    const studentEmail =
        localStorage.getItem(
            STORAGE_KEYS.studentEmail
        );


    const adminEmail =
        localStorage.getItem(
            STORAGE_KEYS.adminEmail
        );


    const currentEmail =
        document.getElementById(
            "currentEmail"
        );


    const resultEmail =
        document.getElementById(
            "resultUserEmail"
        );


    const adminEmailElement =
        document.getElementById(
            "adminEmail"
        );


    if (
        studentEmail &&
        currentEmail
    ) {

        currentEmail.textContent =
            studentEmail;

    }


    if (
        studentEmail &&
        resultEmail
    ) {

        resultEmail.textContent =
            studentEmail;

    }


    if (
        adminEmail &&
        adminEmailElement
    ) {

        adminEmailElement.textContent =
            adminEmail;

    }

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
    value
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        String(value ?? "");


    return div.innerHTML;

}
```

---

## 📄 `js/auth.js`

```javascript
document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("studentLoginForm");

    const registerForm =
        document.getElementById("registerForm");


    /*
     * STUDENT LOGIN
     */

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const email =
                    document.getElementById("email")
                    .value.trim();

                const password =
                    document.getElementById("password")
                    .value.trim();


                if (!email || !password) {

                    alert("Please enter email and password.");

                    return;
                }


                /*
                 * Temporary frontend authentication.
                 *
                 * Later this will be replaced
                 * with backend API authentication.
                 */

                localStorage.setItem(
                    "studentLoggedIn",
                    "true"
                );

                localStorage.setItem(
                    "studentEmail",
                    email
                );


                window.location.href =
                    "dashboard.html";

            }
        );

    }


    /*
     * STUDENT REGISTRATION
     */

    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name")
                    .value.trim();

                const email =
                    document.getElementById("registerEmail")
                    .value.trim();

                const password =
                    document.getElementById("registerPassword")
                    .value;

                const confirmPassword =
                    document.getElementById("confirmPassword")
                    .value;


                if (
                    password !==
                    confirmPassword
                ) {

                    alert(
                        "Passwords do not match."
                    );

                    return;
                }


                const student = {

                    name: name,

                    email: email,

                    password: password

                };


                localStorage.setItem(
                    "student",
                    JSON.stringify(student)
                );


                alert(
                    "Registration successful!"
                );


                window.location.href =
                    "login.html";

            }
        );

    }

});
```

---

## 📄 `js/admin.js`

```javascript
/* =========================================================
   SMARTEXAM - ADMIN.JS
   Admin examination and question management
========================================================= */

"use strict";


let questionCounter = 0;


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeAdminPage();

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializeAdminPage() {

    const form =
        document.getElementById(
            "createExamForm"
        );


    if (!form) {

        return;

    }


    const addButton =
        document.getElementById(
            "addQuestionButton"
        );


    if (addButton) {

        addButton.addEventListener(
            "click",
            function () {

                addQuestion();

            }
        );

    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            createExam();

        }
    );


    /*
    Add first question automatically
    */

    addQuestion();

}


/* =========================================================
   ADD QUESTION
========================================================= */

function addQuestion() {

    questionCounter++;


    const container =
        document.getElementById(
            "questionsContainer"
        );


    const emptyMessage =
        document.getElementById(
            "emptyQuestionMessage"
        );


    if (!container) {

        return;

    }


    if (emptyMessage) {

        emptyMessage.style.display =
            "none";

    }


    const questionCard =
        document.createElement(
            "div"
        );


    questionCard.className =
        "question-card";


    questionCard.dataset.questionNumber =
        questionCounter;


    questionCard.innerHTML = `

        <div class="question-card-header">

            <h3>
                Question ${questionCounter}
            </h3>

            <button
                type="button"
                class="remove-question">

                Remove

            </button>

        </div>


        <div class="form-group">

            <label>
                Question *
            </label>

            <textarea
                class="question-text"
                rows="3"
                placeholder="Enter your question..."
                required></textarea>

        </div>


        <div class="options-grid">

            <div class="option-group">

                <label>
                    Option A *
                </label>

                <input
                    type="text"
                    class="question-option"
                    data-option="0"
                    placeholder="Enter option A"
                    required>

            </div>


            <div class="option-group">

                <label>
                    Option B *
                </label>

                <input
                    type="text"
                    class="question-option"
                    data-option="1"
                    placeholder="Enter option B"
                    required>

            </div>


            <div class="option-group">

                <label>
                    Option C *
                </label>

                <input
                    type="text"
                    class="question-option"
                    data-option="2"
                    placeholder="Enter option C"
                    required>

            </div>


            <div class="option-group">

                <label>
                    Option D *
                </label>

                <input
                    type="text"
                    class="question-option"
                    data-option="3"
                    placeholder="Enter option D"
                    required>

            </div>

        </div>


        <div class="question-settings">

            <div class="form-group">

                <label>
                    Correct Answer *
                </label>

                <select
                    class="correct-answer"
                    required>

                    <option value="">
                        Select correct answer
                    </option>

                    <option value="0">
                        Option A
                    </option>

                    <option value="1">
                        Option B
                    </option>

                    <option value="2">
                        Option C
                    </option>

                    <option value="3">
                        Option D
                    </option>

                </select>

            </div>


            <div class="form-group">

                <label>
                    Marks *
                </label>

                <input
                    type="number"
                    class="question-marks"
                    min="1"
                    max="100"
                    value="1"
                    required>

            </div>

        </div>

    `;


    container.appendChild(
        questionCard
    );


    const removeButton =
        questionCard.querySelector(
            ".remove-question"
        );


    removeButton.addEventListener(
        "click",
        function () {

            questionCard.remove();

            renumberQuestions();

        }
    );

}


/* =========================================================
   RENUMBER QUESTIONS
========================================================= */

function renumberQuestions() {

    const cards =
        document.querySelectorAll(
            ".question-card"
        );


    const emptyMessage =
        document.getElementById(
            "emptyQuestionMessage"
        );


    cards.forEach(
        function (
            card,
            index
        ) {

            const heading =
                card.querySelector(
                    "h3"
                );


            if (heading) {

                heading.textContent =
                    `Question ${index + 1}`;

            }

        }
    );


    if (
        cards.length === 0 &&
        emptyMessage
    ) {

        emptyMessage.style.display =
            "block";

    }

}


/* =========================================================
   CREATE EXAM
========================================================= */

function createExam() {

    const title =
        document.getElementById(
            "examTitle"
        ).value.trim();


    const subject =
        document.getElementById(
            "examSubject"
        ).value.trim();


    const duration =
        Number(
            document.getElementById(
                "examDuration"
            ).value
        );


    const description =
        document.getElementById(
            "examDescription"
        ).value.trim();


    /*
    Basic validation
    */

    if (!title) {

        alert(
            "Please enter the exam title."
        );

        return;

    }


    if (!subject) {

        alert(
            "Please enter the exam subject."
        );

        return;

    }


    if (
        !Number.isInteger(duration) ||
        duration <= 0
    ) {

        alert(
            "Please enter a valid exam duration."
        );

        return;

    }


    /*
    Get question cards
    */

    const cards =
        document.querySelectorAll(
            ".question-card"
        );


    if (cards.length === 0) {

        alert(
            "Please add at least one question."
        );

        return;

    }


    const questions = [];


    let questionError =
        false;


    cards.forEach(
        function (
            card,
            index
        ) {

            const text =
                card.querySelector(
                    ".question-text"
                ).value.trim();


            const optionInputs =
                card.querySelectorAll(
                    ".question-option"
                );


            const options =
                Array.from(
                    optionInputs
                ).map(
                    function (input) {

                        return input.value.trim();

                    }
                );


            const correctAnswer =
                card.querySelector(
                    ".correct-answer"
                ).value;


            const marks =
                Number(
                    card.querySelector(
                        ".question-marks"
                    ).value
                );


            if (!text) {

                questionError = true;

                return;

            }


            if (
                options.some(
                    option =>
                        option === ""
                )
            ) {

                questionError = true;

                return;

            }


            if (correctAnswer === "") {

                questionError = true;

                return;

            }


            if (
                !Number.isInteger(marks) ||
                marks <= 0
            ) {

                questionError = true;

                return;

            }


            questions.push({

                id:
                    "q_" +
                    Date.now() +
                    "_" +
                    index,

                text: text,

                options: options,

                answer:
                    Number(
                        correctAnswer
                    ),

                marks: marks

            });

        }
    );


    if (questionError) {

        alert(
            "Please complete all question fields correctly."
        );

        return;

    }


    /*
    Create exam object
    */

    const exam = {

        id:
            "exam_" +
            Date.now(),

        title: title,

        subject: subject,

        duration: duration,

        description:
            description ||
            "Online examination",

        createdAt:
            new Date().toISOString(),

        questions:
            questions

    };


    /*
    Get existing exams
    */

    let exams = [];


    try {

        exams =
            JSON.parse(
                localStorage.getItem(
                    "smartExam_exams"
                )
            ) || [];

    }

    catch (error) {

        exams = [];

    }


    /*
    Add new exam
    */

    exams.push(
        exam
    );


    /*
    Save
    */

    localStorage.setItem(
        "smartExam_exams",
        JSON.stringify(
            exams
        )
    );


    alert(
        "Exam created successfully!"
    );


    /*
    Go to exams page
    */

    window.location.href =
        "../exams.html";

}
```

---

## 📄 `js/exam.js`

```javascript
/*
 * SAMPLE QUESTION DATABASE
 *
 * Later this data will come from MySQL
 * through a Java backend API.
 */


const questions = [

    {
        id: 1,

        question:
            "Which data structure follows the LIFO principle?",

        options: [
            "Queue",
            "Stack",
            "Linked List",
            "Graph"
        ],

        answer: 1,

        marks: 2
    },


    {
        id: 2,

        question:
            "Which data structure follows the FIFO principle?",

        options: [
            "Stack",
            "Tree",
            "Queue",
            "Heap"
        ],

        answer: 2,

        marks: 2
    },


    {
        id: 3,

        question:
            "What is the average time complexity of searching in a hash table?",

        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
        ],

        answer: 2,

        marks: 2
    },


    {
        id: 4,

        question:
            "Which algorithm is commonly used for sorting in O(n log n) time?",

        options: [
            "Bubble Sort",
            "Merge Sort",
            "Linear Search",
            "Sequential Search"
        ],

        answer: 1,

        marks: 2
    },


    {
        id: 5,

        question:
            "Which data structure is commonly used in BFS?",

        options: [
            "Stack",
            "Queue",
            "Heap",
            "Array"
        ],

        answer: 1,

        marks: 2
    }

];


let currentQuestion = 0;


/*
 * Stores student's answers.
 *
 * Example:
 *
 * answers[0] = 1
 * means first question answer is option 1.
 */

const answers =
    new Array(questions.length)
    .fill(null);


/*
 * Stores questions marked
 * for review.
 */

const reviewQuestions =
    new Set();


/*
 * TIMER
 */

let timeLeft = 30 * 60;


function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;


    document.getElementById(
        "timer"
    ).textContent =

        `${String(minutes).padStart(2, "0")}:` +

        `${String(seconds).padStart(2, "0")}`;


    if (timeLeft <= 0) {

        clearInterval(timerInterval);

        submitExam();

        return;
    }


    timeLeft--;

}


const timerInterval =
    setInterval(
        updateTimer,
        1000
    );


/*
 * LOAD QUESTION
 */

function loadQuestion(index) {

    if (
        index < 0 ||
        index >= questions.length
    ) {
        return;
    }


    currentQuestion = index;


    const question =
        questions[index];


    document.getElementById(
        "questionNumber"
    ).textContent =

        `Question ${index + 1}`;


    document.getElementById(
        "questionText"
    ).textContent =

        question.question;


    const optionsContainer =
        document.getElementById(
            "options"
        );


    optionsContainer.innerHTML = "";


    question.options.forEach(
        (option, optionIndex) => {

            const label =
                document.createElement(
                    "label"
                );


            label.className = "option";


            if (
                answers[index] ===
                optionIndex
            ) {

                label.classList.add(
                    "selected"
                );

            }


            label.innerHTML = `

                <input
                    type="radio"
                    name="answer"
                    value="${optionIndex}"
                    ${answers[index] === optionIndex
                        ? "checked"
                        : ""}
                >

                ${option}

            `;


            label
                .querySelector("input")
                .addEventListener(
                    "change",
                    function () {

                        answers[index] =
                            optionIndex;

                        loadQuestion(index);

                    }
                );


            optionsContainer.appendChild(
                label
            );

        }
    );


    renderQuestionNumbers();

}


/*
 * QUESTION NAVIGATION
 */

function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion(
            currentQuestion
        );

    }

}


function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion(
            currentQuestion
        );

    }

}


/*
 * MARK FOR REVIEW
 */

function markForReview() {

    if (
        reviewQuestions.has(
            currentQuestion
        )
    ) {

        reviewQuestions.delete(
            currentQuestion
        );

    } else {

        reviewQuestions.add(
            currentQuestion
        );

    }


    renderQuestionNumbers();

}


/*
 * QUESTION NAVIGATION PANEL
 */

function renderQuestionNumbers() {

    const container =
        document.getElementById(
            "questionNumbers"
        );


    container.innerHTML = "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.textContent =
                index + 1;


            button.className =
                "question-number";


            if (
                answers[index] !== null
            ) {

                button.classList.add(
                    "answered"
                );

            }


            if (
                reviewQuestions.has(index)
            ) {

                button.classList.add(
                    "review"
                );

            }


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            button.addEventListener(
                "click",
                function () {

                    loadQuestion(index);

                }
            );


            container.appendChild(
                button
            );

        }
    );

}


/*
 * SUBMIT EXAM
 */

function submitExam() {

    const confirmed =
        confirm(
            "Are you sure you want to submit the exam?"
        );


    if (!confirmed) {

        return;

    }


    clearInterval(
        timerInterval
    );


    let score = 0;


    questions.forEach(
        (question, index) => {

            if (
                answers[index] ===
                question.answer
            ) {

                score +=
                    question.marks;

            }

        }
    );


    const result = {

        score: score,

        totalMarks:
            questions.reduce(
                (total, question) =>
                    total + question.marks,
                0
            ),

        answers: answers,

        date:
            new Date().toLocaleString()

    };


    localStorage.setItem(
        "examResult",
        JSON.stringify(result)
    );


    window.location.href =
        "result.html";

}


/*
 * INITIAL LOAD
 */

loadQuestion(0);

updateTimer();
```

---

## 📄 `js/questions.js`

```javascript
let questions = [
    {
        "id": 101,
        "text": "Which data structure follows the LIFO (Last In First Out) principle?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Queue",
            "Stack",
            "Tree",
            "Array"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 102,
        "text": "Which data structure follows the FIFO (First In First Out) principle?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Stack",
            "Queue",
            "Binary Search Tree",
            "Graph"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 103,
        "text": "What is the time complexity to access an element by index in an array?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n²)"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 104,
        "text": "Which of the following data structures is non-linear?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Array",
            "Linked List",
            "Stack",
            "Binary Tree"
        ],
        "correctOption": "D",
        "marks": 2
    },
    {
        "id": 105,
        "text": "What is the worst-case time complexity of Linear Search in an array of size n?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 106,
        "text": "What is the prerequisite condition required to perform Binary Search on an array?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "The array must be sorted",
            "The array must contain only positive numbers",
            "The array must have an even number of elements",
            "The array must be dynamic"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 107,
        "text": "In a singly linked list, each node contains data and a pointer to:",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "The previous node",
            "The next node",
            "The head node",
            "Both next and previous nodes"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 108,
        "text": "Which operation is used to insert an element into a Stack?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Pop",
            "Push",
            "Enqueue",
            "Dequeue"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 109,
        "text": "Which operation is used to remove an element from a Queue?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Push",
            "Pop",
            "Enqueue",
            "Dequeue"
        ],
        "correctOption": "D",
        "marks": 2
    },
    {
        "id": 110,
        "text": "What is the maximum number of children a binary tree node can have?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "1",
            "2",
            "3",
            "Any number"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 111,
        "text": "What is the time complexity of Binary Search on a sorted array of size n?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 112,
        "text": "Which tree traversal visits the root node before its left and right subtrees?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Inorder",
            "Preorder",
            "Postorder",
            "Level-order"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 113,
        "text": "Which data structure is typically used to implement Breadth-First Search (BFS)?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Stack",
            "Queue",
            "Priority Queue",
            "Binary Tree"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 114,
        "text": "Which data structure is typically used to implement Depth-First Search (DFS)?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Queue",
            "Stack",
            "Circular Queue",
            "Hash Map"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 115,
        "text": "What is the term for attempting to push an element onto a full stack?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Underflow",
            "Overflow",
            "Segmentation fault",
            "Deadlock"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 116,
        "text": "What is the term for attempting to pop an element from an empty stack?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Overflow",
            "Underflow",
            "Garbage collection",
            "Memory leak"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 117,
        "text": "In a circular queue of capacity N, after index N-1, where does the next element go?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Index N",
            "Index 0",
            "Index -1",
            "It cannot be inserted"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 118,
        "text": "Which sorting algorithm repeatedly compares adjacent elements and swaps them if out of order?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "Selection Sort",
            "Bubble Sort",
            "Merge Sort",
            "QuickSort"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 119,
        "text": "A node in a standard doubly linked list contains how many pointers?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 120,
        "text": "What is the top pointer of a Stack initialized to when using a 0-indexed array?",
        "subject": "DSA",
        "difficulty": "Easy",
        "options": [
            "-1",
            "0",
            "1",
            "null"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 201,
        "text": "Which keyword is used to create an instance of a class in Java?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "class",
            "new",
            "create",
            "alloc"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 202,
        "text": "What is the default value of a boolean instance variable in Java?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "true",
            "false",
            "0",
            "null"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 203,
        "text": "Which of the following is NOT a primitive data type in Java?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "int",
            "float",
            "String",
            "char"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 204,
        "text": "Which keyword in Java is used to inherit a class?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "implements",
            "extends",
            "inherits",
            "instanceof"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 205,
        "text": "Which keyword in Java is used to implement an interface?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "extends",
            "implements",
            "interface",
            "import"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 206,
        "text": "What is the return type of a constructor in Java?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "void",
            "int",
            "No return type",
            "Object"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 207,
        "text": "Which Java keyword prevents a method from being overridden in a subclass?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "static",
            "final",
            "abstract",
            "synchronized"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 208,
        "text": "Which method is the starting execution point for any Java standalone application?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "start()",
            "main()",
            "run()",
            "init()"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 209,
        "text": "What is the size of an int data type in standard Java?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "2 bytes",
            "4 bytes",
            "8 bytes",
            "1 byte"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 210,
        "text": "Which exception is thrown when attempting to divide an integer by zero in Java?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "NullPointerException",
            "ArithmeticException",
            "NumberFormatException",
            "ArrayIndexOutOfBoundsException"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 211,
        "text": "What does JVM stand for?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "Java Virtual Machine",
            "Java Variable Manager",
            "Java Visual Mechanism",
            "Java Vector Method"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 212,
        "text": "Which package is automatically imported in every Java program without explicit import?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "java.util",
            "java.io",
            "java.lang",
            "java.net"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 213,
        "text": "Which block is always executed in exception handling, whether an exception occurs or not?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "try",
            "catch",
            "finally",
            "throw"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 214,
        "text": "Which keyword is used to refer to the immediate parent class object in Java?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "this",
            "super",
            "parent",
            "base"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 215,
        "text": "Which collection class in Java provides a resizable array implementation of the List interface?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "ArrayList",
            "HashSet",
            "TreeSet",
            "HashMap"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 216,
        "text": "What is the index of the first element in a Java array?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "-1",
            "0",
            "1",
            "Depends on declaration"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 217,
        "text": "Which keyword is used to define a constant variable whose value cannot change in Java?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "const",
            "final",
            "static",
            "immutable"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 218,
        "text": "Defining multiple methods with the same name but different parameters in one class is known as:",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "Method Overloading",
            "Method Overriding",
            "Encapsulation",
            "Inheritance"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 219,
        "text": "Which Java keyword is used to access package members from another file or package?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "include",
            "import",
            "using",
            "require"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 220,
        "text": "Are String objects in Java mutable or immutable?",
        "subject": "Java",
        "difficulty": "Easy",
        "options": [
            "Mutable",
            "Immutable",
            "Depends on compiler",
            "Dynamic"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 301,
        "text": "What does DBMS stand for?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "Database Management System",
            "Data Base Multi System",
            "Digital Backup Management System",
            "Data Block Memory Storage"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 302,
        "text": "What does SQL stand for?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "Structured Query Language",
            "Sequential Query List",
            "Simple Query Logic",
            "Standard Question Language"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 303,
        "text": "Which SQL command is used to retrieve data from a database table?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "GET",
            "FETCH",
            "SELECT",
            "RETRIEVE"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 304,
        "text": "Which SQL clause is used to filter records based on a specified condition?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "ORDER BY",
            "GROUP BY",
            "WHERE",
            "HAVING"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 305,
        "text": "Which key uniquely identifies each record/tuple in a database table?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "Foreign Key",
            "Candidate Key",
            "Primary Key",
            "Super Key"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 306,
        "text": "A foreign key in a child table references which key in the parent table?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "Composite Key",
            "Primary Key",
            "Foreign Key",
            "Alternate Key"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 307,
        "text": "Which SQL command is used to insert new rows of data into a table?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "ADD ROW",
            "INSERT INTO",
            "UPDATE",
            "CREATE"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 308,
        "text": "Which SQL command is used to modify existing data records in a table?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "MODIFY",
            "CHANGE",
            "UPDATE",
            "ALTER"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 309,
        "text": "Which SQL command is used to remove specific rows from a table?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "REMOVE",
            "DELETE",
            "DROP",
            "TRUNCATE"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 310,
        "text": "Which SQL statement is used to permanently remove an entire table including its schema?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "DELETE TABLE",
            "DROP TABLE",
            "REMOVE TABLE",
            "CLEAR TABLE"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 311,
        "text": "What does ACID stand for in the context of DBMS transactions?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "Atomicity, Consistency, Isolation, Durability",
            "Accuracy, Control, Integrity, Data",
            "Access, Security, Identity, Device",
            "Auto, Cache, Index, Directory"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 312,
        "text": "Which ACID property ensures that all operations in a transaction succeed or none occur?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "Consistency",
            "Atomicity",
            "Isolation",
            "Durability"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 313,
        "text": "Which clause is used in SQL to sort the query result-set?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "SORT BY",
            "ORDER BY",
            "ARRANGE BY",
            "GROUP BY"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 314,
        "text": "By default, what sort order does the ORDER BY clause apply in SQL?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "Descending (DESC)",
            "Ascending (ASC)",
            "Random",
            "Creation order"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 315,
        "text": "Which SQL aggregate function is used to count the number of rows matching a condition?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "SUM()",
            "COUNT()",
            "TOTAL()",
            "NUMBER()"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 316,
        "text": "Which SQL keyword is used to return only distinct (different) values?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "UNIQUE",
            "DISTINCT",
            "DIFFERENT",
            "SEPARATE"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 317,
        "text": "What type of SQL JOIN returns rows that have matching values in both tables?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "LEFT JOIN",
            "RIGHT JOIN",
            "INNER JOIN",
            "FULL OUTER JOIN"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 318,
        "text": "What fundamental rule does First Normal Form (1NF) enforce in a database table?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "Elimination of transitive dependency",
            "Atomic (indivisible) values in every column",
            "No partial key dependency",
            "Primary key indexing"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 319,
        "text": "Which of the following SQL commands belongs to DDL (Data Definition Language)?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "SELECT",
            "INSERT",
            "CREATE",
            "UPDATE"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 320,
        "text": "What is a View in relational SQL databases?",
        "subject": "DBMS",
        "difficulty": "Easy",
        "options": [
            "A physical copy of the database",
            "A virtual table based on a SQL query result",
            "A database backup file",
            "A special primary key index"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 401,
        "text": "Who is recognized as the creator of the C programming language?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "Bjarne Stroustrup",
            "Dennis Ritchie",
            "James Gosling",
            "Guido van Rossum"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 402,
        "text": "Which header file is required to use printf() and scanf() in a C program?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "<stdlib.h>",
            "<stdio.h>",
            "<conio.h>",
            "<string.h>"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 403,
        "text": "Which format specifier is used to print an integer value in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "%f",
            "%c",
            "%d",
            "%s"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 404,
        "text": "Which format specifier is used to print a single character in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "%c",
            "%s",
            "%d",
            "%f"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 405,
        "text": "What character is used to terminate every simple statement in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            ": (colon)",
            "; (semicolon)",
            ". (dot)",
            ", (comma)"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 406,
        "text": "What is the standard return type of the main() function in ANSI C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "void",
            "int",
            "float",
            "char"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 407,
        "text": "What does a pointer variable store in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "Value of another variable",
            "Memory address of another variable",
            "Name of a function",
            "Size of data type"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 408,
        "text": "Which operator is used to determine the memory address of a variable in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "* (asterisk)",
            "& (ampersand)",
            "-> (arrow)",
            "% (percent)"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 409,
        "text": "Which operator is used to dereference a pointer (access value at address) in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "&",
            "*",
            "#",
            "->"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 410,
        "text": "What is the size of a char data type in standard C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "1 byte",
            "2 bytes",
            "4 bytes",
            "8 bytes"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 411,
        "text": "Which escape sequence character marks the end of a string in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "'\\0' (null character)",
            "'\\n' (newline)",
            "'\\t' (tab)",
            "' ' (space)"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 412,
        "text": "Which function dynamically allocates memory in C without initializing it to zero?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "calloc()",
            "malloc()",
            "realloc()",
            "free()"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 413,
        "text": "Which function is used to deallocate dynamically allocated heap memory in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "delete()",
            "free()",
            "clear()",
            "release()"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 414,
        "text": "Which function dynamically allocates memory and initializes all allocated bytes to zero?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "malloc()",
            "calloc()",
            "alloc()",
            "memset()"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 415,
        "text": "What is the starting index of an array in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "-1",
            "0",
            "1",
            "User-defined"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 416,
        "text": "Which loop construct in C is guaranteed to execute its body at least once?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "for loop",
            "while loop",
            "do-while loop",
            "nested loop"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 417,
        "text": "Which keyword is used to terminate and exit immediately from a loop in C?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "exit",
            "stop",
            "break",
            "continue"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 418,
        "text": "Which keyword is used to skip the rest of the current iteration and jump to the next?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "skip",
            "continue",
            "pass",
            "next"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 419,
        "text": "Which compile-time operator returns the size of a variable or data type in bytes?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "sizeof",
            "len",
            "size",
            "bytes"
        ],
        "correctOption": "A",
        "marks": 2
    },
    {
        "id": 420,
        "text": "Which standard library function in <string.h> is used to determine the length of a string?",
        "subject": "C",
        "difficulty": "Easy",
        "options": [
            "strlength()",
            "strlen()",
            "strcount()",
            "size()"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 501,
        "text": "What is 15% of 200?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "20",
            "25",
            "30",
            "35"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 502,
        "text": "Find the next number in the geometric progression: 2, 4, 8, 16, ?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "24",
            "30",
            "32",
            "64"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 503,
        "text": "If a car travels at a constant speed of 60 km/h, what distance does it cover in 2.5 hours?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "120 km",
            "140 km",
            "150 km",
            "160 km"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 504,
        "text": "What is the average of the five numbers: 10, 20, 30, 40, and 50?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "25",
            "30",
            "35",
            "40"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 505,
        "text": "What is the square root of 144?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "11",
            "12",
            "13",
            "14"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 506,
        "text": "If the price of an item increases from ₹100 to ₹120, what is the percentage increase?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "15%",
            "20%",
            "25%",
            "30%"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 507,
        "text": "Find the missing number in the arithmetic progression: 5, 10, 15, 20, ?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "22",
            "25",
            "30",
            "35"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 508,
        "text": "A train running at 72 km/h crosses a 200m platform in 20s. What is the length of the train?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "150 m",
            "200 m",
            "250 m",
            "300 m"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 509,
        "text": "If 5 workers complete a task in 10 days, how many days will 10 workers take at the same rate?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "2 days",
            "5 days",
            "10 days",
            "15 days"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 510,
        "text": "What is the simplified ratio of 30 minutes to 2 hours?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "1 : 2",
            "1 : 3",
            "1 : 4",
            "1 : 6"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 511,
        "text": "If the cost price of an article is ₹500 and the selling price is ₹600, what is the profit percentage?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "10%",
            "15%",
            "20%",
            "25%"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 512,
        "text": "What is the simple interest on a principal of ₹1,000 at 10% per annum for 2 years?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "₹100",
            "₹150",
            "₹200",
            "₹250"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 513,
        "text": "What is the sum of the interior angles of any triangle?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "90°",
            "180°",
            "270°",
            "360°"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 514,
        "text": "What is the value of 7³ (7 raised to the power of 3)?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "49",
            "243",
            "343",
            "353"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 515,
        "text": "Find the next letter in the alphabet sequence: A, C, E, G, ?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "H",
            "I",
            "J",
            "K"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 516,
        "text": "When an analog clock displays 3:00, what is the angle between the hour hand and minute hand?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "45°",
            "60°",
            "90°",
            "120°"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 517,
        "text": "What is the perimeter of a square whose side length is 8 cm?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "16 cm",
            "24 cm",
            "32 cm",
            "64 cm"
        ],
        "correctOption": "C",
        "marks": 2
    },
    {
        "id": 518,
        "text": "What is the median of the ordered data set: 3, 7, 9, 12, 15?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "7",
            "9",
            "10",
            "12"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 519,
        "text": "If today is Monday, what day of the week will it be exactly 14 days from today?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday"
        ],
        "correctOption": "B",
        "marks": 2
    },
    {
        "id": 520,
        "text": "Complete the logical word analogy: Doctor : Hospital :: Teacher : ?",
        "subject": "Aptitude",
        "difficulty": "Easy",
        "options": [
            "School",
            "Court",
            "Office",
            "Factory"
        ],
        "correctOption": "A",
        "marks": 2
    }
];

const questionList = document.getElementById("questionList");
const searchInput = document.getElementById("searchQuestion");

function renderQuestions(data = questions) {
    if (!questionList) return;
    questionList.innerHTML = "";
    if (data.length === 0) {
        questionList.innerHTML = "<p>No questions found.</p>";
        return;
    }
    data.forEach(question => {
        const card = document.createElement("div");
        card.style.cssText = "padding:20px; border:1px solid #e5e7eb; border-radius:8px; margin-bottom:15px;";
        card.innerHTML = `
            <h3>${question.text}</h3>
            <p>Subject: ${question.subject}</p>
            <p>Difficulty: ${question.difficulty}</p>
            <p>Marks: ${question.marks}</p>
            <button onclick="deleteQuestion(${question.id})" style="background:#dc2626; color:white; border:none; padding:8px 14px; border-radius:5px; cursor:pointer;">Delete</button>
        `;
        questionList.appendChild(card);
    });
}

function deleteQuestion(id) {
    if (!confirm("Delete this question?")) return;
    questions = questions.filter(question => question.id !== id);
    renderQuestions();
}

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const keyword = searchInput.value.toLowerCase().trim();
        const filtered = questions.filter(question =>
            question.text.toLowerCase().includes(keyword) || (question.subject && question.subject.toLowerCase().includes(keyword))
        );
        renderQuestions(filtered);
    });
}

renderQuestions();
```

---

## 📄 `js/result.js`

```javascript
/* =========================================================
   SMARTEXAM - RESULT.JS
   Result management and display
========================================================= */

"use strict";


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeResultsPage();

    }
);


/* =========================================================
   INITIALIZE RESULTS
========================================================= */

function initializeResultsPage() {

    const tableBody =
        document.getElementById(
            "resultsTableBody"
        );


    if (!tableBody) {

        return;

    }


    const results =
        getStoredResults();


    const currentEmail =
        localStorage.getItem(
            "studentEmail"
        );


    /*
    Show current student results
    */

    let studentResults =
        results;


    if (currentEmail) {

        studentResults =
            results.filter(
                function (result) {

                    return (
                        result.studentEmail
                            ?.toLowerCase() ===
                        currentEmail.toLowerCase()
                    );

                }
            );

    }


    updateResultStatistics(
        studentResults
    );


    renderResults(
        studentResults
    );

}


/* =========================================================
   GET RESULTS
========================================================= */

function getStoredResults() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "smartExam_results"
            )
        ) || [];

    }

    catch (error) {

        console.error(
            "Unable to load results:",
            error
        );

        return [];

    }

}


/* =========================================================
   UPDATE STATISTICS
========================================================= */

function updateResultStatistics(
    results
) {

    const attempted =
        document.getElementById(
            "attemptedCount"
        );


    const average =
        document.getElementById(
            "averageScore"
        );


    const best =
        document.getElementById(
            "bestScore"
        );


    if (attempted) {

        attempted.textContent =
            results.length;

    }


    if (results.length === 0) {

        if (average) {

            average.textContent =
                "0%";

        }


        if (best) {

            best.textContent =
                "0%";

        }


        return;

    }


    const percentages =
        results.map(
            function (result) {

                return Number(
                    result.percentage || 0
                );

            }
        );


    const total =
        percentages.reduce(
            function (
                sum,
                value
            ) {

                return sum + value;

            },
            0
        );


    const averageScore =
        total /
        percentages.length;


    const bestScore =
        Math.max(
            ...percentages
        );


    if (average) {

        average.textContent =
            `${averageScore.toFixed(1)}%`;

    }


    if (best) {

        best.textContent =
            `${bestScore.toFixed(1)}%`;

    }

}


/* =========================================================
   RENDER RESULTS
========================================================= */

function renderResults(
    results
) {

    const tableBody =
        document.getElementById(
            "resultsTableBody"
        );


    const empty =
        document.getElementById(
            "noResults"
        );


    if (!tableBody) {

        return;

    }


    tableBody.innerHTML = "";


    if (results.length === 0) {

        if (empty) {

            empty.classList.remove(
                "hidden"
            );

        }

        return;

    }


    if (empty) {

        empty.classList.add(
            "hidden"
        );

    }


    /*
    Sort latest result first.
    This demonstrates sorting,
    useful for the DSA project.
    */

    const sortedResults =
        [...results].sort(
            function (
                a,
                b
            ) {

                return new Date(
                    b.date
                ) -
                new Date(
                    a.date
                );

            }
        );


    sortedResults.forEach(
        function (result) {

            const row =
                document.createElement(
                    "tr"
                );


            const percentage =
                Number(
                    result.percentage || 0
                );


            const passed =
                result.status === "Passed";


            row.innerHTML = `

                <td>
                    <strong>
                        ${escapeHTML(
                            result.examTitle
                        )}
                    </strong>
                </td>


                <td>
                    ${escapeHTML(
                        result.subject ||
                        "-"
                    )}
                </td>


                <td>
                    ${result.score}
                    /
                    ${result.totalMarks}
                </td>


                <td>
                    <strong>
                        ${percentage.toFixed(1)}%
                    </strong>
                </td>


                <td>

                    <span class="
                        result-status
                        ${passed
                            ? "passed"
                            : "failed"}
                    ">

                        ${
                            passed
                                ? "Passed"
                                : "Failed"
                        }

                    </span>

                </td>


                <td>
                    ${formatDate(
                        result.date
                    )}
                </td>


                <td>

                    <button
                        class="btn btn-small btn-secondary view-result"
                        data-result-id="${result.id}">

                        View

                    </button>

                </td>

            `;


            tableBody.appendChild(
                row
            );

        }
    );


    /*
    Add View buttons
    */

    document
        .querySelectorAll(
            ".view-result"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        showResultDetails(
                            button.dataset.resultId
                        );

                    }
                );

            }
        );

}


/* =========================================================
   RESULT DETAILS
========================================================= */

function showResultDetails(
    resultId
) {

    const results =
        getStoredResults();


    const result =
        results.find(
            function (item) {

                return (
                    item.id === resultId
                );

            }
        );


    if (!result) {

        alert(
            "Result not found."
        );

        return;

    }


    const percentage =
        Number(
            result.percentage || 0
        );


    const message =

        "EXAM RESULT\n\n" +

        "Exam: " +
        result.examTitle +
        "\n\n" +

        "Subject: " +
        result.subject +
        "\n\n" +

        "Score: " +
        result.score +
        " / " +
        result.totalMarks +
        "\n\n" +

        "Percentage: " +
        percentage.toFixed(1) +
        "%\n\n" +

        "Status: " +
        result.status +
        "\n\n" +

        "Date: " +
        formatDate(
            result.date
        );


    alert(
        message
    );

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(
    dateString
) {

    if (!dateString) {

        return "-";

    }


    const date =
        new Date(
            dateString
        );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "-";

    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
    value
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        String(
            value ?? ""
        );


    return div.innerHTML;

}
```

---

## 📄 `css/style.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f5f7fb;
    color: #1f2937;
}


/* NAVBAR */

.navbar {
    height: 70px;
    background: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 7%;

    box-shadow: 0 2px 10px rgba(0,0,0,0.08);

    position: sticky;
    top: 0;

    z-index: 1000;
}


.logo {
    font-size: 26px;
    font-weight: 700;
    color: #2563eb;
}

.logo span {
    color: #111827;
}


.navbar nav {
    display: flex;
    align-items: center;
    gap: 25px;
}


.navbar nav a {
    text-decoration: none;
    color: #374151;
    font-size: 15px;
    font-weight: 500;
}


.navbar nav a:hover {
    color: #2563eb;
}


.admin-btn {
    background: #2563eb;
    color: white !important;

    padding: 10px 18px;
    border-radius: 7px;
}


/* HERO */

.hero {
    min-height: calc(100vh - 70px);

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 60px 20px;

    background:
        linear-gradient(
            135deg,
            #eff6ff,
            #ffffff
        );
}


.hero-content {
    max-width: 800px;
}


.hero h1 {
    font-size: 55px;
    line-height: 1.15;

    margin-bottom: 25px;
}


.hero h1 span {
    color: #2563eb;
    display: block;
}


.hero p {
    font-size: 20px;
    color: #6b7280;

    line-height: 1.6;

    margin-bottom: 35px;
}


.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
}


.primary-btn,
.secondary-btn {
    text-decoration: none;

    padding: 14px 25px;

    border-radius: 8px;

    font-weight: 600;

    transition: 0.2s;
}


.primary-btn {
    background: #2563eb;
    color: white;
}


.primary-btn:hover {
    background: #1d4ed8;
}


.secondary-btn {
    background: white;
    color: #2563eb;

    border: 1px solid #2563eb;
}


.secondary-btn:hover {
    background: #eff6ff;
}


/* FEATURES */

.features {
    padding: 90px 7%;
    background: white;

    text-align: center;
}


.features h2,
.about h2 {
    font-size: 36px;
    margin-bottom: 12px;
}


.section-description {
    color: #6b7280;
    margin-bottom: 45px;
}


.feature-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 25px;
}


.feature-card {
    background: #f8fafc;

    padding: 35px 25px;

    border-radius: 12px;

    border: 1px solid #e5e7eb;

    transition: 0.25s;
}


.feature-card:hover {
    transform: translateY(-5px);

    box-shadow:
        0 10px 30px
        rgba(0,0,0,0.08);
}


.feature-icon {
    font-size: 40px;
    margin-bottom: 20px;
}


.feature-card h3 {
    margin-bottom: 12px;
}


.feature-card p {
    color: #6b7280;
    line-height: 1.6;
}


/* ABOUT */

.about {
    padding: 90px 15%;

    text-align: center;
}


.about p {
    max-width: 800px;

    margin: 15px auto;

    color: #6b7280;

    line-height: 1.7;
}


/* FOOTER */

footer {
    background: #111827;

    color: white;

    text-align: center;

    padding: 25px;
}


/* RESPONSIVE */

@media(max-width: 900px) {

    .feature-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

}


@media(max-width: 650px) {

    .navbar {
        padding: 0 20px;
    }

    .navbar nav a:not(.admin-btn) {
        display: none;
    }

    .hero h1 {
        font-size: 40px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

}
```

---

## 📄 `css/auth.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    font-family: Arial, sans-serif;

    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            135deg,
            #eff6ff,
            #dbeafe
        );
}


.auth-container {
    width: 100%;

    display: flex;
    justify-content: center;

    padding: 20px;
}


.auth-card {
    width: 100%;
    max-width: 450px;

    background: white;

    padding: 40px;

    border-radius: 15px;

    box-shadow:
        0 15px 40px
        rgba(0,0,0,0.1);
}


.auth-logo {
    text-align: center;

    font-size: 28px;

    font-weight: 700;

    color: #2563eb;

    margin-bottom: 25px;
}


.auth-logo span {
    color: #111827;
}


.auth-card h1 {
    text-align: center;

    font-size: 28px;

    margin-bottom: 8px;
}


.auth-subtitle {
    text-align: center;

    color: #6b7280;

    margin-bottom: 30px;
}


.form-group {
    margin-bottom: 20px;
}


.form-group label {
    display: block;

    font-weight: 600;

    margin-bottom: 8px;
}


.form-group input {
    width: 100%;

    padding: 13px 14px;

    border: 1px solid #d1d5db;

    border-radius: 7px;

    outline: none;

    font-size: 15px;
}


.form-group input:focus {
    border-color: #2563eb;

    box-shadow:
        0 0 0 3px
        rgba(37,99,235,0.1);
}


.form-options {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 25px;

    font-size: 14px;
}


.form-options a,
.register-link a {
    color: #2563eb;

    text-decoration: none;
}


.auth-btn {
    width: 100%;

    border: none;

    padding: 14px;

    border-radius: 7px;

    background: #2563eb;

    color: white;

    font-size: 16px;

    font-weight: 600;

    cursor: pointer;
}


.auth-btn:hover {
    background: #1d4ed8;
}


.register-link {
    text-align: center;

    margin-top: 25px;

    color: #6b7280;
}


.back-home {
    display: block;

    text-align: center;

    margin-top: 25px;

    color: #6b7280;

    text-decoration: none;
}
```

---

## 📄 `css/dashboard.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
    background-color: #f4f6f9;
    color: #333;
}

/* Navbar */
.navbar {
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.06);
}

.nav-brand {
    font-size: 22px;
    font-weight: 700;
    color: #1a73e8;
}

.nav-brand span {
    color: #202124;
}

.nav-user {
    display: flex;
    align-items: center;
    gap: 15px;
}

.btn-logout {
    background: #ea4335;
    color: #fff;
    border: none;
    padding: 7px 15px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
}

/* Dashboard Header */
.dashboard-container {
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 20px;
}

.dashboard-header {
    margin-bottom: 25px;
}

.dashboard-header h1 {
    font-size: 24px;
    color: #2e7d32;
    margin-bottom: 6px;
}

.dashboard-header p {
    color: #666;
    font-size: 15px;
}

/* Category Cards Grid */
.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
}

.category-card {
    background: #ffffff;
    border: 1px solid #e0e4e8;
    border-radius: 8px;
    padding: 22px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.08);
}

.card-title {
    font-size: 18px;
    font-weight: 600;
    color: #2e7d32;
    margin-bottom: 15px;
    border-bottom: 2px solid #e8f5e9;
    padding-bottom: 8px;
}

/* Topic Links */
.topic-list {
    list-style: none;
}

.topic-list li {
    margin-bottom: 10px;
}

.topic-list li a {
    text-decoration: none;
    color: #444;
    font-size: 14px;
    display: inline-block;
    transition: color 0.15s ease, padding-left 0.15s ease;
}

.topic-list li a:hover {
    color: #1a73e8;
    padding-left: 4px;
    font-weight: 500;
}

.highlight-link {
    color: #1a73e8 !important;
    font-weight: 600;
}
```

---

## 📄 `css/exam.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    font-family: Arial, sans-serif;

    background: #f5f7fb;

    color: #1f2937;
}


/* HEADER */

.exam-header {

    height: 70px;

    background: white;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 4%;

    box-shadow:
        0 2px 10px
        rgba(0,0,0,0.08);

}


.logo {

    font-size: 25px;

    font-weight: bold;

    color: #2563eb;

}


.logo span {
    color: #111827;
}


.timer {

    background: #fff7ed;

    color: #c2410c;

    padding: 10px 18px;

    border-radius: 7px;

    font-weight: 600;
}


.submit-btn {

    border: none;

    background: #dc2626;

    color: white;

    padding: 11px 20px;

    border-radius: 6px;

    cursor: pointer;

    font-weight: 600;
}


/* LAYOUT */

.exam-layout {

    display: grid;

    grid-template-columns:
        1fr 280px;

    gap: 25px;

    padding: 30px 5%;

}


/* QUESTION */

.question-area {

    min-width: 0;
}


.question-header {

    background: white;

    padding: 18px 22px;

    border-radius: 8px;

    display: flex;

    justify-content: space-between;

    margin-bottom: 15px;

    border: 1px solid #e5e7eb;
}


.question-box {

    background: white;

    padding: 35px;

    border-radius: 8px;

    border: 1px solid #e5e7eb;

}


.question-box h2 {

    font-size: 21px;

    line-height: 1.6;

    margin-bottom: 30px;

}


.options {

    display: flex;

    flex-direction: column;

    gap: 15px;

}


.option {

    padding: 16px;

    border: 1px solid #d1d5db;

    border-radius: 8px;

    cursor: pointer;

    transition: 0.2s;
}


.option:hover {

    background: #eff6ff;

    border-color: #2563eb;

}


.option.selected {

    background: #dbeafe;

    border-color: #2563eb;
}


.option input {

    margin-right: 10px;
}


.question-actions {

    display: flex;

    justify-content: space-between;

    margin-top: 35px;

    gap: 10px;
}


.primary-button,
.secondary-button,
.review-button {

    border: none;

    padding: 12px 20px;

    border-radius: 6px;

    cursor: pointer;

    font-weight: 600;
}


.primary-button {

    background: #2563eb;

    color: white;
}


.secondary-button {

    background: #e5e7eb;

    color: #374151;
}


.review-button {

    background: #fef3c7;

    color: #92400e;
}


/* QUESTION PANEL */

.question-panel {

    background: white;

    padding: 25px;

    border-radius: 8px;

    border: 1px solid #e5e7eb;

    height: fit-content;
}


.question-panel h3 {

    margin-bottom: 20px;

}


.question-numbers {

    display: grid;

    grid-template-columns:
        repeat(5, 1fr);

    gap: 10px;
}


.question-number {

    width: 38px;

    height: 38px;

    border-radius: 6px;

    border: 1px solid #d1d5db;

    background: white;

    cursor: pointer;
}


.question-number.answered {

    background: #dcfce7;

    border-color: #22c55e;
}


.question-number.review {

    background: #fef3c7;

    border-color: #f59e0b;
}


.question-number.current {

    background: #2563eb;

    color: white;

    border-color: #2563eb;
}


.legend {

    margin-top: 25px;

    font-size: 13px;
}


.legend p {

    margin: 8px 0;

    display: flex;

    align-items: center;

    gap: 8px;
}


.legend-box {

    width: 16px;

    height: 16px;

    border-radius: 3px;

    display: inline-block;

    border: 1px solid #d1d5db;
}


.legend-box.answered {
    background: #dcfce7;
}


.legend-box.review {
    background: #fef3c7;
}


.legend-box.current {
    background: #2563eb;
}


/* MOBILE */

@media(max-width: 800px) {

    .exam-layout {

        grid-template-columns: 1fr;

    }

    .question-panel {

        order: -1;

    }

}


@media(max-width: 600px) {

    .exam-header {

        padding: 0 15px;

    }

    .timer {

        font-size: 12px;

    }

    .submit-btn {

        padding: 8px 12px;

    }

    .question-box {

        padding: 20px;

    }

    .question-actions {

        flex-direction: column;

    }

}
```

---

## 📄 `css/login.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


:root {

    --primary: #2563eb;
    --primary-dark: #1d4ed8;

    --text: #111827;
    --muted: #6b7280;

    --border: #d1d5db;

    --background: #f5f7fb;

    --danger: #dc2626;

}


/* ================================
   BODY
================================ */

body {

    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Arial,
        sans-serif;

    background: var(--background);

    color: var(--text);

    min-height: 100vh;

}


/* ================================
   MAIN LOGIN PAGE
================================ */

.login-page {

    min-height: 100vh;

    display: grid;

    grid-template-columns: 45% 55%;

}


/* ================================
   LEFT INFORMATION PANEL
================================ */

.login-info {

    background:
        linear-gradient(
            145deg,
            #1d4ed8,
            #2563eb,
            #3b82f6
        );

    color: white;

    padding: 45px 8%;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    position: relative;

    overflow: hidden;

}


/* decorative circles */

.login-info::before {

    content: "";

    position: absolute;

    width: 350px;

    height: 350px;

    border-radius: 50%;

    background:
        rgba(255,255,255,0.07);

    top: -150px;

    right: -120px;

}


.login-info::after {

    content: "";

    position: absolute;

    width: 300px;

    height: 300px;

    border-radius: 50%;

    background:
        rgba(255,255,255,0.05);

    bottom: -150px;

    left: -100px;

}


/* ================================
   BRAND
================================ */

.brand {

    display: flex;

    align-items: center;

    gap: 13px;

    position: relative;

    z-index: 2;

}


.brand-icon {

    width: 45px;

    height: 45px;

    background: white;

    color: var(--primary);

    border-radius: 12px;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 23px;

    font-weight: 800;

}


.brand h2 {

    font-size: 22px;

    line-height: 1;

}


.brand p {

    margin-top: 5px;

    font-size: 12px;

    opacity: 0.8;

}


/* ================================
   INFO CONTENT
================================ */

.info-content {

    max-width: 570px;

    position: relative;

    z-index: 2;

}


.badge {

    display: inline-block;

    padding: 7px 12px;

    background:
        rgba(255,255,255,0.15);

    border:
        1px solid
        rgba(255,255,255,0.25);

    border-radius: 30px;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 1px;

    margin-bottom: 20px;

}


.info-content h1 {

    font-size: clamp(35px, 4vw, 55px);

    line-height: 1.1;

    margin-bottom: 22px;

}


.info-content h1 span {

    display: block;

    color: #bfdbfe;

}


.info-content > p {

    font-size: 16px;

    line-height: 1.7;

    opacity: 0.88;

    max-width: 500px;

    margin-bottom: 35px;

}


/* ================================
   FEATURES
================================ */

.features {

    display: flex;

    flex-direction: column;

    gap: 22px;

}


.feature {

    display: flex;

    align-items: flex-start;

    gap: 14px;

}


.feature-icon {

    min-width: 28px;

    width: 28px;

    height: 28px;

    border-radius: 50%;

    background:
        rgba(255,255,255,0.18);

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 14px;

    font-weight: bold;

}


.feature strong {

    display: block;

    font-size: 15px;

    margin-bottom: 4px;

}


.feature p {

    font-size: 13px;

    opacity: 0.78;

}


/* ================================
   COPYRIGHT
================================ */

.copyright {

    font-size: 12px;

    opacity: 0.65;

    position: relative;

    z-index: 2;

}


/* ================================
   RIGHT LOGIN SECTION
================================ */

.login-section {

    min-height: 100vh;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 40px;

    background: #ffffff;

}


/* ================================
   LOGIN CARD
================================ */

.login-card {

    width: 100%;

    max-width: 470px;

}


/* ================================
   MOBILE LOGO
================================ */

.mobile-logo {

    display: none;

}


/* ================================
   LOGIN HEADING
================================ */

.login-heading {

    margin-bottom: 32px;

}


.login-heading h1 {

    font-size: 32px;

    margin-bottom: 8px;

}


.login-heading p {

    color: var(--muted);

    font-size: 15px;

}


/* ================================
   FORM
================================ */

.input-group {

    margin-bottom: 22px;

}


.input-group label {

    display: block;

    font-size: 14px;

    font-weight: 600;

    margin-bottom: 8px;

}


/* ================================
   PASSWORD LABEL
================================ */

.password-label {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 8px;

}


.password-label label {

    margin-bottom: 0;

}


.password-label a {

    font-size: 12px;

    color: var(--primary);

    text-decoration: none;

}


.password-label a:hover {

    text-decoration: underline;

}


/* ================================
   INPUT
================================ */

.input-wrapper {

    position: relative;

    width: 100%;

}


.input-icon {

    position: absolute;

    left: 15px;

    top: 50%;

    transform: translateY(-50%);

    font-size: 16px;

    opacity: 0.55;

    pointer-events: none;

}


.input-wrapper input {

    width: 100%;

    height: 52px;

    border: 1px solid var(--border);

    border-radius: 9px;

    padding:
        0 48px 0 45px;

    outline: none;

    font-size: 14px;

    color: var(--text);

    background: white;

    transition:
        border-color 0.2s,
        box-shadow 0.2s;

}


.input-wrapper input::placeholder {

    color: #9ca3af;

}


.input-wrapper input:focus {

    border-color: var(--primary);

    box-shadow:
        0 0 0 4px
        rgba(37,99,235,0.10);

}


/* ================================
   PASSWORD TOGGLE
================================ */

.password-toggle {

    position: absolute;

    right: 13px;

    top: 50%;

    transform: translateY(-50%);

    border: none;

    background: transparent;

    cursor: pointer;

    font-size: 16px;

    opacity: 0.55;

    padding: 5px;

}


.password-toggle:hover {

    opacity: 1;

}


/* ================================
   ERROR
================================ */

.error-message {

    display: block;

    min-height: 17px;

    margin-top: 5px;

    font-size: 12px;

    color: var(--danger);

}


/* ================================
   LOGIN OPTIONS
================================ */

.login-options {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 25px;

}


.remember {

    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 13px;

    color: #4b5563;

    cursor: pointer;

}


.remember input {

    width: 16px;

    height: 16px;

    accent-color: var(--primary);

    cursor: pointer;

}


/* ================================
   LOGIN BUTTON
================================ */

.login-button {

    width: 100%;

    height: 52px;

    border: none;

    border-radius: 9px;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #1d4ed8
        );

    color: white;

    font-size: 14px;

    font-weight: 700;

    cursor: pointer;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    transition:
        transform 0.2s,
        box-shadow 0.2s;

}


.login-button:hover {

    transform: translateY(-1px);

    box-shadow:
        0 8px 20px
        rgba(37,99,235,0.25);

}


.login-button:active {

    transform: translateY(0);

}


.login-button:disabled {

    opacity: 0.65;

    cursor: not-allowed;

    transform: none;

}


.arrow {

    font-size: 19px;

}


/* ================================
   DEMO BOX
================================ */

.demo-box {

    margin-top: 22px;

    padding: 14px 16px;

    border-radius: 8px;

    background: #eff6ff;

    border: 1px solid #dbeafe;

    font-size: 12px;

    color: #374151;

}


.demo-box strong {

    display: block;

    color: var(--primary);

    margin-bottom: 7px;

}


.demo-box p {

    margin: 4px 0;

}


.demo-box b {

    color: #111827;

}


/* ================================
   REGISTER
================================ */

.register-text {

    text-align: center;

    margin-top: 25px;

    color: #6b7280;

    font-size: 13px;

}


.register-text a {

    color: var(--primary);

    font-weight: 600;

    text-decoration: none;

}


.register-text a:hover {

    text-decoration: underline;

}


/* ================================
   BACK HOME
================================ */

.back-home {

    display: block;

    text-align: center;

    margin-top: 18px;

    color: #6b7280;

    font-size: 13px;

    text-decoration: none;

}


.back-home:hover {

    color: var(--primary);

}


/* ================================
   ADMIN
================================ */

.admin-icon {

    background: white;

    color: #7c3aed;

}


.admin-badge {

    background:
        rgba(255,255,255,0.15);

}


.admin-info {

    background:
        linear-gradient(
            145deg,
            #5b21b6,
            #7c3aed,
            #8b5cf6
        );

}


.admin-info .info-content h1 span {

    color: #ddd6fe;

}


.admin-login-button {

    background:
        linear-gradient(
            135deg,
            #7c3aed,
            #6d28d9
        );

}


.admin-login-button:hover {

    box-shadow:
        0 8px 20px
        rgba(124,58,237,0.25);

}


.admin-demo {

    background: #f5f3ff;

    border-color: #ddd6fe;

}


.admin-demo strong {

    color: #7c3aed;

}


/* ================================
   INVALID INPUT
================================ */

.input-wrapper input.invalid {

    border-color: var(--danger);

    background: #fffafa;

}


.input-wrapper input.invalid:focus {

    box-shadow:
        0 0 0 4px
        rgba(220,38,38,0.08);

}


/* ================================
   RESPONSIVE
================================ */

@media (max-width: 1000px) {

    .login-page {

        grid-template-columns: 40% 60%;

    }

    .login-info {

        padding: 35px 7%;

    }

    .info-content h1 {

        font-size: 38px;

    }

}


@media (max-width: 800px) {

    .login-page {

        display: block;

    }


    .login-info {

        display: none;

    }


    .login-section {

        min-height: 100vh;

        padding: 25px;

        background:
            linear-gradient(
                135deg,
                #eff6ff,
                #ffffff
            );

    }


    .login-card {

        max-width: 500px;

        background: white;

        padding: 35px;

        border-radius: 16px;

        box-shadow:
            0 15px 40px
            rgba(0,0,0,0.08);

    }


    .mobile-logo {

        display: flex;

        align-items: center;

        justify-content: center;

        gap: 10px;

        margin-bottom: 35px;

    }


    .mobile-logo h2 {

        font-size: 23px;

    }

}


@media (max-width: 500px) {

    .login-section {

        padding: 15px;

    }


    .login-card {

        padding: 25px 20px;

        border-radius: 12px;

    }


    .login-heading h1 {

        font-size: 27px;

    }


    .input-wrapper input {

        height: 50px;

    }

}
```

---

## 📄 `student/login.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Login | SmartExam</title>
    <link rel="stylesheet" href="../css/auth.css">
</head>
<body>
    <div class="auth-wrapper">
        <div class="auth-card">
            <div class="auth-logo">Smart<span>Exam</span></div>
            <h2>Welcome back!</h2>
            <p class="auth-subtitle">Login to your student portal account</p>

            <form id="studentLoginForm">
                <div class="form-group">
                    <label for="studentEmail">Email Address</label>
                    <input type="email" id="studentEmail" placeholder="Enter your email" required value="">
                </div>
                
                <div class="form-group">
                    <label for="studentPassword">Password</label>
                    <input type="password" id="studentPassword" placeholder="Enter your password" required value="">
                </div>

                <button type="submit" class="auth-btn">Login to Student Portal →</button>
            </form>

            <div class="demo-box" style="margin-top: 15px; padding: 12px; background: #eff6ff; border: 1px solid #dbeafe; border-radius: 8px; font-size: 13px; color: #1e40af;">
                <strong>Demo Student Login:</strong><br>
                Email: <code>student@smartexam.com</code><br>
                Password: <code>student123</code>
            </div>

            <p class="register-link" style="margin-top: 15px;">
                Don't have an account? <a href="register.html">Create an account</a>
            </p>
            <p class="back-home">
                <a href="../index.html">← Back to Home</a>
            </p>
        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <!-- Login Logic -->
    <script>
        document.getElementById("studentLoginForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("studentEmail").value.trim();
            const password = document.getElementById("studentPassword").value;

            const res = SmartStore.loginStudent(email, password);
            if (res.success) {
                window.location.href = "dashboard.html";
            } else {
                alert(res.message || "Invalid credentials! Please use demo credentials: student@smartexam.com / student123");
            }
        });
    </script>
</body>
</html>
```

---

## 📄 `student/register.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration | SmartExam</title>
    <link rel="stylesheet" href="../css/auth.css">
</head>
<body>

<div class="auth-wrapper">
    <div class="auth-card">
        <div class="auth-logo">
            Smart<span>Exam</span>
        </div>

        <h2>Create Student Account</h2>
        <p class="auth-subtitle">
            Register to start taking online assessments
        </p>

        <form id="registerForm">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name" required>
            </div>

            <div class="form-group">
                <label for="registerEmail">Email Address</label>
                <input type="email" id="registerEmail" placeholder="Enter email" required>
            </div>

            <div class="form-group">
                <label for="registerPassword">Password</label>
                <input type="password" id="registerPassword" placeholder="Create password (min 6 chars)" minlength="6" required>
            </div>

            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm password" required>
            </div>

            <button type="submit" class="auth-btn">Create Account →</button>
        </form>

        <p class="register-link" style="margin-top: 15px;">
            Already have an account? <a href="login.html">Login</a>
        </p>
        <p class="back-home" style="margin-top: 8px;">
            <a href="../index.html">← Back to Home</a>
        </p>
    </div>
</div>

<!-- Store Script -->
<script src="../js/store.js"></script>

<script>
    document.getElementById("registerForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        const res = SmartStore.registerStudent(name, email, password);
        if (res.success) {
            alert("Registration successful! Welcome to SmartExam.");
            window.location.href = "login.html";
        } else {
            alert(res.message);
        }
    });
</script>
</body>
</html>
```

---

## 📄 `student/dashboard.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard | SmartExam</title>
    <link rel="stylesheet" href="../css/dashboard.css">
    <style>
        .nav-links-right {
            display: flex;
            align-items: center;
            gap: 16px;
        }
        .nav-link-item {
            color: #475569;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 6px;
            transition: 0.2s;
        }
        .nav-link-item:hover {
            color: #2563eb;
            background: #eff6ff;
        }
        .quick-banner {
            background: linear-gradient(135deg, #1e293b, #0f172a);
            color: #ffffff;
            border-radius: 14px;
            padding: 24px 30px;
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
            box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.1);
        }
        .quick-banner h2 { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
        .quick-banner p { color: #94a3b8; font-size: 14px; }
        .btn-view-perf {
            background: #2563eb;
            color: #ffffff;
            padding: 10px 18px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: 0.2s;
        }
        .btn-view-perf:hover { background: #1d4ed8; }
    </style>
</head>
<body>

    <nav class="navbar">
        <div class="nav-brand">Smart<span>Exam</span></div>
        <div class="nav-links-right">
            <a href="dashboard.html" class="nav-link-item" style="color: #2563eb;">Dashboard</a>
            <a href="performance.html" class="nav-link-item">My Performance 📊</a>
            <div class="nav-user">
                <span id="welcomeUser">Welcome, Student</span>
                <button id="logoutBtn" class="btn-logout" onclick="SmartStore.logoutStudent()">Logout</button>
            </div>
        </div>
    </nav>

    <div class="dashboard-container">
        <div class="quick-banner">
            <div>
                <h2>Ready for your next assessment?</h2>
                <p>Select a subject track below to practice and benchmark your score with live proctoring.</p>
            </div>
            <a href="performance.html" class="btn-view-perf">View My Performance & Rank →</a>
        </div>

        <div class="dashboard-header">
            <h1>Subject Examination Categories</h1>
            <p>Select your subject to start subject-wise diagnostic tests and live online examinations.</p>
        </div>

        <div class="category-grid">
            
            <!-- Category 1: DSA -->
            <div class="category-card">
                <h2 class="card-title">Data Structures & Algorithms</h2>
                <ul class="topic-list">
                    <li><a href="instructions.html?subject=DSA&title=DSA%20Stack%20%26%20Queue">› Stack & Queue Operations</a></li>
                    <li><a href="instructions.html?subject=DSA&title=DSA%20Linked%20List">› Trees, Graphs & Linked Lists</a></li>
                    <li><a href="instructions.html?subject=DSA&title=DSA%20Full%20Test" class="highlight-link">› DSA Subject Test (All DSA)</a></li>
                </ul>
            </div>

            <!-- Category 2: Java Programming -->
            <div class="category-card">
                <h2 class="card-title">Java Programming</h2>
                <ul class="topic-list">
                    <li><a href="instructions.html?subject=Java&title=Java%20Core%20%26%20OOPs">› Java Core & OOPs</a></li>
                    <li><a href="instructions.html?subject=Java&title=Java%20Exceptions%20%26%20Threads">› Exception Handling & Multithreading</a></li>
                    <li><a href="instructions.html?subject=Java&title=Java%20Complete%20Test" class="highlight-link">› Java Full Subject Test</a></li>
                </ul>
            </div>

            <!-- Category 3: DBMS & SQL -->
            <div class="category-card">
                <h2 class="card-title">Database Management (DBMS)</h2>
                <ul class="topic-list">
                    <li><a href="instructions.html?subject=DBMS&title=SQL%20Queries%20%26%20Joins">› SQL Queries, ACID & Joins</a></li>
                    <li><a href="instructions.html?subject=DBMS&title=DBMS%20Normalization">› Normalization & Indexing (B+ Trees)</a></li>
                    <li><a href="instructions.html?subject=DBMS&title=DBMS%20Full%20Test" class="highlight-link">› DBMS Subject Test</a></li>
                </ul>
            </div>

            <!-- Category 4: C Programming -->
            <div class="category-card">
                <h2 class="card-title">C Programming</h2>
                <ul class="topic-list">
                    <li><a href="instructions.html?subject=C&title=C%20Pointers%20%26%20Memory">› Pointers & Dynamic Memory</a></li>
                    <li><a href="instructions.html?subject=C&title=C%20Programming%20Test" class="highlight-link">› C Programming Full Test</a></li>
                </ul>
            </div>

            <!-- Category 5: General Aptitude -->
            <div class="category-card">
                <h2 class="card-title">General Aptitude</h2>
                <ul class="topic-list">
                    <li><a href="instructions.html?subject=Aptitude&title=Logical%20Reasoning">› Quantitative & Logical Reasoning</a></li>
                    <li><a href="instructions.html?subject=Aptitude&title=Aptitude%20Full%20Test" class="highlight-link">› Aptitude Mock Test</a></li>
                </ul>
            </div>

            <!-- Category 6: Full Mock Exam (All Subjects) -->
            <div class="category-card">
                <h2 class="card-title">Comprehensive Mock Exam</h2>
                <ul class="topic-list">
                    <li><a href="instructions.html?subject=All&title=Full%20Syllabus%20Mock%20Exam" class="highlight-link">› Complete Mock Test (All Subjects Combined)</a></li>
                </ul>
            </div>

        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        const student = SmartStore.getCurrentStudent();
        if (student && student.name) {
            document.getElementById("welcomeUser").textContent = "Welcome, " + student.name;
        }
    </script>
</body>
</html>
```

---

## 📄 `student/instructions.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam Instructions & Camera Readiness Check | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb; --primary-hover: #1d4ed8; --bg: #f8fafc;
            --text-dark: #0f172a; --text-muted: #64748b; --border: #e2e8f0;
            --warning: #d97706; --danger: #dc2626; --success: #16a34a;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        body { background-color: var(--bg); color: var(--text-dark); min-height: 100vh; }
        .nav { background: #fff; border-bottom: 1px solid var(--border); padding: 14px 40px; display: flex; justify-content: space-between; align-items: center; }
        .brand { font-size: 20px; font-weight: 700; color: var(--primary); text-decoration: none; }
        .brand span { color: var(--text-dark); }
        .container { max-width: 820px; margin: 36px auto; padding: 0 20px; }
        .card { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 36px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        h1 { font-size: 24px; font-weight: 800; margin-bottom: 6px; }
        .subtitle { color: var(--text-muted); font-size: 14px; margin-bottom: 24px; }
        
        .deadline-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #eff6ff;
            color: var(--primary);
            border: 1px solid #dbeafe;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .deadline-badge.expired {
            background: #fee2e2;
            color: var(--danger);
            border-color: #fca5a5;
        }

        .proctor-alert {
            background: #fffbeb;
            border: 1px solid #fde68a;
            border-radius: 12px;
            padding: 16px 20px;
            margin-bottom: 24px;
            display: flex;
            gap: 14px;
            align-items: flex-start;
        }

        .proctor-alert-icon { font-size: 24px; }
        .proctor-alert h3 { font-size: 15px; font-weight: 700; color: #92400e; margin-bottom: 4px; }
        .proctor-alert p { font-size: 13px; color: #78350f; line-height: 1.5; }

        /* Camera Readiness Card */
        .camera-check-card {
            background: #0f172a;
            color: #ffffff;
            border-radius: 14px;
            padding: 20px;
            margin-bottom: 24px;
            display: flex;
            gap: 20px;
            align-items: center;
            flex-wrap: wrap;
        }

        .camera-preview-box {
            width: 140px;
            height: 105px;
            background: #1e293b;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #334155;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        #previewVideo {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scaleX(-1);
        }

        .camera-info { flex: 1; min-width: 240px; }
        .camera-info h4 { font-size: 15px; font-weight: 700; margin-bottom: 6px; }
        .camera-info p { font-size: 12px; color: #94a3b8; line-height: 1.5; margin-bottom: 10px; }
        
        .btn-test-cam {
            background: #2563eb;
            color: #ffffff;
            border: none;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
        }

        .rules-title { font-size: 16px; font-weight: 700; margin-bottom: 12px; }
        .rules-list { margin-left: 20px; line-height: 1.8; font-size: 14px; color: #334155; margin-bottom: 30px; }
        .rules-list li strong { color: var(--text-dark); }

        .btn-start { display: block; text-align: center; background: var(--primary); color: #fff; text-decoration: none; padding: 14px; border-radius: 8px; font-size: 15px; font-weight: 700; transition: 0.2s; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2); }
        .btn-start:hover { background: var(--primary-hover); }
        .btn-start.disabled { background: #94a3b8; pointer-events: none; box-shadow: none; }
    </style>
</head>
<body>
    <div class="nav">
        <a href="dashboard.html" class="brand">Smart<span>Exam</span></a>
        <a href="dashboard.html" style="color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 500;">← Back to Dashboard</a>
    </div>

    <div class="container">
        <div class="card">
            <h1 id="examHeading">Live Online Examination</h1>
            <p class="subtitle" id="subjectInfo">Loading test details...</p>

            <div class="deadline-badge" id="deadlineBadge">
                <span>📅 Deadline: Loading...</span>
            </div>

            <!-- WebRTC Camera Readiness Check -->
            <div class="camera-check-card">
                <div class="camera-preview-box">
                    <video id="previewVideo" autoplay playsinline muted></video>
                    <div id="noCamPlaceholder" style="font-size: 24px; color: #94a3b8;">📷</div>
                </div>
                <div class="camera-info">
                    <h4>Webcam Readiness Verification</h4>
                    <p id="camStatusMsg">Please allow webcam access so the proctoring engine can verify candidate presence during the exam.</p>
                    <button class="btn-test-cam" id="btnTestCam" onclick="startCameraCheck()">Verify Camera Stream</button>
                </div>
            </div>

            <div class="proctor-alert">
                <div class="proctor-alert-icon">🛡️</div>
                <div>
                    <h3>Active Anti-Cheat & Live Proctoring Enabled</h3>
                    <p>This exam is monitored in real-time. Only ONE candidate must be present in front of the camera. Detecting multiple persons in camera view will trigger immediate on-screen warnings and recorded photo evidence for instructor verification (the test will not be directly auto-submitted for camera face warnings). Switching tabs, minimizing windows, or copying content will issue security strikes. Reaching 3 strikes triggers immediate auto-submission.</p>
                </div>
            </div>

            <div class="rules-title">Examination Guidelines:</div>
            <ul class="rules-list">
                <li><strong>One-Person Rule:</strong> Only ONE person must be in camera view at all times. Multiple people detected in front of the camera will trigger security warnings and evidence snapshots.</li>
                <li><strong>Subject Scope:</strong> Questions belong strictly to the chosen subject syllabus.</li>
                <li><strong>Scoring Scheme:</strong> Each question carries individual marks as configured by the instructor.</li>
                <li><strong>Timer:</strong> The countdown timer begins the instant you click the start button.</li>
                <li><strong>Question Palette:</strong> You can navigate between questions, change selections, or mark questions for later review.</li>
                <li><strong>Submission:</strong> Make sure to answer all questions before submitting. Instant scoring and photo audit will appear upon completion.</li>
            </ul>

            <a id="startExamBtn" href="#" class="btn-start">I Understand the Rules &bull; Start Examination →</a>
        </div>
    </div>

    <!-- Neural Face Detection Model (Google BlazeFace) & Proctor AI -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.17.0/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface@0.0.7/dist/blazeface.min.js"></script>
    <script src="../js/store.js"></script>
    <script src="../js/proctor-ai.js"></script>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const subject = urlParams.get("subject") || "All";
        const title = urlParams.get("title") || `${subject} Examination`;
        
        document.getElementById("examHeading").textContent = title;
        document.getElementById("subjectInfo").textContent = `Subject Category: ${subject} • Online Assessment`;

        // Check Exam Expiration & Deadline
        const exams = SmartStore.getExams();
        const matched = exams.find(e => e.title.toLowerCase() === title.toLowerCase() || (e.subject || "").toLowerCase() === subject.toLowerCase());
        
        const deadlineBadge = document.getElementById("deadlineBadge");
        const startBtn = document.getElementById("startExamBtn");

        if (matched && matched.deadline) {
            const isExpired = SmartStore.isExamExpired(matched);
            if (isExpired) {
                deadlineBadge.className = "deadline-badge expired";
                deadlineBadge.innerHTML = `<span>⚠️ EXPIRED: Deadline passed on ${SmartStore.formatDateTime(matched.deadline)}</span>`;
                startBtn.textContent = "This Examination is Closed (Deadline Passed)";
                startBtn.className = "btn-start disabled";
            } else {
                deadlineBadge.innerHTML = `<span>📅 Examination Deadline: ${SmartStore.formatDateTime(matched.deadline)}</span>`;
                startBtn.href = `exam.html?subject=${encodeURIComponent(subject)}&title=${encodeURIComponent(title)}`;
            }
        } else {
            deadlineBadge.innerHTML = `<span>📅 Examination Deadline: Open Access</span>`;
            startBtn.href = `exam.html?subject=${encodeURIComponent(subject)}&title=${encodeURIComponent(title)}`;
        }

        // Live Camera Preview Check & Face Count Verification
        let camCheckInterval = null;
        let multiPersonCheckCount = 0;

        async function startCameraCheck() {
            const video = document.getElementById("previewVideo");
            const placeholder = document.getElementById("noCamPlaceholder");
            const statusMsg = document.getElementById("camStatusMsg");
            const btn = document.getElementById("btnTestCam");

            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                    video.srcObject = stream;
                    video.style.display = "block";
                    placeholder.style.display = "none";
                    statusMsg.innerHTML = "<span style='color:#4ade80; font-weight:bold;'>✓ Camera Connected</span>. Analyzing candidate presence...";
                    btn.textContent = "Camera Active ✓";
                    btn.style.background = "#10b981";

                    if (camCheckInterval) clearInterval(camCheckInterval);
                    camCheckInterval = setInterval(async () => {
                        if (typeof ProctorAI !== "undefined" && video.readyState >= 2) {
                            const faces = await ProctorAI.detectFaces(video);
                            if (faces.length === 1) {
                                multiPersonCheckCount = 0;
                                statusMsg.innerHTML = "<span style='color:#4ade80; font-weight:bold;'>✓ 1 Person Verified</span>. Webcam is active and ready for the exam.";
                            } else if (faces.length > 1) {
                                multiPersonCheckCount++;
                                if (multiPersonCheckCount >= 2) {
                                    statusMsg.innerHTML = `<span style='color:#ef4444; font-weight:bold;'>⚠️ Multiple Persons Detected (${faces.length})!</span> Ensure ONLY you are in the camera view.`;
                                }
                            } else {
                                multiPersonCheckCount = 0;
                                statusMsg.innerHTML = "<span style='color:#fbbf24; font-weight:bold;'>⚠️ Camera Active (No face detected yet)</span>. Center your face in the camera frame.";
                            }
                        }
                    }, 1200);
                } catch (err) {
                    statusMsg.innerHTML = "<span style='color:#f87171;'>Camera access denied/unavailable</span>. You may proceed in fallback mode.";
                }
            }
        }
    </script>
</body>
</html>
```

---

## 📄 `student/exam.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Examination with WebRTC AI Proctoring | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --success: #10b981;
            --danger: #ef4444;
            --warning: #f59e0b;
            --purple: #8b5cf6;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            user-select: none;
            -webkit-user-select: none;
        }

        body {
            background-color: var(--bg);
            color: var(--text-dark);
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Top Proctoring Nav */
        .exam-nav {
            background: #ffffff;
            border-bottom: 1px solid var(--border);
            padding: 12px 36px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .exam-brand {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .brand-title {
            font-size: 17px;
            font-weight: 700;
            color: var(--primary);
        }

        .brand-subtitle {
            font-size: 13px;
            color: var(--text-muted);
            font-weight: 500;
        }

        .proctor-hud {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .proctor-badge {
            display: flex;
            align-items: center;
            gap: 6px;
            background: #ecfdf5;
            color: #065f46;
            border: 1px solid #a7f3d0;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }

        .pulse-dot {
            width: 8px;
            height: 8px;
            background: #10b981;
            border-radius: 50%;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .strike-badge {
            background: #fef3c7;
            color: #92400e;
            border: 1px solid #fde68a;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            transition: all 0.3s ease;
        }

        .strike-badge.danger {
            background: #fee2e2;
            color: #991b1b;
            border-color: #fca5a5;
        }

        .timer-box {
            background: #fee2e2;
            color: #ef4444;
            padding: 6px 14px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 14px;
            border: 1px solid #fca5a5;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        /* Layout Grid */
        .exam-container {
            max-width: 1180px;
            margin: 28px auto;
            padding: 0 20px;
            display: grid;
            grid-template-columns: 1fr 310px;
            gap: 24px;
        }

        .question-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.02);
            position: relative;
        }

        .q-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
            font-size: 13px;
            font-weight: 600;
            color: var(--text-muted);
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 12px;
        }

        .q-tag {
            background: #eff6ff;
            color: var(--primary);
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 12px;
        }

        .q-text {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-dark);
            line-height: 1.55;
            margin-bottom: 24px;
        }

        /* Options */
        .options-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 30px;
        }

        .option-item {
            border: 1px solid var(--border);
            padding: 14px 18px;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 14px;
            font-size: 15px;
            transition: all 0.2s ease;
            background: #ffffff;
        }

        .option-item:hover {
            border-color: var(--primary);
            background: #f8fafc;
            transform: translateX(2px);
        }

        .option-item.selected {
            border-color: var(--primary);
            background: #eff6ff;
            font-weight: 600;
            color: var(--primary);
            box-shadow: 0 0 0 1px var(--primary);
        }

        .opt-letter {
            width: 28px;
            height: 28px;
            border-radius: 6px;
            background: #f1f5f9;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 13px;
            color: #475569;
            flex-shrink: 0;
        }

        .option-item.selected .opt-letter {
            background: var(--primary);
            color: #ffffff;
        }

        /* Action Buttons */
        .btn-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid var(--border);
            padding-top: 20px;
            gap: 12px;
            flex-wrap: wrap;
        }

        .btn-group-left {
            display: flex;
            gap: 10px;
        }

        .btn {
            padding: 10px 18px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            border: 1px solid var(--border);
            background: #ffffff;
            transition: all 0.2s ease;
        }

        .btn-primary {
            background: var(--primary);
            color: #ffffff;
            border: none;
        }

        .btn-primary:hover {
            background: var(--primary-hover);
        }

        .btn-purple {
            background: #f5f3ff;
            color: var(--purple);
            border-color: #ddd6fe;
        }

        .btn-purple.active-mark {
            background: var(--purple);
            color: #ffffff;
            border-color: var(--purple);
        }

        .btn-submit {
            background: var(--success);
            color: #ffffff;
            border: none;
            padding: 10px 22px;
        }

        .btn-submit:hover {
            background: #059669;
        }

        /* Sidebar & Live WebRTC Camera Box */
        .sidebar-wrapper {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .proctor-camera-card {
            background: #0f172a;
            border-radius: 16px;
            padding: 14px;
            color: #ffffff;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
        }

        .cam-video-box {
            width: 100%;
            height: 150px;
            background: #1e293b;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #334155;
        }

        #proctorWebcam {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scaleX(-1); /* Mirror view for candidate natural feel */
        }

        #proctorOverlayCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 5;
        }

        .cam-fallback {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #94a3b8;
            font-size: 12px;
            gap: 6px;
        }

        .cam-rec-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            background: rgba(239, 68, 68, 0.85);
            color: #ffffff;
            font-size: 10px;
            font-weight: 800;
            padding: 2px 8px;
            border-radius: 12px;
            letter-spacing: 0.5px;
            backdrop-filter: blur(4px);
            z-index: 6;
        }

        .face-status-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(15, 23, 42, 0.85);
            color: #4ade80;
            font-size: 10px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 12px;
            backdrop-filter: blur(4px);
            z-index: 6;
            display: flex;
            align-items: center;
            gap: 4px;
            transition: all 0.2s ease;
        }

        .face-status-badge.multi {
            background: rgba(220, 38, 38, 0.95);
            color: #ffffff;
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.6);
            animation: pulse-red 1s infinite alternate;
        }

        .face-status-badge.none {
            background: rgba(217, 119, 6, 0.9);
            color: #ffffff;
        }

        @keyframes pulse-red {
            from { transform: scale(1); }
            to { transform: scale(1.04); }
        }

        .snapshot-counter {
            position: absolute;
            bottom: 8px;
            right: 8px;
            background: rgba(15, 23, 42, 0.75);
            color: #38bdf8;
            font-size: 10px;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 4px;
            z-index: 6;
        }

        .multi-person-alert-banner {
            display: none;
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: #ffffff;
            padding: 12px 18px;
            border-radius: 10px;
            margin-bottom: 18px;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 4px 14px rgba(220, 38, 38, 0.2);
            animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .cam-status {
            font-size: 11px;
            color: #4ade80;
            font-weight: 600;
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }

        /* Palette Card */
        .palette-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }

        .palette-title {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .palette-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            margin-bottom: 18px;
            max-height: 250px;
            overflow-y: auto;
            padding-right: 4px;
        }

        .palette-btn {
            height: 38px;
            border: 1px solid var(--border);
            background: #f8fafc;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            font-size: 13px;
            transition: all 0.15s;
        }

        .palette-btn:hover {
            border-color: var(--primary);
        }

        .palette-btn.active {
            border-color: var(--primary);
            background: var(--primary);
            color: #ffffff;
        }

        .palette-btn.answered {
            background: var(--success);
            color: #ffffff;
            border-color: var(--success);
        }

        .palette-btn.marked {
            background: var(--purple);
            color: #ffffff;
            border-color: var(--purple);
        }

        .palette-legend {
            border-top: 1px solid var(--border);
            padding-top: 14px;
            font-size: 12px;
            color: var(--text-muted);
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }

        .legend-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .legend-dot {
            width: 10px;
            height: 10px;
            border-radius: 3px;
        }

        /* Anti-Cheat Violation Modal */
        .violation-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(15, 23, 42, 0.75);
            backdrop-filter: blur(4px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }

        .violation-modal {
            background: #ffffff;
            border-radius: 16px;
            padding: 32px;
            max-width: 480px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            animation: popIn 0.25s ease-out;
        }

        @keyframes popIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }

        .violation-icon {
            width: 64px;
            height: 64px;
            background: #fee2e2;
            color: #ef4444;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            margin: 0 auto 16px;
        }

        .violation-title {
            font-size: 20px;
            font-weight: 800;
            color: #991b1b;
            margin-bottom: 8px;
        }

        .violation-msg {
            font-size: 14px;
            color: #475569;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .strike-pill-container {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-bottom: 22px;
        }

        .strike-dot {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #e2e8f0;
        }

        .strike-dot.active {
            background: #ef4444;
        }

        .btn-resume {
            background: var(--primary);
            color: #ffffff;
            border: none;
            padding: 12px 28px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            width: 100%;
        }

        @media (max-width: 860px) {
            .exam-container { grid-template-columns: 1fr; }
            .exam-nav { padding: 12px 16px; }
            .proctor-badge span { display: none; }
        }
    </style>
</head>
<body>

    <!-- Header Navigation with Live Proctor HUD -->
    <div class="exam-nav">
        <div class="exam-brand">
            <div class="brand-title" id="topExamTitle">SmartExam &bull; Live Examination</div>
            <div class="brand-subtitle" id="candidateDisplay">Candidate: Loading...</div>
        </div>

        <div class="proctor-hud">
            <div class="proctor-badge">
                <span class="pulse-dot"></span>
                <span>Proctoring Active</span>
            </div>
            <div class="strike-badge" id="strikeBadge">Strikes: 0 / 3</div>
            <div class="timer-box" id="timerDisplay">⏱ 15:00</div>
        </div>
    </div>

    <!-- Examination Container -->
    <div class="exam-container">
        <!-- Question Active Area -->
        <div class="question-card" id="questionArea">
            <!-- Multiple Person Camera Alert Banner -->
            <div class="multi-person-alert-banner" id="multiPersonAlertBanner">
                <div style="display:flex; align-items:center; gap:12px;">
                    <span style="font-size:24px;">🚨</span>
                    <div>
                        <strong style="font-size:14px; display:block;">Warning: Multiple Persons Detected in Camera View!</strong>
                        <span style="font-size:12px; opacity:0.95;">Only ONE candidate is allowed during the exam. Continued presence of multiple people will trigger a proctoring violation.</span>
                    </div>
                </div>
                <span class="badge" style="background:#ffffff; color:#dc2626; font-weight:800; padding:4px 10px; border-radius:6px; font-size:11px;" id="multiPersonCountTag">2 Persons Detected</span>
            </div>

            <div class="q-meta">
                <span id="questionNumber">Question 1 of 5</span>
                <span class="q-tag" id="questionSubject">DSA &bull; 2 Marks</span>
            </div>

            <div class="q-text" id="questionText">Loading examination question...</div>
            <div class="options-list" id="optionsContainer"></div>

            <div class="btn-row">
                <div class="btn-group-left">
                    <button class="btn" id="prevBtn" onclick="navigate(-1)">← Previous</button>
                    <button class="btn btn-purple" id="markReviewBtn" onclick="toggleMarkReview()">⚑ Mark for Review</button>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-primary" id="nextBtn" onclick="navigate(1)">Next →</button>
                    <button class="btn btn-submit" id="submitBtn" onclick="submitExam(false)">Submit Examination</button>
                </div>
            </div>
        </div>

        <!-- Sidebar: Palette & Live WebRTC Video Feed -->
        <div class="sidebar-wrapper">
            <div class="proctor-camera-card">
                <div class="cam-video-box">
                    <video id="proctorWebcam" autoplay playsinline muted></video>
                    <canvas id="proctorOverlayCanvas" width="320" height="240"></canvas>
                    <div id="camFallback" class="cam-fallback" style="display:none;">
                        <div style="font-size: 26px;">👤</div>
                        <span>Webcam Standby Mode</span>
                    </div>
                    <div class="cam-rec-badge">🔴 REC &bull; WebRTC Live</div>
                    <div class="face-status-badge" id="faceStatusBadge">👥 Analyzing...</div>
                    <div class="snapshot-counter" id="snapshotCounter">🛡️ 0 Violations</div>
                </div>
                <div class="cam-status">
                    <span class="pulse-dot" style="background:#4ade80; width:6px; height:6px;"></span>
                    <span id="camStatusText">Connecting Camera Stream...</span>
                </div>
            </div>

            <!-- Hidden canvas for capturing proctoring snapshots -->
            <canvas id="snapshotCanvas" width="320" height="240" style="display:none;"></canvas>

            <div class="palette-card">
                <div class="palette-title">
                    <span>Question Palette</span>
                    <span style="font-size: 12px; color: var(--text-muted);" id="answeredCountBadge">0 Answered</span>
                </div>
                <div class="palette-grid" id="paletteGrid"></div>

                <div class="palette-legend">
                    <div class="legend-item"><span class="legend-dot" style="background:var(--success);"></span> Answered</div>
                    <div class="legend-item"><span class="legend-dot" style="background:var(--purple);"></span> Review</div>
                    <div class="legend-item"><span class="legend-dot" style="background:var(--primary);"></span> Current</div>
                    <div class="legend-item"><span class="legend-dot" style="background:#e2e8f0;"></span> Unvisited</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Violation Strike Warning Modal -->
    <div class="violation-modal-overlay" id="violationModal">
        <div class="violation-modal">
            <div class="violation-icon">⚠️</div>
            <div class="violation-title" id="violationTitle">Proctoring Warning</div>
            <p class="violation-msg" id="violationMsg">
                Tab switching or window minimization was detected. Leaving the examination screen violates test integrity policies.
            </p>

            <div class="strike-pill-container">
                <div class="strike-dot" id="dot1"></div>
                <div class="strike-dot" id="dot2"></div>
                <div class="strike-dot" id="dot3"></div>
            </div>

            <button class="btn-resume" id="resumeExamBtn" onclick="dismissViolation()">Return to Exam</button>
        </div>
    </div>

    <!-- Neural Face Detection Model (Google BlazeFace) & Proctor AI -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.17.0/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface@0.0.7/dist/blazeface.min.js"></script>
    <script src="../js/store.js"></script>
    <script src="../js/proctor-ai.js"></script>

    <!-- Proctoring and Exam Controller -->
    <script>
        "use strict";

        // URL Parameters
        const urlParams = new URLSearchParams(window.location.search);
        const currentSubject = urlParams.get("subject") || "All";
        const currentTitle = urlParams.get("title") || `${currentSubject} Examination`;

        // Student Session
        const currentStudent = SmartStore.getCurrentStudent();
        document.getElementById("topExamTitle").textContent = currentTitle;
        document.getElementById("candidateDisplay").textContent = `Candidate: ${currentStudent.name}`;

        // Verify Exam Expiration before start
        const scheduledExams = SmartStore.getExams();
        const matchedExam = scheduledExams.find(e => e.title.toLowerCase() === currentTitle.toLowerCase() || (e.subject || "").toLowerCase() === currentSubject.toLowerCase());
        if (matchedExam && SmartStore.isExamExpired(matchedExam)) {
            alert(`This examination has passed its deadline (${SmartStore.formatDateTime(matchedExam.deadline)}) and is closed.`);
            window.location.href = "dashboard.html";
        }

        // Questions Pool from Unified Store
        let allQuestions = SmartStore.getQuestions(currentSubject);
        if (!allQuestions || allQuestions.length === 0) {
            allQuestions = SmartStore.getQuestions("All");
        }

        // State variables
        let currentIndex = 0;
        let userAnswers = {};        // { 0: "B", 1: "A" }
        let markedForReview = {};    // { 0: true }
        let proctorStrikes = 0;
        const MAX_STRIKES = 3;
        let isExamSubmitted = false;

        // WebRTC & Snapshot State
        let webcamStream = null;
        const proctorSnapshots = [];
        const proctorViolations = [];

        // =========================================================
        // 1. WEBRTC WEBCAM PROCTORING INITIALIZATION & AI MONITOR
        // =========================================================
        let faceMonitoringInterval = null;
        let multiPersonStreak = 0;
        let lastMultiPersonWarningTime = 0;
        let multiPersonWarningCount = 0;
        let isLastViolationMultiPerson = false;

        async function initWebcam() {
            const video = document.getElementById("proctorWebcam");
            const fallback = document.getElementById("camFallback");
            const statusText = document.getElementById("camStatusText");

            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                try {
                    webcamStream = await navigator.mediaDevices.getUserMedia({
                        video: { width: 320, height: 240, facingMode: "user" },
                        audio: false
                    });
                    video.srcObject = webcamStream;
                    video.style.display = "block";
                    fallback.style.display = "none";
                    statusText.textContent = "WebRTC Stream Verified • Live";

                    video.onloadedmetadata = () => {
                        video.play().catch(e => console.warn("Video play error:", e));
                        startFaceMonitoring();
                    };
                    // Fallback timer trigger
                    setTimeout(startFaceMonitoring, 1200);
                } catch (err) {
                    console.warn("Webcam permission denied or device not found:", err);
                    video.style.display = "none";
                    fallback.style.display = "flex";
                    statusText.textContent = "Camera Standby (Fallback Mode)";
                }
            } else {
                video.style.display = "none";
                fallback.style.display = "flex";
                statusText.textContent = "Webcam API Not Supported";
            }
        }

        // Real-Time Multi-Person Face Monitoring Loop
        function startFaceMonitoring() {
            if (faceMonitoringInterval) clearInterval(faceMonitoringInterval);

            const video = document.getElementById("proctorWebcam");
            const overlayCanvas = document.getElementById("proctorOverlayCanvas");
            const faceBadge = document.getElementById("faceStatusBadge");
            const alertBanner = document.getElementById("multiPersonAlertBanner");
            const countTag = document.getElementById("multiPersonCountTag");

            faceMonitoringInterval = setInterval(async () => {
                if (isExamSubmitted || !webcamStream || !video || video.paused || video.ended) {
                    return;
                }

                try {
                    const faces = await ProctorAI.detectFaces(video);

                    if (overlayCanvas) {
                        ProctorAI.drawFaceOverlays(overlayCanvas, faces, video);
                    }

                    const count = faces.length;

                    if (count > 1) {
                        // MULTIPLE PERSONS DETECTED: Require 3 consecutive cycles to confirm sustained presence
                        multiPersonStreak++;

                        if (multiPersonStreak >= 3) {
                            if (faceBadge) {
                                faceBadge.className = "face-status-badge multi";
                                faceBadge.textContent = `🚨 ${count} Persons Detected!`;
                            }
                            if (alertBanner) {
                                alertBanner.style.display = "flex";
                            }
                            if (countTag) {
                                countTag.textContent = `${count} Persons Detected`;
                            }

                            // Trigger warning snapshot & warning modal on confirmed detection (never auto-submits)
                            const now = Date.now();
                            if (now - lastMultiPersonWarningTime > 10000) {
                                lastMultiPersonWarningTime = now;
                                showMultiPersonWarning(count);
                            }
                        }
                    } else if (count === 1) {
                        // Exactly 1 Candidate (Ideal Verified State)
                        multiPersonStreak = 0;

                        if (faceBadge) {
                            faceBadge.className = "face-status-badge";
                            faceBadge.textContent = `🟢 1 Candidate Verified`;
                        }
                        if (alertBanner) {
                            alertBanner.style.display = "none";
                        }
                    } else {
                        // 0 Faces Detected
                        multiPersonStreak = 0;

                        if (faceBadge) {
                            faceBadge.className = "face-status-badge none";
                            faceBadge.textContent = `⚠️ No Face Detected`;
                        }
                        if (alertBanner) {
                            alertBanner.style.display = "none";
                        }
                    }
                } catch (err) {
                    console.warn("Face detection cycle error:", err);
                }
            }, 1500);
        }

        // Developer / Testing Helper: Simulate multiple persons detection
        window.simulateMultiplePersons = function (count = 2) {
            const video = document.getElementById("proctorWebcam");
            const overlay = document.getElementById("proctorOverlayCanvas");
            const fakeFaces = [
                { x: 30, y: 35, width: 95, height: 115, confidence: 0.96 },
                { x: 175, y: 40, width: 90, height: 110, confidence: 0.94 }
            ];
            if (overlay && video) {
                ProctorAI.drawFaceOverlays(overlay, fakeFaces, video);
            }
            const faceBadge = document.getElementById("faceStatusBadge");
            const alertBanner = document.getElementById("multiPersonAlertBanner");
            const countTag = document.getElementById("multiPersonCountTag");
            if (faceBadge) {
                faceBadge.className = "face-status-badge multi";
                faceBadge.textContent = `🚨 ${count} Persons Detected!`;
            }
            if (alertBanner) alertBanner.style.display = "flex";
            if (countTag) countTag.textContent = `${count} Persons Detected`;
            showMultiPersonWarning(count, `Multiple persons (${count}) detected in camera view. Only 1 candidate is allowed during the exam.`);
        };

        // Capture Violation Snapshot Helper
        function captureSnapshot(label, type = "violation") {
            const canvas = document.getElementById("snapshotCanvas");
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            const video = document.getElementById("proctorWebcam");

            if (webcamStream && video && video.videoWidth > 0) {
                ctx.save();
                // Mirror image so snapshot matches candidate perspective
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                ctx.restore();

                // Draw overlay boxes (e.g. multi-person tags) on snapshot
                const overlay = document.getElementById("proctorOverlayCanvas");
                if (overlay) {
                    ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
                }
            } else {
                // High-quality simulated violation frame
                ctx.fillStyle = "#450a0a";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#ef4444";
                ctx.font = "bold 16px sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("👤 " + (currentStudent.name || "Candidate"), canvas.width / 2, 90);
                ctx.fillStyle = "#fca5a5";
                ctx.font = "12px sans-serif";
                ctx.fillText(label, canvas.width / 2, 120);
                ctx.fillText(new Date().toLocaleTimeString(), canvas.width / 2, 140);
            }

            // Watermark overlay bar
            ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
            ctx.fillRect(0, canvas.height - 24, canvas.width, 24);
            ctx.fillStyle = "#f87171";
            ctx.font = "bold 10px sans-serif";
            ctx.textAlign = "left";
            ctx.fillText(`⚠️ ${new Date().toLocaleTimeString()} | ${label}`, 8, canvas.height - 8);

            const dataUrl = canvas.toDataURL("image/jpeg", 0.6);
            proctorSnapshots.push({
                timestamp: new Date().toLocaleTimeString(),
                label: label,
                type: "violation",
                image: dataUrl
            });

            const counter = document.getElementById("snapshotCounter");
            if (counter) counter.textContent = `⚠️ ${proctorSnapshots.length} Violations`;
        }

        // =========================================================
        // 2. QUESTION RENDERING & NAVIGATION
        // =========================================================

        function renderQuestion() {
            if (isExamSubmitted) return;

            const q = allQuestions[currentIndex];
            document.getElementById("questionNumber").textContent = `Question ${currentIndex + 1} of ${allQuestions.length}`;
            document.getElementById("questionSubject").textContent = `${q.subject || currentSubject} • ${q.marks || 2} Marks`;
            document.getElementById("questionText").textContent = q.text;

            const optContainer = document.getElementById("optionsContainer");
            optContainer.innerHTML = "";

            const optKeys = ["A", "B", "C", "D"];
            const options = Array.isArray(q.options) && q.options.length > 0
                ? q.options
                : ["Option A", "Option B", "Option C", "Option D"];

            options.forEach((optText, idx) => {
                const optKey = optKeys[idx];
                const isSelected = userAnswers[currentIndex] === optKey;

                const div = document.createElement("div");
                div.className = `option-item ${isSelected ? "selected" : ""}`;
                div.innerHTML = `
                    <div class="opt-letter">${optKey}</div>
                    <div>${SmartStore.escapeHTML(optText)}</div>
                `;
                div.onclick = () => selectOption(optKey);
                optContainer.appendChild(div);
            });

            // Mark for Review state
            const markBtn = document.getElementById("markReviewBtn");
            if (markedForReview[currentIndex]) {
                markBtn.className = "btn btn-purple active-mark";
                markBtn.textContent = "✓ Marked for Review";
            } else {
                markBtn.className = "btn btn-purple";
                markBtn.textContent = "⚑ Mark for Review";
            }

            // Navigation Buttons visibility
            document.getElementById("prevBtn").style.display = currentIndex === 0 ? "none" : "block";
            document.getElementById("nextBtn").style.display = currentIndex === allQuestions.length - 1 ? "none" : "block";

            renderPalette();
        }

        function selectOption(optKey) {
            userAnswers[currentIndex] = optKey;
            renderQuestion();
        }

        function toggleMarkReview() {
            if (markedForReview[currentIndex]) {
                delete markedForReview[currentIndex];
            } else {
                markedForReview[currentIndex] = true;
            }
            renderQuestion();
        }

        function navigate(step) {
            const nextIdx = currentIndex + step;
            if (nextIdx >= 0 && nextIdx < allQuestions.length) {
                currentIndex = nextIdx;
                renderQuestion();
            }
        }

        function jumpTo(index) {
            if (index >= 0 && index < allQuestions.length) {
                currentIndex = index;
                renderQuestion();
            }
        }

        function renderPalette() {
            const grid = document.getElementById("paletteGrid");
            grid.innerHTML = "";
            let answeredCount = 0;

            allQuestions.forEach((_, idx) => {
                const btn = document.createElement("button");
                let statusClass = "";

                if (idx === currentIndex) {
                    statusClass = "active";
                } else if (markedForReview[idx]) {
                    statusClass = "marked";
                } else if (userAnswers[idx]) {
                    statusClass = "answered";
                }

                if (userAnswers[idx]) answeredCount++;

                btn.className = `palette-btn ${statusClass}`;
                btn.textContent = idx + 1;
                btn.onclick = () => jumpTo(idx);
                grid.appendChild(btn);
            });

            document.getElementById("answeredCountBadge").textContent = `${answeredCount} / ${allQuestions.length} Answered`;
        }

        // =========================================================
        // 3. ANTI-CHEAT PROCTORING & VIOLATION HANDLER
        // =========================================================

        /**
         * Dedicated Multi-Person Warning Handler:
         * Gives instant visual warnings, records evidence snapshots and violation logs,
         * but NEVER auto-submits the test (even after 3+ warnings).
         */
        function showMultiPersonWarning(count, reason) {
            if (isExamSubmitted) return;

            multiPersonWarningCount++;
            isLastViolationMultiPerson = true;

            const warningMsg = reason || `Multiple persons (${count}) detected in camera view. Only 1 candidate is allowed during the exam.`;

            proctorViolations.push({
                type: "MULTI_PERSON",
                strike: `Face Warning #${multiPersonWarningCount}`,
                reason: warningMsg,
                time: new Date().toLocaleTimeString()
            });

            // Capture instant violation snapshot with bounding boxes
            captureSnapshot(`Face Warning #${multiPersonWarningCount} (${count} in Camera)`, "violation");

            const modal = document.getElementById("violationModal");
            const title = document.getElementById("violationTitle");
            const msg = document.getElementById("violationMsg");
            const resumeBtn = document.getElementById("resumeExamBtn");

            // Update warning dots to show warning progression
            document.getElementById("dot1").className = multiPersonWarningCount >= 1 ? "strike-dot active" : "strike-dot";
            document.getElementById("dot2").className = multiPersonWarningCount >= 2 ? "strike-dot active" : "strike-dot";
            document.getElementById("dot3").className = multiPersonWarningCount >= 3 ? "strike-dot active" : "strike-dot";

            title.textContent = `⚠️ Security Warning: Multiple Persons Detected (Warning #${multiPersonWarningCount})`;
            msg.textContent = `${warningMsg} Please ensure ONLY you remain in front of the camera.\n\nNote: Your exam will NOT be automatically submitted for camera face warnings, but every warning and camera snapshot is recorded for instructor review.`;

            // Always allow student to acknowledge and continue - NEVER auto-submit!
            resumeBtn.textContent = "Acknowledge & Resume";
            resumeBtn.onclick = function () {
                modal.style.display = "none";
                isLastViolationMultiPerson = false;
            };

            modal.style.display = "flex";
        }

        function recordViolation(reason) {
            if (isExamSubmitted) return;
            isLastViolationMultiPerson = false;

            proctorStrikes++;
            updateStrikeUI();

            proctorViolations.push({
                strike: proctorStrikes,
                reason: reason,
                time: new Date().toLocaleTimeString()
            });

            // Capture instant violation snapshot
            captureSnapshot(`Violation: Strike ${proctorStrikes} (${reason.slice(0, 15)})`, "violation");

            const modal = document.getElementById("violationModal");
            const title = document.getElementById("violationTitle");
            const msg = document.getElementById("violationMsg");
            const resumeBtn = document.getElementById("resumeExamBtn");

            document.getElementById("dot1").className = proctorStrikes >= 1 ? "strike-dot active" : "strike-dot";
            document.getElementById("dot2").className = proctorStrikes >= 2 ? "strike-dot active" : "strike-dot";
            document.getElementById("dot3").className = proctorStrikes >= 3 ? "strike-dot active" : "strike-dot";

            if (proctorStrikes >= MAX_STRIKES) {
                title.textContent = "Examination Terminated";
                msg.textContent = `You exceeded the maximum allowed integrity violations (${proctorStrikes}/${MAX_STRIKES}). Reason: ${reason}. Your exam will now be automatically submitted.`;
                resumeBtn.textContent = "Proceed to Results";
                resumeBtn.onclick = () => submitExam(true);
                modal.style.display = "flex";
                setTimeout(() => submitExam(true), 3500);
            } else {
                title.textContent = `Warning: Strike ${proctorStrikes} of ${MAX_STRIKES}`;
                msg.textContent = `Security Violation Detected: ${reason}. Please remain focused on the exam window. On 3 strikes, your exam will be automatically cancelled.`;
                resumeBtn.textContent = "Acknowledge & Resume";
                resumeBtn.onclick = dismissViolation;
                modal.style.display = "flex";
            }
        }

        function updateStrikeUI() {
            const badge = document.getElementById("strikeBadge");
            badge.textContent = `Strikes: ${proctorStrikes} / ${MAX_STRIKES}`;
            if (proctorStrikes >= 2) {
                badge.className = "strike-badge danger";
            }
        }

        function dismissViolation() {
            if (isLastViolationMultiPerson) {
                document.getElementById("violationModal").style.display = "none";
                isLastViolationMultiPerson = false;
                return;
            }
            if (proctorStrikes < MAX_STRIKES) {
                document.getElementById("violationModal").style.display = "none";
            } else {
                submitExam(true);
            }
        }

        // Tab-Switch & Blur detection
        document.addEventListener("visibilitychange", () => {
            if (document.hidden && !isExamSubmitted) {
                recordViolation("Tab Switch or Application Minimization");
            }
        });

        window.addEventListener("blur", () => {
            if (!isExamSubmitted && document.getElementById("violationModal").style.display !== "flex") {
                recordViolation("Focus lost from exam window");
            }
        });

        // Prevent Copy, Cut, Paste, Right-Click, and Developer Keys
        document.addEventListener("contextmenu", (e) => e.preventDefault());
        document.addEventListener("copy", (e) => e.preventDefault());
        document.addEventListener("cut", (e) => e.preventDefault());
        document.addEventListener("paste", (e) => e.preventDefault());

        document.addEventListener("keydown", (e) => {
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
                (e.metaKey && e.altKey && (e.key === "i" || e.key === "j" || e.key === "c")) ||
                (e.ctrlKey && e.key === "u") ||
                (e.metaKey && e.key === "u")
            ) {
                e.preventDefault();
                recordViolation("Unauthorized inspection keys");
            }
        });

        // =========================================================
        // 4. EXAM SUBMISSION & SCORING
        // =========================================================

        function submitExam(forced = false) {
            if (isExamSubmitted) return;

            if (!forced) {
                const unans = allQuestions.length - Object.keys(userAnswers).length;
                let promptMsg = "Are you sure you want to submit your examination?";
                if (unans > 0) {
                    promptMsg = `You have ${unans} unanswered question(s). Are you sure you want to submit?`;
                }
                if (!confirm(promptMsg)) return;
            }

            isExamSubmitted = true;
            clearInterval(timerInterval);
            if (faceMonitoringInterval) {
                clearInterval(faceMonitoringInterval);
            }

            // Stop Webcam Stream
            if (webcamStream) {
                webcamStream.getTracks().forEach(track => track.stop());
            }

            let score = 0;
            let totalMarks = 0;
            let correctCount = 0;

            const breakdown = allQuestions.map((q, idx) => {
                const qMarks = q.marks ? parseInt(q.marks, 10) : 2;
                totalMarks += qMarks;

                const userChoice = (userAnswers[idx] || "").toString().trim().toUpperCase();
                const correctChoice = (q.correctOption || "A").toString().trim().toUpperCase().replace("OPTION ", "");
                const isCorrect = userChoice !== "" && userChoice === correctChoice;

                if (isCorrect) {
                    score += qMarks;
                    correctCount++;
                }

                return {
                    id: q.id,
                    text: q.text,
                    subject: q.subject || currentSubject,
                    options: Array.isArray(q.options) && q.options.length > 0 ? q.options : ["Option A", "Option B", "Option C", "Option D"],
                    userAnswer: userAnswers[idx] || "Not Attempted",
                    correctAnswer: correctChoice,
                    isCorrect: isCorrect,
                    marks: qMarks
                };
            });

            const percentage = totalMarks > 0 ? Math.round((score / totalMarks) * 100) : 0;

            const resultRecord = {
                studentName: currentStudent.name,
                studentEmail: currentStudent.email,
                examTitle: currentTitle,
                subject: currentSubject,
                totalQuestions: allQuestions.length,
                correct: correctCount,
                score: score,
                totalMarks: totalMarks,
                percentage: percentage,
                proctorStrikes: proctorStrikes,
                proctorSnapshots: proctorSnapshots,
                violations: proctorViolations,
                breakdown: breakdown
            };

            // Save to unified store
            SmartStore.saveResult(resultRecord);

            // Redirect to result page
            window.location.href = "result.html";
        }

        // Timer Setup
        let timeLeft = 15 * 60;
        const timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert("Time limit expired! Your exam will now be submitted.");
                submitExam(true);
                return;
            }

            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
            document.getElementById("timerDisplay").textContent = `⏱ ${mins}:${secs < 10 ? '0' : ''}${secs}`;

            if (timeLeft <= 180) { // Under 3 mins
                document.getElementById("timerDisplay").style.background = "#fee2e2";
                document.getElementById("timerDisplay").style.color = "#dc2626";
            }

            timeLeft--;
        }, 1000);

        // Initialize Live Webcam & Render First Question
        initWebcam();
        renderQuestion();
    </script>
</body>
</html>
```

---

## 📄 `student/result.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examination Result & Analysis | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --success: #10b981;
            --danger: #ef4444;
            --warning: #f59e0b;
            --purple: #8b5cf6;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        body { background-color: var(--bg); color: var(--text-dark); min-height: 100vh; padding: 36px 20px; }
        .container { max-width: 900px; margin: 0 auto; }

        /* Top Summary Card */
        .summary-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 36px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
            margin-bottom: 24px;
            position: relative;
        }

        .summary-card h1 { font-size: 26px; font-weight: 800; }
        .candidate-tag { color: var(--text-muted); font-size: 14px; margin-top: 4px; }

        .score-circle {
            width: 124px;
            height: 124px;
            border-radius: 50%;
            background: #eff6ff;
            border: 4px solid var(--primary);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 22px auto;
        }

        .score-num { font-size: 32px; font-weight: 800; color: var(--primary); }
        .score-label { font-size: 11px; font-weight: 700; color: var(--text-muted); }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            margin: 24px 0;
            text-align: left;
        }

        .stat-box {
            background: #f8fafc;
            border: 1px solid var(--border);
            padding: 14px;
            border-radius: 10px;
        }

        .stat-title { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }
        .stat-data { font-size: 18px; font-weight: 800; margin-top: 4px; }

        .integrity-box {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .integrity-clean { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }
        .integrity-flagged { background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; }

        .action-row { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
        .btn {
            padding: 11px 22px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            border: 1px solid var(--border);
            background: #ffffff;
            transition: all 0.2s;
        }

        .btn-primary { background: var(--primary); color: #ffffff; border: none; }
        .btn-primary:hover { background: var(--primary-hover); }

        /* Analytics Card */
        .analytics-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.02);
            margin-bottom: 26px;
        }

        .analytics-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .analytics-header h2 { font-size: 18px; font-weight: 700; }
        .algo-badge { font-size: 12px; background: #eff6ff; color: var(--primary); border: 1px solid #dbeafe; padding: 4px 12px; border-radius: 20px; font-weight: 600; }

        .subject-metric { margin-bottom: 16px; }
        .subject-metric:last-child { margin-bottom: 0; }
        .subject-info { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 6px; }
        .progress-track { width: 100%; height: 9px; background: #f1f5f9; border-radius: 10px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--purple)); border-radius: 10px; transition: width 0.6s ease; }

        /* Question Review Section */
        .review-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .review-header h2 { font-size: 20px; font-weight: 700; }

        .question-review-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 22px 24px;
            margin-bottom: 16px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .q-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .q-number { font-weight: 700; font-size: 15px; }

        .status-badge { font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 20px; }
        .badge-correct { background: #dcfce7; color: #166534; }
        .badge-wrong { background: #fee2e2; color: #991b1b; }

        .q-body { font-size: 15px; font-weight: 600; line-height: 1.5; margin-bottom: 16px; }

        .options-review { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; }
        .opt-review-item { padding: 10px 14px; border-radius: 8px; font-size: 13px; border: 1px solid var(--border); background: #ffffff; }
        .opt-review-item.is-correct-ans { border-color: var(--success); background: #f0fdf4; color: #166534; font-weight: 600; }
        .opt-review-item.is-user-wrong { border-color: var(--danger); background: #fef2f2; color: #991b1b; font-weight: 600; }

        .answer-summary {
            font-size: 13px;
            padding-top: 10px;
            border-top: 1px dashed var(--border);
            display: flex;
            justify-content: space-between;
            color: var(--text-muted);
        }

        /* Proctoring Snapshots Section */
        .snapshot-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 14px;
            margin-top: 14px;
        }

        .snapshot-card {
            background: #0f172a;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid var(--border);
            text-align: center;
        }

        .snapshot-img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            background: #1e293b;
            display: block;
        }

        .snapshot-caption {
            padding: 8px;
            font-size: 11px;
            color: #cbd5e1;
            background: #0f172a;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .snapshot-tag-violation {
            color: #f87171;
            font-weight: 700;
        }

        @media (max-width: 650px) {
            .stats-grid { grid-template-columns: 1fr 1fr; }
            .options-review { grid-template-columns: 1fr; }
            .snapshot-grid { grid-template-columns: 1fr 1fr; }
        }
    </style>
</head>
<body>

    <div class="container">
        
        <div class="summary-card">
            <h1 id="examStatusHeading">Examination Completed 🎉</h1>
            <div class="candidate-tag" id="candidateName">Candidate: Student</div>

            <div class="score-circle">
                <div class="score-num" id="percentValue">0%</div>
                <div class="score-label">OVERALL SCORE</div>
            </div>

            <!-- Proctoring Audit Banner -->
            <div class="integrity-box integrity-clean" id="integrityBox">
                <span id="integrityIcon">🛡️</span>
                <span id="integrityMsg">Proctoring Audit: Verified Submission (0 Violations)</span>
            </div>

            <div class="stats-grid">
                <div class="stat-box">
                    <div class="stat-title">Marks Scored</div>
                    <div class="stat-data" id="scoreValue">0 / 0</div>
                </div>
                <div class="stat-box">
                    <div class="stat-title">Correct Answers</div>
                    <div class="stat-data" style="color: var(--success);" id="correctCount">0</div>
                </div>
                <div class="stat-box">
                    <div class="stat-title">Total Questions</div>
                    <div class="stat-data" id="totalCount">0</div>
                </div>
                <div class="stat-box">
                    <div class="stat-title">Status</div>
                    <div class="stat-data" id="statusValue">PASSED</div>
                </div>
            </div>

            <div class="action-row">
                <a href="dashboard.html" class="btn">← Dashboard</a>
                <a href="performance.html" class="btn">View All Analytics & Rank 📊</a>
                <a href="#reviewSection" class="btn btn-primary">Review Answers Key ↓</a>
            </div>
        </div>

        <!-- Performance Analytics Section -->
        <div class="analytics-card">
            <div class="analytics-header">
                <h2>Subject-wise Performance Breakdown</h2>
                <span class="algo-badge">QuickSort Ranking Enabled</span>
            </div>
            <div id="analyticsContainer"></div>
        </div>

        <!-- Proctoring Integrity Violation Snapshots -->
        <div class="analytics-card">
            <div class="analytics-header">
                <h2>Proctoring Security Violation Snapshots</h2>
                <span class="algo-badge" style="background:#fef2f2; color:#ef4444; border-color:#fecaca;">Audit Log</span>
            </div>
            <p style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Webcam snapshots captured automatically upon security violation triggers (tab-switching, screen blur).</p>
            <div class="snapshot-grid" id="snapshotGallery"></div>
        </div>

        <!-- Detailed Review Section -->
        <div id="reviewSection">
            <div class="review-header">
                <h2>Question Review & Detailed Solution Key</h2>
                <span style="font-size: 13px; color: var(--text-muted);">Verified Answer Key</span>
            </div>

            <div id="questionsContainer"></div>
        </div>

    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        "use strict";

        const resultData = SmartStore.getLatestResult() || {
            studentName: "Aditya Gore",
            examTitle: "Examination",
            totalQuestions: 0,
            correct: 0,
            score: 0,
            totalMarks: 0,
            percentage: 0,
            proctorStrikes: 0,
            breakdown: []
        };

        document.getElementById("candidateName").textContent = `Candidate: ${resultData.studentName} • ${resultData.examTitle || 'Test'}`;
        document.getElementById("percentValue").textContent = `${resultData.percentage}%`;
        document.getElementById("scoreValue").textContent = `${resultData.score} / ${resultData.totalMarks}`;
        document.getElementById("correctCount").textContent = resultData.correct;
        document.getElementById("totalCount").textContent = resultData.totalQuestions;

        const isPassed = resultData.percentage >= 40;
        const statusElem = document.getElementById("statusValue");
        statusElem.textContent = isPassed ? "PASSED" : "FAILED";
        statusElem.style.color = isPassed ? "var(--success)" : "var(--danger)";

        // Integrity audit display
        const integrityBox = document.getElementById("integrityBox");
        const strikes = resultData.proctorStrikes || 0;
        if (strikes > 0) {
            integrityBox.className = "integrity-box integrity-flagged";
            integrityBox.innerHTML = `<span>⚠️</span> <span>Proctoring Flag: ${strikes} Integrity Strike(s) detected during test.</span>`;
        } else {
            integrityBox.className = "integrity-box integrity-clean";
            integrityBox.innerHTML = `<span>🛡️</span> <span>Proctoring Audit: Verified Submission (0 Violations Detected)</span>`;
        }

        const breakdown = resultData.breakdown || [];

        // 1. Subject-wise accuracy calculation
        const analyticsContainer = document.getElementById("analyticsContainer");
        const subjectStats = {};

        breakdown.forEach(item => {
            const sub = item.subject || "General";
            if (!subjectStats[sub]) {
                subjectStats[sub] = { total: 0, correct: 0 };
            }
            subjectStats[sub].total++;
            if (item.isCorrect) subjectStats[sub].correct++;
        });

        const subjectKeys = Object.keys(subjectStats);
        if (subjectKeys.length === 0) {
            analyticsContainer.innerHTML = `<p style="color:var(--text-muted); font-size:13px;">No breakdown data available.</p>`;
        } else {
            subjectKeys.forEach(sub => {
                const stat = subjectStats[sub];
                const pct = Math.round((stat.correct / stat.total) * 100);
                analyticsContainer.innerHTML += `
                    <div class="subject-metric">
                        <div class="subject-info">
                            <span>${sub}</span>
                            <span>${stat.correct}/${stat.total} Correct (${pct}%)</span>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill" style="width: ${pct}%;"></div>
                        </div>
                    </div>
                `;
            });
        }

        // 2. Proctoring Snapshots Gallery (Violations Only)
        const snapshotGallery = document.getElementById("snapshotGallery");
        const snapshots = resultData.proctorSnapshots || [];

        if (snapshots.length === 0) {
            snapshotGallery.innerHTML = `<div style="grid-column: 1 / -1; padding: 18px; text-align: center; color: #166534; font-size: 13px; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">✓ Clean Session: No security violation snapshots recorded for this test session.</div>`;
        } else {
            snapshots.forEach((snap, idx) => {
                const card = document.createElement("div");
                card.className = "snapshot-card";

                const isViolation = snap.type === "violation" || (snap.label || "").toLowerCase().includes("violation");
                const imgSrc = snap.image || (snap.dataUrl || "");

                let imgHtml = "";
                if (imgSrc && imgSrc.startsWith("data:image")) {
                    imgHtml = `<img src="${imgSrc}" class="snapshot-img" alt="Proctor Snapshot" />`;
                } else {
                    imgHtml = `
                        <div class="snapshot-img" style="display:flex; align-items:center; justify-content:center; flex-direction:column; color:${isViolation ? '#ef4444' : '#38bdf8'}; font-size:12px; gap:4px;">
                            <span style="font-size:24px;">👤</span>
                            <span>${SmartStore.escapeHTML(snap.label || 'Audit Snapshot')}</span>
                        </div>
                    `;
                }

                card.innerHTML = `
                    ${imgHtml}
                    <div class="snapshot-caption">
                        <span class="${isViolation ? 'snapshot-tag-violation' : ''}">${isViolation ? '⚠️ ' : '📸 '} ${SmartStore.escapeHTML(snap.label || 'Periodic Check')}</span>
                        <span style="color:#94a3b8; font-size:10px;">${snap.timestamp || ''}</span>
                    </div>
                `;
                snapshotGallery.appendChild(card);
            });
        }

        // 3. Question Review List
        const container = document.getElementById("questionsContainer");
        if (breakdown.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:30px; background:#fff; border-radius:12px; color:#94a3b8; border:1px solid #e2e8f0;">No detailed log available. Please retake the test.</div>`;
        } else {
            const optKeys = ["A", "B", "C", "D"];
            
            breakdown.forEach((item, index) => {
                const card = document.createElement("div");
                card.className = "question-review-card";

                const badgeClass = item.isCorrect ? "badge-correct" : "badge-wrong";
                const badgeText = item.isCorrect ? `✓ Correct (+${item.marks} Marks)` : `✗ Incorrect (0 / ${item.marks} Marks)`;

                let optionsHtml = "";
                const options = Array.isArray(item.options) ? item.options : ["Option A", "Option B", "Option C", "Option D"];
                
                options.forEach((optText, optIdx) => {
                    const optKey = optKeys[optIdx];
                    let extraClass = "";

                    if (optKey === item.correctAnswer) {
                        extraClass = "is-correct-ans";
                    } else if (optKey === item.userAnswer && !item.isCorrect) {
                        extraClass = "is-user-wrong";
                    }

                    optionsHtml += `
                        <div class="opt-review-item ${extraClass}">
                            <strong>(${optKey})</strong> ${SmartStore.escapeHTML(optText)}
                            ${optKey === item.correctAnswer ? " <span style='float:right; font-weight:bold;'>✓ Correct</span>" : ""}
                            ${optKey === item.userAnswer && !item.isCorrect ? " <span style='float:right; font-weight:bold;'>✗ Your Choice</span>" : ""}
                        </div>
                    `;
                });

                card.innerHTML = `
                    <div class="q-top">
                        <span class="q-number">Question ${index + 1} &bull; ${item.subject}</span>
                        <span class="status-badge ${badgeClass}">${badgeText}</span>
                    </div>
                    <div class="q-body">${SmartStore.escapeHTML(item.text)}</div>
                    <div class="options-review">${optionsHtml}</div>
                    <div class="answer-summary">
                        <span>Your Answer: <strong>Option (${item.userAnswer})</strong></span>
                        <span>Correct Answer: <strong style="color: var(--success);">Option (${item.correctAnswer})</strong></span>
                    </div>
                `;

                container.appendChild(card);
            });
        }
    </script>
</body>
</html>
```

---

## 📄 `student/performance.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Performance Analytics | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --success: #10b981;
            --danger: #ef4444;
            --warning: #f59e0b;
            --purple: #8b5cf6;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        body { background-color: var(--bg); color: var(--text-dark); min-height: 100vh; }

        /* Top Navbar */
        .navbar {
            background: #ffffff;
            border-bottom: 1px solid var(--border);
            padding: 14px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .nav-brand { font-size: 20px; font-weight: 700; color: var(--primary); text-decoration: none; }
        .nav-brand span { color: var(--text-dark); }
        .nav-links { display: flex; align-items: center; gap: 20px; }
        .nav-link { color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 500; }
        .nav-link.active { color: var(--primary); font-weight: 600; }

        .container { max-width: 1100px; margin: 36px auto; padding: 0 24px; }
        .header-title { margin-bottom: 28px; }
        .header-title h1 { font-size: 26px; font-weight: 800; }
        .header-title p { color: var(--text-muted); font-size: 14px; margin-top: 4px; }

        /* 4 Key Stats Cards */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
            margin-bottom: 32px;
        }

        .stat-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            padding: 22px;
            border-radius: 14px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            transition: transform 0.2s;
        }

        .stat-card:hover { transform: translateY(-2px); }
        .stat-label { font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }
        .stat-value { font-size: 30px; font-weight: 800; margin-top: 6px; }

        .stat-card.blue .stat-value { color: var(--primary); }
        .stat-card.green .stat-value { color: var(--success); }
        .stat-card.purple .stat-value { color: var(--purple); }
        .stat-card.amber .stat-value { color: var(--warning); }

        /* Table Card */
        .table-card {
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }

        .table-header {
            padding: 20px 24px;
            border-bottom: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .table-header h2 { font-size: 18px; font-weight: 700; }

        table { width: 100%; border-collapse: collapse; text-align: left; }
        th { background: #f8fafc; padding: 14px 20px; font-size: 13px; font-weight: 600; color: var(--text-muted); border-bottom: 1px solid var(--border); }
        td { padding: 16px 20px; font-size: 14px; border-bottom: 1px solid var(--border); vertical-align: middle; }

        .badge { padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; }
        .badge.passed { background: #dcfce7; color: #166534; }
        .badge.failed { background: #fee2e2; color: #991b1b; }

        .strike-pill { font-size: 11px; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
        .strike-clean { background: #eff6ff; color: var(--primary); }
        .strike-warn { background: #fee2e2; color: #b91c1c; }

        .btn-action {
            background: #f1f5f9;
            color: var(--text-dark);
            border: 1px solid var(--border);
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: 0.2s;
        }
        .btn-action:hover { background: #e2e8f0; }

        .empty-state {
            text-align: center;
            padding: 48px 20px;
            color: var(--text-muted);
        }
        .btn-take-test {
            display: inline-block;
            margin-top: 14px;
            background: var(--primary);
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
        }

        @media (max-width: 860px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
            .navbar { padding: 14px 20px; }
        }
    </style>
</head>
<body>

    <nav class="navbar">
        <a href="dashboard.html" class="nav-brand">Smart<span>Exam</span></a>
        <div class="nav-links">
            <a href="dashboard.html" class="nav-link">Dashboard</a>
            <a href="performance.html" class="nav-link active">Performance</a>
            <button onclick="SmartStore.logoutStudent()" style="background:#fee2e2; color:#ef4444; border:none; padding:6px 12px; border-radius:6px; font-size:13px; font-weight:600; cursor:pointer;">Logout</button>
        </div>
    </nav>

    <div class="container">
        <div class="header-title">
            <h1 id="greeting">Performance & Test History</h1>
            <p>Track your test scores, subject accuracy, and percentile rankings.</p>
        </div>

        <!-- 4 Real-time Metrics -->
        <div class="stats-grid">
            <div class="stat-card blue">
                <div class="stat-label">Total Exams Taken</div>
                <div class="stat-value" id="totalExamsStat">0</div>
            </div>
            <div class="stat-card green">
                <div class="stat-label">Average Score</div>
                <div class="stat-value" id="avgScoreStat">0%</div>
            </div>
            <div class="stat-card purple">
                <div class="stat-label">Best Score</div>
                <div class="stat-value" id="bestScoreStat">0%</div>
            </div>
            <div class="stat-card amber">
                <div class="stat-label">Merit Rank</div>
                <div class="stat-value" id="rankStat">#1</div>
            </div>
        </div>

        <!-- Detailed History Table -->
        <div class="table-card">
            <div class="table-header">
                <h2>Examination History & Attempts</h2>
                <span style="font-size: 13px; color: var(--text-muted);">Real-time Record Log</span>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Examination Title</th>
                        <th>Subject</th>
                        <th>Marks Obtained</th>
                        <th>Percentage</th>
                        <th>Status</th>
                        <th>Integrity</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody id="historyTableBody"></tbody>
            </table>
        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        "use strict";

        const currentStudent = SmartStore.getCurrentStudent();
        document.getElementById("greeting").textContent = `${currentStudent.name}'s Performance Analytics`;

        const studentResults = SmartStore.getStudentResults(currentStudent.email);
        const allResults = SmartStore.getResults();

        // 1. Calculate Real Statistics
        const totalExams = studentResults.length;
        document.getElementById("totalExamsStat").textContent = totalExams;

        if (totalExams > 0) {
            const sumPercentages = studentResults.reduce((acc, r) => acc + (r.percentage || 0), 0);
            const avgPercentage = Math.round(sumPercentages / totalExams);
            const bestPercentage = Math.max(...studentResults.map(r => r.percentage || 0));

            document.getElementById("avgScoreStat").textContent = `${avgPercentage}%`;
            document.getElementById("bestScoreStat").textContent = `${bestPercentage}%`;

            // Calculate student rank across all attempts using QuickSort
            const sortedLeaderboard = SmartStore.quickSort(allResults, "score", true);
            const userHighestScore = Math.max(...studentResults.map(r => r.score || 0));
            const rankIndex = sortedLeaderboard.findIndex(r => (r.studentEmail || "").toLowerCase() === currentStudent.email.toLowerCase() && r.score === userHighestScore);
            const rank = rankIndex !== -1 ? rankIndex + 1 : 1;
            document.getElementById("rankStat").textContent = `#${rank}`;
        } else {
            document.getElementById("avgScoreStat").textContent = "0%";
            document.getElementById("bestScoreStat").textContent = "0%";
            document.getElementById("rankStat").textContent = "-";
        }

        // 2. Render History Table
        const tbody = document.getElementById("historyTableBody");
        tbody.innerHTML = "";

        if (studentResults.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7">
                        <div class="empty-state">
                            <p>You haven't attempted any examinations yet.</p>
                            <a href="dashboard.html" class="btn-take-test">Start a Test Now →</a>
                        </div>
                    </td>
                </tr>
            `;
        } else {
            studentResults.forEach(res => {
                const passed = res.status === "Passed" || res.percentage >= 40;
                const strikes = res.proctorStrikes || 0;
                const integrityTag = strikes === 0
                    ? `<span class="strike-pill strike-clean">✓ Verified</span>`
                    : `<span class="strike-pill strike-warn">⚠️ ${strikes} Strikes</span>`;

                tbody.innerHTML += `
                    <tr>
                        <td><strong>${SmartStore.escapeHTML(res.examTitle)}</strong></td>
                        <td>${SmartStore.escapeHTML(res.subject || 'General')}</td>
                        <td>${res.score} / ${res.totalMarks}</td>
                        <td><strong>${res.percentage}%</strong></td>
                        <td><span class="badge ${passed ? 'passed' : 'failed'}">${passed ? 'PASSED' : 'FAILED'}</span></td>
                        <td>${integrityTag}</td>
                        <td>${res.dateFormatted || 'Recently'}</td>
                    </tr>
                `;
            });
        }
    </script>
</body>
</html>
```

---

## 📄 `student/exams.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Available Examinations | SmartExam</title>
    <link rel="stylesheet" href="../css/dashboard.css">
    <style>
        .badge-status-pill {
            display: inline-block;
            font-size: 11px;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 12px;
            margin-bottom: 8px;
        }
        .badge-active { background: #dcfce7; color: #166534; }
        .badge-expired { background: #fee2e2; color: #991b1b; }
        .btn-disabled {
            background: #cbd5e1 !important;
            color: #64748b !important;
            cursor: not-allowed;
            pointer-events: none;
        }
    </style>
</head>
<body>

<header class="dashboard-header">
    <div class="logo">
        Smart<span>Exam</span>
    </div>
    <a href="dashboard.html" style="text-decoration:none; color: #475569; font-weight: 600;">
        ← Back to Dashboard
    </a>
</header>

<main class="dashboard">
    <div class="welcome">
        <h1>Available Scheduled Examinations</h1>
        <p>Select an ongoing or scheduled examination paper to start. Check deadlines carefully.</p>
    </div>

    <div id="examContainer" class="dashboard-grid"></div>
</main>

<!-- Store Script -->
<script src="../js/store.js"></script>

<script>
    const container = document.getElementById("examContainer");
    const exams = SmartStore.getExams();

    if (exams.length === 0) {
        container.innerHTML = `<p style="color:#64748b; padding:20px;">No scheduled examinations available at the moment.</p>`;
    } else {
        exams.forEach(exam => {
            const isExpired = SmartStore.isExamExpired(exam);
            const isClosed = exam.status === "Closed";
            const canAttempt = !isExpired && !isClosed;

            const card = document.createElement("div");
            card.className = "dashboard-card";
            card.innerHTML = `
                <div>
                    <span class="badge-status-pill ${canAttempt ? 'badge-active' : 'badge-expired'}">
                        ${canAttempt ? '🟢 ACTIVE' : (isExpired ? '⏳ DEADLINE EXPIRED' : '🔴 CLOSED')}
                    </span>
                    <h2>${SmartStore.escapeHTML(exam.title)}</h2>
                </div>
                <p><strong>Subject:</strong> ${SmartStore.escapeHTML(exam.subject)}</p>
                <p><strong>Questions:</strong> ${exam.questions || 15} Qs</p>
                <p><strong>Duration:</strong> ${exam.duration || (exam.durationMinutes + ' mins')}</p>
                <p><strong>Deadline:</strong> 📅 ${SmartStore.formatDateTime(exam.deadline)}</p>
                <p><strong>Passing Score:</strong> ${exam.passPercent || 40}%</p>
                <a href="instructions.html?subject=${encodeURIComponent(exam.subject)}&title=${encodeURIComponent(exam.title)}" 
                   class="dashboard-btn ${canAttempt ? '' : 'btn-disabled'}" 
                   style="margin-top:14px; display:inline-block;">
                    ${canAttempt ? 'Start Examination →' : 'Examination Closed'}
                </a>
            `;
            container.appendChild(card);
        });
    }
</script>

</body>
</html>
```

---

## 📄 `admin/login.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Portal Login | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --navy-dark: #0f172a;
            --navy-surface: #1e293b;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --bg-light: #f8fafc;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        body {
            background-color: var(--bg-light);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        /* Main Container */
        .auth-wrapper {
            display: flex;
            width: 100%;
            max-width: 1050px;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04);
            min-height: 600px;
        }

        /* Left Side: Modern Banner */
        .auth-banner {
            flex: 1.1;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            padding: 48px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
        }

        .auth-banner::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 100% 0%, rgba(37, 99, 235, 0.15), transparent 50%);
            pointer-events: none;
        }

        .brand-header {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .brand-icon {
            width: 40px;
            height: 40px;
            background: var(--primary);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 20px;
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .brand-text h2 {
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }

        .brand-text p {
            font-size: 12px;
            color: #94a3b8;
        }

        .banner-content {
            margin: 36px 0;
        }

        .banner-tag {
            display: inline-block;
            background: rgba(37, 99, 235, 0.2);
            color: #60a5fa;
            border: 1px solid rgba(96, 165, 250, 0.3);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 16px;
        }

        .banner-content h1 {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: 12px;
        }

        .banner-content .desc {
            color: #94a3b8;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 24px;
        }

        .feature-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 13px;
            color: #cbd5e1;
        }

        .check-icon {
            background: rgba(37, 99, 235, 0.25);
            color: #60a5fa;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            flex-shrink: 0;
            margin-top: 1px;
        }

        .feature-item strong {
            color: #ffffff;
        }

        .banner-footer {
            font-size: 12px;
            color: #64748b;
        }

        /* Right Side: Form */
        .auth-card {
            flex: 1;
            padding: 48px 44px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #ffffff;
        }

        .auth-card h2 {
            font-size: 24px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 6px;
        }

        .auth-subtitle {
            font-size: 14px;
            color: var(--text-muted);
            margin-bottom: 28px;
        }

        .form-group {
            margin-bottom: 18px;
        }

        .form-group label {
            font-size: 13px;
            font-weight: 600;
            color: #334155;
            display: block;
            margin-bottom: 6px;
        }

        .form-control {
            width: 100%;
            padding: 11px 14px;
            font-size: 14px;
            border: 1px solid var(--border);
            border-radius: 8px;
            outline: none;
            color: var(--text-dark);
            background: #ffffff;
            transition: all 0.2s ease;
        }

        .form-control:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .auth-btn {
            width: 100%;
            background: var(--primary);
            color: #ffffff;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2);
            margin-top: 10px;
        }

        .auth-btn:hover {
            background: var(--primary-hover);
            transform: translateY(-1px);
        }

        .demo-box {
            margin-top: 22px;
            padding: 12px 14px;
            background: #eff6ff;
            border: 1px solid #dbeafe;
            border-radius: 8px;
            font-size: 12px;
            color: #1e40af;
            line-height: 1.5;
        }

        .demo-box strong {
            display: block;
            margin-bottom: 3px;
            font-size: 12px;
            color: #1d4ed8;
        }

        .demo-box code {
            background: rgba(37, 99, 235, 0.1);
            padding: 2px 5px;
            border-radius: 4px;
            font-weight: 600;
        }

        .footer-links {
            margin-top: 20px;
            text-align: center;
        }

        .back-home {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 13px;
            font-weight: 500;
        }
    </style>
</head>
<body>

    <div class="auth-wrapper">
        <div class="auth-banner">
            <div class="brand-header">
                <div class="brand-icon">A</div>
                <div class="brand-text">
                    <h2>SmartExam</h2>
                    <p>Online Examination System</p>
                </div>
            </div>

            <div class="banner-content">
                <span class="banner-tag">Admin Portal</span>
                <h1>Manage examinations & proctoring.</h1>
                <p class="desc">Manage central question banks, configure assessments, monitor live integrity violations, and generate automated merit rankings.</p>

                <ul class="feature-list">
                    <li class="feature-item">
                        <div class="check-icon">✓</div>
                        <div><strong>Question Bank:</strong> Add and filter MCQs across DSA, Java, DBMS, C & Aptitude.</div>
                    </li>
                    <li class="feature-item">
                        <div class="check-icon">✓</div>
                        <div><strong>Exam Builder:</strong> Configure custom examination papers & schedules.</div>
                    </li>
                    <li class="feature-item">
                        <div class="check-icon">✓</div>
                        <div><strong>QuickSort Ranking:</strong> Real-time student leaderboard & violation tracking.</div>
                    </li>
                </ul>
            </div>

            <div class="banner-footer">
                © 2026 SmartExam. All rights reserved.
            </div>
        </div>

        <div class="auth-card">
            <h2>Admin Login</h2>
            <p class="auth-subtitle">Sign in with administrator credentials</p>

            <form id="adminLoginForm">
                <div class="form-group">
                    <label for="adminEmail">Email Address</label>
                    <input type="email" id="adminEmail" class="form-control" placeholder="Enter admin email" value="admin@smartexam.com" required>
                </div>

                <div class="form-group">
                    <label for="adminPassword">Password</label>
                    <input type="password" id="adminPassword" class="form-control" placeholder="Enter admin password" value="admin123" required>
                </div>

                <button type="submit" class="auth-btn">Login to Admin Portal →</button>
            </form>

            <div class="demo-box">
                <strong>Demo Admin Access:</strong>
                Email: <code>admin@smartexam.com</code> &bull; Password: <code>admin123</code>
            </div>

            <div class="footer-links">
                <a href="../index.html" class="back-home">← Back to Home</a>
            </div>
        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("adminEmail").value.trim();
            const password = document.getElementById("adminPassword").value;

            const res = SmartStore.loginAdmin(email, password);
            if (res.success) {
                window.location.href = "dashboard.html";
            } else {
                alert(res.message || "Invalid credentials! Please use: admin@smartexam.com / admin123");
            }
        });
    </script>
</body>
</html>
```

---

## 📄 `admin/dashboard.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --bg-main: #f8fafc;
            --card-bg: #ffffff;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
            --success: #10b981;
            --warning: #f59e0b;
            --purple: #8b5cf6;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        body {
            background-color: var(--bg-main);
            color: var(--text-dark);
            min-height: 100vh;
        }

        /* Top Navigation */
        .admin-nav {
            background: #ffffff;
            border-bottom: 1px solid var(--border-color);
            padding: 14px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .brand-logo {
            font-size: 20px;
            font-weight: 700;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
        }

        .brand-logo span { color: var(--text-dark); }

        .admin-badge {
            font-size: 11px;
            background: #eff6ff;
            color: var(--primary);
            padding: 3px 8px;
            border-radius: 6px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.2s;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .nav-links a.active {
            color: var(--primary);
            font-weight: 600;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .admin-name {
            font-size: 14px;
            font-weight: 600;
        }

        .logout-btn {
            background: #fee2e2;
            color: #ef4444;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .logout-btn:hover {
            background: #ef4444;
            color: #ffffff;
        }

        /* Container */
        .dashboard-wrapper {
            max-width: 1240px;
            margin: 40px auto;
            padding: 0 24px;
        }

        .header-title {
            margin-bottom: 30px;
        }

        .header-title h1 {
            font-size: 28px;
            font-weight: 700;
            color: var(--text-dark);
        }

        .header-title p {
            color: var(--text-muted);
            font-size: 15px;
            margin-top: 4px;
        }

        /* 4 Dynamic Stats Cards in 1 Row */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 35px;
        }

        .stat-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            padding: 22px 24px;
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            text-decoration: none;
            display: block;
        }

        .stat-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.05);
        }

        .stat-label {
            font-size: 12px;
            font-weight: 700;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .stat-value {
            font-size: 32px;
            font-weight: 800;
            margin-top: 6px;
        }

        .stat-card.blue .stat-value { color: var(--primary); }
        .stat-card.green .stat-value { color: var(--success); }
        .stat-card.amber .stat-value { color: var(--warning); }
        .stat-card.purple .stat-value { color: var(--purple); }

        /* Action Grid */
        .actions-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .action-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            transition: all 0.2s ease;
        }

        .action-card:hover {
            border-color: #cbd5e1;
            box-shadow: 0 10px 24px rgba(0,0,0,0.06);
            transform: translateY(-2px);
        }

        .action-header h2 {
            font-size: 19px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 8px;
        }

        .action-header p {
            font-size: 14px;
            color: var(--text-muted);
            line-height: 1.6;
            margin-bottom: 24px;
        }

        .action-btn {
            display: inline-block;
            text-align: center;
            background: var(--primary);
            color: #ffffff;
            text-decoration: none;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            transition: background 0.2s ease;
        }

        .action-btn:hover {
            background: var(--primary-hover);
        }

        .action-btn.secondary {
            background: #f1f5f9;
            color: var(--text-dark);
            border: 1px solid #e2e8f0;
        }

        .action-btn.secondary:hover {
            background: #e2e8f0;
        }

        @media (max-width: 1024px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
            .actions-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <nav class="admin-nav">
        <a href="dashboard.html" class="brand-logo">
            Smart<span>Exam</span>
            <span class="admin-badge">Admin Panel</span>
        </a>
        <div class="nav-links">
            <a href="dashboard.html" class="active">Dashboard</a>
            <a href="questions.html">Questions</a>
            <a href="create-exam.html">Create Exam</a>
            <a href="exams.html">Exams</a>
            <a href="students.html">Students</a>
            <a href="results.html">Results</a>
        </div>
        <div class="user-profile">
            <span class="admin-name">Administrator</span>
            <button id="logoutBtn" class="logout-btn" onclick="SmartStore.logoutAdmin()">Logout</button>
        </div>
    </nav>

    <div class="dashboard-wrapper">
        <div class="header-title">
            <h1>Admin Dashboard</h1>
            <p>Real-time analytics and management for exams, central question bank, and registered candidate accounts.</p>
        </div>

        <!-- 4 Real-time Dynamic Stats -->
        <div class="stats-grid">
            <a href="students.html" class="stat-card blue" title="Click to view all registered students">
                <span class="stat-label">Registered Students 👥</span>
                <div class="stat-value" id="statStudents">0</div>
            </a>
            <a href="questions.html" class="stat-card green">
                <span class="stat-label">Total Questions 📚</span>
                <div class="stat-value" id="statQuestions">0</div>
            </a>
            <a href="exams.html" class="stat-card amber">
                <span class="stat-label">Active Examinations ⏱️</span>
                <div class="stat-value" id="statActiveExams">0</div>
            </a>
            <a href="results.html" class="stat-card purple">
                <span class="stat-label">Submissions Evaluated 🏆</span>
                <div class="stat-value" id="statCompletedExams">0</div>
            </a>
        </div>

        <!-- Management Action Grid -->
        <div class="actions-grid">
            
            <div class="action-card">
                <div class="action-header">
                    <h2>Registered Students</h2>
                    <p>View all candidate accounts, inspect registered Gmail addresses, check testing history, and manage users.</p>
                </div>
                <a href="students.html" class="action-btn">View Students Directory →</a>
            </div>

            <div class="action-card">
                <div class="action-header">
                    <h2>Question Management</h2>
                    <p>Add new MCQs, edit existing questions, filter by subject, or remove outdated entries from the central question bank.</p>
                </div>
                <a href="questions.html" class="action-btn secondary">Manage Questions →</a>
            </div>

            <div class="action-card">
                <div class="action-header">
                    <h2>Create Examination</h2>
                    <p>Set up a new online test, configure duration, question counts, and assign marking schemes for students.</p>
                </div>
                <a href="create-exam.html" class="action-btn secondary">Create Exam →</a>
            </div>

            <div class="action-card">
                <div class="action-header">
                    <h2>Examination Management</h2>
                    <p>View, activate, edit schedules, or delete ongoing and completed examination papers.</p>
                </div>
                <a href="exams.html" class="action-btn secondary">Manage Exams →</a>
            </div>

            <div class="action-card">
                <div class="action-header">
                    <h2>Results & Proctor Violations</h2>
                    <p>Analyze test scores, review anti-cheat violation snapshots, and view live merit rankings.</p>
                </div>
                <a href="results.html" class="action-btn secondary">View Results →</a>
            </div>

        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        // 1. Total Students
        const students = SmartStore.getStudents();
        document.getElementById("statStudents").textContent = students.length;

        // 2. Total Questions
        const questions = SmartStore.getQuestions("All");
        document.getElementById("statQuestions").textContent = questions.length;

        // 3. Active Exams
        const exams = SmartStore.getExams();
        const activeCount = exams.filter(e => e.status === "Active" && !SmartStore.isExamExpired(e)).length;
        document.getElementById("statActiveExams").textContent = activeCount;

        // 4. Completed Submissions
        const results = SmartStore.getResults();
        document.getElementById("statCompletedExams").textContent = results.length;
    </script>
</body>
</html>
```

---

## 📄 `admin/students.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registered Students Directory | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
            --purple: #8b5cf6;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        body {
            background-color: var(--bg);
            color: var(--text-dark);
            min-height: 100vh;
        }

        /* Top Navigation */
        .admin-nav {
            background: #ffffff;
            border-bottom: 1px solid var(--border);
            padding: 14px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .brand-logo {
            font-size: 20px;
            font-weight: 700;
            color: var(--primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .brand-logo span { color: var(--text-dark); }

        .admin-badge {
            font-size: 11px;
            background: #eff6ff;
            color: var(--primary);
            padding: 3px 8px;
            border-radius: 6px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.2s;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .nav-links a.active {
            color: var(--primary);
            font-weight: 600;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .logout-btn {
            background: #fee2e2;
            color: #ef4444;
            border: none;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .logout-btn:hover {
            background: #ef4444;
            color: #ffffff;
        }

        /* Main Container */
        .container {
            max-width: 1240px;
            margin: 35px auto;
            padding: 0 24px;
        }

        .header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 25px;
        }

        .header-row h1 {
            font-size: 24px;
            font-weight: 700;
            color: var(--text-dark);
        }

        .header-row p {
            color: var(--text-muted);
            font-size: 14px;
            margin-top: 4px;
        }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 25px;
        }

        .stat-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 20px 24px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }

        .stat-label {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .stat-value {
            font-size: 28px;
            font-weight: 800;
            margin-top: 8px;
            color: var(--text-dark);
        }

        .stat-card.blue .stat-value { color: var(--primary); }
        .stat-card.green .stat-value { color: var(--success); }
        .stat-card.purple .stat-value { color: var(--purple); }

        /* Filter & Search Bar */
        .search-bar-wrapper {
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 16px 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 14px;
        }

        .search-input-group {
            display: flex;
            align-items: center;
            background: #f8fafc;
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 8px 14px;
            width: 360px;
            max-width: 100%;
        }

        .search-input-group input {
            border: none;
            background: transparent;
            outline: none;
            font-size: 14px;
            width: 100%;
            margin-left: 8px;
            color: var(--text-dark);
        }

        .results-count {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-muted);
        }

        /* Table Card */
        .table-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 4px rgba(0,0,0,0.02);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
        }

        th {
            background: #f8fafc;
            padding: 14px 20px;
            font-size: 13px;
            font-weight: 600;
            color: var(--text-muted);
            border-bottom: 1px solid var(--border);
        }

        td {
            padding: 16px 20px;
            font-size: 14px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
        }

        tr:last-child td {
            border-bottom: none;
        }

        tbody tr:hover {
            background-color: #f8fafc;
        }

        /* Candidate info cell */
        .candidate-cell {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .avatar-initial {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
            text-transform: uppercase;
            flex-shrink: 0;
        }

        .candidate-name {
            font-weight: 600;
            color: var(--text-dark);
        }

        .candidate-type {
            font-size: 11px;
            color: var(--text-muted);
        }

        /* Email badge */
        .email-pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #f1f5f9;
            color: #334155;
            padding: 4px 10px;
            border-radius: 6px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 13px;
            font-weight: 500;
        }

        .email-pill.gmail {
            background: #fef2f2;
            color: #b91c1c;
            border: 1px solid #fee2e2;
        }

        /* Status & Pills */
        .badge {
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }

        .badge.active {
            background: #dcfce7;
            color: #166534;
        }

        .badge-attempts {
            background: #eff6ff;
            color: var(--primary);
            padding: 3px 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
        }

        .badge-score {
            font-weight: 700;
            color: #0f172a;
        }

        /* Actions */
        .btn-action {
            background: #f1f5f9;
            border: 1px solid var(--border);
            color: var(--text-dark);
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: 0.2s;
            display: inline-block;
        }

        .btn-action:hover {
            background: #e2e8f0;
        }

        .btn-delete-student {
            background: #fee2e2;
            color: var(--danger);
            border: 1px solid #fecaca;
            padding: 6px 10px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
            margin-left: 6px;
        }

        .btn-delete-student:hover {
            background: #ef4444;
            color: #ffffff;
        }

        .empty-state {
            text-align: center;
            padding: 48px 20px;
            color: var(--text-muted);
        }

        @media (max-width: 860px) {
            .stats-grid { grid-template-columns: 1fr; }
            .admin-nav { padding: 14px 20px; flex-wrap: wrap; gap: 10px; }
            .nav-links { flex-wrap: wrap; gap: 12px; }
        }
    </style>
</head>
<body>

    <!-- Top Admin Navigation -->
    <nav class="admin-nav">
        <a href="dashboard.html" class="brand-logo">
            Smart<span>Exam</span>
            <span class="admin-badge">Admin Panel</span>
        </a>
        <div class="nav-links">
            <a href="dashboard.html">Dashboard</a>
            <a href="questions.html">Questions</a>
            <a href="create-exam.html">Create Exam</a>
            <a href="exams.html">Exams</a>
            <a href="students.html" class="active">Students</a>
            <a href="results.html">Results</a>
        </div>
        <div class="user-profile">
            <button class="logout-btn" onclick="SmartStore.logoutAdmin()">Logout</button>
        </div>
    </nav>

    <div class="container">
        
        <!-- Header -->
        <div class="header-row">
            <div>
                <h1>Registered Students Directory</h1>
                <p>Real-time view of all students who created accounts, their names, registered Gmail addresses, and exam attempts.</p>
            </div>
        </div>

        <!-- 3 Dynamic Stats Cards -->
        <div class="stats-grid">
            <div class="stat-card blue">
                <div class="stat-label">Total Registered Students</div>
                <div class="stat-value" id="statTotalStudents">0</div>
            </div>
            <div class="stat-card green">
                <div class="stat-label">Active Test Takers</div>
                <div class="stat-value" id="statActiveCandidates">0</div>
            </div>
            <div class="stat-card purple">
                <div class="stat-label">Total Exam Submissions</div>
                <div class="stat-value" id="statTotalSubmissions">0</div>
            </div>
        </div>

        <!-- Search and Filter Bar -->
        <div class="search-bar-wrapper">
            <div class="search-input-group">
                <span>🔍</span>
                <input type="text" id="searchInput" placeholder="Search by student name or Gmail..." oninput="filterStudents()">
            </div>
            <div class="results-count" id="resultsCount">Showing all students</div>
        </div>

        <!-- Students Directory Table Card -->
        <div class="table-card">
            <table>
                <thead>
                    <tr>
                        <th style="width: 50px;">#</th>
                        <th>Candidate Name</th>
                        <th>Registered Gmail / Email</th>
                        <th>Registration Date</th>
                        <th>Exams Attempted</th>
                        <th>Highest Score</th>
                        <th>Status</th>
                        <th style="text-align: right;">Actions</th>
                    </tr>
                </thead>
                <tbody id="studentsTableBody"></tbody>
            </table>
        </div>

    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        "use strict";

        let allStudents = [];

        function getInitials(name) {
            if (!name) return "ST";
            const parts = name.trim().split(" ");
            if (parts.length >= 2) {
                return (parts[0][0] + parts[1][0]).toUpperCase();
            }
            return name.substring(0, 2).toUpperCase();
        }

        function loadStudents() {
            allStudents = SmartStore.getStudents();
            const allResults = SmartStore.getResults();

            // 1. Calculate Stats
            document.getElementById("statTotalStudents").textContent = allStudents.length;

            const activeEmails = new Set(allResults.map(r => (r.studentEmail || "").toLowerCase()));
            const activeCount = allStudents.filter(s => activeEmails.has((s.email || "").toLowerCase())).length;
            document.getElementById("statActiveCandidates").textContent = activeCount;
            document.getElementById("statTotalSubmissions").textContent = allResults.length;

            renderTable(allStudents);
        }

        function renderTable(students) {
            const tbody = document.getElementById("studentsTableBody");
            tbody.innerHTML = "";

            if (!students || students.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="8">
                            <div class="empty-state">
                                <p style="font-size: 16px; font-weight: 600; color: #475569;">No registered students found</p>
                                <p style="font-size: 13px; margin-top: 4px;">When new students register on the portal, their details and Gmail addresses will appear here automatically.</p>
                            </div>
                        </td>
                    </tr>
                `;
                document.getElementById("resultsCount").textContent = "0 students found";
                return;
            }

            document.getElementById("resultsCount").textContent = `Showing ${students.length} student${students.length === 1 ? '' : 's'}`;

            students.forEach((student, index) => {
                const email = student.email || "";
                const isGmail = email.toLowerCase().includes("@gmail.com");
                const initials = getInitials(student.name);

                // Fetch tests attempted by this student
                const studentResults = SmartStore.getStudentResults(email);
                const attemptsCount = studentResults.length;

                let highestScoreText = "—";
                if (attemptsCount > 0) {
                    const best = Math.max(...studentResults.map(r => r.percentage || 0));
                    highestScoreText = `${best}%`;
                }

                const regDate = student.registeredAtFormatted || (student.registeredAt ? new Date(student.registeredAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "Active Account");

                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td style="color: var(--text-muted); font-weight: 600;">${index + 1}</td>
                    <td>
                        <div class="candidate-cell">
                            <div class="avatar-initial">${initials}</div>
                            <div>
                                <div class="candidate-name">${SmartStore.escapeHTML(student.name || "Student")}</div>
                                <div class="candidate-type">Candidate Account</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="email-pill ${isGmail ? 'gmail' : ''}">
                            ✉️ ${SmartStore.escapeHTML(email)}
                        </span>
                    </td>
                    <td style="color: #475569; font-size: 13px;">
                        📅 ${regDate}
                    </td>
                    <td>
                        <span class="badge-attempts">
                            ${attemptsCount} ${attemptsCount === 1 ? 'Exam' : 'Exams'}
                        </span>
                    </td>
                    <td>
                        <span class="badge-score">${highestScoreText}</span>
                    </td>
                    <td>
                        <span class="badge active">Active</span>
                    </td>
                    <td style="text-align: right;">
                        <a href="results.html" class="btn-action" title="View examination results">View Results</a>
                        <button class="btn-delete-student" onclick="deleteStudentAccount('${SmartStore.escapeHTML(email)}')" title="Remove student account">✕</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        function filterStudents() {
            const query = (document.getElementById("searchInput").value || "").trim().toLowerCase();
            if (!query) {
                renderTable(allStudents);
                return;
            }

            const filtered = allStudents.filter(s => {
                const name = (s.name || "").toLowerCase();
                const email = (s.email || "").toLowerCase();
                return name.includes(query) || email.includes(query);
            });

            renderTable(filtered);
        }

        function deleteStudentAccount(email) {
            if (!confirm(`Are you sure you want to remove student account (${email})?`)) {
                return;
            }
            SmartStore.deleteStudent(email);
            loadStudents();
        }

        // Initialize on load
        document.addEventListener("DOMContentLoaded", loadStudents);
    </script>
</body>
</html>
```

---

## 📄 `admin/questions.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question Management | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb; --primary-hover: #1d4ed8; --bg: #f8fafc;
            --text-dark: #0f172a; --text-muted: #64748b; --border: #e2e8f0;
            --danger: #ef4444; --success: #10b981;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        body { background-color: var(--bg); color: var(--text-dark); min-height: 100vh; }
        .admin-nav { background: #fff; border-bottom: 1px solid var(--border); padding: 14px 40px; display: flex; justify-content: space-between; align-items: center; }
        .brand-logo { font-size: 20px; font-weight: 700; color: var(--primary); text-decoration: none; }
        .brand-logo span { color: var(--text-dark); }
        .nav-links a { color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 500; margin-left: 20px; }
        .nav-links a.active { color: var(--primary); font-weight: 600; }
        .container { max-width: 1240px; margin: 30px auto; padding: 0 24px; }
        .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .btn-primary { background: var(--primary); color: #fff; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600; }
        .btn-primary:hover { background: var(--primary-hover); }
        .filter-bar { background: #fff; padding: 16px 20px; border: 1px solid var(--border); border-radius: 12px; display: flex; gap: 14px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        .search-input, .select-filter { padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; outline: none; background: #fff; }
        .search-input { flex: 1; }
        .search-input:focus, .select-filter:focus { border-color: var(--primary); }
        .table-card { background: #fff; border: 1px solid var(--border); border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        table { width: 100%; border-collapse: collapse; text-align: left; }
        th { background: #f8fafc; padding: 14px 20px; font-size: 13px; font-weight: 600; color: var(--text-muted); border-bottom: 1px solid var(--border); }
        td { padding: 16px 20px; font-size: 14px; border-bottom: 1px solid var(--border); vertical-align: middle; }
        .badge { padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
        .badge.easy { background: #dcfce7; color: #166534; }
        .badge.medium { background: #fef9c3; color: #854d0e; }
        .badge.hard { background: #fee2e2; color: #991b1b; }
        .btn-del { color: var(--danger); background: #fee2e2; border: 1px solid #fecaca; padding: 6px 12px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 12px; }
        .btn-del:hover { background: #ef4444; color: #ffffff; }
    </style>
</head>
<body>
    <nav class="admin-nav">
        <a href="dashboard.html" class="brand-logo">Smart<span>Exam</span></a>
        <div class="nav-links">
            <a href="dashboard.html">Dashboard</a>
            <a href="questions.html" class="active">Questions</a>
            <a href="create-exam.html">Create Exam</a>
            <a href="exams.html">Exams</a>
            <a href="students.html">Students</a>
            <a href="results.html">Results</a>
        </div>
    </nav>
    <div class="container">
        <div class="header-row">
            <div>
                <h1 style="font-size: 24px; font-weight: 700;">Question Management</h1>
                <p style="color: var(--text-muted); font-size: 14px;">View, search, filter, and organize the central examination Question Bank.</p>
            </div>
            <a href="add-question.html" class="btn-primary">+ Add New Question</a>
        </div>

        <!-- 5 Subjects Filter Dropdown -->
        <div class="filter-bar">
            <input type="text" id="searchBox" class="search-input" placeholder="Search questions by keyword or topic...">
            <select id="subFilter" class="select-filter">
                <option value="All">All Subjects</option>
                <option value="DSA">Data Structures & Algorithms (DSA)</option>
                <option value="Java">Java Programming</option>
                <option value="DBMS">Database Management (DBMS)</option>
                <option value="C">C Programming</option>
                <option value="Aptitude">General Aptitude</option>
            </select>
            <select id="diffFilter" class="select-filter">
                <option value="All">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
        </div>

        <div class="table-card">
            <table>
                <thead>
                    <tr>
                        <th style="width: 80px;">ID</th>
                        <th>Question Description</th>
                        <th>Subject</th>
                        <th>Difficulty</th>
                        <th>Marks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="questionTable"></tbody>
            </table>
        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        "use strict";

        function renderQuestions() {
            const keyword = document.getElementById("searchBox").value.toLowerCase().trim();
            const selectedSubject = document.getElementById("subFilter").value;
            const selectedDiff = document.getElementById("diffFilter").value;

            let list = SmartStore.getQuestions("All");

            // Filter by Subject
            if (selectedSubject !== "All") {
                list = list.filter(q => (q.subject || "").toLowerCase() === selectedSubject.toLowerCase());
            }

            // Filter by Difficulty
            if (selectedDiff !== "All") {
                list = list.filter(q => (q.difficulty || "").toLowerCase() === selectedDiff.toLowerCase());
            }

            // Filter by Search Keyword
            if (keyword) {
                list = list.filter(q =>
                    (q.text || "").toLowerCase().includes(keyword) ||
                    (q.subject || "").toLowerCase().includes(keyword)
                );
            }

            const tb = document.getElementById("questionTable");
            tb.innerHTML = "";

            if (list.length === 0) {
                tb.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94a3b8; padding: 30px;">No questions found matching the selected filter criteria.</td></tr>`;
                return;
            }

            list.forEach(q => {
                const diffClass = (q.difficulty || "medium").toLowerCase();
                tb.innerHTML += `
                    <tr>
                        <td><strong>#${q.id}</strong></td>
                        <td style="max-width: 480px; font-weight: 500;">${SmartStore.escapeHTML(q.text)}</td>
                        <td><span style="font-weight:600; color:var(--primary);">${SmartStore.escapeHTML(q.subject)}</span></td>
                        <td><span class="badge ${diffClass}">${q.difficulty || 'Medium'}</span></td>
                        <td><strong>${q.marks || 2}</strong></td>
                        <td>
                            <button class="btn-del" onclick="deleteQuestion(${q.id})">Delete</button>
                        </td>
                    </tr>
                `;
            });
        }

        function deleteQuestion(id) {
            if (confirm(`Are you sure you want to delete Question #${id}?`)) {
                SmartStore.deleteQuestion(id);
                renderQuestions();
            }
        }

        document.getElementById("searchBox").addEventListener("input", renderQuestions);
        document.getElementById("subFilter").addEventListener("change", renderQuestions);
        document.getElementById("diffFilter").addEventListener("change", renderQuestions);

        renderQuestions();
    </script>
</body>
</html>
```

---

## 📄 `admin/add-question.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Question | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb; --primary-hover: #1d4ed8; --bg: #f8fafc;
            --text-dark: #0f172a; --text-muted: #64748b; --border: #e2e8f0;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        body { background-color: var(--bg); color: var(--text-dark); min-height: 100vh; }
        .admin-nav { background: #fff; border-bottom: 1px solid var(--border); padding: 14px 40px; display: flex; justify-content: space-between; align-items: center; }
        .brand-logo { font-size: 20px; font-weight: 700; color: var(--primary); text-decoration: none; }
        .brand-logo span { color: var(--text-dark); }
        .nav-links a { color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 500; margin-left: 20px; }
        .nav-links a.active { color: var(--primary); font-weight: 600; }
        .container { max-width: 860px; margin: 35px auto; padding: 0 20px; }
        .form-card { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 36px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 20px; }
        .form-group { margin-bottom: 16px; }
        .form-group.full { grid-column: span 2; }
        label { display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 6px; }
        .form-control { width: 100%; padding: 11px 14px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; outline: none; background: #fff; }
        .form-control:focus { border-color: var(--primary); }
        textarea.form-control { resize: vertical; min-height: 85px; }
        .btn-row { display: flex; gap: 12px; margin-top: 20px; }
        .btn-submit { flex: 1; background: var(--primary); color: #fff; border: none; padding: 12px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; }
        .btn-submit:hover { background: var(--primary-hover); }
        .btn-cancel { background: #f1f5f9; color: var(--text-dark); text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; text-align: center; border: 1px solid var(--border); }
    </style>
</head>
<body>
    <nav class="admin-nav">
        <a href="dashboard.html" class="brand-logo">Smart<span>Exam</span></a>
        <div class="nav-links">
            <a href="dashboard.html">Dashboard</a>
            <a href="questions.html" class="active">Questions</a>
            <a href="create-exam.html">Create Exam</a>
            <a href="exams.html">Exams</a>
            <a href="students.html">Students</a>
            <a href="results.html">Results</a>
        </div>
    </nav>
    <div class="container">
        <div class="form-card">
            <h1 style="font-size: 22px; font-weight: 700;">Add New Question</h1>
            <p style="color: var(--text-muted); font-size: 14px; margin-top: 4px;">Assign question to a specific subject category and question bank.</p>

            <form id="addQuestionForm">
                <div class="form-grid">
                    <div class="form-group full">
                        <label for="qText">Question Description *</label>
                        <textarea id="qText" class="form-control" placeholder="Enter the complete question text..." required></textarea>
                    </div>

                    <!-- Dedicated Subject Categories -->
                    <div class="form-group">
                        <label for="qSubject">Subject Category *</label>
                        <select id="qSubject" class="form-control" required>
                            <option value="DSA">Data Structures & Algorithms (DSA)</option>
                            <option value="Java">Java Programming</option>
                            <option value="DBMS">Database Management (DBMS)</option>
                            <option value="C">C Programming</option>
                            <option value="Aptitude">General Aptitude</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="qDifficulty">Difficulty Level *</label>
                        <select id="qDifficulty" class="form-control" required>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="optA">Option A *</label>
                        <input type="text" id="optA" class="form-control" placeholder="Option A text" required>
                    </div>

                    <div class="form-group">
                        <label for="optB">Option B *</label>
                        <input type="text" id="optB" class="form-control" placeholder="Option B text" required>
                    </div>

                    <div class="form-group">
                        <label for="optC">Option C *</label>
                        <input type="text" id="optC" class="form-control" placeholder="Option C text" required>
                    </div>

                    <div class="form-group">
                        <label for="optD">Option D *</label>
                        <input type="text" id="optD" class="form-control" placeholder="Option D text" required>
                    </div>

                    <div class="form-group">
                        <label for="correctOpt">Correct Option *</label>
                        <select id="correctOpt" class="form-control" required>
                            <option value="A">Option A</option>
                            <option value="B">Option B</option>
                            <option value="C">Option C</option>
                            <option value="D">Option D</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="qMarks">Marks Assigned *</label>
                        <input type="number" id="qMarks" class="form-control" value="2" min="1" max="10" required>
                    </div>
                </div>

                <div class="btn-row">
                    <button type="submit" class="btn-submit">Save Question to Bank →</button>
                    <a href="questions.html" class="btn-cancel">Cancel</a>
                </div>
            </form>
        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        document.getElementById("addQuestionForm").addEventListener("submit", function(event) {
            event.preventDefault();

            const newQuestion = {
                text: document.getElementById("qText").value.trim(),
                subject: document.getElementById("qSubject").value,
                difficulty: document.getElementById("qDifficulty").value,
                options: [
                    document.getElementById("optA").value.trim(),
                    document.getElementById("optB").value.trim(),
                    document.getElementById("optC").value.trim(),
                    document.getElementById("optD").value.trim()
                ],
                correctOption: document.getElementById("correctOpt").value,
                marks: parseInt(document.getElementById("qMarks").value, 10) || 2
            };

            const saved = SmartStore.addQuestion(newQuestion);

            alert(`Question #${saved.id} added successfully under ${saved.subject}!`);
            window.location.href = "questions.html";
        });
    </script>
</body>
</html>
```

---

## 📄 `admin/create-exam.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Examination | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb; --primary-hover: #1d4ed8; --bg: #f8fafc;
            --text-dark: #0f172a; --text-muted: #64748b; --border: #e2e8f0;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        body { background-color: var(--bg); color: var(--text-dark); min-height: 100vh; }
        .admin-nav { background: #fff; border-bottom: 1px solid var(--border); padding: 14px 40px; display: flex; justify-content: space-between; align-items: center; }
        .brand-logo { font-size: 20px; font-weight: 700; color: var(--primary); text-decoration: none; }
        .brand-logo span { color: var(--text-dark); }
        .nav-links a { color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 500; margin-left: 20px; }
        .nav-links a.active { color: var(--primary); font-weight: 600; }
        .container { max-width: 800px; margin: 40px auto; padding: 0 24px; }
        .form-card { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
        .form-group { margin-bottom: 18px; }
        .form-group.full { grid-column: span 2; }
        label { display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 6px; }
        .form-control { width: 100%; padding: 11px 14px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; outline: none; background: #fff; }
        .form-control:focus { border-color: var(--primary); }
        .btn-submit { background: var(--primary); color: #fff; border: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; width: 100%; margin-top: 10px; }
        .btn-submit:hover { background: var(--primary-hover); }
    </style>
</head>
<body>
    <nav class="admin-nav">
        <a href="dashboard.html" class="brand-logo">Smart<span>Exam</span></a>
        <div class="nav-links">
            <a href="dashboard.html">Dashboard</a>
            <a href="questions.html">Questions</a>
            <a href="create-exam.html" class="active">Create Exam</a>
            <a href="exams.html">Exams</a>
            <a href="students.html">Students</a>
            <a href="results.html">Results</a>
        </div>
    </nav>
    <div class="container">
        <div class="form-card">
            <h1 style="font-size: 22px; font-weight: 700;">Create New Examination</h1>
            <p style="color: var(--text-muted); font-size: 14px; margin-top: 4px;">Configure test parameters, timer duration, and question distribution.</p>
            
            <form id="createExamForm">
                <div class="form-grid">
                    <div class="form-group full">
                        <label>Examination Title *</label>
                        <input type="text" id="examTitle" class="form-control" placeholder="e.g. Advanced DSA Mid-Term Assessment" required>
                    </div>
                    <div class="form-group">
                        <label>Subject *</label>
                        <select id="examSubject" class="form-control" required>
                            <option value="DSA">Data Structures & Algorithms (DSA)</option>
                            <option value="Java">Java Programming</option>
                            <option value="DBMS">Database Management (DBMS)</option>
                            <option value="C">C Programming</option>
                            <option value="Aptitude">General Aptitude</option>
                            <option value="All">All Subjects (Comprehensive Mock)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Duration (in Minutes) *</label>
                        <input type="number" id="examDuration" class="form-control" value="30" min="5" max="180" required>
                    </div>
                    <div class="form-group">
                        <label>Total Questions *</label>
                        <input type="number" id="totalQuestions" class="form-control" value="15" min="1" max="100" required>
                    </div>
                    <div class="form-group">
                        <label>Passing Percentage (%) *</label>
                        <input type="number" id="passPercent" class="form-control" value="40" min="1" max="100" required>
                    </div>
                    <div class="form-group full">
                        <label>Exam Deadline / Expiration Date & Time *</label>
                        <input type="datetime-local" id="examDeadline" class="form-control" required>
                        <span style="font-size: 12px; color: var(--text-muted); margin-top: 4px; display: block;">Students cannot attempt or submit this exam after the deadline.</span>
                    </div>
                </div>
                <button type="submit" class="btn-submit">Publish & Schedule Exam →</button>
            </form>
        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        // Set default deadline to 7 days from now formatted for datetime-local
        const now = new Date();
        now.setDate(now.getDate() + 7);
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        document.getElementById("examDeadline").value = now.toISOString().slice(0, 16);

        document.getElementById("createExamForm").addEventListener("submit", function(e) {
            e.preventDefault();

            const deadlineVal = document.getElementById("examDeadline").value;
            const deadlineIso = deadlineVal ? new Date(deadlineVal).toISOString() : new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString();

            const newExam = {
                title: document.getElementById("examTitle").value.trim(),
                subject: document.getElementById("examSubject").value,
                durationMinutes: parseInt(document.getElementById("examDuration").value, 10) || 30,
                questions: parseInt(document.getElementById("totalQuestions").value, 10) || 15,
                passPercent: parseInt(document.getElementById("passPercent").value, 10) || 40,
                deadline: deadlineIso,
                status: "Active"
            };

            SmartStore.addExam(newExam);
            alert("Examination created and scheduled with deadline successfully!");
            window.location.href = "exams.html";
        });
    </script>
</body>
</html>
```

---

## 📄 `admin/exams.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examination Management | SmartExam</title>
    <style>
        :root {
            --primary: #2563eb; --primary-hover: #1d4ed8; --bg: #f8fafc;
            --text-dark: #0f172a; --text-muted: #64748b; --border: #e2e8f0;
            --success: #10b981; --danger: #ef4444;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        body { background-color: var(--bg); color: var(--text-dark); min-height: 100vh; }
        .admin-nav { background: #fff; border-bottom: 1px solid var(--border); padding: 14px 40px; display: flex; justify-content: space-between; align-items: center; }
        .brand-logo { font-size: 20px; font-weight: 700; color: var(--primary); text-decoration: none; }
        .brand-logo span { color: var(--text-dark); }
        .nav-links a { color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 500; margin-left: 20px; }
        .nav-links a.active { color: var(--primary); font-weight: 600; }
        .container { max-width: 1240px; margin: 30px auto; padding: 0 24px; }
        .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .table-card { background: #fff; border: 1px solid var(--border); border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        table { width: 100%; border-collapse: collapse; text-align: left; }
        th { background: #f8fafc; padding: 14px 20px; font-size: 13px; font-weight: 600; color: var(--text-muted); border-bottom: 1px solid var(--border); }
        td { padding: 16px 20px; font-size: 14px; border-bottom: 1px solid var(--border); vertical-align: middle; }
        .badge { padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .badge.active { background: #dcfce7; color: #166534; }
        .badge.closed { background: #fee2e2; color: #991b1b; }
        
        /* Action Buttons */
        .action-cell { display: flex; align-items: center; gap: 8px; }
        .btn-toggle { background: #f1f5f9; border: 1px solid var(--border); padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; transition: 0.2s; }
        .btn-toggle:hover { background: #e2e8f0; }
        .btn-delete { background: #fee2e2; color: var(--danger); border: 1px solid #fecaca; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; transition: 0.2s; }
        .btn-delete:hover { background: #ef4444; color: #ffffff; }
    </style>
</head>
<body>
    <nav class="admin-nav">
        <a href="dashboard.html" class="brand-logo">Smart<span>Exam</span></a>
        <div class="nav-links">
            <a href="dashboard.html">Dashboard</a>
            <a href="questions.html">Questions</a>
            <a href="create-exam.html">Create Exam</a>
            <a href="exams.html" class="active">Exams</a>
            <a href="students.html">Students</a>
            <a href="results.html">Results</a>
        </div>
    </nav>
    <div class="container">
        <div class="header-row">
            <div>
                <h1 style="font-size: 24px; font-weight: 700;">Examination Management</h1>
                <p style="color: var(--text-muted); font-size: 14px;">Monitor ongoing, scheduled, and completed examinations.</p>
            </div>
            <a href="create-exam.html" style="background:var(--primary); color:#fff; padding:10px 16px; border-radius:8px; text-decoration:none; font-size:14px; font-weight:600;">+ New Exam</a>
        </div>
        <div class="table-card">
            <table>
                <thead>
                    <tr>
                        <th>Exam Title</th>
                        <th>Subject</th>
                        <th>Duration</th>
                        <th>Questions</th>
                        <th>Deadline / Expiry</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="examTable"></tbody>
            </table>
        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        function renderExams() {
            const exams = SmartStore.getExams();
            const tb = document.getElementById("examTable");
            tb.innerHTML = "";

            if (exams.length === 0) {
                tb.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94a3b8; padding: 30px;">No exams found.</td></tr>`;
                return;
            }

            exams.forEach(e => {
                const isExpired = SmartStore.isExamExpired(e);
                let statusLabel = e.status || "Active";
                let statusBadgeClass = "active";

                if (e.status === "Closed") {
                    statusLabel = "Closed";
                    statusBadgeClass = "closed";
                } else if (isExpired) {
                    statusLabel = "Expired";
                    statusBadgeClass = "closed";
                }

                tb.innerHTML += `
                    <tr>
                        <td><strong>${SmartStore.escapeHTML(e.title)}</strong></td>
                        <td><span style="color:var(--primary); font-weight:600;">${SmartStore.escapeHTML(e.subject)}</span></td>
                        <td>${e.duration || (e.durationMinutes + ' Mins')}</td>
                        <td>${e.questions || 10} Qs</td>
                        <td><span style="font-size:13px; color:#475569;">📅 ${SmartStore.formatDateTime(e.deadline)}</span></td>
                        <td><span class="badge ${statusBadgeClass}">${statusLabel}</span></td>
                        <td>
                            <div class="action-cell">
                                <button class="btn-toggle" onclick="toggleStatus(${e.id})">Toggle Status</button>
                                <button class="btn-delete" onclick="deleteExam(${e.id})">Delete</button>
                            </div>
                        </td>
                    </tr>
                `;
            });
        }

        function toggleStatus(id) {
            SmartStore.toggleExamStatus(id);
            renderExams();
        }

        function deleteExam(id) {
            if (confirm("Are you sure you want to delete this examination?")) {
                SmartStore.deleteExam(id);
                renderExams();
            }
        }

        renderExams();
    </script>
</body>
</html>
```

---

## 📄 `admin/results.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results & Live Merit Ranking | ExamMatrix</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --success: #10b981;
            --danger: #ef4444;
            --warning: #f59e0b;
            --purple: #8b5cf6;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        body {
            background-color: var(--bg);
            color: var(--text-dark);
            min-height: 100vh;
        }

        /* Navigation Bar */
        .admin-nav {
            background: #ffffff;
            border-bottom: 1px solid var(--border);
            padding: 14px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .brand-logo {
            font-size: 20px;
            font-weight: 700;
            color: var(--primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .brand-logo span { color: var(--text-dark); }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.2s;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .nav-links a.active {
            color: var(--primary);
            font-weight: 600;
        }

        .container {
            max-width: 1240px;
            margin: 30px auto;
            padding: 0 24px;
        }

        .header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 16px;
        }

        .header-title h1 {
            font-size: 24px;
            font-weight: 700;
            color: var(--text-dark);
        }

        .header-title p {
            color: var(--text-muted);
            font-size: 14px;
            margin-top: 4px;
        }

        /* Glassmorphic Controls Bar */
        .controls-bar {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(226, 232, 240, 0.9);
            border-radius: 14px;
            padding: 16px 22px;
            margin-bottom: 22px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 14px;
            box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
        }

        .controls-left {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        .filter-label {
            font-size: 13px;
            font-weight: 700;
            color: var(--text-dark);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .subject-select {
            padding: 9px 16px;
            font-size: 13px;
            font-weight: 600;
            color: var(--text-dark);
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 8px;
            outline: none;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 1px 2px rgba(0,0,0,0.03);
        }

        .subject-select:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .controls-right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .btn-export {
            background: linear-gradient(135deg, #059669, #10b981);
            color: #ffffff;
            border: none;
            padding: 9px 18px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 2px 6px rgba(16, 185, 129, 0.25);
            transition: all 0.2s ease;
        }

        .btn-export:hover {
            background: linear-gradient(135deg, #047857, #059669);
            box-shadow: 0 4px 10px rgba(16, 185, 129, 0.35);
            transform: translateY(-1px);
        }

        .btn-clear {
            background: #fee2e2;
            color: var(--danger);
            border: 1px solid #fca5a5;
            padding: 9px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .btn-clear:hover {
            background: #ef4444;
            color: #ffffff;
        }

        /* Table Card */
        .table-card {
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
        }

        th {
            background: #f8fafc;
            padding: 14px 20px;
            font-size: 13px;
            font-weight: 600;
            color: var(--text-muted);
            border-bottom: 1px solid var(--border);
        }

        td {
            padding: 16px 20px;
            font-size: 14px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
        }

        tr:last-child td {
            border-bottom: none;
        }

        tbody tr:hover {
            background-color: #f8fafc;
        }

        /* Rank Badges */
        .rank-badge {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 13px;
        }

        .rank-1 { background: #fef08a; color: #854d0e; border: 2px solid #facc15; }
        .rank-2 { background: #e2e8f0; color: #334155; border: 2px solid #cbd5e1; }
        .rank-3 { background: #fed7aa; color: #9a3412; border: 2px solid #fdba74; }
        .rank-other { background: #f1f5f9; color: #475569; }

        /* Status & Proctor Badges */
        .badge-status {
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
        }

        .badge-status.passed { background: #dcfce7; color: #166534; }
        .badge-status.failed { background: #fee2e2; color: #991b1b; }

        .proctor-tag {
            font-size: 12px;
            font-weight: 600;
            padding: 3px 8px;
            border-radius: 6px;
        }

        .proctor-clean { background: #eff6ff; color: var(--primary); }
        .proctor-flagged { background: #fee2e2; color: #b91c1c; }

        .btn-view-snapshots {
            background: #f1f5f9;
            color: #1e293b;
            border: 1px solid var(--border);
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
        }

        .btn-view-snapshots:hover {
            background: #e2e8f0;
            border-color: #cbd5e1;
        }

        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(4px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }

        .modal-box {
            background: #ffffff;
            border-radius: 16px;
            max-width: 780px;
            width: 90%;
            max-height: 85vh;
            overflow-y: auto;
            padding: 28px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border);
            padding-bottom: 14px;
            margin-bottom: 18px;
        }

        .modal-title { font-size: 18px; font-weight: 700; }

        .btn-close {
            background: none;
            border: none;
            font-size: 22px;
            cursor: pointer;
            color: #64748b;
        }

        .snapshot-grid-modal {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 14px;
            margin-top: 14px;
        }

        .snap-item {
            background: #0f172a;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid var(--border);
            text-align: center;
        }

        .snap-item img {
            width: 100%;
            height: 140px;
            object-fit: cover;
            display: block;
        }

        .snap-caption {
            padding: 8px;
            font-size: 11px;
            color: #cbd5e1;
            background: #0f172a;
        }
    </style>
</head>
<body>
    <nav class="admin-nav">
        <a href="dashboard.html" class="brand-logo">Exam<span>Matrix</span></a>
        <div class="nav-links">
            <a href="dashboard.html">Dashboard</a>
            <a href="questions.html">Questions</a>
            <a href="create-exam.html">Create Exam</a>
            <a href="exams.html">Exams</a>
            <a href="students.html">Students</a>
            <a href="results.html" class="active">Results</a>
        </div>
    </nav>

    <div class="container">
        <div class="header-row">
            <div class="header-title">
                <h1>Results & Live Merit Ranking</h1>
                <p>Candidate Leaderboard sorted with <strong>QuickSort</strong>, featuring proctoring photo audit inspection.</p>
            </div>
        </div>

        <!-- UI Controls Bar: Filter by Subject, Download Excel, Reset -->
        <div class="controls-bar">
            <div class="controls-left">
                <label for="subjectFilter" class="filter-label">🎯 Filter by Subject:</label>
                <select id="subjectFilter" class="subject-select" onchange="filterBySubject()">
                    <option value="All">All Subjects</option>
                    <option value="DSA">DSA</option>
                    <option value="Java">Java</option>
                    <option value="C Programming">C Programming</option>
                    <option value="DBMS">DBMS</option>
                    <option value="Aptitude">Aptitude</option>
                </select>
            </div>
            <div class="controls-right">
                <button class="btn-export" onclick="exportToExcel()" title="Export filtered rows to CSV/Excel">
                    📊 Download Excel
                </button>
                <button class="btn-clear" onclick="resetMeritList()">Reset Merit List</button>
            </div>
        </div>
        
        <div class="table-card">
            <table>
                <thead>
                    <tr>
                        <th style="width: 80px;">Rank</th>
                        <th>Student Name & Email</th>
                        <th>Examination Title</th>
                        <th>Score Obtained</th>
                        <th>Accuracy</th>
                        <th>Status</th>
                        <th>Proctoring Audit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="rankingTable"></tbody>
            </table>
        </div>
    </div>

    <!-- Interactive Proctor Snapshot Audit Modal -->
    <div class="modal-overlay" id="snapshotModal">
        <div class="modal-box">
            <div class="modal-header">
                <div>
                    <div class="modal-title" id="modalStudentName">Proctoring Audit Log</div>
                    <div style="font-size:12px; color:var(--text-muted);" id="modalExamTitle">Candidate Camera Timeline</div>
                </div>
                <button class="btn-close" onclick="closeSnapshotModal()">&times;</button>
            </div>
            <div id="modalSnapshotsContent"></div>
        </div>
    </div>

    <!-- Store Script -->
    <script src="../js/store.js"></script>

    <script>
        "use strict";

        let currentLeaderboard = [];

        function renderLeaderboard() {
            const rawResults = SmartStore.getResults();
            currentLeaderboard = SmartStore.quickSort(rawResults, "score", true);

            const tbody = document.getElementById("rankingTable");
            tbody.innerHTML = "";

            if (currentLeaderboard.length === 0) {
                tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #94a3b8; padding: 36px;">No examination submissions recorded yet.</td></tr>`;
                return;
            }

            currentLeaderboard.forEach((res, index) => {
                const rank = index + 1;
                let rankClass = "rank-other";
                if (rank === 1) rankClass = "rank-1";
                else if (rank === 2) rankClass = "rank-2";
                else if (rank === 3) rankClass = "rank-3";

                const passed = res.status === "Passed" || res.percentage >= 40;
                const strikes = res.proctorStrikes || 0;
                const snapshotCount = (res.proctorSnapshots || []).length;

                const proctorHtml = strikes === 0
                    ? `<span class="proctor-tag proctor-clean">✓ Verified (0 Strikes)</span>`
                    : `<span class="proctor-tag proctor-flagged">⚠️ Flagged (${strikes} Strikes)</span>`;

                tbody.innerHTML += `
                    <tr data-subject="${SmartStore.escapeHTML(res.subject || '')}">
                        <td>
                            <div class="rank-badge ${rankClass}">#${rank}</div>
                        </td>
                        <td>
                            <strong>${SmartStore.escapeHTML(res.studentName)}</strong>
                            <div style="font-size: 12px; color: var(--text-muted);">${SmartStore.escapeHTML(res.studentEmail || '')}</div>
                        </td>
                        <td>
                            <strong>${SmartStore.escapeHTML(res.examTitle)}</strong>
                            <div style="font-size: 12px; color: var(--primary);">${SmartStore.escapeHTML(res.subject || 'General')}</div>
                        </td>
                        <td>
                            <strong>${res.score}</strong> / ${res.totalMarks}
                        </td>
                        <td>
                            <strong>${res.percentage}%</strong>
                        </td>
                        <td>
                            <span class="badge-status ${passed ? 'passed' : 'failed'}">${passed ? 'PASSED' : 'FAILED'}</span>
                        </td>
                        <td>
                            ${proctorHtml}
                        </td>
                        <td>
                            <button class="btn-view-snapshots" onclick="openSnapshotModal('${res.id}')">
                                ⚠️ View Violations (${snapshotCount})
                            </button>
                        </td>
                    </tr>
                `;
            });

            // Re-apply filter if user already selected a specific subject
            filterBySubject();
        }

        /**
         * Real-time Filtering: Filters table rows dynamically based on the selected subject.
         * Checks the 'Examination Title' column for the subject name. If 'All Subjects' is selected, shows all rows.
         */
        function filterBySubject() {
            const selectEl = document.getElementById("subjectFilter");
            const selectedSubject = selectEl ? selectEl.value : "All";
            const rows = document.querySelectorAll("#rankingTable tr");

            if (rows.length === 0) return;

            let visibleCount = 0;

            rows.forEach(row => {
                // If it's the empty placeholder row, skip
                if (row.cells.length < 5) return;

                if (selectedSubject === "All" || selectedSubject === "All Subjects") {
                    row.style.display = "";
                    visibleCount++;
                } else {
                    // Check Examination Title column (column index 2, 0-indexed)
                    const examTitleText = row.cells[2] ? row.cells[2].textContent.toLowerCase() : "";
                    const subjectAttr = (row.getAttribute("data-subject") || "").toLowerCase();
                    const filterLower = selectedSubject.toLowerCase();

                    let matches = false;
                    if (filterLower === "c programming") {
                        matches = examTitleText.includes("c programming") || 
                                  examTitleText.includes("pointers") || 
                                  subjectAttr === "c" || 
                                  subjectAttr === "c programming" ||
                                  examTitleText.includes(" c ");
                    } else {
                        matches = examTitleText.includes(filterLower) || subjectAttr.includes(filterLower);
                    }

                    if (matches) {
                        row.style.display = "";
                        visibleCount++;
                    } else {
                        row.style.display = "none";
                    }
                }
            });
        }

        /**
         * Export to CSV/Excel: Downloads ONLY currently visible (filtered) rows into a CSV file.
         * Excludes the last 'Actions' column from the export.
         * Dynamic filename: ExamMatrix_{Subject}_Results.csv (e.g. ExamMatrix_DSA_Results.csv or ExamMatrix_ALL_Results.csv)
         */
        function exportToExcel() {
            const selectEl = document.getElementById("subjectFilter");
            const selectedVal = selectEl ? selectEl.value : "All";

            let subjectTag = "ALL";
            if (selectedVal && selectedVal !== "All" && selectedVal !== "All Subjects") {
                subjectTag = selectedVal.replace(/\s+/g, "_");
            }
            const fileName = `ExamMatrix_${subjectTag}_Results.csv`;

            const rows = document.querySelectorAll("#rankingTable tr");
            const visibleData = [];

            // Exclude last 'Actions' column from headers
            const headers = [
                "Rank",
                "Student Name",
                "Student Email",
                "Examination Title",
                "Score Obtained",
                "Accuracy",
                "Status"
            ];

            rows.forEach(row => {
                // Process only visible rows with actual candidate data
                if (row.style.display === "none" || row.cells.length < 6) return;

                const rank = row.cells[0] ? row.cells[0].textContent.trim().replace("#", "") : "";
                
                // Student Name & Email extraction
                let studentName = "";
                let studentEmail = "";
                if (row.cells[1]) {
                    const nameStrong = row.cells[1].querySelector("strong");
                    const emailDiv = row.cells[1].querySelector("div");
                    studentName = nameStrong ? nameStrong.textContent.trim() : row.cells[1].textContent.trim();
                    studentEmail = emailDiv ? emailDiv.textContent.trim() : "";
                }

                // Examination Title
                let examTitle = "";
                if (row.cells[2]) {
                    const examStrong = row.cells[2].querySelector("strong");
                    examTitle = examStrong ? examStrong.textContent.trim() : row.cells[2].textContent.trim();
                }

                // Score Obtained
                const score = row.cells[3] ? row.cells[3].textContent.trim().replace(/\s+/g, " ") : "";

                // Accuracy
                const accuracy = row.cells[4] ? row.cells[4].textContent.trim() : "";

                // Status
                const status = row.cells[5] ? row.cells[5].textContent.trim() : "";

                visibleData.push([
                    rank,
                    studentName,
                    studentEmail,
                    examTitle,
                    score,
                    accuracy,
                    status
                ]);
            });

            if (visibleData.length === 0) {
                alert("No visible records to export for the selected subject filter.");
                return;
            }

            // Construct CSV string
            let csvContent = "\uFEFF"; // UTF-8 BOM for Excel compatibility
            csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",") + "\r\n";

            visibleData.forEach(rowArr => {
                csvContent += rowArr.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",") + "\r\n";
            });

            // Trigger file download
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }

        function openSnapshotModal(resultId) {
            const res = currentLeaderboard.find(r => r.id === resultId);
            if (!res) return;

            document.getElementById("modalStudentName").textContent = `Security Violation Audits: ${res.studentName}`;
            document.getElementById("modalExamTitle").textContent = `${res.examTitle} • Total ${res.proctorStrikes} Strike(s) Recorded`;

            const content = document.getElementById("modalSnapshotsContent");
            const snapshots = res.proctorSnapshots || [];

            if (snapshots.length === 0) {
                content.innerHTML = `<div style="padding: 28px; text-align: center; color: #166534; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">✓ Clean Examination: No integrity violation snapshots recorded for this candidate.</div>`;
            } else {
                let html = `<div class="snapshot-grid-modal">`;
                snapshots.forEach(s => {
                    const isViolation = s.type === "violation" || (s.label || "").toLowerCase().includes("violation");
                    const imgSrc = s.image || s.dataUrl || "";
                    
                    let visual = "";
                    if (imgSrc && imgSrc.startsWith("data:image")) {
                        visual = `<img src="${imgSrc}" alt="Proctor Snapshot" />`;
                    } else {
                        visual = `
                            <div style="height:140px; background:#1e293b; display:flex; align-items:center; justify-content:center; flex-direction:column; color:${isViolation ? '#ef4444' : '#38bdf8'}; font-size:12px; gap:6px;">
                                <span style="font-size:26px;">👤</span>
                                <span>${SmartStore.escapeHTML(s.label || 'Snapshot')}</span>
                            </div>
                        `;
                    }

                    html += `
                        <div class="snap-item">
                            ${visual}
                            <div class="snap-caption">
                                <div style="color:${isViolation ? '#f87171' : '#38bdf8'}; font-weight:700;">
                                    ${isViolation ? '⚠️ ' : '📸 '} ${SmartStore.escapeHTML(s.label || 'Periodic')}
                                </div>
                                <div style="color:#94a3b8; font-size:10px; margin-top:2px;">${s.timestamp || ''}</div>
                            </div>
                        </div>
                    `;
                });
                html += `</div>`;
                content.innerHTML = html;
            }

            document.getElementById("snapshotModal").style.display = "flex";
        }

        function closeSnapshotModal() {
            document.getElementById("snapshotModal").style.display = "none";
        }

        // Close on background click
        document.getElementById("snapshotModal").addEventListener("click", function(e) {
            if (e.target === this) closeSnapshotModal();
        });

        function resetMeritList() {
            if (confirm("Are you sure you want to reset all test submissions?")) {
                SmartStore.clearResults();
                renderLeaderboard();
            }
        }

        renderLeaderboard();
    </script>
</body>
</html>
```

---

