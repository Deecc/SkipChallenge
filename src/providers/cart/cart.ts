import { Injectable } from '@angular/core';


/**
 * Cart Item
 */
export class CartItem {
    id:number;
    name:string;
    price:number;
    quantity:number;

    constructor(item, quantity:number) {
        this.id = item.id;
        this.name = item.name;
        this.price = item.price;
        this.quantity = quantity;
    }
}



@Injectable()
export class CartProvider {
  list : Array<CartItem>;

  constructor(){
    this.list = []
  }

    getAllCartItems(){
        return this.list;
    }

    getItemById(id: Number){
        for(var i = 0; i < this.list.length; i++){
            if(this.list[i].id == id){
                return this.list[i];
            }
        }
    }

    addItem(item, quantity:number){

        var isExists : boolean = false;
        var id = item.id;

        for(var i = 0; i < this.list.length; i++){
            if(this.list[i].id == id){
                this.list[i].quantity += quantity;
                isExists = true;
                break;
            }
        }
        if(!isExists){
            this.list.push(new CartItem(item, quantity));
        }
    }

    removeItemById(id){
        for(var i = 0; i < this.list.length; i++){
            if(this.list[i].id == id){
                this.list.splice(i, 1);
                break;
            }
        }
    }

    emptyCart(){
        for(var i = 0; i < this.list.length; i++){
            this.list.splice(i, 1);
            i--;
        }
    }

    quantityPlus(item){
        item.quantity += 1;
    }

    quantityMinus(item){
        item.quantity -= 1;
    }

    getGrandTotal(): number{
        var amount = 0;
        for(var i = 0; i < this.list.length; i++){
            amount += (this.list[i].price * this.list[i].quantity);
        }
        return amount;
    }
  }
