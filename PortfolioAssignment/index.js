function showSection(name) {
    document.getElementById("home-section").style.display = name === 'home' ? "block" : "none";
    document.getElementById("about-section").style.display = name === 'about' ? "block" : "none";
  }
  function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById("themeIcon");
    const logoIcon = document.getElementById("logoIcon");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      icon.src = "icons/Sun.png"; 
      logoIcon.src = "icons/Vector-white.png";
    } else {
      icon.src = "icons/Moon.png";
      logoIcon.src = "icons/Vector.png";
    }
  }