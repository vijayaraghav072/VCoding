<template>
  <div class="login-visual-panel" aria-hidden="true">
    <div class="login-visual-content">

      <div class="login-visual-glow login-visual-glow--1"></div>
      <div class="login-visual-glow login-visual-glow--2"></div>
      <div class="login-visual-glow login-visual-glow--3"></div>

      <div class="login-visual-text">
        <h2 class="login-visual-title">Build. Learn. Master.</h2>
        <p class="login-visual-subtitle">Everything you need to become a better developer.</p>
      </div>

      <div class="login-visual-scene">
        <div class="login-visual-dev">
          <svg class="login-dev-illustration" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="220" width="280" height="12" rx="6" fill="#1a3a7a" opacity="0.5"/>
            <rect x="120" y="80" width="160" height="110" rx="10" fill="#0e2d6a" stroke="#2a5ab8" stroke-width="1.5"/>
            <rect x="130" y="90" width="140" height="85" rx="4" fill="#0a1e4a"/>
            <rect x="140" y="100" width="60" height="4" rx="2" fill="#c792ea" opacity="0.8"/>
            <rect x="205" y="100" width="40" height="4" rx="2" fill="#82aaff" opacity="0.7"/>
            <rect x="140" y="112" width="45" height="4" rx="2" fill="#c3e88d" opacity="0.7"/>
            <rect x="190" y="112" width="55" height="4" rx="2" fill="#f78c6c" opacity="0.6"/>
            <rect x="150" y="124" width="70" height="4" rx="2" fill="#82aaff" opacity="0.7"/>
            <rect x="150" y="136" width="50" height="4" rx="2" fill="#c792ea" opacity="0.6"/>
            <rect x="205" y="136" width="35" height="4" rx="2" fill="#c3e88d" opacity="0.5"/>
            <rect x="140" y="148" width="80" height="4" rx="2" fill="#89ddff" opacity="0.6"/>
            <rect x="140" y="160" width="30" height="4" rx="2" fill="#f78c6c" opacity="0.7"/>
            <rect x="185" y="190" width="30" height="30" rx="2" fill="#1a3a7a" opacity="0.6"/>
            <rect x="170" y="216" width="60" height="6" rx="3" fill="#1a3a7a" opacity="0.5"/>
            <rect x="145" y="234" width="110" height="22" rx="4" fill="#1a3a7a" opacity="0.4" stroke="#2a5ab8" stroke-width="0.5"/>
            <rect x="152" y="238" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="163" y="238" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="174" y="238" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="185" y="238" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="196" y="238" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="207" y="238" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="218" y="238" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="229" y="238" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="240" y="238" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="155" y="246" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="166" y="246" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="177" y="246" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="188" y="246" width="36" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="227" y="246" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="238" y="246" width="8" height="5" rx="1" fill="#2a5ab8" opacity="0.3"/>
            <rect x="290" y="222" width="22" height="24" rx="4" fill="#1a3a7a" opacity="0.5" stroke="#2a5ab8" stroke-width="0.8"/>
            <path d="M312 230 c6 0 6 8 0 8" stroke="#2a5ab8" stroke-width="0.8" fill="none" opacity="0.5"/>
            <path d="M296 218 c0-4 4-4 4-8" stroke="#5b9cf5" stroke-width="0.8" fill="none" opacity="0.4"/>
            <path d="M302 216 c0-4 4-4 4-8" stroke="#5b9cf5" stroke-width="0.8" fill="none" opacity="0.3"/>
            <rect x="60" y="208" width="24" height="20" rx="3" fill="#1a3a7a" opacity="0.4" stroke="#2a5ab8" stroke-width="0.5"/>
            <ellipse cx="72" cy="200" rx="12" ry="10" fill="#2a5ab8" opacity="0.25"/>
            <line x1="72" y1="200" x2="72" y2="185" stroke="#34d399" stroke-width="1.2" opacity="0.5"/>
            <ellipse cx="68" cy="186" rx="5" ry="3" fill="#34d399" opacity="0.4"/>
            <ellipse cx="76" cy="188" rx="4" ry="2.5" fill="#34d399" opacity="0.35"/>
          </svg>
        </div>

        <div class="login-float login-float--1">
          <SvgIcon icon-name="code-brackets-icon" width="36" height="36" />
        </div>
        <div class="login-float login-float--2">
          <span class="login-float-symbol">{ }</span>
        </div>
        <div class="login-float login-float--3">
          <SvgIcon icon-name="checkmark-icon" width="28" height="28" />
        </div>

        <div class="login-snippet-card">
          <div class="login-snippet-bar">
            <span class="login-snippet-dot login-snippet-dot--red"></span>
            <span class="login-snippet-dot login-snippet-dot--yellow"></span>
            <span class="login-snippet-dot login-snippet-dot--green"></span>
          </div>
          <div class="login-snippet-body">
            <span class="login-snippet-kw">const</span>
            <span class="login-snippet-ident">journey</span> = {<br />
            &nbsp;&nbsp;<span class="login-snippet-prop">goal</span>:
            <span class="login-snippet-str"> "mastery"</span>,<br />
            &nbsp;&nbsp;<span class="login-snippet-prop">start</span>:
            <span class="login-snippet-str"> "today"</span><br />
            };
          </div>
        </div>
      </div>

      <div class="login-visual-features">
        <div class="login-visual-feature-card">
          <div class="login-visual-feature-icon">
            <SvgIcon icon-name="graduation-icon" width="22" height="22" />
          </div>
          <div class="login-visual-feature-body">
            <span class="login-visual-feature-title">Structured Courses</span>
            <span class="login-visual-feature-desc">Learn step by step with experts</span>
          </div>
        </div>
        <div class="login-visual-feature-card">
          <div class="login-visual-feature-icon">
            <SvgIcon icon-name="code-brackets-icon" width="22" height="22" />
          </div>
          <div class="login-visual-feature-body">
            <span class="login-visual-feature-title">Practice Problems</span>
            <span class="login-visual-feature-desc">Sharpen your skills with challenges</span>
          </div>
        </div>
        <div class="login-visual-feature-card">
          <div class="login-visual-feature-icon">
            <SvgIcon icon-name="document-icon" width="22" height="22" />
          </div>
          <div class="login-visual-feature-body">
            <span class="login-visual-feature-title">In-depth Articles</span>
            <span class="login-visual-feature-desc">Read, learn and grow daily</span>
          </div>
        </div>
        <div class="login-visual-feature-card">
          <div class="login-visual-feature-icon">
            <SvgIcon icon-name="trophy-icon" width="22" height="22" />
          </div>
          <div class="login-visual-feature-body">
            <span class="login-visual-feature-title">Track Your Progress</span>
            <span class="login-visual-feature-desc">Monitor your growth and achievements</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/common/UI-components/SvgIcon.vue';
</script>

<style scoped>
.login-visual-panel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #0a2255 0%, #12408e 40%, #1a4fa5 70%, #0e2d6a 100%);
  overflow: hidden;
  padding: 48px 40px;
  min-height: 0;
}

.login-visual-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 480px;
}

.login-visual-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
}

.login-visual-glow--1 {
  width: 340px;
  height: 340px;
  background: rgba(91, 156, 245, 0.2);
  top: 8%;
  right: -5%;
  animation: login-glow-drift 10s ease-in-out infinite;
}

.login-visual-glow--2 {
  width: 260px;
  height: 260px;
  background: rgba(59, 111, 212, 0.18);
  bottom: 12%;
  left: 5%;
  animation: login-glow-drift 12s ease-in-out infinite reverse;
}

.login-visual-glow--3 {
  width: 180px;
  height: 180px;
  background: rgba(130, 170, 255, 0.15);
  top: 45%;
  left: 40%;
  animation: login-glow-drift 8s ease-in-out 2s infinite;
}

@keyframes login-glow-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%      { transform: translate(16px, -18px) scale(1.06); }
  66%      { transform: translate(-12px, 12px) scale(0.95); }
}

.login-visual-text {
  margin-bottom: 36px;
}

.login-visual-title {
  font-size: 2rem;
  font-weight: 700;
  color: hsl(0, 0%, 100%);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 10px;
}

.login-visual-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 340px;
  margin: 0 auto;
}

.login-visual-scene {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin-bottom: 36px;
}

.login-visual-dev {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-dev-illustration {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.3));
}

.login-float {
  position: absolute;
  color: rgba(255, 255, 255, 0.55);
  z-index: 3;
}

.login-float--1 {
  top: 8%;
  left: 5%;
  animation: login-float 6s ease-in-out infinite;
}

.login-float--2 {
  top: 15%;
  right: 2%;
  animation: login-float 7s ease-in-out 1.5s infinite;
}

.login-float--3 {
  bottom: 20%;
  right: 8%;
  animation: login-float 5.5s ease-in-out 0.8s infinite;
}

.login-float-symbol {
  font-size: 1.6rem;
  font-weight: 600;
  opacity: 0.7;
}

@keyframes login-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}

.login-snippet-card {
  position: absolute;
  bottom: 5%;
  left: 0;
  width: 180px;
  background: rgba(10, 25, 60, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.06);
  animation: login-float 8s ease-in-out 2s infinite;
  z-index: 3;
}

.login-snippet-bar {
  display: flex;
  gap: 5px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.2);
}

.login-snippet-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.login-snippet-dot--red    { background: #ff5f57; }
.login-snippet-dot--yellow { background: #ffbd2e; }
.login-snippet-dot--green  { background: #28ca42; }

.login-snippet-body {
  padding: 10px 12px;
  font-size: 0.65rem;
  line-height: 1.7;
  color: #c3cfe2;
}

.login-snippet-kw    { color: #c792ea; }
.login-snippet-ident { color: #82aaff; }
.login-snippet-prop  { color: #f78c6c; }
.login-snippet-str   { color: #c3e88d; }

.login-visual-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
}

.login-visual-feature-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(4px);
  transition: background 0.25s ease;
}

.login-visual-feature-card:hover {
  background: rgba(255, 255, 255, 0.12);
}

.login-visual-feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.85);
  flex-shrink: 0;
}

.login-visual-feature-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.login-visual-feature-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  letter-spacing: 0.01em;
}

.login-visual-feature-desc {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .login-visual-title {
    font-size: 1.65rem;
  }

  .login-visual-scene {
    height: 240px;
  }

  .login-snippet-card {
    width: 160px;
  }

  .login-visual-features {
    gap: 8px;
  }

  .login-visual-feature-card {
    padding: 10px 12px;
  }
}

@media (max-width: 860px) {
  .login-visual-features {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .login-visual-glow,
  .login-float,
  .login-snippet-card {
    animation: none;
  }
}
</style>
