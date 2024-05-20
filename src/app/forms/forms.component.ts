import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

// -------- TEMPLATE DRIVEN FORM

@Component({
	selector: "app-forms",
	standalone: true,
	imports: [FormsModule],
	templateUrl: "./forms.component.html",
	styleUrl: "./forms.component.css",
})
export class FormsComponent {
	model = {
		name: "",
		email: "",
	};

	onSubmit() {
		console.log("Form Submitted!", this.model);
	}
}
