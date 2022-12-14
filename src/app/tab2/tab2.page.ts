import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('slider') slider: IonSlides;
  @ViewChild('figAudio') figAudio: ElementRef; // audio tag reference

  slideOpts = {
    slidesPerView: "auto"
  }

  allMedia = [
    {
      id: 1,
      name: 'Amanecer en la sabana',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/01.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 2,
      name: '',
      description: '',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/1.mp3',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 3,
      name: '',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/02.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 4,
      name: '',
      description: '',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/2.mp3',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 5,
      name: 'Crecimiento',
      description: 'fotografía de la artista - Tibasosa, Boyacá -  2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/03.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 6,
      name: '',
      description: 'fotografía de la artista – Bogotá D.C. - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/04.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 7,
      name: '',
      description: '',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/3.mp3',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 8,
      name: 'Desorden',
      description: 'fotografía de la artista - Sogamoso, Boyacá - 2022 - fotografía digital ',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/05.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 9,
      name: '',
      description: 'fotografía de la artista - Tibasosa, Boyacá - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/06.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 10,
      name: '',
      description: '',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/4.mp3',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 11,
      name: 'Larga espera',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/07.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 12,
      name: 'Verde',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/08.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 13,
      name: '',
      description: '',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/5.mp3',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 14,
      name: '',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital ',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/09.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 15,
      name: '',
      description: 'fotografía de la artista - Sogamoso, Boyacá - 2022 - fotografía digital ',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/10.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 16,
      name: '',
      description: 'fotografía de la artista – Bogotá D.C. - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/11.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 17,
      name: '',
      description: '',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/6.mp3',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 18,
      name: '',
      description: 'fotografía de la artista - Tibasosa, Boyacá - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/12.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 19,
      name: '',
      description: '',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/7.mp3',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 20,
      name: '',
      description: 'fotografía de la artista - Sogamoso, Boyacá - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/13.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 21,
      name: '',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/14.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 22,
      name: '',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/15.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 23,
      name: '',
      description: 'fotografía de la artista - Sogamoso, Boyacá - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/16.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 24,
      name: '',
      description: '',
      isImage: true,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/8.mp3',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 25,
      name: '',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/17.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 26,
      name: '',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/18.png',
      previewAudio: '',
      comments: [
        {
          profile: 'https://picsum.photos/50/50',
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          profile: 'https://picsum.photos/50/50',
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
  ]

  currentMedia;
  playAudio = [];

  constructor() { }

  //ngOnInit() { }

  selectMedia(file) {
    console.log("select media:", file);
    this.currentMedia = file;
    if (!this.currentMedia.isImage && !this.currentMedia.isVideo) {
      this.play(this.currentMedia.previewAudio);
    }
  }

  play(url) {
    for (let i = 0; i < this.allMedia.length; i++) {
      if (this.allMedia[i].previewAudio != '' || this.allMedia[i].previewAudio != null) {
        //this.playAudio[i] = `data:${this.mediaService.guessAudioBase64MimeType(this.allPhotos[i].previewAudio)};base64,` + this.allPhotos[i].previewAudio;
        //this.playAudio[i] = new Audio(url);
      }
      let trackEls = [document.querySelectorAll('.imgPlayAudio')];
      for (const trackEl of trackEls) {
        this.playAudio[i] = trackEl[i].querySelector('audio');
        trackEl[i].addEventListener("click", () => {
          this.playAudio[i] = new Audio(url);
          //this.playAudio[i].paused ? this.playAudio[i].play() : this.playAudio[i].pause();
        });
      }
    }
  }



  liked(comment) {
    comment.like = !comment.like;
    if (comment.like) comment.likes++;
    else if (!comment.like) comment.likes--;
  }

}
