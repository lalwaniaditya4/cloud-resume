const counterElement = document.getElementById("counter");

let visitorId = localStorage.getItem("visitor_id");

if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem("visitor_id", visitorId);
}

fetch("https://asia-south1-resume-497517.cloudfunctions.net/visitor-counter", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        visitor_id: visitorId,
    }),
})
    .then((response) => response.json())
    .then((data) => {
        counterElement.textContent = data.count;
    })
    .catch((error) => {
        console.error(error);
        counterElement.textContent = "Error";
    });
