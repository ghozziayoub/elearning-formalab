import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  result: string = "";
  url: string = "";
  private uploadedFile: File;
  addForm: FormGroup;

  constructor(fb: FormBuilder, private http: HttpClient) {
    this.addForm = fb.group({
      nom: new FormControl('', [
        Validators.required,
      ]),
    });
  }


  ngOnInit(): void {
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = (event.target as FileReader).result.toString();
      }
    }

    this.uploadedFile = event.target.files[0];


  }

  save() {
    let formData = new FormData();
    let data = this.addForm.value;

    formData.append("image", this.uploadedFile, this.uploadedFile.name);
    formData.append("data", JSON.stringify(data));
    let test: String = "1234"
    this.http.patch<any>("http://localhost:3000/doc/updateInfo/" + test, formData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
