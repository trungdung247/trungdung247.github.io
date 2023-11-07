// pannellum.viewer('panorama', {
//     "type": "equirectangular",
//     "panorama": "https://pannellum.org/images/alma.jpg",
//     "autoLoad": true,
//     "autoRotate": -6
// });

pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "circle",
        "author": "IGB Soft",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "autoRotate": 6
        // "tileResolution": 512,
        // "maxLevel": 6,
        // "cubeResolution": 8432
    },

    "scenes": {
        "circle": {
            "title": "Công viên Võ Thị Sáu",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://igb-api.onrender.com/uploads/images/panorama1.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 37,
                    "type": "scene",
                    "text": "Cổng chính",
                    // "sceneId": "house",
                    // "scale": 1
                },
                {
                    "pitch": -6,
                    "yaw": -110,
                    "type": "info",
                    "text": "Tượng chị Võ Thị Sáu được đúc bằng đồng, cao 7m, tạo theo thế ung dung ra pháp trường, tà áo vẫn tung bay trong gió. Các đoàn khách viếng thăm đều không khỏi bùi ngùi, xúc động trước phong thái hiên ngang, bất khuất, kiên cường của nữ anh hùng."
                },
                {
                    "pitch": -0.8,
                    "yaw": -100,
                    "type": "info",
                    "text": "Năm 2001, huyện Đất Đỏ xây dựng Đền thờ Võ Thị Sáu ngay phía sau tượng đài, trưng bày tư liệu hình ảnh về cuộc đời của chị Sáu từ lúc bắt đầu tham gia cách mạng cho đến khi bị bắt, hy sinh và các hình ảnh liên quan của huyện qua các thời kỳ. Đền thờ là nơi người dân trên cả nước có thể đến phúng viếng, tưởng niệm nữ anh hùng, đến đây du khách như được tìm về những trang sử vẻ vang của dân tộc, để chúng ta thêm tự hào về nước Việt Nam ta, lịch sử dân tộc ta, giúp thêm yêu và quý trọng cuộc sống của chính bản thân mình."
                }
            ]
        },

        "house": {
            "title": "Cổng chính",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://igb-api.onrender.com/uploads/images/panorama1.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 85,
                    "type": "scene",
                    "text": "Phòng khách",
                    "sceneId": "circle"
                }
            ]
        }
    }
});