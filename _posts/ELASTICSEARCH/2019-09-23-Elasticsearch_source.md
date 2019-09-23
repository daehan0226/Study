---
layout: post
title: Elasticsearch_source
categories: ELASTICSEARCH

---




    indexes = ["index"]

    for index in indexes:
        query = {"size": 1,
                 "from" : 5,
                 "query":
                     {"bool":
                          {"must":
                               {"exists": {"field": analyzer}}
                           }
                      }
                 }

        result = es.search(body=query, index=index) # , params={"from_" : 5})  // same as "from" : 5 in query
        #print(result)

        # Returns True if the cluster is up( or exists), False otherwise.
        # transport.perform_request("HEAD", "/", params=params)
        result_ping = es.ping()
        print(result_ping)
        # True / False

        # Get the basic info from the current cluster.
        # transport.perform_request("GET", "/", params=params)
        result_info = es.info()
        print(result_info)

        # Adds or updates a typed JSON document in a specific index, making it searchable.
        # es.index(index, body=typed JSON document, doc_type="_doc", id=None, params=Noe)
        # transport.perform_request("POST", _make_path(index, doc_type, id), params=params, body=body)

        # Returns a boolean indicating whether or not given document exists in Elasticsearch.
        # transport.perform_request("HEAD", _make_path(index, doc_type, id), params=params)
        result_exists = es.exists(index="index", id="id", doc_type="doc_")
        print(result_exists)
        # True / False

