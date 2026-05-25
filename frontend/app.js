const chatArea =
  document.querySelector(".chat-area");

function addMessage(text, type) {

  const message =
    document.createElement("div");

  message.classList.add(
    "message",
    type
  );

  message.innerText = text;

  chatArea.appendChild(message);

  chatArea.scrollTop =
    chatArea.scrollHeight;
}

function sendCommand() {

  const input =
    document.getElementById("prompt");

  const command =
    input.value.trim();

  if (!command) return;

  addMessage(command, "user");

  input.value = "";

  processCommand(command);
}

function processCommand(command) {

  const lower =
    command.toLowerCase();

  const browser =
    document.getElementById("browserFrame");

  // SIMPLE AI COMMANDS

  if (
    lower.includes("youtube")
  ) {

    browser.src =
      "https://www.youtube.com";

    addMessage(
      "Opening YouTube...",
      "ai"
    );

  } else if (
    lower.includes("google")
  ) {

    browser.src =
      "https://www.google.com";

    addMessage(
      "Opening Google...",
      "ai"
    );

  } else if (
    lower.includes("github")
  ) {

    browser.src =
      "https://github.com";

    addMessage(
      "Opening GitHub...",
      "ai"
    );

  } else if (
    lower.includes("reddit")
  ) {

    browser.src =
      "https://reddit.com";

    addMessage(
      "Opening Reddit...",
      "ai"
    );

  } else {

    addMessage(
      "I don't know that command yet.",
      "ai"
    );
  }
}