const config = {
  darkMode: ['class'],
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['--font-poppins'],
      },
      backgroundImage: {
        bgGradient: 'linear-gradient(99.4deg, #FFFFFF 0.24%, #DCFBCC 99.76%)',
        commonGradient:
          'linear-gradient( to bottom, #ffffff 0%, #ffffff -16%,#dcfbcc 97.18%)',
        buttonGradient:
          'linear-gradient(329.61deg, #253922 13.61%, #406343 92.51%)',
        'gradient-mask':
          'linear-gradient(to bottom, transparent 0%, black 20%)',
      },
      screens: {
        xxs: '375px',
        xs: '450px',
        sm: '576px',
        md: '768px',
        lg99: '992px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1440px',
      },
      colors: {
        ecocrewPrimary: '#459F17',
        dark: '#222222',
        black: '#000000',
        darkLow: '#717171',
        grey: '#BEBEBE',
        lightGrey: '#00000021',
        darkGrey: '#8D8D8D',
        grey500: '#717171',
        gainsboro: '#DDDDDD',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      transitionProperty: {
        width: 'width',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
