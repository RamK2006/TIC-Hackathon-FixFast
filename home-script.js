document.getElementById("year").textContent = new Date().getFullYear();

const suggestions = [
  { text: "TV not turning on", icon: "📺" },
  { text: "Laptop screen flickering", icon: "💻" },
  { text: "Mobile battery drains fast", icon: "🔋" },
  { text: "AC not cooling", icon: "❄️" },
  { text: "Fridge making noise", icon: "🧊" },
  { text: "Washing machine water leak", icon: "🚿" }
];

const recent = [
  { text: "Battery replacement - Mobile", icon: "🔋" },
  { text: "Display repair - TV", icon: "📺" },
  { text: "Gas refill - AC", icon: "❄️" },
  { text: "Noise issue - Washing Machine", icon: "🧺" }
];

function renderButtons(dataArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  dataArray.forEach(({ text, icon }) => {
    const button = document.createElement("button");
    button.className = "service-button";
    button.innerHTML = `${icon} ${text}`;
    button.onclick = () => {
      window.location.href = `book.html?issue=${encodeURIComponent(text)}`;
    };
    container.appendChild(button);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderButtons(suggestions, "popularSuggestions");
  renderButtons(recent, "recentServices");
});
