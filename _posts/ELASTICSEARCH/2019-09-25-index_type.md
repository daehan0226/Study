---
layout: post
title: index-type
categories: ELASTICSEARCH

---



* two types in one index
* This was a bad analogy that led to incorrect assumptions. In an SQL database, tables are independent of each other. The columns in one table have no bearing on columns with the same name in another table. This is not the case for fields in a mapping type.

* In an Elasticsearch index, fields that have the same name in different mapping types are backed by the same Lucene field internally. In other words, using the example above, the user_name field in the user type is stored in exactly the same field as the user_name field in the tweet type, and both user_name fields must have the same mapping (definition) in both types.

* This can lead to frustration when, for example, you want deleted to be a date field in one type and a boolean field in another type in the same index.


* Have an index per document type

* This approach has two benefits:
  * Data is more likely to be dense and so benefit from compression techniques used in Lucene.
  * The term statistics used for scoring in full text search are more likely to be accurate because all documents in the same index represent a single entity.
