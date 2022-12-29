import { Icon, IconElement } from "@ui-kitten/components";
import React from "react";
import { ImageStyle } from "react-native";

export const ActivityIcon = (style: ImageStyle): IconElement => <Icon {...style} name="activity" />;

export const ClockIcon = (style: ImageStyle): IconElement => <Icon {...style} name="clock" />;
