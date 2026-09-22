function genererVideo() {

    const prompt = document.getElementById("prompt").value;
    const statut = document.getElementById("statut");

    if (!prompt.trim()) {

        statut.innerText =
            "⚠️ Décris d'abord la vidéo que tu souhaites créer.";

        return;
    }

    statut.innerText =
        "🤖 Préparation de ta vidéo IA...";

}
