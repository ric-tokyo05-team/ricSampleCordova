import simplejson as json
from bottle import route, run, response, HTTPResponse

@route('/api/test.json')
def index():
    body = json.dumps({"list": ["a", "b", "c"]})
    r = HTTPResponse(status=200, body=body)
    r.set_header('Content-Type', 'application/json')
    r.headers['Access-Control-Allow-Origin'] = '*'
    return r

run(host='localhost', port=8080)
