window.addEventListener("RECON_SCRAPE_NOW", () => {
	const hostname = window.location.hostname;
      
	if (hostname.includes("linkedin.com")) {
	  const name = document.querySelector(".text-heading-xlarge")?.innerText;
	  const title = document.querySelector(".text-body-medium")?.innerText;
	  const company = document.querySelector('[data-test-id="experience-section"] li span[aria-hidden="true"]')?.innerText;
	  const linkedinUrl = window.location.href;
      
	  sendToBackend({ name, title, company, linkedin_url: linkedinUrl });
	}
      
	if (hostname.includes("x.com")) {
	  const name = document.querySelector("div[data-testid='UserName'] span")?.innerText;
	  const title = document.querySelector("div[data-testid='UserDescription']")?.innerText;
	  const company = null;
	  const linkedinUrl = null;
	  const xUrl = window.location.href;
      
	  sendToBackend({ name, title, company, linkedin_url: linkedinUrl, x_url: xUrl });
	}
      });
      
      function sendToBackend(data) {
	fetch("http://127.0.0.1:8000/save-contact/", {
	  method: "POST",
	  headers: {
	    "Content-Type": "application/json"
	  },
	  body: JSON.stringify(data)
	})
	  .then(res => res.json())
	  .then(console.log)
	  .catch(console.error);
      }