export const osProfiles = {
  macos: {
    name: "macOS",
    variants: ["macOS Sequoia (MacBook Air/Pro)", "macOS Studio (Mac Studio/Pro)"],
    description: "You have the budget, appreciate sleek design, and want things to work seamlessly within the Apple ecosystem."
  },
  windows: {
    name: "Windows",
    variants: ["Windows 11 Home/Pro", "Windows 10/11 LTSC (Bloat-free)", "AtlasOS / Tiny11 (For Gaming & Low-End)"],
    description: "The king of compatibility and gaming. Everything runs here, even if it forces an update while you're working."
  },
  linux_beginner: {
    name: "Linux (User-Friendly)",
    variants: ["Linux Mint", "Ubuntu", "Zorin OS", "Pop!_OS"],
    description: "You want freedom, privacy, and speed without needing to live inside the terminal."
  },
  linux_hardcore: {
    name: "Linux (Power User / Geek)",
    variants: ["Arch Linux (btw)", "Fedora", "NixOS", "Gentoo"],
    description: "You love reading wikis, customizing every pixel, and telling everyone what OS you use."
  },
  chromeos: {
    name: "ChromeOS",
    variants: ["ChromeOS (Chromebook)", "ChromeOS Flex (For old PCs)"],
    description: "Fast, simple, and cloud-based. Perfect if your entire life happens inside a web browser."
  },
  bsd: {
    name: "BSD / Niche",
    variants: ["FreeBSD", "OpenBSD", "Haiku OS"],
    description: "You are a true operating system connoisseur who avoids mainstream choices."
  }
};

export const questions = [
  {
    id: 1,
    text: "First things first: Are you rich?",
    options: [
      { 
        text: "Yes, money is just paper. Give me the shiny aluminum.", 
        scores: { macos: 10, windows: 2, linux_beginner: 0, linux_hardcore: 0, chromeos: 0, bsd: 0 } 
      },
      { 
        text: "I have a decent budget, I just want good value.", 
        scores: { macos: 3, windows: 6, linux_beginner: 5, linux_hardcore: 4, chromeos: 3, bsd: 2 } 
      },
      { 
        text: "No, I'm trying to revive a laptop from 2012.", 
        scores: { macos: -10, windows: -2, linux_beginner: 8, linux_hardcore: 7, chromeos: 9, bsd: 5 } 
      }
    ]
  },
  {
    id: 2,
    text: "What is your relationship with the Terminal / Command Line?",
    options: [
      { 
        text: "I use 'sudo' in my dreams. I love typing commands.", 
        scores: { macos: 3, windows: 0, linux_beginner: 4, linux_hardcore: 10, chromeos: -5, bsd: 9 } 
      },
      { 
        text: "I can copy-paste a command if a tutorial tells me to.", 
        scores: { macos: 4, windows: 4, linux_beginner: 8, linux_hardcore: 3, chromeos: 1, bsd: 2 } 
      },
      { 
        text: "If I see a black screen with white text, I panic.", 
        scores: { macos: 7, windows: 7, linux_beginner: 4, linux_hardcore: -10, chromeos: 9, bsd: -10 } 
      }
    ]
  },
  {
    id: 3,
    text: "How important is PC Gaming to you?",
    options: [
      { 
        text: "Very! I play AAA titles and competitive games with Anti-Cheat (Valorant, Fortnite, CoD).", 
        scores: { macos: -5, windows: 10, linux_beginner: -2, linux_hardcore: -2, chromeos: -10, bsd: -10 } 
      },
      { 
        text: "I play single-player or Steam games. Proton/Steam Deck compatibility is fine.", 
        scores: { macos: 1, windows: 7, linux_beginner: 7, linux_hardcore: 7, chromeos: -5, bsd: -5 } 
      },
      { 
        text: "I don't game at all (or just browser games).", 
        scores: { macos: 6, windows: 3, linux_beginner: 6, linux_hardcore: 6, chromeos: 8, bsd: 6 } 
      }
    ]
  },
  {
    id: 4,
    text: "How do you feel about Big Tech collecting your data?",
    options: [
      { 
        text: "I wear a tinfoil hat. Open-source or nothing!", 
        scores: { macos: -2, windows: -5, linux_beginner: 7, linux_hardcore: 10, chromeos: -8, bsd: 10 } 
      },
      { 
        text: "I care a little, so I disable telemetry when I can.", 
        scores: { macos: 4, windows: 4, linux_beginner: 7, linux_hardcore: 5, chromeos: 1, bsd: 4 } 
      },
      { 
        text: "I have nothing to hide. Just give me convenience.", 
        scores: { macos: 7, windows: 7, linux_beginner: 2, linux_hardcore: 0, chromeos: 9, bsd: 0 } 
      }
    ]
  },
  {
    id: 5,
    text: "When your OS breaks, how do you want to fix it?",
    options: [
      { 
        text: "Spend 4 hours reading documentation and compiling kernels.", 
        scores: { macos: -5, windows: -5, linux_beginner: 1, linux_hardcore: 10, chromeos: -10, bsd: 10 } 
      },
      { 
        text: "Restart the computer and hope it goes away.", 
        scores: { macos: 6, windows: 8, linux_beginner: 6, linux_hardcore: 0, chromeos: 7, bsd: 0 } 
      },
      { 
        text: "Walk into a store and have a 'Genius' fix it for me.", 
        scores: { macos: 10, windows: 3, linux_beginner: -5, linux_hardcore: -10, chromeos: 4, bsd: -10 } 
      }
    ]
  },
  {
    id: 6,
    text: "What software do you NEED for work or school?",
    options: [
      { 
        text: "Adobe Creative Cloud (Photoshop, Premiere) or MS Office.", 
        scores: { macos: 9, windows: 9, linux_beginner: -5, linux_hardcore: -5, chromeos: -3, bsd: -8 } 
      },
      { 
        text: "Docker, Python, VS Code, Git, and server tools.", 
        scores: { macos: 7, windows: 4, linux_beginner: 8, linux_hardcore: 10, chromeos: 1, bsd: 8 } 
      },
      { 
        text: "Google Docs, YouTube, Netflix, and Spotify.", 
        scores: { macos: 5, windows: 5, linux_beginner: 7, linux_hardcore: 4, chromeos: 10, bsd: 4 } 
      }
    ]
  }
];
