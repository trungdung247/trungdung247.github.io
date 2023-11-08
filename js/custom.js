// pannellum.viewer('panorama', {
//     "type": "equirectangular",
//     "panorama": "https://pannellum.org/images/alma.jpg",
//     "autoLoad": true,
//     "autoRotate": -6
// });

viewer = pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "gate",
        "author": "IGB SOFT",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "autoRotate": 6
        // "tileResolution": 512,
        // "maxLevel": 6,
        // "cubeResolution": 8432
    },

    "scenes": {
        "gate": {
            "title": "Công viên Võ Thị Sáu",
            "hfov": 11000,
            "pitch": 10,
            "yaw": 30,
            "type": "equirectangular",
            "panorama": "https://igb-api.onrender.com/uploads/images/panorama1.jpg",
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": -10,
                    "type": "scene",
                    "text": "Khuôn viên chính",
                    "sceneId": "main",
                    "scale": 1
                },
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "info",
                    "text": "Để ghi nhớ công ơn nữ Anh hùng liệt sỹ Võ Thị Sáu và nhằm giáo dục truyền thống cách mạng cho thế hệ trẻ, năm 1980, Huyện ủy, UBND huyện Long Đất (nay là huyện Long Điền và Đất Đỏ) đã xây dựng công viên, tượng đài Anh hùng liệt sỹ Võ Thị Sáu trên khu đất có diện tích 4.100 m2 tại thị trấn Đất Đỏ. Trong công viên có đặt bức tượng bằng đồng cao 7m, khắc họa hình ảnh chị Sáu ngẩng cao đầu, hiên ngang ra pháp trường"
                }
            ]
        },

        "main": {
            "title": "Công viên Võ Thị Sáu",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://igb-api.onrender.com/uploads/images/panorama2.jpeg",
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": -180,
                    "type": "scene",
                    "text": "Cổng chính",
                    "sceneId": "gate"
                },
                {
                    "pitch": -20,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Tượng đài Võ Thị Sáu",
                    "sceneId": "monument"
                }
            ]
        },
        "monument": {
            "title": "Tượng đài Võ Thị Sáu",
            "hfov": 1100,
            "yaw": 5,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "https://igb-api.onrender.com/uploads/images/panorama3.jpg",
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": -175,
                    "type": "scene",
                    "text": "",
                    "sceneId": "main",
                    "scale": 10
                },
                {
                    "pitch": -12,
                    "yaw": 15,
                    "type": "info",
                    "text": "Tượng chị Võ Thị Sáu được đúc bằng đồng, cao 7m, tạo theo thế ung dung ra pháp trường, tà áo vẫn tung bay trong gió. Các đoàn khách viếng thăm đều không khỏi bùi ngùi, xúc động trước phong thái hiên ngang, bất khuất, kiên cường của nữ anh hùng."
                }
            ]
        }
    }
});

// Make buttons work
document.getElementById('pan-up').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() + 10);
});
document.getElementById('pan-down').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() - 10);
});
document.getElementById('pan-left').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() - 10);
});
document.getElementById('pan-right').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() + 10);
});
document.getElementById('zoom-in').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() - 10);
});
document.getElementById('zoom-out').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() + 10);
});
document.getElementById('fullscreen').addEventListener('click', function(e) {
    viewer.toggleFullscreen();
});