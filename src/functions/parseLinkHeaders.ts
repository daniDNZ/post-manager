export default function parseLinkHeaders(linkHeaders: string) {
  const linksSplit = linkHeaders.split(', ');
  const reqLinks = {
    first: 0,
    next: 0,
    prev: 0,
    last: 0,
  };
  linksSplit.forEach((splittedLink => {
    const linkDivided = splittedLink.split('; ');
    const rel = linkDivided[1];
    const link = linkDivided[0].replaceAll('<', '').replaceAll('>', '');
    const pageNumber = Number(link.split('_page=')[1].split('&')[0]);
    switch (rel) {
      case 'rel="first"':
        reqLinks.first = pageNumber;
        break;
      case 'rel="next"':
        reqLinks.next = pageNumber;
        break;
      case 'rel="prev"':
        reqLinks.prev = pageNumber;
        break;
      case 'rel="last"':
        reqLinks.last = pageNumber;
        break;
      default:
        break;
    }
  }))

  return reqLinks;
}