import S from '@sanity/desk-tool/structure-builder'

const hiddenTypes = ['homepage', 'weddingsPage']

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .child(
          S.editor()
            .id('homepage')
            .schemaType('homepage')
            .documentId('homepage')
        ),
      S.listItem()
        .title('Weddings Page')
        .child(
          S.editor()
            .id('weddingsPage')
            .schemaType('weddingsPage')
            .documentId('weddingsPage')
        ),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId())),
    ])
