import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('slider') slider: IonSlides;
  slideOpts = {
    slidesPerView: "auto"
  }
  
  allPhotos = [
    {
      id: 1,
      previewSrc: '../../assets/photos/1665871422376.jpg',
      previewAudio: '../../assets/audios/05. Adele - Set Fire to the Rain.mp3',
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
      previewAudio: '../../assets/audios/01. Adele - Rolling in the Deep.mp3',
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
      previewAudio: '../../assets/audios/05. Adele - Set Fire to the Rain.mp3',
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
      previewAudio: '../../assets/audios/01. Adele - Rolling in the Deep.mp3',
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
      previewAudio: '../../assets/audios/05. Adele - Set Fire to the Rain.mp3',
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
  ]

  currentImage;
  currentAudio;
  playAudio = [];

  constructor() { }

  //ngOnInit() { }

  selectImg(photo) {
    console.log("select photo:", photo);
    this.currentImage = photo;

    this.play(photo.previewAudio);

  }

  play(url) {

    for (let i = 0; i < this.allPhotos.length; i++) {
      if (this.allPhotos[i].previewAudio != '' || this.allPhotos[i].previewAudio != null) {
        //this.playAudio[i] = `data:${this.mediaService.guessAudioBase64MimeType(this.allPhotos[i].previewAudio)};base64,` + this.allPhotos[i].previewAudio;
        //this.playAudio[i] = new Audio(url);
      }

      let trackEls = [document.querySelectorAll('.imgPlayAudio')];

      for (const trackEl of trackEls) {
        this.playAudio[i] = trackEl[i].querySelector('audio');
        trackEl[i].addEventListener("click", () => {
          //this.playAudio[i] = new Audio(url);
          this.playAudio[i].paused ? this.playAudio[i].play() : this.playAudio[i].pause();
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
