import spacy
from spacy import displacy

class Jarvis:
    def __init__(self, text):
        self.text = text

    def getKeyWords(text):
        # Load the English tokenizer, tagger, parser and NER
        nlp = spacy.load("en_core_web_sm")
        doc = nlp(text)

        # initialise dictionary that will be passed back
        words = {}
        # Add word and its label/explaination to dict
        for word in doc.ents:
            words[word.text] = word.label_ + " - " + spacy.explain(word.label_)
            print(word)
        return words

    def getKeyWordsHtml(text):
        # Load the English tokenizer, tagger, parser and NER
        nlp = spacy.load("en_core_web_sm")
        doc = nlp(text)

        return displacy.render(doc, style="ent")