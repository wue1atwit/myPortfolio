export class MessageDef {
  id: Number;
  date: Date;
  subject: String;
  hasAttachment: Boolean;
  files: Array<Object> = [];
  message: String;

  constructor(
    id: Number,
    date: Date,
    subject: String,
    hasAttachment: Boolean,
    files: Array<Object>,
    message: String
  ) {
    this.id = id;
    this.date = date;
    this.subject = subject;
    this.hasAttachment = hasAttachment;
    this.files = files.length > 0 ? [...files] : [];
    this.message = message;
  }
}
