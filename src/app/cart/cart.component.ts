import { Component } from "@angular/core";
import { CartService } from "../services/cart.service";
import { CommonModule } from "@angular/common";

import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "app-cart",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./cart.component.html",
	styleUrl: "./cart.component.css",
})
export class CartComponent {
	items = this.cartService.getItems();

	checkoutForm = this.formBuilder.group({
		name: "",
		address: "",
	});

	constructor(
		private cartService: CartService,
		private formBuilder: FormBuilder
	) {}

	onSubmit(): void {
		this.items = this.cartService.clearCart();
		console.warn("Your order has been submitted", this.checkoutForm.value);

		this.checkoutForm.reset();
	}
}
