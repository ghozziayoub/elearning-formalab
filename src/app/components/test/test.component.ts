import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  result: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  save(event){
    var selectFile = event.target.files;

    for (let i = 0; i < selectFile.length; i++) {
      this.result += "<br> File name : "+selectFile[i].name;
    }
  }

}
