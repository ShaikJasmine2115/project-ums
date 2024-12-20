document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
    //   alert(item.getAttribute('data-info'));
    });
  });
function showLogout() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('logoutDiv').style.display = 'block';
}

function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "ums.html";
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('logoutDiv').style.display = 'none';
}