<a name="readme-top"></a>

# Airbnb Clone Application using Expo & React Native

<p align="center">
    <img src="/.github/images/img_main.png" alt="Airbnb Clone Application using Expo & React Native" height="700" title="Airbnb Clone Application using Expo & React Native" />
</p>

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/airbnb-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/airbnb-clone/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/airbnb-clone/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/airbnb-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/airbnb-clone/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/airbnb-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/airbnb-clone/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/airbnb-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/airbnb-clone/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/airbnb-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/airbnb-clone/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of Airbnb Clone.

<!--- FOLDER_STRUCTURE_START --->
```bash
airbnb-clone/
  |- app/
    |-- (modals)/
    |-- (tabs)/
    |-- listing/
    |-- _layout.tsx
  |- assets/
    |-- data/
    |-- fonts/
    |-- images/
  |- components/
    |-- ExploreHeader.tsx
    |-- Listings.tsx
    |-- ListingsBottomSheet.tsx
    |-- ListingsMap.tsx
    |-- ModalHeaderText.tsx
  |- constants/
    |-- Colors.ts
    |-- Styles.ts
  |- hooks/
    |-- useWarmUpBrowser.ts
  |- .env.example
  |- .env/.env.local
  |- .gitignore
  |- app.json
  |- babel.config.js
  |- metro.config.js
  |- package-lock.json
  |- package.json
  |- tsconfig.json
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in root folder.
4. Contents of `.env`:

```bash
# .env file
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

5. Open terminal in root directory. Run `npm install` or `yarn install`.

6. Install Expo Cli using `npm i -g expo-cli` or `yarn global add expo-cli` to initialize your app on Expo.

7. **Clerk Key**:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is provided by Clerk. You need to sign up for an account on Clerk (https://www.clerk.dev/), log in, and access thiskey in your account settings. Make sure you select Expo app before copying this key.

![Copy Clerk Publishable Key](/.github/images/step_clerk.png "Copy Clerk Publishable Key")

8. Now app is fully configured :+1: and you can start using this app using `npm run dev` or `yarn run dev`.

### :books: Additional Resources

- Expo Documentation: https://docs.expo.dev/
- React Native Documentation: https://reactnative.dev/docs/
- Clerk Documentation: https://clerk.com/docs

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

<p align="center">
<img src="/.github/images/img1.png" alt="Modern UI/UX" height="700" title="Modern UI/UX" />
<img src="/.github/images/img2.png" alt="Global Map View" height="700" title="Global Map View" />
</p>

<p align="center">
<img src="/.github/images/img3.png" alt="Clerk Sign In & Sign Up" height="700" title="Clerk Sign In & Sign Up" />
<img src="/.github/images/img4.png" alt="Working Custom Filters" height="700" title="Working Custom Filters" />
</p>

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![JavaScript](https://skillicons.dev/icons?i=js "JavaScript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/ "JavaScript") [![CSS](https://skillicons.dev/icons?i=css "CSS")](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") [![Jest](https://skillicons.dev/icons?i=jest "Jest")](https://jestjs.io/ "Jest") [![Babel](https://skillicons.dev/icons?i=babel "Babel")](https://babeljs.io/ "Babel")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in My Portfolio

<!--- DEPENDENCIES_START --->
- [@babel/core](https://www.npmjs.com/package/@babel/core): ^7.20.0
- [@clerk/clerk-expo](https://www.npmjs.com/package/@clerk/clerk-expo): ^0.19.17
- [@expo/vector-icons](https://www.npmjs.com/package/@expo/vector-icons): ^13.0.0
- [@gorhom/bottom-sheet](https://www.npmjs.com/package/@gorhom/bottom-sheet): ^4.5.1
- [@react-navigation/native](https://www.npmjs.com/package/@react-navigation/native): ^6.0.2
- [@types/react](https://www.npmjs.com/package/@types/react): ~18.2.14
- [@types/react-native](https://www.npmjs.com/package/@types/react-native): ^0.72.6
- [@types/react-native-modern-datepicker](https://www.npmjs.com/package/@types/react-native-modern-datepicker): ^1.0.4
- [expo](https://www.npmjs.com/package/expo): ~54.0.31
- [expo-blur](https://www.npmjs.com/package/expo-blur): ~12.4.1
- [expo-font](https://www.npmjs.com/package/expo-font): ~11.4.0
- [expo-haptics](https://www.npmjs.com/package/expo-haptics): ^12.6.0
- [expo-image-picker](https://www.npmjs.com/package/expo-image-picker): ~14.3.2
- [expo-linking](https://www.npmjs.com/package/expo-linking): ~5.0.2
- [expo-location](https://www.npmjs.com/package/expo-location): ~16.1.0
- [expo-router](https://www.npmjs.com/package/expo-router): ^6.0.21
- [expo-secure-store](https://www.npmjs.com/package/expo-secure-store): ~12.3.1
- [expo-splash-screen](https://www.npmjs.com/package/expo-splash-screen): ~0.20.5
- [expo-status-bar](https://www.npmjs.com/package/expo-status-bar): ~1.6.0
- [expo-system-ui](https://www.npmjs.com/package/expo-system-ui): ~2.4.0
- [expo-web-browser](https://www.npmjs.com/package/expo-web-browser): ~12.3.2
- [jest](https://www.npmjs.com/package/jest): ^29.2.1
- [jest-expo](https://www.npmjs.com/package/jest-expo): ~49.0.0
- [react](https://www.npmjs.com/package/react): 18.2.0
- [react-dom](https://www.npmjs.com/package/react-dom): 18.2.0
- [react-native](https://www.npmjs.com/package/react-native): 0.82.1
- [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler): ~2.12.0
- [react-native-map-clustering](https://www.npmjs.com/package/react-native-map-clustering): ^3.4.2
- [react-native-maps](https://www.npmjs.com/package/react-native-maps): 1.7.1
- [react-native-modern-datepicker](https://www.npmjs.com/package/react-native-modern-datepicker): ^1.0.0-beta.91
- [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated): ~3.3.0
- [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context): 4.6.3
- [react-native-screens](https://www.npmjs.com/package/react-native-screens): ~3.22.0
- [react-native-web](https://www.npmjs.com/package/react-native-web): ~0.19.6
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer): 18.2.0
- [typescript](https://www.npmjs.com/package/typescript): ^5.1.3

<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/airbnb-clone&Timeline" title="Github Star History">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/airbnb-clone&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/airbnb-clone&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/airbnb-clone&type=Timeline" />
  </picture>
</a>

<br />
<p align="right">(<a href="#readme-top" title="Back to top">back to top</a>)</p>
