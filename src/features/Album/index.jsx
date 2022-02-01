import React from "react";

import AlbumList from "./components/AlbumList";

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Nhạc Trẻ Gây Nghiện",
            thumbnailUrl:
                "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/0/c/a/90ca2b18751b56f4e3667561a71880bf.jpg",
        },
        {
            id: 2,
            name: "Nhạc Phim Cung Đấu Hay",
            thumbnailUrl:
                "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/6/1/2/1/6121a5abd4726bfa37686ec90be2694d.jpg",
        },
        {
            id: 3,
            name: "Giai Điệu Và Trào Lưu Gây",
            thumbnailUrl:
                "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/a/4/3/5/a4357a8ba399962dfec021efce9b1afc.jpg",
        },
    ];
    return (
        <div>
            <h1>Có Thể Bạn Muốn Nghe</h1>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;
