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
  
  allMedia = [    
    {
      id: 1,
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/1.jpg',
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
      isImage: false,
      isVideo: false,
      previewSrc: '../../assets/audios/1.mp3',
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
      id: 3,
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/2.jpg',
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
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/3.jpg',
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
      id: 5,
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/4.jpg',
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
      id: 6,
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/5.jpg',
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
  currentAudio;
  playAudio = [];

  constructor() { }

  //ngOnInit() { }

  selectMedia(file) {
    console.log("select media:", file);
    this.currentMedia = file;
  }

/*   play(url) {

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



  } */

  liked(comment) {
    comment.like = !comment.like;
    if (comment.like) comment.likes++;
    else if (!comment.like) comment.likes--;
  }

}
