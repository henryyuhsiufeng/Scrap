from flask import Blueprint, jsonify
from .scrape import scrapeUTCS

main = Blueprint('main', __name__)

@main.route('/scrape',methods=['GET'])
def get_scrape():
        food = ['asdf']
        food = scrapeUTCS()
        return jsonify({'food' : food})

# from scrape import scrapeUTCS

# print(scrapeUTCS())