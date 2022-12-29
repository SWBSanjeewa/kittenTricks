import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { LayoutsScreen } from "../scenes/layouts/layouts.component";

import { ArticlesNavigator } from "./articles.navigator";
import { AuthNavigator } from "./auth.navigator";
import { DashboardsNavigator } from "./dashboards.navigator";
import { EcommerceNavigator } from "./ecommerce.navigator";
import { MessagingNavigator } from "./messaging.navigator";
import { SocialNavigator } from "./social.navigator";

const Stack = createStackNavigator();

export const LayoutsNavigator = (): React.ReactElement => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Layouts" component={LayoutsScreen} />
		<Stack.Screen name="LayoutAuth" component={AuthNavigator} />
		<Stack.Screen name="LayoutSocial" component={SocialNavigator} />
		<Stack.Screen name="LayoutArticles" component={ArticlesNavigator} />
		<Stack.Screen name="LayoutMessaging" component={MessagingNavigator} />
		<Stack.Screen name="LayoutDashboards" component={DashboardsNavigator} />
		<Stack.Screen name="LayoutEcommerce" component={EcommerceNavigator} />
	</Stack.Navigator>
);
