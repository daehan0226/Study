---
layout: post
title: Elasticsearch_source
categories: ELASTICSEARCH

---




    from elasticsearch import Elasticsearch

    es = Elasticsearch([{'host': '192.168.0.1', 'port': 9200}])

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
        
        # es 에서 from ..transport import Transport
        
        
# transport.perform_request

        def __init__(self, ~ max_retries=3, send_get_body_as="GET",**kwargs):
            ~~~
            self.kwargs = kwargs
            self.max_retries = max_retries
            self.send_get_body_as = send_get_body_as
            ~~~
        
        def perform_request(self, method, url, headers=None, params=None, body=None):
        """
        Perform the actual request. Retrieve a connection from the connection
        pool, pass all the information to it's perform_request method and
        return the data.

        If an exception was raised, mark the connection as failed and retry (up
        to `max_retries` times).

        If the operation was succesful and the connection used was previously
        marked as dead, mark it as live, resetting it's failure count.

        :arg method: HTTP method to use
        :arg url: absolute url (without host) to target
        :arg headers: dictionary of headers, will be handed over to the
            underlying :class:`~elasticsearch.Connection` class
        :arg params: dictionary of query parameters, will be handed over to the
            underlying :class:`~elasticsearch.Connection` class for serialization
        :arg body: body of the request, will be serializes using serializer and
            passed to the connection
        """
        if body is not None:
            body = self.serializer.dumps(body)

            # some clients or environments don't support sending GET with body
            if method in ("HEAD", "GET") and self.send_get_body_as != "GET":
                # send it as post instead
                if self.send_get_body_as == "POST":
                    method = "POST"

                # or as source parameter
                elif self.send_get_body_as == "source":
                    if params is None:
                        params = {}
                    params["source"] = body
                    body = None

        if body is not None:
            try:
                body = body.encode("utf-8", "surrogatepass")
            except (UnicodeDecodeError, AttributeError):
                # bytes/str - no need to re-encode
                pass

        ignore = ()
        timeout = None
        if params:
            timeout = params.pop("request_timeout", None)
            ignore = params.pop("ignore", ())
            if isinstance(ignore, int):
                ignore = (ignore,)
        for attempt in range(self.max_retries + 1):
            connection = self.get_connection()

            try:
                status, headers_response, data = connection.perform_request(
                    method,
                    url,
                    params,
                    body,
                    headers=headers,
                    ignore=ignore,
                    timeout=timeout,
                )

            except TransportError as e:                                ##### 
                if method == "HEAD" and e.status_code == 404:
                    return False

                retry = False
                if isinstance(e, ConnectionTimeout):
                    retry = self.retry_on_timeout
                elif isinstance(e, ConnectionError):
                    retry = True
                elif e.status_code in self.retry_on_status:
                    retry = True

                if retry:
                    # only mark as dead if we are retrying
                    self.mark_dead(connection)
                    # raise exception on last retry
                    if attempt == self.max_retries:
                        raise
                else:
                    raise

            else:
                # connection didn't fail, confirm it's live status
                self.connection_pool.mark_live(connection)

                if method == "HEAD":
                    return 200 <= status < 300

                if data:
                    data = self.deserializer.loads(
                        data, headers_response.get("content-type")
                    )
                return data

