import ThumbService    from "../components/thumbs/ThumbService"
import ThumbMemory     from "../components/thumbs/ThumbMemory"
import ThumbEcommerce  from "../components/thumbs/ThumbEcommerce"
import ThumbAnalytics  from "../components/thumbs/ThumbAnalytics"

const designs = [
  {
    id:    "1",
    num:   "Design 01",
    title: "Service Website",
    desc:  "A clean, accessible site for a local service business focused on trust, clarity, and booking flow.",
    Thumb: ThumbService,
    bg:    "rgba(79,156,249,0.06)",
  },
  {
    id:    "2",
    num:   "Design 02",
    title: "Memory Game",
    desc:  "An interactive card-matching game (jeu de memoire) with smooth state transitions and score tracking.",
    Thumb: ThumbMemory,
    bg:    "rgba(79,156,249,0.06)",
  },
  {
    id:    "3",
    num:   "Design 03",
    title: "E-Commerce Platform",
    desc:  "A full shopping experience with a product grid, filters, cart, and a streamlined checkout.",
    Thumb: ThumbEcommerce,
    bg:    "rgba(167,139,250,0.06)",
  },
  {
    id:    "4",
    num:   "Design 04",
    title: "Analytics Dashboard",
    desc:  "A data visualization dashboard with charts, KPI tiles, and interactive filters.",
    Thumb: ThumbAnalytics,
    bg:    "rgba(74,222,128,0.05)",
  },
]

export default designs
