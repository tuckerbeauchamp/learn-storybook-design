import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design-System/Button",
  component: Button,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
    color: {
      type: "select",
      options: ["primary", "accent", "action"],
      description: "The color of the button",
    },
    variant: {
      type: "select",
      options: ["contained", "outlined", "text"],
      description: "How do we want the button to look like?",
    },
    shape: {
      type: "select",
      options: ["rounded", "square", "pill"],
      description: "How do we want the button to look like?",
    },
    children: {
      description: "The content of the button",
    },
  },
  args: {
    children: "Button",
  },
};

export const Primary = {
  args: {
    variant: "contained",
    color: "primary",
    shape: "rounded",
    children: "Button",
  },
};

/**
 * 3 colors are supported: primary, accent, action
 */
export const Colors = {
  args: {
    variant: "contained",
    shape: "rounded",
    style: { marginRight: "8px" },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="accent">
        Accent
      </Button>
      <Button {...args} color="action">
        Action
      </Button>
    </>
  ),
};

/**
 * 3 variants are supported: contained, outlined, text
 */
export const Shapes = {
  args: {
    variant: "contained",
    color: "primary",
    style: { marginRight: "8px" },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    shape: {
      table: {
        disable: true,
      },
    },
  },

  render: (args) => (
    <>
      <Button {...args} shape="rounded">
        Rounded
      </Button>
      <Button {...args} shape="square">
        Square
      </Button>
      <Button {...args} shape="pill">
        Pill
      </Button>
    </>
  ),
};

/**
 * 3 variants are supported: contained, outlined, text
 */
export const Variants = {
  args: {
    color: "primary",
    shape: "rounded",
    style: { marginRight: "8px" },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },

  render: (args) => (
    <>
      <Button {...args} variant="contained">
        Contained
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </>
  ),
};

/**
 * Button component using Controls
 */
export const Controls = {
  args: {
    variant: "contained",
    color: "primary",
    shape: "rounded",
    children: "Button",
  },
};
