import requests
import json
import time

import keys

app_id = keys.APP_ID
app_key = keys.APP_KEY
language = 'en'
words = []

out_file = open("oxford_generator.out", "w")
print("[", file=out_file)
with open("hard_words.txt", "r") as in_file:
    for word_id in in_file:
        word_id = word_id.rstrip().capitalize()
        url = 'https://od-api.oxforddictionaries.com:443/api/v2/entries/' + \
            language + '/' + word_id.lower()

        # url Normalized frequency
        urlFR = 'https://od-api.oxforddictionaries.com:443/api/v2/stats/frequency/word/' + \
            language + '/?corpus=nmc&lemma=' + word_id.lower()

        r = requests.get(url, headers={'app_id': app_id, 'app_key': app_key})

        # print(json.dumps(r.json(), indent=4, sort_keys=True))
        try:
            definition = (r.json()["results"][0]["lexicalEntries"][0]
                          ["entries"][0]["senses"][0]["definitions"][0].capitalize())
            part_of_speech = r.json(
            )["results"][0]["lexicalEntries"][0]["lexicalCategory"]["text"].capitalize()
            example = (r.json()["results"][0]["lexicalEntries"][0]["entries"][0]["senses"][0]
                       ["examples"][0]["text"].capitalize().replace(r.json()["results"][0]["id"], "______"))
            if "______ed" in example:
                example = example.replace("______ed", "______")
            elif "______s" in example:
                example = example.replace("______s", "______")
        except:
            definition = None
            part_of_speech = None
            example = None
            print("Error getting", word_id)

        if definition is not None and part_of_speech is not None and example is not None:
            item = {"word": word_id, "definition": definition,
                    "sentence": example, "partOfSpeech": part_of_speech}
            print("%s," % item, file=out_file)

        time.sleep(1)

print("]", file=out_file)
out_file.close()
