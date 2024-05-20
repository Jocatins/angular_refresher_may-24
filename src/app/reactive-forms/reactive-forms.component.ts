import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	Validators,
	ReactiveFormsModule,
} from "@angular/forms";

@Component({
	selector: "app-reactive-forms",
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: "./reactive-forms.component.html",
	styleUrl: "./reactive-forms.component.css",
})
export class ReactiveFormsComponent {
	form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			name: ["", Validators.required],
			email: ["", [Validators.required, Validators.email]],
		});
	}
	onSubmit() {
		console.log("Form Submitted!", this.form.value);
	}
}
