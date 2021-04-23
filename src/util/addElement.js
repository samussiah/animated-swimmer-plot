export default function addElement(name, parent, tagName = 'div', data = null, id = (d, i) => i) {
    return data
        ? parent
              .selectAll(`${tagName}.asp-${name}.asp-${tagName}`)
              .data(data, id)
              .join(tagName)
              .classed(`asp-${name} asp-${tagName}`, true) // multiple elements
        : parent.append(tagName).classed(`asp-${name} asp-${tagName}`, true); // single element
}
