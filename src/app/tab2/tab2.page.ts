import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { MediaService } from '../core/services/media.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('slider') slider: IonSlides;

  allPhotos = [
    {
      id: 1,
      previewSrc: '../../assets/photos/1665871422376.jpg',
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
      id: 2,
      previewSrc: '../../assets/photos/1665871422388.jpg',
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
      id: 3,
      previewSrc: '../../assets/photos/DSC_0069.jpg',
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
      previewSrc: '../../assets/photos/DSC_0245.JPG',
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
      id: 5,
      previewSrc: '../../assets/photos/DSC_0284.jpg',
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
    /* {
      id: 6,
      previewSrc: '../../assets/photos/DSC_0348.JPG',
      comments: [{
        profile: 'https://picsum.photos/50/50',
        user: 'Daniela Cubides',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }]
    },
    {
      id: 7,
      previewSrc: '../../assets/photos/DSC_0798.JPG',
      comments: [{
        profile: 'https://picsum.photos/50/50',
        user: 'Diego Sánchez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }]
    },
    {
      id: 8,
      previewSrc: '../../assets/photos/DSC_1121.JPG',
      comments: [{
        profile: 'https://picsum.photos/50/50',
        user: 'Daniela Cubides',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      },  {
        profile: 'https://picsum.photos/50/50',
        user: 'Diego Sánchez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }, {
        profile: 'https://picsum.photos/50/50',
        user: 'Ernesto Perez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }]
    },
    {
      id: 9,
      previewSrc: '../../assets/photos/DSC0777.png',
      comments: [{
        profile: 'https://picsum.photos/50/50',
        user: 'Daniela Cubides',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      },  {
        profile: 'https://picsum.photos/50/50',
        user: 'Diego Sánchez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }, {
        profile: 'https://picsum.photos/50/50',
        user: 'Ernesto Perez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }]
    },
    {
      id: 10,
      previewSrc: '../../assets/photos/DSC0779.png',
      comments: [{
        profile: 'https://picsum.photos/50/50',
        user: 'Daniela Cubides',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      },  {
        profile: 'https://picsum.photos/50/50',
        user: 'Diego Sánchez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }, {
        profile: 'https://picsum.photos/50/50',
        user: 'Ernesto Perez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }]
    },
    {
      id: 11,
      previewSrc: '../../assets/photos/DSC0800.png',
      comments: [{
        profile: 'https://picsum.photos/50/50',
        user: 'Diego Sánchez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }, {
        profile: 'https://picsum.photos/50/50',
        user: 'Ernesto Perez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }]
    },
    {
      id: 12,
      previewSrc: '../../assets/photos/DSC0805.png',
      comments: [{
        profile: 'https://picsum.photos/50/50',
        user: 'Daniela Cubides',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      },  {
        profile: 'https://picsum.photos/50/50',
        user: 'Diego Sánchez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }, {
        profile: 'https://picsum.photos/50/50',
        user: 'Ernesto Perez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }]
    },
    {
      id: 13,
      previewSrc: '../../assets/photos/WhatsApp Image 2022-05-15 at 7.18.38 PM (1).jpeg',
      comments: [{
        profile: 'https://picsum.photos/50/50',
        user: 'Daniela Cubides',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }, {
        profile: 'https://picsum.photos/50/50',
        user: 'Ernesto Perez',
        comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
        like: false
      }]
    }, */
  ]

  allAudios = [
    {
      id: 1,
      name: 'Sin nombre',
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
      id: 2,
      name: 'Sin nombre',
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
    }
  ]

  currentImage;
  currentAudio;
  playAudio = [];

  constructor(private mediaService: MediaService) { }

  //ngOnInit() { }

  selectImg(photo) {
    console.log("select photo:", photo);
    this.currentImage = photo;
  }
  selectAudio(audio) {
    console.log("select audio:", audio);
    this.currentAudio = audio;
  }

  getFiles() {
    for (let i = 0; i < this.allAudios.length; i++) {
      this.playAudio[i] = `data:${this.mediaService.guessAudioBase64MimeType(this.allAudios[i].previewAudio)};base64,` + this.allAudios[i].previewAudio;
    }
  }

  liked(comment) {
    comment.like = !comment.like;
    if (comment.like) comment.likes++;
    else if (!comment.like) comment.likes--;
  }

}
