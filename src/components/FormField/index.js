import React from "react";
import "./FormField.css";

function FormField({ label, type, name, value, onChange }) {
	return (
		<div className="container label-flutuante">
			{type === "textarea" ? <textarea placeholder="*" className="textarea" type={type} value={value} name={name} onChange={onChange} rows={10}></textarea> : <input placeholder="*" className="input" type={type} value={value} name={name} onChange={onChange} />}
			<label className="label">{label}</label>
		</div>
	);
}

export default FormField;
