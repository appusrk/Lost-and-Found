from flask import Flask, request, jsonify
import imagehash
from PIL import Image
import requests
from io import BytesIO
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import mysql.connector

app = Flask(__name__)

# MySQL connection settings
db_config = {
    "host": "localhost",
    "user": "your_mysql_user",
    "password": "your_mysql_password",
    "database": "lost_and_found"
}

def get_found_items():
    """Fetch all found items from the DB"""
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id, itemName, description FROM found_items")
    items = cursor.fetchall()
    cursor.close()
    conn.close()
    return items

@app.route("/match", methods=["POST"])
def match_item():
    data = request.json
    item_name = data.get("itemName", "")
    description = data.get("description", "")
    image_url = data.get("imageUrl", None)

    # Compute image hash if URL exists
    if image_url:
        try:
            response = requests.get(f"http://localhost:8080{image_url}")
            img = Image.open(BytesIO(response.content))
            img_hash = str(imagehash.phash(img))
        except:
            img_hash = None
    else:
        img_hash = None

    # Fetch found items from DB
    found_items = get_found_items()

    # Text similarity
    corpus = [f"{f['itemName']} {f['description']}" for f in found_items]
    corpus.append(f"{item_name} {description}")  # lost item last
    vectorizer = TfidfVectorizer().fit_transform(corpus)
    sims = cosine_similarity(vectorizer[-1], vectorizer[:-1])[0]

    matches = []
    for idx, sim in enumerate(sims):
        if sim > 0.2:  # adjust threshold
            match = found_items[idx].copy()
            match['similarity'] = float(sim)
            matches.append(match)

    return jsonify(matches)

if __name__ == "__main__":
    app.run(port=5000)
