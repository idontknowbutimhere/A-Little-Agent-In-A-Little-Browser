const express =
  require("express");

const path =
  require("path");

const { chromium } =
  require("playwright");

const app =
  express();

const PORT =
  process.env.PORT || 3000;

app.use(express.json());

// FRONTEND

app.use(
  express.static(
    path.join(__dirname, "../frontend")
  )
);

// AI COMMAND ENDPOINT

app.post("/command", async (req, res) => {

  const command =
    req.body.command
      .toLowerCase();

  try {

    const browser =
      await chromium.launch({

        headless: true
      });

    const page =
      await browser.newPage();

    // GOOGLE SEARCH

    if (
      command.startsWith("google ")
    ) {

      const query =
        command.replace(
          "google ",
          ""
        );

      await page.goto(
        "https://google.com"
      );

      await page.fill(
        'textarea[name="q"]',
        query
      );

      await page.keyboard.press(
        "Enter"
      );

      await page.waitForTimeout(
        3000
      );

      const title =
        await page.title();

      await browser.close();

      return res.json({

        reply:
          `Searched Google for "${query}"`,
        title
      });
    }

    // UNKNOWN

    await browser.close();

    res.json({

      reply:
        "Unknown command."
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      reply:
        "Agent error."
    });
  }
});

// START SERVER

app.listen(PORT, () => {

  console.log(
    `AI Browser running on port ${PORT}`
  );
});