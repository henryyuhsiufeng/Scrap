from flask import Blueprint, jsonify
from .scrape import scrapeUTCS

main = Blueprint('main', __name__)

@main.route('/scrape',methods=['GET'])
def get_scrape():
        events = scrapeUTCS()
        return jsonify({'events' : events})

# from scrape import scrapeUTCS

# print(scrapeUTCS())