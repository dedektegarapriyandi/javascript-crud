const submitBtn = document.querySelector(".submit-btn");
const formInput = document.querySelectorAll(".form-input");

function Mahasiswa(npm, nama, prodi) {
    this.npm = npm;
    this.nama = nama;
    this.prodi = prodi;
}

Mahasiswa.prototype.addData = (e) => {
    e.preventDefault();

    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
        data = JSON.parse(localStorage.getItem("data"));
    }

    let npm;
    let nama;
    let prodi;

    formInput.forEach(form => {
        const id = form.getAttribute("id");
        if (id === "npm") {
            npm = form.value;
        }
        if (id === "nama") {
            nama = form.value;
        }
        if (id === "prodi") {
            prodi = form.value;
        }

        form.value = "";
    });

    const newMhs = new Mahasiswa(npm, nama, prodi);
    data.push(newMhs);
    localStorage.setItem("data", JSON.stringify(data));
}

Mahasiswa.prototype.getData = () => {
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
        data = JSON.parse(localStorage.getItem("data"));
    }

    
}

submitBtn.addEventListener("click", Mahasiswa.prototype.addData);
window.addEventListener("DOMContentLoaded", Mahasiswa.prototype.getData)