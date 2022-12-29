import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@ui-kitten/components";
import React, { useContext } from "react";

import { Theming } from "../services/theme.service";

import { HomeNavigator } from "./home.navigator";

export const AppNavigator = (): React.ReactElement => {
	const theme = useTheme();
	const themeContext = useContext(Theming.ThemeContext);

	return (
		<NavigationContainer
			theme={{
				...DefaultTheme,
				colors: {
					...DefaultTheme.colors,
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
