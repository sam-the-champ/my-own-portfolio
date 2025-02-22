// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Resume Download
function downloadResume() {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1RPcEeQ7Bzwe7ddAln8lmP0Gd_iuDYTmP";
    const driveViewUrl = "https://drive.google.com/file/d/1RPcEeQ7Bzwe7ddAln8lmP0Gd_iuDYTmP/view?usp=sharing";

    // Try direct download
    fetch(resumeUrl)
        .then(response => {
            if (!response.ok) throw new Error("Network issue");
            return response.blob();
        })
        .then(blob => {
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "Olalekan_Samson_Ogundimu_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => {
            console.error("Download failed:", error);
            alert("Download failed. Opening in a new tab...");
            window.open(driveViewUrl, "_blank");
        });
}
