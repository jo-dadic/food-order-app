import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		postal: true,
		city: true,
	});

	const nameInput = useRef();
	const streetInput = useRef();
	const postalInput = useRef();
	const cityInput = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInput.current.value;
		const streetName = streetInput.current.value;
		const postalName = postalInput.current.value;
		const cityName = cityInput.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const streetNameIsValid = !isEmpty(streetName);
		const postalNameIsValid = isFiveChars(postalName);
		const cityNameIsValid = !isEmpty(cityName);

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: streetNameIsValid,
			postal: postalNameIsValid,
			city: cityNameIsValid,
		});

		const formIsValid =
			enteredNameIsValid &&
			streetNameIsValid &&
			postalNameIsValid &&
			cityNameIsValid;

		if (!formIsValid) {
		}
	};

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div
				className={`${classes.control} ${
					formInputsValidity.name ? "" : classes.invalid
				}`}
			>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInput} />
				{!formInputsValidity.name && <p>Please enter a valid name!</p>}
			</div>
			<div
				className={`${classes.control} ${
					formInputsValidity.street ? "" : classes.invalid
				}`}
			>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInput} />
				{!formInputsValidity.street && <p>Please enter a valid street name!</p>}
			</div>
			<div
				className={`${classes.control} ${
					formInputsValidity.postal ? "" : classes.invalid
				}`}
			>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalInput} />
				{!formInputsValidity.postal && (
					<p>Please enter a valid postal code (5 characters long)!</p>
				)}
			</div>
			<div
				className={`${classes.control} ${
					formInputsValidity.city ? "" : classes.invalid
				}`}
			>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInput} />
				{!formInputsValidity.city && <p>Please enter a valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
