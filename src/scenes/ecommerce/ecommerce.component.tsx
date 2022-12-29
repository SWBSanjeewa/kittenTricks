import { Tab, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import React from "react";

import { BrandTabBar } from "../../components/brand-tab-bar.component";
import { ArrowIosBackIcon, GridIcon, ListIcon } from "../../components/icons";
import { SafeAreaLayout } from "../../components/safe-area-layout.component";

export const EcommerceScreen = ({ navigation, state }): React.ReactElement => {
	const onTabSelect = (index: number): void => {
		navigation.navigate(state.routeNames[index]);
	};

	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	);

	return (
		<SafeAreaLayout insets="top">
			<TopNavigation title="Ecommerce" accessoryLeft={renderBackAction} />
			<BrandTabBar selectedIndex={state.index} onSelect={onTabSelect}>
				<Tab icon={GridIcon} />
				<Tab icon={ListIcon} />
			</BrandTabBar>
		</SafeAreaLayout>
	);
};
