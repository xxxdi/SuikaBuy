window.onload = function () {
    document.getElementById('J_SelectAllCbx1').click();

    function clickJiesuan() {
        let jiesuan = document.getElementById('J_Go')
        return jiesuan.classList.contains('submit-btn-disabled') ? location.reload() : jiesuan.click();
    }
    clickJiesuan();
}