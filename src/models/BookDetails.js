class BookDetails {
  kind;
  id;
  etag;

  title;
  subtitle;
  authors; // array
  publisher;
  language;
  publishedDate;
  description;
  pageCount;
  categories;

  isEbook;
  epub; // object is available  bool, link
  pdf; // object , bool and link

  viewability;
  textToSpeechPermission;

  previewLink; // link to read
  infoLink;

  constructor(
    kind,
    id,
    etag,
    title,
    subtitle,
    authors,
    publishedDate,
    publisher,
    language,
    description,
    pageCount,
    categories,
    isEbook,
    epub,
    pdf,
    viewability,
    textToSpeechPermission,
    previewLink,
    infoLink
  ) {
    this.kind = kind;
    this.id = id;
    this.etag = etag;
    this.title =title;
    this.subtitle = subtitle;
    this.authors = [...authors];
    this.publishedDate = publishedDate;
    this.publisher = publisher;
    this.language = language;
    this.description = description;
    this.pageCount = pageCount;
    this.categories = [...categories];
    this.isEbook = isEbook;
    this.epub = {isAvailable : epub.isAvailable ,acsTokenLink: epub.acsTokenLink};
    this.pdf = {isAvailable : pdf.isAvailable ,acsTokenLink: pdf.acsTokenLink};
    this.viewability = viewability;
    this.textToSpeechPermission = textToSpeechPermission;
    this.previewLink = previewLink;
    this.infoLink = infoLink;
  }
}

export default BookDetails;
