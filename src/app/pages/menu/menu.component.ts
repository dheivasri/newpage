import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal for the popup
import { PopupComponent } from '../../popup/popup.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  sampleArr = [
    { id: 1, name: 'Samosa', image: window.origin +'/assets/images/samosa.jpg', price: 50, value: 0, showAddForm: false },
    { id: 2, name: 'Puff', image: window.origin + '/assets/images/puff.jpg', price: 50, value: 0, showAddForm: false },
    { id: 3, name: 'Lays', image: window.origin + '/assets/images/lays1.jpg', price: 50, value: 0, showAddForm: false },
    { id: 4, name: 'Pizza', image: window.origin + '/assets/images/pizza.jpg', price: 50, value: 0, showAddForm: false },
    { id: 5, name: 'Burger', image: window.origin + '/assets/images/burger1.jpg', price: 50, value: 0, showAddForm: false },
  ]

  cart: any[] = []; // Initialize an empty cart array
  
  /*showAddForm: boolean = false;
  value: number = 0;*/
  showAddForm: boolean = false;

  toggleAddForm(item: any) {
    item.showAddForm = !item.showAddForm;
  }

  handlePlus(item: any) {
      if (item.value < 0) {
          item.value = 0;
      }
    item.value++;

    if (item.value > 0) {
      item.showAddForm = true;
    }

    // When item is added, push it to the cart array
    if (item.value > 0) {
      this.cart.push(item);
      this.openPopup(`Added ${item.name} to the cart.`, item.value, item.price);
    }
  }

  handleMinus(item: any) {
    if(item.value <= 0){
      item.showAddForm = false;
    }
    if(item.value>0){
      item.value--;
    }
    // Hide plus and minus buttons when the value reaches 0
    if (item.value === 0) {
        item.showAddForm = false;
    }

    // When item is removed, remove it from the cart array
    if (item.value === 0) {
      const index = this.cart.indexOf(item);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
      this.openPopup(`Removed ${item.name} from the cart.`, -item.value, -item.price);
    }
  }

  openPopup(message: string, quantity: number, price: number) {
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.quantity = quantity;
    modalRef.componentInstance.price = price;

    // Automatically close the modal after 5 seconds
    setTimeout(() => {
      modalRef.close();
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  constructor(private modalService: NgbModal){
    console.log(this.sampleArr);
  }
  
  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }
}