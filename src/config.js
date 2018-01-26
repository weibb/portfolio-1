import logo from './media/logo.svg';
import tabletPortrait from './media/tablet_portrait.png';
import tabletLandscape from './media/tablet_landscape.png';
import headerMercedes from './media/mercedes/mercedes.gif';
import mercedes0 from './media/mercedes/0.png';
import mercedes1 from './media/mercedes/1.png';
import mercedes2 from './media/mercedes/2.png';
import headerMoana from './media/moana/moana_mock.mp4';
export const config = {
    logo: logo,
    categories: [
        'design',
        'development',
        'illustration',
    ],
    about: {
        title: 'About',
        description: 'Template for About panel',
    },
    contact: {
        title: 'Contact',
        description: 'Template for Contact panel',
    },
    entries: [
         {
            color: 'pink',
            thumbnail: mercedes0,
            title: "Mercedes E-Class Gallery",
            role: "Designer, Developer",
            tags: [
                'design',
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
            shape: 'shape1',
        },
        {
           color: 'blue',
           thumbnailShape: 'shape1',
           title: "Mercedes E-Class (Entry 2)",
           role: "Designer",
           tags: [
               'design',
           ],
           project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
           date: 2016,
           headerType: 'image',
           headerSrc: headerMercedes,
           headerClass: 'header-tablet-landscape',
           headerFrame: tabletPortrait,
           github: 'https://github.com',
           demo: 'https://google.com',
           gallery: [
               {
                   src: headerMoana,
                   type: 'video',
                   description: 'this is a description',
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
          color: 'orange',
          title: "Mercedes E-Class (Entry 3)",
          role: "Developer, Illustrator",
          tags: [
              'development',
              'illustration',
          ],
          project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
          date: 2016,
          headerType: 'image',
          headerSrc: headerMercedes,
          headerClass: 'header-tablet-landscape',
          headerFrame: tabletPortrait,
          github: 'https://github.com',
          demo: 'https://google.com',
          gallery: [
              {
                  src: headerMoana,
                  type: 'video',
                  description: 'this is a description',
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
         color: 'blue',
         thumbnail: mercedes0,
         title: "Mercedes E-Class (Entry 4)",
         role: "Designer",
         tags: [
             'design',
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
        color: 'orange',
        thumbnailShape: 'shape1',
        title: "Mercedes E-Class (Entry 5)",
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
        demo: 'https://google.com',
        gallery: [
            {
                src: headerMoana,
                type: 'video',
                description: 'this is a description',
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
         shape: 'shape1',
      },
      {
       color: 'blue',
       title: "Mercedes E-Class (Entry 6)",
       role: "Art Director, Prop Artist",
       tags: [
           'design',
           'illustration',
       ],
       project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
       date: 2016,
       headerType: 'image',
       headerSrc: headerMercedes,
       headerClass: 'header-tablet-landscape',
       headerFrame: tabletPortrait,
       github: 'https://github.com',
       demo: 'https://google.com',
       gallery: [
           {
               src: headerMoana,
               type: 'video',
               description: 'this is a description',
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
         color: 'pink',
         thumbnail: mercedes0,
         title: "Mercedes E-Class (Entry 7)",
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
      color: 'blue',
      thumbnailShape: 'shape1',
      title: "Mercedes E-Class (Entry 8)",
      role: "Illustrator",
      tags: [
          'illustration',
      ],
      project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
      date: 2016,
      headerType: 'image',
      headerSrc: headerMercedes,
      headerClass: 'header-tablet-landscape',
      headerFrame: tabletPortrait,
      github: 'https://github.com',
      demo: 'https://google.com',
      gallery: [
          {
              src: headerMoana,
              type: 'video',
              description: 'this is a description',
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
        color: 'pink',
        thumbnail: mercedes0,
        title: "Mercedes E-Class (Entry 9)",
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
        demo: 'https://github.com',
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
