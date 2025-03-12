import {sessionCookie} from "./constants";
import {toPng} from "html-to-image";


export const onShareButtonClick = async (type= "artists", displayName="") => {
    const shareDiv = document.getElementById("shareCanvas");
    if (!shareDiv) return;

    shareDiv.setAttribute("share-type", type)
    shareDiv.setAttribute("display-name", displayName);

    try {
        // Make it temporarily visible
        shareDiv.style.display = "block";

        const titleElement = document.getElementById("shareCanvasTitle");
        if (titleElement) {
            titleElement.innerText = `Top ${type === "tracks" ? "Tracks" : "Artists"}${displayName ? ` for ${displayName}` : ""}`;
        }

        // Generate image
        const dataUrl = await toPng(shareDiv, { cacheBust: true, pixelRatio: 2 });

        // Hide again after capturing
        shareDiv.style.display = "none";

        // Create download link
        const link = document.createElement("a");
        link.download = `my-top-artists-${new Date().toLocaleString("en-UK", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        })}.png`;
        link.href = dataUrl;
        link.click();
    } catch (err) {
        alert("Error generating image. Please try again later.");
        console.error("Error generating image:", err);
    }
};

export function capitalizeFirstLetters(str: string) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function formatSelectedPeriodLabel(selectedPeriod: string) {
    return selectedPeriod
        .split("_")
        .map(word => capitalizeFirstLetters(word))
        .join(" ");
}

export function logout() {
    document.cookie = `${sessionCookie}=; max-age=0; Secure;`;
    localStorage.removeItem("verifier");
    document.location.reload();
}