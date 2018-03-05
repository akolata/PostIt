import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AddPostDto} from '../../models/models';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styles: []
})
export class AddPostComponent implements OnInit {

  @ViewChild('addPostForm')
  addPostForm: NgForm;

  addPostDto: AddPostDto;

  constructor() {
    this.addPostDto = new AddPostDto();
  }

  ngOnInit() {
  }

  addPost(): void {
    this.addPostDto = new AddPostDto();
    this.addPostForm.resetForm(this.addPostDto);
  }

}
