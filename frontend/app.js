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

async function sendCommand() {

  const input =
    document.getElementById("prompt");

  const command =
    input.value.trim();

  if (!command) return;

  addMessage(command, "user");

  input.value = "";

  addMessage(
    "Running agent...",
    "ai"
  );

  try {

    const response =
      await fetch("/command", {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          command
        })
      });

    const data =
      await response.json();

    addMessage(
      data.reply,
      "ai"
    );

    if (data.title) {

      addMessage(
        `Page title: ${data.title}`,
        "ai"
      );
    }

  } catch (error) {

    addMessage(
      "Agent failed.",
      "ai"
    );
  }
}