.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  z-index: 100;
  transition: top 0.2s ease-in-out;
}

.skip-link:focus {
  top: 0;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid #0b63ce;
  outline-offset: 2px;
}

.hint {
  font-size: 0.85rem;
  color: #555;
}

.form-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.radio-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

fieldset {
  margin-bottom: 1rem;
}