function calculateExponent() {
    const base = document.getElementById("base").value;
    const exponent = document.getElementById("exponent").value;
    const result = Math.pow(base, exponent);

    document.getElementById("result").innerHTML = base + " ยกกำลัง " + exponent + " = " + result;
}
function calculateExponent() {
    let a = document.getElementById('base').value;
    let m = document.getElementById('exponent1').value;
    let n = document.getElementById('exponent2').value;

    a = Number(a);
    m = Number(m);
    n = Number(n);

    if (isNaN(a) || isNaN(m) || isNaN(n)) {
        alert('กรุณาใส่ฐานและเลขชี้กำลังทั้งหมดเป็นตัวเลข!');
        return;
    }
    if (a === 0 && (n < 0)) {
        alert('ไม่สามารถยกกำลังเลขชี้กำลังลบด้วยฐาน 0!');
        return;
    }

    let result = exponent_properties(a, m, n);
    document.getElementById('result').innerHTML = result;
}
