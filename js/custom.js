// pannellum.viewer('panorama', {
//     "type": "equirectangular",
//     "panorama": "https://pannellum.org/images/alma.jpg",
//     "autoLoad": true,
//     "autoRotate": -6
// });

viewer = pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "panorama1",
        "author": "IGB SOFT",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "autoRotate": 6
        // "tileResolution": 512,
        // "maxLevel": 6,
        // "cubeResolution": 8432
    },

    "scenes": {
        "panorama1": {
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
                    "sceneId": "panorama2",
                    "scale": true
                },
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "info",
                    "text": "",
                    "scale": true,
                    "text": "Để ghi nhớ công ơn nữ Anh hùng liệt sỹ Võ Thị Sáu và nhằm giáo dục truyền thống cách mạng cho thế hệ trẻ, năm 1980, Huyện ủy, UBND huyện Long Đất (nay là huyện Long Điền và Đất Đỏ) đã xây dựng công viên, tượng đài Anh hùng liệt sỹ Võ Thị Sáu trên khu đất có diện tích 4.100 m2 tại thị trấn Đất Đỏ. Trong công viên có đặt bức tượng bằng đồng cao 7m, khắc họa hình ảnh chị Sáu ngẩng cao đầu, hiên ngang ra pháp trường"
                    // "clickHandlerFunc": () => showInfobox("Để ghi nhớ công ơn nữ Anh hùng liệt sỹ Võ Thị Sáu và nhằm giáo dục truyền thống cách mạng cho thế hệ trẻ, năm 1980, Huyện ủy, UBND huyện Long Đất (nay là huyện Long Điền và Đất Đỏ) đã xây dựng công viên, tượng đài Anh hùng liệt sỹ Võ Thị Sáu trên khu đất có diện tích 4.100 m2 tại thị trấn Đất Đỏ. Trong công viên có đặt bức tượng bằng đồng cao 7m, khắc họa hình ảnh chị Sáu ngẩng cao đầu, hiên ngang ra pháp trường"),
                    // "clickHandlerArgs": "args",
                }
            ]
        },

        "panorama2": {
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
                    "sceneId": "panorama1"
                },
                {
                    "pitch": -20,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Tượng đài Võ Thị Sáu",
                    "sceneId": "panorama3"
                }
            ]
        },
        "panorama3": {
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
                    "sceneId": "panorama2",
                    "scale": 10
                },
                {
                    "pitch": -12,
                    "yaw": 15,
                    "type": "info",
                    "text": "Tượng chị Võ Thị Sáu được đúc bằng đồng, cao 7m, tạo theo thế ung dung ra pháp trường, tà áo vẫn tung bay trong gió. Các đoàn khách viếng thăm đều không khỏi bùi ngùi, xúc động trước phong thái hiên ngang, bất khuất, kiên cường của nữ anh hùng."
                },
                {
                    "pitch": -20,
                    "yaw": 45,
                    "type": "scene",
                    "text": "Khu tưởng niệm",
                    "sceneId": "panorama4"
                }
            ]
        },
        "panorama4": {
            "title": "Khu tưởng niệm",
            "hfov": 1100,
            "yaw": 5,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "https://igb-api.onrender.com/uploads/images/panorama4.jpeg",
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": -175,
                    "type": "scene",
                    "text": "Tượng đài Võ Thị Sáu",
                    "sceneId": "panorama3",
                    "scale": 10
                },
                {
                    "pitch": -24,
                    "yaw": 25,
                    "type": "info",
                    "text": "Năm 2001, huyện Đất Đỏ xây dựng Đền thờ Võ Thị Sáu ngay phía sau tượng đài, trưng bày tư liệu hình ảnh về cuộc đời của chị Sáu từ lúc bắt đầu tham gia cách mạng cho đến khi bị bắt, hy sinh và các hình ảnh liên quan của huyện qua các thời kỳ. Đền thờ là nơi người dân trên cả nước có thể đến phúng viếng, tưởng niệm nữ anh hùng, đến đây du khách như được tìm về những trang sử vẻ vang của dân tộc, để chúng ta thêm tự hào về nước Việt Nam ta, lịch sử dân tộc ta, giúp thêm yêu và quý trọng cuộc sống của chính bản thân mình.",
                    "scale": 10
                },
                {
                    "pitch": -24,
                    "yaw": -10,
                    "type": "scene",
                    "text": "Đền thờ chính điện",
                    "sceneId": "panorama5",
                    "scale": 10
                }
            ]
        },
        "panorama5": {
            "title": "Đền thờ chính điện",
            "hfov": 1100,
            "yaw": 5,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "https://igb-api.onrender.com/uploads/images/panorama5.jpg",
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": -10,
                    "type": "scene",
                    "text": "Khu tưởng niệm",
                    "sceneId": "panorama4",
                    "scale": 10
                },
                {
                    "pitch": -20,
                    "yaw": -50,
                    "type": "scene",
                    "text": "Khu tưởng niệm 1",
                    "sceneId": "panorama6",
                    "scale": 10
                },
                {
                    "pitch": -20,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Khu tưởng niệm 2",
                    "sceneId": "panorama7",
                    "scale": 10
                }
            ]
        },
        "panorama6": {
            "title": "Khu tưởng niệm 1",
            "hfov": 1100,
            "yaw": 5,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "https://igb-api.onrender.com/uploads/images/panorama6.jpeg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": -100,
                    "type": "info",
                    "text": "Đây là nơi trưng bày tư liệu hình ảnh về cuộc đời của chị Võ Thị Sáu từ khi bắt đầu tham gia cách mạng cho đến khi bị bắt và hy sinh. Đến đây, người dân và du khách có thể tiếp cận các thông tin chính xác về người nữ Anh hùng liệt sĩ của quê hương Đất Đỏ.",
                    "scale": 10
                },
                {
                    "pitch": -20,
                    "yaw": -150,
                    "type": "scene",
                    "text": "Đền thờ chính điện",
                    "sceneId": "panorama5",
                    "scale": 10
                },
                {
                    "pitch": -15,
                    "yaw": -180,
                    "type": "scene",
                    "text": "Khu tưởng niệm 2",
                    "sceneId": "panorama7",
                    "scale": 10
                },
                {
                    "pitch": -25,
                    "yaw": -200,
                    "type": "scene",
                    "text": "Khu tưởng niệm",
                    "sceneId": "panorama4",
                    "scale": 10
                }
            ]
        },
        "panorama7": {
            "title": "Khu tưởng niệm 2",
            "hfov": 1100,
            "yaw": 5,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "https://igb-api.onrender.com/uploads/images/panorama7.jpeg",
            "hotSpots": [
                {
                    "pitch": -6,
                    "yaw": 90,
                    "type": "info",
                    "text": "Nơi đây trưng bày các tư liệu hình ảnh của huyện Đất Đỏ anh hùng qua các thời kỳ kháng chiến, ghi dấu về một thời oanh liệt trong đấu tranh cách mạng của quân và dân ta.",
                    "scale": 10
                },
                {
                    "pitch": -30,
                    "yaw": -120,
                    "type": "scene",
                    "text": "Đền thờ chính điện",
                    "sceneId": "panorama5",
                    "scale": 10
                },
                {
                    "pitch": -10,
                    "yaw": -100,
                    "type": "scene",
                    "text": "Khu tưởng niệm 1",
                    "sceneId": "panorama5",
                    "scale": 10
                },
                {
                    "pitch": -30,
                    "yaw": -80,
                    "type": "scene",
                    "text": "Khu tưởng niệm",
                    "sceneId": "panorama4",
                    "scale": 10
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

// const modal = document.getElementById('infoboxModal');
// function showInfobox(content) {
//     $('#infoboxModal').find('.modal-body').html(content);
//     modal.style.display = "block";
// }

// document.getElementById('close').addEventListener('click', function(e) {
//     modal.style.display = "none";
// });

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }