# Juspay Assignment

This is a static NextJs project following the provided [figma design](https://www.figma.com/design/XBEbJlKyCR4kdwlhJvzAUS/UI-Developer-Assignment?node-id=4-4195&node-type=frame&t=ayvdcavnpNMkRZcS-0).

## Live Link

This project is deployed on Vercel. You can check it here - [Juspay Dashboard Assignment](https://juspay-dashboard-assignment-three.vercel.app/)

## Project Navigation

This project have two different pages which can be visited using below mentioned urls -

1. [Home Page](https://juspay-dashboard-assignment-three.vercel.app/)
2. [Orders Page](https://juspay-dashboard-assignment-three.vercel.app/orders)

You can also navigate it using left sidebar's top two options `[Overview & Orders]`

## Dark Mode

1. To toggle between dark & light mode, click on the Sun/Moon Icon in the Header.
2. Your last selected mode will persist using Local Storage.

## Run it locally

First, install the dependencies:

```bash
npm i
```

then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Challenges Faced

1. **Main Layout** - According to the design, the layout consists of two collapsible sidebars, one on each side, and a sticky header at the top. All three elements (the two sidebars and the header) will remain fixed, while only the central content area will be scrollable.

   To achieve this, I have used CSS Grid and the `Grid Template Areas` property to implement the layout.

2. **Sidebar Toggle** - Both sidebars are collapsible, and the rest of the layout will adjust accordingly with an animation. To achieve this, I am toggling the width of the sidebars, as CSS transitions support smooth width changes. The rest of the layout adjustments are handled using CSS Grid.

3. **SVG Icons in Dark Mode** - The SVG icons come with a default fill color, which remains the same in both light and dark modes. However, according to the design, the icon colors should change depending on the selected mode. To handle this, I used the `currentColor` attribute for the `fill` property, which allows the icons to inherit the text color from their parent element, changing dynamically based on the selected mode.
