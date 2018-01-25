import tabletPortrait from './media/tablet_portrait.png';
import tabletLandscape from './media/tablet_landscape.png';
import headerMercedes from './media/mercedes/mercedes.gif';
import mercedes0 from './media/mercedes/0.png';
import mercedes1 from './media/mercedes/1.png';
import mercedes2 from './media/mercedes/2.png';
import headerMoana from './media/moana/moana_mock.mp4';
export const config = {
    entries: [
         {
            id: 0,
            color: 'pink',
            title: "Mercedes E-Class Gallery",
            role: "Developer",
            tags: [
                'development',
            ],
            project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
            date: 2016,
            headerType: 'image',
            headerSrc: headerMercedes,
            headerClass: 'header-tablet-landscape',
            headerFrame: tabletPortrait,
            github: 'https://github.com',
            gallery: [
                {
                    src: mercedes0,
                    type: 'image',
                },
                {
                    src: mercedes1,
                },
                {
                    src: mercedes2,
                },
            ],
        },
        {
           id: 1,
           color: 'pink',
           title: "Mercedes E-Class (Entry 2)",
           role: "Developer",
           tags: [
               'development',
           ],
           project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
           date: 2016,
           headerType: 'image',
           headerSrc: headerMercedes,
           headerClass: 'header-tablet-landscape',
           headerFrame: tabletPortrait,
           github: 'https://github.com',
           gallery: [
               {
                   src: mercedes0,
                   type: 'image',
               },
               {
                   src: mercedes1,
               },
               {
                   src: mercedes2,
               },
           ],
       },
    ]
}
