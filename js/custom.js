// pannellum.viewer('panorama', {
//     "type": "equirectangular",
//     "panorama": "https://pannellum.org/images/alma.jpg",
//     "autoLoad": true,
//     "autoRotate": -6
// });

pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "circle",
        "author": "Phạm Dũng",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "autoRotate": 6
        // "tileResolution": 512,
        // "maxLevel": 6,
        // "cubeResolution": 8432
    },

    "scenes": {
        "circle": {
            "title": "Phòng khách",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "images/demo1.png",
            "hotSpots": [
                {
                    "pitch": -3,
                    "yaw": 65,
                    "type": "scene",
                    "text": "Phòng ngủ",
                    "sceneId": "house",
                    // "scale": 1
                },
                {
                    "pitch": -2,
                    "yaw": -60,
                    "type": "info",
                    "text": "Ngồi xem tivi ở đây"
                },
                {
                    "pitch": -30,
                    "yaw": -130,
                    "type": "info",
                    "text": "Ngồi đọc sách ở đây"
                }
            ]
        },

        "house": {
            "title": "Phòng ngủ",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://vr360.com.vn/uploads/images/chupanh360do1.jpg",
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