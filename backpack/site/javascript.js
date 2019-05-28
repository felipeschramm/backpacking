const verificar = function (l, s) {

    if (l == "1" && s == "1") {

        return true;

    } else {

        return false;

    }

}

const login = function () {

    const t = document.getElementById("lo").value
    const senha = document.getElementById("senha").value

    if (verificar(t, senha)) {

        window.open('./inicial.html', '_blank').focus();

    } else {

        alert("Login ou senha errados")

    }

}