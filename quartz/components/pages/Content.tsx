import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>{content}</article>
}

Content.afterDOMLoaded = `
  window.setInterval(function() {
    var iframes = document.querySelectorAll("iframe.demo");
    for( var i = 0; i < iframes.length; i++) {
        iframes[i].width  = iframes[i].contentWindow.document.body.scrollWidth;
        iframes[i].height = iframes[i].contentWindow.document.body.scrollHeight;
    }
  }, 1000);
`

export default (() => Content) satisfies QuartzComponentConstructor
