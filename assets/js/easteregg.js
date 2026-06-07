document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("terminal-overlay");
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");

  // If the terminal HTML isn't on this page, stop safely
  if (!overlay || !input || !output) {
    console.warn("Terminal Easter Egg: No terminal HTML found on this page.");
    return;
  }

  // Konami Code sequence
  const konami = [
    "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
    "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
    "b","a"
  ];
  let konamiPosition = 0;

  // Detect Konami Code
  document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === konami[konamiPosition]) {
      konamiPosition++;
      if (konamiPosition === konami.length) {
        overlay.style.display = "block";
        input.focus();
        konamiPosition = 0;
      }
    } else {
      konamiPosition = 0;
    }
  });

  // Terminal input handler
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      handleCommand(cmd);
      input.value = "";
    }
  });

  // Command logic
  function handleCommand(cmd) {
    switch (cmd.toLowerCase()) {
      case "help":
        print("Available commands:\nhelp\nstatus\ncoffee\nclear\nexit\njoke\nuptime\nmeaningoflife?\nscan\ndiagnose");
        break;

      case "status":
        print("All systems operational.");
        break;

      case "coffee":
        print("Brewing... ERROR: No coffee detected. Caffine low.");
        break;

      case "clear":
        output.textContent = "";
        break;

      case "exit":
        overlay.style.display = "none";
        break;

     case "joke":
        print("Why do programmers hate nature? Too many bugs.");
        break;

     case "uptime":
        print("System Uptime: 420 days, 69 hours, 21 minutes.");
        break;

     case "meaningoflife?":
        print("42");
        break;

     case "scan":
        print("Scanning local network...");
        setTimeout(() => print("Found device: DESKTOP-3Q67JPL (192.168.1.23)"), 800);
        setTimeout(() => print("Found device: SMART-TV  (192.168.1.44)"), 1500);
        setTimeout(() => print("Scan complete."), 2200);
        break;

     case "diagnose":
        print("Running diagnostics...");
        setTimeout(() => print("CPU: OK"), 700);
        setTimeout(() => print("RAM: OK"), 1200);
        setTimeout(() => print("User: Questionable"), 1800);
        break;

     case "whoami":
        print("You are a curious human exploring hidden systems.");
        break;

     case "encrypt":
            const body = document.body;
            const original = body.innerText;
            body.innerText = original
                .split("")
                .map(() => String.fromCharCode(33 + Math.random() * 94))
                .join("");
            setTimeout(() => body.innerText = original, 1000);
            print("Encryption simulation complete.");
            break;

     


        
      default:
        print("Unknown command: " + cmd);

     
        
    }
  }

  // Print to terminal
  function print(text) {
    output.textContent += "\n" + text;
  }
});
