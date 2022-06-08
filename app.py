import flask
import flask_restful
from flask import Flask, request
from flask_restful import Resource, Api
from jarvis import Jarvis

app = Flask(__name__)
# cors = CORS(app, resources={r"/jarvis/*": {"origins": "*"}})
api = Api(app)

class GetKeyWords(Resource):
    def get(self):
        response = flask.jsonify(Jarvis.getKeyWords(request.args.get("text")))
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

class GetKeyWordsHtml(Resource):
    def get(self):
        response = flask.jsonify(Jarvis.getKeyWordsHtml(request.args.get("text")))
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

api.add_resource(GetKeyWords, '/jarvis/getkeywords')
api.add_resource(GetKeyWordsHtml, '/jarvis/getkeywordshtml')

if __name__ == '__main__':
    app.run()
