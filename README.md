
# Pixora Mascot

[Access the website](https://pixoramascot.netlify.app/)

Interactive sprite-based mascots for React applications.

Give your website personality with animated mascots that follow the cursor wherever it moves across the screen.

## Features

- **Screen-wide cursor tracking** – Mascots follow the cursor across the entire browser screen.
- **9 directional views** – Supports a 3×3 direction sprite sheet.
- **Custom sprite sheets** – Use your own mascot artwork.
- **Configurable size** – Set the mascot width and height.
- **Lightweight** – Simple React component with minimal setup.

## Installation

```bash
npm install pixora-mascot
```

## Import

```jsx
import { Mascot } from 'pixora-mascot';
import 'pixora-mascot/style.css';
```

## Basic Usage

```jsx
import { Mascot } from 'pixora-mascot';
import 'pixora-mascot/style.css';

function App() {
  return (
    <div>
      <Mascot
        directions="/mascots/cat-directions.webp"
        size={150}
      />
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| directions | string | undefined | URL of the 3×3 direction sprite sheet |
| size | number | 120 | Mascot width and height in pixels |

## Direction Sprite Sheet

Pixora uses a 3×3 sprite sheet containing nine different head directions.

| Top-left | Top | Top-right |
| Left | Front | Right |
| Bottom-left | Down | Bottom-right |

Each frame represents a different direction. The mascot automatically changes its direction based on the cursor position across the browser screen.

## Requirements

- React 18 or later
- React DOM 18 or later

## CSS Import

Make sure to import the package stylesheet in your React application:

```jsx
import 'pixora-mascot/style.css';
```

This loads the compiled CSS required to display your mascot correctly.

## Documentation

For detailed instructions and examples, visit:

[Pixora Documentation](https://pixoramascot.netlify.app/docs)

## License

MIT
