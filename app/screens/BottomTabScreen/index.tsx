import { createStaticNavigation, NavigationIndependentTree } from "@react-navigation/native";
import TabNavigator from "../../navigation/TabNavigation";

export default function BottomTabBar(){
    return (
      <NavigationIndependentTree>
        <TabNavigator/>
      </NavigationIndependentTree>
    );
}