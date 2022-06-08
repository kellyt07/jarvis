import flask
import flask_restful
from flask import Flask, request
from flask_restful import Resource, Api
from jarvis import Jarvis

app = Flask(__name__)
api = Api(app)

class GetKeyWords(Resource):
    def get(self):
        return Jarvis.getKeyWords(request.args.get("text"))
    pass

class GetKeyWordsHtml(Resource):
    def get(self):
        return Jarvis.getKeyWordsHtml(request.args.get("text"))

api.add_resource(GetKeyWords, '/jarvis/getkeywords')
api.add_resource(GetKeyWordsHtml, '/jarvis/getkeywordshtml')

if __name__ == '__main__':
    app.run()
