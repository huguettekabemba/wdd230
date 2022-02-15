function windchill() {
    const Temperature = document.getElementById("temp").textContent;
    const Speed1 = document.getElementById("speed").textContent;
    const Tempfar = (Temperature * (9 / 5)) + 32;

    const Speed2 = Speed1 * 0.621371;

    if (Tempfar <= 50 && Speed2 > 3) {
        const fChill = 35.74 + (0.6215 * Tempfar) - (35.75 * (Math.pow(Speed2, 0.16))) + (0.4275 * Tempfar * (Math.pow(Speed2, 0.16)));
        const chill = (fChill - 32) * (5 / 9);
        document.getElementById("chill").textContent = `Wind Chill: ${chill.toFixed(1)}°C`;
    } else {
        document.getElementById("chill").textContent = `Wind Chill: N/A`;


    }
}

windchill();