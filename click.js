console.log("click jiesuan ing...")
function clickJiesuan() {
    let jiesuan = document.getElementById('J_Go')
    return jiesuan.classList.contains('submit-btn-disabled') ? setTimeout(clickJiesuan, 100) : jiesuan.click();
}
clickJiesuan();