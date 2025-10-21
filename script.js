document.addEventListener("DOMContentLoaded", () => {
  const infoButton = document.getElementById("infoButton");

  if (infoButton) {
    infoButton.addEventListener("click", () => {
      alert("Ydon ist ein Schulprojekt in Kooperation mit der ITPRO Consulting & Software GmbH in Linz. Ziel ist die Entwicklung einer mobilen Stundenbuchungs-App für Microsoft Dynamics 365.");
    });
  }
});
