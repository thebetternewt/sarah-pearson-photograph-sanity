// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import accessibleImage from './accessibleImage'
// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import gallery from './gallery'
import tag from './tag'
import galleryImage from './galleryImage'
import pages from './pages'
import post from './post'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    category,
    tag,
    gallery,
    galleryImage,
    accessibleImage,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    ...pages,
  ]),
})
