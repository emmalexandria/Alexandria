
import { createIcons, Link } from "lucide"

export function build_headings() {
  let root = document.querySelector("article.link-headings");

  if (root == null) {
    return
  }

  const headings = root.querySelectorAll('h2, h3, h4, h5, h6');

  headings.forEach((heading) => {
    const id = heading.id;
    if (!id) {
      console.warn(`Heading "${heading.outerHTML}" does not have an id. Skipping.`);
      return;
    }

    // Create an <a> element
    if (heading.parentElement != null && heading.parentElement.tagName == "A") {
      let link = heading.parentElement as HTMLAnchorElement;
      if (link.href = `#${id}`) {
        console.warn(`Heading "${heading.outerHTML}" already has an <a> parent with href = #${id}, skipping`);
        return;
      }
    }

    const icon = document.createElement('i')
    icon.setAttribute('data-lucide', 'link');
    const anchor = document.createElement('a');
    anchor.appendChild(icon);
    anchor.href = `#${id}`;
    anchor.classList.add('heading-link');
    // Move the heading's content into the <a> element
    while (heading.firstChild) {
      anchor.appendChild(heading.firstChild);
    }


    heading.appendChild(anchor);
  });
  // Append the <a> element back into the heading

  createIcons({
    icons: {
      Link
    }
  })
}

build_headings()




