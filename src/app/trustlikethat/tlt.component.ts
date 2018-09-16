import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-tlt',
  templateUrl: './tlt.component.html',
  styleUrls: ['./tlt.component.css']
})
export class TltComponent implements OnInit{
  title = 'trustlikethat';

  @ViewChild('container') container: ElementRef;
  @ViewChild('harry') harry: ElementRef;
  trust = false;
  openUpThatButton = false;

  ngOnInit(){
    document.body.style.backgroundColor = "dodgerblue";
  }


  imLookingForHarry(){
    this.openUpThatButton = true;
    setTimeout(()=> {
      this.birdUp();
      this.dun(this.harry);
      this.dunn(this.harry);
      this.dunnn(this.harry);
      this.iDontTrustLikeThat();
    });
  }

  birdUp(){
    let audio = new Audio();
    audio.src = "assets/idonttrustsomethinglikethat.mp3";
    audio.load();
    audio.play();
  }

  dun(harry){
    setTimeout(() => {
      this.container.nativeElement.style.top = "calc(50% - 280px)";
      this.container.nativeElement.style.left = "calc(50% - 280px)";
      this.harry.nativeElement.style.height = "110%";
      this.harry.nativeElement.style.width = "110%";
    },300)
  }

  dunn(harry){
    setTimeout(() => {
      this.container.nativeElement.style.top = "calc(50% - 307px)";
      this.container.nativeElement.style.left = "calc(50% - 307px)";
      this.harry.nativeElement.style.height = "120%";
      this.harry.nativeElement.style.width = "120%";
    },600)
  }

  dunnn(harry){
    setTimeout(() => {
      this.container.nativeElement.style.top = "calc(50% - 333px)";
      this.container.nativeElement.style.left = "calc(50% - 333px)";
      this.harry.nativeElement.style.height = "130%";
      this.harry.nativeElement.style.width = "130%";
    },900)
  }

  iDontTrustLikeThat(){
    setTimeout(() => {
      this.trust = true;
    },1800)
  }
}
