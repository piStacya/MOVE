const params = new URLSearchParams(window.location.search);

document.querySelectorAll('[data-field]').forEach((element) => {
  const value = params.get(element.dataset.field)?.trim();

  if (value) {
    element.textContent = value;
  }
});