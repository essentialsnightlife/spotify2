import {sessionCookie} from "./constants";

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