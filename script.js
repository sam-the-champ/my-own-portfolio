// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Resume Download
function downloadResume() {
    const resumeUrl = "https://docs.google.com/document/d/1F9WvV3NI8IFkQ7MHoEUKD6Xfz-G_IczI1r6f1NqkIWw/edit?usp=drivesdk"; // Replace with actual resume file
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Olalekan_Samson_Ogundimu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
