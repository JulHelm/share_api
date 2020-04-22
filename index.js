shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", async() => {
    try {
        await navigator.share({ title: "Example Page", url: "" });
        console.log("Data was shared successfully");
    } catch (err) {
        console.error("Share failed:", err.message);
    }
});