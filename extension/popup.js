document.getElementById("scrape").addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: scrapeProfile
	});
      });
      
      function scrapeProfile() {
	window.dispatchEvent(new CustomEvent("RECON_SCRAPE_NOW"));
      }
      