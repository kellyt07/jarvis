import flask
import flask_restful
from flask import Flask
from flask_restful import Resource, Api, reqparse

from jarvis import Jarvis

app = Flask(__name__)
api = Api(app)

class GetKeyWords(Resource):
    def get(self):
        text = ("A Chinese intelligence ship was tracked off Australia's west coast within 50 nautical miles of a sensitive defence facility, Australia said on Friday, raising concern amid an election campaign about China's behaviour in the region."
                "Prime Minister Scott Morrison said the Chinese navy vessel was not in Australian territorial waters but its presence was 'concerning'."
                "'It is clearly an intelligence ship and they are looking at us and we're keeping a close eye on them,' he told reporters.'")
        return Jarvis.getKeyWords(text)
    pass

class GetKeyWordsHtml(Resource):
    def get(self):
        text = ("A Chinese intelligence ship was tracked off Australia's west coast within 50 nautical miles of a sensitive defence facility, Australia said on Friday, raising concern amid an election campaign about China's behaviour in the region."
                "Prime Minister Scott Morrison said the Chinese navy vessel was not in Australian territorial waters but its presence was 'concerning'."
                "'It is clearly an intelligence ship and they are looking at us and we're keeping a close eye on them,' he told reporters.'")
        return Jarvis.getKeyWordsHtml(text)

api.add_resource(GetKeyWords, '/jarvis/getkeywords')
api.add_resource(GetKeyWordsHtml, '/jarvis/getkeywordshtml')

if __name__ == '__main__':
    app.run()
