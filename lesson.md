
# React Native - Navigation

## Part 1 - Tab Navigation

### Step 1: Create Tab Navigation RN Project

In the root directory, run this command to create a RN project:

```sh
$ npx create-expo-app TabApp
```

When you run the command above, it will create a RN project along with git in place. Since we will be creating two RN projects. We can delete the `.git` folder in the RN project. Run the following command in the root directory to delete `.git` in the RN project.

```sh
$ rm -rf ./TabApp/.git
```
Windows users can refer to [rm -rf for PowerShell](https://jessitron.com/2020/03/12/powershell-for-rm-rf/)

If the above command fails, try with `sudo`:

```sh
$ sudo rm -rf ./TabApp/.git
```

You may be prompted to enter administrator password.

### Step 2: Install Dependency

Run this command on Terminal to install the dependency via yarn.

``` sh
$ # change directory to RN project root folder
$ cd ./TabApp 

$ # install dependency
$ yarn add @react-navigation/native @react-navigation/bottom-tabs 
```

You may required to install additional dependencies on expo. You don't have to run the following commands if you are not prompted to:
``` sh
expo install react-native-screens react-native-safe-area-context
```

### Step 3: Add code

Add the following code to your `App.js`:

```js
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

```

## Part 2 - Drawer Navigation

### Step 1: Create Drawer Navigation RN Project

Navigate to the root directory of this git repository to create a new project with similar command. Run the following command on Terminal:

```sh
$ expo init DrawerApp
```

Delete the `.git` folder the same as part 1.

```sh
$ rm -rf ./NavApp/.git
```

If the above command fails, try with `sudo`:

```sh
$ sudo rm -rf ./NavApp/.git
```

You may be prompted to enter administrator password.

### Step 2: Install Dependencies

```sh
$ # change directory
$ cd ./DrawerApp
$ # install dependencies
$ yarn add @react-navigation/native @react-navigation/drawer
$ expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

Add `import 'react-native-gesture-handler';` at the entry JS file, which is also `App.js`.

### Step 3: Add code

Add the following code in `App.js`

```js
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
```

## Part 3 (Optional) - Add Icon and Badge to Tab Navigation App

You may go back to the Tab Navigation project to explore adding icons and badge to it. Just follow the documentation [here](https://reactnavigation.org/docs/tab-based-navigation)