import { BottomSheet } from "@expo/ui/swift-ui";
import { useState } from "react";
import { Text } from "~/components/ui/text";

function Sheet() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<BottomSheet isOpened={isOpen} onIsOpenedChange={(e) => setIsOpen(e)}>
			<Text>Hello, world!</Text>
		</BottomSheet>
	);
}

export { Sheet };
