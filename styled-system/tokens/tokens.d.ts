/* eslint-disable */
export type Token = "colors.backgroundBody" | "colors.borderLight" | "colors.text" | "colors.textLink" | "colors.textLinkDarker" | "colors.textBrandHighlight" | "fontSizes.10" | "fontSizes.20" | "fontSizes.30" | "fontSizes.40" | "fontSizes.50" | "fontSizes.60" | "fontSizes.70" | "fontSizes.80" | "fontSizes.90" | "fontSizes.100" | "fontSizes.110" | "fontWeights.bold" | "fontWeights.light" | "fontWeights.medium" | "fontWeights.normal" | "fontWeights.semiBold" | "lineHeights.0" | "lineHeights.10" | "lineHeights.20" | "lineHeights.30" | "lineHeights.40" | "lineHeights.50" | "lineHeights.60" | "lineHeights.70" | "lineHeights.80" | "lineHeights.90" | "lineHeights.100" | "lineHeights.110" | "radii.circle" | "spacing.50" | "spacing.60" | "spacing.70" | "spacing.120" | "spacing.200" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "spacing.-50" | "spacing.-60" | "spacing.-70" | "spacing.-120" | "spacing.-200"

export type ColorToken = "backgroundBody" | "borderLight" | "text" | "textLink" | "textLinkDarker" | "textBrandHighlight"

export type FontSizeToken = "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100" | "110"

export type FontWeightToken = "bold" | "light" | "medium" | "normal" | "semiBold"

export type LineHeightToken = "0" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100" | "110"

export type RadiusToken = "circle"

export type SpacingToken = "50" | "60" | "70" | "120" | "200" | "-50" | "-60" | "-70" | "-120" | "-200"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		colors: ColorToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		lineHeights: LineHeightToken
		radii: RadiusToken
		spacing: SpacingToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"