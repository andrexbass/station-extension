import { ReactNode } from "react"
import { toAmount } from "@terra.kitchen/utils"

/* animation */
import AnimationRebel from "./Rebel/Broadcasting.png"
import AnimationLight from "./Light/Broadcasting.png"
import AnimationDark from "./Dark/Broadcasting.png"
import AnimationBlossom from "./Blossom/Broadcasting.png"
import AnimationMoon from "./Moon/Broadcasting.png"
import AnimationWhale from "./Whale/Broadcasting.png"
import AnimationMadness from "./Madness/Broadcasting.png"

/* favicon */
import FaviconRebel from "./Rebel/favicon.svg"
import FaviconLight from "./Light/favicon.svg"
import FaviconDark from "./Dark/favicon.svg"
import FaviconBlossom from "./Blossom/favicon.svg"
import FaviconMoon from "./Moon/favicon.svg"
import FaviconWhale from "./Whale/favicon.svg"
import FaviconMadness from "./Madness/favicon.svg"

/* favicon */
import FrontRebel from "./Rebel/Front.png"
import FrontLight from "./Light/Front.png"
import FrontDark from "./Dark/Front.png"
import FrontBlossom from "./Blossom/Front.png"
import FrontMoon from "./Moon/Front.png"
import FrontWhale from "./Whale/Front.png"
import FrontMadness from "./Madness/Front.png"

/* preview */
import { ReactComponent as PreviewRebel } from "./Rebel/preview.svg"
import { ReactComponent as PreviewLight } from "./Light/preview.svg"
import { ReactComponent as PreviewDark } from "./Dark/preview.svg"
import { ReactComponent as PreviewBlossom } from "./Blossom/preview.svg"
import { ReactComponent as PreviewMoon } from "./Moon/preview.svg"
import { ReactComponent as PreviewWhale } from "./Whale/preview.svg"
import { ReactComponent as PreviewMadness } from "./Madness/preview.svg"

export interface Theme {
  name: string
  unlock: Amount
  animation: string
  favicon: string
  front: string
  preview: ReactNode
}

export const themes: Theme[] = [
  {
    name: "rebel",
    unlock: toAmount("0"),
    animation: AnimationRebel,
    favicon: FaviconRebel,
    front: FrontRebel,
    preview: <PreviewRebel />,
  },
  {
    name: "light",
    unlock: toAmount("0"),
    animation: AnimationLight,
    favicon: FaviconLight,
    front: FrontLight,
    preview: <PreviewLight />,
  },
  {
    name: "dark",
    unlock: toAmount("0"),
    animation: AnimationDark,
    favicon: FaviconDark,
    front: FrontDark,
    preview: <PreviewDark />,
  },
  {
    name: "blossom",
    unlock: toAmount("1"),
    animation: AnimationBlossom,
    favicon: FaviconBlossom,
    front: FrontBlossom,
    preview: <PreviewBlossom />,
  },
  {
    name: "moon",
    unlock: toAmount("10"),
    animation: AnimationMoon,
    favicon: FaviconMoon,
    front: FrontMoon,
    preview: <PreviewMoon />,
  },
  {
    name: "whale",
    unlock: toAmount("100"),
    animation: AnimationWhale,
    favicon: FaviconWhale,
    front: FrontWhale,
    preview: <PreviewWhale />,
  },
  {
    name: "madness",
    unlock: toAmount("1000"),
    animation: AnimationMadness,
    favicon: FaviconMadness,
    front: FrontMadness,
    preview: <PreviewMadness />,
  },
]

export default themes
