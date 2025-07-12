import { domToPng } from 'modern-screenshot'

export const onShareButtonClick = async (type = "artists", displayName = "", period = "") => {
    const shareDiv = type === "artists"
        ? document.getElementById("shareTopArtists")
        : document.getElementById("shareTopTracks");
    if (!shareDiv) return;

    shareDiv.setAttribute("share-type", type);
    shareDiv.setAttribute("display-name", displayName);

    try {
        shareDiv.style.left = '-9999px';
        shareDiv.style.display = "block";

        // Capture the image
        const dataUrl = await domToPng(shareDiv, { pixelRatio: 2, useCORS: true });

        // Hide again after capturing
        shareDiv.style.display = "none";

        // Create download link
        const formattedDisplayName = displayName.replace(/\s+/g, "-") || "";
        const fileName = `${formattedDisplayName + "-" || ""}top-${type}-${period}-${new Date().toLocaleString("en-UK", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        })}.png`;

        const link = document.createElement("a");
        link.download = fileName;
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
    document.cookie = `session=; max-age=0; Secure;`;
    localStorage.removeItem("verifier");
    document.location.reload();
}

export function getCookie(name: string): string | null {
    const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`))
        ?.split("=")[1];
    return cookieValue || null;
}

export function setCookie(name: string, token: string) {
    document.cookie = `${name}=${token}; max-age=3600; path=/; Secure;`;
}
