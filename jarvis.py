import spacy
from spacy import displacy

class Jarvis:
    def __init__(self, text):
        self.text = text

    def getWords(text):
        # Load the English tokenizer, tagger, parser and NER
        nlp = spacy.load("en_core_web_sm")

        doc = nlp(text)

        # initialise dictionary that will be passed back
        words = {}

        for word in doc.ents:
            words[word.text] = word.label_
            print (word.text, word.label_)

        return words

#print(displacy.render(text, style="ent", jupyter=True))

#displacy.serve(text, style="ent")