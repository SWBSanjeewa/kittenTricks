import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@ui-kitten/components";
import React, { useContext } from "react";

import { Theming } from "../services/theme.service";

import { HomeNavigator } from "./home.navigator";

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		// prevent layout blinking when performing navigation
		background: "transparent",
	},
};

export const AppNavigator = (): React.ReactElement => {
	const theme = useTheme();
	const themeContext = useContext(Theming.ThemeContext);

	return (
		<NavigationContainer
			theme={{
				...navigatorTheme,
				colors: {
					...navigatorTheme.colors,
					background:
						themeContext.currentTheme === "dark"
							? theme["color-basic-800"]
							: theme["color-basic-100"],
				},
			}}
		>
			<HomeNavigator />
		</NavigationContainer>
	);
};
