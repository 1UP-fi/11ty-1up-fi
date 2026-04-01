import SPLASHES from "/splashes.json" with { type: "json" };

const CODE : string[] = Array(3).fill(["1","ArrowUp"]).flat();
let keys : string[] = [];

document.addEventListener('keyup', e=>{
    keys.push(e.key);

    if (keys.length > CODE.length) keys.shift();

    if (keys.join() == CODE.join()) {
        document.documentElement.style.setProperty("--theme", "red");
    }
});

let arr = SPLASHES.filter(s=>s!='');
let elem = document.getElementById("splash");
if (elem) elem.innerHTML = arr[Math.random()*arr.length|0];
