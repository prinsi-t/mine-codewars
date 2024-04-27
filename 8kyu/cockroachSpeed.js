function cockroachSpeed(s) {
    // Convert km/h to cm/s
    const cmPerSec = (s * 100000 / 3600);
    return Math.floor(cmPerSec);
}