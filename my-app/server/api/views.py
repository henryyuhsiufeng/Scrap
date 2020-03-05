from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/scrape',methods=['GET'])
def get_scrape():

        food = ['pizza','soda']
        return jsonify({'food' : food})