// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import darkmodeScript from "./scripts/darkmode.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = clipboardScript
Body.beforeDOMLoaded = darkmodeScript
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
