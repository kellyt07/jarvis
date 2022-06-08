import flask
import flask_restful
from flask import Flask
from flask_restful import Resource, Api, reqparse

from jarvis import Jarvis

app = Flask(__name__)
api = Api(app)

class GetEntities(Resource):
    #methods go here
    def get(self):
        text = ("A Chinese intelligence ship was tracked off Australia's west coast within 50 nautical miles of a sensitive defence facility, Australia said on Friday, raising concern amid an election campaign about China's behaviour in the region."
                "Prime Minister Scott Morrison said the Chinese navy vessel was not in Australian territorial waters but its presence was 'concerning'."
                "'It is clearly an intelligence ship and they are looking at us and we're keeping a close eye on them,' he told reporters.'")
        return Jarvis.getWords(text)
    pass

api.add_resource(GetEntities, '/jarvis')

if __name__ == '__main__':
    app.run()
