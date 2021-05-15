import React, { useState } from "react";

import Button from "./shared/Button";
import Input from "./shared/Input";
import Select from "./shared/Select";
import { IconRightArrow, IconDribbble, IconGoogle } from "./shared/Icons";

function Trial() {
	const [text, setText] = useState("");

	const handleChange = (key: string) => (value: string) => {
		console.log(key + ":" + value);
		setText(value);
	};

	return (
		<div>
			<Button
				buttonStyle="btn--secondary"
				buttonSize="btn--medium"
				onClick={(e) => e.preventDefault}
			>
				Log in
			</Button>
			<Button
				icon={<IconRightArrow />}
				buttonStyle="btn--primary"
				buttonSize="btn--medium"
				onClick={(e) => e.preventDefault}
			>
				Register
			</Button>
			<Button
				icon={<IconDribbble />}
				iconAlign="btn--iconleft"
				buttonStyle="btn--dribbble"
				buttonSize="btn--medium"
				onClick={(e) => e.preventDefault}
			>
				Dribbble
			</Button>
			<Button
				icon={<IconGoogle />}
				iconAlign="btn--iconleft"
				buttonStyle="btn--google"
				buttonSize="btn--medium"
				onClick={(e) => e.preventDefault}
			>
				Google
			</Button>
			<Button
				icon={<IconRightArrow />}
				buttonStyle="btn--blue"
				buttonSize="btn--medium"
				onClick={(e) => e.preventDefault}
			>
				Start Hustling
			</Button>
			<br />
			<Button
				icon={<IconRightArrow />}
				buttonStyle="btn--primary"
				buttonSize="btn--large"
				onClick={(e) => e.preventDefault}
			>
				Take Me To The Village
			</Button>
			<br />
			<Input
				value={text}
				type="text"
				placeholder="Enter text here..."
				onChange={handleChange("text")}
			/>
			<Select
				data={[{}]}
				placeholder="select"
				onChange={() => console.log("handled change")}
			/>
		</div>
	);
}

export default Trial;
