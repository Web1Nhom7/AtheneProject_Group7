var loadCover = function(event) {
    var cover = document.getElementById('cover-image');
    cover.src = URL.createObjectURL(event.target.files[0]);
    cover.onload = function() {
        URL.revokeObjectURL(cover.src)
    }
};
var loadAvatar = function(event) {
    var avatar = document.getElementById('user-avatar');
    avatar.src = URL.createObjectURL(event.target.files[0]);
    avatar.onload = function() {
        URL.revokeObjectURL(avatar.src)
    }
};