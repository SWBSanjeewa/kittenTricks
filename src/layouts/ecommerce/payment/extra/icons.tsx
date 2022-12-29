import { Icon, IconElement } from "@ui-kitten/components";
import React from "react";
import { ImageStyle } from "react-native";

export const CreditCardIcon = (style: ImageStyle): IconElement => (
	<Icon {...style} name="credit-card" />
);

export const MoreVerticalIcon = (style: ImageStyle): IconElement => (
	<Icon {...style} name="more-vertical" />
);
