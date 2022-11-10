import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular",
        imageUrl: "/assets/images/forms.png",
        price: 99.99,
        code: "X9S-8796",
        duration: 120,
        rating: 1.5,
        releaseDate: 'November, 12, 2022'
      },
      {
        id: 2,
        name: "React",
        imageUrl: "/assets/images/http.png",
        price: 59.99,
        code: "X85-FG32",
        duration: 150,
        rating: 4.2,
        releaseDate: 'May, 30, 2004' //my birthday
      }
    ]
  }
}