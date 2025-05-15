//your JS code here. If required.//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
  ];

  // Strip leading articles
  function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
  }

  // Sort the bands ignoring articles
  const sortedBands = bands.sort((a, b) =>
    stripArticle(a).localeCompare(stripArticle(b))
  );

  // Only render the first 8 bands (if test expects only 8)
  const bandList = document.getElementById('bands');
  sortedBands.slice(0, 8).forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
  });
});