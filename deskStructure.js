import S from '@sanity/desk-tool/structure-builder';
import { FaChevronRight, FaRegImages } from 'react-icons/fa';
import { TiPin } from 'react-icons/ti';

const hiddenTypes = [
  'post',
  'gallery',
  'weddingsPage',
  'maternityPage',
  'birthStoriesPage',
  'newbornPage',
  'familiesPage',
  'seniorsPage',
];

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId())),
      S.listItem()
        .icon(TiPin)
        .title('Posts')
        .child(
          S.documentTypeList('post')
          // .defaultOrdering([{field: 'popularity', direction: 'desc'}])
        ),
      S.listItem()
        .icon(FaRegImages)
        .title('Galleries')
        .child(
          S.documentTypeList('gallery')
          // .defaultOrdering([{field: 'popularity', direction: 'desc'}])
        ),
      S.listItem()
        .icon(FaChevronRight)
        .title('Weddings Page')
        .child(
          S.editor()
            .id('weddingsPage')
            .schemaType('weddingsPage')
            .documentId('weddingsPage')
            .title('Edit Weddings Page')
        ),
      S.listItem()
        .icon(FaChevronRight)
        .title('Maternity Page')
        .child(
          S.editor()
            .id('maternityPage')
            .schemaType('maternityPage')
            .documentId('maternityPage')
            .title('Edit Maternity Page')
        ),
      S.listItem()
        .icon(FaChevronRight)
        .title('Birth Stories Page')
        .child(
          S.editor()
            .id('birthStoriesPage')
            .schemaType('birthStoriesPage')
            .documentId('birthStoriesPage')
            .title('Edit Birth Stories Page')
        ),
      S.listItem()
        .icon(FaChevronRight)
        .title('Newborn Page')
        .child(
          S.editor()
            .id('newbornPage')
            .schemaType('newbornPage')
            .documentId('newbornPage')
            .title('Edit Newborn Page')
        ),
      S.listItem()
        .icon(FaChevronRight)
        .title('Families Page')
        .child(
          S.editor()
            .id('familiesPage')
            .schemaType('familiesPage')
            .documentId('familiesPage')
            .title('Edit Families Page')
        ),
      S.listItem()
        .icon(FaChevronRight)
        .title('Seniors Page')
        .child(
          S.editor()
            .id('seniorsPage')
            .schemaType('seniorsPage')
            .documentId('seniorsPage')
            .title('Edit Seniors Page')
        ),
    ]);
