* {
  box-sizing: border-box;
}

:root {
  --bg: #f3f7fb;
  --panel: #ffffff;
  --panel-alt: #eef5ff;
  --text: #1f2a37;
  --muted: #5d6b7b;
  --primary: #0b5ed7;
  --primary-dark: #0948a5;
  --accent: #55c1a7;
  --border: #dfe7f1;
  --shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", sans-serif;
  background: linear-gradient(180deg, #edf5ff 0%, #f9fbff 100%);
  color: var(--text);
}

button,
input {
  font: inherit;
}

.page-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 20px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--primary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 700;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 24px;
}

.hero {
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: linear-gradient(135deg, rgba(11,94,215,0.08), rgba(85,193,167,0.1));
}

.label {
  margin-bottom: 10px;
  font-size: 0.8rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}

#vehicleSummary {
  margin-bottom: 0;
  max-width: 560px;
  line-height: 1.6;
  color: var(--muted);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(90px, 1fr));
  gap: 12px;
  min-width: min(100%, 300px);
}

.stats div {
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border);
}

.stats span {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  margin-bottom: 8px;
}

.stats strong {
  font-size: 1.5rem;
}

.form-card,
.list-card {
  min-height: 220px;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

input {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  outline: none;
  border-color: rgba(11, 94, 215, 0.6);
  box-shadow: 0 0 0 4px rgba(11, 94, 215, 0.08);
}

.primary-button,
.secondary-button,
.ghost-button {
  border: none;
  border-radius: 12px;
  padding: 11px 16px;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.primary-button {
  background: var(--primary);
  color: #fff;
  font-weight: 700;
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover {
  transform: translateY(-1px);
}

.secondary-button {
  background: var(--panel-alt);
  color: var(--primary-dark);
  font-weight: 600;
}

.ghost-button {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
}

.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #f8fbff;
  border: 1px solid var(--border);
}

.task-item input[type='checkbox'] {
  width: 18px;
  height: 18px;
  accent-color: var(--accent);
}

.task-item.completed {
  background: #edfdf7;
  border-color: rgba(85, 193, 167, 0.5);
}

.task-item.completed .task-label {
  text-decoration: line-through;
  color: var(--muted);
}

@media (max-width: 760px) {
  .dashboard {
    grid-template-columns: 1fr;
  }

  .hero {
    grid-column: span 1;
    flex-direction: column;
    align-items: flex-start;
  }

  .field-row {
    grid-template-columns: 1fr;
  }

  .topbar,
  .list-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
