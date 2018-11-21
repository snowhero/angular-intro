import { ContactInterface } from '../interfaces/contact-interface';

export const CONTACTS: ContactInterface[] = [
  { id: 1, name: 'John Doe', email: 'john@doe.com', phone: '1234567', tags: ['family'], isDeleted: false },
  { id: 2, name: 'Jane Doe', email: 'jane@doe.com', phone: '1234567', tags: ['friend', 'work'], isDeleted: false },
  { id: 3, name: 'Jacob Smith', email: 'jacob@smith.com', phone: '1234567', tags: ['family', 'friend'], isDeleted: false },
  { id: 4, name: 'Suzy Smith', email: 'suzy@smith.com', phone: '1234567', tags: ['work'], isDeleted: false },
  { id: 5, name: 'Will Johnson', email: 'will@johnson.com', phone: '1234567', tags: ['work', 'family'], isDeleted: false },
  { id: 6, name: 'Jeff Nelson', email: 'jeff@nelson.com', phone: '1234567', tags: ['work', 'family', 'friend'], isDeleted: false },
  { id: 7, name: 'Mark Nelson', email: 'mark@nelson.com', phone: '1234567', tags: ['friend'], isDeleted: false },
  { id: 8, name: 'Luke Johnson', email: 'luke@johnson.com', phone: '1234567', tags: ['family', 'friend'], isDeleted: false },
  { id: 9, name: 'Chuck Smith', email: 'chucj@smith.com', phone: '1234567', tags: ['work'], isDeleted: false },
  { id: 10, name: 'Sara Doe', email: 'sara@doe.com', phone: '1234567', tags: ['friend'], isDeleted: false }
];