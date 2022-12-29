import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { preventAutoHideAsync } from "expo-splash-screen";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SplashImage } from "../components/splash-image.component";
import { StatusBar } from "../components/status-bar.component";
import { AppNavigator } from "../navigation/app.navigator";
import { defaultConfig, useCachedResources } from "../services/resources";
import { Mapping, Theme, Theming } from "../services/theme.service";

import { AppIconsPack } from "./app-icons-pack";
import { appMappings, appThemes } from "./app-theming";

preventAutoHideAsync();

const App: React.FC<{ mapping: Mapping; theme: Theme }> = ({ mapping, theme }) => {
	const loaded = useCachedResources();

	const [mappingContext, currentMapping] = Theming.useMapping(appMappings, mapping);
	const [themeContext, currentTheme] = Theming.useTheming(appThemes, mapping, theme);

	if (!loaded) {
		return <Splash loading />;
	}

	return (
		<React.Fragment>
			<IconRegistry icons={[EvaIconsPack, AppIconsPack]} />
			<ApplicationProvider {...currentMapping} theme={currentTheme}>
				<Theming.MappingContext.Provider value={mappingContext}>
					<Theming.ThemeContext.Provider value={themeContext}>
						<SafeAreaProvider>
							<StatusBar />
							<AppNavigator />
						</SafeAreaProvider>
					</Theming.ThemeContext.Provider>
				</Theming.MappingContext.Provider>
			</ApplicationProvider>
		</React.Fragment>
	);
};

const Splash = ({ loading }): React.ReactElement => (
	<SplashImage loading={loading} source={require("../assets/images/image-splash.png")} />
);

export default (): React.ReactElement => <App {...defaultConfig} />;
