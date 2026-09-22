const bouton = document.getElementById("generer");
const champPrompt = document.getElementById("prompt");
const champStyle = document.getElementById("style");
const champFormat = document.getElementById("format");
const champDuree = document.getElementById("duree");
const statut = document.getElementById("statut");
const resume = document.getElementById("resume");
const details = document.getElementById("details");

bouton.addEventListener("click", function () {

    const prompt = champPrompt.value.trim();
    const style = champStyle.value;
    const format = champFormat.value;
    const duree = champDuree.value;

    if (prompt.length < 5) {

        statut.textContent =
            "⚠️ Écris une description d'au moins 5 caractères.";

        resume.hidden = true;

        return;
    }

    details.textContent =
        "Description : " + prompt +
        " | Style : " + style +
        " | Format : " + format +
        " | Durée : " + duree + " secondes.";

    resume.hidden = false;

    statut.textContent =
        "✅ Ta demande est préparée. La connexion au service vidéo IA reste à effectuer.";
});
