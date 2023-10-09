import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-array',
  templateUrl: './additional-array.component.html',
  styleUrls: ['./additional-array.component.css']
})
export class AdditionalArrayComponent implements OnInit {
  additionalItems: any[] = []; // Replace with your additional items data
  currentIndex = 0;

  ngOnInit() {
    // Initialize your additionalItems array with data
    this.additionalItems = [
      // Add your additional items data here
      { id: 6, name: '7up', image: window.origin +'/assets/images/7UP.jpeg', price: 70, value: 0, showAddForm: false },
      { id: 7, name: 'Puff', image: window.origin + '/assets/images/puff.jpg', price: 50, value: 0, showAddForm: false },
      { id: 8, name: 'Lays', image: window.origin + '/assets/images/lays1.jpg', price: 50, value: 0, showAddForm: false },
      { id: 9, name: 'Pizza', image: window.origin + '/assets/images/pizza.jpg', price: 50, value: 0, showAddForm: false},
      { id: 10, name: 'Burger', image: window.origin + '/assets/images/burger1.jpg', price: 50, value: 0, showAddForm: false },
    ];
  }

  slideLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  slideRight() {
    if (this.currentIndex < this.additionalItems.length - 1) {
      this.currentIndex++;
    }
  }
}
