const path = require('path')

// The directory where all files for this content type will go.
const root = 'entries'

function sys(root, data) {

    const fileName = path.join(root,  'fields.json')

    const fields = {}
    fields.createdAt = data.sys.createdAt
    fields.updatedAt = data.sys.updatedAt
    fields.environment = data.sys.environment.sys.id
    fields.publishedVersion = data.sys.publishedVersion
    fields.publishedAt = data.sys.publishedAt
    fields.firstPublishedAt = data.sys.firstPublishedAt
    fields.createdBy = data.sys.createdBy.sys.id
    fields.updatedBy = data.sys.updatedBy.sys.id
    fields.publishedCounter = data.sys.publishedCounter
    fields.version = data.sys.version
    fields.publishedBy = data.sys.publishedBy.sys.id
    fields.contentType = contentType

    output[fileName] = fields

    return output
}