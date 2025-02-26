let exitBlocked = true; // প্রথমে exit ব্লক করা হলো

// ১ মিনিট (৬০ সেকেন্ড) পর exit unblock হবে
setTimeout(() => {
    exitBlocked = false;
}, 60000);

// ব্যাক, রিফ্রেশ, ক্লোজ করলে ব্লক করবে
window.onbeforeunload = function (event) {
    if (exitBlocked) {
        event.preventDefault();
        event.returnValue = "আপনি এখন বের হতে পারবেন না! ১ মিনিট অপেক্ষা করুন!";
        return event.returnValue;
    }
};

// Alt + F4 বা ট্যাব ক্লোজ করলে কাজ করবে
document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey && event.key === "w") || event.key === "F5") {
        event.preventDefault();
        alert("🚨 WARNING! আপনি বের হতে পারবেন না!");
    }
});

// ভয়ংকর ইফেক্ট চালু করবে
function scaryPrank() {
    document.documentElement.requestFullscreen().catch(() => {});
    let sound = document.getElementById("scarySound");
    sound.play();

    // ৫ সেকেন্ড পর ভয়ংকর ছবি দেখাবে
    setTimeout(() => {
        document.getElementById("scaryImage").style.display = "block";
    }, 5000);

    // বারবার Vibrate + Alert + ব্যাকগ্রাউন্ড পরিবর্তন করবে
    setInterval(() => {
        window.navigator.vibrate([500, 300, 500, 300, 500]);
        alert("Critical System Failure! Data Breach Detected!");
        document.body.style.background = document.body.style.background === 'black' ? 'red' : 'black';
    }, 3000);

    // স্ক্রিন এলোমেলোভাবে নড়াচড়া করবে
    setInterval(() => {
        window.moveBy(Math.random() * 50, Math.random() * 50);
    }, 50);

    // টাইটেল বার বার পরিবর্তন হবে
    setInterval(() => {
        document.title = document.title === "⚠️ SYSTEM HACKED ⚠️" ? "HACKED!!!" : "⚠️ SYSTEM HACKED ⚠️";
    }, 300);

    // ভয়ংকর মেসেজ লুপ করবে
    let messages = [
        "🔴 Accessing personal files...",
        "⚠️ Deleting all data...",
        "💀 Bank account compromised!",
        "📍 Your location is being tracked...",
        "🚨 Webcam access granted!"
    ];
    let index = 0;
    setInterval(() => {
        document.getElementById("autoText").innerText = messages[index];
        index = (index + 1) % messages.length;
    }, 2500);

    // ১৫ সেকেন্ড পর "SYSTEM SHUTTING DOWN..." দেখাবে
    setTimeout(() => {
        document.body.innerHTML = "<h1 style='color: red; font-size: 43px;'>SYSTEM SHUTTING DOWN...</h1>";
        setTimeout(() => {
            document.body.style.background = 'black';
        }, 2000);
    }, 15000);
}

// পেজ লোড হলে ৩ সেকেন্ড পর ভয়ংকর ইফেক্ট চালু হবে
setTimeout(scaryPrank, 3000);