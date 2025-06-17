async function fetchRepairHistory() {
  const userId = "USER123"; // Replace with dynamic user auth
  const timeline = document.getElementById("repairTimeline");

  try {
    const res = await fetch(`http://localhost:5000/api/repairs?userId=${userId}`);
    const data = await res.json();

    if (data.length === 0) {
      timeline.innerHTML = "<p>No repairs found.</p>";
    } else {
      data.forEach(entry => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="timeline-card">
            <h3>${entry.title}</h3>
            <p>Date: ${entry.date}</p>
            <p>Status: ${entry.status}</p>
          </div>
        `;
        timeline.appendChild(li);
      });
    }
  } catch (err) {
    timeline.innerHTML = "<p>Error fetching repair history.</p>";
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", fetchRepairHistory);
