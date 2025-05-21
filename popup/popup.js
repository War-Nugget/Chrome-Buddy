// Handles popup UI events
document.getElementById('scanBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'scan' });
});
